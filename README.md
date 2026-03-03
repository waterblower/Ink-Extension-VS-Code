# Ink Language — VSCode Extension

Syntax highlighting for [inkle's Ink](https://www.inklestudios.com/ink/) scripting language (`.ink` files).

## Features

- **Knots & Stitches** — `=== knot_name ===` and `= stitch_name` are highlighted as named sections
- **Choices** — `*` (once-only) and `+` (sticky) choice bullets
- **Gathers** — `-` gather lines
- **Diverts** — `->` and the special targets `END` / `DONE`
- **Variables** — `VAR`, `CONST`, `temp` declarations with assignment highlighting
- **Lists** — `LIST` declarations and `ListName.item` references
- **Tilde statements** — `~` logic lines (assignments, function calls)
- **Tags** — `# key: value` metadata lines
- **Inline logic** — `{ }` blocks including conditionals, cycles, sequences, and alternatives (`|`)
- **Comments** — `//` line comments and `/* */` block comments
- **Keywords** — `INCLUDE`, `true`, `false`, `and`, `or`, `not`, `else`
- **Operators** — arithmetic, comparison, assignment, compound assignment
- **Function calls** — any `identifier(` pattern
- **String literals** — `"quoted strings"`
- **Numeric literals** — integers and decimals

## Installation (manual / development)

1. Copy the `ink-ext-vscode` folder into your VSCode extensions directory:

   | Platform | Path |
   |----------|------|
   | Windows  | `%USERPROFILE%\.vscode\extensions\` |
   | macOS    | `~/.vscode/extensions/` |
   | Linux    | `~/.vscode/extensions/` |

2. Restart (or reload) VSCode.

3. Open any `.ink` file — syntax highlighting will be applied automatically.

### Quick-install via symlink (recommended for development)

```sh
# Windows (run as Administrator or in a Developer shell)
mklink /D "%USERPROFILE%\.vscode\extensions\ink-lang" "C:\path\to\ink-ext-vscode"

# macOS / Linux
ln -s /path/to/ink-ext-vscode ~/.vscode/extensions/ink-lang
```

## Ink Language Quick Reference

| Syntax | Meaning |
|--------|---------|
| `=== knot_name ===` | Knot declaration |
| `= stitch_name` | Stitch declaration |
| `* choice text` | Once-only choice |
| `+ sticky choice` | Sticky (repeatable) choice |
| `- ` | Gather point |
| `-> knot_name` | Divert |
| `-> END` / `-> DONE` | End of story / thread |
| `VAR x = 0` | Global variable |
| `CONST c = 42` | Constant |
| `temp t = 0` | Temporary variable |
| `LIST l = a, (b), c` | List type (parentheses = default) |
| `~ x += 1` | Logic / code statement |
| `{ x > 0: yes \| no }` | Inline conditional |
| `INCLUDE file.ink` | Include another file |
| `# tag: value` | Tag metadata |
| `// comment` | Line comment |
| `/* comment */` | Block comment |

## Contributing

The grammar lives in `syntaxes/ink.tmLanguage.json` as a standard TextMate grammar.
Edit that file and reload VSCode (`Developer: Reload Window`) to iterate.