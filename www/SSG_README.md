# Static Site Generation (SSG) for Recharts Website

## Overview

This website uses Static Site Generation (SSG) to pre-render all routes at build time. This solves the SEO issue where Google's searchbot was seeing 404 status codes from the SPA hack and refusing to index pages.

## How It Works

1. **Client Build**: Vite builds the client-side application as usual
2. **Sitemap Generation**: Vite plugin generates sitemap.xml with all routes (without trailing slashes)
3. **SSR Build**: A separate SSR bundle is created from `src/entry-server.tsx`
4. **Pre-rendering**: The SSR bundle renders each route to HTML and saves it to the appropriate path (with trailing slashes)
5. **Sitemap Postprocessing**: Adds trailing slashes to canonical URLs and creates alternates for both URL formats
6. **Sitemap Validation**: Validates sitemap structure and ensures all URLs have corresponding HTML files
7. **Hydration**: When users visit the site, React hydrates the pre-rendered HTML

## Files Added/Modified

### New Files
- `src/entry-server.tsx` - SSR entry point that exports `render()` and `getAllRoutes()`
- `scripts/prerender.tsx` - Script that orchestrates the pre-rendering process
- `scripts/postprocess-sitemap.tsx` - Adds trailing slashes and creates URL alternates using SAX parser
- `scripts/validate-sitemap.tsx` - Validates sitemap structure and consistency with HTML files using SAX parser
- `scripts/vite-plugin-prerender.ts` - (Optional, not currently used) Vite plugin approach
- `src/views/ExamplesIndexView.tsx` - Landing page for examples with category grid
- `src/views/ExamplesIndexView.css` - Styling for examples index page

### Modified Files
- `src/app.tsx` - Changed from `createRoot().render()` to `hydrateRoot()` for proper hydration
- `package.json` - Added `prerender`, `postprocess-sitemap`, and `validate-sitemap` scripts; updated `build` to run all
- `vite.config.ts` - Removed `defaultLanguage` from sitemap config to generate explicit locale URLs
- `src/routes/index.tsx` - Removed redirects, added examples index page route

## Build Process

```bash
npm run build
```

This runs:
1. `npm run build:client` - Builds the client application to `/docs` and generates sitemap.xml
2. `npm run prerender` - Pre-renders all routes to HTML files with trailing slashes in URLs
3. `npm run postprocess-sitemap` - Updates sitemap to include both trailing-slash and non-trailing-slash URL formats
4. `npm run validate-sitemap` - Validates sitemap structure and file consistency

## URL Structure

The sitemap follows a specific structure to support both trailing-slash and non-trailing-slash URLs:

### Canonical URLs (with trailing slash)
- All canonical URLs in `<loc>` tags have trailing slashes: `/guide/`, `/api/`, `/examples/`
- Pre-rendered HTML files match this structure: `docs/guide/index.html`, `docs/api/index.html`
- Exception: Root URL `/` remains as-is

### Alternate URLs
Each canonical URL has multiple alternates:

1. **x-default alternate** (without trailing slash): `/guide`, `/api`, `/examples`
   - Redirects to the canonical URL in the browser
   - Helps search engines understand URL equivalence

2. **Locale alternates** (with trailing slash): `/en-US/guide/`, `/zh-CN/api/`
   - All locale-specific URLs also have trailing slashes
   - Matches the HTML file structure

### Example Sitemap Entry
```xml
<url>
  <loc>https://recharts.github.io/guide/</loc>
  <lastmod>2025-10-27T14:04:30.193Z</lastmod>
  <changefreq>daily</changefreq>
  <priority>1.0</priority>
  <xhtml:link rel="alternate" hreflang="x-default" href="https://recharts.github.io/guide"/>
  <xhtml:link rel="alternate" hreflang="zh-CN" href="https://recharts.github.io/zh-CN/guide/"/>
  <xhtml:link rel="alternate" hreflang="en-US" href="https://recharts.github.io/en-US/guide/"/>
</url>
```

## Sitemap Postprocessing

The `scripts/postprocess-sitemap.tsx` script:
- Uses SAX parser (no regex) for robust XML parsing
- Ensures all canonical URLs have trailing slashes
- Adds x-default alternates without trailing slashes for non-root URLs
- Ensures all locale alternates have trailing slashes
- Preserves existing metadata (lastmod, changefreq, priority)

## Sitemap Validation

The `scripts/validate-sitemap.tsx` script validates:

1. **URL Structure**
   - All canonical URLs end with trailing slash (except root `/`)
   - Non-root URLs have exactly one x-default alternate without trailing slash
   - Each URL has alternates for all supported locales (`zh-CN`, `en-US`)

2. **File Consistency**
   - All sitemap URLs have corresponding non-empty HTML files
   - No HTML files exist that are missing from the sitemap

3. **Implementation**
   - Uses SAX parser for robust XML parsing (no regex)
   - Imports supported locales from `src/locale/index.ts`
   - Provides clear error messages for any issues

## Pre-rendered Routes

The solution pre-renders:
- Root route (`/`)
- All locale-specific routes (`/en-US`, `/zh-CN`)
- Examples index pages (`/examples`, `/en-US/examples`, `/zh-CN/examples`)
- All guide pages
- All API documentation pages
- All example pages
- Storybook pages

Total: **378 HTML files** across 2 locales (en-US, zh-CN) plus default unprefixed routes

The sitemap contains **503 total URLs** (126 canonical + 125 x-default alternates + 252 locale alternates)

## Benefits

✅ **SEO-Friendly**: Each route has proper HTML with content, no 404 status
✅ **URL Flexibility**: Supports both trailing-slash and non-trailing-slash formats
✅ **Fast First Paint**: Users see content immediately without waiting for JS
✅ **GitHub Pages Compatible**: Works perfectly with static hosting
✅ **No Server Required**: Still a static site, no Node.js server needed
✅ **Progressive Enhancement**: Works even if JavaScript fails to load
✅ **Automated Validation**: Ensures sitemap and HTML files stay in sync
✅ **Proper XML Parsing**: Uses SAX parser for robust, maintainable code
✅ **Locale Support**: Proper hreflang alternates for internationalization

## Technical Details

- Uses React 18's `renderToString` for SSR
- Uses `StaticRouter` from react-router for server-side routing
- Uses `hydrateRoot` for client-side hydration
- Bundles all dependencies in SSR build (`noExternal: true`)
- Cleans up temporary SSR build after pre-rendering
- Uses SAX parser for XML processing (installed as dev dependency)

## Development

During development, the site works as a normal SPA (no pre-rendering). Pre-rendering only happens during production builds.

```bash
npm start  # Development mode - no pre-rendering
npm run build  # Production build - with pre-rendering and validation
```

## Dependencies

- `sax` - SAX parser for XML processing in postprocess and validation scripts
- `@types/sax` - TypeScript types for SAX parser

## Notes

- The old SPA GitHub Pages hack has been **removed** - no longer needed!
- The `404.html` is now a proper, clean 404 page (not a redirect hack)
- Build time increases slightly due to pre-rendering and validation, but it's a one-time cost
- Sitemap validation runs automatically after builds to catch inconsistencies early
- The sitemap uses proper `xhtml:link` tags for alternates with `hreflang` attributes
- Locale-specific 404 pages (like `/en-US/404`) are skipped during validation
- All scripts use TypeScript and SAX parser - no regex for XML parsing!
