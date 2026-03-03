# Ink Language Support for VS Code

A powerful, feature-rich Visual Studio Code extension for [Inkle's Ink](https://www.inklestudios.com/ink/) narrative scripting language. 

Whether you are writing a short interactive story or a massive, multi-file branching narrative game, this extension provides the essential IDE features you need: rich syntax highlighting, intelligent auto-completion, cross-file navigation, and inline image previews.

## ✨ Features

### 🎨 Comprehensive Syntax Highlighting
Enjoy a beautifully colorized coding experience. The included TextMate grammar accurately highlights all of Ink's unique syntax, including:
* Knots (`===`) and Stitches (`=`)
* Choices (`*`, `+`) and Gathers (`-`)
* Diverts (`->`, `<-`)
* Variables, Constants, Lists, and Temp declarations
* Inline logic, conditionals, and mathematical expressions
* Tags and Includes

### 🚀 Intelligent Auto-Completion
Never lose track of your narrative threads. When typing a divert (`->`), the extension automatically suggests available **Knots** and **Stitches** across your entire project. It seamlessly reads your `INCLUDE` statements to understand your file structure.

### 🔍 Code Navigation (Go to Definition & Find References)
Navigate complex branching stories with ease:
* **Go to Definition (`F12`)**: `Ctrl/Cmd + Click` on a divert or variable to instantly jump to where it was declared.
* **Find References (`Shift + F12`)**: See every place a specific Knot, Stitch, or Variable is used throughout your workspace.

### 🖼️ Inline Image Previews & Links
Working with visual novels or multimedia projects? This extension adds special support for Image tags:
* **Format:** Use the standard tag format `# Image: filename.png` (or `#image: ...`).
* **Hover Previews:** Hover over the tag to see a live markdown preview of the image directly in your editor.
* **Document Links:** `Ctrl/Cmd + Click` the filename to open the source image file. The extension automatically searches your workspace and sibling directories to find the correct asset.

### 📋 Document Outline (Symbol Provider)
Keep a bird's-eye view of your story files. Open the VS Code **Outline** view (or use Breadcrumbs) to see a structured list of all Knots, Stitches, and global Variables in your current file, allowing you to jump between scenes instantly.

### 💡 Rich Hover Information
Need a quick reminder of what a Knot does or what a Variable's initial value is? Hover over any divert or variable reference to see a snippet of its original declaration—without having to switch files.

### 🔗 Deep Multi-File Support
Your story isn't limited to one file, and neither is this extension. It recursively parses `INCLUDE` directives to map out your entire narrative network, ensuring that auto-complete, definitions, and references work flawlessly across your entire project.

## 🛠️ Usage

Simply open any `.ink` file in Visual Studio Code. The extension will automatically activate and provide syntax highlighting. 

* **To trigger auto-complete:** Type `-> ` and start typing a knot name, or press `Ctrl+Space`.
* **To preview images:** Ensure your images are somewhere in your workspace folder, and write an image tag like `# Image: hero_portrait.jpg`.
