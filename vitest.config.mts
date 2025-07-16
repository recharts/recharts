// eslint-disable-next-line import/no-unresolved
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// @ts-expect-error wants esModuleInterop
import path from 'node:path';
import { fileURLToPath } from 'node:url';
// @ts-expect-error storybookTest import not found
// eslint-disable-next-line import/no-unresolved
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';

// @ts-expect-error does not like import.meta
const dirname: string = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    exclude: ['node_modules', 'dist', '.idea', '.git', '.cache', 'build', 'scripts', '.stryker-tmp'],
    coverage: {
      provider: 'v8',
      include: ['src', 'test'],
    },
    restoreMocks: true,
    projects: [
      {
        extends: true,
        test: {
          name: 'unit',
          setupFiles: ['test/vitest.setup.ts', 'test/helper/toBeRechartsScale.ts', 'test/helper/expectStackGroups.ts'],
          globalSetup: './test/vitest.global-setup.ts',
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
                browser: 'chromium',
              },
            ],
          },
          setupFiles: ['storybook/vitest.setup.ts'],
        },
      },
    ],
  },
});
