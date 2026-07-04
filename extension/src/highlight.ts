// Word-highlight override. VS Code's default highlighter treats a whole run
// of CJK text as one "word" (CJK has no spaces), lighting up entire lines of
// dialogue. We suppress highlights on CJK and provide our own for ASCII
// identifiers.

import * as vscode from "vscode";

const CJK_RE =
    /[\u1100-\u11FF\u2E80-\u2EFF\u2F00-\u2FDF\u2FF0-\u2FFF\u3000-\u9FFF\uA000-\uA48F\uA490-\uA4CF\uAC00-\uD7AF\uF900-\uFAFF\uFE10-\uFE1F\uFE30-\uFE4F\uFF00-\uFFEF]/;

export const documentHighlightProvider: vscode.DocumentHighlightProvider = {
    provideDocumentHighlights(document, position) {
        const line = document.lineAt(position.line).text;
        const ch = line[position.character] ?? "";
        if (CJK_RE.test(ch)) return [];

        const wordRange = document.getWordRangeAtPosition(
            position,
            /[a-zA-Z_]\w*/,
        );
        if (!wordRange) return [];

        const word = document.getText(wordRange);
        const wordRe = new RegExp(`\\b${word}\\b`, "g");
        const highlights: vscode.DocumentHighlight[] = [];
        for (let i = 0; i < document.lineCount; i++) {
            for (const m of document.lineAt(i).text.matchAll(wordRe)) {
                highlights.push(
                    new vscode.DocumentHighlight(
                        new vscode.Range(i, m.index, i, m.index + word.length),
                        vscode.DocumentHighlightKind.Text,
                    ),
                );
            }
        }
        return highlights;
    },
};
