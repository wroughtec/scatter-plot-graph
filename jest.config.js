module.exports = {
  verbose: true,
  rootDir: './src',
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.js$': 'babel-jest'
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  setupFiles: ['./tests/setupTests.js'],
  collectCoverageFrom: ['client/**/*.{js|jsx}', 'api/**/*.js'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js'
  }
};
