
/** @type {import('jest').Config} */

module.exports = {
    notify: false,
    //notifyMode: "always",
    verbose: false,
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: [
        "<rootDir>/."
    ],
    testMatch: [
        "<rootDir>/spec/**/?(*.)+(spec|test).[jt]s?(x)",
        "<rootDir>/__tests__/**/?(*.)+(spec|test).[jt]s?(x)"
    ],
    transform: {
        "^.+\\.ts(x)?$": 'ts-jest',
        // "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    },
    moduleFileExtensions: [
        "web.js",
        "js",
        "web.ts",
        "ts",
        "web.tsx",
        "tsx",
        "json",
        "web.jsx",
        "jsx",
        "node"
    ],
};
