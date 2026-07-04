// Live error reporting: recompile the whole project (from its root file)
// whenever an ink document changes, and publish the compiler's errors,
// warnings and TODOs as diagnostics on the right files and lines.

import * as vscode from "vscode";
import { compileInk, InkIssue } from "./compile.ts";
import { collectInkFiles, findRootInkFile, readInkFile } from "./project.ts";

const DEBOUNCE_MS = 400;

const toSeverity = (issue: InkIssue): vscode.DiagnosticSeverity => {
    switch (issue.severity) {
        case "error":
            return vscode.DiagnosticSeverity.Error;
        case "warning":
            return vscode.DiagnosticSeverity.Warning;
        case "info":
            return vscode.DiagnosticSeverity.Information;
    }
};

export class InkDiagnostics {
    private readonly collection = vscode.languages.createDiagnosticCollection(
        "ink",
    );
    private timer: ReturnType<typeof setTimeout> | undefined;

    register(context: vscode.ExtensionContext): void {
        context.subscriptions.push(
            this.collection,
            vscode.workspace.onDidOpenTextDocument((doc) => {
                this.schedule(doc);
            }),
            vscode.workspace.onDidChangeTextDocument((e) => {
                this.schedule(e.document);
            }),
            vscode.workspace.onDidSaveTextDocument((doc) => {
                this.schedule(doc);
            }),
        );

        const active = vscode.window.activeTextEditor;
        if (active) this.schedule(active.document);
    }

    private schedule(doc: vscode.TextDocument): void {
        if (doc.languageId !== "ink") return;
        if (this.timer) clearTimeout(this.timer);
        this.timer = setTimeout(() => this.refresh(doc.fileName), DEBOUNCE_MS);
    }

    private refresh(docPath: string): void {
        const rootPath = findRootInkFile(docPath);
        const files = collectInkFiles(rootPath);
        const issues = compileInk(rootPath, readInkFile);

        // Start every project file with a clean slate so fixed errors clear.
        const byFile = new Map<string, vscode.Diagnostic[]>();
        for (const file of files) byFile.set(file, []);

        if (issues instanceof Error) {
            byFile.set(docPath, [
                new vscode.Diagnostic(
                    new vscode.Range(0, 0, 0, 1),
                    issues.message,
                    vscode.DiagnosticSeverity.Error,
                ),
            ]);
        } else {
            for (const issue of issues) {
                const line = Math.max(0, issue.line);
                const diagnostic = new vscode.Diagnostic(
                    new vscode.Range(line, 0, line, Number.MAX_SAFE_INTEGER),
                    issue.message,
                    toSeverity(issue),
                );
                diagnostic.source = "ink";
                const list = byFile.get(issue.file) ?? [];
                list.push(diagnostic);
                byFile.set(issue.file, list);
            }
        }

        for (const [file, diagnostics] of byFile) {
            this.collection.set(vscode.Uri.file(file), diagnostics);
        }
    }
}
