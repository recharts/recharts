import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['test/vitest.setup.ts'],
    exclude: ['react-smooth', 'node_modules', 'dist', '.idea', '.git', '.cache', 'build'],
  },
});
