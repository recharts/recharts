import { configDefaults, defineConfig } from 'vitest/config';
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
    exclude: [
      ...configDefaults.exclude,
      '**/dist/**',
      '**/.idea/**',
      '**/.cache/**',
      '**/build/**',
      '**/scripts/**',
      '**/.stryker-tmp/**',
      '**/www/**',
      // These two tests time out when running inside stryker, not sure why
      'test/component/Tooltip/Tooltip.payload.spec.tsx',
      'test/chart/Treemap.spec.tsx',
    ],
    restoreMocks: true,
    unstubGlobals: true,
    setupFiles: [
      'test/vitest.setup.ts',
      'test/helper/toBeRechartsScale.ts',
      'test/helper/expectStackGroups.ts',
      './test/helper/expectFunctionReturning.ts',
    ],
    coverage: {
      include: ['src/**/*.{ts,tsx}', 'test/**/*.{ts,tsx}'],
    },
  },
});
