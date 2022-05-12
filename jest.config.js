module.exports = {
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/src/test-utils/__mocks__/fileMock.js',
    },
    testEnvironment: "jsdom",
}

