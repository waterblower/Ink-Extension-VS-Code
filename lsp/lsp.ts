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

connection.onInitialize((_params: InitializeParams) => {
    return {
        capabilities: {
            // Tell the client that this server supports syncing documents incrementally
            textDocumentSync: TextDocumentSyncKind.Incremental,
            // Tell the client to enable "Find References"
            referencesProvider: true,
            definitionProvider: true,
        },
    };
});

import {
    Location,
    Range,
    ReferenceParams,
} from "vscode-languageserver/node.js";
import { toFileUrl } from "@std/path"; // Import toFileUrl from Deno's path module

connection.onReferences((params: ReferenceParams): Location[] | null => {
    const uri = params.textDocument.uri;
    const position = params.position; // 0-indexed line and character
    const filePath = fromFileUrl(uri);

    // 1. Get the current document text and re-tokenize everything
    const document = documents.get(uri);
    if (!document) return null;

    const text = document.getText();
    const rawTokens = tokenize(text, filePath);

    // Resolve includes so we can find references across multiple files!
    const resolvedTokens = resolveIncludes(rawTokens, new Set([filePath]));
    if (resolvedTokens instanceof Error) return null;

    // 2. Find the token the user clicked on.
    // Note: Your compiler.ts hardcodes `col: 1`, so we'll match based on the line number.
    // LSP position.line is 0-indexed, your token.line is 1-indexed.
    const clickedToken = resolvedTokens.find(
        (t) => t.line - 1 === position.line && t.file === filePath,
    );

    if (!clickedToken) return null;

    // 3. Ensure we are clicking on something that can be referenced
    if (!["KNOT", "STITCH", "DIVERT"].includes(clickedToken.type)) {
        return null;
    }

    const targetName = clickedToken.value;
    const locations: Location[] = [];

    // 4. Find all KNOTs, STITCHes, and DIVERTs that share this target name
    for (const token of resolvedTokens) {
        if (
            ["KNOT", "STITCH", "DIVERT"].includes(token.type) &&
            token.value === targetName
        ) {
            // Convert your 1-indexed compiler line to a 0-indexed LSP Range
            const line = Math.max(0, token.line - 1);

            // Build the Location object
            locations.push({
                // Convert the absolute file path back to a file:// URI for VS Code
                uri: toFileUrl(token.file).href,
                range: Range.create(
                    line,
                    0,
                    line,
                    1000, // Highlight the whole line
                ),
            });
        }
    }

    return locations;
});

import { DefinitionParams } from "vscode-languageserver/node.js";
connection.onDefinition((params: DefinitionParams): Location | null => {
    const uri = params.textDocument.uri;
    const position = params.position;
    const filePath = fromFileUrl(uri);

    const document = documents.get(uri);
    if (!document) return null;

    const text = document.getText();

    // 1. Get tokens and resolve includes
    const rawTokens = tokenize(text, filePath);
    const resolvedTokens = resolveIncludes(rawTokens, new Set([filePath]));
    if (resolvedTokens instanceof Error) return null;

    // 2. Find the token the user Ctrl+Clicked on
    const clickedToken = resolvedTokens.find(
        (t) => t.line - 1 === position.line && t.file === filePath,
    );

    if (!clickedToken) return null;

    // 3. We only want to "Go to Definition" if they clicked on a DIVERT target.
    // (If they click a KNOT, they are already at the definition!)
    if (clickedToken.type === "DIVERT") {
        const targetName = clickedToken.value;

        // 4. Search for the KNOT or STITCH that defines this target
        const definitionToken = resolvedTokens.find(
            (t) =>
                (t.type === "KNOT" || t.type === "STITCH") &&
                t.value === targetName,
        );

        if (definitionToken) {
            const line = Math.max(0, definitionToken.line - 1);

            // 5. Return the location of the definition so VS Code can jump there
            return {
                uri: toFileUrl(definitionToken.file).href,
                range: Range.create(
                    line,
                    0,
                    line,
                    1000, // Safely highlight the whole line
                ),
            };
        }
    }

    // If we didn't find a definition, or they clicked something else, do nothing
    return null;
});

// Create a simple text document manager
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent((change) => {
    validateTextDocument(change.document);
});

import { fromFileUrl } from "@std/path";
async function validateTextDocument(textDocument: TextDocument): Promise<void> {
    const text = textDocument.getText();
    const uri = textDocument.uri;

    // Strip the 'file://' prefix for your compiler's internal tracking
    // const filePath = uri.replace("file://", "");
    const filePath = fromFileUrl(uri);
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
console.log("Ink LSP started");
