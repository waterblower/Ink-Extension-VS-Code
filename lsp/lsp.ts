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
import { buildStoryIncremental, StoryAST } from "./compiler.ts";

const storyAST: StoryAST = {
    type: "Story",
    block: {
        content: [],
        options: []
    },
    knots: {}
} 

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
    const locations = findReferences(storyAST, params)
    return locations.length > 0? locations: null
});

import { DefinitionParams } from "vscode-languageserver/node.js";
connection.onDefinition((params: DefinitionParams): Location | null => {
    const location = findDefinition(storyAST, params)
    return location
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
   
}

// Make the text document manager listen on the connection
documents.listen(connection);

// Listen on the connection
connection.listen();
console.log("Ink LSP started");
