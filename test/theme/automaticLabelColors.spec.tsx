import React from 'react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Funnel,
  FunnelChart,
  LabelList,
  LabelProps,
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  RadialBar,
  RadialBarChart,
  RechartsThemeProvider,
  Scatter,
  ScatterChart,
  XAxis,
  YAxis,
} from '../../src';
import { RechartsTheme } from '../../src/theme/RechartsTheme';
import { getAutomaticDataLabelFill } from '../../src/theme/labelTheme';
import { isOutsidePolarPosition } from '../../src/polar/isOutsidePolarPosition';
import { rechartsTestRender } from '../helper/createSelectorTestCase';
import { mockGetBBox, restoreMockGetBBox } from '../helper/mockGetBBox';

const data = [
  { name: 'A', value: 40, x: 1 },
  { name: 'B', value: 30, x: 2, fill: 'green' },
  { name: 'C', value: 20, x: 3 },
];

const theme: RechartsTheme = {
  graphicalItems: [{ fill: 'purple', stroke: 'indigo' }],
  typography: { color: 'black' },
  pageBackground: 'white',
};

function getLabelFills(container: Element): ReadonlyArray<string | null> {
  return Array.from(container.querySelectorAll('.recharts-label-list text.recharts-text')).map(text =>
    text.getAttribute('fill'),
  );
}

function getLabelStyleFills(container: Element): ReadonlyArray<string> {
  return Array.from(container.querySelectorAll<SVGTextElement>('.recharts-label-list text.recharts-text')).map(
    text => text.style.fill,
  );
}

describe('isOutsidePolarPosition', () => {
  it.each(['outside', 'end', 'center', 'centerTop', 'centerBottom'] as const)('%s is outside', position => {
    expect(isOutsidePolarPosition(position)).toBe(true);
  });

  it.each([undefined, 'inside', 'insideStart', 'insideEnd', 'middle', 'top', 'insideLeft', { x: 1, y: 2 }] as const)(
    '%j is over the sector',
    position => {
      expect(isOutsidePolarPosition(position)).toBe(false);
    },
  );
});

describe('getAutomaticDataLabelFill', () => {
  const cartesianFilled = { hasFilledShapes: true, isPolar: false };
  const polarFilled = { hasFilledShapes: true, isPolar: true };
  const cartesianPoints = { hasFilledShapes: false, isPolar: false };
  const base = { shapeColors: { fill: 'red', stroke: 'blue' }, pageBackground: 'white', hasOwnBackground: false };

  it.each([
    [cartesianFilled, undefined, 'white'],
    [cartesianFilled, 'middle', 'white'],
    [cartesianFilled, 'inside', 'white'],
    [cartesianFilled, 'insideTopLeft', 'white'],
    [cartesianFilled, 'center', 'white'],
    // getCartesianPosition draws unknown positions at the center
    [cartesianFilled, 'outside', 'white'],
    [cartesianFilled, 'top', 'red'],
    [cartesianFilled, 'right', 'red'],
    [polarFilled, undefined, 'white'],
    [polarFilled, 'inside', 'white'],
    [polarFilled, 'insideStart', 'white'],
    [polarFilled, 'outside', 'red'],
    [polarFilled, 'end', 'red'],
    [polarFilled, 'center', 'red'],
    [cartesianPoints, undefined, 'red'],
    [cartesianPoints, 'inside', 'red'],
    [cartesianPoints, 'top', 'red'],
  ] as const)('%j at %j is %s', (item, position, expected) => {
    expect(getAutomaticDataLabelFill({ ...base, ...item, position })).toBe(expected);
  });

  it('uses the typography color for { x, y } positions', () => {
    expect(getAutomaticDataLabelFill({ ...base, ...cartesianFilled, position: { x: 1, y: 2 } })).toBeUndefined();
    expect(getAutomaticDataLabelFill({ ...base, ...cartesianPoints, position: { x: 1, y: 2 } })).toBeUndefined();
  });

  it('uses the typography color over the shape when there is no page background', () => {
    expect(
      getAutomaticDataLabelFill({ ...base, ...cartesianFilled, position: 'inside', pageBackground: undefined }),
    ).toBeUndefined();
  });

  it('uses the shape color over the shape when the label has its own background or halo', () => {
    expect(getAutomaticDataLabelFill({ ...base, ...cartesianFilled, position: 'inside', hasOwnBackground: true })).toBe(
      'red',
    );
  });

  it.each(['none', 'transparent', undefined])(
    'treats a shape with fill %j as not filled, and uses its stroke',
    fill => {
      const shapeColors = { fill, stroke: 'blue' };
      expect(getAutomaticDataLabelFill({ ...base, ...cartesianFilled, shapeColors, position: 'inside' })).toBe('blue');
      expect(getAutomaticDataLabelFill({ ...base, ...polarFilled, shapeColors, position: 'end' })).toBe('blue');
    },
  );

  it('uses the stroke of point items', () => {
    expect(
      getAutomaticDataLabelFill({ ...base, ...cartesianPoints, shapeColors: { stroke: 'blue' }, position: undefined }),
    ).toBe('blue');
  });

  it('uses the typography color when neither fill nor stroke paints anything', () => {
    expect(
      getAutomaticDataLabelFill({
        ...base,
        ...cartesianPoints,
        shapeColors: { fill: 'none', stroke: 'none' },
        position: 'top',
      }),
    ).toBeUndefined();
  });
});

