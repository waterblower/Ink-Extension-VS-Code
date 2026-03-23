// lsp.ts
import {
    Connection,
    createConnection,
    InitializeParams,
    ProposedFeatures,
    TextDocuments,
    TextDocumentSyncKind,
} from "vscode-languageserver/node.js";

// lsp.ts

import {
    buildStoryIncremental,
    ContentNode,
    DivertNode,
    find_node_at_position,
    KnotNode,
    OptionNode,
    StitchNode,
    StoryAST,
} from "./compiler.ts";

import {
    DefinitionParams,
    Diagnostic,
    DiagnosticSeverity,
    Location,
    ReferenceParams,
} from "vscode-languageserver/node.js";

import { TextDocument } from "vscode-languageserver-textdocument";
import { fromFileUrl, toFileUrl } from "@std/path";

const storyAST: StoryAST = {
    type: "Story",
    content: [],
    options: [],
    knots: {},
};

// Create a connection for the server, using Node's standard I/O
const connection = createConnection(ProposedFeatures.all);

connection.onInitialize((_params: InitializeParams) => {
    console.log("onInitialize", _params);
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

connection.onReferences((params: ReferenceParams): Location[] | null => {
    console.log("onReferences", params);

    const locations = findReferences(storyAST, params);
    return locations;
});

connection.onDefinition((params: DefinitionParams): Location | null => {
    console.log("onDefinition", params);

    const location = findDefinition(storyAST, params);
    return location;
});

// Create a simple text document manager
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent((change) => {
    validateTextDocument(change.document, storyAST, connection);
    console.log("onDidChangeContent", storyAST);
});

// Make the text document manager listen on the connection
documents.listen(connection);

// Listen on the connection
connection.listen();
console.log("Ink LSP started");

// 3. Reference Helper: Find all Diverts targeting a specific name
function get_diverts_to(ast: StoryAST, targetName: string): DivertNode[] {
    const diverts: DivertNode[] = [];

    function scanContent(content: ContentNode[]) {
        for (const node of content) {
            if (node.type === "Divert" && node.target === targetName) {
                diverts.push(node);
            }
        }
    }

    function scanOptions(options: OptionNode[]) {
        for (const opt of options) {
            if (opt.content) scanContent(opt.content);
        }
    }

    scanContent(ast.content);
    scanOptions(ast.options);

    for (const knotName in ast.knots) {
        const knot = ast.knots[knotName];
        scanContent(knot.content);
        scanOptions(knot.options);

        if (knot.stitches) {
            for (const stitch of knot.stitches) {
                scanContent(stitch.content);
                scanOptions(stitch.options);
            }
        }
    }
    return diverts;
}

export async function validateTextDocument(
    textDocument: TextDocument,
    storyAST: StoryAST,
    connection: Connection,
): Promise<void> {
    const filePath = fromFileUrl(textDocument.uri);

    const result = await buildStoryIncremental(storyAST, filePath);
    const diagnostics: Diagnostic[] = [];

    if (result instanceof Error) {
        // Parse: "Syntax Error in {file}:{line} - {msg}. Found: '{type}'"
        const errMsg = result.message;
        const match = errMsg.match(/Syntax Error in (.*?):(\d+) - (.*)/);

        if (match) {
            const errFile = match[1];
            const errLine = parseInt(match[2], 10) - 1; // Back to 0-index for LSP
            const detail = match[3];

            // Only report if the error belongs to the active file being typed in
            if (toFileUrl(errFile).href === textDocument.uri) {
                diagnostics.push({
                    severity: DiagnosticSeverity.Error,
                    range: {
                        start: { line: errLine, character: 0 },
                        end: { line: errLine, character: Number.MAX_VALUE },
                    },
                    message: detail,
                    source: "ink-lsp",
                });
            }
        } else {
            diagnostics.push({
                severity: DiagnosticSeverity.Error,
                range: {
                    start: { line: 0, character: 0 },
                    end: { line: 0, character: Number.MAX_VALUE },
                },
                message: errMsg,
                source: "ink-lsp",
            });
        }
    }

    connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
}

// ------------------------------------------------------------------
// 1. Definition Provider
// ------------------------------------------------------------------
export function findDefinition(
    storyAST: StoryAST,
    params: DefinitionParams,
): Location | null {
    const filePath = fromFileUrl(params.textDocument.uri);
    const targetLine = params.position.line;
    const divertNode = find_node_at_position(storyAST, filePath, targetLine);
    console.log("findDefinition", JSON.stringify(divertNode));
    // Definitions only make sense if we're clicking on a Divert
    if (!divertNode || divertNode.type !== "Divert") return null;

    const targetName = divertNode.target;
    let defNode: KnotNode | StitchNode | null = null;

    const parts = targetName.split(".");
    if (parts.length === 1) {
        if (storyAST.knots[parts[0]]) {
            defNode = storyAST.knots[parts[0]];
        } else {
            // Look through all stitches to find a local match
            for (const knot of Object.values(storyAST.knots)) {
                for (const stitch of knot.stitches || []) {
                    if (stitch.name === parts[0]) {
                        defNode = stitch;
                        break;
                    }
                }
                if (defNode) break;
            }
        }
    } else if (parts.length === 2) {
        // Divert points to Knot.Stitch
        const knot = storyAST.knots[parts[0]];
        if (knot) {
            for (const stitch of knot.stitches || []) {
                if (stitch.name === parts[1]) {
                    defNode = stitch;
                    break;
                }
            }
        }
    }

    if (!defNode) return null;

    return {
        uri: toFileUrl(defNode.file).href,
        range: {
            start: { line: defNode.line, character: 0 },
            end: { line: defNode.line, character: Number.MAX_VALUE },
        },
    };
}

// ------------------------------------------------------------------
// 2. References Provider
// ------------------------------------------------------------------
export function findReferences(
    storyAST: StoryAST,
    params: ReferenceParams,
): Location[] | null {
    const filePath = fromFileUrl(params.textDocument.uri);
    const targetLine = params.position.line;

    const targetNode = find_node_at_position(storyAST, filePath, targetLine);

    if (!targetNode) return null;

    let searchName = "";
    if (targetNode.type === "Knot" || targetNode.type === "Stitch") {
        searchName = targetNode.name;
    } else if (targetNode.type === "Divert") {
        searchName = targetNode.target;
    } else {
        return null;
    }

    const diverts: DivertNode[] = get_diverts_to(storyAST, searchName);

    const locations: Location[] = [];
    for (const divert of diverts) {
        locations.push({
            uri: toFileUrl(divert.file).href,
            range: {
                start: { line: divert.line, character: 0 },
                end: { line: divert.line, character: Number.MAX_VALUE },
            },
        });
    }

    return locations;
}
