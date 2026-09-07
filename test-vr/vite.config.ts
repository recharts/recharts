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
const galleryRoot = path.join(__dirname, 'gallery');

export default defineConfig(({ command }) => ({
  base: './',
  /*
   * The Playwright mount page lives at test-vr/gallery/index.html. The
   * human-facing preview is available at test-vr/gallery/preview.html.
   */
  root: command === 'build' ? galleryRoot : __dirname,
  build: {
    emptyOutDir: true,
    outDir: path.join(__dirname, 'dist'),
    rollupOptions: {
      input: {
        preview: path.join(galleryRoot, 'preview.html'),
        index: path.join(galleryRoot, 'index.html'),
      },
    },
  },
  cacheDir: path.join(repoRoot, 'node_modules/.vite-test-vr'),
  optimizeDeps: {
    entries: ['gallery/index.html', 'gallery/preview.html', 'tests/**/*.story.tsx'],
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
    host: true,
    port: 3100,
    strictPort: true,
  },
}));
