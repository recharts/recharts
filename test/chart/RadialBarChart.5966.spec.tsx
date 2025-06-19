import React from 'react';
import { describe, it, expect } from 'vitest';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';
import { PolarAngleAxis, RadialBar, RadialBarChart } from '../../src';
import { PageData } from '../_data';
import { selectRadiusAxisTicks } from '../../src/state/selectors/radialBarSelectors';

describe('RadialBarChart reproducing bug #5966', () => {
  const renderTestCase = createSelectorTestCase(({ children }) => (
    <RadialBarChart
      width={500}
      height={500}
      data={PageData}
      startAngle={235}
      endAngle={-55}
      // The innerRadius is the same as outerRadius, the chart has nowhere to render. This should be an empty chart!
      innerRadius="80%"
      barSize={20}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
    >
      <PolarAngleAxis domain={[0, 100]} tick={false} />
      <RadialBar
        dataKey="uv"
        cornerRadius={20}
        fill="red"
        background={{ fill: 'lightgray' }}
        animationDuration={20}
        minPointSize={50}
      />
      {children}
    </RadialBarChart>
  ));

  it('should not render RadialBar', () => {
    const { container } = renderTestCase();
    expect(container.querySelector('.recharts-radial-bar')).not.toBeInTheDocument();
  });

  it('should not select any radius axis ticks', () => {
    const { spy } = renderTestCase(state => selectRadiusAxisTicks(state, 0, 0, false));
    expect(spy).toHaveBeenLastCalledWith(undefined);
  });
});
