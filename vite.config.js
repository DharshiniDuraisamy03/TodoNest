import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  base: command === "serve" ? "/" : "/TodoNest/",
  plugins: [react()],
  assetsInclude: ["**/*.wasm", "**/*.fs"],
  optimizeDeps: {
    include: ["@electric-sql/pglite"],
  },
}));
