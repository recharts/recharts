import { describe, expect, it, vi } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import {
  Bar,
  BarChart,
  BarShapeProps,
  DefaultLegendContent,
  Legend,
  RechartsFill,
  RechartsFillDefinitionProps,
  RechartsThemeProvider,
  Tooltip,
  gradients,
  linearGradient,
  pattern,
  patterns,
  usePlotArea,
} from '../../../src';
import { getAllBarPaths } from '../../helper/expectBars';
import { assertNotNull } from '../../helper/assertNotNull';

const data = [
  { name: 'a', uv: 1 },
  { name: 'b', uv: 2 },
];

function renderBar(fill: RechartsFill | string, { withTheme = true }: { withTheme?: boolean } = {}) {
  const chart = (
    <BarChart width={400} height={400} data={data}>
      <Bar dataKey="uv" id="my-bar" fill={fill} isAnimationActive={false} />
      <Legend />
      <Tooltip defaultIndex={0} />
    </BarChart>
  );
  if (!withTheme) {
    return render(chart);
  }
  return render(
    <RechartsThemeProvider
      value={{ graphicalItems: [{ fill: 'purple', stroke: 'indigo' }], pageBackground: 'rgb(1, 2, 3)' }}
    >
      {chart}
    </RechartsThemeProvider>,
  );
}

function RedToBase({ id, color }: RechartsFillDefinitionProps) {
  return (
    <radialGradient id={id}>
      <stop offset={0} stopColor="red" />
      <stop offset={1} stopColor={color} />
    </radialGradient>
  );
}

function PlotAreaGradient({ id, color }: RechartsFillDefinitionProps) {
  const plotArea = usePlotArea();
  return <linearGradient id={id} data-color={color} data-plot-height={plotArea?.height} />;
}

function getTooltipItem(container: Element): HTMLElement {
  const tooltipItem = container.querySelector<HTMLElement>('.recharts-tooltip-item');
  assertNotNull(tooltipItem);
  return tooltipItem;
}

