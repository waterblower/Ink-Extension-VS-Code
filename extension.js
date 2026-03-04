// @ts-check
"use strict";

const vscode = require("vscode");
const path = require("path");
const fs = require("fs");

// ---------------------------------------------------------------------------
// Image tag helpers
// ---------------------------------------------------------------------------

const parseImageTag = (line) => {
    const m = line.match(/^[ \t]*#[ \t]*[Ii]mage[ \t]*:[ \t]*(.+?)[ \t]*$/);
    return m ? m[1].trim() : null;
};

const resolveImagePath = (filename, inkFilePath) => {
    const searchRoots = [];

    const workspaceFolders = vscode.workspace.workspaceFolders;
    if (workspaceFolders) {
        for (const folder of workspaceFolders) {
            searchRoots.push(folder.uri.fsPath);
        }
    }
    searchRoots.push(path.dirname(inkFilePath));

    for (const root of searchRoots) {
        const found = findFileRecursive(root, filename);
        if (found) return found;
    }
    return null;
};

const findFileRecursive = (dir, filename) => {
    let entries;
    try {
        entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
        return null;
    }
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            const found = findFileRecursive(fullPath, filename);
            if (found) return found;
        } else if (
            entry.isFile() &&
            entry.name.toLowerCase() === filename.toLowerCase()
        ) {
            return fullPath;
        }
    }
    return null;
};

const getImageTagAtColumn = (lineText, col) => {
    const m = lineText.match(
        /^([ \t]*#[ \t]*[Ii]mage[ \t]*:[ \t]*)(.+?)[ \t]*$/,
    );
    if (!m) return null;
    const startCol = m[1].length;
    const endCol = startCol + m[2].length;
    if (col >= startCol && col <= endCol) {
        return { filename: m[2].trim(), startCol, endCol };
    }
    return null;
};

// ---------------------------------------------------------------------------
// Pure parsing helpers
// ---------------------------------------------------------------------------

const parseDeclaredName = (line) => {
    const knot = line.match(/^={2,}\s*([a-zA-Z_]\w*)\s*(={2,})?\s*$/);
    if (knot) return knot[1];

    const stitch = line.match(/^=(?!=)\s*([a-zA-Z_]\w*)\s*$/);
    if (stitch) return stitch[1];

    return null;
};

const parseDivertTargets = (line) => {
    const results = [];
    const commentIdx = line.indexOf("//");
    const searchIn = commentIdx === -1 ? line : line.slice(0, commentIdx);

    const re = /->[ \t]*([a-zA-Z_][\w.]*)/g;
    let m;
    while ((m = re.exec(searchIn)) !== null) {
        const name = m[1];
        if (name !== "END" && name !== "DONE") {
            results.push({ name, col: m.index + m[0].indexOf(name) });
        }
    }
    return results;
};

const readLines = (filePath) => {
    try {
        return fs.readFileSync(filePath, "utf8").split(/\r?\n/);
    } catch {
        return [];
    }
};

const directIncludes = (filePath) => {
    const dir = path.dirname(filePath);
    return readLines(filePath)
        .flatMap((line) => {
            const m = line.match(/^INCLUDE\s+(.+)$/);
            return m ? [path.resolve(dir, m[1].trim())] : [];
        })
        .filter(fs.existsSync);
};

const collectInkFiles = (rootPath) => {
    const visited = new Set();
    const queue = [rootPath];
    while (queue.length > 0) {
        const current = queue.shift();
        if (visited.has(current)) continue;
        visited.add(current);
        for (const inc of directIncludes(current)) {
            if (!visited.has(inc)) queue.push(inc);
        }
    }
    return visited;
};

const findDeclaration = (name, files) => {
    for (const filePath of files) {
        const lines = readLines(filePath);
        for (let i = 0; i < lines.length; i++) {
            const declared = parseDeclaredName(lines[i].trim());
            if (declared === name) {
                const col = lines[i].indexOf(name);
                const range = new vscode.Range(i, col, i, col + name.length);
                return new vscode.Location(vscode.Uri.file(filePath), range);
            }
        }
    }
    return null;
};

const findReferences = (name, files) => {
    const locations = [];
    for (const filePath of files) {
        const lines = readLines(filePath);
        for (let i = 0; i < lines.length; i++) {
            for (const target of parseDivertTargets(lines[i])) {
                if (target.name === name) {
                    const range = new vscode.Range(
                        i,
                        target.col,
                        i,
                        target.col + name.length,
                    );
                    locations.push(
                        new vscode.Location(vscode.Uri.file(filePath), range),
                    );
                }
            }
        }
    }
    return locations;
};

const findVarDeclaration = (name, files) => {
    let assignmentLoc = null;
    const varRegex = new RegExp(`^\\s*(?:VAR|LIST)\\s+${name}\\b`);
    const tempRegex = new RegExp(`^\\s*~\\s*temp\\s+${name}\\b`);
    const assignRegex = new RegExp(`^\\s*~\\s*${name}\\b\\s*(?:[-+*/%]?=)`);

    for (const filePath of files) {
        const lines = readLines(filePath);
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const commentIdx = line.indexOf("//");
            const searchIn = commentIdx === -1
                ? line
                : line.slice(0, commentIdx);

            if (varRegex.test(searchIn) || tempRegex.test(searchIn)) {
                const col = searchIn.indexOf(name);
                const range = new vscode.Range(i, col, i, col + name.length);
                return new vscode.Location(vscode.Uri.file(filePath), range);
            }

            if (!assignmentLoc && assignRegex.test(searchIn)) {
                const col = searchIn.indexOf(name);
                const range = new vscode.Range(i, col, i, col + name.length);
                assignmentLoc = new vscode.Location(
                    vscode.Uri.file(filePath),
                    range,
                );
            }
        }
    }
    return assignmentLoc;
};

