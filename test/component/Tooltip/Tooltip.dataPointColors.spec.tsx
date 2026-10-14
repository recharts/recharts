import { describe, expect, it } from 'vitest';
import React from 'react';
import { rechartsTestRender } from '../../helper/createSelectorTestCase';
import { Area, AreaChart, Line, LineChart, PolarAngleAxis, Radar, RadarChart, Tooltip } from '../../../src';

/**
 * Like Bar, Line, Area and Radar paint each data point with the `fill` and `stroke` found in that data point,
 * so the dots, the active dot and the tooltip all show the same color.
 *
 * @see {@link https://github.com/recharts/recharts/issues/7968}
 */
describe('data point colors', () => {
  const data = [
    { name: 'A', uv: 400, fill: '#ff0000', stroke: '#0000ff' },
    { name: 'B', uv: 300 },
  ];

  const red = 'rgb(255, 0, 0)';
  const seriesColor = '#8884d8';

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

  it('should paint Line dots, the active dot and the tooltip with the data point colors', () => {
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
    // a data point without colors keeps the colors of the series
    expect(dots[1]).toHaveAttribute('stroke', seriesColor);

    expect(getActiveDot(container)).toHaveAttribute('fill', '#ff0000');
    expect(getTooltipItem(container)).toHaveStyle({ color: red });
  });

  it('should paint Area dots, the active dot and the tooltip with the data point colors', () => {
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
    expect(getTooltipItem(container)).toHaveStyle({ color: red });
  });

  it('should paint Radar dots, the active dot and the tooltip with the data point colors', () => {
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
    expect(getTooltipItem(container)).toHaveStyle({ color: red });
  });

  it('should fill the active dot with the data point stroke if the data point has no fill', () => {
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

    expect(getActiveDot(container)).toHaveAttribute('fill', '#0000ff');
    expect(getTooltipItem(container)).toHaveStyle({ color: 'rgb(0, 0, 255)' });
  });

  it('should keep the series colors for the active dot if the data point has no colors', () => {
    const { container } = rechartsTestRender(
      <LineChart width={400} height={300} data={data}>
        <Line dataKey="uv" stroke={seriesColor} isAnimationActive={false} />
        <Tooltip defaultIndex={1} />
      </LineChart>,
    );

    expect(getActiveDot(container)).toHaveAttribute('fill', seriesColor);
    expect(getTooltipItem(container)).toHaveStyle({ color: 'rgb(136, 132, 216)' });
  });
});
