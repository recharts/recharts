import { describe, expect, it } from 'vitest';
import React from 'react';
import {
  Legend,
  RadialBar,
  RadialBarChart,
  RechartsFill,
  RechartsThemeProvider,
  lightTheme,
  pattern,
  patterns,
} from '../../../src';
import { rechartsTestRender as render } from '../../helper/createSelectorTestCase';

const data = [
  { name: 'a', uv: 1 },
  { name: 'b', uv: 2, fill: { color: 'blue', definition: pattern(patterns.dots) } },
  { name: 'c', uv: 3, fill: 'orange' },
];

function renderRadialBar(fill: string | RechartsFill | undefined) {
  return render(
    <RechartsThemeProvider value={{ ...lightTheme, graphicalItems: [{ fill: 'purple', stroke: 'indigo' }] }}>
      <RadialBarChart width={400} height={400} data={data}>
        <RadialBar dataKey="uv" id="my-radial-bar" fill={fill} isAnimationActive={false} />
        <Legend />
      </RadialBarChart>
    </RechartsThemeProvider>,
  );
}

function getSectorPaths(container: Element): NodeListOf<Element> {
  return container.querySelectorAll('path.recharts-radial-bar-sector');
}

describe('RadialBar with fill objects', () => {
  it('should paint sectors with the RadialBar fill object, except the ones with their own fill', () => {
    const { container } = renderRadialBar({ definition: pattern(patterns.diagonal) });

    const sectors = getSectorPaths(container);
    expect(sectors).toHaveLength(3);
    expect(sectors[0]).toHaveAttribute('fill', 'url(#my-radial-bar-fill)');
    expect(container.querySelector('pattern#my-radial-bar-fill rect')).toHaveAttribute('fill', 'purple');
    expect(sectors[1]).toHaveAttribute('fill', 'url(#my-radial-bar-fill-1)');
    expect(container.querySelector('pattern#my-radial-bar-fill-1 rect')).toHaveAttribute('fill', 'blue');
    expect(sectors[2]).toHaveAttribute('fill', 'orange');
  });

  it('should draw the fill of each sector in its legend icon', () => {
    const { container } = renderRadialBar({ definition: pattern(patterns.diagonal) });

    const legendItems = container.querySelectorAll('.recharts-legend-item');
    expect(legendItems).toHaveLength(3);
    expect(legendItems[0].querySelector('pattern rect')).toHaveAttribute('fill', 'purple');
    expect(legendItems[1].querySelector('pattern rect')).toHaveAttribute('fill', 'blue');
    expect(legendItems[2].querySelector('pattern')).not.toBeInTheDocument();
  });

  it('should keep working with a string fill', () => {
    const { container } = renderRadialBar('green');

    const sectors = getSectorPaths(container);
    expect(sectors[0]).toHaveAttribute('fill', 'green');
    expect(sectors[1]).toHaveAttribute('fill', 'url(#my-radial-bar-fill-1)');
  });
});
