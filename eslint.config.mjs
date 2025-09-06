import path from "node:path";

import { includeIgnoreFile } from "@eslint/compat";
import js from "@eslint/js";
import { configs } from "eslint-config-airbnb-extended/legacy";
import { rules as prettierConfigRules } from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import storybook from "eslint-plugin-storybook";
import comments from "@eslint-community/eslint-plugin-eslint-comments/configs";

import tseslint from "typescript-eslint";

const gitignorePath = path.resolve(".", ".gitignore");
const eslintIgnorePath = path.resolve(".", ".eslintignore");
const allFiles = [
  "**/*.js",
  "**/*.cjs",
  "**/*.mjs",
  "**/*.jsx",
  "**/*.ts",
  "**/*.cts",
  "**/*.mts",
  "**/*.tsx",
  "**/*.d.ts",
];

const languageOptions = [
  {
    files: allFiles,
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
  },
];

const jsConfig = [
  // ESLint Recommended Rules
  {
    name: "js/config",
    ...js.configs.recommended,
  },
  // NOTE: DO NOT ADD ANYTHING AFTER THIS LINE BECAUSE IT WILL BE OVERWRITTEN BY AIRBNB CONFIG
];

const reactConfig = [
  // Airbnb React Recommended Config
  ...configs.react.recommended,
  // Airbnb React Hooks Config
  ...configs.react.hooks,
  {
    name: "x/general",
    rules: {
      "no-var": "error",
      "no-unused-vars": "off",
      "valid-jsdoc": [
        "error",
        {
          requireReturnType: false,
          requireParamType: false,
        },
      ],
      "one-var": [
        "error",
        {
          uninitialized: "always",
        },
      ],
      "one-var-declaration-per-line": ["error", "initializations"],
      "no-plusplus": "off",
      "no-bitwise": "off",
      "class-methods-use-this": [
        "warn",
        { ignoreClassesWithImplements: "public-fields" },
      ],
      "max-len": "off",
      "prefer-destructuring": "error",
      "object-curly-newline": "off",
      "function-paren-newline": "off",
      "no-restricted-globals": "error",
      "no-multi-assign": "off",
      "no-use-before-define": "off",
      /*
       * Typescript already handles no-redeclare, so we don't need to enforce it with ESLint.
       * Also, Typescript handles it better because TS can handle function overloads
       * which ESLint doesn't.
       * See: https://typescript-eslint.io/rules/no-redeclare/
       */
      "no-redeclare": "off",
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "lodash",
              message: "Import [module] from lodash/[module] instead",
            },
          ],
        },
      ],
    },
  },
  {
    name: "x/import",
    rules: {
      "import/extensions": "off",
      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: true,
        },
      ],
      "import/prefer-default-export": "off",
      "import/no-named-as-default": "error",
      "import/no-cycle": "error",
      "import/no-default-export": "error",
      "import/no-import-module-exports": "error",
      "import/no-relative-packages": "error",
    },
  },
  {
    name: "x/react",
    rules: {
      "react/no-did-update-set-state": "warn",
      "react/jsx-no-constructed-context-values": "warn",
      "react/no-unused-class-component-methods": "off",
      "react/sort-comp": "off",
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/react-in-jsx-scope": "error",
      "react/jsx-filename-extension": [
        "error",
        {
          extensions: [".ts", ".tsx", ".js", ".jsx"],
        },
      ],
      "react/jsx-no-bind": "error",
      "react/prop-types": "off",
      "react/no-unused-prop-types": "off",
      "react/require-default-props": "off",
      "react/default-props-match-prop-types": "off",
      "react/function-component-definition": "off",
      "react/no-array-index-key": "warn",
      "react/no-access-state-in-setstate": "off",
      "react/destructuring-assignment": "off",
      "react/jsx-closing-tag-location": "error",
      "react/no-unused-state": "error",
      "react/prefer-stateless-function": "error",
      "react/jsx-props-no-spreading": "off",
      "react/state-in-constructor": "off",
      "react/static-property-placement": "off",
    },
  },
  {
    name: "x/jsx-a11y",
    rules: {
      "jsx-a11y/label-has-associated-control": [
        "error",
        { assert: "either", depth: 2 },
      ],
    },
  },
];

const typescriptConfig = [
  // Typescript ESLint Recommended Config
  ...tseslint.configs.recommended,
  {
    name: "x/typescript-eslint",
    rules: {
      "@typescript-eslint/no-use-before-define": "error",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "after-used",
          ignoreRestSiblings: true,
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
];

const storybookConfig = [
  // Storybook Config
  ...storybook.configs["flat/recommended"],
];

const prettierConfig = [
  // Prettier Plugin
  {
    name: "prettier/plugin/config",
    plugins: {
      prettier: prettierPlugin,
    },
  },
  // Prettier Config
  {
    name: "prettier/config",
    rules: {
      ...prettierConfigRules,
      "prettier/prettier": "error",
    },
  },
];

const comments = [
  // ESLint Community ESLint Comments
  ...comments.recommended,
  {
    name: "x/comments",
    rules: {
      "@eslint-community/eslint-comments/no-unused-disable": "error",
    },
  },
];

const overrides = [
  {
    name: "x/override-1",
    files: ["./test/**/*.tsx"],
    rules: {
      "react/jsx-no-useless-fragment": "off",
    },
  },
  {
    name: "x/override-2",
    files: [
      "./storybook/**/*.stories.@(ts|tsx)",
      "./storybook/**/*.@(ts|tsx)",
      "*.js",
    ],
    rules: {
      "no-useless-constructor": "off",
      "import/no-default-export": "off",
      /*
       * eslint/import reports false positive errors after bumping to storybook 9
       * https://github.com/storybookjs/storybook/issues/31863
       * This is safe to disable because typescript is checking for imports too
       * so we still get alerted in case of a typo or something.
       */
      "import/no-unresolved": "off",
      "react-hooks/rules-of-hooks": "off",
    },
  },
  {
    name: "x/override-3",
    files: ["src/state/*Slice.ts", "test/**/*.spec.tsx"],
    // param-reassign is allowed in slices following Redux recommendation: https://redux-toolkit.js.org/usage/immer-reducers#linting-state-mutations
    rules: {
      "no-param-reassign": ["error", { props: false }],
    },
  },
  {
    name: "x/override-4",
    files: ["scripts/*.js"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
      "no-console": "off",
    },
  },
];

const settings = [
  {
    files: allFiles,
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
  },
];

export default [
  // Ignore .gitignore files/folder in eslint
  includeIgnoreFile(gitignorePath),
  // Ignore .eslintIgnore files/folder in eslint
  includeIgnoreFile(eslintIgnorePath),
  // Language Options
  ...languageOptions,
  // Javascript Config
  ...jsConfig,
  // React Config
  ...reactConfig,
  // TypeScript Config
  ...typescriptConfig,
  // Storybook Config
  ...storybookConfig,
  // Prettier Config
  ...prettierConfig,
  // OVERRIDES
  ...overrides,
  // Settings
  ...settings,
];
