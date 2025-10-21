import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

/*
 * Stryker doesn't allow multi-project vitest configs yet so here we have a single project config.
 */

process.env.TZ = 'UTC';

// https://vitejs.dev/config/
// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    exclude: ['**/node_modules', 'dist', '.idea', '.git', '.cache', 'build', 'scripts', '.stryker-tmp', 'www'],
    restoreMocks: true,
    setupFiles: ['test/vitest.setup.ts', 'test/helper/toBeRechartsScale.ts', 'test/helper/expectStackGroups.ts'],
  },
});
