// Cmd/Ctrl+click on an INCLUDE path opens the included file.

import * as fs from "node:fs";
import * as path from "node:path";
import * as vscode from "vscode";
import { findRootInkFile } from "./project.ts";

const INCLUDE_LINE_RE = /^(INCLUDE[ \t]+)(.+?)[ \t]*$/;

const isFile = (p: string): boolean => {
    try {
        return fs.statSync(p).isFile();
    } catch {
        return false;
    }
};

/**
 * The compiler resolves INCLUDEs against the root file's directory, but
 * authors naturally write them relative to the file they are editing —
 * accept both, preferring the current file's directory.
 */
const resolveInclude = (target: string, docPath: string): string | null => {
    const bases = [
        path.dirname(docPath),
        path.dirname(findRootInkFile(docPath)),
    ];
    for (const base of bases) {
        const candidate = path.resolve(base, target);
        if (isFile(candidate)) return candidate;
    }
    return null;
};

export const includeLinkProvider: vscode.DocumentLinkProvider = {
    provideDocumentLinks(document) {
        const links: vscode.DocumentLink[] = [];
        for (let i = 0; i < document.lineCount; i++) {
            const m = document.lineAt(i).text.match(INCLUDE_LINE_RE);
            if (!m) continue;

            const absPath = resolveInclude(m[2], document.fileName);
            if (!absPath) continue;

            const link = new vscode.DocumentLink(
                new vscode.Range(i, m[1].length, i, m[1].length + m[2].length),
                vscode.Uri.file(absPath),
            );
            link.tooltip = "Open ink file";
            links.push(link);
        }
        return links;
    },
};
