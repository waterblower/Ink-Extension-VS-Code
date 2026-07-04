import * as vscode from "vscode";
import { completionProvider } from "./completion.ts";
import { InkDiagnostics } from "./diagnostics.ts";
import {
    formattingProvider,
    rangeFormattingProvider,
} from "./formatProvider.ts";
import { documentHighlightProvider } from "./highlight.ts";
import { imageHoverProvider, imageLinkProvider } from "./images.ts";
import {
    definitionProvider,
    hoverProvider,
    referenceProvider,
} from "./navigation.ts";
import { foldingProvider, symbolProvider } from "./symbols.ts";

export const activate = (context: vscode.ExtensionContext): void => {
    const INK: vscode.DocumentSelector = { language: "ink" };

    new InkDiagnostics().register(context);

    context.subscriptions.push(
        vscode.languages.registerDefinitionProvider(INK, definitionProvider),
        vscode.languages.registerReferenceProvider(INK, referenceProvider),
        vscode.languages.registerHoverProvider(INK, hoverProvider),
        vscode.languages.registerHoverProvider(INK, imageHoverProvider),
        vscode.languages.registerDocumentLinkProvider(INK, imageLinkProvider),
        vscode.languages.registerDocumentSymbolProvider(INK, symbolProvider),
        vscode.languages.registerFoldingRangeProvider(INK, foldingProvider),
        vscode.languages.registerDocumentFormattingEditProvider(
            INK,
            formattingProvider,
        ),
        vscode.languages.registerDocumentRangeFormattingEditProvider(
            INK,
            rangeFormattingProvider,
        ),
        vscode.languages.registerDocumentHighlightProvider(
            INK,
            documentHighlightProvider,
        ),
        vscode.languages.registerCompletionItemProvider(
            INK,
            completionProvider,
            ">",
            ".",
        ),
    );
};

export const deactivate = (): void => {};
