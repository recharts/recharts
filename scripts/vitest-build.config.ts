// eslint-disable-next-line import/no-unresolved
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [],
  test: {
    environment: 'node',
    globals: false,
    setupFiles: [],
    exclude: ['react-smooth', 'node_modules', 'dist', '.idea', '.git', '.cache', 'build', 'test'],
  },
});
