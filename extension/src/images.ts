// `# Image: filename.png` tag support: hover previews and clickable links.
// Filenames are resolved by searching the workspace (skipping dependency
// and output directories), with a short-lived cache to keep hovering cheap.

import * as fs from "node:fs";
import * as path from "node:path";
import * as vscode from "vscode";

const IMAGE_TAG_RE = /^([ \t]*#[ \t]*[Ii]mage[ \t]*:[ \t]*)(.+?)[ \t]*$/;

const SKIP_DIRS = new Set(["node_modules", ".git", "dist", "out", "build"]);

const findFileRecursive = (dir: string, lowerName: string): string | null => {
    let entries: fs.Dirent[];
    try {
        entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
        return null;
    }
    for (const entry of entries) {
        if (entry.name.startsWith(".") || SKIP_DIRS.has(entry.name)) continue;
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            const found = findFileRecursive(fullPath, lowerName);
            if (found) return found;
        } else if (entry.isFile() && entry.name.toLowerCase() === lowerName) {
            return fullPath;
        }
    }
    return null;
};

const CACHE_TTL_MS = 5_000;
const cache = new Map<string, { at: number; result: string | null }>();

const isFile = (p: string): boolean => {
    try {
        return fs.statSync(p).isFile();
    } catch {
        return false;
    }
};

const resolveImagePath = (
    filename: string,
    inkFilePath: string,
): string | null => {
    const inkDir = path.dirname(inkFilePath);
    const cacheKey = `${inkDir}|${filename}`;
    const cached = cache.get(cacheKey);
    if (cached && Date.now() - cached.at < CACHE_TTL_MS) return cached.result;

    const result = doResolve(filename, inkDir);
    cache.set(cacheKey, { at: Date.now(), result });
    return result;
};

const doResolve = (filename: string, inkDir: string): string | null => {
    const workspaceRoots = (vscode.workspace.workspaceFolders ?? [])
        .map((f) => f.uri.fsPath);

    if (path.isAbsolute(filename)) {
        return isFile(filename) ? filename : null;
    }

    // A value with directory components is a path, tried relative to the
    // ink file first, then to each workspace root.
    if (filename.includes("/") || filename.includes("\\")) {
        for (const base of [inkDir, ...workspaceRoots]) {
            const candidate = path.resolve(base, filename);
            if (isFile(candidate)) return candidate;
        }
        // Fall through: maybe the file moved — search by basename below.
        filename = path.basename(filename);
    }

    for (const root of [...workspaceRoots, inkDir]) {
        const found = findFileRecursive(root, filename.toLowerCase());
        if (found) return found;
    }
    return null;
};

type ImageTag = { filename: string; startCol: number; endCol: number };

const imageTagOf = (lineText: string): ImageTag | null => {
    const m = lineText.match(IMAGE_TAG_RE);
    if (!m) return null;
    return {
        filename: m[2].trim(),
        startCol: m[1].length,
        endCol: m[1].length + m[2].length,
    };
};

export const imageHoverProvider: vscode.HoverProvider = {
    provideHover(document, position) {
        const tag = imageTagOf(document.lineAt(position.line).text);
        if (!tag) return null;
        const col = position.character;
        if (col < tag.startCol || col > tag.endCol) return null;

        const range = new vscode.Range(
            position.line,
            tag.startCol,
            position.line,
            tag.endCol,
        );

        const absPath = resolveImagePath(tag.filename, document.fileName);
        if (!absPath) {
            const md = new vscode.MarkdownString(
                `$(warning) Image not found: \`${tag.filename}\``,
            );
            md.supportThemeIcons = true;
            return new vscode.Hover(md, range);
        }

        const uri = vscode.Uri.file(absPath);
        const md = new vscode.MarkdownString(
            `![${tag.filename}](${uri.toString()}|height=300)`,
        );
        md.isTrusted = true;
        return new vscode.Hover(md, range);
    },
};

export const imageLinkProvider: vscode.DocumentLinkProvider = {
    provideDocumentLinks(document) {
        const links: vscode.DocumentLink[] = [];
        for (let i = 0; i < document.lineCount; i++) {
            const tag = imageTagOf(document.lineAt(i).text);
            if (!tag) continue;
            const absPath = resolveImagePath(tag.filename, document.fileName);
            if (!absPath) continue;

            const link = new vscode.DocumentLink(
                new vscode.Range(i, tag.startCol, i, tag.endCol),
                vscode.Uri.file(absPath),
            );
            link.tooltip = "Open image";
            links.push(link);
        }
        return links;
    },
};
