import * as path from "@std/path";

export const buildStory = async (
    entry_file_path: string,
): Promise<StoryAST | Error> => {
    // Tokenization / Lexing
    const all_tokens = await tokenizeAll(entry_file_path);
    const all_asts: StoryAST[] = [];

    for (const [_, tokens] of all_tokens) {
        // Parsing
        const ast = parse(tokens);
        if (ast instanceof Error) {
            return ast;
        }
        all_asts.push(ast);
    }
    const merged_ast = all_asts[0];
    for (const ast of all_asts.slice(1)) {
        merge_into(merged_ast, ast);
    }
    return merged_ast;
};

export const buildStoryIncremental = async (
    target_ast: StoryAST,
    entry_file_path: string,
): Promise<Error | void> => {
    const ast = await buildStory(entry_file_path);
    if (ast instanceof Error) {
        return ast;
    }
    merge_into(target_ast, ast);
};

///////////////
// Tokenizer //
///////////////
export type Location = {
    line: number;
    col: number;
    file: string;
};

export type TokenType =
    | "KNOT"
    | "STITCH"
    | "OPTION"
    | "DIVERT"
    | "INCLUDE"
    | "TEXT"
    | "TAG"
    | "EOF";

export type Token = Location & {
    type: TokenType;
    value: string;
};

export const tokenizeLine = (
    line: string,
    lineNum: number,
    file: string,
): Token | null => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("//")) return null; // Ignore empty/comments

    const matchKnot = trimmed.match(/^===[ ]*([a-zA-Z0-9_]+)[ ]*=*/);
    if (matchKnot) {
        return {
            type: "KNOT",
            value: matchKnot[1],
            line: lineNum,
            col: 1,
            file,
        };
    }

    const matchStitch = trimmed.match(/^=\s*([a-zA-Z0-9_]+)/);
    if (matchStitch) {
        return {
            type: "STITCH",
            value: matchStitch[1],
            line: lineNum,
            col: 1,
            file,
        };
    }

    const matchOption = trimmed.match(/^\*\s+(.+)/);
    if (matchOption) {
        return {
            type: "OPTION",
            value: matchOption[1],
            line: lineNum,
            col: 1,
            file,
        };
    }

    const matchDivert = trimmed.match(/^->\s*([a-zA-Z0-9_.]+)/);
    if (matchDivert) {
        return {
            type: "DIVERT",
            value: matchDivert[1],
            line: lineNum,
            col: 1,
            file,
        };
    }

    const matchInclude = trimmed.match(/^INCLUDE\s+(.+)/);
    if (matchInclude) {
        return {
            type: "INCLUDE",
            value: matchInclude[1].trim(),
            line: lineNum,
            col: 1,
            file,
        };
    }

    const matchTag = trimmed.match(/^#(\s*[a-zA-Z0-9]+\s*:\s*.+)/);
    if (matchTag) {
        return {
            type: "TAG",
            value: matchTag[1].trim(),
            line: lineNum,
            col: 1,
            file,
        };
    }

    return { type: "TEXT", value: trimmed, line: lineNum, col: 1, file };
};

export const tokenize = (input: string, filename: string): Token[] => {
    const lines = input.split("\n");
    const tokens = lines
        .map((line, idx) => tokenizeLine(line, idx, filename))
        .filter((t) => t !== null);

    return [...tokens, {
        type: "EOF",
        value: "",
        line: lines.length + 1,
        col: 1,
        file: filename,
    }];
};

/**
 * 1. tokenize the input file
 * 2. find all included files in the input file
 * 3. tokenize included files
 * 4. return a map of file_path -> tokens
 * - don't merge tokens of files
 */
