import * as vscode from "vscode";
import { buildStory, find_node_at_position } from "./compiler.js";

/** @type {Map<string, any>} */
const documentASTs = new Map();

/** @type {vscode.Disposable[]} */
const disposables = [];

/** @type {vscode.DiagnosticCollection} */
let diagnosticCollection;

export function activate(context) {
  console.log("Ink extension activated - Direct Compiler Mode");

  // 创建诊断集合
  diagnosticCollection = vscode.languages.createDiagnosticCollection(
    "ink-lang",
  );
  disposables.push(diagnosticCollection);

  // 注册 Go to Definition (Ctrl+Click / F12)
  const definitionProvider = vscode.languages.registerDefinitionProvider(
    "ink",
    {
      provideDefinition(document, position, token) {
        return getDefinition(document, position, token);
      },
    },
  );
  disposables.push(definitionProvider);

  // 注册 Find All References (Shift+F12)
  const referenceProvider = vscode.languages.registerReferenceProvider(
    "ink",
    {
      provideReferences(document, position, context, token) {
        return getReferences(document, position, context, token);
      },
    },
  );
  disposables.push(referenceProvider);

  // 注册 Hover (鼠标悬停)
  const hoverProvider = vscode.languages.registerHoverProvider("ink", {
    provideHover(document, position, token) {
      return getHover(document, position, token);
    },
  });
  disposables.push(hoverProvider);

  // 注册 Ink: Refresh AST Cache 命令
  const refreshCommand = vscode.commands.registerCommand(
    "ink.refreshAST",
    async () => {
      documentASTs.clear();
      diagnosticCollection.clear();

      for (const doc of vscode.workspace.textDocuments) {
        if (doc.languageId === "ink") {
          await updateDiagnostics(doc);
        }
      }

      vscode.window.showInformationMessage("Ink AST cache refreshed");
    },
  );
  disposables.push(refreshCommand);

  // 监听文档变化，触发诊断更新和缓存失效
  const docWatcher = vscode.workspace.onDidChangeTextDocument((e) => {
    if (e.document.languageId === "ink") {
      invalidateAST(e.document.uri.toString());
      updateDiagnostics(e.document);
    }
  });
  disposables.push(docWatcher);

  // 监听文档打开
  const openWatcher = vscode.workspace.onDidOpenTextDocument((doc) => {
    if (doc.languageId === "ink") {
      updateDiagnostics(doc);
    }
  });
  disposables.push(openWatcher);

  // 监听文档保存
  const saveWatcher = vscode.workspace.onDidSaveTextDocument((doc) => {
    if (doc.languageId === "ink") {
      invalidateAST(doc.uri.toString());
    }
  });
  disposables.push(saveWatcher);

  // 监听文档关闭，清理缓存
  const closeWatcher = vscode.workspace.onDidCloseTextDocument((doc) => {
    if (doc.languageId === "ink") {
      documentASTs.delete(doc.uri.toString());
    }
  });
  disposables.push(closeWatcher);

  // 初始化已打开的 ink 文档
  vscode.workspace.textDocuments.forEach((doc) => {
    if (doc.languageId === "ink") {
      updateDiagnostics(doc);
    }
  });

  context.subscriptions.push(...disposables);
}

/**
 * Go to Definition: 跳转到 Knot/Stitch 定义
 */
