import { defineConfig } from "vite";
import { builtinModules } from "node:module";
import { copySync } from "@std/fs";

const denoPostBuildCopy = {
  name: "deno-post-build-copy",
  // The closeBundle hook triggers exactly after Vite finishes writing to outDir
  closeBundle() {
    console.log("\n📦 Running post-build asset copy...");

    Deno.copyFileSync("package.json", "dist/package.json");
    Deno.copyFileSync(
      "language-configuration.json",
      "dist/language-configuration.json",
    );
    console.log("✅ Copied package.json and language-configuration.json");

    copySync("syntaxes", "dist/syntaxes", { overwrite: true });
    console.log("✅ Copied syntaxes directory");
    copySync("syntaxes", "dist/syntaxes", { overwrite: true });

    Deno.spawnAndWaitSync("deno", { "args": ["compile", "-A", "lsp/lsp.ts"] });
    Deno.copyFile("lsp.exe", "dist/lsp.exe");
  },
};

export default defineConfig({
  build: {
    target: "node25",
    outDir: "dist",
    minify: false,
    lib: {
      entry: "extension.ts",
      formats: ["cjs"],
      fileName: () => "extension.js",
    },
    rollupOptions: {
      external: [
        "vscode",
        "vscode-languageclient",
        "vscode-languageclient/node",
        ...builtinModules,
        ...builtinModules.map((m) => `node:${m}`),
      ],
    },
  },
  resolve: {
    conditions: ["node"],
    mainFields: ["main"],
  },
  plugins: [denoPostBuildCopy],
});