export async function tokenizeAll(
    file_path: string,
): Promise<Map<string, Token[]>> {
    const tokensMap = new Map<string, Token[]>();
    const visited = new Set<string>();

    async function processFile(currentPath: string) {
        if (visited.has(currentPath)) return;
        visited.add(currentPath);

        const text = await readTextFile(currentPath);
        const tokens = tokenize(text, currentPath);
        tokensMap.set(currentPath, tokens.filter((t) => t.type != "INCLUDE"));

        // The path import needs to be available in this scope.
        // (Make sure `import * as path from "@std/path";` is at the top of your file)
        const dir = path.dirname(currentPath);
        // Find includes and process them recursively
        for (const token of tokens) {
            if (token.type === "INCLUDE") {
                const includedFilePath = path.join(dir, token.value);
                await processFile(includedFilePath);
            }
        }
    }

    await processFile(path.resolve(file_path));
    return tokensMap;
}

////////////
// Parser //
////////////
export type StoryAST = {
    type: "Story";
    content: ContentNode[];
    options: OptionNode[];
    knots: Record<string, KnotNode>;
};

export type TextNode = Location & { type: "Text"; text: string };
export type DivertNode = Location & { type: "Divert"; target: string };
export type TagNode = Location & { type: "Tag"; name: string; value: string };
export type ContentNode = TextNode | DivertNode | TagNode;

export type OptionNode = Location & {
    type: "Option";
    text: string;
    content: ContentNode[];
};

export type StitchNode = Location & {
    type: "Stitch";
    name: string;
    content: ContentNode[];
    options: OptionNode[];
};

export type KnotNode = Location & {
    type: "Knot";
    name: string;
    content: ContentNode[];
    options: OptionNode[];
    stitches: StitchNode[];
};

type ParseResult<T> = { value: T; rest: Token[] };

// Helper to grab location safely
const getLoc = (token: Token | undefined): Location => {
    if (token) {
        return { line: token.line, col: token.col, file: token.file };
    }
    return { line: 0, col: 0, file: "unknown" };
};

const parseContentNode = (
    tokens: Token[],
): ParseResult<ContentNode> | Error => {
    const head = tokens[0];
    const loc = getLoc(head);

    if (head.type === "TEXT") {
        return {
            value: { type: "Text", text: head.value, ...loc },
            rest: tokens.slice(1),
        };
    }
    if (head.type === "DIVERT") {
        return {
            value: { type: "Divert", target: head.value, ...loc },
            rest: tokens.slice(1),
        };
    }
    if (head.type == "TAG") {
        const [name, value] = head.value.split(":");
        return {
            rest: tokens.slice(1),
            value: {
                type: "Tag",
                name: name.trim(),
                value: value.trim(),
                ...loc,
            },
        };
    }
    return new Error(formatError("Unexpected token in content", head));
};

const parseContentNode_v2 = (
    token: Token,
): ContentNode | Error => {
    const head = token;
    const loc = getLoc(head);

    if (head.type === "TEXT") {
        return { type: "Text", text: head.value, ...loc };
    }
    if (head.type === "DIVERT") {
        return { type: "Divert", target: head.value, ...loc };
    }
    if (head.type == "TAG") {
        const [name, value] = head.value.split(":");
        return {
            type: "Tag",
            name: name.trim(),
            value: value.trim(),
            ...loc,
        };
    }
    return new Error(formatError("Unexpected token in content", head));
};

const parseBlockContent = (
    tokens: Token[],
    context: "KNOT" | "STITCH" | "OPTION",
): ParseResult<ContentNode[]> | Error => {
    if (
        tokens.length === 0 || isBlockEnd(tokens[0], context) ||
        tokens[0].type === "OPTION"
    ) {
        return { value: [], rest: tokens };
    }

    const content_node = parseContentNode(tokens);
    if (content_node instanceof Error) {
        return content_node;
    }
    const { value: node, rest: afterNode } = content_node;

    const next = parseBlockContent(afterNode, context);
    if (next instanceof Error) {
        return next;
    }
    return { value: [node, ...next.value], rest: next.rest };
};

