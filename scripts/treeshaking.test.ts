import { describe, it, expect } from 'vitest';
import { existsSync } from 'node:fs';
import path from 'node:path';
import {
  treeshake,
  getBundleSize,
  getBundleSizeReport,
  getModuleGraph,
  findComponentsInBundle,
  CHART_COMPONENT_NAMES,
  CARTESIAN_COMPONENT_NAMES,
  POLAR_COMPONENT_NAMES,
  formatBundleSize,
  getReductionPercent,
  matchComponentNamesInBundle,
  type ModuleGraphNode,
} from './treeshaking';
import { treeshakingGroups } from './treeshaking-groups';
import { findMatchingModules, findShortestPaths } from './trace-bundle.ts';
import { ProjectDocReader } from '../omnidoc/readProject';

const es6EntryPath = path.resolve(__dirname, '..', 'es6', 'index.js');
const es6EntryExists = existsSync(es6EntryPath);

describe.skipIf(!es6EntryExists)('tree-shaking groups', () => {
  const projectReader = new ProjectDocReader();
  const allExportedSymbols = projectReader.getAllRuntimeExportedNames();
  for (const componentName of allExportedSymbols) {
    // If we don't have an explicit known issue for this component, we expect it to be the only tracked component in its bundle.
    const knownExpectedBundle = new Set(treeshakingGroups[componentName] ?? [componentName]);
    // In case the component itself is missing from the known expected bundle, add it.
    knownExpectedBundle.add(componentName);

    const testFn = async () => {
      const bundledCodeOutput = await treeshake(componentName);
      const allBundledComponents = findComponentsInBundle(bundledCodeOutput, allExportedSymbols);
      expect(
        allBundledComponents,
        `Importing ${componentName} bundled different components than it should have. Diff: [${Array.from(allBundledComponents.symmetricDifference(knownExpectedBundle)).join(', ')}]`,
      ).toEqual(knownExpectedBundle);
    };

    it(`${componentName}`, testFn, 30_000);
  }
});

describe.skipIf(!es6EntryExists)('tree-shaking: bundle sizes', () => {
  it('cartesian components bundle size', async () => {
    const output = await treeshake([...CARTESIAN_COMPONENT_NAMES]);
    const size = getBundleSize(output);
    expect(size).toBeGreaterThan(0);

    console.log(`Cartesian components bundle size: ${size} bytes`);
  }, 60_000);

  it('polar components bundle size', async () => {
    const output = await treeshake([...POLAR_COMPONENT_NAMES]);
    const size = getBundleSize(output);
    expect(size).toBeGreaterThan(0);

    console.log(`Polar components bundle size: ${size} bytes`);
  }, 60_000);

  it('Treemap bundle size', async () => {
    const output = await treeshake('Treemap');
    const size = getBundleSize(output);
    expect(size).toBeGreaterThan(0);

    console.log(`Treemap bundle size: ${size} bytes`);
  }, 60_000);

  it('SunburstChart bundle size', async () => {
    const output = await treeshake('SunburstChart');
    const size = getBundleSize(output);
    expect(size).toBeGreaterThan(0);

    console.log(`SunburstChart bundle size: ${size} bytes`);
  }, 60_000);

  it('Sankey bundle size', async () => {
    const output = await treeshake('Sankey');
    const size = getBundleSize(output);
    expect(size).toBeGreaterThan(0);

    console.log(`Sankey bundle size: ${size} bytes`);
  }, 60_000);

  it('chart components bundle size', async () => {
    const output = await treeshake([...CHART_COMPONENT_NAMES]);
    const size = getBundleSize(output);
    expect(size).toBeGreaterThan(0);

    console.log(`Chart components bundle size: ${size} bytes`);
  }, 60_000);

  it('returns bundle size report with es6 baseline, tree-shaken, minified and gzip stages', async () => {
    const report = await getBundleSizeReport('Area');
    expect(report.components).toEqual(['Area']);
    expect(report.stages).toHaveLength(4);

    const [es6Folder, treeShaken, minified, minifiedGzip] = report.stages;
    expect(es6Folder.stage).toBe('es6-folder');
    expect(treeShaken.stage).toBe('tree-shaken');
    expect(minified.stage).toBe('minified');
    expect(minifiedGzip.stage).toBe('minified+gzip');
    expect(es6Folder.bytes).toBeGreaterThan(0);
    expect(treeShaken.bytes).toBeGreaterThan(0);
    expect(minified.bytes).toBeGreaterThan(0);
    expect(minifiedGzip.bytes).toBeGreaterThan(0);
    expect(treeShaken.bytes).toBeLessThanOrEqual(es6Folder.bytes);
    expect(minified.bytes).toBeLessThanOrEqual(es6Folder.bytes);
    expect(minifiedGzip.bytes).toBeLessThanOrEqual(minified.bytes);
    expect(treeShaken.reductionFromBaselinePercent).toBeGreaterThan(0);
    expect(minified.reductionFromBaselinePercent).toBeGreaterThan(0);
    expect(minifiedGzip.reductionFromBaselinePercent).toBeGreaterThan(minified.reductionFromBaselinePercent);
  }, 60_000);
});