describe('Bar with a fill object', () => {
  it('should paint the bars with the pattern, and keep the theme colors when the fill object has no color', () => {
    const { container } = renderBar({ definition: pattern(patterns.diagonal) });

    const bars = getAllBarPaths(container);
    expect(bars).toHaveLength(2);
    bars.forEach(bar => {
      expect(bar).toHaveAttribute('fill', 'url(#my-bar-fill)');
      expect(bar).toHaveAttribute('stroke', 'indigo');
    });

    const patternElement = container.querySelector('pattern#my-bar-fill');
    assertNotNull(patternElement);
    expect(patternElement).toHaveAttribute('patternUnits', 'userSpaceOnUse');
    expect(patternElement).toHaveAttribute('patternTransform', 'rotate(45)');
    expect(patternElement.querySelector('rect')).toHaveAttribute('fill', 'purple');
    // the texture defaults to the page background
    expect(patternElement.querySelector('path')).toHaveAttribute('stroke', 'rgb(1, 2, 3)');
  });

  it('should use the explicit color as the base color and drop the theme stroke', () => {
    const { container } = renderBar({ color: 'blue', definition: pattern(patterns.dots) });

    const bar = getAllBarPaths(container)[0];
    expect(bar).toHaveAttribute('fill', 'url(#my-bar-fill)');
    expect(bar).not.toHaveAttribute('stroke', 'indigo');
    expect(container.querySelector('pattern#my-bar-fill rect')).toHaveAttribute('fill', 'blue');
  });

  it('should show the base color, not the url, in Legend and Tooltip', () => {
    const { container } = renderBar({ color: 'blue', definition: pattern(patterns.dots) });

    expect(getTooltipItem(container)).toHaveStyle({ color: 'rgb(0, 0, 255)' });
    const legendText = container.querySelector<HTMLElement>('.recharts-legend-item-text');
    assertNotNull(legendText);
    expect(legendText).toHaveStyle({ color: 'rgb(0, 0, 255)' });
  });

  it('should draw the pattern in the legend icon with its own definition', () => {
    const { container } = renderBar({ color: 'blue', definition: pattern(patterns.dots) });

    const icon = container.querySelector('.recharts-legend-item path.recharts-legend-icon');
    assertNotNull(icon);
    const fill = icon.getAttribute('fill');
    expect(fill).toMatch(/^url\(#recharts-legend-fill-.+\)$/);
    expect(fill).not.toBe('url(#my-bar-fill)');
    const legendPattern = container.querySelector('.recharts-legend-item pattern');
    assertNotNull(legendPattern);
    // 3 tiles across the 32 units wide icon, so the tile is scaled from 8 to 32 / 3
    expect(legendPattern).toHaveAttribute('patternTransform', `scale(${32 / 3 / 8})`);
  });

  it('should paint the bars with a linear gradient of the base color', () => {
    const { container } = renderBar({ color: 'blue', definition: linearGradient(gradients.fadeDown) });

    expect(getAllBarPaths(container)[0]).toHaveAttribute('fill', 'url(#my-bar-fill)');
    const gradient = container.querySelector('linearGradient#my-bar-fill');
    assertNotNull(gradient);
    expect(gradient).toHaveAttribute('x2', '0');
    expect(gradient).toHaveAttribute('y2', '1');
    const stops = gradient.querySelectorAll('stop');
    expect(stops).toHaveLength(2);
    expect(stops[0]).toHaveAttribute('stop-color', 'blue');
    expect(stops[0]).toHaveAttribute('stop-opacity', '1');
    expect(stops[1]).toHaveAttribute('stop-color', 'blue');
    expect(stops[1]).toHaveAttribute('stop-opacity', '0.2');
  });

  it('should keep explicit stop colors', () => {
    const { container } = renderBar({
      color: 'red',
      definition: linearGradient({
        stops: [
          { offset: 0, color: 'red' },
          { offset: 1, color: 'orange' },
        ],
      }),
    });

    const gradient = container.querySelector('linearGradient#my-bar-fill');
    assertNotNull(gradient);
    const stops = gradient.querySelectorAll('stop');
    expect(stops[0]).toHaveAttribute('stop-color', 'red');
    expect(stops[1]).toHaveAttribute('stop-color', 'orange');
  });

  it('should use the pattern color and opacity when set', () => {
    const { container } = renderBar({
      color: 'blue',
      definition: pattern({ ...patterns.horizontal, color: 'black', opacity: 0.3 }),
    });

    expect(container.querySelector('pattern#my-bar-fill path')).toHaveAttribute('stroke', 'black');
    expect(container.querySelector('pattern#my-bar-fill g')).toHaveAttribute('opacity', '0.3');
  });

  it('should pass the fill to a custom shape as a string', () => {
    const shape = vi.fn((props: BarShapeProps) => <rect fill={props.fill} />);
    render(
      <BarChart width={400} height={400} data={data}>
        <Bar dataKey="uv" id="my-bar" fill={{ color: 'blue', definition: pattern(patterns.grid) }} shape={shape} />
      </BarChart>,
    );

    expect(shape).toHaveBeenCalled();
    shape.mock.calls.forEach(([props]) => expect(props.fill).toBe('url(#my-bar-fill)'));
  });

  it('should keep working with a string fill', () => {
    const { container } = renderBar('blue');

    expect(getAllBarPaths(container)[0]).toHaveAttribute('fill', 'blue');
    expect(container.querySelector('#my-bar-fill')).not.toBeInTheDocument();
  });

  it('should default the texture to white, and paint the tile base like a shape without fill, without a theme and color', () => {
    const { container } = renderBar({ definition: pattern(patterns.vertical) }, { withTheme: false });

    expect(getAllBarPaths(container)[0]).toHaveAttribute('fill', 'url(#my-bar-fill)');
    const base = container.querySelector('pattern#my-bar-fill rect');
    assertNotNull(base);
    expect(base).not.toHaveAttribute('fill');
    expect(container.querySelector('pattern#my-bar-fill path')).toHaveAttribute('stroke', '#fff');
  });

  it('should put a custom definition in defs with the bar fill id, and draw it in the legend icon with its own id', () => {
    const { container } = renderBar({ color: 'blue', definition: RedToBase });

    const gradient = container.querySelector('defs radialGradient#my-bar-fill');
    assertNotNull(gradient);
    const stops = gradient.querySelectorAll('stop');
    expect(stops[0]).toHaveAttribute('stop-color', 'red');
    expect(stops[1]).toHaveAttribute('stop-color', 'blue');
    expect(getAllBarPaths(container)[0]).toHaveAttribute('fill', 'url(#my-bar-fill)');

    const legendGradient = container.querySelector('.recharts-legend-item radialGradient');
    assertNotNull(legendGradient);
    expect(legendGradient.id).toMatch(/^recharts-legend-fill-/);
    expect(legendGradient.querySelectorAll('stop')[1]).toHaveAttribute('stop-color', 'blue');
    expect(container.querySelector('.recharts-legend-icon')).toHaveAttribute('fill', `url(#${legendGradient.id})`);
    expect(getTooltipItem(container)).toHaveStyle({ color: 'rgb(0, 0, 255)' });
  });

  it('should pass the theme color to the definition, and let it call Recharts hooks', () => {
    const { container } = renderBar({ definition: PlotAreaGradient });

    const gradient = container.querySelector('linearGradient#my-bar-fill');
    assertNotNull(gradient);
    expect(gradient).toHaveAttribute('data-color', 'purple');
    expect(gradient).toHaveAttribute('data-plot-height', '390');
  });

  it('should draw the plain inactive color in the legend icon of a hidden bar', () => {
    const { container } = render(
      <BarChart width={400} height={400} data={data}>
        <Bar dataKey="uv" hide fill={{ color: 'blue', definition: pattern(patterns.dots) }} isAnimationActive={false} />
        <Legend inactiveColor="#ccc" />
      </BarChart>,
    );

    expect(container.querySelector('.recharts-legend-icon')).toHaveAttribute('fill', '#ccc');
    expect(container.querySelector('.recharts-legend-item pattern')).not.toBeInTheDocument();
  });

  it('should draw the gradient in the legend icon with its own definition', () => {
    const { container } = renderBar({ color: 'blue', definition: linearGradient(gradients.fadeDown) });

    const gradient = container.querySelector('.recharts-legend-item linearGradient');
    assertNotNull(gradient);
    expect(container.querySelector('.recharts-legend-icon')).toHaveAttribute('fill', `url(#${gradient.id})`);
    expect(gradient.id).not.toBe('my-bar-fill');
  });

  it('should draw the pattern in a symbol legend icon', () => {
    const { container } = render(
      <BarChart width={400} height={400} data={data}>
        <Bar dataKey="uv" fill={{ color: 'blue', definition: pattern(patterns.dots) }} isAnimationActive={false} />
        <Legend iconType="circle" />
      </BarChart>,
    );

    const patternElement = container.querySelector('.recharts-legend-item pattern');
    assertNotNull(patternElement);
    expect(container.querySelector('.recharts-legend-item .recharts-symbols')).toHaveAttribute(
      'fill',
      `url(#${patternElement.id})`,
    );
  });

  it('should not pass the fill object to a custom legend icon', () => {
    const { container } = render(
      <svg>
        <DefaultLegendContent
          payload={[
            {
              value: 'uv',
              color: 'blue',
              fill: { color: 'blue', definition: pattern(patterns.dots) },
              legendIcon: <circle className="custom-icon" fill="red" />,
            },
          ]}
        />
      </svg>,
    );

    expect(container.querySelector('.custom-icon')).toHaveAttribute('fill', 'red');
  });
});
