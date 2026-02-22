import path from 'node:path';
import fs from 'node:fs';
import os from 'node:os';
import { rollup, type OutputChunk, type OutputAsset } from 'rollup';
import { ProjectDocReader } from '../omnidoc/readProject';

const packageRoot = path.resolve(__dirname, '..');
const es6Entry = path.join(packageRoot, 'es6', 'index.js');

function getExternals(): Array<string | RegExp> {
  const packageJson = JSON.parse(fs.readFileSync(path.join(packageRoot, 'package.json'), 'utf-8'));
  const deps: string[] = Object.keys(packageJson.dependencies ?? {});
  const peerDeps: string[] = Object.keys(packageJson.peerDependencies ?? {});
  const specialDeps = ['use-sync-external-store/shim/with-selector'];
  return [...deps, ...peerDeps, ...specialDeps, /^victory-vendor.*/, /^es-toolkit.*/];
}

const resolveDirectoryIndexPlugin = {
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
};

function createTmpEntry(components: string | string[]): { tmpFile: string; cleanup: () => void } {
  const componentList = Array.isArray(components) ? components : [components];
  const importList = componentList.join(', ');
  const source = `import { ${importList} } from '${es6Entry}';\nexport const used = { ${importList} };\n`;
  const tmpFile = path.join(
    os.tmpdir(),
    `recharts-treeshake-entry-${Date.now()}-${Math.random().toString(36).slice(2)}.mjs`,
  );
  fs.writeFileSync(tmpFile, source);
  return { tmpFile, cleanup: () => fs.unlinkSync(tmpFile) };
}

/**
 * Bundle one or more recharts components using rollup with aggressive tree-shaking.
 * Returns the rollup output chunks/assets.
 */
export async function treeshake(components: string | string[]): Promise<(OutputChunk | OutputAsset)[]> {
  const { tmpFile, cleanup } = createTmpEntry(components);
  try {
    const bundle = await rollup({
      input: tmpFile,
      external: getExternals(),
      treeshake: {
        moduleSideEffects: false,
      },
      logLevel: 'silent',
      plugins: [resolveDirectoryIndexPlugin],
    });
    const output = await bundle.generate({ format: 'esm' });
    await bundle.close();
    return output.output;
  } finally {
    cleanup();
  }
}

/**
 * Information about a single module in the bundle dependency graph.
 */
export type ModuleGraphNode = {
  /** Absolute file path of the module. */
  readonly id: string;
  /** IDs of modules this module imports. */
  readonly importedIds: ReadonlyArray<string>;
  /** IDs of modules that import this module. */
  readonly importers: ReadonlyArray<string>;
  /**
   * Bytes contributed to the output after tree-shaking.
   * 0 means the module was imported but fully tree-shaken away.
   */
  readonly renderedLength: number;
};

/**
 * Build a tree-shaken bundle for the given components and return the full module
 * dependency graph together with per-module rendered sizes.
 *
 * Useful for debugging why a component pulls in unexpected modules.
 */
export async function getModuleGraph(components: string | string[]): Promise<ModuleGraphNode[]> {
  const { tmpFile, cleanup } = createTmpEntry(components);

  // Capture module graph info from within a rollup plugin hook (the only place
  // PluginContext.getModuleIds / getModuleInfo are available).
  type RawNode = { importedIds: ReadonlyArray<string>; importers: ReadonlyArray<string> };
  const graphByModuleId = new Map<string, RawNode>();

  try {
    const bundle = await rollup({
      input: tmpFile,
      external: getExternals(),
      treeshake: {
        moduleSideEffects: false,
      },
      logLevel: 'silent',
      plugins: [
        resolveDirectoryIndexPlugin,
        {
          name: 'capture-module-graph',
          buildEnd() {
            for (const id of this.getModuleIds()) {
              const info = this.getModuleInfo(id);
              if (info != null) {
                graphByModuleId.set(id, {
                  importedIds: info.importedIds,
                  importers: info.importers,
                });
              }
            }
          },
        },
      ],
    });

    // Generate output to get per-module rendered sizes.
    const output = await bundle.generate({ format: 'esm' });
    await bundle.close();

    // Build rendered-length lookup from output chunks.
    const renderedLengths = new Map<string, number>();
    for (const chunkOrAsset of output.output) {
      if (chunkOrAsset.type === 'chunk') {
        for (const [id, mod] of Object.entries(chunkOrAsset.modules)) {
          renderedLengths.set(id, mod.renderedLength);
        }
      }
    }

    return Array.from(graphByModuleId.entries()).map(([id, { importedIds, importers }]) => ({
      id,
      importedIds,
      importers,
      renderedLength: renderedLengths.get(id) ?? 0,
    }));
  } finally {
    cleanup();
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

export function matchComponentNamesInBundle(sourceCode: string, componentNames: ReadonlyArray<string>): Set<string> {
  return new Set(
    componentNames.filter(name => {
      return (
        new RegExp(`var ${name} `).test(sourceCode) ||
        new RegExp(`const ${name} `).test(sourceCode) ||
        new RegExp(`function ${name}\\(`).test(sourceCode) ||
        new RegExp(`class ${name}\\s+{`).test(sourceCode)
      );
    }),
  );
}

/**
 * Check which component names from the given list appear as definitions in the bundle output.
 * A component is considered "present" when its function/class/variable definition is found in the code.
 */
export function findComponentsInBundle(
  output: (OutputChunk | OutputAsset)[],
  componentNames: ReadonlyArray<string>,
): Set<string> {
  const code = output
    .filter((c): c is OutputChunk => c.type === 'chunk')
    .map(c => c.code)
    .join('\n');

  return matchComponentNamesInBundle(code, componentNames);
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

// when called as the first argument of node, we read the array of component names from the command line
if (require.main === module) {
  const components = process.argv.slice(2);
  treeshake(components)
    .then(output => {
      const size = getBundleSize(output);
      const projectReader = new ProjectDocReader();
      const allExportedSymbols = projectReader.getAllRuntimeExportedNames();
      const foundComponents = findComponentsInBundle(output, allExportedSymbols);
      console.error(`Bundle size: ${size} bytes`);
      console.error(`Found components in bundle: ${[...foundComponents].join(', ')}`);

      const code = output
        .filter((c): c is OutputChunk => c.type === 'chunk')
        .map(c => c.code)
        .join('\n');
      console.log(code);
    })
    .catch(error => {
      console.error('Error during treeshaking:', error);
      process.exit(1);
    });
}
