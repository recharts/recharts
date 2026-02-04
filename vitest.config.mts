import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// @ts-expect-error wants esModuleInterop
import path from 'node:path';
import { fileURLToPath } from 'node:url';
// @ts-expect-error storybookTest import not found
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';

// @ts-expect-error does not like import.meta
const dirname: string = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      recharts: path.resolve(dirname, 'src'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    exclude: ['**/node_modules', 'dist', '.idea', '.git', '.cache', 'build', 'scripts', '.stryker-tmp', 'www/docs'],
    coverage: {
      provider: 'v8',
      include: ['src', 'test', 'www/src'],
    },
    restoreMocks: true,
    projects: [
      {
        extends: true,
        test: {
          name: 'unit:lib',
          setupFiles: [
            'test/vitest.setup.ts',
            'test/helper/toBeRechartsScale.ts',
            'test/helper/expectStackGroups.ts',
            './test/helper/expectFunctionReturning.ts',
          ],
          include: ['test/**/*.spec.ts?(x)'],
        },
      },
      {
        extends: true,
        test: {
          name: 'unit:website',
          include: ['test/**/*.spec.ts?(x)'],
          root: 'www',
          setupFiles: ['test/vitest.setup.ts'],
        },
      },
      {
        extends: true,
        test: {
          name: 'unit:omnidoc',
          include: ['omnidoc/**/*.spec.ts', 'omnidoc/**/*.spec.tsx'],
        },
      },
      {
        test: {
          name: 'build-output',
          include: ['scripts/**/*.test.ts'],
          environment: 'node',
          globals: false,
        },
      },
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, 'storybook'),
          }),
        ],
        test: {
          exclude: ['**/test/**'],
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: 'playwright',
            instances: [
              {
                browser: 'firefox',
              },
            ],
          },
          setupFiles: ['storybook/vitest.setup.ts'],
        },
      },
    ],
  },
});
