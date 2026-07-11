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
 * where the quoted filename is the INCLUDE path as written in the source.
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

/**
 * Resolves INCLUDE paths the way authors write them: relative to the
 * including file's directory first, then to the root file's directory
 * (the inkjs convention). Reads go through the provided `readFile`, so
 * unsaved editor buffers are compiled instead of stale on-disk content.
 *
 * Because inkjs identifies files by their as-written INCLUDE path (in
 * nested includes and in error messages), we keep a map of as-written
 * name → resolved absolute path and use it both to resolve includes of
 * included files and to map error filenames back to real files.
 */
class ProjectFileHandler implements IFileHandler {
    private readonly resolved = new Map<string, string>();

    constructor(
        private readonly rootPath: string,
        private readonly readFile: ReadFile,
    ) {
        this.resolved.set(path.basename(rootPath), rootPath);
    }

    /** Absolute path for a filename as it appears in inkjs messages. */
    absPathOf(asWritten: string): string {
        return this.resolved.get(asWritten) ??
            path.resolve(path.dirname(this.rootPath), asWritten);
    }

    readonly ResolveInkFilename = (
        filename: string,
        sourceFilename?: string | null,
    ): string => {
        const rootDir = path.dirname(this.rootPath);
        const bases: string[] = [];
        if (sourceFilename) {
            bases.push(path.dirname(this.absPathOf(sourceFilename)));
        }
        bases.push(rootDir);

        for (const base of bases) {
            const candidate = path.resolve(base, filename);
            if (!(this.readFile(candidate) instanceof Error)) {
                this.resolved.set(filename, candidate);
                return candidate;
            }
        }

        // Nothing readable: return the root-relative guess so the parser's
        // "Failed to load" error names a sensible path.
        const fallback = path.resolve(rootDir, filename);
        this.resolved.set(filename, fallback);
        return fallback;
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

const parseIssue = (
    raw: string,
    type: ErrorType,
    rootPath: string,
    handler: ProjectFileHandler,
): InkIssue => {
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
        file: m[1] ? handler.absPathOf(m[1]) : rootPath,
        line: parseInt(m[2], 10) - 1,
        message: m[3].trim(),
        severity: severityOf(type),
    };
};

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
    const handler = new ProjectFileHandler(rootPath, readFile);
    const options = new CompilerOptions(
        path.basename(rootPath),
        [],
        false,
        (message, type) =>
            issues.push(parseIssue(message, type, rootPath, handler)),
        handler,
    );

    try {
        new Compiler(source, options).Compile();
    } catch (e) {
        // The compiler throws after reporting fatal errors through the
        // handler; only surface the exception if it told us nothing else.
        if (!issues.some((i) => i.severity === "error")) {
            const message = e instanceof Error ? e.message : String(e);
            issues.push(
                parseIssue(message, ErrorType.Error, rootPath, handler),
            );
        }
    }
    return issues;
};
