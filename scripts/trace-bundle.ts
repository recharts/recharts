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
 *   node scripts/trace-bundle.ts --from <ComponentA> --to <ComponentB>
 *
 * Examples:
 *   node scripts/trace-bundle.ts --from Area --to Pie
 *   node scripts/trace-bundle.ts --from Line --to RadialBar
 *
 * The --to value is matched against file paths, so a partial name works too:
 *   node scripts/trace-bundle.ts --from Area --to polar
 */
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { getModuleGraph, type ModuleGraphNode } from './treeshaking.ts';

const currentFile = fileURLToPath(import.meta.url);
const packageRoot = path.resolve(path.dirname(currentFile), '..');
const es6Entry = path.join(packageRoot, 'es6', 'index.js');

function isExecutedAsScript(): boolean {
  const scriptPath = process.argv[1];
  return scriptPath != null && currentFile === path.resolve(scriptPath);
}

function relativePath(id: string): string {
  if (id.startsWith(packageRoot)) return id.slice(packageRoot.length + 1);
  return id;
}

function stripExtension(filePath: string): string {
  const extension = path.extname(filePath);
  return extension.length === 0 ? filePath : filePath.slice(0, -extension.length);
}

function matchesPattern(id: string, pattern: string): boolean {
  const normalizedPattern = pattern.toLowerCase();
  const relativeId = relativePath(id);
  const relativeIdWithoutExtension = stripExtension(relativeId);
  const baseName = path.basename(relativeIdWithoutExtension);

  return (
    relativeId.toLowerCase().includes(normalizedPattern) ||
    relativeIdWithoutExtension.toLowerCase() === normalizedPattern ||
    baseName.toLowerCase() === normalizedPattern
  );
}

export function findMatchingModules(graph: ReadonlyArray<ModuleGraphNode>, pattern: string): ModuleGraphNode[] {
  const exactMatches = graph.filter(node => {
    const relativeIdWithoutExtension = stripExtension(relativePath(node.id));
    const baseName = path.basename(relativeIdWithoutExtension);
    const normalizedPattern = pattern.toLowerCase();

    return (
      relativeIdWithoutExtension.toLowerCase() === normalizedPattern || baseName.toLowerCase() === normalizedPattern
    );
  });

  if (exactMatches.length > 0) {
    return exactMatches;
  }

  return graph.filter(node => matchesPattern(node.id, pattern));
}

function printUsage(): void {
  console.log('Usage:');
  console.log('  node scripts/trace-bundle.ts --from <ComponentA> --to <ComponentB>');
  console.log('');
  console.log('Examples:');
  console.log('  node scripts/trace-bundle.ts --from Area --to Pie');
  console.log('  node scripts/trace-bundle.ts --from Line --to RadialBar');
  console.log('  node scripts/trace-bundle.ts --from Area --to polar');
  console.log('');
  console.log('The --to value is matched against file paths (partial match is fine).');
  console.log('Run npm run build-es6 first if es6/index.js does not exist.');
}

/**
 * BFS on the forward import graph from start to end.
 * Returns up to maxResults shortest paths, each expressed as an array of module IDs
 * from the source to the target.
 */
export function findShortestPaths(
  startId: string,
  endId: string,
  nodeById: Map<string, ModuleGraphNode>,
  maxResults: number,
): string[][] {
  const MAX_DEPTH = 25;
  const results: string[][] = [];
  const queue: string[][] = [[startId]];
  const shortestPathLengthById = new Map<string, number>([[startId, 1]]);
  let shortestResultLength: number | null = null;

  while (queue.length > 0 && results.length < maxResults) {
    const currentPath = queue.shift()!;
    const current = currentPath[currentPath.length - 1];

    if (shortestResultLength != null && currentPath.length > shortestResultLength) {
      continue;
    }

    if (current === endId) {
      shortestResultLength = currentPath.length;
      results.push(currentPath);
      continue;
    }

    if (currentPath.length >= MAX_DEPTH) continue;

    const node = nodeById.get(current);
    if (!node) continue;

    for (const next of node.importedIds) {
      if (currentPath.includes(next)) continue;

      const nextDepth = currentPath.length + 1;
      const shortestKnownPath = shortestPathLengthById.get(next);
      if (shortestKnownPath != null && shortestKnownPath < nextDepth) continue;

      shortestPathLengthById.set(next, nextDepth);
      queue.push([...currentPath, next]);
    }
  }

  return results;
}

async function main(): Promise<void> {
  const args = process.argv.slice(2);

  if (args.includes('--help') || args.includes('-h')) {
    printUsage();
    process.exit(0);
  }

  if (!fs.existsSync(es6Entry)) {
    console.error('Error: es6/index.js not found. Build the es6 output first:\n  npm run build-es6');
    process.exit(1);
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
  const sourceNodes = findMatchingModules(graph, fromComponent);

  if (sourceNodes.length === 0) {
    console.error(`No modules matching "${fromComponent}" were found in the bundle graph.`);
    process.exit(1);
  }

  // Find target modules that match the --to pattern
  const targetNodes = findMatchingModules(graph, toPattern);

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
  for (const source of sourceNodes) {
    const relSource = relativePath(source.id);

    for (const target of targetNodes) {
      const relTarget = relativePath(target.id);
      const sizeKb = (target.renderedLength / 1024).toFixed(2);

      console.log(`──────────────────────────────────────────────────────`);
      console.log(`From:   ${relSource}`);
      console.log(`Target: ${relTarget}  (${sizeKb} kB rendered)`);
      console.log(`──────────────────────────────────────────────────────`);

      if (target.renderedLength === 0) {
        console.log(`✓  This module is fully tree-shaken away (renderedLength = 0).`);
        console.log(`   The path below shows why it is still imported before tree-shaking.\n`);
      }

      const paths = findShortestPaths(source.id, target.id, nodeById, 8);

      if (paths.length === 0) {
        console.log(`No import path found from "${relSource}" to this module.\n`);
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
  }

  if (!foundAny && targetNodes.every(n => n.renderedLength > 0)) {
    console.log(`\n"${toPattern}" modules are in the bundle but no import path was found.`);
    console.log('This may indicate a dynamic import or a side-effect import.');
  }
}

if (isExecutedAsScript()) {
  main().catch(err => {
    console.error('Error:', (err as Error).message ?? err);
    process.exit(1);
  });
}
