// eslint-disable-next-line import/no-unresolved
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['test/vitest.setup.ts', 'test/helper/toBeRechartsScale.ts', 'test/helper/expectStackGroups.ts'],
    globalSetup: './test/vitest.global-setup.ts',
    exclude: ['node_modules', 'dist', '.idea', '.git', '.cache', 'build', 'scripts', '.stryker-tmp'],
    coverage: {
      provider: 'v8',
      include: ['src', 'test'],
    },
    restoreMocks: true,
  },
});
