import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import sitemap from 'vite-plugin-sitemap';
import { getSiteRoutes } from './src/navigation.data';
import { supportedLocales } from './src/locale';

// Use USE_LOCAL_DEVTOOLS=true to use the local source code of @recharts/devtools
// This is useful for developing the devtools package itself, as it shares the same Context as the app.
const useLocalDevtools = process.env.USE_LOCAL_DEVTOOLS === 'true';

export default defineConfig(() => ({
  base: process.env.BASE_URL || '/',
  plugins: [
    react(),
    sitemap({
      hostname: 'https://recharts.github.io',
      dynamicRoutes: getSiteRoutes(),
      outDir: 'docs',
      exclude: ['/googlecacbec94e341ad8a', '/404'],
      i18n: {
        /*
         * Here it's important that we _do not_ use the defaultLanguage
         * because if we do then the sitemap plugin will exclude the default from URLs.
         * Which is sensible thing to do but that's different from how the website itself is behaving.
         */
        languages: Array.from(supportedLocales),
        strategy: 'prefix',
      },
      robots: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
    }),
  ],
  server: {
    // this ensures that the browser opens upon server start
    open: true,
    // this sets a default port to 4000
    port: 4000,
  },
  build: {
    outDir: resolve(__dirname, 'docs'),
  },
  optimizeDeps: {
    /**
     * We have to exclude @recharts/devtools from optimization
     * because it uses React context (indirectly) imported from recharts.
     * When we are using local development versions (using the `resolve.alias` below),
     * this will cause one pre-bundled version of React context to be different from the one used by the local recharts.
     * Which means that devtools latch to different context and can't show anything.
     *
     * Disabling the pre-bundling for devtools solves this issue.
     *
     * Consumers of Recharts who install both recharts and @recharts/devtools from npm
     * will not have this issue, so this is only needed for our local development setup here.
     *
     * https://vite.dev/guide/dep-pre-bundling#the-why
     */
    exclude: ['@recharts/devtools'],
  },
  resolve: {
    alias: {
      /*
       * We are using the local version of recharts from ../src with latest changes
       * instead of the published version from npm's node_modules.
       * This means we can use recharts directly as we develop the website,
       * and use unreleased features / fixes directly to verify them.
       *
       * This also gives us hot module reload for free!
       */
      recharts: resolve(__dirname, '../src'),
      ...(useLocalDevtools ? { '@recharts/devtools': resolve(__dirname, '../../devtools/src/index.ts') } : {}),
    },
  },
}));
