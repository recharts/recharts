import { describe, expect, it } from 'vitest';
import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ReferenceArea,
  RechartsFillDefinitionProps,
  RechartsTheme,
  RechartsThemeProvider,
  ReferenceDot,
  XAxis,
  YAxis,
  lightTheme,
  pattern,
  patterns,
} from '../../src';
import { rechartsTestRender as render } from '../helper/createSelectorTestCase';
import { assertNotNull } from '../helper/assertNotNull';

const data = [
  { x: 1, y: 1 },
  { x: 2, y: 3 },
  { x: 3, y: 2 },
];
const dots = pattern(patterns.dots);

function getPaintedPattern(container: Element, element: Element | null): Element {
  assertNotNull(element);
  const fill = element.getAttribute('fill');
  const match = fill?.match(/^url\(#(.+)\)$/);
  assertNotNull(match);
  const patternElement = container.querySelector(`pattern[id="${match[1]}"]`);
  assertNotNull(patternElement);
  return patternElement;
}

describe('fill objects in reference elements and grids', () => {
  it('should paint a ReferenceArea with the definition', () => {
    const { container } = render(
      <BarChart width={400} height={400} data={data}>
        <XAxis dataKey="x" />
        <YAxis />
        <Bar dataKey="y" isAnimationActive={false} />
        <ReferenceArea x1={1} x2={2} fill={{ color: 'blue', definition: dots }} />
      </BarChart>,
    );

    const area = container.querySelector('.recharts-reference-area-rect');
    expect(getPaintedPattern(container, area).querySelector('rect')).toHaveAttribute('fill', 'blue');
  });

  it('should paint a ReferenceDot with the definition, in the default color when the fill object has none', () => {
    const { container } = render(
      <BarChart width={400} height={400} data={data}>
        <XAxis dataKey="x" />
        <YAxis />
        <Bar dataKey="y" isAnimationActive={false} />
        <ReferenceDot x={2} y={2} fill={{ definition: dots }} />
      </BarChart>,
    );

    const dot = container.querySelector('.recharts-reference-dot-dot');
    expect(getPaintedPattern(container, dot).querySelector('rect')).toHaveAttribute('fill', '#fff');
  });

  it('should paint the CartesianGrid background and stripes with their definitions', () => {
    const { container } = render(
      <BarChart width={400} height={400} data={data}>
        <XAxis dataKey="x" />
        <YAxis />
        <CartesianGrid
          fill={{ color: 'blue', definition: dots }}
          horizontalFill={['yellow', { color: 'green', definition: dots }]}
        />
        <Bar dataKey="y" isAnimationActive={false} />
      </BarChart>,
    );

    const backgrounds = container.querySelectorAll('.recharts-cartesian-grid-bg');
    expect(getPaintedPattern(container, backgrounds[0]).querySelector('rect')).toHaveAttribute('fill', 'blue');
    const stripes = container.querySelectorAll('.recharts-cartesian-gridstripes-horizontal rect');
    expect(stripes[0]).toHaveAttribute('fill', 'yellow');
    expect(getPaintedPattern(container, stripes[1]).querySelector('rect')).toHaveAttribute('fill', 'green');
  });

  it('should paint the PolarGrid background with the definition', () => {
    const { container } = render(
      <RadarChart width={400} height={400} data={data}>
        <PolarAngleAxis dataKey="x" />
        <PolarGrid fill={{ color: 'blue', definition: dots }} />
        <Radar dataKey="y" isAnimationActive={false} />
      </RadarChart>,
    );

    const background = container.querySelector('.recharts-polar-grid-concentric-polygon');
    expect(getPaintedPattern(container, background).querySelector('rect')).toHaveAttribute('fill', 'blue');
  });

  it('should keep string fills working', () => {
    const { container } = render(
      <BarChart width={400} height={400} data={data}>
        <XAxis dataKey="x" />
        <YAxis />
        <CartesianGrid fill="pink" verticalFill={['red', 'white']} />
        <Bar dataKey="y" isAnimationActive={false} />
        <ReferenceArea x1={1} x2={2} fill="orange" />
      </BarChart>,
    );

    expect(container.querySelector('.recharts-cartesian-grid-bg')).toHaveAttribute('fill', 'pink');
    expect(container.querySelector('.recharts-reference-area-rect')).toHaveAttribute('fill', 'orange');
    expect(container.querySelector('.recharts-cartesian-grid pattern')).not.toBeInTheDocument();
  });

  it('should give the definition the size of the ReferenceArea and of the ReferenceDot as bounds', () => {
    const received: Array<RechartsFillDefinitionProps['bounds']> = [];
    function RecordBounds({ id, bounds }: RechartsFillDefinitionProps) {
      received.push(bounds);
      return <linearGradient id={id} />;
    }
    render(
      <BarChart width={400} height={400} data={data}>
        <XAxis dataKey="x" />
        <YAxis />
        <Bar dataKey="y" isAnimationActive={false} />
        <ReferenceArea y1={1} y2={2} fill={{ definition: RecordBounds }} />
        <ReferenceDot x={2} y={2} r={6} fill={{ definition: RecordBounds }} />
      </BarChart>,
    );

    expect(received).toContainEqual({ width: 12, height: 12 });
    const areaBounds = received.find(bounds => bounds != null && bounds.width !== 12);
    assertNotNull(areaBounds);
    expect(areaBounds.width).toBeGreaterThan(100);
    expect(areaBounds.height).toBeGreaterThan(10);
  });
});

describe('fill objects from the theme in reference elements and grids', () => {
  const theme: RechartsTheme = {
    ...lightTheme,
    grid: { ...lightTheme.grid, fill: { color: 'lavender', definition: dots } },
    reference: { ...lightTheme.reference, fill: { color: 'pink', definition: dots } },
  };

  it('should paint the grid and the reference elements with the theme fill objects', () => {
    const { container } = render(
      <RechartsThemeProvider value={theme}>
        <BarChart width={400} height={400} data={data}>
          <CartesianGrid />
          <XAxis dataKey="x" />
          <YAxis />
          <Bar dataKey="y" isAnimationActive={false} />
          <ReferenceArea x1={1} x2={2} />
          <ReferenceDot x={2} y={2} r={6} />
        </BarChart>
      </RechartsThemeProvider>,
    );

    const gridPattern = getPaintedPattern(container, container.querySelector('.recharts-cartesian-grid-bg'));
    expect(gridPattern.querySelector('rect')).toHaveAttribute('fill', 'lavender');
    const areaPattern = getPaintedPattern(container, container.querySelector('.recharts-reference-area-rect'));
    expect(areaPattern.querySelector('rect')).toHaveAttribute('fill', 'pink');
    const dotPattern = getPaintedPattern(container, container.querySelector('.recharts-reference-dot-dot'));
    expect(dotPattern.querySelector('rect')).toHaveAttribute('fill', 'pink');
  });

  it('should paint the PolarGrid background with the theme fill object', () => {
    const { container } = render(
      <RechartsThemeProvider value={theme}>
        <RadarChart width={400} height={400} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="x" />
          <Radar dataKey="y" isAnimationActive={false} />
        </RadarChart>
      </RechartsThemeProvider>,
    );

    const gridPattern = getPaintedPattern(
      container,
      container.querySelector('.recharts-polar-grid-concentric-polygon'),
    );
    expect(gridPattern.querySelector('rect')).toHaveAttribute('fill', 'lavender');
  });

  it('should prefer the fill of the component over the theme fill object', () => {
    const { container } = render(
      <RechartsThemeProvider value={theme}>
        <BarChart width={400} height={400} data={data}>
          <XAxis dataKey="x" />
          <YAxis />
          <Bar dataKey="y" isAnimationActive={false} />
          <ReferenceArea x1={1} x2={2} fill="orange" />
        </BarChart>
      </RechartsThemeProvider>,
    );

    expect(container.querySelector('.recharts-reference-area-rect')).toHaveAttribute('fill', 'orange');
  });
});
