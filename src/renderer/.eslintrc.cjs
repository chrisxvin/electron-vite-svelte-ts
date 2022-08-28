module.exports = {
    plugins: [
        "eslint-plugin-svelte3"
    ],
    overrides: [
        {
            files: ["*.svelte"],
            processor: "svelte3/svelte3"
        }
    ],
    settings: {
        "svelte3/typescript": () => require("typescript"),
    },
    parserOptions: {
        sourceType: "module",
        ecmaVersion: 2021,
    },
};
