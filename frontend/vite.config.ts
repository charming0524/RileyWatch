import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          radix: ["@radix-ui/react-dropdown-menu", "@radix-ui/react-dialog"],
          charts: ["recharts"],
          ui: ["lucide-react"],
        },
      },
    },
    chunkSizeWarningLimit: 1000, // suppress warnings up to 1 MB
  },
});
