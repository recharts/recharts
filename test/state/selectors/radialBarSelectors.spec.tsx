import React from 'react';
import { describe, it } from 'vitest';
import { RadialBarChart, RadialBar } from '../../../src';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';
import { selectRadialBarSectors } from '../../../src/state/selectors/radialBarSelectors';
import { RadialBarSettings } from '../../../src/state/types/RadialBarSettings';
import { assertStableBetweenRenders } from '../../helper/selectorTestHelpers';

describe('selectRadialBarSectors', () => {
  const radialBarSettings: RadialBarSettings = {
    id: 'radial-bar-uv',
    dataKey: 'pv',
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
