const config = {
    verbose: true,
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: [
        "**/*.{js,jsx}",
        "!coverage/**",
        "!node_modules/**",
        "!jest.config.js"
    ]
};

export default config;
