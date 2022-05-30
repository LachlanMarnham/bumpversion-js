/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

const config = {
    verbose: true,
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: ['**/*.{js,jsx}', '!coverage/**', '!node_modules/**', '!tests/**'],
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    coverageThreshold: {
        global: {
            lines: 100,
        },
    },
    rootDir: '..',
};

export default config;
