import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import reactPlugin from "eslint-plugin-react";

export default defineConfig([
  {
    ignores: ["node_modules/**", ".next/**", "out/**"],
  },
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx,mjs}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: reactPlugin,
    },
    rules: {
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/no-unescaped-entities": "off",
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
]);
