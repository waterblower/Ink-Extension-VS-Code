// @ts-check
"use strict";

import {
CancellationToken,
    commands,
    CompletionItem,
    CompletionItemKind,
    Disposable,
    DocumentHighlight,
    DocumentHighlightKind,
    DocumentLink,
    DocumentLinkProvider,
    DocumentSymbol,
    FoldingRange,
    FoldingRangeKind,
    Hover,
    languages,
    Location,
    MarkdownString,
    Range,
    SymbolKind,
    TextDocument,
    Uri,
    window,
    workspace,
} from "vscode";
import { basename, dirname, join, resolve } from "path";
import {
    existsSync,
    mkdirSync,
    readdirSync,
    readFileSync,
    writeFileSync,
} from "fs";

const resolveImagePath = (filename: string, inkFilePath: string) => {
    const searchRoots = [];

    const workspaceFolders = workspace.workspaceFolders;
    if (workspaceFolders) {
        for (const folder of workspaceFolders) {
            searchRoots.push(folder.uri.fsPath);
        }
    }
    searchRoots.push(dirname(inkFilePath));

    for (const root of searchRoots) {
        const found = findFileRecursive(root, filename);
        if (found) return found;
    }
    return null;
};

const findFileRecursive = (dir: string, filename: string): string | null => {
    try {
        const entries = readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
            const fullPath = join(dir, entry.name);
            if (entry.isDirectory()) {
                const found = findFileRecursive(fullPath, filename);
                if (found) {
                    return found;
                }
            } else if (
                entry.isFile() &&
                entry.name.toLowerCase() === filename.toLowerCase()
            ) {
                return fullPath;
            }
        }
        return null;
    } catch {
        return null;
    }

};

const getImageTagAtColumn = (lineText: string, col: number) => {
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

const parseDeclaredName = (line: string) => {
    const knot = line.match(/^={2,}\s*([a-zA-Z_]\w*)\s*(={2,})?\s*$/);
    if (knot) return knot[1];

    const stitch = line.match(/^=(?!=)\s*([a-zA-Z_]\w*)\s*$/);
    if (stitch) return stitch[1];

    return null;
};

const parseDivertTargets = (line: string) => {
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

const readLines = (filePath: string) => {
    try {
        return readFileSync(filePath, "utf8").split(/\r?\n/);
    } catch {
        return [];
    }
};

const directIncludes = (filePath: string) => {
    const dir = dirname(filePath);
    return readLines(filePath)
        .flatMap((line) => {
            const m = line.match(/^INCLUDE\s+(.+)$/);
            return m ? [resolve(dir, m[1].trim())] : [];
        })
        .filter(existsSync);
};

/**
 * Find the root ink file in the same directory — the one not INCLUDEd by any
 * other .ink file in that directory. Falls back to `docPath` if none found.
 */
const findRootInkFile = (docPath: string) => {
    const dir = dirname(docPath);
    let siblings;
    try {
        siblings = readdirSync(dir)
            .filter((f) => f.endsWith(".ink"))
            .map((f) => join(dir, f))
            .filter(existsSync);
    } catch {
        return docPath;
    }

    // Build a set of all files that are INCLUDEd by someone
    const included = new Set();
    for (const f of siblings) {
        for (const inc of directIncludes(f)) {
            included.add(inc);
        }
    }

    // The root is a sibling that nobody includes
    const roots = siblings.filter((f) => !included.has(f));

    // Prefer the root that transitively includes docPath; otherwise first root
    for (const root of roots) {
        if (collectInkFiles(root).has(docPath)) return root;
    }
    return roots[0] || docPath;
};

const collectInkFiles = (rootPath: string) => {
    const visited = new Set();
    const queue = [rootPath];
    while (queue.length > 0) {
        const current = queue.shift();
        if (visited.has(current)) {
            continue;
        }
        visited.add(current);
        for (const inc of directIncludes(current)) {
            if (!visited.has(inc)) queue.push(inc);
        }
    }
    return visited;
};

const findDeclaration = (name: string | any[] | null, files: Set<unknown>) => {
    for (const filePath of files) {
        const lines = readLines(filePath);
        for (let i = 0; i < lines.length; i++) {
            const declared = parseDeclaredName(lines[i].trim());
            if (declared === name) {
                const col = lines[i].indexOf(name);
                const range = new Range(i, col, i, col + name.length);
                return new Location(Uri.file(filePath), range);
            }
        }
    }
    return null;
};

const findReferences = (name: string | any[], files: Set<unknown>) => {
    const locations = [];
    for (const filePath of files) {
        const lines = readLines(filePath);
        for (let i = 0; i < lines.length; i++) {
            for (const target of parseDivertTargets(lines[i])) {
                // Match exact name OR dotted suffix (e.g. "knot.stitch" matches "stitch")
                const exactMatch = target.name === name;
                const dottedMatch = !exactMatch &&
                    target.name.endsWith("." + name);

                if (exactMatch || dottedMatch) {
                    // For dotted matches the highlighted span starts after the last dot
                    const offsetInTarget = dottedMatch
                        ? target.name.lastIndexOf("." + name) + 1
                        : 0;
                    const col = target.col + offsetInTarget;
                    const range = new Range(
                        i,
                        col,
                        i,
                        col + name.length,
                    );
                    locations.push(
                        new Location(Uri.file(filePath), range),
                    );
                }
            }
        }
    }
    return locations;
};

const findVarDeclaration = (name: string | any[], files: Set<unknown>) => {
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
                const range = new Range(i, col, i, col + name.length);
                return new Location(Uri.file(filePath), range);
            }

            if (!assignmentLoc && assignRegex.test(searchIn)) {
                const col = searchIn.indexOf(name);
                const range = new Range(i, col, i, col + name.length);
                assignmentLoc = new Location(
                    Uri.file(filePath),
                    range,
                );
            }
        }
    }
    return assignmentLoc;
};

