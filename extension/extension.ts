import { ExtensionContext, workspace } from "vscode";
import {
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
  TransportKind,
} from "vscode-languageclient/node";
import * as path from "path";

let client: LanguageClient;

export function activate(context: ExtensionContext) {
  // 1. Resolve the absolute path to your executable.
  // NOTE: If lsp.exe is inside a 'bin' or 'dist' folder after your build process,
  // update this string to match (e.g., "dist/lsp.exe")
  const serverCommand = context.asAbsolutePath("lsp.exe");

  // Configure how the server process is started
  const serverOptions: ServerOptions = {
    command: serverCommand, // 2. Use the absolute path here
    transport: TransportKind.stdio,
  };

  // Options to control the language client
  const clientOptions: LanguageClientOptions = {
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

export function deactivate(): Thenable<void> | undefined {
  if (!client) {
    return undefined;
  }
  return client.stop();
}
