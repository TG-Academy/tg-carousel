//vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import postcss from "rollup-plugin-postcss";

export default defineConfig({
  plugins: [dts({ include: ["src"] })],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "@tg-academy/carousel",
      fileName: "index",
      formats: ["cjs", "es"],
    },
    rollupOptions: {
      plugins: [postcss()],
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
