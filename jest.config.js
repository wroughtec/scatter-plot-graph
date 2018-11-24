module.exports = {
  verbose: true,
  rootDir: './src',
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.js$': 'babel-jest'
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  setupFiles: ['./tests/setupTests.js'],
  globals: {
    TZ: 'UTC'
  },
  collectCoverageFrom: ['client/**/*.{js|jsx}', 'api/**/*.js']
};
