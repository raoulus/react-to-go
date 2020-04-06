module.exports = {
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
    '\\.md$': '<rootDir>/__mocks__/markdown-loader.mock.js'
  },
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/__mocks__/style.mock.js'
  },
  collectCoverageFrom: ['**/app/**/*.{js,jsx}', '!**/node_modules/**']
}
