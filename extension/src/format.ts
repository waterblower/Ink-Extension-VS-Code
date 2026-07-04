// Document formatter. Ink ignores whitespace entirely, so re-indenting is
// always safe; the goal is a consistent weave layout:
//
//   === knot_name ===
//   * choice                 (depth 1 → column 0)
//       content under it     (indented one unit)
//       * * nested choice    (depth 2 → one unit)
//   - gather                 (back to column 0)
//
// Structural lines are normalized (`===name` → `=== name ===`, marker
// spacing, `~`/keyword spacing); prose content is never rewritten, only
// re-indented. Lines inside multi-line `{ … }` logic blocks and block
// comments are left untouched except for trailing whitespace.

const KNOT_FMT_RE =
    /^(={2,})\s*(function\s+)?([a-zA-Z_]\w*)\s*(\([^)]*\))?\s*(={2,})?\s*$/;
const STITCH_FMT_RE = /^=(?!=)\s*([a-zA-Z_]\w*)\s*(\([^)]*\))?\s*$/;
const KEYWORD_RE = /^(INCLUDE|VAR|CONST|LIST|EXTERNAL)\s+(.+)$/;

type Markers = {
    kind: "choice" | "gather";
    /** The marker characters in order, e.g. ["*", "*"]. */
    chars: string[];
    /** The line content after the markers. */
    rest: string;
};

const parseMarkers = (trimmed: string): Markers | null => {
    const first = trimmed[0];
    if (first !== "*" && first !== "+" && first !== "-") return null;
    const isGather = first === "-";

    const chars: string[] = [];
    let i = 0;
    while (i < trimmed.length) {
        const ch = trimmed[i];
        if (ch === " " || ch === "\t") {
            i++;
        } else if (!isGather && (ch === "*" || ch === "+")) {
            chars.push(ch);
            i++;
        } else if (isGather && ch === "-" && trimmed[i + 1] !== ">") {
            chars.push(ch);
            i++;
        } else {
            break;
        }
    }
    if (chars.length === 0) return null;
    return {
        kind: isGather ? "gather" : "choice",
        chars,
        rest: trimmed.slice(i).trim(),
    };
};

/** Braces opened/closed on a line, ignoring comments; tracks block comments. */
const scanLine = (
    line: string,
    inBlockComment: boolean,
): { inBlockComment: boolean; braceDelta: number } => {
    let braceDelta = 0;
    let inBlock = inBlockComment;
    let i = 0;
    while (i < line.length) {
        if (inBlock) {
            if (line.startsWith("*/", i)) {
                inBlock = false;
                i += 2;
            } else {
                i++;
            }
        } else if (line.startsWith("//", i)) {
            break;
        } else if (line.startsWith("/*", i)) {
            inBlock = true;
            i += 2;
        } else {
            if (line[i] === "{") braceDelta++;
            else if (line[i] === "}") braceDelta--;
            i++;
        }
    }
    return { inBlockComment: inBlock, braceDelta };
};

/** Format whole-document text; returns the formatted lines. */
export const formatInk = (lines: string[], indentUnit: string): string[] => {
    const result: string[] = [];
    const indent = (depth: number) => indentUnit.repeat(Math.max(0, depth));

    let contentDepth = 0;
    let braceDepth = 0;
    let inBlockComment = false;

    for (const line of lines) {
        const startedInBlockComment = inBlockComment;
        const startedInBraces = braceDepth > 0;
        const scan = scanLine(line, inBlockComment);
        inBlockComment = scan.inBlockComment;
        braceDepth = Math.max(0, braceDepth + scan.braceDelta);

        const trimmed = line.trim();

        // Untouchable regions: only strip trailing whitespace.
        if (startedInBlockComment || startedInBraces) {
            result.push(line.replace(/[ \t]+$/, ""));
            continue;
        }

        if (trimmed === "") {
            result.push("");
            continue;
        }

        const knot = trimmed.match(KNOT_FMT_RE);
        if (knot) {
            const fn = knot[2] ? "function " : "";
            const params = knot[4] ?? "";
            result.push(`=== ${fn}${knot[3]}${params} ===`);
            contentDepth = 0;
            continue;
        }

        const stitch = trimmed.match(STITCH_FMT_RE);
        if (stitch) {
            result.push(`= ${stitch[1]}${stitch[2] ?? ""}`);
            contentDepth = 0;
            continue;
        }

        const keyword = trimmed.match(KEYWORD_RE);
        if (keyword) {
            result.push(`${keyword[1]} ${keyword[2].trim()}`);
            continue;
        }

        const markers = parseMarkers(trimmed);
        if (markers) {
            const depth = markers.chars.length;
            const head = markers.chars.join(" ");
            const body = markers.rest === "" ? "" : ` ${markers.rest}`;
            result.push(indent(depth - 1) + head + body);
            // Content under a choice nests one level deeper; a gather
            // pulls the flow back to its own level.
            contentDepth = markers.kind === "choice" ? depth : depth - 1;
            continue;
        }

        if (trimmed.startsWith("~")) {
            const rest = trimmed.slice(1).trim();
            result.push(indent(contentDepth) + `~ ${rest}`);
            continue;
        }

        // Plain content (prose, diverts, tags, comments): re-indent only.
        result.push(indent(contentDepth) + trimmed);
    }

    return result;
};
