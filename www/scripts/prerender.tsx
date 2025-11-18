import { build } from 'vite';
import { join, dirname, resolve } from 'node:path';
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'url';
import { redirects } from '../src/routes/redirects';

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

  // Function to create redirect HTML
  const createRedirectHtml = (targetUrl: string): string => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0; url=${targetUrl}">
  <link rel="canonical" href="${targetUrl}">
  <title>Redirecting...</title>
  <script>
    window.location.href = "${targetUrl}";
  </script>
</head>
<body>
  <p>This page has moved to <a href="${targetUrl}">${targetUrl}</a>.</p>
</body>
</html>`;
  };

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

  for (const route of allRoutes) {
    try {
      const filePath = route === '/' ? join(outDir, 'index.html') : join(outDir, route, 'index.html');

      const dir = dirname(filePath);
      if (!existsSync(dir)) {
        mkdirSync(dir, { recursive: true });
      }

      // Check if this route should be a redirect
      let html: string;
      if (redirects[route]) {
        html = createRedirectHtml(redirects[route]);
        console.log(`✓ ${route} (redirect to ${redirects[route]})`);
      } else {
        // eslint-disable-next-line no-await-in-loop
        html = await render(route, baseHtml);
        console.log(`✓ ${route}`);
      }

      writeFileSync(filePath, html);
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
