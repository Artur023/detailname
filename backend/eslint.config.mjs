import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import tseslint from "@typescript-eslint/eslint-plugin";
import globals from "globals";

export default [
  { ignores: ["**/node_modules/**", "**/dist/**", "**/build/**"] },

  js.configs.recommended,

  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      "no-console": ["error", { allow: ["info", "warn", "error"] }],
      "no-irregular-whitespace": ["error", { skipStrings: true, skipTemplates: true }],
      curly: ["error", "all"],
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    },
  },
];