const parseOptions = (
    tokens: Token[],
): ParseResult<OptionNode[]> | Error => {
    if (tokens.length === 0 || tokens[0].type !== "OPTION") {
        return { value: [], rest: tokens };
    }

    const head = tokens[0];
    const loc = getLoc(head);
    const block_content = parseBlockContent(tokens.slice(1), "OPTION");
    if (block_content instanceof Error) {
        return block_content;
    }
    const { value: content, rest: afterContent } = block_content;
    const optionNode: OptionNode = {
        type: "Option",
        text: head.value,
        content,
        ...loc,
    };

    const next = parseOptions(afterContent);
    if (next instanceof Error) {
        return next;
    }
    return { value: [optionNode, ...next.value], rest: next.rest };
};

const parseBlock = (
    tokens: Token[],
    context: "KNOT" | "STITCH",
) => {
    const block_content = parseBlockContent(tokens, context);
    if (block_content instanceof Error) {
        return block_content;
    }
    const { value: content, rest: afterContent } = block_content;

    const options = parseOptions(afterContent);
    if (options instanceof Error) {
        return options;
    }
    return {
        content,
        options: options.value,
        rest: options.rest,
    };
};

const parseStitches = (
    tokens: Token[],
): ParseResult<StitchNode[]> | Error => {
    if (tokens.length === 0 || tokens[0].type !== "STITCH") {
        return { value: [], rest: tokens };
    }

    const head = tokens[0];
    const loc = getLoc(head);
    const block = parseBlock(
        tokens.slice(1),
        "STITCH",
    );
    if (block instanceof Error) {
        return block;
    }
    const { content, options, rest: afterBlock } = block;
    const stitchNode: StitchNode = {
        type: "Stitch",
        name: head.value,
        content,
        options,
        ...loc,
    };

    const next = parseStitches(afterBlock);
    if (next instanceof Error) {
        return next;
    }
    return { value: [stitchNode, ...next.value], rest: next.rest };
};

const parseKnots = (
    tokens: Token[],
): ParseResult<KnotNode[]> | Error => {
    if (tokens.length === 0 || tokens[0].type === "EOF") {
        return { value: [], rest: tokens };
    }

    const head = tokens[0];
    const loc = getLoc(head);
    if (head.type !== "KNOT") {
        return new Error(formatError("Expected Knot declaration", head));
    }

    const block = parseBlock(
        tokens.slice(1),
        "KNOT",
    );
    if (block instanceof Error) {
        return block;
    }
    const { content, options, rest: afterBlock } = block;

    const stitches = parseStitches(afterBlock);
    if (stitches instanceof Error) {
        return stitches;
    }
    const { value } = stitches;

    const knotNode: KnotNode = {
        type: "Knot",
        name: head.value,
        content,
        options,
        stitches: value,
        ...loc,
    };

    const next = parseKnots(stitches.rest);
    if (next instanceof Error) {
        return next;
    }
    return { value: [knotNode, ...next.value], rest: next.rest };
};

export const parse = (tokens: Token[]): StoryAST | Error => {
    const contents = parseContents_V2(tokens);
    if (contents instanceof Error) {
        return contents;
    }

    const options = parseOptions(contents.rest);
    if (options instanceof Error) {
        return options;
    }

    const _knots = parseKnots(options.rest);
    if (_knots instanceof Error) {
        return _knots;
    }
    const { value: knotsArray, rest } = _knots;
    if (rest.length > 0 && rest[0].type !== "EOF") {
        return new Error(formatError("Unexpected trailing tokens", rest[0]));
    }

    // Transform the Knot array into a Dictionary/Record mapped by knot name
    const knots: Record<string, KnotNode> = {};
    for (const knot of knotsArray) {
        knots[knot.name] = knot;
    }

    return {
        type: "Story",
        content: contents.value,
        options: options.value,
        knots,
    };
};

const parseContents_V2 = (
    tokens: Token[],
): ParseResult<ContentNode[]> | Error => {
    if (tokens.length === 0) {
        return new Error("should not have 0 tokens at this stage");
    }
    const nodes: ContentNode[] = [];
    for (const token of tokens) {
        const content_node = parseContentNode_v2(token);
        if (content_node instanceof Error) {
            break;
        }
        nodes.push(content_node);
    }
    return { value: nodes, rest: tokens.slice(nodes.length) };
};

