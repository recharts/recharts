import React from 'react';
import { describe, expect, it } from 'vitest';

import { ErrorBar, Line, LineChart, RechartsThemeProvider } from '../../src';
import { assertNotNull } from '../helper/assertNotNull';
import { rechartsTestRender } from '../helper/createSelectorTestCase';

const data = [
  { name: 'A', value: 10, error: 2 },
  { name: 'B', value: 20, error: 3 },
];

function renderChart(errorBarProps?: React.ComponentProps<typeof ErrorBar>) {
  return rechartsTestRender(
    <LineChart width={400} height={300} data={data}>
      <Line dataKey="value" isAnimationActive={false}>
        <ErrorBar dataKey="error" isAnimationActive={false} {...errorBarProps} />
      </Line>
    </LineChart>,
  );
}

function getErrorBar(container: HTMLElement): Element {
  const errorBar = container.querySelector('.recharts-errorBar');
  assertNotNull(errorBar);
  return errorBar;
}

describe('ErrorBar theme', () => {
  it('preserves the legacy styling without a theme provider', () => {
    const { container } = renderChart();
    const errorBar = getErrorBar(container);

    expect(errorBar).toHaveAttribute('stroke', 'black');
    expect(errorBar).toHaveAttribute('stroke-width', '1.5');
  });

  it('does not reintroduce legacy styling when the provider has no ErrorBar theme', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider value={{ graphicalItems: [] }}>
        <LineChart width={400} height={300} data={data}>
          <Line dataKey="value" isAnimationActive={false}>
            <ErrorBar dataKey="error" isAnimationActive={false} />
          </Line>
        </LineChart>
      </RechartsThemeProvider>,
    );
    const errorBar = getErrorBar(container);

    expect(errorBar).not.toHaveAttribute('stroke');
    expect(errorBar).not.toHaveAttribute('stroke-width');
  });

  it('uses custom theme values and keeps explicit props ahead of the theme', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider
        value={{
          graphicalItems: [],
          errorBar: {
            stroke: 'red',
            strokeWidth: 4,
            strokeOpacity: 0.5,
            strokeDasharray: '2 3',
          },
        }}
      >
        <LineChart width={400} height={300} data={data}>
          <Line dataKey="value" isAnimationActive={false}>
            <ErrorBar dataKey="error" isAnimationActive={false} stroke="blue" strokeWidth={2} />
          </Line>
        </LineChart>
      </RechartsThemeProvider>,
    );
    const errorBar = getErrorBar(container);

    expect(errorBar).toHaveAttribute('stroke', 'blue');
    expect(errorBar).toHaveAttribute('stroke-width', '2');
    expect(errorBar).toHaveAttribute('stroke-opacity', '0.5');
    expect(errorBar).toHaveAttribute('stroke-dasharray', '2 3');
  });
});
