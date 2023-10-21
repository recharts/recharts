/* eslint-disable import/no-default-export */
// eslint-disable-next-line import/no-unresolved
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default {
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['test/vitest.setup.ts'],
    exclude: ['react-smooth', 'node_modules'],
  },
};
