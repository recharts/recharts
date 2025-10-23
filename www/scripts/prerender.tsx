import { build } from 'vite';
import { join, dirname, resolve } from 'node:path';
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'url';

// @ts-expect-error import.meta
// eslint-disable-next-line no-underscore-dangle
const __dirname = dirname(fileURLToPath(import.meta.url));

async function prerender() {
  console.log('\n🔨 Starting pre-rendering...\n');

  const root = resolve(__dirname, '..');
  const outDir = resolve(root, 'docs');

  // Read the base HTML
  const indexHtmlPath = join(outDir, 'index.html');
  const baseHtml = readFileSync(indexHtmlPath, 'utf-8');

  // Build the SSR bundle
  const ssrEntry = resolve(root, 'src/entry-server.tsx');

  console.log('Building SSR bundle...');
  await build({
    root,
    build: {
      ssr: ssrEntry,
      outDir: join(outDir, '.ssr-tmp'),
      emptyOutDir: true,
      rollupOptions: {
        output: {
          format: 'es',
        },
      },
    },
    ssr: {
      noExternal: true,
    },
    logLevel: 'warn',
  });

  console.log('SSR bundle built successfully\n');

  // Import the render function
  const ssrOutputPath = join(outDir, '.ssr-tmp', 'entry-server.mjs');
  const { render, getAllRoutes } = await import(`file://${ssrOutputPath}`);

  const allRoutes = getAllRoutes();
  console.log(`Rendering ${allRoutes.length} routes...\n`);

  // Render each route
  let successCount = 0;
  let failCount = 0;

  // eslint-disable-next-line no-restricted-syntax
  for (const route of allRoutes) {
    try {
      // eslint-disable-next-line no-await-in-loop
      const html = await render(route, baseHtml);
      const filePath = route === '/' ? join(outDir, 'index.html') : join(outDir, route, 'index.html');

      const dir = dirname(filePath);
      if (!existsSync(dir)) {
        mkdirSync(dir, { recursive: true });
      }

      writeFileSync(filePath, html);
      console.log(`✓ ${route}`);
      successCount++;
    } catch (error) {
      console.error(`✗ Failed to render ${route}:`, error.message);
      failCount++;
    }
  }

  // Clean up SSR temp directory
  rmSync(join(outDir, '.ssr-tmp'), { recursive: true, force: true });

  console.log(`\n✨ Pre-rendering complete! ${successCount} succeeded, ${failCount} failed\n`);
}

prerender().catch(err => {
  console.error('Pre-render error:', err);
  process.exit(1);
});
