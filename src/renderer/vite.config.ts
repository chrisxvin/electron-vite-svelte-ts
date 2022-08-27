import { resolve } from "path";
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: [
            {
                find: /^@\/(.+)$/,
                replacement: resolve(__dirname, "./src/$1"),
            },
            {
                find: /^@comps\/(.*)/,
                replacement: resolve(__dirname, "./src/components/$1"),
            },
            {
                find: /^\$\/(.+)/,
                replacement: resolve(__dirname, "./src/assets/$1"),
            },
        ],
    },
    plugins: [
        svelte(),
    ],
    server: {
        strictPort: true,
        port: 8000,
    },
    build: {
        outDir: "./dist",
    },
});