/////////////
// Helpers //
/////////////
const formatError = (msg: string, t: Token) =>
    `Syntax Error in ${t.file}:${t.line} - ${msg}. Found: '${t.type}'`;

const isBlockEnd = (
    t: Token,
    context: "KNOT" | "STITCH" | "OPTION",
): boolean => {
    if (t.type === "EOF" || t.type === "KNOT") {
        return true;
    }
    if (t.type == "STITCH" && context == "KNOT") {
        return true;
    }
    if (context === "STITCH" || context === "OPTION") {
        if (t.type === "STITCH") {
            return true;
        }
    }
    if (context === "OPTION" && t.type === "OPTION") return true;
    return false;
};

/**
 * merge ast2 into ast1 so that ast1 will be modified.
 * ast2 might contain new nodes or updated content of existing nodes
 * when merging ast2 into ast1, override ast1 when there are name conflicts
 * because conflicts means updates
 */
export function merge_into(ast1: StoryAST, ast2: StoryAST): void {
    // 1. Update the root Story block if the new AST has root content
    if (ast2.content.length > 0 || ast2.options.length > 0) {
        ast1.content = ast1.content.concat(ast2.content);
        ast1.options = ast1.options.concat(ast2.options);
    }

    // 2. Merge Knots as a Record
    for (const [knotName, knot2] of Object.entries(ast2.knots)) {
        const knot1 = ast1.knots[knotName];

        if (knot1) {
            // Name conflict -> Override the existing knot's block
            knot1.content = knot2.content;
            knot1.options = knot2.options;

            // 3. Merge Stitches within the updated Knot
            for (const stitch2 of knot2.stitches) {
                const stitch1 = knot1.stitches.find((s) =>
                    s.name === stitch2.name
                );

                if (stitch1) {
                    // Name conflict -> Override the existing stitch's block
                    stitch1.content = stitch2.content;
                    stitch1.options = stitch2.options;
                } else {
                    // New Stitch -> Add to the existing knot
                    knot1.stitches.push(stitch2);
                }
            }
        } else {
            // New Knot -> Add to the story mapping
            ast1.knots[knotName] = knot2;
        }
    }
}

// A union type of all AST nodes that have a 'Location' (file, line, col)
type SearchableNode = ContentNode | OptionNode | KnotNode | StitchNode;

// ------------------------------------------------------------------
// AST Traversal Helper
// ------------------------------------------------------------------
export function find_node_at_position(
    storyAST: StoryAST,
    filePath: string,
    targetLine: number,
): SearchableNode | null {
    console.log("find_node_at_position", filePath, targetLine);
    function search(node: SearchableNode): SearchableNode | null {
        // Traverse children first to return the most specific child node on a line
        switch (node.type) {
            case "Knot":
                for (const child of node.content) {
                    const found = search(child);
                    if (found) return found;
                }
                for (const option of node.options) {
                    const found = search(option);
                    if (found) return found;
                }
                for (const stitch of node.stitches) {
                    const found = search(stitch);
                    if (found) return found;
                }
                break;
            case "Stitch":
                for (const child of node.content) {
                    const found = search(child);
                    if (found) return found;
                }
                for (const option of node.options) {
                    const found = search(option);
                    if (found) return found;
                }
                break;
            case "Option":
                for (const child of node.content) {
                    const found = search(child);
                    if (found) return found;
                }
                break;
            case "Text":
            case "Divert":
            case "Tag":
                // These nodes have no children to traverse
                break;
        }

        // Check the node itself after checking children
        // console.log(path.resolve(node.file), path.resolve(filePath))
        if (node.file == filePath && node.line === targetLine) {
            return node;
        }

        return null;
    }

    for (const child of storyAST.content) {
        const found = search(child);
        if (found) return found;
    }
    for (const option of storyAST.options) {
        const found = search(option);
        if (found) return found;
    }
    for (const knot of Object.values(storyAST.knots)) {
        const found = search(knot);
        if (found) return found;
    }

    return null;
}

import fs from "node:fs";
async function readTextFile(path: string): Promise<string> {
    const content = await fs.promises.readFile(path, "utf-8");
    return content;
}
