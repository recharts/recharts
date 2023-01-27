/* eslint-env node */
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/test'],
  maxWorkers: '50%',
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.ts'],
  collectCoverage: true,
  coverageReporters: ['json-summary', 'text', 'lcov'],
};
