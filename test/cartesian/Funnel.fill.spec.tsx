import { describe, expect, it } from 'vitest';
import React from 'react';
import {
  Funnel,
  FunnelChart,
  Legend,
  RechartsFill,
  RechartsTheme,
  RechartsThemeProvider,
  lightTheme,
  pattern,
  patterns,
} from '../../src';
import { rechartsTestRender as render } from '../helper/createSelectorTestCase';

const data = [
  { name: 'a', value: 300 },
  { name: 'b', value: 200, fill: { color: 'blue', definition: pattern(patterns.dots) } },
  { name: 'c', value: 100, fill: 'orange' },
];

const theme: RechartsTheme = {
  ...lightTheme,
  graphicalItems: [{ fill: 'purple' }, { fill: 'teal' }, { fill: 'olive' }],
};

function renderFunnel(fill: string | RechartsFill | undefined, value = theme) {
  return render(
    <RechartsThemeProvider value={value}>
      <FunnelChart width={400} height={400}>
        <Funnel data={data} dataKey="value" id="my-funnel" fill={fill} isAnimationActive={false} />
        <Legend />
      </FunnelChart>
    </RechartsThemeProvider>,
  );
}

function getTrapezoidPaths(container: Element): NodeListOf<Element> {
  return container.querySelectorAll('.recharts-funnel-trapezoid path');
}

describe('Funnel with fill objects', () => {
  it('should paint each trapezoid with its own fill: the data entry wins over the Funnel', () => {
    const { container } = renderFunnel({ definition: pattern(patterns.star) });

    const trapezoids = getTrapezoidPaths(container);
    expect(trapezoids).toHaveLength(3);
    expect(trapezoids[0]).toHaveAttribute('fill', 'url(#my-funnel-fill-0)');
    expect(container.querySelector('pattern#my-funnel-fill-0 rect')).toHaveAttribute('fill', 'purple');
    expect(trapezoids[1]).toHaveAttribute('fill', 'url(#my-funnel-fill-1)');
    expect(container.querySelector('pattern#my-funnel-fill-1 rect')).toHaveAttribute('fill', 'blue');
    expect(trapezoids[2]).toHaveAttribute('fill', 'orange');
  });

  it('should draw the fill of each trapezoid in its legend icon', () => {
    const { container } = renderFunnel({ definition: pattern(patterns.star) });

    const legendItems = container.querySelectorAll('.recharts-legend-item');
    expect(legendItems).toHaveLength(3);
    expect(legendItems[0].querySelector('pattern rect')).toHaveAttribute('fill', 'purple');
    expect(legendItems[1].querySelector('pattern rect')).toHaveAttribute('fill', 'blue');
    expect(legendItems[2].querySelector('pattern')).not.toBeInTheDocument();
  });

  it('should paint the trapezoids with the definitions from the theme', () => {
    const { container } = renderFunnel(undefined, {
      ...lightTheme,
      graphicalItems: [{ fill: { color: 'purple', definition: pattern(patterns.diagonal) } }],
    });

    expect(getTrapezoidPaths(container)[0]).toHaveAttribute('fill', 'url(#my-funnel-fill-0)');
    expect(container.querySelector('pattern#my-funnel-fill-0 rect')).toHaveAttribute('fill', 'purple');
  });

  it('should keep working with a string fill', () => {
    const { container } = renderFunnel('green');

    expect(getTrapezoidPaths(container)[0]).toHaveAttribute('fill', 'green');
    expect(getTrapezoidPaths(container)[1]).toHaveAttribute('fill', 'url(#my-funnel-fill-1)');
  });
});
