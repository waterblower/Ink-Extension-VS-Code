// --- 1. TYPES & AST ---

export type TokenType =
    | "KNOT"
    | "STITCH"
    | "OPTION"
    | "DIVERT"
    | "INCLUDE"
    | "TEXT"
    | "TAG"
    | "EOF";

export type Token = {
     type: TokenType;
     value: string;
     line: number;
     col: number;
     file: string;
}

//  | {
//     type: "TAG",
//     value: {
//         name: string,
//         value: string
//     },
//     file: string,
//     line: string,
//     col: string
// };

// AST Nodes
export type TextNode = {  type: "Text";  text: string };
export type DivertNode = {  type: "Divert";  target: string };
export type TagNode = {  type: "Tag";  name: string, value: string };
export type ContentNode = TextNode | DivertNode | TagNode;

export type OptionNode = {
     type: "Option";
     text: string;
     content:  ContentNode[];
};

export type BlockNode = {
     content:  ContentNode[];
     options:  OptionNode[];
};

export type StitchNode = {
     type: "Stitch";
     name: string;
     block: BlockNode;
};

export type KnotNode = {
     type: "Knot";
     name: string;
     block: BlockNode;
     stitches:  StitchNode[];
};

export type StoryAST = {
     type: "Story";
     knots:  KnotNode[];
};

// Compiled JSON Output
export type CompiledContent =
    | {  type: "text";  text: string }
    | {  type: "divert";  target: string };

export type CompiledOption = {
     text: string;
     content:  CompiledContent[];
};

export type CompiledBlock = {
     content:  CompiledContent[];
     options:  CompiledOption[];
};

export type CompiledStory = {
     knots: 
        Record<
            string,
            CompiledBlock & {
                stitches: Record<string, CompiledBlock>
            }
        >
    
};

// --- 2. TOKENIZER ---
const parseLineToToken = (
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

export const tokenize = (input: string, filename: string):  Token[] => {
    const lines = input.split("\n");
    const tokens = lines
        .map((line, idx) => parseLineToToken(line, idx + 1, filename))
        .filter((t) => t !== null);

    return [...tokens, {
        type: "EOF",
        value: "",
        line: lines.length + 1,
        col: 1,
        file: filename,
    }];
};

import * as path from "@std/path"
export const resolveIncludes = (
    tokens:  Token[],
    visited: Set<string>,
):  Token[] | Error => {
    if (tokens.length === 0) return [];
    const [head, ...tail] = tokens;

    if (head.type === "INCLUDE") {
        const filename = head.value;
        if (visited.has(filename)) {
            return new Error(
                `Compiler Error: Circular INCLUDE detected -> ${filename} at ${head.file}:${head.line}`,
            );
        }
        const dir = path.dirname(Deno.realPathSync(head.file))
        const included_file_path = path.join(dir, filename)
        const file_content = Deno.readTextFileSync(included_file_path)

        // Tokenize the included file, strip its EOF, and recurse
        const includedTokens = tokenize(file_content, included_file_path).filter((t) =>
            t.type !== "EOF"
        );
        const resolvedIncluded = resolveIncludes(includedTokens, visited);
        if (resolvedIncluded instanceof Error) {
            return resolvedIncluded;
        }

        const r2 = resolveIncludes(tail, visited);
        if (r2 instanceof Error) {
            return r2;
        }

        return [...resolvedIncluded, ...r2];
    }

    const r = resolveIncludes(tail, visited);
    if (r instanceof Error) {
        return r;
    }

    return [head, ...r];
};

// --- 3. PARSER ---

type ParseResult<T> = {  value: T;  rest:  Token[] };

const formatError = (msg: string, t: Token) =>
    `Syntax Error in ${t.file} at line ${t.line}: ${msg}. Found: '${t.type}'`;

const isBlockEnd = (
    t: Token,
    context: "KNOT" | "STITCH" | "OPTION",
): boolean => {
    if (t.type === "EOF" || t.type === "KNOT") {
        return true;
    }
    if(t.type == "STITCH" && context == "KNOT") {
        return true
    }
    if (context === "STITCH" || context === "OPTION") {
        if (t.type === "STITCH") {
            return true;
        }
    }
    if (context === "OPTION" && t.type === "OPTION") return true;
    return false;
};

const parseContentNode = (tokens: Token[]): ParseResult<ContentNode> | Error => {
    const head = tokens[0];
    if (head.type === "TEXT") {
        return {
            value: { type: "Text", text: head.value },
            rest: tokens.slice(1),
        };
    }
    if (head.type === "DIVERT") {
        return {
            value: { type: "Divert", target: head.value },
            rest: tokens.slice(1),
        };
    }
    if(head.type == "TAG") {
        const [name, value] = head.value.split(":")
        return {
            rest: tokens.slice(1),
            value: {
                type: "Tag",
                name: name.trim(),
                value: value.trim()
            }
        }
    }
    return new Error(formatError("Unexpected token in content", head));
};

const parseBlockContent = (
    tokens:  Token[],
    context: "KNOT" | "STITCH" | "OPTION",
): ParseResult< ContentNode[]> | Error => {
    if (
        tokens.length === 0 || isBlockEnd(tokens[0], context) ||
        tokens[0].type === "OPTION"
    ) {
        return { value: [], rest: tokens };
    }

    console.log("context", tokens[0])
    const content_node = parseContentNode(tokens);
    if(content_node instanceof Error) {
        return content_node
    }
    const { value: node, rest: afterNode } = content_node

    const next = parseBlockContent(afterNode, context);
    if (next instanceof Error) {
        return next;
    }
    return { value: [node, ...next.value], rest: next.rest };
};

const parseOptions = (
    tokens:  Token[],
): ParseResult< OptionNode[]> | Error => {
    if (tokens.length === 0 || tokens[0].type !== "OPTION") {
        return { value: [], rest: tokens };
    }

    const head = tokens[0];
    const block_content = parseBlockContent(tokens.slice(1), "OPTION");
    if (block_content instanceof Error) {
        return block_content;
    }
    const { value: content, rest: afterContent } = block_content;
    const optionNode: OptionNode = {
        type: "Option",
        text: head.value,
        content,
    };

    const next = parseOptions(afterContent);
    if (next instanceof Error) {
        return next;
    }
    return { value: [optionNode, ...next.value], rest: next.rest };
};

const parseBlock = (
    tokens:  Token[],
    context: "KNOT" | "STITCH",
): ParseResult<BlockNode> | Error => {
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
        value: {
            content,
            options: options.value,
        },
        rest: options.rest,
    };
};

