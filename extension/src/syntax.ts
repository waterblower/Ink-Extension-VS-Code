// Line-level syntax helpers shared by navigation, completion, symbols and
// formatting. Ink is line-oriented, so a handful of anchored regexes cover
// every structural construct we care about.

/**
 * Ink identifiers are broader than most languages: inkjs accepts names
 * that start with digits (`2nd_floor_entry`) and CJK characters, so every
 * name pattern must build on this source string, never on `[a-zA-Z_]\w*`.
 */
export const ID_SRC =
    "[0-9A-Za-z_\\u3040-\\u30FF\\u4E00-\\u9FFF\\uAC00-\\uD7AF]+";

/** An identifier, or a dot-path of identifiers (`knot.stitch`). */
export const ID_PATH_SRC = `${ID_SRC}(?:\\.${ID_SRC})*`;

/** `=== name ===`, `== name`, `=== function name(a, b) ===` */
export const KNOT_RE = new RegExp(
    `^(={2,})\\s*(function\\s+)?(${ID_SRC})\\s*(\\([^)]*\\))?\\s*(={2,})?\\s*$`,
);

/** `= name` or `= name(a, b)` — exactly one leading `=` */
export const STITCH_RE = new RegExp(
    `^=(?!=)\\s*(${ID_SRC})\\s*(\\([^)]*\\))?\\s*$`,
);

export const INCLUDE_RE = /^INCLUDE\s+(.+)$/;

export type Declaration = {
    kind: "knot" | "stitch";
    name: string;
};

/** Parse a (trimmed) line as a knot or stitch header. */
export const parseDeclaration = (trimmedLine: string): Declaration | null => {
    const knot = trimmedLine.match(KNOT_RE);
    if (knot) return { kind: "knot", name: knot[3] };

    const stitch = trimmedLine.match(STITCH_RE);
    if (stitch) return { kind: "stitch", name: stitch[1] };

    return null;
};

/** Drop everything from `//` onwards so matches inside comments are ignored. */
export const stripLineComment = (line: string): string => {
    const idx = line.indexOf("//");
    return idx === -1 ? line : line.slice(0, idx);
};

export type DivertTarget = {
    name: string;
    /** Column of the first character of the target name. */
    col: number;
};

const DIVERT_RE = new RegExp(`->[ \\t]*(${ID_PATH_SRC})`, "g");

/** All divert targets on a line, excluding the built-in END / DONE. */
export const parseDivertTargets = (line: string): DivertTarget[] => {
    const searchIn = stripLineComment(line);
    const targets: DivertTarget[] = [];
    for (const m of searchIn.matchAll(DIVERT_RE)) {
        const name = m[1];
        if (name === "END" || name === "DONE") continue;
        targets.push({ name, col: m.index + m[0].indexOf(name) });
    }
    return targets;
};

/**
 * True when the given column of a line sits in a logic context — a
 * `VAR`/`CONST`/`LIST` declaration, after a `~`, or inside `{ ... }` —
 * which is where variable names (rather than prose) appear.
 */
export const isLogicContext = (line: string, col: number): boolean => {
    if (/^\s*(?:VAR|CONST|LIST)\s/.test(line)) return true;
    if (line.lastIndexOf("~", col) !== -1) return true;

    const lastOpen = line.lastIndexOf("{", col);
    if (lastOpen === -1) return false;
    const nextClose = line.indexOf("}", col);
    return nextClose !== -1 && nextClose > lastOpen;
};

/** Words that never name a variable even in logic context. */
export const LOGIC_KEYWORDS = new Set([
    "temp",
    "true",
    "false",
    "and",
    "or",
    "not",
    "return",
    "else",
    "if",
]);
