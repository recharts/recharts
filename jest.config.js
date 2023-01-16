/* eslint-env node */
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',

  testEnvironment: 'jsdom',
  roots: ['<rootDir>/test-jest'],
  maxWorkers: '50%',
  setupFilesAfterEnv: ['<rootDir>/test-jest/setupTests.ts'],
  collectCoverage: true,
};
