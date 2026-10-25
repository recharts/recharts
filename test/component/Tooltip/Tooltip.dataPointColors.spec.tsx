import { describe, expect, it } from 'vitest';
import React from 'react';
import { rechartsTestRender } from '../../helper/createSelectorTestCase';
import { Area, AreaChart, Line, LineChart, PolarAngleAxis, Radar, RadarChart, Tooltip } from '../../../src';
import { DotItemDotProps } from '../../../src/util/types';

/**
 * Line, Area and Radar paint each dot with the SVG properties of its data entry.
 * They draw one shape per series, so the tooltip keeps showing the series color.
 *
 * @see {@link https://github.com/recharts/recharts/issues/7968}
 */
describe('data entry styles on dots', () => {
  const data = [
    { name: 'A', uv: 400, fill: '#ff0000', stroke: '#0000ff' },
    { name: 'B', uv: 300 },
  ];

  const seriesColor = '#8884d8';
  const seriesColorRgb = 'rgb(136, 132, 216)';

  function getDots(container: Element, selector: string): ReadonlyArray<Element> {
    return Array.from(container.querySelectorAll(selector));
  }

  function getTooltipItem(container: Element): HTMLElement {
    const item = container.querySelector<HTMLElement>('.recharts-tooltip-item');
    if (item == null) {
      throw new Error('tooltip item not found');
    }
    return item;
  }

  function getActiveDot(container: Element): Element {
    const dot = container.querySelector('.recharts-active-dot .recharts-dot');
    if (dot == null) {
      throw new Error('active dot not found');
    }
    return dot;
  }

  it('should paint Line dots and the active dot with the data entry colors, and show the series color in the tooltip', () => {
    const { container } = rechartsTestRender(
      <LineChart width={400} height={300} data={data}>
        <Line dataKey="uv" stroke={seriesColor} isAnimationActive={false} />
        <Tooltip defaultIndex={0} />
      </LineChart>,
    );

    const dots = getDots(container, '.recharts-line-dot');
    expect(dots).toHaveLength(2);
    expect(dots[0]).toHaveAttribute('fill', '#ff0000');
    expect(dots[0]).toHaveAttribute('stroke', '#0000ff');
    // a data entry without colors keeps the colors of the series
    expect(dots[1]).toHaveAttribute('stroke', seriesColor);

    expect(getActiveDot(container)).toHaveAttribute('fill', '#ff0000');
    expect(getTooltipItem(container)).toHaveStyle({ color: seriesColorRgb });
  });

  it('should paint Area dots and the active dot with the data entry colors, and show the series color in the tooltip', () => {
    const { container } = rechartsTestRender(
      <AreaChart width={400} height={300} data={data}>
        <Area dataKey="uv" stroke={seriesColor} fill="#82ca9d" dot isAnimationActive={false} />
        <Tooltip defaultIndex={0} />
      </AreaChart>,
    );

    const dots = getDots(container, '.recharts-area-dot');
    expect(dots).toHaveLength(2);
    expect(dots[0]).toHaveAttribute('fill', '#ff0000');
    expect(dots[0]).toHaveAttribute('stroke', '#0000ff');
    expect(dots[1]).toHaveAttribute('stroke', seriesColor);

    expect(getActiveDot(container)).toHaveAttribute('fill', '#ff0000');
    expect(getTooltipItem(container)).toHaveStyle({ color: seriesColorRgb });
  });

  it('should paint Radar dots and the active dot with the data entry colors, and show the series color in the tooltip', () => {
    const { container } = rechartsTestRender(
      <RadarChart width={400} height={300} data={data}>
        <PolarAngleAxis dataKey="name" />
        <Radar dataKey="uv" stroke={seriesColor} fill="#82ca9d" dot isAnimationActive={false} />
        <Tooltip defaultIndex={0} />
      </RadarChart>,
    );

    const dots = getDots(container, '.recharts-radar-dot');
    expect(dots).toHaveLength(2);
    expect(dots[0]).toHaveAttribute('fill', '#ff0000');
    expect(dots[0]).toHaveAttribute('stroke', '#0000ff');
    expect(dots[1]).toHaveAttribute('stroke', seriesColor);

    expect(getActiveDot(container)).toHaveAttribute('fill', '#ff0000');
    expect(getTooltipItem(container)).toHaveStyle({ color: seriesColorRgb });
  });

  it('should keep the series color for the active dot if the data entry has no fill', () => {
    const strokeOnly = [
      { name: 'A', uv: 400, stroke: '#0000ff' },
      { name: 'B', uv: 300 },
    ];
    const { container } = rechartsTestRender(
      <LineChart width={400} height={300} data={strokeOnly}>
        <Line dataKey="uv" stroke={seriesColor} isAnimationActive={false} />
        <Tooltip defaultIndex={0} />
      </LineChart>,
    );

    expect(getDots(container, '.recharts-line-dot')[0]).toHaveAttribute('stroke', '#0000ff');
    expect(getActiveDot(container)).toHaveAttribute('fill', seriesColor);
    expect(getTooltipItem(container)).toHaveStyle({ color: seriesColorRgb });
  });

  it('should let the data entry win over the dot option, and the activeDot option win over the data entry', () => {
    const { container } = rechartsTestRender(
      <LineChart width={400} height={300} data={data}>
        <Line
          dataKey="uv"
          stroke={seriesColor}
          dot={{ fill: '#00ff00', stroke: '#ff00ff', strokeWidth: 4 }}
          activeDot={{ fill: '#00ff00', stroke: '#ff00ff' }}
          isAnimationActive={false}
        />
        <Tooltip defaultIndex={0} />
      </LineChart>,
    );

    const dots = getDots(container, '.recharts-line-dot');
    expect(dots[0]).toHaveAttribute('fill', '#ff0000');
    expect(dots[0]).toHaveAttribute('stroke', '#0000ff');
    // what the data entry does not define still comes from the dot option
    expect(dots[0]).toHaveAttribute('stroke-width', '4');
    expect(dots[1]).toHaveAttribute('fill', '#00ff00');
    expect(dots[1]).toHaveAttribute('stroke', '#ff00ff');

    expect(getActiveDot(container)).toHaveAttribute('fill', '#00ff00');
    expect(getActiveDot(container)).toHaveAttribute('stroke', '#ff00ff');
  });

  it('should spread the other SVG properties of the data entry on its dot, without the id', () => {
    const styled = [
      {
        name: 'A',
        uv: 400,
        id: 'entry-a',
        opacity: 0.5,
        strokeWidth: 7,
        className: 'class-from-data',
        'data-test': 'entry-a',
        notAnSvgProp: 'x',
      },
      { name: 'B', uv: 300 },
    ];
    const { container } = rechartsTestRender(
      <LineChart width={400} height={300} data={styled}>
        <Line dataKey="uv" stroke={seriesColor} isAnimationActive={false} />
      </LineChart>,
    );

    const dots = getDots(container, '.recharts-line-dot');
    expect(dots[0]).toHaveAttribute('opacity', '0.5');
    expect(dots[0]).toHaveAttribute('stroke-width', '7');
    expect(dots[0]).toHaveAttribute('data-test', 'entry-a');
    expect(dots[0]).toHaveClass('recharts-line-dot', 'class-from-data');
    expect(dots[0]).not.toHaveAttribute('id', 'entry-a');
    expect(dots[0]).not.toHaveAttribute('notAnSvgProp');
    expect(dots[1]).not.toHaveClass('class-from-data');
  });

  it('should pass the data entry styles to a custom dot', () => {
    const received: DotItemDotProps[] = [];
    rechartsTestRender(
      <LineChart width={400} height={300} data={data}>
        <Line
          dataKey="uv"
          stroke={seriesColor}
          isAnimationActive={false}
          dot={props => {
            received.push(props);
            return null;
          }}
        />
      </LineChart>,
    );

    expect(received[0]).toMatchObject({ fill: '#ff0000', stroke: '#0000ff' });
    expect(received[1]).toMatchObject({ stroke: seriesColor });
  });

  it('should keep the series colors for the active dot and the tooltip if the data entry has no colors', () => {
    const { container } = rechartsTestRender(
      <LineChart width={400} height={300} data={data}>
        <Line dataKey="uv" stroke={seriesColor} isAnimationActive={false} />
        <Tooltip defaultIndex={1} />
      </LineChart>,
    );

    expect(getActiveDot(container)).toHaveAttribute('fill', seriesColor);
    expect(getTooltipItem(container)).toHaveStyle({ color: seriesColorRgb });
  });
});
