import React from 'react';
import { assert, describe, expect, it } from 'vitest';
import { RadialBarChart, RadialBar, PolarAngleAxis } from '../../../src';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';
import { selectRadialBarSectors } from '../../../src/state/selectors/radialBarSelectors';
import { RadialBarSettings } from '../../../src/state/types/RadialBarSettings';
import { assertStableBetweenRenders } from '../../helper/selectorTestHelpers';

describe('selectRadialBarSectors', () => {
  const radialBarSettings: RadialBarSettings = {
    id: 'radial-bar-uv',
    dataKey: 'pv',
    minAngle: 0,
    minPointSize: 0,
    stackId: undefined,
    maxBarSize: undefined,
    barSize: undefined,
    type: 'radialBar',
    angleAxisId: 0,
    radiusAxisId: 0,
    data: undefined,
    hide: false,
  };

  const data = [
    { name: 'A', pv: 100 },
    { name: 'B', pv: 200 },
  ];

  const renderTestCase = createSelectorTestCase(({ children }) => (
    <RadialBarChart width={500} height={500} data={data}>
      <RadialBar dataKey="pv" isAnimationActive={false} />
      {children}
    </RadialBarChart>
  ));

  it('should return the same instance on re-render if inputs are stable', () => {
    assertStableBetweenRenders(renderTestCase, state =>
      selectRadialBarSectors(state, 0, 0, radialBarSettings, undefined),
    );
  });
});

describe('minAngle prop', () => {
  /**
   * Data where one bar has a very small value that would normally produce a tiny angle.
   * The angle axis domain will be [0, 1000], so a value of 1 would map to ~0.36 degrees.
   * minAngle: 10 should extend that bar's endAngle to cover at least 10 degrees.
   */
  const data = [
    { name: 'tiny', pv: 1 },
    { name: 'large', pv: 1000 },
  ];

  const settingsWithMinAngle: RadialBarSettings = {
    id: 'radial-bar-pv',
    dataKey: 'pv',
    minAngle: 10,
    minPointSize: 0,
    stackId: undefined,
    maxBarSize: undefined,
    barSize: undefined,
    type: 'radialBar',
    angleAxisId: 0,
    radiusAxisId: 0,
    data: undefined,
    hide: false,
  };

  const settingsNoMinAngle: RadialBarSettings = {
    ...settingsWithMinAngle,
    minAngle: 0,
  };

  const renderWithMinAngle = createSelectorTestCase(({ children }) => (
    <RadialBarChart width={500} height={500} data={data}>
      <PolarAngleAxis type="number" domain={[0, 1000]} />
      <RadialBar dataKey="pv" minAngle={10} isAnimationActive={false} />
      {children}
    </RadialBarChart>
  ));

  const renderNoMinAngle = createSelectorTestCase(({ children }) => (
    <RadialBarChart width={500} height={500} data={data}>
      <PolarAngleAxis type="number" domain={[0, 1000]} />
      <RadialBar dataKey="pv" isAnimationActive={false} />
      {children}
    </RadialBarChart>
  ));

  it('should apply minAngle to bars with small values in radial layout', () => {
    const { spy } = renderWithMinAngle(state => selectRadialBarSectors(state, 0, 0, settingsWithMinAngle, undefined));
    const sectors = spy.mock.lastCall?.[0];
    expect(sectors).toBeDefined();
    assert(sectors != null);
    expect(sectors).toHaveLength(2);

    // The tiny bar (value=1) should have its angle extended to at least minAngle=10 degrees
    const tinySector = sectors[0];
    const tinyDeltaAngle = Math.abs(tinySector.endAngle - tinySector.startAngle);
    expect(tinyDeltaAngle).toBeGreaterThanOrEqual(10);
  });

  it('should not affect bars that already exceed minAngle', () => {
    const { spy: spyWithMin } = renderWithMinAngle(state =>
      selectRadialBarSectors(state, 0, 0, settingsWithMinAngle, undefined),
    );
    const { spy: spyNoMin } = renderNoMinAngle(state =>
      selectRadialBarSectors(state, 0, 0, settingsNoMinAngle, undefined),
    );

    const sectorsWithMin = spyWithMin.mock.lastCall?.[0];
    const sectorsNoMin = spyNoMin.mock.lastCall?.[0];

    expect(sectorsWithMin).toBeDefined();
    expect(sectorsNoMin).toBeDefined();
    assert(sectorsWithMin != null);
    assert(sectorsNoMin != null);

    // The large bar should have the same endAngle regardless of minAngle
    expect(sectorsWithMin[1].endAngle).toBeCloseTo(sectorsNoMin[1].endAngle, 5);

    // The tiny bar should have a larger angle when minAngle is set
    const tinyDeltaWithMin = Math.abs(sectorsWithMin[0].endAngle - sectorsWithMin[0].startAngle);
    const tinyDeltaNoMin = Math.abs(sectorsNoMin[0].endAngle - sectorsNoMin[0].startAngle);
    expect(tinyDeltaWithMin).toBeGreaterThan(tinyDeltaNoMin);
  });
});
