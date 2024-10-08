/** @type {import("eslint").Linter.Config} */
const config = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: true,
    },
    plugins: ["@typescript-eslint"],
    extends: [
        "next/core-web-vitals",
        "plugin:@typescript-eslint/recommended-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
    ],
    ignorePatterns: ["**/*.js"],
    rules: {
        // These opinionated rules are enabled in stylistic-type-checked above.
        // Feel free to reconfigure them to your own preference.
        "@typescript-eslint/array-type": "off",
        "@typescript-eslint/consistent-type-definitions": "off",

        "@typescript-eslint/consistent-type-imports": [
            "warn",
            {
                prefer: "type-imports",
                fixStyle: "inline-type-imports",
            },
        ],
        "@typescript-eslint/no-unused-vars": [
            "warn",
            { argsIgnorePattern: "^_" },
        ],
        "@typescript-eslint/no-misused-promises": [
            2,
            {
                checksVoidReturn: { attributes: false },
            },
        ],
        "@next/next/no-css-tags": "off",
        "@next/next/no-sync-scripts": "off",
        "@next/next/no-img-element": "off",
        "@typescript-eslint/require-await": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-unsafe-assignment": "warn",
        "@typescript-eslint/no-unsafe-member-access": "warn",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unsafe-return": "off",
    },
};

module.exports = config;
