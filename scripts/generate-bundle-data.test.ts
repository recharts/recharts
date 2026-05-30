import path from 'node:path';
import { existsSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import {
  buildBundleVisualizationTree,
  DEFAULT_BUNDLE_VISUALIZATION_TARGETS,
  generateBundleVisualizationData,
  parseBundleVisualizationTargets,
} from './generate-bundle-data.ts';
import { treeshake } from './treeshaking.ts';

const es6EntryPath = path.resolve(__dirname, '..', 'es6', 'index.js');
const es6EntryExists = existsSync(es6EntryPath);

describe('parseBundleVisualizationTargets', () => {
  it('uses the homepage index chart defaults when no overrides are provided', () => {
    expect(parseBundleVisualizationTargets([])).toEqual(DEFAULT_BUNDLE_VISUALIZATION_TARGETS);
  });

  it('applies the same override to both visualizations with --example', () => {
    expect(
      parseBundleVisualizationTargets(['--example', 'www/src/docs/exampleComponents/AreaChart/TinyAreaChart.tsx']),
    ).toEqual({
      treemap: 'www/src/docs/exampleComponents/AreaChart/TinyAreaChart.tsx',
      sunburst: 'www/src/docs/exampleComponents/AreaChart/TinyAreaChart.tsx',
    });
  });

  it('supports independent overrides for treemap and sunburst', () => {
    expect(
      parseBundleVisualizationTargets([
        '--treemap-example',
        'www/src/docs/exampleComponents/TreeMap/NestedTreemap.tsx',
        '--sunburst-example',
        'www/src/docs/exampleComponents/PieChart/PieChartWithCustomizedLabel.tsx',
      ]),
    ).toEqual({
      treemap: 'www/src/docs/exampleComponents/TreeMap/NestedTreemap.tsx',
      sunburst: 'www/src/docs/exampleComponents/PieChart/PieChartWithCustomizedLabel.tsx',
    });
  });
});

describe('buildBundleVisualizationTree', () => {
  it('groups source, dependencies, and local entry modules into a sorted hierarchy', () => {
    const repoRoot = path.resolve(__dirname, '..');
    const { tree, moduleCount } = buildBundleVisualizationTree([
      { id: path.join(repoRoot, 'src', 'chart', 'Treemap.tsx'), renderedLength: 600 },
      { id: path.join(repoRoot, 'src', 'chart', 'SunburstChart.tsx'), renderedLength: 400 },
      { id: path.join(repoRoot, 'src', 'util', 'ChartUtils.ts'), renderedLength: 300 },
      {
        id: path.join(repoRoot, 'www', 'src', 'docs', 'exampleComponents', 'TreeMap', 'BundleSizeTreemap.tsx'),
        renderedLength: 1000,
      },
      { id: path.join(repoRoot, 'node_modules', 'react', 'index.js'), renderedLength: 2000 },
      { id: '\u0000commonjsHelpers.js', renderedLength: 5000 },
    ]);

    expect(moduleCount).toBe(5);
    expect(tree.value).toBe(4300);
    expect(tree.children?.map(child => child.name)).toEqual(['node_modules', 'src', 'entry']);
    expect(tree.children?.[0]?.children?.map(child => child.name)).toEqual(['react']);
    expect(tree.children?.[1]?.children?.map(child => child.name)).toEqual(['chart', 'util']);
  });
});

describe.skipIf(!es6EntryExists)('generateBundleVisualizationData', () => {
  it('includes bundled dependency modules when requested', async () => {
    const output = await treeshake('Treemap', { bundleDependencies: true });
    const bundledModuleIds = output.flatMap(chunkOrAsset =>
      chunkOrAsset.type === 'chunk' ? Object.keys(chunkOrAsset.modules) : [],
    );

    expect(bundledModuleIds.some(moduleId => moduleId.includes(`${path.sep}node_modules${path.sep}`))).toBe(true);
  }, 120_000);

  it('builds bundle visualization data for the default website examples', async () => {
    const data = await generateBundleVisualizationData(DEFAULT_BUNDLE_VISUALIZATION_TARGETS);

    expect(data.treemap.examplePath).toBe(DEFAULT_BUNDLE_VISUALIZATION_TARGETS.treemap);
    expect(data.sunburst.examplePath).toBe(DEFAULT_BUNDLE_VISUALIZATION_TARGETS.sunburst);
    expect(data.treemap.moduleCount).toBeGreaterThan(0);
    expect(data.sunburst.moduleCount).toBeGreaterThan(0);
    expect(data.treemap.totalSize).toBeGreaterThan(0);
    expect(data.sunburst.totalSize).toBeGreaterThan(0);
    expect(data.treemap.stages).toHaveLength(4);
    expect(data.sunburst.stages).toHaveLength(4);
  }, 120_000);
});
