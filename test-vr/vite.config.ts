/*
 * Vite dev server for the Playwright story gallery (test-vr/gallery).
 * Started automatically by the webServer option in test-vr/playwright.config.ts.
 *
 * The gallery itself does not add global CSS, while individual stories or
 * story helpers may opt in (for example www/src/styles/app.css imported by
 * test-vr/tests/www/StoryTheme.tsx).
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
  cacheDir: path.join(repoRoot, 'node_modules/.vite-test-vr'),
  optimizeDeps: {
    entries: ['gallery/index.html', 'tests/**/*.story.tsx'],
  },
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
