require("@rushstack/eslint-patch/modern-module-resolution")
module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-essential",
        "@vue/eslint-config-typescript"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        },
        {
            "files": ["*.vue"],
            "parser": "vue-eslint-parser",
            "parserOptions": {
                "parser": "@typescript-eslint/parser",
                "extraFileExtensions": [".vue"],
                "ecmaVersion": "latest",
                "ecmaFeatures": {
                    "jsx": true
                }
            },
            "rules": {
                "no-undef": "off"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "vue"
    ],
    "rules": {
    }
}
