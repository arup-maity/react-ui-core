import { defineConfig } from "rollup"
import typescript from "@rollup/plugin-typescript"

export default defineConfig({
   input: "src/index.ts",
   output: {
      dir: "dist",
      format: "es",
      name: "react-ui-core"
   },
   external: ["react"],
   //  plugins: [
   //      // Other plugins
   //  ],
   //  treeshake: {
   //      moduleSideEffects: "dist/index.js",
   //  },
   //  watch: {
   //      exclude: "node_modules/**",
   //  },
   //  preserveModules: true,
   //  cache: true,
   //  cacheDir: "node_modules/.cache/rollup",
   //  experimentalCodeSplitting: true,
   //  experimentalOptimizeChunks: true,
   //  experimentalMinify: true,
   //  treeshake: {
   //      propertyReadSideEffects: false,
   //  },
   plugins: [
      typescript({ tsconfig: "tsconfig.json" })
   ],
})