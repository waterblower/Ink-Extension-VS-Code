import * as esbuild from 'esbuild'
import { denoPlugin } from "@deno/esbuild-plugin";

await esbuild.build({
  entryPoints: ['compiler.ts'],
  bundle: true,
  outfile: '../extension/compiler.js',
  plugins: [denoPlugin()],
  platform: "node",
  format: "esm"
})