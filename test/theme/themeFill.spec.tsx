import React from 'react';
import { describe, expect, it } from 'vitest';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Brush,
  CartesianGrid,
  Funnel,
  FunnelChart,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  RechartsFill,
  RechartsTheme,
  RechartsThemeProvider,
  ReferenceArea,
  ReferenceDot,
  ReferenceLine,
  Tooltip,
  Treemap,
  XAxis,
  YAxis,
  lightTheme,
  pattern,
  patterns,
} from '../../src';
import { getColorGraphicalItems, withFillColor } from '../../src/theme/themeFill';
import { rechartsTestRender } from '../helper/createSelectorTestCase';

const stripes = pattern(patterns.diagonal);

function fillObject(color: string): RechartsFill {
  return { color, definition: stripes };
}

describe('withFillColor', () => {
  it('should replace a fill object with its color', () => {
    expect(withFillColor({ fill: fillObject('purple'), stroke: 'indigo', strokeWidth: 2 })).toEqual({
      fill: 'purple',
      stroke: 'indigo',
      strokeWidth: 2,
    });
  });

  it('should leave out the fill when the fill object has no color', () => {
    expect(withFillColor({ fill: { definition: stripes }, stroke: 'indigo' })).toEqual({ stroke: 'indigo' });
  });

  it('should return a style without fill objects as it is', () => {
    const style = { fill: 'purple', active: { fill: 'white' } };
    expect(withFillColor(style)).toBe(style);
  });

  it('should replace the fill object of the active styles', () => {
    expect(withFillColor({ fill: 'purple', active: { fill: fillObject('white'), strokeWidth: 3 } })).toEqual({
      fill: 'purple',
      active: { fill: 'white', strokeWidth: 3 },
    });
  });

  it('should return the same object for the same style', () => {
    const style = { fill: fillObject('purple') };
    expect(withFillColor(style)).toBe(withFillColor(style));
  });

  it('should return undefined for undefined', () => {
    expect(withFillColor(undefined)).toBeUndefined();
  });
});

describe('getColorGraphicalItems', () => {
  it('should return the same array for the same theme entries', () => {
    const graphicalItems = [{ fill: fillObject('purple') }, { fill: 'teal' }];
    const result = getColorGraphicalItems(graphicalItems);
    expect(result).toEqual([{ fill: 'purple' }, { fill: 'teal' }]);
    expect(getColorGraphicalItems(graphicalItems)).toBe(result);
  });
});

describe('fill objects in the theme', () => {
  const theme: RechartsTheme = {
    ...lightTheme,
    graphicalItems: [
      { fill: fillObject('purple'), stroke: 'indigo', active: { fill: fillObject('white') } },
      { fill: fillObject('teal'), stroke: 'navy', active: { fill: fillObject('black') } },
    ],
    barBackground: { fill: fillObject('#eee') },
    brush: { fill: fillObject('#fafafa'), stroke: '#666' },
    grid: { fill: fillObject('#f5f5f5'), stroke: '#ccc' },
    reference: { fill: fillObject('#ddd'), stroke: '#999' },
    cursor: { fill: fillObject('#ccc'), stroke: '#ccc' },
  };

  const data = [
    { name: 'A', uv: 10, pv: 20 },
    { name: 'B', uv: 20, pv: 10 },
  ];

  function expectNoObjectFills(container: Element) {
    const fills = Array.from(container.querySelectorAll('[fill]')).map(element => element.getAttribute('fill'));
    expect(fills.length).toBeGreaterThan(0);
    expect(fills.filter(fill => fill?.includes('object'))).toEqual([]);
  }

  it('should paint everything in a BarChart with a color or a fill definition', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider value={theme}>
        <BarChart width={400} height={400} data={data}>
          <CartesianGrid fill="#f5f5f5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="uv" background isAnimationActive={false} />
          <Bar dataKey="pv" isAnimationActive={false} />
          <ReferenceArea x1="A" x2="B" />
          <ReferenceDot x="A" y={10} r={5} />
          <ReferenceLine y={15} />
          <Brush />
          <Tooltip defaultIndex={0} />
          <Legend />
        </BarChart>
      </RechartsThemeProvider>,
    );

    expectNoObjectFills(container);
    expect(container.querySelector('.recharts-reference-area-rect')).toHaveAttribute('fill', '#ddd');
    expect(container.querySelector('.recharts-brush rect')).toHaveAttribute('fill', '#fafafa');
  });

  it('should paint the graphical items that do not draw fill objects yet with the color', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider value={theme}>
        <AreaChart width={400} height={400} data={data}>
          <Area dataKey="uv" isAnimationActive={false} />
          <Tooltip defaultIndex={0} />
        </AreaChart>
        <LineChart width={400} height={400} data={data}>
          <Line dataKey="uv" isAnimationActive={false} />
        </LineChart>
        <PieChart width={400} height={400}>
          <Pie data={data} dataKey="uv" isAnimationActive={false} />
        </PieChart>
        <FunnelChart width={400} height={400}>
          <Funnel data={data} dataKey="uv" isAnimationActive={false} />
        </FunnelChart>
        <Treemap width={400} height={400} data={data} dataKey="uv" isAnimationActive={false} />
      </RechartsThemeProvider>,
    );

    expectNoObjectFills(container);
    expect(container.querySelector('.recharts-area-area')).toHaveAttribute('fill', 'purple');
    expect(container.querySelector('.recharts-pie-sector path')).toHaveAttribute('fill', 'purple');
  });
});

describe('Line with a fill object', () => {
  it('should paint the dots with the color of the fill object', () => {
    const { container } = rechartsTestRender(
      <LineChart width={400} height={400} data={[{ uv: 1 }, { uv: 2 }]}>
        <Line dataKey="uv" fill={fillObject('red')} isAnimationActive={false} />
      </LineChart>,
    );

    const dots = Array.from(container.querySelectorAll('.recharts-line-dot'));
    expect(dots).toHaveLength(2);
    expect(dots.map(dot => dot.getAttribute('fill'))).toEqual(['red', 'red']);
  });
});
