// @flow
/* global module */
module.exports = {
  collectCoverageFrom: ['src/**/*.js'],
  coveragePathIgnorePatterns: ['__fixtures__', 'stories'],
  testPathIgnorePatterns: ['/node_modules/', '.cache'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  setupTestFrameworkScriptFile: './utils/setup-tests.js',
};
