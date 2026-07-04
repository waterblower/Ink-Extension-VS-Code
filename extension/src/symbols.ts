// Outline view (knots, stitches, variables) and folding ranges.

import * as vscode from "vscode";
import { KNOT_RE, STITCH_RE } from "./syntax.ts";

const VAR_RE = /^(?:VAR|CONST|LIST)\s+([a-zA-Z_]\w*)/;

export const symbolProvider: vscode.DocumentSymbolProvider = {
    provideDocumentSymbols(document) {
        const symbols: vscode.DocumentSymbol[] = [];
        let currentKnot: vscode.DocumentSymbol | null = null;

        const makeSymbol = (
            line: number,
            raw: string,
            name: string,
            detail: string,
            kind: vscode.SymbolKind,
        ): vscode.DocumentSymbol => {
            const col = raw.indexOf(name);
            return new vscode.DocumentSymbol(
                name,
                detail,
                kind,
                new vscode.Range(line, 0, line, raw.length),
                new vscode.Range(line, col, line, col + name.length),
            );
        };

        for (let i = 0; i < document.lineCount; i++) {
            const raw = document.lineAt(i).text;
            const trimmed = raw.trim();

            const varMatch = trimmed.match(VAR_RE);
            if (varMatch) {
                symbols.push(makeSymbol(
                    i,
                    raw,
                    varMatch[1],
                    "variable",
                    vscode.SymbolKind.Variable,
                ));
                continue;
            }

            const knotMatch = trimmed.match(KNOT_RE);
            if (knotMatch) {
                currentKnot = makeSymbol(
                    i,
                    raw,
                    knotMatch[3],
                    knotMatch[2] ? "function" : "knot",
                    vscode.SymbolKind.Namespace,
                );
                symbols.push(currentKnot);
                continue;
            }

            const stitchMatch = trimmed.match(STITCH_RE);
            if (stitchMatch) {
                const stitch = makeSymbol(
                    i,
                    raw,
                    stitchMatch[1],
                    "stitch",
                    vscode.SymbolKind.Package,
                );
                if (currentKnot) currentKnot.children.push(stitch);
                else symbols.push(stitch);
            }
        }

        return symbols;
    },
};

export const foldingProvider: vscode.FoldingRangeProvider = {
    provideFoldingRanges(document) {
        type Header = { line: number; kind: "knot" | "stitch" };
        const headers: Header[] = [];

        for (let i = 0; i < document.lineCount; i++) {
            const trimmed = document.lineAt(i).text.trim();
            if (KNOT_RE.test(trimmed)) headers.push({ line: i, kind: "knot" });
            else if (STITCH_RE.test(trimmed)) {
                headers.push({ line: i, kind: "stitch" });
            }
        }

        const ranges: vscode.FoldingRange[] = [];
        for (let i = 0; i < headers.length; i++) {
            const start = headers[i].line;
            let end = document.lineCount - 1;

            // A stitch is closed by any following header; a knot only by
            // the next knot.
            for (let j = i + 1; j < headers.length; j++) {
                if (
                    headers[i].kind === "stitch" || headers[j].kind === "knot"
                ) {
                    end = headers[j].line - 1;
                    break;
                }
            }

            while (end > start && document.lineAt(end).text.trim() === "") {
                end--;
            }
            if (end > start) {
                ranges.push(
                    new vscode.FoldingRange(
                        start,
                        end,
                        vscode.FoldingRangeKind.Region,
                    ),
                );
            }
        }
        return ranges;
    },
};
