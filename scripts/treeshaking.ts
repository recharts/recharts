import path from 'node:path';
import fs from 'node:fs';
import os from 'node:os';
import { gzipSync } from 'node:zlib';
import { rollup, type OutputChunk, type OutputAsset } from 'rollup';
import { minify } from 'terser';

const packageRoot = path.resolve(__dirname, '..');
const es6Directory = path.join(packageRoot, 'es6');
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

function getCombinedChunkCode(output: (OutputChunk | OutputAsset)[]): string {
  return output
    .filter((c): c is OutputChunk => c.type === 'chunk')
    .map(c => c.code)
    .join('\n');
}

function getDirectorySizeInBytes(directoryPath: string): number {
  return fs.readdirSync(directoryPath, { withFileTypes: true }).reduce((total, directoryEntry) => {
    const entryPath = path.join(directoryPath, directoryEntry.name);
    if (directoryEntry.isDirectory()) {
      return total + getDirectorySizeInBytes(entryPath);
    }
    if (directoryEntry.isFile()) {
      return total + fs.statSync(entryPath).size;
    }
    return total;
  }, 0);
}

export function formatBundleSize(sizeInBytes: number): string {
  if (sizeInBytes < 1024) {
    return `${sizeInBytes} B`;
  }

  const units = ['KB', 'MB', 'GB', 'TB'];
  let value = sizeInBytes;
  let unitIndex = -1;
  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex += 1;
  }

  return `${value.toFixed(2)} ${units[unitIndex]}`;
}

export function getReductionPercent(baselineSizeInBytes: number, reducedSizeInBytes: number): number {
  if (baselineSizeInBytes <= 0) {
    return 0;
  }

  return Number((((baselineSizeInBytes - reducedSizeInBytes) / baselineSizeInBytes) * 100).toFixed(2));
}

export type BundleSizeStage = {
  readonly stage: 'es6-folder' | 'tree-shaken' | 'minified' | 'minified+gzip';
  readonly bytes: number;
  readonly humanReadableSize: string;
  readonly reductionFromBaselinePercent: number;
};

export type BundleSizeReport = {
  readonly components: ReadonlyArray<string>;
  readonly stages: ReadonlyArray<BundleSizeStage>;
};

export async function getBundleSizeReport(components: string | string[]): Promise<BundleSizeReport> {
  const normalizedComponents = Array.isArray(components) ? components : [components];
  const es6FolderBytes = getDirectorySizeInBytes(es6Directory);
  const output = await treeshake(normalizedComponents);
  const treeShakenBytes = getBundleSize(output);
  const treeShakenCode = getCombinedChunkCode(output);

  const minifiedResult = await minify(treeShakenCode, {
    module: true,
    compress: true,
    mangle: true,
    format: { comments: false },
  });

  if (minifiedResult.code == null) {
    throw new Error('Failed to minify tree-shaken bundle.');
  }

  const minifiedBytes = Buffer.byteLength(minifiedResult.code, 'utf-8');
  const minifiedGzipBytes = gzipSync(minifiedResult.code).byteLength;

  return {
    components: normalizedComponents,
    stages: [
      {
        stage: 'es6-folder',
        bytes: es6FolderBytes,
        humanReadableSize: formatBundleSize(es6FolderBytes),
        reductionFromBaselinePercent: 0,
      },
      {
        stage: 'tree-shaken',
        bytes: treeShakenBytes,
        humanReadableSize: formatBundleSize(treeShakenBytes),
        reductionFromBaselinePercent: getReductionPercent(es6FolderBytes, treeShakenBytes),
      },
      {
        stage: 'minified',
        bytes: minifiedBytes,
        humanReadableSize: formatBundleSize(minifiedBytes),
        reductionFromBaselinePercent: getReductionPercent(es6FolderBytes, minifiedBytes),
      },
      {
        stage: 'minified+gzip',
        bytes: minifiedGzipBytes,
        humanReadableSize: formatBundleSize(minifiedGzipBytes),
        reductionFromBaselinePercent: getReductionPercent(es6FolderBytes, minifiedGzipBytes),
      },
    ],
  };
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
  return matchComponentNamesInBundle(getCombinedChunkCode(output), componentNames);
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
  getBundleSizeReport(components)
    .then(report => {
      console.table(report.stages);
    })
    .catch(error => {
      console.error('Error during treeshaking:', error);
      process.exit(1);
    });
}
