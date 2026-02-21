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
import { knownTreeshakingIssues } from './treeshaking-known-issues';

const es6EntryPath = path.resolve(__dirname, '..', 'es6', 'index.js');
const es6EntryExists = existsSync(es6EntryPath);

const knownIssuesByComponent = Object.fromEntries(
  knownTreeshakingIssues.map(issue => [issue.component, issue.expectedInBundle]),
);

describe.skipIf(!es6EntryExists)('tree-shaking: each component should not pull in other components', () => {
  for (const componentName of ALL_TRACKED_COMPONENT_NAMES) {
    const knownExpectedBundle = knownIssuesByComponent[componentName];

    const testFn = async () => {
      const output = await treeshake(componentName);
      const otherComponents = ALL_TRACKED_COMPONENT_NAMES.filter(n => n !== componentName);
      const unexpectedComponents = findComponentsInBundle(output, otherComponents);
      expect(
        unexpectedComponents,
        `Importing ${componentName} unexpectedly bundled: ${unexpectedComponents.join(', ')}`,
      ).toEqual([]);
    };

    if (knownExpectedBundle != null) {
      // This component has a known tree-shaking issue documented in scripts/treeshaking-known-issues/.
      // Mark as expected failure so that:
      // - The test documents the problem
      // - CI remains green until the issue is fixed
      // - Fixing the issue (test unexpectedly passes) will turn this into a failing test,
      //   requiring the entry to be removed from treeshaking-known-issues/.
      it.fails(`${componentName} should not pull in other tracked components`, testFn, 30_000);
    } else {
      it(`${componentName} should not pull in other tracked components`, testFn, 30_000);
    }
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
});
