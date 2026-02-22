/**
 * Generates bundle size data as a hierarchical JSON file consumed by the bundle-viz app.
 *
 * Prerequisites: build the es6 output first:
 *   npm run build-es6
 *
 * Usage:
 *   npm run generate-bundle-data                      # all tracked components
 *   npm run generate-bundle-data -- Area              # single component
 *   npm run generate-bundle-data -- Area Line Bar     # specific set
 *
 * Output: bundle-viz/src/bundle-data.json
 */
import path from 'node:path';
import fs from 'node:fs';
import type { OutputChunk } from 'rollup';
import { treeshake, ALL_TRACKED_COMPONENT_NAMES } from './treeshaking';

const packageRoot = path.resolve(__dirname, '..');
const es6Entry = path.join(packageRoot, 'es6', 'index.js');
const outFile = path.join(packageRoot, 'bundle-viz', 'src', 'bundle-data.json');

interface BundleNode {
  name: string;
  value: number;
  children?: BundleNode[];
}

function sortTree(node: BundleNode): void {
  if (!node.children) return;
  node.children.sort((a, b) => b.value - a.value);
  node.children.forEach(sortTree);
}

function countLeaves(node: BundleNode): number {
  if (!node.children || node.children.length === 0) return 1;
  return node.children.reduce((sum, child) => sum + countLeaves(child), 0);
}

/**
 * Inserts a leaf module into a directory tree.
 * Path segments like ['state', 'selectors', 'axisSelectors.js'] become nested children.
 */
function insertModule(root: BundleNode, segments: string[], size: number): void {
  let current = root;
  for (let i = 0; i < segments.length - 1; i++) {
    const seg = segments[i]!;
    let child = current.children?.find(c => c.name === seg && c.children != null);
    if (!child) {
      child = { name: seg, value: 0, children: [] };
      if (!current.children) current.children = [];
      current.children.push(child);
    }
    child.value += size;
    current = child;
  }

  // Leaf node
  const fileName = segments[segments.length - 1]!;
  if (!current.children) current.children = [];
  const existing = current.children.find(c => c.name === fileName);
  if (existing) {
    existing.value += size;
  } else {
    current.children.push({ name: fileName, value: size });
  }
}

async function main(): Promise<void> {
  if (!fs.existsSync(es6Entry)) {
    console.error('Error: es6/index.js not found. Build the es6 output first:\n  npm run build-es6');
    process.exit(1);
  }

  const cliArgs = process.argv.slice(2);
  const components = cliArgs.length > 0 ? cliArgs : [...ALL_TRACKED_COMPONENT_NAMES];

  console.log(`Building tree-shaken bundle for: ${components.join(', ')}`);

  const output = await treeshake(components);
  const chunks = output.filter((c): c is OutputChunk => c.type === 'chunk');

  const root: BundleNode = { name: 'recharts', value: 0, children: [] };

  for (const chunk of chunks) {
    for (const [id, mod] of Object.entries(chunk.modules)) {
      if (mod.renderedLength <= 0) continue;

      const size = mod.renderedLength;
      root.value += size;

      // Convert absolute path to relative segments, strip es6/ prefix
      let relPath = id.startsWith(packageRoot) ? id.slice(packageRoot.length + 1) : id;
      if (relPath.startsWith('es6/')) relPath = relPath.slice(4);

      const segments = relPath.split('/');
      insertModule(root, segments, size);
    }
  }

  // Sort children by value descending at every level
  sortTree(root);

  const bundleData = {
    components,
    generatedAt: new Date().toISOString(),
    totalSize: root.value,
    tree: root,
  };

  fs.writeFileSync(outFile, JSON.stringify(bundleData, null, 2), 'utf-8');

  console.log(`\nTotal bundle size : ${(root.value / 1024).toFixed(2)} kB`);
  console.log(`Modules included  : ${countLeaves(root)}`);
  console.log(`\nData written to   : ${outFile}`);
  console.log('Now start the visualization app:');
  console.log('  cd bundle-viz && npm install && npm run dev');
}

main().catch(err => {
  console.error('Error:', (err as Error).message ?? err);
  process.exit(1);
});
