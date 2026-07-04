// vscode adapter for the pure formatter in format.ts: emits one minimal
// TextEdit per changed line so undo and cursor behavior stay sane.

import * as vscode from "vscode";
import { formatInk } from "./format.ts";

const indentUnitOf = (options: vscode.FormattingOptions): string => {
    return options.insertSpaces ? " ".repeat(options.tabSize) : "\t";
};

const editsFor = (
    document: vscode.TextDocument,
    options: vscode.FormattingOptions,
    range?: vscode.Range,
): vscode.TextEdit[] => {
    const lines: string[] = [];
    for (let i = 0; i < document.lineCount; i++) {
        lines.push(document.lineAt(i).text);
    }

    // Formatting is stateful (weave depth), so always compute over the
    // whole document and filter edits to the requested range.
    const formatted = formatInk(lines, indentUnitOf(options));

    const edits: vscode.TextEdit[] = [];
    for (let i = 0; i < lines.length; i++) {
        if (formatted[i] === lines[i]) continue;
        if (range && (i < range.start.line || i > range.end.line)) continue;
        edits.push(
            vscode.TextEdit.replace(
                new vscode.Range(i, 0, i, lines[i].length),
                formatted[i],
            ),
        );
    }
    return edits;
};

export const formattingProvider: vscode.DocumentFormattingEditProvider = {
    provideDocumentFormattingEdits(document, options) {
        return editsFor(document, options);
    },
};

export const rangeFormattingProvider:
    vscode.DocumentRangeFormattingEditProvider = {
        provideDocumentRangeFormattingEdits(document, range, options) {
            return editsFor(document, options, range);
        },
    };
