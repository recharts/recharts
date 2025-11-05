import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import sitemap from 'vite-plugin-sitemap';
import { getSiteRoutes } from './src/navigation.data';
import { supportedLocales } from './src/locale';

export default defineConfig(({ mode }) => ({
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
  resolve: {
    alias:
      mode === 'development'
        ? {
            /*
             * This is needed to make sure that when we run the website locally,
             * we are using the local version of recharts from ../src with latest changes.
             * This also gives us hot module reload for free!
             */
            recharts: resolve(__dirname, '../src'),
            /*
             * Ensure that we are using the same React instance
             * to avoid issues with hooks and context.
             */
            react: resolve(__dirname, 'node_modules/react'),
            'react-dom': resolve(__dirname, 'node_modules/react-dom'),
            'react-is': resolve(__dirname, 'node_modules/react-is'),
          }
        : undefined,
  },
}));
