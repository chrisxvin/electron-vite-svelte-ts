module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    parser: "@typescript-eslint/parser",
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    plugins: [
        "@typescript-eslint"
    ],
    parserOptions: {
        sourceType: "module",
        ecmaVersion: 2021,
    },
    ignorePatterns: [
        "**/*.d.ts"
    ],
    // add your custom rules here
    rules: {
        "jsx-quotes": ["error", "prefer-double"],
        "quotes": [
            "error",
            "double",
            {
                avoidEscape: true,
                allowTemplateLiterals: true
            },
        ],
        "no-irregular-whitespace": 0,
        "space-before-function-parent": 0,
        "max-len": 0,
        "comma-dangle": ["error", "only-multiline"],
        "no-empty": 1,
        "@typescript-eslint/no-empty-function": 1,
        "@typescript-eslint/no-empty-interface": 1,
    },
};
