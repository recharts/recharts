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
    setupFiles: ['test/vitest.setup.ts'],
    exclude: ['react-smooth', 'node_modules', 'dist', '.idea', '.git', '.cache', 'build', 'scripts'],
    coverage: {
      provider: 'v8',
      include: ['src', 'test'],
    },
  },
});