const findVarOccurrences = (name, files) => {
    const locations = [];
    const re = new RegExp(`\\b${name}\\b`, "g");

    for (const filePath of files) {
        const lines = readLines(filePath);
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const commentIdx = line.indexOf("//");
            const searchIn = commentIdx === -1
                ? line
                : line.slice(0, commentIdx);

            if (!searchIn.includes(name)) continue;

            re.lastIndex = 0;
            let m;
            while ((m = re.exec(searchIn)) !== null) {
                const col = m.index;
                let isLogic = false;

                if (/^\s*(?:VAR|LIST)\s/.test(searchIn)) isLogic = true;
                else if (searchIn.lastIndexOf("~", col) !== -1) isLogic = true;
                else {
                    const lastOpen = searchIn.lastIndexOf("{", col);
                    if (lastOpen !== -1) {
                        const nextClose = searchIn.indexOf("}", col);
                        if (nextClose !== -1 && nextClose > lastOpen) {
                            isLogic = true;
                        }
                    }
                }

                if (isLogic) {
                    const range = new vscode.Range(
                        i,
                        col,
                        i,
                        col + name.length,
                    );
                    locations.push(
                        new vscode.Location(vscode.Uri.file(filePath), range),
                    );
                }
            }
        }
    }
    return locations;
};

const getContextInfoAtPosition = (document, position) => {
    const wordRange = document.getWordRangeAtPosition(position, /[a-zA-Z_]\w*/);
    if (!wordRange) return null;

    const word = document.getText(wordRange);
    const lineText = document.lineAt(position.line).text;
    const col = wordRange.start.character;

    const commentIdx = lineText.indexOf("//");
    if (commentIdx !== -1 && col >= commentIdx) return null;

    const declName = parseDeclaredName(lineText);
    if (declName === word) {
        return { type: "declaration", name: word };
    }

    const targets = parseDivertTargets(lineText);
    for (const t of targets) {
        if (col >= t.col && col <= t.col + t.name.length) {
            return { type: "divert", name: word };
        }
    }

    let isLogic = false;
    if (/^\s*(?:VAR|LIST)\s/.test(lineText)) {
        isLogic = true;
    } else if (lineText.lastIndexOf("~", col) !== -1) {
        isLogic = true;
    } else {
        const lastOpen = lineText.lastIndexOf("{", col);
        if (lastOpen !== -1) {
            const nextClose = lineText.indexOf("}", col);
            if (nextClose !== -1 && nextClose > lastOpen) {
                isLogic = true;
            }
        }
    }

    if (isLogic) {
        const keywords = [
            "temp",
            "true",
            "false",
            "and",
            "or",
            "not",
            "return",
            "else",
            "if",
        ];
        if (!keywords.includes(word)) {
            return { type: "variable", name: word };
        }
    }

    return null;
};

const siblingFiles = (docPath) => collectInkFiles(docPath);

// ---------------------------------------------------------------------------
// Auto-Complete (Completion Item Provider)
// ---------------------------------------------------------------------------