async function getDefinition(document, position, _token) {
  const filePath = document.uri.fsPath;

  // 获取或构建 AST
  const ast = await ensureAST(document.uri.toString(), filePath);
  if (!ast || ast instanceof Error) return null;

  // 查找当前光标位置的节点
  const node = find_node_at_position(ast, filePath, position.line + 1);
  if (!node) return null;

  let targetName = null;

  // 如果光标在 Divert 上，获取目标名称
  if (node.type === "Divert") {
    targetName = node.target;
  } // 如果光标在 Knot 或 Stitch 定义上，跳转到自身
  else if (node.type === "Knot" || node.type === "Stitch") {
    return new vscode.Location(document.uri, getDefinitionRange(node));
  }

  if (!targetName) return null;

  // 解析目标名称（支持 Knot.Stitch 格式）
  const parts = targetName.split(".");
  let defNode = null;
  let defFile = filePath;

  if (parts.length === 1) {
    // 查找全局 Knot 或局部 Stitch
    for (const [knotName, knot] of Object.entries(ast.knots)) {
      if (knot.file === filePath && knotName === parts[0]) {
        defNode = knot;
        break;
      }
    }

    // 如果没找到，查找 Stitch（可能在任何 Knot 下）
    if (!defNode) {
      for (const [_knotName, knot] of Object.entries(ast.knots)) {
        if (knot.file === filePath) {
          for (const stitch of knot.stitches || []) {
            if (stitch.name === parts[0]) {
              defNode = stitch;
              defFile = knot.file;
              break;
            }
          }
        }
        if (defNode) break;
      }
    }

    // 如果当前文件没找到，尝试在所有已加载的 AST 中查找
    if (!defNode) {
      for (const [uri, loadedAst] of documentASTs) {
        if (uri === document.uri.toString()) continue;

        // 查找 Knot
        for (
          const [knotName, knot] of Object.entries(loadedAst.knots)
        ) {
          if (knotName === parts[0]) {
            defNode = knot;
            defFile = knot.file;
            break;
          }
        }

        // 查找 Stitch
        if (!defNode) {
          for (
            const [_knotName, knot] of Object.entries(
              loadedAst.knots,
            )
          ) {
            for (const stitch of knot.stitches || []) {
              if (stitch.name === parts[0]) {
                defNode = stitch;
                defFile = knot.file;
                break;
              }
            }
            if (defNode) break;
          }
        }

        if (defNode) break;
      }
    }
  } else if (parts.length === 2) {
    // 查找 Knot.Stitch 格式
    const knotName = parts[0];
    const stitchName = parts[1];

    // 首先在当前文件中查找
    const knot = ast.knots[knotName];
    if (knot && knot.file === filePath) {
      for (const stitch of knot.stitches || []) {
        if (stitch.name === stitchName) {
          defNode = stitch;
          defFile = knot.file;
          break;
        }
      }
    }

    // 如果没找到，尝试在所有已加载的 AST 中查找
    if (!defNode) {
      for (const [uri, loadedAst] of documentASTs) {
        if (uri === document.uri.toString()) continue;

        const targetKnot = loadedAst.knots[knotName];
        if (targetKnot) {
          for (const stitch of targetKnot.stitches || []) {
            if (stitch.name === stitchName) {
              defNode = stitch;
              defFile = targetKnot.file;
              break;
            }
          }
        }

        if (defNode) break;
      }
    }
  }

  if (!defNode) return null;

  try {
    const targetDoc = await vscode.workspace.openTextDocument(defFile);
    return new vscode.Location(targetDoc.uri, getDefinitionRange(defNode));
  } catch (error) {
    console.error("Failed to open target file:", error);
    return null;
  }
}

/**
 * 获取定义位置的 Range
 */
function getDefinitionRange(node) {
  if (!node || node.line === undefined) {
    return new vscode.Range(0, 0, 0, 10);
  }

  // AST line 是 1-based，VSCode 是 0-based
  const startLine = Math.max(0, node.line - 1);

  return new vscode.Range(startLine, 0, startLine, 1024);
}

/**
 * Find All References: 查找所有引用点（包括定义本身）
 */
async function getReferences(document, position, _context, _token) {
  const filePath = document.uri.fsPath;

  // 获取当前文档的 AST
  const ast = await ensureAST(document.uri.toString(), filePath);
  if (!ast || ast instanceof Error) return [];

  // 查找当前光标位置的节点
  const node = find_node_at_position(ast, filePath, position.line + 1);
  if (!node) return [];

  // 确定搜索的目标名称
  let searchName = null;
  let searchType = null;

  if (node.type === "Knot") {
    searchName = node.name;
    searchType = "Knot";
  } else if (node.type === "Stitch") {
    // 对于 Stitch，使用 Knot.Stitch 格式作为主要搜索名
    const parentKnot = findParentKnot(ast, node);
    if (parentKnot) {
      searchName = `${parentKnot.name}.${node.name}`;
    } else {
      searchName = node.name;
    }
    searchType = "Stitch";
  } else if (node.type === "Divert") {
    searchName = node.target;
    searchType = "Divert";
  }

  if (!searchName) return [];

  const references = [];

  // 在所有已加载的文档中查找引用（包括定义）
  for (const [uri, loadedAst] of documentASTs) {
    try {
      const doc = await vscode.workspace.openTextDocument(uri);

      // 查找所有 Divert 引用
      const divertRefs = findDivertReferencesInAst(loadedAst, searchName);
      for (const ref of divertRefs) {
        references.push(
          new vscode.Location(doc.uri, getReferenceRange(ref)),
        );
      }

      // 查找定义（Knot/Stitch）
      if (searchType === "Knot" || searchType === "Stitch") {
        const defRef = findDefinitionInAst(
          loadedAst,
          searchName,
          searchType,
        );
        if (defRef) {
          references.push(
            new vscode.Location(doc.uri, getReferenceRange(defRef)),
          );
        }
      }
    } catch (_error) {
      console.warn(`Could not open document: ${uri}`);
    }
  }

  return references;
}

