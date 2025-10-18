import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import sitemap from 'vite-plugin-sitemap';
import { getSiteRoutes } from './src/navigation.data';
import { supportedLocales } from './src/locale';
import { defaultLocale } from './src/utils/LocaleUtils';

export default defineConfig(({ mode }) => ({
  // depending on your application, base can also be "/"
  base: '/',
  loader: { '.js': 'jsx' },
  plugins: [
    react({
      babel: {
        plugins: [
          ['@babel/plugin-proposal-decorators', { legacy: true }],
          ['@babel/plugin-proposal-class-properties', { loose: true }],
        ],
      },
    }),
    sitemap({
      hostname: 'https://recharts.github.io',
      dynamicRoutes: getSiteRoutes(),
      outDir: 'docs',
      exclude: ['/googlecacbec94e341ad8a'],
      i18n: {
        languages: Array.from(supportedLocales),
        defaultLanguage: defaultLocale,
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
  esbuild: {
    include: /\.[jt]s[x]?$/,
    exclude: [],
    loader: 'tsx',
  },
  css: {
    preprocessorOptions: {
      sass: {
        includePaths: [resolve(__dirname, './src/styles'), resolve(__dirname, './node_module/simple-line-icons/sass')],
      },
    },
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
        : {},
  },
}));
