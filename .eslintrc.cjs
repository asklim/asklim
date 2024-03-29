module.exports = {
    env: {
        "shared-node-browser": true,
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
        jest: true,
        es2021: true,
    },
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.eslint.json",
        //tsconfigRootDir: __dirname,
    },
    plugins: [
        '@typescript-eslint',
        //"eslint-plugin-react",
        //"eslint-plugin-react-hooks",
    ],
    extends: [
        "eslint:recommended",
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
        //"plugin:react/recommended"
    ],
    settings: {
        react: {
            createClass: "createReactClass", // Regex for Component Factory use,
            // default to "createReactClass"
            pragma: "React", // Pragma to use, default to "React"
            version: "detect", // React version. "detect" automatically picks
            // the version you have installed.
            // You can also use `16.0`, `16.3`, etc, if you
            // want to override the detected value.
            flowVersion: "0.53", // Flow version
        },
        propWrapperFunctions: [
            // The names of any function used to wrap propTypes, e.g.
            // `forbidExtraProps`. If this isn't set, any propTypes wrapped in
            // a function will be skipped.
            "forbidExtraProps",
            { property: "freeze", object: "Object" },
            { property: "myFavoriteWrapper" },
        ],
    },
    rules: {
        //strict: "warn",
        "no-console": "off",
        indent: [
            "warn",
            4,
            {
                SwitchCase: 1,
                MemberExpression: "off",
            }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        quotes: ["off", "single"],
        semi: ["error", "always"],
        "no-unused-vars": [
            "error",
            {
                varsIgnorePattern: "should|expect",
            },
        ],
        "func-call-spacing": ["off"],
        "object-curly-spacing": ["off"],
        "array-bracket-spacing": ["off"],
        "space-in-parens": ["off", "always"],
        "no-multiple-empty-lines": [
            "warn",
            {
                max: 5,
                maxBOF: 5,
                maxEOF: 1,
            },
        ],
        "@typescript-eslint/prefer-nullish-coalescing": "error"
        //"react/jsx-uses-react": "warn",
        //"react-hooks/rules-of-hooks": "error",
        //"react-hooks/exhaustive-deps": "warn",
    },
};
