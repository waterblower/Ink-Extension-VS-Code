// Bundles the extension for VS Code's Node-based extension host.
// The "vscode" module is provided by the host at runtime, so it stays
// external; everything else (including inkjs) is bundled in.

import * as esbuild from "esbuild";
import { denoPlugin } from "@deno/esbuild-plugin";

const watch = Deno.args.includes("--watch");

const ctx = await esbuild.context({
    entryPoints: ["src/extension.ts"],
    bundle: true,
    outfile: "dist/extension.js",
    external: ["vscode"],
    plugins: [denoPlugin()],
    platform: "node",
    format: "cjs",
    target: "node16",
    sourcemap: true,
    minify: !watch,
    logLevel: "info",
});

if (watch) {
    await ctx.watch();
} else {
    await ctx.rebuild();
    await ctx.dispose();
    esbuild.stop();
}