/** @type {vscode.CompletionItemProvider} */
const completionProvider = {
    provideCompletionItems(document, position) {
        const linePrefix = document.lineAt(position).text.substr(
            0,
            position.character,
        );

        // Only trigger if we are typing a divert: "->" followed by optional spaces, words, or dots
        if (!linePrefix.match(/->\s*[a-zA-Z0-9_.]*$/)) {
            return undefined;
        }

        const files = siblingFiles(document.fileName);
        const targets = [];
        let currentKnot = null;

        for (const filePath of files) {
            const lines = readLines(filePath);
            const fileName = path.basename(filePath);

            for (let i = 0; i < lines.length; i++) {
                const raw = lines[i];
                const trimmed = raw.trim();

                const knotMatch = trimmed.match(
                    /^={2,}\s*([a-zA-Z_]\w*)\s*(={2,})?\s*$/,
                );
                if (knotMatch) {
                    currentKnot = knotMatch[1];
                    const item = new vscode.CompletionItem(
                        currentKnot,
                        vscode.CompletionItemKind.Function,
                    );
                    item.detail = `Knot (${fileName})`;
                    targets.push(item);
                    continue;
                }

                const stitchMatch = trimmed.match(
                    /^=(?!=)\s*([a-zA-Z_]\w*)\s*$/,
                );
                if (stitchMatch) {
                    const stitchName = stitchMatch[1];

                    // Add just the stitch name (useful if diverting locally)
                    const item = new vscode.CompletionItem(
                        stitchName,
                        vscode.CompletionItemKind.Module,
                    );
                    item.detail = `Stitch (${fileName})`;
                    targets.push(item);

                    // Add the absolute knot.stitch name (useful if diverting globally)
                    if (currentKnot) {
                        const absoluteItem = new vscode.CompletionItem(
                            `${currentKnot}.${stitchName}`,
                            vscode.CompletionItemKind.Module,
                        );
                        absoluteItem.detail =
                            `Stitch in ${currentKnot} (${fileName})`;
                        targets.push(absoluteItem);
                    }
                }
            }
        }

        return targets;
    },
};

// ---------------------------------------------------------------------------
// Providers
// ---------------------------------------------------------------------------

/** @type {vscode.DefinitionProvider} */
const definitionProvider = {
    provideDefinition(document, position) {
        const info = getContextInfoAtPosition(document, position);
        if (!info) return null;

        const files = siblingFiles(document.fileName);

        if (info.type === "divert") {
            return findDeclaration(info.name, files);
        }

        if (info.type === "declaration") {
            const results = [];
            const declLoc = findDeclaration(info.name, files);
            if (declLoc) results.push(declLoc);

            const refs = findReferences(info.name, files);
            results.push(...refs);

            return results.length > 1 ? results : null;
        }

        if (info.type === "variable") {
            const declLoc = findVarDeclaration(info.name, files);
            const results = [];
            if (declLoc) results.push(declLoc);

            let onDeclaration = false;
            if (
                declLoc &&
                declLoc.uri.fsPath === document.fileName &&
                declLoc.range.start.line === position.line
            ) {
                onDeclaration = true;
            }

            if (onDeclaration) {
                const refs = findVarOccurrences(info.name, files);
                for (const r of refs) {
                    if (
                        r.uri.fsPath === declLoc.uri.fsPath &&
                        r.range.start.line === declLoc.range.start.line &&
                        r.range.start.character ===
                            declLoc.range.start.character
                    ) {
                        continue;
                    }
                    results.push(r);
                }
                return results.length > 1 ? results : null;
            }

            return declLoc || null;
        }

        return null;
    },
};

/** @type {vscode.ReferenceProvider} */
const referenceProvider = {
    provideReferences(document, position, _context) {
        const info = getContextInfoAtPosition(document, position);
        if (!info) return null;

        const files = siblingFiles(document.fileName);

        if (info.type === "divert" || info.type === "declaration") {
            return findReferences(info.name, files);
        }

        if (info.type === "variable") {
            return findVarOccurrences(info.name, files);
        }

        return null;
    },
};

/** @type {vscode.DocumentSymbolProvider} */
const symbolProvider = {
    provideDocumentSymbols(document) {
        const symbols = [];
        let currentKnot = null;

        for (let i = 0; i < document.lineCount; i++) {
            const raw = document.lineAt(i).text;
            const trimmed = raw.trim();

            const varMatch = trimmed.match(/^(?:VAR|LIST)\s+([a-zA-Z_]\w*)/);
            if (varMatch) {
                const name = varMatch[1];
                const col = raw.indexOf(name);
                const range = new vscode.Range(i, 0, i, raw.length);
                const selRange = new vscode.Range(i, col, i, col + name.length);
                symbols.push(
                    new vscode.DocumentSymbol(
                        name,
                        "variable",
                        vscode.SymbolKind.Variable,
                        range,
                        selRange,
                    ),
                );
                continue;
            }

            const knotMatch = trimmed.match(
                /^={2,}\s*([a-zA-Z_]\w*)\s*(={2,})?\s*$/,
            );
            if (knotMatch) {
                const name = knotMatch[1];
                const col = raw.indexOf(name);
                const range = new vscode.Range(i, 0, i, raw.length);
                const selRange = new vscode.Range(i, col, i, col + name.length);
                currentKnot = new vscode.DocumentSymbol(
                    name,
                    "knot",
                    vscode.SymbolKind.Namespace,
                    range,
                    selRange,
                );
                symbols.push(currentKnot);
                continue;
            }

            const stitchMatch = trimmed.match(/^=(?!=)\s*([a-zA-Z_]\w*)\s*$/);
            if (stitchMatch) {
                const name = stitchMatch[1];
                const col = raw.indexOf(name);
                const range = new vscode.Range(i, 0, i, raw.length);
                const selRange = new vscode.Range(i, col, i, col + name.length);
                const sym = new vscode.DocumentSymbol(
                    name,
                    "stitch",
                    vscode.SymbolKind.Package,
                    range,
                    selRange,
                );
                if (currentKnot) {
                    currentKnot.children.push(sym);
                } else {
                    symbols.push(sym);
                }
            }
        }

        return symbols;
    },
};