describe('bundle size formatting', () => {
  it('formats bytes into human readable units', () => {
    expect(formatBundleSize(512)).toBe('512 B');
    expect(formatBundleSize(1024)).toBe('1.00 KB');
    expect(formatBundleSize(1024 * 1024)).toBe('1.00 MB');
  });

  it('calculates reduction percentage', () => {
    expect(getReductionPercent(1000, 650)).toBe(35);
    expect(getReductionPercent(0, 100)).toBe(0);
  });
});

describe('matchComponentNamesInBundle', () => {
  it('should return matched component names in the bundle', () => {
    const code = `
    var Foo = 12345;
    const Bar = () => {};
    class Baz {};
    function Zoo() {}
    var NotLookingForMe = true;
    var foo = 'case sensitive'
    var FooPrefix = 'should not match Foo'
    `;
    const foundComponents = matchComponentNamesInBundle(code, ['LineChart', 'Foo', 'Bar', 'Baz', 'Zoo', 'NotInCode']);
    expect(foundComponents).toEqual(new Set(['Foo', 'Bar', 'Baz', 'Zoo']));
  });
});

describe('trace-bundle helpers', () => {
  it('prefers exact component module matches over broader path matches', () => {
    const graph: ReadonlyArray<ModuleGraphNode> = [
      { id: '/repo/src/index.ts', importedIds: [], importers: [], renderedLength: 0 },
      { id: '/repo/src/cartesian/Area.tsx', importedIds: [], importers: [], renderedLength: 10 },
      { id: '/repo/src/cartesian/ReferenceArea.tsx', importedIds: [], importers: [], renderedLength: 10 },
    ];

    expect(findMatchingModules(graph, 'Area').map(node => node.id)).toEqual(['/repo/src/cartesian/Area.tsx']);
  });

  it('returns only shortest import paths', () => {
    const graph: ReadonlyArray<ModuleGraphNode> = [
      { id: 'Area', importedIds: ['ActiveShapeUtils', 'LongHop'], importers: [], renderedLength: 1 },
      { id: 'ActiveShapeUtils', importedIds: ['Rectangle'], importers: ['Area'], renderedLength: 1 },
      { id: 'LongHop', importedIds: ['AnotherHop'], importers: ['Area'], renderedLength: 1 },
      { id: 'AnotherHop', importedIds: ['Rectangle'], importers: ['LongHop'], renderedLength: 1 },
      { id: 'Rectangle', importedIds: [], importers: ['ActiveShapeUtils', 'AnotherHop'], renderedLength: 1 },
    ];

    const nodeById = new Map(graph.map(node => [node.id, node]));

    expect(findShortestPaths('Area', 'Rectangle', nodeById, 8)).toEqual([['Area', 'ActiveShapeUtils', 'Rectangle']]);
  });
});

describe.skipIf(!es6EntryExists)('trace-bundle integration', () => {
  it('finds the path from the requested component module instead of the package entry', async () => {
    const graph = await getModuleGraph('Area');
    const area = findMatchingModules(graph, 'Area');
    const dot = findMatchingModules(graph, 'Dot');
    const nodeById = new Map(graph.map(node => [node.id, node]));

    expect(area).toHaveLength(1);
    expect(dot).toHaveLength(1);
    expect(findShortestPaths(area[0].id, dot[0].id, nodeById, 8)).toEqual([
      [
        path.resolve(__dirname, '..', 'src', 'cartesian', 'Area.tsx'),
        path.resolve(__dirname, '..', 'src', 'component', 'Dots.tsx'),
        path.resolve(__dirname, '..', 'src', 'shape', 'Dot.tsx'),
      ],
      [
        path.resolve(__dirname, '..', 'src', 'cartesian', 'Area.tsx'),
        path.resolve(__dirname, '..', 'src', 'component', 'ActivePoints.tsx'),
        path.resolve(__dirname, '..', 'src', 'shape', 'Dot.tsx'),
      ],
    ]);
  }, 30_000);
});
