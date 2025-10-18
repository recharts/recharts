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
      recharts: path.resolve(__dirname, 'src'),
      /*
       * Ensure that we are using the same React instance
       * to avoid issues with hooks and context.
       */
      react: path.resolve(__dirname, 'node_modules', 'react'),
      'react-dom': path.resolve(__dirname, 'node_modules', 'react-dom'),
      'react-is': path.resolve(__dirname, 'node_modules', 'react-is'),
      '@testing-library/react': path.resolve(__dirname, 'node_modules', '@testing-library/react'),
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
          name: 'unit',
          setupFiles: ['test/vitest.setup.ts', 'test/helper/toBeRechartsScale.ts', 'test/helper/expectStackGroups.ts'],
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
