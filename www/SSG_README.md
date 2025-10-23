# Static Site Generation (SSG) for Recharts Website

## Overview

This website now uses Static Site Generation (SSG) to pre-render all routes at build time. This solves the SEO issue where Google's searchbot was seeing 404 status codes from the SPA hack and refusing to index pages.

## How It Works

1. **Client Build**: Vite builds the client-side application as usual
2. **Sitemap Generation**: Vite plugin generates sitemap.xml with all routes
3. **SSR Build**: A separate SSR bundle is created from `src/entry-server.tsx`
4. **Pre-rendering**: The SSR bundle renders each route to HTML and saves it to the appropriate path
5. **Sitemap Validation**: Validates that all sitemap URLs have corresponding HTML files
6. **Hydration**: When users visit the site, React hydrates the pre-rendered HTML

## Files Added/Modified

### New Files
- `src/entry-server.tsx` - SSR entry point that exports `render()` and `getAllRoutes()`
- `scripts/prerender.tsx` - Script that orchestrates the pre-rendering process
- `scripts/validate-sitemap.tsx` - Validates sitemap consistency with rendered HTML files
- `scripts/vite-plugin-prerender.ts` - (Optional, not currently used) Vite plugin approach
- `src/views/ExamplesIndexView.tsx` - Landing page for examples with category grid
- `src/views/ExamplesIndexView.scss` - Styling for examples index page

### Modified Files
- `src/app.tsx` - Changed from `createRoot().render()` to `hydrateRoot()` for proper hydration
- `package.json` - Added `prerender` and `validate-sitemap` scripts, updated `build` to run both
- `vite.config.ts` - Removed `defaultLanguage` from sitemap config to generate explicit locale URLs
- `src/routes/index.tsx` - Removed redirects, added examples index page route

## Build Process

```bash
npm run build
```

This runs:
1. `npm run build:client` - Builds the client application to `/docs` and generates sitemap.xml
2. `npm run prerender` - Pre-renders all 378 routes
3. `npm run validate-sitemap` - Validates sitemap against generated HTML files

## Pre-rendered Routes

The solution pre-renders:
- Root route (`/`)
- All locale-specific routes (`/en-US`, `/zh-CN`)
- Examples index pages (`/examples`, `/en-US/examples`, `/zh-CN/examples`)
- All guide pages
- All API documentation pages  
- All example pages
- Storybook pages

Total: **378 routes** across 2 locales (en-US, zh-CN) plus default unprefixed routes

## Benefits

✅ **SEO-Friendly**: Each route has a proper HTML file with content, no 404 status
✅ **Fast First Paint**: Users see content immediately without waiting for JS
✅ **GitHub Pages Compatible**: Works perfectly with static hosting
✅ **No Server Required**: Still a static site, no Node.js server needed
✅ **Progressive Enhancement**: Works even if JavaScript fails to load
✅ **Sitemap Validation**: Automated checks ensure sitemap and HTML files stay in sync
✅ **Proper Examples Landing**: Examples index shows categorized preview cards instead of redirects

## Technical Details

- Uses React 18's `renderToString` for SSR
- Uses `StaticRouter` from react-router for server-side routing
- Uses `hydrateRoot` for client-side hydration
- Bundles all dependencies in SSR build (`noExternal: true`)
- Cleans up temporary SSR build after pre-rendering

## Development

During development, the site works as a normal SPA (no pre-rendering). Pre-rendering only happens during production builds.

```bash
npm start  # Development mode - no pre-rendering
npm run build  # Production build - with pre-rendering
```

## Notes

- The old SPA GitHub Pages hack has been **removed** - no longer needed!
- The `404.html` is now a proper, clean 404 page (not a redirect hack)
- Build time increases slightly due to pre-rendering, but it's a one-time cost at build time
- Sitemap validation runs automatically after builds to catch inconsistencies
- The sitemap includes both primary URLs and alternate language URLs via `xhtml:link` tags
- Locale-specific 404 pages (like `/en-US/404`) are referenced in sitemap but don't exist as separate files
- The validation script handles special cases like locale index pages that are in sitemap as alternates
