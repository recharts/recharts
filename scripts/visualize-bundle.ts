/**
 * Bundle visualization script
 *
 * Generates an interactive HTML report showing which source files contribute
 * how much to the tree-shaken bundle.  Open the generated file in any browser.
 *
 * Prerequisites: build the es6 output first:
 *   npm run build-es6
 *
 * Usage:
 *   npx tsx scripts/visualize-bundle.ts [ComponentName ...]
 *
 * Examples:
 *   npx tsx scripts/visualize-bundle.ts              # all tracked components
 *   npx tsx scripts/visualize-bundle.ts Area         # single component
 *   npx tsx scripts/visualize-bundle.ts Area Line Bar
 *
 * Output: bundle-visualization.html (open in a browser)
 */
import type { OutputChunk } from 'rollup';
import path from 'node:path';
import fs from 'node:fs';
import { treeshake, ALL_TRACKED_COMPONENT_NAMES } from './treeshaking';

const packageRoot = path.resolve(__dirname, '..');
const es6Entry = path.join(packageRoot, 'es6', 'index.js');

type ModuleEntry = { id: string; relPath: string; size: number };

function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function summarizeComponents(components: string[]): string {
  if (components.length <= 6) return components.join(', ');
  return `${components.slice(0, 6).join(', ')} … (+${components.length - 6} more)`;
}

function generateHtml(components: string[], modules: ModuleEntry[], totalSize: number): string {
  const maxSize = modules[0]?.size ?? 1;

  const rows = modules
    .map(m => {
      const kB = (m.size / 1024).toFixed(2);
      const pct = ((m.size / totalSize) * 100).toFixed(1);
      const barWidth = ((m.size / maxSize) * 100).toFixed(1);
      return (
        `<tr>` +
        `<td class="path">${escapeHtml(m.relPath)}</td>` +
        `<td class="size">${kB}</td>` +
        `<td class="pct">${pct}%</td>` +
        `<td class="bar"><div class="bar-fill" style="width:${barWidth}%"></div></td>` +
        `</tr>`
      );
    })
    .join('\n');

  const componentsHtml = escapeHtml(summarizeComponents(components));
  const totalKb = (totalSize / 1024).toFixed(2);

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Recharts Bundle Visualization</title>
<style>
  * { box-sizing: border-box; }
  body { font-family: monospace; padding: 24px; background: #1a1a1a; color: #e0e0e0; margin: 0; }
  h1 { color: #61dafb; margin: 0 0 4px; }
  .subtitle { color: #888; font-size: 0.85em; margin-bottom: 20px; }
  .summary { display: flex; gap: 32px; margin-bottom: 20px; }
  .stat { background: #252525; border-radius: 6px; padding: 12px 20px; }
  .stat-label { color: #888; font-size: 0.8em; text-transform: uppercase; letter-spacing: 0.05em; }
  .stat-value { font-size: 1.6em; color: #61dafb; font-weight: bold; }
  .components { color: #aaa; font-size: 0.85em; margin-bottom: 16px; word-break: break-all; }
  #filter { width: 420px; padding: 7px 10px; margin-bottom: 12px; background: #2a2a2a;
            color: #e0e0e0; border: 1px solid #444; border-radius: 4px; font-family: monospace; font-size: 0.9em; }
  table { width: 100%; border-collapse: collapse; }
  thead th { text-align: left; padding: 8px 12px; background: #2a2a2a; cursor: pointer;
             user-select: none; white-space: nowrap; border-bottom: 1px solid #444; }
  thead th:hover { background: #333; }
  tbody td { padding: 5px 12px; border-bottom: 1px solid #282828; }
  tbody tr:hover td { background: #222; }
  td.path { font-size: 0.82em; word-break: break-all; }
  td.size, td.pct { text-align: right; white-space: nowrap; color: #aaa; }
  td.bar { width: 180px; padding-right: 16px; }
  .bar-fill { height: 10px; background: #61dafb; border-radius: 2px; min-width: 1px; }
</style>
</head>
<body>
<h1>Recharts Bundle Visualization</h1>
<div class="subtitle">Tree-shaken bundle &middot; generated ${new Date().toISOString()}</div>
<div class="summary">
  <div class="stat"><div class="stat-label">Total size</div><div class="stat-value">${totalKb} kB</div></div>
  <div class="stat"><div class="stat-label">Modules</div><div class="stat-value">${modules.length}</div></div>
</div>
<div class="components">Components: <strong>${componentsHtml}</strong></div>
<input id="filter" type="text" placeholder="Filter by file path&hellip;" oninput="filterTable(this.value)">
<table id="tbl">
  <thead><tr>
    <th onclick="sortTable(0)">File &updownarrow;</th>
    <th onclick="sortTable(1)">kB &darr;</th>
    <th onclick="sortTable(2)">% &updownarrow;</th>
    <th>Size</th>
  </tr></thead>
  <tbody>${rows}</tbody>
</table>
<script>
let sortCol = 1, sortDir = -1;
function sortTable(col) {
  if (sortCol === col) { sortDir = -sortDir; } else { sortCol = col; sortDir = -1; }
  const tbody = document.querySelector('#tbl tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));
  rows.sort((a, b) => {
    const at = a.cells[col].textContent.trim();
    const bt = b.cells[col].textContent.trim();
    const av = parseFloat(at);
    const bv = parseFloat(bt);
    const ac = isNaN(av) ? at : av;
    const bc = isNaN(bv) ? bt : bv;
    return ac < bc ? sortDir : ac > bc ? -sortDir : 0;
  });
  rows.forEach(r => tbody.appendChild(r));
}
function filterTable(q) {
  q = q.toLowerCase();
  document.querySelectorAll('#tbl tbody tr').forEach(r => {
    r.style.display = r.cells[0].textContent.toLowerCase().includes(q) ? '' : 'none';
  });
}
</script>
</body>
</html>`;
}

async function main(): Promise<void> {
  if (!fs.existsSync(es6Entry)) {
    console.error('Error: es6/index.js not found. Build the es6 output first:\n  npm run build-es6');
    process.exit(1);
  }

  const cliArgs = process.argv.slice(2);
  const components = cliArgs.length > 0 ? cliArgs : [...ALL_TRACKED_COMPONENT_NAMES];

  console.log(`Building bundle for: ${components.join(', ')}`);

  const output = await treeshake(components);
  const chunks = output.filter((c): c is OutputChunk => c.type === 'chunk');

  const modules: ModuleEntry[] = [];

  for (const chunk of chunks) {
    for (const [id, mod] of Object.entries(chunk.modules)) {
      if (mod.renderedLength > 0) {
        const relPath = id.startsWith(packageRoot) ? id.slice(packageRoot.length + 1) : id;
        modules.push({ id, relPath, size: mod.renderedLength });
      }
    }
  }

  modules.sort((a, b) => b.size - a.size);

  const totalSize = modules.reduce((sum, m) => sum + m.size, 0);

  console.log(`\nTotal bundle size : ${(totalSize / 1024).toFixed(2)} kB`);
  console.log(`Modules included  : ${modules.length}`);

  const outFile = path.join(packageRoot, 'bundle-visualization.html');
  fs.writeFileSync(outFile, generateHtml(components, modules, totalSize), 'utf-8');
  console.log(`\nVisualization written to: ${outFile}`);
  console.log('Open it in your browser, e.g.:');
  console.log(`  open ${outFile}`);
}

main().catch(err => {
  console.error('Error:', (err as Error).message ?? err);
  process.exit(1);
});
