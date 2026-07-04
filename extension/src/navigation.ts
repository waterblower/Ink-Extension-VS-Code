// Go to Definition and Find References for knots, stitches and variables,
// working across every file of the project.

import * as vscode from "vscode";
import { projectFiles, readLines } from "./project.ts";
import {
    isLogicContext,
    LOGIC_KEYWORDS,
    parseDeclaration,
    parseDivertTargets,
    stripLineComment,
} from "./syntax.ts";

const WORD_RE = /[a-zA-Z_]\w*/;

type ContextInfo = {
    type: "declaration" | "divert" | "variable";
    name: string;
};

/** Classify the identifier under the cursor. */
export const contextInfoAt = (
    document: vscode.TextDocument,
    position: vscode.Position,
): ContextInfo | null => {
    const wordRange = document.getWordRangeAtPosition(position, WORD_RE);
    if (!wordRange) return null;

    const word = document.getText(wordRange);
    const lineText = document.lineAt(position.line).text;
    const col = wordRange.start.character;

    const commentIdx = lineText.indexOf("//");
    if (commentIdx !== -1 && col >= commentIdx) return null;

    if (parseDeclaration(lineText.trim())?.name === word) {
        return { type: "declaration", name: word };
    }

    for (const t of parseDivertTargets(lineText)) {
        if (col >= t.col && col <= t.col + t.name.length) {
            return { type: "divert", name: word };
        }
    }

    if (isLogicContext(lineText, col) && !LOGIC_KEYWORDS.has(word)) {
        return { type: "variable", name: word };
    }

    return null;
};

const locationOf = (
    filePath: string,
    line: number,
    col: number,
    length: number,
): vscode.Location => {
    return new vscode.Location(
        vscode.Uri.file(filePath),
        new vscode.Range(line, col, line, col + length),
    );
};

/** The knot/stitch header declaring `name`, searched across `files`. */
export const findDeclaration = (
    name: string,
    files: string[],
): vscode.Location | null => {
    for (const filePath of files) {
        const lines = readLines(filePath);
        for (let i = 0; i < lines.length; i++) {
            if (parseDeclaration(lines[i].trim())?.name !== name) continue;
            const col = lines[i].indexOf(name);
            return locationOf(filePath, i, col, name.length);
        }
    }
    return null;
};

/** Every divert (`-> name` or `-> knot.name`) referencing `name`. */
export const findReferences = (
    name: string,
    files: string[],
): vscode.Location[] => {
    const locations: vscode.Location[] = [];
    for (const filePath of files) {
        const lines = readLines(filePath);
        for (let i = 0; i < lines.length; i++) {
            for (const target of parseDivertTargets(lines[i])) {
                const exact = target.name === name;
                const dotted = !exact && target.name.endsWith("." + name);
                if (!exact && !dotted) continue;

                // For dotted targets, highlight only the segment after the dot.
                const offset = dotted
                    ? target.name.lastIndexOf("." + name) + 1
                    : 0;
                locations.push(
                    locationOf(filePath, i, target.col + offset, name.length),
                );
            }
        }
    }
    return locations;
};

/**
 * The declaration of variable `name`: a VAR/CONST/LIST line, a `~ temp`,
 * or — failing those — its first assignment.
 */
export const findVarDeclaration = (
    name: string,
    files: string[],
): vscode.Location | null => {
    const declRe = new RegExp(`^\\s*(?:VAR|CONST|LIST)\\s+${name}\\b`);
    const tempRe = new RegExp(`^\\s*~\\s*temp\\s+${name}\\b`);
    const assignRe = new RegExp(`^\\s*~\\s*${name}\\b\\s*(?:[-+*/%]?=)`);

    let firstAssignment: vscode.Location | null = null;
    for (const filePath of files) {
        const lines = readLines(filePath);
        for (let i = 0; i < lines.length; i++) {
            const searchIn = stripLineComment(lines[i]);
            const col = searchIn.indexOf(name);

            if (declRe.test(searchIn) || tempRe.test(searchIn)) {
                return locationOf(filePath, i, col, name.length);
            }
            if (!firstAssignment && assignRe.test(searchIn)) {
                firstAssignment = locationOf(filePath, i, col, name.length);
            }
        }
    }
    return firstAssignment;
};

/** Every occurrence of variable `name` in a logic context. */
export const findVarOccurrences = (
    name: string,
    files: string[],
): vscode.Location[] => {
    const locations: vscode.Location[] = [];
    const wordRe = new RegExp(`\\b${name}\\b`, "g");

    for (const filePath of files) {
        const lines = readLines(filePath);
        for (let i = 0; i < lines.length; i++) {
            const searchIn = stripLineComment(lines[i]);
            for (const m of searchIn.matchAll(wordRe)) {
                if (!isLogicContext(searchIn, m.index)) continue;
                locations.push(locationOf(filePath, i, m.index, name.length));
            }
        }
    }
    return locations;
};

const sameLocation = (a: vscode.Location, b: vscode.Location): boolean => {
    return a.uri.fsPath === b.uri.fsPath && a.range.isEqual(b.range);
};

export const definitionProvider: vscode.DefinitionProvider = {
    provideDefinition(document, position) {
        const info = contextInfoAt(document, position);
        if (!info) return null;

        const files = projectFiles(document.fileName);

        if (info.type === "divert") {
            return findDeclaration(info.name, files);
        }

        if (info.type === "declaration") {
            // Clicking a declaration jumps to its usages instead.
            const declaration = findDeclaration(info.name, files);
            const results = declaration ? [declaration] : [];
            results.push(...findReferences(info.name, files));
            return results.length > 1 ? results : null;
        }

        // info.type === "variable"
        const declaration = findVarDeclaration(info.name, files);
        if (!declaration) return null;

        const onDeclaration = declaration.uri.fsPath === document.fileName &&
            declaration.range.start.line === position.line;
        if (!onDeclaration) return declaration;

        const results: vscode.Location[] = [declaration];
        for (const occurrence of findVarOccurrences(info.name, files)) {
            if (!sameLocation(occurrence, declaration)) {
                results.push(occurrence);
            }
        }
        return results.length > 1 ? results : null;
    },
};

export const referenceProvider: vscode.ReferenceProvider = {
    provideReferences(document, position) {
        const info = contextInfoAt(document, position);
        if (!info) return null;

        const files = projectFiles(document.fileName);
        if (info.type === "variable") {
            return findVarOccurrences(info.name, files);
        }
        return findReferences(info.name, files);
    },
};

export const hoverProvider: vscode.HoverProvider = {
    provideHover(document, position) {
        const info = contextInfoAt(document, position);
        if (!info || info.type === "declaration") return null;

        const files = projectFiles(document.fileName);
        const location = info.type === "divert"
            ? findDeclaration(info.name, files)
            : findVarDeclaration(info.name, files);
        if (!location) return null;

        const declLine = location.range.start.line;
        const preview = readLines(location.uri.fsPath)
            .slice(declLine, declLine + 6)
            .join("\n");

        const md = new vscode.MarkdownString();
        md.appendCodeblock(preview, "ink");
        return new vscode.Hover(
            md,
            document.getWordRangeAtPosition(position, WORD_RE),
        );
    },
};
