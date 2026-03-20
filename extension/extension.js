import { workspace } from "vscode";
import { LanguageClient, TransportKind } from "vscode-languageclient/node.js";

/** @type {LanguageClient} */
let client;

/**
 * @param {import("vscode").ExtensionContext} context
 */
export function activate(context) {
    // 1. Resolve the absolute path to your executable.
    // NOTE: If lsp.exe is inside a 'bin' or 'dist' folder after your build process,
    // update this string to match (e.g., "dist/lsp.exe")
    const serverCommand = context.asAbsolutePath("lsp.exe");

    // Configure how the server process is started
    const serverOptions = {
        command: serverCommand, // 2. Use the absolute path here
        transport: TransportKind.stdio,
    };

    // Options to control the language client
    /** @type {import("vscode-languageclient/node").LanguageClientOptions} */
    const clientOptions = {
        // Register the server for '.ink' files.
        // Ensure your package.json contributes the 'ink' language!
        documentSelector: [{ scheme: "file", language: "ink" }],
        synchronize: {
            // Notify the server about file changes to '.clientrc files contained in the workspace
            fileEvents: workspace.createFileSystemWatcher("**/.clientrc"),
        },
    };

    // Create the language client and start the client.
    client = new LanguageClient(
        "inkLanguageServer",
        "Ink Language Server",
        serverOptions,
        clientOptions,
    );

    // Start the client. This will also launch the server
    client.start();
}

/**
 * @returns {Thenable<void> | undefined}
 */
export function deactivate() {
    if (!client) {
        return undefined;
    }
    return client.stop();
}
