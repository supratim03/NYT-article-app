module.exports = {
    env: {
        browser: true, // Browser global variables like `window` etc.
        commonjs: true, // CommonJS global variables and CommonJS scoping.Allows require, exports and module.
        es6: true, // Enable all ECMAScript 6 features except for modules.
        jest: true, // Jest global variables like `it` etc.
        node: true // Defines things like process.env when generating through node
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jest/recommended",
        "plugin:testing-library/react"
    ],
    parser: "@babel/eslint-parser", // Uses babel-eslint transforms.
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: "module" // Allows for the use of imports
    },
    root: true, // For configuration cascading.
    rules: {
        "comma-dangle": [
            "warn",
            "never"
        ],
        "eol-last": "error",
        "jsx-quotes": [
            "warn",
            "prefer-double"
        ],
        "max-len": [
            "warn",
            {
                code: 120
            }
        ],
        "no-console": "warn",
        "no-duplicate-imports": "warn",
        "no-unused-vars": "warn",
        quotes: [
            "warn",
            "double"
        ],
        // "react/jsx-curly-spacing": [
        //     "warn",
        //     {
        //         allowMultiline: true,
        //         children: {
        //             when: "always"
        //         },
        //         spacing: {
        //             objectLiterals: "always"
        //         },
        //         when: "always"
        //     }
        // ],
        "react/jsx-filename-extension": [
            "error",
            {
                extensions: [
                    ".js",
                    ".jsx",
                    ".ts",
                    ".tsx"
                ]
            }
        ],
        semi: "warn",
        "react/prop-types": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "react-hooks/exhaustive-deps": 0,
        "no-import-assign": 0
    },
    settings: {
        react: {
            version: "detect" // Detect react version
        }
    }
};
