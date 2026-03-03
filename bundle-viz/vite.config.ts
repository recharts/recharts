import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      /**
       * Use the local recharts source code directly instead of a published npm package.
       * This means the visualization always reflects the latest changes.
       */
      recharts: resolve(__dirname, '../src'),
    },
  },
  server: {
    open: true,
    port: 3001,
  },
});
