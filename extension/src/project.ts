// Project model: which .ink files belong together, and which one is the
// root that everything else is INCLUDEd from. The ink compiler resolves
// INCLUDE paths relative to the *root* file's directory, so we follow the
// same convention here.

import * as fs from "node:fs";
import * as path from "node:path";
import * as vscode from "vscode";
import { INCLUDE_RE } from "./syntax.ts";

/**
 * Read a file's current content, preferring an open (possibly unsaved)
 * editor buffer over the file on disk.
 */
export const readInkFile = (filePath: string): string | Error => {
    const open = vscode.workspace.textDocuments.find(
        (d) => d.uri.fsPath === filePath,
    );
    if (open) return open.getText();
    try {
        return fs.readFileSync(filePath, "utf8");
    } catch (e) {
        return e instanceof Error ? e : new Error(String(e));
    }
};

/** Like `readInkFile` but a missing file is just an empty file. */
export const readLines = (filePath: string): string[] => {
    const text = readInkFile(filePath);
    return text instanceof Error ? [] : text.split(/\r?\n/);
};

/**
 * INCLUDE targets of one file, resolved like the compiler does: relative
 * to the including file's directory first, then to `rootDir`. Only
 * existing files are returned.
 */
const directIncludes = (filePath: string, rootDir: string): string[] => {
    const ownDir = path.dirname(filePath);
    return readLines(filePath)
        .map((line) => line.match(INCLUDE_RE))
        .filter((m) => m !== null)
        .map((m) => {
            const target = m[1].trim();
            for (const base of [ownDir, rootDir]) {
                const candidate = path.resolve(base, target);
                if (fs.existsSync(candidate)) return candidate;
            }
            return null;
        })
        .filter((p) => p !== null);
};

/** All files reachable from `rootPath` through INCLUDEs, root included. */
export const collectInkFiles = (rootPath: string): Set<string> => {
    const rootDir = path.dirname(rootPath);
    const visited = new Set<string>();
    const queue = [path.resolve(rootPath)];
    while (queue.length > 0) {
        const current = queue.shift() as string;
        if (visited.has(current)) continue;
        visited.add(current);
        queue.push(...directIncludes(current, rootDir));
    }
    return visited;
};

const SKIP_DIRS = new Set(["node_modules", ".git", "dist", "out", "build"]);

const walkForInkFiles = (dir: string, found: string[]): void => {
    let entries: fs.Dirent[];
    try {
        entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
        return;
    }
    for (const entry of entries) {
        if (entry.name.startsWith(".") || SKIP_DIRS.has(entry.name)) continue;
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            walkForInkFiles(fullPath, found);
        } else if (entry.isFile() && entry.name.endsWith(".ink")) {
            found.push(fullPath);
        }
    }
};

const CACHE_TTL_MS = 5_000;
const inkFileCache = new Map<string, { at: number; files: string[] }>();

/** All .ink files under the workspace folder of `docPath` (briefly cached). */
export const workspaceInkFiles = (docPath: string): string[] => {
    const folder = vscode.workspace.getWorkspaceFolder(
        vscode.Uri.file(docPath),
    );
    const base = folder ? folder.uri.fsPath : path.dirname(docPath);

    const cached = inkFileCache.get(base);
    if (cached && Date.now() - cached.at < CACHE_TTL_MS) return cached.files;

    const files: string[] = [];
    walkForInkFiles(base, files);
    inkFileCache.set(base, { at: Date.now(), files });
    return files;
};

/**
 * Find the root ink file of the project `docPath` belongs to: an .ink file
 * in the workspace that transitively INCLUDEs `docPath` but is itself
 * included by nobody. Falls back to `docPath` when it is its own root.
 */
export const findRootInkFile = (docPath: string): string => {
    const resolved = path.resolve(docPath);
    const candidates = workspaceInkFiles(resolved);

    const included = new Set(
        candidates.flatMap((f) => directIncludes(f, path.dirname(f))),
    );
    const roots = candidates.filter((f) => !included.has(f));

    for (const root of roots) {
        if (root === resolved) return resolved;
        if (collectInkFiles(root).has(resolved)) return root;
    }
    return resolved;
};

/**
 * Every ink file `docPath` can see: the INCLUDE graph of its root first
 * (so those declarations win when names collide), then every other .ink
 * file in the workspace — diverts resolve project-wide even before the
 * target file is wired up with an INCLUDE.
 */
export const projectFiles = (docPath: string): string[] => {
    const graph = collectInkFiles(findRootInkFile(docPath));
    const rest = workspaceInkFiles(path.resolve(docPath))
        .filter((f) => !graph.has(f));
    return [...graph, ...rest];
};
