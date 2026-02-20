import { describe, it, expect } from 'vitest';
import { existsSync } from 'node:fs';
import path from 'node:path';
import {
  treeshake,
  getBundleSize,
  findComponentsInBundle,
  ALL_TRACKED_COMPONENT_NAMES,
  CHART_COMPONENT_NAMES,
  CARTESIAN_COMPONENT_NAMES,
  POLAR_COMPONENT_NAMES,
} from './treeshaking';

const es6EntryPath = path.resolve(__dirname, '..', 'es6', 'index.js');
const es6EntryExists = existsSync(es6EntryPath);

describe.skipIf(!es6EntryExists)('tree-shaking: each component should not pull in other components', () => {
  for (const componentName of ALL_TRACKED_COMPONENT_NAMES) {
    it(`${componentName} should not pull in other tracked components`, async () => {
      const output = await treeshake(componentName);
      const otherComponents = ALL_TRACKED_COMPONENT_NAMES.filter(n => n !== componentName);
      const unexpectedComponents = findComponentsInBundle(output, otherComponents);
      expect(
        unexpectedComponents,
        `Importing ${componentName} unexpectedly bundled: ${unexpectedComponents.join(', ')}`,
      ).toEqual([]);
    }, 30_000);
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

  it('special components bundle size (Treemap, SunburstChart, Sankey)', async () => {
    const output = await treeshake(['Treemap', 'SunburstChart', 'Sankey']);
    const size = getBundleSize(output);
    expect(size).toBeGreaterThan(0);

    console.log(`Special components bundle size: ${size} bytes`);
  }, 60_000);

  it('chart components bundle size', async () => {
    const output = await treeshake([...CHART_COMPONENT_NAMES]);
    const size = getBundleSize(output);
    expect(size).toBeGreaterThan(0);

    console.log(`Chart components bundle size: ${size} bytes`);
  }, 60_000);
});
