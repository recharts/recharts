# Recharts Bundle Visualization

A small interactive app that visualises which source files contribute the most to a tree-shaken Recharts bundle, using Recharts' own **Treemap** and **SunburstChart** components.

## Quick start

```sh
# 1. From the repo root – build the es6 output (needed once)
npm run build-es6

# 2. Generate the bundle data JSON (all tracked components by default)
npm run generate-bundle-data

# Or for a specific set of components:
npm run generate-bundle-data -- Area Line Bar

# 3. Install the app's own dependencies (needed once)
cd bundle-viz
npm install

# 4. Start the dev server
npm run dev
# Opens at http://localhost:3001
```

## What you see

- **Treemap view** – every source file that ends up in the bundle is drawn as a coloured rectangle proportional to its rendered byte size. Files in the same directory share a colour family. Hover for the exact size.

- **Sunburst view** – the same data displayed as concentric rings. The root in the centre is the whole bundle; each ring represents a directory level; the outer ring is individual files.

Both charts are interactive: hover over any cell to see the file path and size in the tooltip.

## Regenerating data

Re-run `npm run generate-bundle-data` (from the repo root) whenever you change the source code or want to compare a different set of components. The dev server picks up the new data automatically via hot-module reload.

## File layout

```
bundle-viz/
  package.json        standalone Vite + React app
  vite.config.ts      aliases recharts → ../src so no build step is needed
  src/
    App.tsx           chart components and layout
    main.tsx          React entry point
    bundle-data.json  placeholder shipped in git; overwritten by npm run generate-bundle-data
```