const findVarOccurrences = (name: string | any[], files: Set<unknown>) => {
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
                    const range = new Range(
                        i,
                        col,
                        i,
                        col + name.length,
                    );
                    locations.push(
                        new Location(Uri.file(filePath), range),
                    );
                }
            }
        }
    }
    return locations;
};

const getContextInfoAtPosition = (document: { getWordRangeAtPosition: (arg0: any, arg1: RegExp) => any; getText: (arg0: any) => any; lineAt: (arg0: any) => { (): any; new(): any; text: any; }; }, position: { line: any; }) => {
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

const siblingFiles = (docPath: any) => collectInkFiles(findRootInkFile(docPath));

// ---------------------------------------------------------------------------
// Auto-Complete (Completion Item Provider)
// ---------------------------------------------------------------------------

/** @type {vscode.CompletionItemProvider} */
const completionProvider = {
    provideCompletionItems(document: { lineAt: (arg0: any) => { (): any; new(): any; text: string; }; fileName: any; }, position: { character: any; }) {
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
            const fileName = basename(filePath);

            for (let i = 0; i < lines.length; i++) {
                const raw = lines[i];
                const trimmed = raw.trim();

                const knotMatch = trimmed.match(
                    /^={2,}\s*([a-zA-Z_]\w*)\s*(={2,})?\s*$/,
                );
                if (knotMatch) {
                    currentKnot = knotMatch[1];
                    const item = new CompletionItem(
                        currentKnot,
                        CompletionItemKind.Function,
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
                    const item = new CompletionItem(
                        stitchName,
                        CompletionItemKind.Module,
                    );
                    item.detail = `Stitch (${fileName})`;
                    targets.push(item);

                    // Add the absolute knot.stitch name (useful if diverting globally)
                    if (currentKnot) {
                        const absoluteItem = new CompletionItem(
                            `${currentKnot}.${stitchName}`,
                            CompletionItemKind.Module,
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
    provideDefinition(document: { fileName: string; }, position: { line: number; }) {
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
    provideReferences(document: { fileName: any; }, position: any, _context: any) {
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

// ---------------------------------------------------------------------------
// Folding ranges – knots (=== / ==) and stitches (=)
// ---------------------------------------------------------------------------

/** @type {vscode.FoldingRangeProvider} */
const foldingProvider = {
    provideFoldingRanges(document: { lineCount: number; lineAt: (arg0: number) => { (): any; new(): any; text: string; }; }) {
        const ranges = [];

        // Collect the start line and kind of every knot / stitch header
        const headers = [];
        for (let i = 0; i < document.lineCount; i++) {
            const trimmed = document.lineAt(i).text.trim();

            // Knot: === name === or == name ==
            if (/^={2,}\s*[a-zA-Z_]\w*\s*(={2,})?\s*$/.test(trimmed)) {
                headers.push({ line: i, kind: "knot" });
                continue;
            }

            // Stitch: = name  (single leading =, not ==)
            if (/^=(?!=)\s*[a-zA-Z_]\w*\s*$/.test(trimmed)) {
                headers.push({ line: i, kind: "stitch" });
            }
        }

        // For each header the fold ends just before the next header at the
        // same or higher level (knot closes at the next knot; stitch closes
        // at the next stitch OR the next knot).
        for (let i = 0; i < headers.length; i++) {
            const start = headers[i].line;
            let end = document.lineCount - 1;

            for (let j = i + 1; j < headers.length; j++) {
                const next = headers[j];
                if (
                    headers[i].kind === "stitch"
                        ? true // any following header closes a stitch
                        : next.kind === "knot" // only a knot closes another knot
                ) {
                    end = next.line - 1;
                    break;
                }
            }

            // Trim trailing blank lines from the fold end
            while (end > start && document.lineAt(end).text.trim() === "") {
                end--;
            }

            // Only emit the range when it spans at least one extra line
            if (end > start) {
                ranges.push(
                    new FoldingRange(
                        start,
                        end,
                        FoldingRangeKind.Region,
                    ),
                );
            }
        }

        return ranges;
    },
};

/** @type {vscode.DocumentSymbolProvider} */
const symbolProvider = {
    provideDocumentSymbols(document: { lineCount: number; lineAt: (arg0: number) => { (): any; new(): any; text: any; }; }) {
        const symbols = [];
        let currentKnot = null;

        for (let i = 0; i < document.lineCount; i++) {
            const raw = document.lineAt(i).text;
            const trimmed = raw.trim();

            const varMatch = trimmed.match(/^(?:VAR|LIST)\s+([a-zA-Z_]\w*)/);
            if (varMatch) {
                const name = varMatch[1];
                const col = raw.indexOf(name);
                const range = new Range(i, 0, i, raw.length);
                const selRange = new Range(i, col, i, col + name.length);
                symbols.push(
                    new DocumentSymbol(
                        name,
                        "variable",
                        SymbolKind.Variable,
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
                const range = new Range(i, 0, i, raw.length);
                const selRange = new Range(i, col, i, col + name.length);
                currentKnot = new DocumentSymbol(
                    name,
                    "knot",
                    SymbolKind.Namespace,
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
                const range = new Range(i, 0, i, raw.length);
                const selRange = new Range(i, col, i, col + name.length);
                const sym = new DocumentSymbol(
                    name,
                    "stitch",
                    SymbolKind.Package,
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
    provideHover(document: { lineAt: (arg0: any) => { (): any; new(): any; text: any; }; fileName: string; getWordRangeAtPosition: (arg0: any, arg1: RegExp) => Range | undefined; }, position: { line: number; character: any; }) {
        const lineText = document.lineAt(position.line).text;
        const col = position.character;

        const imageTag = getImageTagAtColumn(lineText, col);
        if (imageTag) {
            const absPath = resolveImagePath(
                imageTag.filename,
                document.fileName,
            );
            const hoverRange = new Range(
                position.line,
                imageTag.startCol,
                position.line,
                imageTag.endCol,
            );
            if (absPath) {
                const uri = Uri.file(absPath);
                const md = new MarkdownString(
                    `![${imageTag.filename}](${uri.toString()}|height=300)`,
                );
                md.isTrusted = true;
                return new Hover(md, hoverRange);
            } else {
                const md = new MarkdownString(
                    `$(warning) Image not found: \`${imageTag.filename}\``,
                );
                md.supportThemeIcons = true;
                return new Hover(md, hoverRange);
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

        const md = new MarkdownString();
        md.appendCodeblock(preview, "ink");
        return new Hover(
            md,
            document.getWordRangeAtPosition(position, /[a-zA-Z_]\w*/),
        );
    },
};

/** @type {vscode.DocumentLinkProvider} */
const imageLinkProvider: DocumentLinkProvider = {
    provideDocumentLinks(document: TextDocument, _: CancellationToken) {

        console.log("provideDocumentLinks", document);

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
            const range = new Range(i, startCol, i, endCol);
            const link = new DocumentLink(
                range,
                Uri.file(absPath),
            );
            // link.tooltip = absPath;
            links.push(link);
        }
        return links;
    },
};

// ---------------------------------------------------------------------------
// CJK highlight suppression
// ---------------------------------------------------------------------------

/**
 * Returns true if the character at the given position is a CJK character.
 * VS Code's default word-highlight treats a whole run of CJK text as one
 * "word" (because CJK has no spaces), which causes the entire line of
 * dialogue to light up. Returning an empty array overrides that behaviour.
 */
const CJK_RE =
    /[\u1100-\u11FF\u2E80-\u2EFF\u2F00-\u2FDF\u2FF0-\u2FFF\u3000-\u9FFF\uA000-\uA48F\uA490-\uA4CF\uAC00-\uD7AF\uF900-\uFAFF\uFE10-\uFE1F\uFE30-\uFE4F\uFF00-\uFFEF]/;

const documentHighlightProvider = {
    provideDocumentHighlights(document: { lineAt: (arg0: number) => { (): any; new(): any; text: any; }; getWordRangeAtPosition: (arg0: any, arg1: RegExp) => any; getText: (arg0: any) => any; lineCount: number; }, position: { line: any; character: string | number; }) {
        const line = document.lineAt(position.line).text;
        const ch = line[position.character] ?? "";
        // If the cursor is on a CJK character, suppress all highlights.
        if (CJK_RE.test(ch)) return [];

        // For ASCII identifiers we produce highlights ourselves so the
        // built-in engine never gets a chance to over-select.
        const wordRange = document.getWordRangeAtPosition(
            position,
            /[a-zA-Z_]\w*/,
        );
        if (!wordRange) return [];

        const word = document.getText(wordRange);
        const highlights = [];
        for (let i = 0; i < document.lineCount; i++) {
            const text = document.lineAt(i).text;
            const re = new RegExp(`\\b${word}\\b`, "g");
            let m;
            while ((m = re.exec(text)) !== null) {
                highlights.push(
                    new DocumentHighlight(
                        new Range(i, m.index, i, m.index + word.length),
                        DocumentHighlightKind.Text,
                    ),
                );
            }
        }
        return highlights;
    },
};

// ---------------------------------------------------------------------------
// Activation
// ---------------------------------------------------------------------------

const ensureWorkspaceConfig = () => {
    const folders = workspace.workspaceFolders;
    if (!folders || folders.length === 0) return;

    const workspaceRoot = folders[0].uri.fsPath;
    const configDir = join(workspaceRoot, ".ink-lang");
    const configFile = join(configDir, "config.json");

    if (!existsSync(configDir)) {
        mkdirSync(configDir, { recursive: true });
    }

    if (!existsSync(configFile)) {
        writeFileSync(configFile, "{}", "utf8");
    }
};

const activate = (context: { extensionUri: Uri; subscriptions: Disposable[]; }) => {
    const INK = { language: "ink" };

    ensureWorkspaceConfig();

    // Command: open / focus the counter panel in the sidebar
    context.subscriptions.push(
        commands.registerCommand("ink.openCounter", () => {
            commands.executeCommand("ink.counterView.focus");
        }),
    );

    context.subscriptions.push(
        languages.registerDefinitionProvider(INK, definitionProvider),
        languages.registerDocumentLinkProvider(INK, imageLinkProvider),
        languages.registerReferenceProvider(INK, referenceProvider),
        languages.registerDocumentSymbolProvider(INK, symbolProvider),
        languages.registerFoldingRangeProvider(INK, foldingProvider),
        languages.registerHoverProvider(INK, hoverProvider),
        // The CompletionProvider triggers on '>', ' ', and '.'
        languages.registerDocumentHighlightProvider(
            INK,
            documentHighlightProvider,
        ),
        languages.registerCompletionItemProvider(
            INK,
            completionProvider,
            ">",
            " ",
            ".",
        ),
        commands.registerCommand("ink.generateAudio", () => {
            console.log("generate audio button clicked");
        }),
    );
};

const deactivate = () => {};

export { activate, deactivate };
