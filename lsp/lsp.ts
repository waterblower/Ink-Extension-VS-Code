// lsp.ts
import {
    createConnection,
    Diagnostic,
    DiagnosticSeverity,
    InitializeParams,
    ProposedFeatures,
    TextDocuments,
    TextDocumentSyncKind,
} from "vscode-languageserver/node.js";
import { TextDocument } from "vscode-languageserver-textdocument";

// Import your compiler functions
import { parse, resolveIncludes, tokenize } from "./compiler.ts";

// Create a connection for the server, using Node's standard I/O
const connection = createConnection(ProposedFeatures.all);

// Create a simple text document manager
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

connection.onInitialize((_params: InitializeParams) => {
    return {
        capabilities: {
            // Tell the client that this server supports syncing documents incrementally
            textDocumentSync: TextDocumentSyncKind.Incremental,
        },
    };
});

// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent((change) => {
    validateTextDocument(change.document);
});

async function validateTextDocument(textDocument: TextDocument): Promise<void> {
    const text = textDocument.getText();
    const uri = textDocument.uri;

    // Strip the 'file://' prefix for your compiler's internal tracking
    const filePath = uri.replace("file://", "");
    const diagnostics: Diagnostic[] = [];

    // Run your pipeline on the live editor text
    const rawTokens = tokenize(text, filePath);
    const resolvedTokens = resolveIncludes(rawTokens, new Set([filePath]));

    if (resolvedTokens instanceof Error) {
        diagnostics.push(createDiagnosticFromError(resolvedTokens));
    } else {
        const ast = parse(resolvedTokens);
        if (ast instanceof Error) {
            diagnostics.push(createDiagnosticFromError(ast));
        }
    }

    // Send the computed diagnostics to VSCode.
    await connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
}

function createDiagnosticFromError(error: Error): Diagnostic {
    // Your compiler errors look like: "Syntax Error in <file> at line <line>: ..."
    // We extract the line number to place the red underline in VS Code accurately.
    let line = 0;
    const match = error.message.match(/at line (\d+)/);

    if (match) {
        // LSP lines are 0-indexed, whereas your compiler lines are 1-indexed
        line = Math.max(0, parseInt(match[1], 10) - 1);
    }

    return {
        severity: DiagnosticSeverity.Error,
        range: {
            start: { line, character: 0 },
            end: { line, character: 1000 }, // Safely highlight the whole line
        },
        message: error.message,
        source: "ink-compiler",
    };
}

// Make the text document manager listen on the connection
documents.listen(connection);

// Listen on the connection
connection.listen();