/**
 * 查找父 Knot
 */
function findParentKnot(ast, stitchNode) {
  for (const [_knotName, knot] of Object.entries(ast.knots)) {
    if (knot.stitches && knot.stitches.includes(stitchNode)) {
      return knot;
    }
  }
  return null;
}

/**
 * 在 AST 中查找所有 Divert 引用
 */
function findDivertReferencesInAst(ast, searchName) {
  const results = [];

  function search(node) {
    if (!node || typeof node !== "object") return;

    // 检查 Divert 是否指向目标名称
    if (node.type === "Divert" && node.target === searchName) {
      results.push({ type: "Divert", line: node.line, file: node.file });
    }

    // 递归搜索子节点
    if (Array.isArray(node.content)) {
      for (const child of node.content) search(child);
    }

    if (Array.isArray(node.options)) {
      for (const opt of node.options) {
        if (opt.content) {
          for (const child of opt.content) search(child);
        }
      }
    }

    if (Array.isArray(node.stitches)) {
      for (const stitch of node.stitches) {
        if (stitch.content) {
          for (const child of stitch.content) search(child);
        }
      }
    }
  }

  // 从根内容开始搜索
  if (ast.content) {
    for (const node of ast.content) search(node);
  }

  // 搜索所有 Knot
  for (const [_knotName, knot] of Object.entries(ast.knots)) {
    search(knot);
  }

  return results;
}

/**
 * 在 AST 中查找定义（Knot/Stitch）
 */
function findDefinitionInAst(ast, searchName, searchType) {
  if (searchType === "Knot") {
    const knot = ast.knots[searchName];
    if (knot) {
      return { type: "Knot", line: knot.line, file: knot.file };
    }
  } else if (searchType === "Stitch") {
    // 支持 Knot.Stitch 格式和局部名称搜索
    const parts = searchName.split(".");
    if (parts.length === 2) {
      const knot = ast.knots[parts[0]];
      if (knot && knot.stitches) {
        for (const stitch of knot.stitches) {
          if (stitch.name === parts[1]) {
            return {
              type: "Stitch",
              line: stitch.line,
              file: stitch.file,
            };
          }
        }
      }
    } else {
      // 局部名称搜索
      for (const [_knotName, knot] of Object.entries(ast.knots)) {
        if (knot.stitches) {
          for (const stitch of knot.stitches) {
            if (stitch.name === searchName) {
              return {
                type: "Stitch",
                line: stitch.line,
                file: stitch.file,
              };
            }
          }
        }
      }
    }
  }

  return null;
}

/**
 * 获取引用位置的 Range
 */
function getReferenceRange(ref) {
  if (!ref || ref.line === undefined) {
    return new vscode.Range(0, 0, 0, 10);
  }

  const startLine = Math.max(0, ref.line - 1);
  return new vscode.Range(startLine, 0, startLine, 1024);
}

/**
 * Hover: 悬停提示
 */
