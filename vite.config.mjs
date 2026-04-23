import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tagger from "@dhiwise/component-tagger";

// https://vitejs.dev/config/
export default defineConfig({
  // This changes the out put dir from dist to build
  // comment this out if that isn't relevant for your project
//   build: {
//     outDir: "build",
//     chunkSizeWarningLimit: 2000,
//   },
  build: {
    sourcemap: true,
    target: "es2018",
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;

          if (id.includes("/node_modules/lucide-react/")) {
            return "vendor-icons";
          }

          if (id.includes("/node_modules/recharts/")) {
            return "vendor-charts";
          }

          if (id.includes("/node_modules/react-router") || id.includes("/node_modules/history/")) {
            return "vendor-router";
          }

          return "vendor";
        },
      },
    },
  },
  base: "/portfolio/",
  plugins: [tsconfigPaths(), react(), tagger()],
  server: {
    port: "4028",
    host: "0.0.0.0",
    strictPort: true,
    allowedHosts: ['.amazonaws.com', '.builtwithrocket.new']
  }
});