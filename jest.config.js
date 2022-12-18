/* eslint-env node */
module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/test-jest'],
  maxWorkers: '50%',
  setupFilesAfterEnv: ['<rootDir>/test-jest/setupTests.ts'],
};
