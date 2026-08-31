/*
 * Vite dev server for the Playwright story gallery (test-vr/gallery).
 * Started automatically by the webServer option in test-vr/playwright.config.ts.
 *
 * CSS imported by story files or test helpers is not applied to the page,
 * mirroring the old component testing runtime: the committed snapshots were
 * generated without CSS from the test side (e.g. www/src/styles/app.css
 * changes the body margin and fonts). CSS imported by the website components
 * themselves is applied normally.
 */
import path from 'node:path';
import { defineConfig } from 'vite';

const repoRoot = path.join(__dirname, '..');

export default defineConfig({
  /*
   * The gallery index.html lives at test-vr/gallery/index.html, served at
   * http://localhost:3100/gallery/index.html.
   */
  root: __dirname,
  resolve: {
    alias: {
      /*
       * Resolve recharts from the local source so that VR tests see unreleased
       * API and type changes immediately, like the old component testing
       * config did.
       */
      recharts: path.join(repoRoot, 'src'),
      /*
       * Ensure that we are using the same React instance
       * to avoid issues with hooks and context.
       */
      react: path.join(repoRoot, 'node_modules/react'),
      'react-dom': path.join(repoRoot, 'node_modules/react-dom'),
      'react-is': path.join(repoRoot, 'node_modules/react-is'),
    },
  },
  server: {
    port: 3100,
    strictPort: true,
  },
});
