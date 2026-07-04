// Wrapper around the inkjs compiler. This module deliberately does not
// import "vscode" so it can be exercised from plain node (tests, CLI).

import * as path from "node:path";
import { Compiler, CompilerOptions } from "inkjs/compiler/Compiler";
import { ErrorType } from "inkjs/compiler/Parser/ErrorType";
import type { IFileHandler } from "inkjs/compiler/IFileHandler";

export type ReadFile = (absPath: string) => string | Error;

export type IssueSeverity = "error" | "warning" | "info";

export type InkIssue = {
    /** Absolute path of the file the issue belongs to. */
    file: string;
    /** 0-based line number. */
    line: number;
    message: string;
    severity: IssueSeverity;
};

/**
 * inkjs reports issues as strings shaped like
 *   `ERROR: 'file.ink' line 12: message`
 * where the quoted filename is optional (absent for the root file when no
 * source filename is given) and relative to the root file's directory.
 */
const ISSUE_RE =
    /^\s*(?:ERROR|WARNING|TODO):\s*(?:'([^']+)'\s*)?line (\d+):\s*([\s\S]*)$/;

const severityOf = (type: ErrorType): IssueSeverity => {
    switch (type) {
        case ErrorType.Error:
            return "error";
        case ErrorType.Warning:
            return "warning";
        default: // ErrorType.Author — TODO: notes
            return "info";
    }
};

const parseIssue = (
    raw: string,
    type: ErrorType,
    rootPath: string,
): InkIssue => {
    const rootDir = path.dirname(rootPath);
    const m = raw.match(ISSUE_RE);
    if (!m) {
        return {
            file: rootPath,
            line: 0,
            message: raw,
            severity: severityOf(type),
        };
    }
    return {
        file: m[1] ? path.resolve(rootDir, m[1]) : rootPath,
        line: parseInt(m[2], 10) - 1,
        message: m[3].trim(),
        severity: severityOf(type),
    };
};

/**
 * Resolves INCLUDEs relative to the root file's directory (the inkjs
 * convention) and reads through the provided `readFile`, so unsaved editor
 * buffers are compiled instead of stale on-disk content.
 */
class ProjectFileHandler implements IFileHandler {
    constructor(
        private readonly rootDir: string,
        private readonly readFile: ReadFile,
    ) {}

    readonly ResolveInkFilename = (filename: string): string => {
        return path.resolve(this.rootDir, filename);
    };

    readonly LoadInkFileContents = (filename: string): string => {
        const content = this.readFile(filename);
        if (content instanceof Error) {
            // The ink parser catches this and reports a proper
            // "Failed to load" error on the INCLUDE line.
            throw content;
        }
        return content;
    };
}

/**
 * Compile the story rooted at `rootPath` and return every error, warning
 * and TODO the compiler produced. A successful compile returns [].
 */
export const compileInk = (
    rootPath: string,
    readFile: ReadFile,
): InkIssue[] | Error => {
    const source = readFile(rootPath);
    if (source instanceof Error) return source;

    const issues: InkIssue[] = [];
    const options = new CompilerOptions(
        path.basename(rootPath),
        [],
        false,
        (message, type) => issues.push(parseIssue(message, type, rootPath)),
        new ProjectFileHandler(path.dirname(rootPath), readFile),
    );

    try {
        new Compiler(source, options).Compile();
    } catch (e) {
        // The compiler throws after reporting fatal errors through the
        // handler; only surface the exception if it told us nothing else.
        if (!issues.some((i) => i.severity === "error")) {
            const message = e instanceof Error ? e.message : String(e);
            issues.push(parseIssue(message, ErrorType.Error, rootPath));
        }
    }
    return issues;
};
