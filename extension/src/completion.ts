// Auto-completion of divert targets: after typing `->`, suggest every knot
// and stitch in the project (stitches both bare and as `knot.stitch`).

import * as path from "node:path";
import * as vscode from "vscode";
import { projectFiles, readLines } from "./project.ts";
import { ID_SRC, KNOT_RE, STITCH_RE } from "./syntax.ts";

const DIVERT_PREFIX_RE = new RegExp(`->\\s*(?:${ID_SRC}|\\.)*$`);

export const completionProvider: vscode.CompletionItemProvider = {
    provideCompletionItems(document, position) {
        const prefix = document
            .lineAt(position)
            .text.slice(0, position.character);
        if (!DIVERT_PREFIX_RE.test(prefix)) return undefined;

        const items: vscode.CompletionItem[] = [];
        for (const filePath of projectFiles(document.fileName)) {
            const fileName = path.basename(filePath);
            let currentKnot: string | null = null;

            for (const line of readLines(filePath)) {
                const trimmed = line.trim();

                const knotMatch = trimmed.match(KNOT_RE);
                if (knotMatch) {
                    currentKnot = knotMatch[3];
                    const item = new vscode.CompletionItem(
                        currentKnot,
                        vscode.CompletionItemKind.Function,
                    );
                    item.detail = `Knot (${fileName})`;
                    items.push(item);
                    continue;
                }

                const stitchMatch = trimmed.match(STITCH_RE);
                if (stitchMatch) {
                    const stitchName = stitchMatch[1];

                    // Bare name for local diverts …
                    const local = new vscode.CompletionItem(
                        stitchName,
                        vscode.CompletionItemKind.Module,
                    );
                    local.detail = `Stitch (${fileName})`;
                    items.push(local);

                    // … and the qualified name for global ones.
                    if (currentKnot) {
                        const qualified = new vscode.CompletionItem(
                            `${currentKnot}.${stitchName}`,
                            vscode.CompletionItemKind.Module,
                        );
                        qualified.detail =
                            `Stitch in ${currentKnot} (${fileName})`;
                        items.push(qualified);
                    }
                }
            }
        }
        return items;
    },
};
