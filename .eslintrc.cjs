/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    globals: {
        $: "readonly",
        $$: "readonly",
        $ref: "readonly",
        $shallowRef: "readonly",
        $computed: "readonly"
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-essential",
        "@vue/eslint-config-typescript",
        "@vue/eslint-config-typescript/recommended",
        "@vue/eslint-config-prettier"
    ],
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "@typescript-eslint/parser",
        ecmaVersion: 2020,
        sourceType: "module",
        jsxPragma: "React",
        ecmaFeatures: {
            jsx: true
        }
    },
    overrides: [
        {
            files: ["*.ts", "*.vue"],
            rules: {
                "no-undef": "off"
            }
        },
        {
            files: ["*.vue"],
            parser: "vue-eslint-parser",
            parserOptions: {
                parser: "@typescript-eslint/parser",
                extraFileExtensions: [".vue"],
                ecmaVersion: "latest",
                ecmaFeatures: {
                    jsx: true
                }
            },
            rules: {
                "no-undef": "off"
            }
        },
        {
            env: {
                node: true
            },
            files: [
                ".eslintrc.{js,cjs}"
            ],
            parserOptions: {
                sourceType: "script"
            }
        }
    ],
    plugins: [
        "@typescript-eslint",
        "vue"
    ],
    rules: {
        "vue/no-v-html": "off",
        "vue/require-default-prop": "off",
        "vue/require-explicit-emits": "off",
        "vue/multi-word-component-names": "off",
        "@typescript-eslint/no-explicit-any": "off", // any
        "no-debugger": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off", // setup()
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "vue/html-self-closing": [
            "error",
            {
                html: {
                    void: "always",
                    normal: "always",
                    component: "always"
                },
                svg: "always",
                math: "always"
            }
        ],
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                argsIgnorePattern: "^_",
                varsIgnorePattern: "^_"
            }
        ],
        "no-unused-vars": [
            "error",
            {
                argsIgnorePattern: "^_",
                varsIgnorePattern: "^_"
            }
        ],
        "prettier/prettier": [
            "error",
            {
                endOfLine: "auto"
            }
        ]
    }
}