describe('automatic data label colors', () => {
  beforeEach(() => {
    mockGetBBox(() => ({ x: 10, y: 20, width: 30, height: 12 }));
  });

  afterEach(() => {
    restoreMockGetBBox();
  });

  describe('without a theme', () => {
    it('keep the fill of the entry in Bar', () => {
      const { container } = rechartsTestRender(
        <BarChart width={300} height={300} data={data}>
          <Bar dataKey="value" isAnimationActive={false} label={{ position: 'inside' }} />
        </BarChart>,
      );
      expect(getLabelFills(container)).toEqual([null, 'green', null]);
    });

    it('have no fill in Line', () => {
      const { container } = rechartsTestRender(
        <LineChart width={300} height={300} data={data}>
          <Line dataKey="value" isAnimationActive={false} label />
        </LineChart>,
      );
      expect(getLabelFills(container)).toEqual([null, null, null]);
    });
  });

  describe('Bar', () => {
    it('labels on top of the bar take the page background color', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <BarChart width={300} height={300} data={data}>
            <Bar dataKey="value" isAnimationActive={false} label={{ position: 'inside' }} />
          </BarChart>
        </RechartsThemeProvider>,
      );
      expect(getLabelFills(container)).toEqual(['white', 'white', 'white']);
      expect(getLabelStyleFills(container)).toEqual(['white', 'white', 'white']);
    });

    it('labels without a position are in the middle of the bar', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <BarChart width={300} height={300} data={data}>
            <Bar dataKey="value" isAnimationActive={false} label />
          </BarChart>
        </RechartsThemeProvider>,
      );
      expect(getLabelFills(container)).toEqual(['white', 'white', 'white']);
    });

    it('labels outside of the bar take the color of each bar', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <BarChart width={300} height={300} data={data}>
            <Bar dataKey="value" isAnimationActive={false} label={{ position: 'top' }} />
          </BarChart>
        </RechartsThemeProvider>,
      );
      expect(getLabelFills(container)).toEqual(['purple', 'green', 'purple']);
    });

    it('labels outside of the bar take the explicit color of the bar', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <BarChart width={300} height={300} data={data}>
            <Bar dataKey="value" fill="red" isAnimationActive={false} label={{ position: 'top' }} />
          </BarChart>
        </RechartsThemeProvider>,
      );
      expect(getLabelFills(container)).toEqual(['red', 'green', 'red']);
    });

    it('labels at an { x, y } position take the typography color', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <BarChart width={300} height={300} data={data}>
            <Bar dataKey="value" isAnimationActive={false} label={{ position: { x: 10, y: 10 } }} />
          </BarChart>
        </RechartsThemeProvider>,
      );
      expect(getLabelFills(container)).toEqual([null, null, null]);
      expect(getLabelStyleFills(container)).toEqual(['black', 'black', 'black']);
    });

    it('labels on top of the bar take the typography color without a page background', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={{ ...theme, pageBackground: undefined }}>
          <BarChart width={300} height={300} data={data}>
            <Bar dataKey="value" isAnimationActive={false} label={{ position: 'inside' }} />
          </BarChart>
        </RechartsThemeProvider>,
      );
      expect(getLabelFills(container)).toEqual([null, null, null]);
      expect(getLabelStyleFills(container)).toEqual(['black', 'black', 'black']);
    });

    it('labels on top of the bar take chart.backgroundColor when there is no page background', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={{ ...theme, pageBackground: undefined, chart: { backgroundColor: 'ivory' } }}>
          <BarChart width={300} height={300} data={data}>
            <Bar dataKey="value" isAnimationActive={false} label={{ position: 'inside' }} />
          </BarChart>
        </RechartsThemeProvider>,
      );
      expect(getLabelFills(container)).toEqual(['ivory', 'ivory', 'ivory']);
    });

    it('labels with a background take the color of the bar', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <BarChart width={300} height={300} data={data}>
            <Bar dataKey="value" isAnimationActive={false}>
              <LabelList position="inside" background />
            </Bar>
          </BarChart>
        </RechartsThemeProvider>,
      );
      expect(getLabelFills(container)).toEqual(['purple', 'green', 'purple']);
    });

    it('labels with a halo take the color of the bar', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <BarChart width={300} height={300} data={data}>
            <Bar dataKey="value" isAnimationActive={false}>
              <LabelList position="inside" halo />
            </Bar>
          </BarChart>
        </RechartsThemeProvider>,
      );
      expect(getLabelFills(container)).toEqual(['purple', 'green', 'purple']);
    });

    it('labels with a background from the theme take the color of the bar', () => {
      const themeWithBackground: RechartsTheme = {
        ...theme,
        graphicalItems: [{ fill: 'purple', stroke: 'indigo', label: { background: true } }],
      };
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={themeWithBackground}>
          <BarChart width={300} height={300} data={data}>
            <Bar dataKey="value" isAnimationActive={false} label={{ position: 'inside' }} />
          </BarChart>
        </RechartsThemeProvider>,
      );
      expect(getLabelFills(container)).toEqual(['purple', 'green', 'purple']);
    });

    it('labels that turn the theme background off take the page background color', () => {
      const themeWithBackground: RechartsTheme = {
        ...theme,
        graphicalItems: [{ fill: 'purple', stroke: 'indigo', label: { background: true } }],
      };
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={themeWithBackground}>
          <BarChart width={300} height={300} data={data}>
            <Bar dataKey="value" isAnimationActive={false} label={{ position: 'inside', background: false }} />
          </BarChart>
        </RechartsThemeProvider>,
      );
      expect(getLabelFills(container)).toEqual(['white', 'white', 'white']);
    });

    it('an explicit fill wins', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <BarChart width={300} height={300} data={data}>
            <Bar dataKey="value" isAnimationActive={false}>
              <LabelList position="inside" fill="orange" />
            </Bar>
          </BarChart>
        </RechartsThemeProvider>,
      );
      expect(getLabelFills(container)).toEqual(['orange', 'orange', 'orange']);
    });

    it('a fill from the label theme wins', () => {
      const themeWithLabelColor: RechartsTheme = {
        ...theme,
        graphicalItems: [{ fill: 'purple', stroke: 'indigo', label: { style: { fill: 'orange' } } }],
      };
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={themeWithLabelColor}>
          <BarChart width={300} height={300} data={data}>
            <Bar dataKey="value" isAnimationActive={false} label={{ position: 'inside' }} />
          </BarChart>
        </RechartsThemeProvider>,
      );
      expect(getLabelFills(container)).toEqual(['orange', 'orange', 'orange']);
    });

    it('custom content receives the automatic fill', () => {
      const fills: Array<string | undefined> = [];
      const Content = (props: LabelProps) => {
        fills.push(props.fill);
        return null;
      };
      rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <BarChart width={300} height={300} data={data}>
            <Bar dataKey="value" isAnimationActive={false}>
              <LabelList position="top" content={Content} />
            </Bar>
          </BarChart>
        </RechartsThemeProvider>,
      );
      expect(fills.slice(-3)).toEqual(['purple', 'green', 'purple']);
    });

    it('does not change axis labels', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <BarChart width={300} height={300} data={data}>
            <XAxis dataKey="name" label={{ value: 'X', position: 'insideBottom' }} />
            <YAxis label={{ value: 'Y', position: 'insideLeft' }} />
            <Bar dataKey="value" isAnimationActive={false} label={{ position: 'inside' }} />
          </BarChart>
        </RechartsThemeProvider>,
      );
      const axisLabels = Array.from(container.querySelectorAll<SVGTextElement>('.recharts-label')).filter(
        text => text.closest('.recharts-label-list') == null,
      );
      expect(axisLabels).toHaveLength(2);
      axisLabels.forEach(text => {
        expect(text).not.toHaveAttribute('fill');
        expect(text.style.fill).toBe('black');
      });
    });
  });

  describe('point items', () => {
    it('Line labels take the stroke color', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <LineChart width={300} height={300} data={data}>
            <Line dataKey="value" isAnimationActive={false} label={{ position: 'inside' }} />
          </LineChart>
        </RechartsThemeProvider>,
      );
      expect(getLabelFills(container)).toEqual(['indigo', 'indigo', 'indigo']);
    });

    it('Area labels take the stroke color', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <AreaChart width={300} height={300} data={data}>
            <Area dataKey="value" isAnimationActive={false} label />
          </AreaChart>
        </RechartsThemeProvider>,
      );
      expect(getLabelFills(container)).toEqual(['indigo', 'indigo', 'indigo']);
    });

    it('Radar labels take the stroke color', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <RadarChart width={300} height={300} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <Radar dataKey="value" isAnimationActive={false} label />
          </RadarChart>
        </RechartsThemeProvider>,
      );
      expect(getLabelFills(container)).toEqual(['indigo', 'indigo', 'indigo']);
    });

    it('Scatter labels take the color of each point', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <ScatterChart width={300} height={300}>
            <XAxis dataKey="x" />
            <YAxis dataKey="value" />
            <Scatter data={data} dataKey="value" isAnimationActive={false}>
              <LabelList dataKey="value" />
            </Scatter>
          </ScatterChart>
        </RechartsThemeProvider>,
      );
      expect(getLabelFills(container)).toEqual(['purple', 'green', 'purple']);
    });
  });

  describe('Funnel', () => {
    it('labels without a position are on top of the trapezoid', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <FunnelChart width={300} height={300}>
            <Funnel data={data} dataKey="value" isAnimationActive={false} label />
          </FunnelChart>
        </RechartsThemeProvider>,
      );
      expect(getLabelFills(container)).toEqual(['white', 'white', 'white']);
    });

    it('labels outside of the trapezoid take its color', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <FunnelChart width={300} height={300}>
            <Funnel data={data} dataKey="value" isAnimationActive={false} label={{ position: 'right' }} />
          </FunnelChart>
        </RechartsThemeProvider>,
      );
      expect(getLabelFills(container)).toEqual(['purple', 'green', 'purple']);
    });
  });

  describe('Pie', () => {
    it('labels inside of the sector take the page background color', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <PieChart width={300} height={300}>
            <Pie data={data} dataKey="value" isAnimationActive={false}>
              <LabelList position="inside" />
            </Pie>
          </PieChart>
        </RechartsThemeProvider>,
      );
      expect(getLabelFills(container)).toEqual(['white', 'white', 'white']);
    });

    it('labels outside of the sector take its color', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <PieChart width={300} height={300}>
            <Pie data={data} dataKey="value" isAnimationActive={false}>
              <LabelList position="outside" />
            </Pie>
          </PieChart>
        </RechartsThemeProvider>,
      );
      expect(getLabelFills(container)).toEqual(['purple', 'green', 'purple']);
    });
  });

  describe('RadialBar', () => {
    it.each(['insideStart', 'insideEnd', 'inside'] as const)(
      'labels at %s take the page background color',
      position => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider value={theme}>
            <RadialBarChart width={300} height={300} data={data}>
              <RadialBar dataKey="value" isAnimationActive={false} label={{ position }} />
            </RadialBarChart>
          </RechartsThemeProvider>,
        );
        expect(getLabelFills(container)).toEqual(['white', 'white', 'white']);
      },
    );

    it.each(['insideStart', 'end'] as const)('labels of an unfilled RadialBar at %s take its stroke', position => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <RadialBarChart width={300} height={300} data={data}>
            <RadialBar dataKey="value" fill="none" stroke="blue" isAnimationActive={false} label={{ position }} />
          </RadialBarChart>
        </RechartsThemeProvider>,
      );
      // B has its own fill in the data, which wins over fill="none"
      expect(getLabelFills(container)).toEqual(
        position === 'end' ? ['blue', 'green', 'blue'] : ['blue', 'white', 'blue'],
      );
    });

    it.each(['end', 'outside'] as const)('labels at %s take the color of the sector', position => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <RadialBarChart width={300} height={300} data={data}>
            <RadialBar dataKey="value" isAnimationActive={false} label={{ position }} />
          </RadialBarChart>
        </RechartsThemeProvider>,
      );
      expect(getLabelFills(container)).toEqual(['purple', 'green', 'purple']);
    });
  });
});
