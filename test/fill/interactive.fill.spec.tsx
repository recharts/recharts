import { describe, expect, it } from 'vitest';
import React from 'react';
import {
  Bar,
  BarChart,
  Brush,
  Line,
  LineChart,
  Pie,
  PieChart,
  RadialBar,
  RadialBarChart,
  RechartsFill,
  RechartsThemeProvider,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  lightTheme,
  pattern,
  patterns,
} from '../../src';
import { rechartsTestRender as render } from '../helper/createSelectorTestCase';
import { assertNotNull } from '../helper/assertNotNull';

const data = [
  { name: 'a', uv: 1 },
  { name: 'b', uv: 2 },
];
const dots: RechartsFill = { color: 'blue', definition: pattern(patterns.dots) };
const dotsWithoutColor: RechartsFill = { definition: pattern(patterns.dots) };
const themed = { ...lightTheme, graphicalItems: [{ fill: 'purple', stroke: 'indigo', active: { fill: 'red' } }] };

function TravellerWithFill(props: { x: number; y: number; width: number; height: number; fill?: string }) {
  return (
    <rect
      className="my-traveller"
      x={props.x}
      y={props.y}
      width={props.width}
      height={props.height}
      fill={props.fill}
    />
  );
}

function getPaintedPatternBase(container: Element, element: Element | null): string | null {
  assertNotNull(element);
  const match = element.getAttribute('fill')?.match(/^url\(#(.+)\)$/);
  assertNotNull(match);
  const patternElement = container.querySelector(`pattern[id="${match[1]}"]`);
  assertNotNull(patternElement);
  return patternElement.querySelector('rect')?.getAttribute('fill') ?? null;
}

describe('fill objects in backgrounds, active shapes, and the cursor', () => {
  it('should paint the Bar background with a fill object', () => {
    const { container } = render(
      <BarChart width={400} height={400} data={data}>
        <Bar dataKey="uv" background={{ fill: dots }} isAnimationActive={false} />
      </BarChart>,
    );

    const background = container.querySelector('path.recharts-bar-background-rectangle');
    expect(getPaintedPatternBase(container, background)).toBe('blue');
  });

  it('should paint the active bar with a fill object, also when it has no color and the theme has an active fill', () => {
    const { container } = render(
      <RechartsThemeProvider value={themed}>
        <BarChart width={400} height={400} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="uv" activeBar={{ fill: dotsWithoutColor }} isAnimationActive={false} />
          <Tooltip defaultIndex={0} />
        </BarChart>
      </RechartsThemeProvider>,
    );

    const activeBar = container.querySelector('.recharts-active-bar path.recharts-rectangle');
    assertNotNull(activeBar);
    expect(activeBar.getAttribute('fill')).toMatch(/^url\(#/);
  });

  it('should paint the active Pie sector with a fill object', () => {
    const { container } = render(
      <PieChart width={400} height={400}>
        <Pie data={data} dataKey="uv" activeShape={{ fill: dots }} isAnimationActive={false} />
        <Tooltip defaultIndex={0} />
      </PieChart>,
    );

    const sectors = container.querySelectorAll('.recharts-pie-sector path.recharts-sector');
    expect(getPaintedPatternBase(container, sectors[0])).toBe('blue');
  });

  it('should paint the Tooltip cursor with a fill object', () => {
    const { container } = render(
      <BarChart width={400} height={400} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="uv" isAnimationActive={false} />
        <Tooltip defaultIndex={0} cursor={{ fill: dots }} />
      </BarChart>,
    );

    const cursor = container.querySelector('.recharts-tooltip-cursor');
    expect(getPaintedPatternBase(container, cursor)).toBe('blue');
  });

  it('should paint the Brush background with a fill object, and keep the color on the travellers', () => {
    const { container } = render(
      <BarChart width={400} height={400} data={data}>
        <XAxis dataKey="name" />
        <Bar dataKey="uv" isAnimationActive={false} />
        <Brush fill={dots} traveller={TravellerWithFill} />
      </BarChart>,
    );

    const background = container.querySelector('.recharts-brush > rect');
    expect(getPaintedPatternBase(container, background)).toBe('blue');
    // a custom traveller gets the plain color
    expect(container.querySelector('.recharts-brush-traveller .my-traveller')).toHaveAttribute('fill', 'blue');
  });

  it('should paint Line dots with a fill object', () => {
    const { container } = render(
      <LineChart width={400} height={400} data={data}>
        <Line dataKey="uv" dot={{ fill: dots }} isAnimationActive={false} />
      </LineChart>,
    );

    const dot = container.querySelector('circle.recharts-dot');
    expect(getPaintedPatternBase(container, dot)).toBe('blue');
  });

  it('should paint the RadialBar background with a fill object', () => {
    const { container } = render(
      <RadialBarChart width={400} height={400} data={data}>
        <RadialBar dataKey="uv" background={{ fill: dots }} isAnimationActive={false} />
      </RadialBarChart>,
    );

    const background = container.querySelector('path.recharts-radial-bar-background-sector');
    expect(getPaintedPatternBase(container, background)).toBe('blue');
  });
});

describe('fill objects from the theme in backgrounds, the Brush, and the cursor', () => {
  const theme = {
    ...lightTheme,
    barBackground: { fill: dots },
    brush: { ...lightTheme.brush, fill: dots },
    cursor: { ...lightTheme.cursor, fill: dots },
  };

  it('should paint the Bar background, the Brush background, and the cursor with the theme fill objects', () => {
    const { container } = render(
      <RechartsThemeProvider value={theme}>
        <BarChart width={400} height={400} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="uv" background isAnimationActive={false} />
          <Brush traveller={TravellerWithFill} />
          <Tooltip defaultIndex={0} />
        </BarChart>
      </RechartsThemeProvider>,
    );

    const barBackground = container.querySelector('path.recharts-bar-background-rectangle');
    expect(getPaintedPatternBase(container, barBackground)).toBe('blue');
    const brushBackground = container.querySelector('.recharts-brush > rect');
    expect(getPaintedPatternBase(container, brushBackground)).toBe('blue');
    const cursor = container.querySelector('.recharts-tooltip-cursor');
    expect(getPaintedPatternBase(container, cursor)).toBe('blue');
  });

  it('should paint the RadialBar background with the theme fill object', () => {
    const { container } = render(
      <RechartsThemeProvider value={theme}>
        <RadialBarChart width={400} height={400} data={data}>
          <RadialBar dataKey="uv" background isAnimationActive={false} />
        </RadialBarChart>
      </RechartsThemeProvider>,
    );

    const background = container.querySelector('path.recharts-radial-bar-background-sector');
    expect(getPaintedPatternBase(container, background)).toBe('blue');
  });

  it('should paint the cross cursor of a ScatterChart with the color of the theme fill object', () => {
    const { container } = render(
      <RechartsThemeProvider value={theme}>
        <ScatterChart width={400} height={400}>
          <XAxis dataKey="name" />
          <YAxis dataKey="uv" />
          <Scatter data={data} isAnimationActive={false} />
          <Tooltip defaultIndex={0} />
        </ScatterChart>
      </RechartsThemeProvider>,
    );

    const cursor = container.querySelector('.recharts-tooltip-cursor');
    assertNotNull(cursor);
    expect(cursor).toHaveAttribute('fill', 'blue');
  });
});
