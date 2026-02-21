/**
 * Bundle trace script
 *
 * Shows the import chain(s) that cause component B to be included in the
 * tree-shaken bundle when only component A is imported.
 *
 * Prerequisites: build the es6 output first:
 *   npm run build-es6
 *
 * Usage:
 *   npx tsx scripts/trace-bundle.ts --from <ComponentA> --to <ComponentB>
 *
 * Examples:
 *   npx tsx scripts/trace-bundle.ts --from Area --to Pie
 *   npx tsx scripts/trace-bundle.ts --from Line --to RadialBar
 *
 * The --to value is matched against file paths, so a partial name works too:
 *   npx tsx scripts/trace-bundle.ts --from Area --to polar
 */
import path from 'node:path';
import fs from 'node:fs';
import { getModuleGraph, type ModuleGraphNode } from './treeshaking';

const packageRoot = path.resolve(__dirname, '..');
const es6Entry = path.join(packageRoot, 'es6', 'index.js');

function relativePath(id: string): string {
  if (id.startsWith(packageRoot)) return id.slice(packageRoot.length + 1);
  return id;
}

function printUsage(): void {
  console.log('Usage:');
  console.log('  npx tsx scripts/trace-bundle.ts --from <ComponentA> --to <ComponentB>');
  console.log('');
  console.log('Examples:');
  console.log('  npx tsx scripts/trace-bundle.ts --from Area --to Pie');
  console.log('  npx tsx scripts/trace-bundle.ts --from Line --to RadialBar');
  console.log('  npx tsx scripts/trace-bundle.ts --from Area --to polar');
  console.log('');
  console.log('The --to value is matched against file paths (partial match is fine).');
  console.log('Run npm run build-es6 first if es6/index.js does not exist.');
}

/**
 * BFS on the forward import graph from start to end.
 * Returns up to maxResults shortest paths, each expressed as an array of module IDs
 * from the entry to the target.
 */
function findShortestPaths(
  startId: string,
  endId: string,
  nodeById: Map<string, ModuleGraphNode>,
  maxResults: number,
): string[][] {
  const MAX_DEPTH = 25;
  const results: string[][] = [];
  const queue: string[][] = [[startId]];

  while (queue.length > 0 && results.length < maxResults) {
    const currentPath = queue.shift()!;
    const current = currentPath[currentPath.length - 1];

    if (current === endId) {
      results.push(currentPath);
      continue;
    }

    if (currentPath.length >= MAX_DEPTH) continue;

    const node = nodeById.get(current);
    if (!node) continue;

    for (const next of node.importedIds) {
      if (!currentPath.includes(next)) {
        queue.push([...currentPath, next]);
      }
    }
  }

  return results;
}

async function main(): Promise<void> {
  if (!fs.existsSync(es6Entry)) {
    console.error('Error: es6/index.js not found. Build the es6 output first:\n  npm run build-es6');
    process.exit(1);
  }

  const args = process.argv.slice(2);

  if (args.includes('--help') || args.includes('-h')) {
    printUsage();
    process.exit(0);
  }

  const fromIdx = args.indexOf('--from');
  const toIdx = args.indexOf('--to');

  if (fromIdx === -1 || toIdx === -1 || !args[fromIdx + 1] || !args[toIdx + 1]) {
    printUsage();
    process.exit(1);
  }

  const fromComponent = args[fromIdx + 1];
  const toPattern = args[toIdx + 1];

  console.log(`Building bundle for "${fromComponent}" …\n`);

  const graph = await getModuleGraph(fromComponent);
  const nodeById = new Map(graph.map(n => [n.id, n]));

  // Identify the entry node: the node with no importers (the temp file we created)
  const entryNode = graph.find(n => n.importers.length === 0 && n.importedIds.length > 0);
  if (!entryNode) {
    console.error('Could not identify bundle entry node.');
    process.exit(1);
  }

  // Find target modules that match the --to pattern
  const toPatternLower = toPattern.toLowerCase();
  const targetNodes = graph.filter(n => {
    const rel = relativePath(n.id);
    return rel.toLowerCase().includes(toPatternLower) || path.basename(n.id, '.js').toLowerCase() === toPatternLower;
  });

  if (targetNodes.length === 0) {
    console.log(`No modules matching "${toPattern}" were found in the bundle.`);
    console.log('Either the component is not in the bundle (tree-shaking is working!),');
    console.log('or the name/pattern does not match any file path.');
    console.log('\nModules that contribute code to the bundle:');
    graph
      .filter(n => n.renderedLength > 0)
      .sort((a, b) => b.renderedLength - a.renderedLength)
      .forEach(n => console.log(`  ${relativePath(n.id)}  (${(n.renderedLength / 1024).toFixed(2)} kB)`));
    return;
  }

  let foundAny = false;
  for (const target of targetNodes) {
    const relTarget = relativePath(target.id);
    const sizeKb = (target.renderedLength / 1024).toFixed(2);

    console.log(`──────────────────────────────────────────────────────`);
    console.log(`Target: ${relTarget}  (${sizeKb} kB rendered)`);
    console.log(`──────────────────────────────────────────────────────`);

    if (target.renderedLength === 0) {
      console.log(`✓  This module is fully tree-shaken away (renderedLength = 0).`);
      console.log(`   It is imported somewhere in the dependency graph but contributes no output code.\n`);
      continue;
    }

    const paths = findShortestPaths(entryNode.id, target.id, nodeById, 8);

    if (paths.length === 0) {
      console.log(`No import path found from "${fromComponent}" to this module.\n`);
    } else {
      foundAny = true;
      console.log(`Found ${paths.length} shortest import path(s):\n`);
      paths.forEach((p, i) => {
        console.log(`  Path ${i + 1}:`);
        p.forEach((id, depth) => {
          let prefix: string;
          if (depth === 0) prefix = '┌';
          else if (depth === p.length - 1) prefix = '└';
          else prefix = '│';
          const arrow = depth === 0 ? '' : '──';
          const nodeSize = nodeById.get(id)?.renderedLength ?? 0;
          const sizeStr = nodeSize > 0 ? `  (${(nodeSize / 1024).toFixed(2)} kB)` : '  (tree-shaken)';
          console.log(`    ${prefix}${arrow} ${relativePath(id)}${sizeStr}`);
        });
        console.log();
      });
    }
  }

  if (!foundAny && targetNodes.every(n => n.renderedLength > 0)) {
    console.log(`\n"${toPattern}" modules are in the bundle but no import path was found.`);
    console.log('This may indicate a dynamic import or a side-effect import.');
  }
}

main().catch(err => {
  console.error('Error:', (err as Error).message ?? err);
  process.exit(1);
});
