import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  // Use /WellischAcademicGroup/ for production (GitHub Pages), / for local dev
  base: command === "build" ? "/WellischAcademicGroup/" : "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 8080,
  },
  build: {
    outDir: "dist",
  },
}));