async function getHover(document, position, _token) {
  const filePath = document.uri.fsPath;

  // 获取 AST
  const ast = await ensureAST(document.uri.toString(), filePath);
  if (!ast || ast instanceof Error) return null;

  // 查找当前光标位置的节点
  const node = find_node_at_position(ast, filePath, position.line + 1);
  if (!node) return null;

  let markdownContent = "";

  if (node.type === "Knot") {
    markdownContent =
      `**${node.name}**\n\n*Story Knot*\n\n故事的基本单元，包含剧情内容。`;
  } else if (node.type === "Stitch") {
    const parentKnot = findParentKnot(ast, node);
    markdownContent = `*${node.name}* (Stitch)\n\n属于 Knot: **${
      parentKnot ? parentKnot.name : "?"
    }**\n\n*Knot 内的子段落*`;
  } else if (node.type === "Divert") {
    markdownContent = `→ **${node.target}**\n\n*跳转目标*`;
  } else if (node.type === "Option") {
    const choiceText = node.text || "[无文本选项]";
    markdownContent = `*[${choiceText}]*\n\n*选择项*\n\n**Label:** ${
      node.label || "无"
    }`;
  } else if (node.type === "Tag") {
    markdownContent = `# **${node.name}**: ${
      node.value || ""
    }\n\n*标签*\n\n用于标记剧情节点，可在运行时查询。`;
  } else if (node.type === "Text") {
    const preview = node.text.substring(0, 100).replace(/\n/g, " ");
    markdownContent = `**文本内容**:\n\n\`\`\`markdown\n${preview}${
      node.text.length > 100 ? "..." : ""
    }\n\`\`\``;
  } else {
    markdownContent = `**节点类型**: \`${node.type}\``;
  }

  return new vscode.Hover(new vscode.MarkdownString(markdownContent));
}

/**
 * 诊断更新：检查错误和警告
 */
async function updateDiagnostics(document) {
  if (document.languageId !== "ink") return;

  const uri = document.uri.toString();
  const filePath = document.uri.fsPath;

  try {
    // 获取或构建 AST
    const ast = await ensureAST(uri, filePath);
    if (!ast || ast instanceof Error) {
      diagnosticCollection.set(document.uri, []);
      return;
    }

    const diagnostics = [];

    // 检查未定义的目标引用
    checkUndefinedTargets(ast, diagnostics);

    // 将诊断结果发送到 VSCode
    diagnosticCollection.set(document.uri, diagnostics);
  } catch (error) {
    console.error("Diagnostic update failed:", error);
    diagnosticCollection.set(document.uri, []);
  }
}

/**
 * 检查未定义的目标引用（Knot/Stitch）
 */
function checkUndefinedTargets(ast, diagnostics) {
  // 收集所有已定义的 Knot 和 Stitch 名称
  const definedNames = new Set();

  for (const [knotName, knot] of Object.entries(ast.knots)) {
    definedNames.add(knotName);
    if (knot.stitches) {
      for (const stitch of knot.stitches) {
        // 支持 Knot.Stitch 格式引用
        definedNames.add(`${knotName}.${stitch.name}`);
        definedNames.add(stitch.name); // 也允许局部引用
      }
    }
  }

  /**
   * 递归检查节点中的 Divert 引用
   */
  function checkNode(node) {
    if (!node || typeof node !== "object") return;

    if (node.type === "Divert") {
      const targetName = node.target;

      // 跳过特殊目标
      if (targetName === "END" || targetName === "DONE") return;

      // 检查是否已定义
      if (!definedNames.has(targetName)) {
        const line = Math.max(0, node.line - 1);
        diagnostics.push(
          new vscode.Diagnostic(
            new vscode.Range(line, 0, line, 1024),
            `未定义的目标：${targetName}`,
            vscode.DiagnosticSeverity.Warning,
          ),
        );
      }
    }

    // 递归检查子节点
    if (node.content) {
      for (const child of node.content) checkNode(child);
    }

    if (node.options) {
      for (const opt of node.options) {
        if (opt.content) {
          for (const child of opt.content) checkNode(child);
        }
      }
    }

    if (node.stitches) {
      for (const stitch of node.stitches) {
        for (const child of stitch.content || []) checkNode(child);
      }
    }
  }

  // 从根内容开始检查
  if (ast.content) {
    for (const node of ast.content) checkNode(node);
  }
}

/**
 * 确保 AST 已加载，必要时构建新 AST
 */
async function ensureAST(uri, filePath) {
  const cached = documentASTs.get(uri);

  if (!cached) {
    console.log(`Building AST for: ${filePath}`);
    const result = await buildStory(filePath);

    if (result instanceof Error) {
      console.error("AST build failed:", result.message);
      return result;
    }

    documentASTs.set(uri, result);
  }

  return documentASTs.get(uri);
}

/**
 * 使 AST 缓存失效
 */
function invalidateAST(uri) {
  documentASTs.delete(uri);
}

export function deactivate() {
  console.log("Ink extension deactivated");

  // 清理所有订阅者
  for (const disposable of disposables) {
    disposable.dispose();
  }
  disposables.length = 0;

  // 清空 AST 缓存
  documentASTs.clear();

  // 清诊断集合
  if (diagnosticCollection) {
    diagnosticCollection.dispose();
  }
}