const parseStitches = (
    tokens:  Token[],
): ParseResult< StitchNode[]> | Error => {
    if (tokens.length === 0 || tokens[0].type !== "STITCH") {
        return { value: [], rest: tokens };
    }

    const head = tokens[0];
    const content_block = parseBlock(
        tokens.slice(1),
        "STITCH",
    );
    if(content_block instanceof Error) {
        return content_block
    }
    const { value: block, rest: afterBlock } = content_block;
    const stitchNode: StitchNode = { type: "Stitch", name: head.value, block };

    const next = parseStitches(afterBlock);
    if(next instanceof Error) {
        return next
    }
    return { value: [stitchNode, ...next.value], rest: next.rest };
};

const parseKnots = (
    tokens:  Token[],
): ParseResult< KnotNode[]> | Error => {
    if (tokens.length === 0 || tokens[0].type === "EOF") {
        return { value: [], rest: tokens };
    }

    const head = tokens[0];
    // In Ink, content at the very top (before any knot) runs automatically.
    // For our minimal AST, we expect strict knot definitions or we throw.
    if (head.type !== "KNOT") {
        return new Error(formatError("Expected Knot declaration", head));
    }

    const block_content =  parseBlock(
        tokens.slice(1),
        "KNOT",
    );
    if(block_content instanceof Error) {
        return block_content
    }
    const { value: block, rest: afterBlock } = block_content

    const stitches = parseStitches(afterBlock);
    if(stitches instanceof Error) {
        return stitches
    }
    const { value } = stitches

    const knotNode: KnotNode = {
        type: "Knot",
        name: head.value,
        block,
        stitches: value,
    };

    const next = parseKnots(stitches.rest);
    if(next instanceof Error) {
        return next
    }
    return { value: [knotNode, ...next.value], rest: next.rest };
};

export const parse = (tokens:  Token[]): StoryAST | Error => {
    const _knots = parseKnots(tokens);
    if(_knots instanceof Error) {
        return _knots
    }
    const { value: knots, rest } =  _knots
    if (rest.length > 0 && rest[0].type !== "EOF") {
        return new Error(formatError("Unexpected trailing tokens", rest[0]));
    }
    return { type: "Story", knots };
};


// --- ORCHESTRATOR ---
export const buildStory = (
    entry_file_path: string,
): CompiledStory | StoryAST | Error => {

    const text = Deno.readTextFileSync(entry_file_path)

    // Pipeline
    // Tokenization / Lexing
    const rawTokens = tokenize(text, entry_file_path);
    const resolvedTokens = resolveIncludes(rawTokens, new Set([entry_file_path]));
    if(resolvedTokens instanceof Error) {
        return resolvedTokens
    }

    // Parsing
    const ast = parse(resolvedTokens);
    if(ast instanceof Error) {
        return ast
    }

    // Compilation
    return ast
    // return compile(ast);
};


Deno.test("test", () => {
    const result = buildStory("../stories/story1/world.ink");
    console.log(result)
    Deno.writeTextFileSync("./test.json", JSON.stringify(result, null, 2))
})
