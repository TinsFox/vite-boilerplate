import react from "@vitejs/plugin-react-swc"
import { codeInspectorPlugin } from "code-inspector-plugin"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
    codeInspectorPlugin({
      bundler: "vite",
    }),
  ],
})
