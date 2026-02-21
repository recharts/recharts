import path from 'node:path';
import fs from 'node:fs';
import os from 'node:os';
import { rollup, type OutputChunk, type OutputAsset } from 'rollup';

const packageRoot = path.resolve(__dirname, '..');
const es6Entry = path.join(packageRoot, 'es6', 'index.js');

function getExternals(): Array<string | RegExp> {
  const packageJson = JSON.parse(fs.readFileSync(path.join(packageRoot, 'package.json'), 'utf-8'));
  const deps: string[] = Object.keys(packageJson.dependencies ?? {});
  const peerDeps: string[] = Object.keys(packageJson.peerDependencies ?? {});
  const specialDeps = ['use-sync-external-store/shim/with-selector'];
  return [...deps, ...peerDeps, ...specialDeps, /^victory-vendor.*/, /^es-toolkit.*/];
}

/**
 * Bundle one or more recharts components using rollup with aggressive tree-shaking.
 * Returns the rollup output chunks/assets.
 */
export async function treeshake(components: string | string[]): Promise<(OutputChunk | OutputAsset)[]> {
  const componentList = Array.isArray(components) ? components : [components];
  const importList = componentList.join(', ');
  const source = `import { ${importList} } from '${es6Entry}';\nexport const used = { ${importList} };\n`;

  const tmpFile = path.join(
    os.tmpdir(),
    `recharts-treeshake-entry-${Date.now()}-${Math.random().toString(36).slice(2)}.mjs`,
  );
  fs.writeFileSync(tmpFile, source);

  try {
    const bundle = await rollup({
      input: tmpFile,
      external: getExternals(),
      treeshake: {
        moduleSideEffects: false,
      },
      logLevel: 'silent',
      plugins: [
        {
          name: 'resolve-directory-index',
          resolveId(moduleId: string, importer: string | undefined) {
            if (importer != null && moduleId.startsWith('.')) {
              const resolved = path.resolve(path.dirname(importer), moduleId);
              if (fs.existsSync(resolved) && fs.statSync(resolved).isDirectory()) {
                const indexFile = path.join(resolved, 'index.js');
                if (fs.existsSync(indexFile)) {
                  return indexFile;
                }
              }
            }
            return null;
          },
        },
      ],
    });
    const output = await bundle.generate({ format: 'esm' });
    await bundle.close();
    return output.output;
  } finally {
    fs.unlinkSync(tmpFile);
  }
}

/**
 * Calculate total byte size of all chunks in a rollup output.
 */
export function getBundleSize(output: (OutputChunk | OutputAsset)[]): number {
  return output.reduce((total, chunkOrAsset) => {
    if (chunkOrAsset.type === 'chunk') {
      return total + Buffer.byteLength(chunkOrAsset.code, 'utf-8');
    }
    return total;
  }, 0);
}

/**
 * Check which component names from the given list appear as definitions in the bundle output.
 * A component is considered "present" when its function/class/variable definition is found in the code.
 */
export function findComponentsInBundle(output: (OutputChunk | OutputAsset)[], componentNames: string[]): string[] {
  const code = output
    .filter((c): c is OutputChunk => c.type === 'chunk')
    .map(c => c.code)
    .join('\n');

  return componentNames.filter(name => {
    /*
     * Simple heuristic: check if the component name appears in the code. This can produce false positives
     * but for small library like Recharts it is good enough.
     */
    return code.includes(name);
  });
}

/**
 * Chart container component names.
 */
export const CHART_COMPONENT_NAMES = [
  'LineChart',
  'BarChart',
  'AreaChart',
  'ScatterChart',
  'PieChart',
  'RadarChart',
  'RadialBarChart',
  'ComposedChart',
  'FunnelChart',
  'SunburstChart',
  'Treemap',
  'Sankey',
] as const;

/**
 * Cartesian series/axis/reference component names.
 */
export const CARTESIAN_COMPONENT_NAMES = [
  'Line',
  'Area',
  'Bar',
  'BarStack',
  'Scatter',
  'XAxis',
  'YAxis',
  'ZAxis',
  'ErrorBar',
  'Brush',
  'ReferenceLine',
  'ReferenceDot',
  'ReferenceArea',
  'CartesianAxis',
  'CartesianGrid',
  'Funnel',
] as const;

/**
 * Polar series/axis component names.
 */
export const POLAR_COMPONENT_NAMES = [
  'Pie',
  'Radar',
  'RadialBar',
  'PolarGrid',
  'PolarAngleAxis',
  'PolarRadiusAxis',
] as const;

/**
 * All major visual component names used for tree-shaking checks.
 */
export const ALL_TRACKED_COMPONENT_NAMES: string[] = [
  ...CHART_COMPONENT_NAMES,
  ...CARTESIAN_COMPONENT_NAMES,
  ...POLAR_COMPONENT_NAMES,
];
