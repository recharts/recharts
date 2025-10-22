# Static Site Generation (SSG) for Recharts Website

## Overview

This website now uses Static Site Generation (SSG) to pre-render all routes at build time. This solves the SEO issue where Google's searchbot was seeing 404 status codes from the SPA hack and refusing to index pages.

## How It Works

1. **Client Build**: Vite builds the client-side application as usual
2. **SSR Build**: A separate SSR bundle is created from `src/entry-server.tsx`
3. **Pre-rendering**: The SSR bundle renders each route to HTML and saves it to the appropriate path
4. **Hydration**: When users visit the site, React hydrates the pre-rendered HTML

## Files Added/Modified

### New Files
- `src/entry-server.tsx` - SSR entry point that exports `render()` and `getAllRoutes()`
- `scripts/prerender.tsx` - Script that orchestrates the pre-rendering process
- `scripts/vite-plugin-prerender.ts` - (Optional, not currently used) Vite plugin approach

### Modified Files
- `src/app.tsx` - Changed from `createRoot().render()` to `hydrateRoot()` for proper hydration
- `package.json` - Added `prerender` script and updated `build` to run it after client build

## Build Process

```bash
npm run build
```

This runs:
1. `vite build` - Builds the client application to `/docs`
2. `npm run prerender` - Pre-renders all 253 routes

## Pre-rendered Routes

The solution pre-renders:
- Root route (`/`)
- All locale-specific routes (`/en-US`, `/zh-CN`)
- All guide pages
- All API documentation pages  
- All example pages
- Storybook pages

Total: **253 routes** across 2 locales

## Benefits

✅ **SEO-Friendly**: Each route has a proper HTML file with content, no 404 status
✅ **Fast First Paint**: Users see content immediately without waiting for JS
✅ **GitHub Pages Compatible**: Works perfectly with static hosting
✅ **No Server Required**: Still a static site, no Node.js server needed
✅ **Progressive Enhancement**: Works even if JavaScript fails to load

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
- The warning about `<Navigate>` in `StaticRouter` is expected and harmless (for `/examples` redirect routes)
- Build time increases slightly due to pre-rendering, but it's a one-time cost at build time