/** @type {vscode.HoverProvider} */
const hoverProvider = {
    provideHover(document, position) {
        const lineText = document.lineAt(position.line).text;
        const col = position.character;

        const imageTag = getImageTagAtColumn(lineText, col);
        if (imageTag) {
            const absPath = resolveImagePath(
                imageTag.filename,
                document.fileName,
            );
            const hoverRange = new vscode.Range(
                position.line,
                imageTag.startCol,
                position.line,
                imageTag.endCol,
            );
            if (absPath) {
                const uri = vscode.Uri.file(absPath);
                const md = new vscode.MarkdownString(
                    `![${imageTag.filename}](${uri.toString()}|height=300)`,
                );
                md.isTrusted = true;
                return new vscode.Hover(md, hoverRange);
            } else {
                const md = new vscode.MarkdownString(
                    `$(warning) Image not found: \`${imageTag.filename}\``,
                );
                md.supportThemeIcons = true;
                return new vscode.Hover(md, hoverRange);
            }
        }

        const info = getContextInfoAtPosition(document, position);
        if (!info || info.type === "declaration") return null;

        const files = siblingFiles(document.fileName);
        let loc = null;

        if (info.type === "divert") {
            loc = findDeclaration(info.name, files);
        } else if (info.type === "variable") {
            loc = findVarDeclaration(info.name, files);
        }

        if (!loc) return null;

        const declLines = readLines(loc.uri.fsPath);
        const declLine = loc.range.start.line;

        const preview = declLines
            .slice(declLine, declLine + 6)
            .join("\n");

        const md = new vscode.MarkdownString();
        md.appendCodeblock(preview, "ink");
        return new vscode.Hover(
            md,
            document.getWordRangeAtPosition(position, /[a-zA-Z_]\w*/),
        );
    },
};

/** @type {vscode.DocumentLinkProvider} */
const imageLinkProvider = {
    provideDocumentLinks(document) {
        const links = [];
        for (let i = 0; i < document.lineCount; i++) {
            const lineText = document.lineAt(i).text;
            const m = lineText.match(
                /^([ \t]*#[ \t]*[Ii]mage[ \t]*:[ \t]*)(.+?)[ \t]*$/,
            );
            if (!m) continue;
            const startCol = m[1].length;
            const endCol = startCol + m[2].length;
            const filename = m[2].trim();
            const absPath = resolveImagePath(filename, document.fileName);
            if (!absPath) continue;
            const range = new vscode.Range(i, startCol, i, endCol);
            const link = new vscode.DocumentLink(
                range,
                vscode.Uri.file(absPath),
            );
            link.tooltip = absPath;
            links.push(link);
        }
        return links;
    },
};

// ---------------------------------------------------------------------------
// Activation
// ---------------------------------------------------------------------------

/**
 * @param {vscode.ExtensionContext} context
 */
const activate = (context) => {
    const INK = { language: "ink" };

    context.subscriptions.push(
        vscode.languages.registerDefinitionProvider(INK, definitionProvider),
        vscode.languages.registerDocumentLinkProvider(INK, imageLinkProvider),
        vscode.languages.registerReferenceProvider(INK, referenceProvider),
        vscode.languages.registerDocumentSymbolProvider(INK, symbolProvider),
        vscode.languages.registerHoverProvider(INK, hoverProvider),
        // The CompletionProvider triggers on '>', ' ', and '.'
        vscode.languages.registerCompletionItemProvider(
            INK,
            completionProvider,
            ">",
            " ",
            ".",
        ),
        vscode.commands.registerCommand("ink.generateAudio", () => {
            console.log("generate audio button clicked");
        }),
    );
};

const deactivate = () => {};

module.exports = { activate, deactivate };
