/* eslint-env node */
module.exports = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'js', 'tsx'],
  roots: ['<rootDir>/test-jest'],
  maxWorkers: '50%',
  setupFilesAfterEnv: ['<rootDir>/test-jest/setupTests.ts'],
};
