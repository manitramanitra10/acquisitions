import js from "@eslint/js";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        process: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        Buffer: "readonly",
        console: "readonly",
        setImmediate: "readonly",
        clearImmediate: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        setInterval: "readonly",
        clearInterval: "readonly",
      },
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error",
      "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "no-console": "off",
      "prefer-const": "error",
      "eqeqeq": ["error", "always"],
      "curly": ["error", "all"],
      "no-var": "error",
      "object-shorthand": ["error", "always"],
      "consistent-return": "error",
      "require-await": "error",
      "no-duplicate-imports": "error",
    },
  },
];
