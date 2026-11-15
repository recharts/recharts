import { describe, expect, it } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import {
  Area,
  AreaChart,
  Legend,
  RechartsFill,
  RechartsThemeProvider,
  Tooltip,
  lightTheme,
  pattern,
  patterns,
} from '../../../src';
import { assertNotNull } from '../../helper/assertNotNull';

const data = [{ uv: 1 }, { uv: 3 }, { uv: 2 }];

function renderArea(fill: string | RechartsFill | undefined, themed = true) {
  const chart = (
    <AreaChart width={400} height={400} data={data}>
      <Area dataKey="uv" id="my-area" fill={fill} legendType="rect" isAnimationActive={false} />
      <Legend />
      <Tooltip defaultIndex={1} />
    </AreaChart>
  );
  if (!themed) {
    return render(chart);
  }
  return render(
    <RechartsThemeProvider value={{ ...lightTheme, graphicalItems: [{ fill: 'purple', stroke: 'indigo' }] }}>
      {chart}
    </RechartsThemeProvider>,
  );
}

function getAreaShape(container: Element): Element {
  const area = container.querySelector('.recharts-area-area');
  assertNotNull(area);
  return area;
}

describe('Area with a fill object', () => {
  it('should paint the area with the definition, in the theme color', () => {
    const { container } = renderArea({ definition: pattern(patterns.diagonal) });

    expect(getAreaShape(container)).toHaveAttribute('fill', 'url(#my-area-fill)');
    const patternElement = container.querySelector('pattern#my-area-fill');
    assertNotNull(patternElement);
    expect(patternElement.querySelector('rect')).toHaveAttribute('fill', 'purple');
  });

  it('should use the explicit color as the base color, in the definition and in the Tooltip', () => {
    const { container } = renderArea({ color: 'blue', definition: pattern(patterns.dots) });

    expect(container.querySelector('pattern#my-area-fill rect')).toHaveAttribute('fill', 'blue');
    const tooltipItem = container.querySelector<HTMLElement>('.recharts-tooltip-item');
    assertNotNull(tooltipItem);
    // with an explicit color, the area keeps no theme stroke, so the Tooltip shows the fill color
    expect(tooltipItem).toHaveStyle({ color: 'rgb(0, 0, 255)' });
  });

  it('should draw the definition in the legend icon', () => {
    const { container } = renderArea({ color: 'blue', definition: pattern(patterns.dots) });

    const legendPattern = container.querySelector('.recharts-legend-item pattern');
    assertNotNull(legendPattern);
    expect(container.querySelector('.recharts-legend-icon')).toHaveAttribute('fill', `url(#${legendPattern.id})`);
  });

  it('should paint with the definition from the theme', () => {
    const { container } = render(
      <RechartsThemeProvider
        value={{ ...lightTheme, graphicalItems: [{ fill: { color: 'teal', definition: pattern(patterns.star) } }] }}
      >
        <AreaChart width={400} height={400} data={data}>
          <Area dataKey="uv" id="my-area" isAnimationActive={false} />
        </AreaChart>
      </RechartsThemeProvider>,
    );

    expect(getAreaShape(container)).toHaveAttribute('fill', 'url(#my-area-fill)');
    expect(container.querySelector('pattern#my-area-fill rect')).toHaveAttribute('fill', 'teal');
  });

  it('should keep working with a string fill', () => {
    const { container } = renderArea('blue', false);

    expect(getAreaShape(container)).toHaveAttribute('fill', 'blue');
    expect(container.querySelector('#my-area-fill')).not.toBeInTheDocument();
  });
});
