// @ts-check
/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
const config = {
  _comment:
    "This config was generated using 'stryker init'. Please take a look at: https://stryker-mutator.io/docs/stryker-js/configuration/ for more information.",
  packageManager: 'npm',
  reporters: ['html', 'clear-text', 'progress'],
  testRunner_comment:
    'Take a look at https://stryker-mutator.io/docs/stryker-js/vitest-runner for information about the vitest plugin.',
  testRunner: 'vitest',
  vitest: {
    configFile: 'vitest.config-mutation.mts',
  },
  coverageAnalysis: 'perTest',
  checkers: ['typescript'],
  tsconfigFile: 'tsconfig.json',
  typescriptChecker: {
    prioritizePerformanceOverAccuracy: true,
  },
  ignoreStatic: true,
  mutate: ['src/util/scale/createCategoricalInverse.ts'],
  commandRunner: {
    command: 'vitest run --config ./vitest.config-mutation.mts',
  },
};

export default config;
