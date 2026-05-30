/**
 * Generates bundle-size visualization data consumed by the website examples.
 *
 * Prerequisites: build the library output first:
 *   npm run build
 *
 * Usage:
 *   npm run generate-bundle-data
 *   npm run generate-bundle-data -- --example www/src/docs/exampleComponents/AreaChart/AreaChartConnectNulls.tsx
 *   npm run generate-bundle-data -- --treemap-example www/src/docs/exampleComponents/TreeMap/NestedTreemap.tsx
 *   npm run generate-bundle-data -- --sunburst-example www/src/docs/exampleComponents/PieChart/PieChartWithCustomizedLabel.tsx
 *
 * Output: www/public/generated/bundleSizeData.generated.json
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import type { OutputChunk } from 'rollup';
import { formatBundleSize, getBundleSizeReportFromOutput, treeshake, type TreeshakeOptions } from './treeshaking';
import type {
  BundleVisualizationData,
  BundleVisualizationEntry,
  BundleVisualizationNode,
  BundleVisualizationStage,
} from '../www/src/docs/exampleComponents/_bundleSize/types.ts';

const currentFile = fileURLToPath(import.meta.url);
const packageRoot = path.resolve(path.dirname(currentFile), '..');
const es6Entry = path.join(packageRoot, 'es6', 'index.js');
const generatedOutputFile = path.join(packageRoot, 'www', 'public', 'generated', 'bundleSizeData.generated.json');

type BundleVisualizationKey = keyof BundleVisualizationData;

type BundleVisualizationTargets = Record<BundleVisualizationKey, string>;

type BundleVisualizationModule = {
  readonly id: string;
  readonly renderedLength: number;
};

type MutableBundleVisualizationNode = {
  name: string;
  fullPath: string;
  value: number;
  children?: MutableBundleVisualizationNode[];
};

const dependencyVisualizationTreeshakeOptions: TreeshakeOptions = {
  bundleDependencies: true,
};

export const DEFAULT_BUNDLE_VISUALIZATION_TARGETS: BundleVisualizationTargets = {
  treemap: 'www/src/views/IndexView/IndexLineChart.tsx',
  sunburst: 'www/src/views/IndexView/IndexLineChart.tsx',
};

const SUPPORTED_ARGUMENTS = new Set([
  '--example',
  '--treemap',
  '--treemap-example',
  '--sunburst',
  '--sunburst-example',
]);

function normalizePathForJson(filePath: string): string {
  return filePath.split(path.sep).join('/');
}

function stripModuleSuffixes(moduleId: string): string {
  return moduleId.replace(/[?#].*$/, '');
}

function toRepoRelativePath(filePath: string): string {
  const relativePath = path.relative(packageRoot, filePath);
  return normalizePathForJson(relativePath);
}

function resolveExamplePath(examplePath: string): string {
  return path.isAbsolute(examplePath) ? examplePath : path.resolve(packageRoot, examplePath);
}

function getRequiredArgumentValue(argumentsList: ReadonlyArray<string>, index: number): string {
  const value = argumentsList[index];
  if (value == null || SUPPORTED_ARGUMENTS.has(value)) {
    throw new Error(`Missing value for ${argumentsList[index - 1]}.`);
  }

  return value;
}

export function parseBundleVisualizationTargets(cliArguments: ReadonlyArray<string>): BundleVisualizationTargets {
  const targets: BundleVisualizationTargets = { ...DEFAULT_BUNDLE_VISUALIZATION_TARGETS };

  for (let index = 0; index < cliArguments.length; index += 1) {
    const argument = cliArguments[index];

    switch (argument) {
      case '--example': {
        const examplePath = getRequiredArgumentValue(cliArguments, index + 1);
        targets.treemap = examplePath;
        targets.sunburst = examplePath;
        index += 1;
        break;
      }
      case '--treemap':
      case '--treemap-example': {
        targets.treemap = getRequiredArgumentValue(cliArguments, index + 1);
        index += 1;
        break;
      }
      case '--sunburst':
      case '--sunburst-example': {
        targets.sunburst = getRequiredArgumentValue(cliArguments, index + 1);
        index += 1;
        break;
      }
      default:
        throw new Error(
          `Unknown argument "${argument}". Supported options: --example, --treemap-example, --sunburst-example.`,
        );
    }
  }

  return targets;
}

function normalizeSourceModuleId(moduleId: string): string | null {
  if (moduleId.startsWith('\0')) {
    return null;
  }

  const sanitizedModuleId = stripModuleSuffixes(moduleId);
  const relativePath = path.relative(packageRoot, sanitizedModuleId);
  if (relativePath.startsWith('..') || path.isAbsolute(relativePath)) {
    return null;
  }

  const normalizedRelativePath = normalizePathForJson(relativePath);

  if (normalizedRelativePath.startsWith('src/')) {
    return normalizedRelativePath;
  }

  if (normalizedRelativePath.startsWith('node_modules/')) {
    return normalizedRelativePath;
  }

  if (normalizedRelativePath.startsWith('www/')) {
    return `entry/${normalizedRelativePath}`;
  }

  return `local/${normalizedRelativePath}`;
}

function sortTree(node: MutableBundleVisualizationNode): void {
  if (node.children == null) {
    return;
  }

  node.children.sort((left, right) => right.value - left.value || left.name.localeCompare(right.name));
  node.children.forEach(sortTree);
}

function insertModule(root: MutableBundleVisualizationNode, modulePath: string, size: number): void {
  const segments = modulePath.split('/');
  let current = root;

  for (let segmentIndex = 0; segmentIndex < segments.length; segmentIndex += 1) {
    const segment = segments[segmentIndex];
    const fullPath = segments.slice(0, segmentIndex + 1).join('/');
    const isLeaf = segmentIndex === segments.length - 1;

    if (current.children == null) {
      current.children = [];
    }

    let child = current.children.find(candidate => candidate.name === segment);
    if (child == null) {
      child = {
        name: segment,
        fullPath,
        value: 0,
        children: isLeaf ? undefined : [],
      };
      current.children.push(child);
    }

    child.value += size;
    current = child;
  }
}

export function buildBundleVisualizationTree(modules: ReadonlyArray<BundleVisualizationModule>): {
  tree: BundleVisualizationNode;
  moduleCount: number;
} {
  const sizeByModulePath = new Map<string, number>();

  modules.forEach(({ id, renderedLength }) => {
    if (renderedLength <= 0) {
      return;
    }

    const normalizedModuleId = normalizeSourceModuleId(id);
    if (normalizedModuleId == null) {
      return;
    }

    sizeByModulePath.set(normalizedModuleId, (sizeByModulePath.get(normalizedModuleId) ?? 0) + renderedLength);
  });

  const root: MutableBundleVisualizationNode = {
    name: 'bundle',
    fullPath: 'bundle',
    value: 0,
    children: [],
  };

  for (const [modulePath, size] of sizeByModulePath.entries()) {
    root.value += size;
    insertModule(root, modulePath, size);
  }

  sortTree(root);

  return {
    tree: root,
    moduleCount: sizeByModulePath.size,
  };
}

function getModulesFromOutput(output: ReadonlyArray<OutputChunk | { type: string }>): BundleVisualizationModule[] {
  const modules: BundleVisualizationModule[] = [];

  output.forEach(chunkOrAsset => {
    if (chunkOrAsset.type !== 'chunk') {
      return;
    }

    Object.entries(chunkOrAsset.modules).forEach(([id, moduleInfo]) => {
      if (id.includes('recharts-treeshake-entry-')) {
        return;
      }

      modules.push({ id, renderedLength: moduleInfo.renderedLength });
    });
  });

  return modules;
}

async function buildVisualizationEntry(examplePath: string): Promise<BundleVisualizationEntry> {
  const resolvedExamplePath = resolveExamplePath(examplePath);
  if (!fs.existsSync(resolvedExamplePath)) {
    throw new Error(`Example file not found: ${toRepoRelativePath(resolvedExamplePath)}`);
  }

  const output = await treeshake(resolvedExamplePath, dependencyVisualizationTreeshakeOptions);
  const { tree, moduleCount } = buildBundleVisualizationTree(getModulesFromOutput(output));
  if (moduleCount === 0) {
    throw new Error(`No bundled modules were found in ${toRepoRelativePath(resolvedExamplePath)}.`);
  }

  const report = await getBundleSizeReportFromOutput(
    resolvedExamplePath,
    output,
    dependencyVisualizationTreeshakeOptions,
  );

  return {
    examplePath: toRepoRelativePath(resolvedExamplePath),
    totalSize: tree.value,
    totalSizeLabel: formatBundleSize(tree.value),
    moduleCount,
    generatedAt: new Date().toISOString(),
    stages: report.stages as ReadonlyArray<BundleVisualizationStage>,
    tree,
  };
}

export async function generateBundleVisualizationData(
  targets: BundleVisualizationTargets,
): Promise<BundleVisualizationData> {
  const [treemap, sunburst] = await Promise.all([
    buildVisualizationEntry(targets.treemap),
    buildVisualizationEntry(targets.sunburst),
  ]);

  return { treemap, sunburst };
}

async function main(): Promise<void> {
  if (!fs.existsSync(es6Entry)) {
    console.error('Error: es6/index.js not found. Build the library output first:\n  npm run build');
    process.exit(1);
  }

  const targets = parseBundleVisualizationTargets(process.argv.slice(2));
  const data = await generateBundleVisualizationData(targets);

  fs.mkdirSync(path.dirname(generatedOutputFile), { recursive: true });
  fs.writeFileSync(generatedOutputFile, JSON.stringify(data, null, 2), 'utf-8');

  console.log('Generated bundle-size visualization data:');
  console.log(`  treemap  -> ${data.treemap.examplePath} (${data.treemap.totalSizeLabel})`);
  console.log(`  sunburst -> ${data.sunburst.examplePath} (${data.sunburst.totalSizeLabel})`);
  console.log(`Written to ${toRepoRelativePath(generatedOutputFile)}`);
}

if (process.argv[1] != null && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch(error => {
    console.error('Error:', (error as Error).message ?? error);
    process.exit(1);
  });
}
