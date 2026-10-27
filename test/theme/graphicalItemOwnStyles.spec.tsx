import React from 'react';
import { describe, expect, it } from 'vitest';
import {
  Area,
  Bar,
  ComposedChart,
  Funnel,
  FunnelChart,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  Radar,
  RadarChart,
  RadialBar,
  RadialBarChart,
  RechartsThemeProvider,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from '../../src';
import { RechartsTheme } from '../../src/theme/RechartsTheme';
import { rechartsTestRender } from '../helper/createSelectorTestCase';
import { getAllScatterPoints } from '../helper/expectScatterPoints';

/**
 * Graphical items that set their own fill or stroke ignore the fill and stroke of their theme entry together,
 * so that user colors never mix with theme colors. Other style props merge with the theme,
 * and the theme active styles keep styling the active state.
 */

const theme: RechartsTheme = {
  graphicalItems: [
    {
      fill: 'purple',
      fillOpacity: 0.5,
      stroke: 'indigo',
      strokeWidth: 3,
      active: { fill: 'white', stroke: 'black' },
    },
  ],
};

const data = [
  { name: 'a', value: 100 },
  { name: 'b', value: 80 },
  { name: 'c', value: 60 },
];

type StyleAttributes = {
  fill: string | null;
  'fill-opacity': string | null;
  stroke: string | null;
  'stroke-width': string | null;
};

function getStyleAttributes(element: Element | null | undefined): StyleAttributes {
  expect(element).toBeInstanceOf(Element);
  return {
    fill: element!.getAttribute('fill'),
    'fill-opacity': element!.getAttribute('fill-opacity'),
    stroke: element!.getAttribute('stroke'),
    'stroke-width': element!.getAttribute('stroke-width'),
  };
}

function getLegendColor(container: Element): string | undefined {
  const legendText = container.querySelector<HTMLElement>('.recharts-legend-item-text');
  expect(legendText).toBeInstanceOf(HTMLElement);
  return legendText!.style.color;
}

const themedAttributes: StyleAttributes = {
  fill: 'purple',
  'fill-opacity': '0.5',
  stroke: 'indigo',
  'stroke-width': '3',
};

const ownFillAttributes: StyleAttributes = {
  fill: 'red',
  'fill-opacity': '0.5',
  stroke: null,
  'stroke-width': '3',
};

const themedActiveAttributes: StyleAttributes = {
  ...themedAttributes,
  fill: 'white',
  stroke: 'black',
};

function renderComposed(children: React.ReactNode) {
  return rechartsTestRender(
    <RechartsThemeProvider value={theme}>
      <ComposedChart width={400} height={400} data={data}>
        <XAxis dataKey="name" />
        {children}
        <Legend />
        <Tooltip defaultIndex={0} active />
      </ComposedChart>
    </RechartsThemeProvider>,
  );
}

describe('graphical items with their own style props', () => {
  describe('partial theme entries do not restore legacy colors', () => {
    const partialTheme: RechartsTheme = { graphicalItems: [{ fill: 'purple' }] };

    it('Funnel with a non-color style prop', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={partialTheme}>
          <FunnelChart width={400} height={400}>
            <Funnel data={data} dataKey="value" strokeWidth={7} isAnimationActive={false} />
          </FunnelChart>
        </RechartsThemeProvider>,
      );
      const trapezoids = container.querySelectorAll('.recharts-trapezoid');
      expect(trapezoids).toHaveLength(3);
      trapezoids.forEach(trapezoid =>
        expect(getStyleAttributes(trapezoid)).toEqual({
          fill: 'purple',
          'fill-opacity': null,
          stroke: null,
          'stroke-width': '7',
        }),
      );
    });

    it('Funnel without style props', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={partialTheme}>
          <FunnelChart width={400} height={400}>
            <Funnel data={data} dataKey="value" isAnimationActive={false} />
          </FunnelChart>
        </RechartsThemeProvider>,
      );
      container.querySelectorAll('.recharts-trapezoid').forEach(trapezoid => {
        expect(trapezoid.getAttribute('fill')).toBe('purple');
        expect(trapezoid.getAttribute('stroke')).toBeNull();
      });
    });

    it('Pie with a non-color style prop', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={partialTheme}>
          <PieChart width={400} height={400}>
            <Pie data={data} dataKey="value" strokeWidth={7} isAnimationActive={false} />
          </PieChart>
        </RechartsThemeProvider>,
      );
      const sectors = container.querySelectorAll('.recharts-pie-sector path');
      expect(sectors).toHaveLength(3);
      sectors.forEach(sector =>
        expect(getStyleAttributes(sector)).toEqual({
          fill: 'purple',
          'fill-opacity': null,
          stroke: null,
          'stroke-width': '7',
        }),
      );
    });
  });

  describe('Bar', () => {
    it('should keep the theme without own styles', () => {
      const { container } = renderComposed(<Bar dataKey="value" isAnimationActive={false} />);
      expect(getStyleAttributes(container.querySelector('.recharts-bar-rectangle path'))).toEqual(themedAttributes);
    });

    it('should ignore the theme colors with an explicit fill', () => {
      const { container } = renderComposed(<Bar dataKey="value" fill="red" isAnimationActive={false} />);
      expect(getStyleAttributes(container.querySelector('.recharts-bar-rectangle path'))).toEqual(ownFillAttributes);
      expect(getLegendColor(container)).toBe('red');
    });

    it.each([
      { fillOpacity: 0.3, expected: { 'fill-opacity': '0.3' } },
      { strokeWidth: 2, expected: { 'stroke-width': '2' } },
    ])('should merge a non-color style prop with the theme %s', ({ expected, ...styleProps }) => {
      const { container } = renderComposed(<Bar dataKey="value" isAnimationActive={false} {...styleProps} />);
      expect(getStyleAttributes(container.querySelector('.recharts-bar-rectangle path'))).toEqual({
        ...themedAttributes,
        ...expected,
      });
      expect(getLegendColor(container)).toBe('purple');
    });

    it('should merge a non-color style from data with the theme', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <ComposedChart width={400} height={400} data={[{ value: 1, strokeWidth: 7 }]}>
            <Bar dataKey="value" isAnimationActive={false} />
          </ComposedChart>
        </RechartsThemeProvider>,
      );
      expect(getStyleAttributes(container.querySelector('.recharts-bar-rectangle path'))).toEqual({
        ...themedAttributes,
        'stroke-width': '7',
      });
    });
  });

  describe('Area', () => {
    it('should ignore the theme colors with an explicit fill, and keep the theme active dot', () => {
      const { container } = renderComposed(<Area dataKey="value" fill="red" isAnimationActive={false} />);
      expect(getStyleAttributes(container.querySelector('.recharts-area-area'))).toEqual({
        ...ownFillAttributes,
        stroke: 'none',
      });
      const curve = getStyleAttributes(container.querySelector('.recharts-area-curve'));
      expect(curve.stroke).not.toBe('indigo');
      expect(curve['stroke-width']).toBe('3');
      const activeDot = getStyleAttributes(container.querySelector('.recharts-active-dot circle'));
      expect(activeDot.fill).toBe('white');
      expect(activeDot.stroke).toBe('black');
    });
  });

  describe('Line', () => {
    it('should apply data point colors to dots and keep them out of the theme colors', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <LineChart width={400} height={400} data={[{ name: 'a', value: 100, fill: 'red' }]}>
            <Line dataKey="value" isAnimationActive={false} />
            <Tooltip defaultIndex={0} />
          </LineChart>
        </RechartsThemeProvider>,
      );

      const dot = container.querySelector('.recharts-line-dot');
      expect(dot).toHaveAttribute('fill', 'red');
      expect(dot).not.toHaveAttribute('stroke', 'indigo');
      expect(dot).toHaveAttribute('stroke-width', '3');
      const activeDot = getStyleAttributes(container.querySelector('.recharts-active-dot circle'));
      expect(activeDot.fill).toBe('white');
      expect(activeDot.stroke).toBe('black');
    });

    it('should use the theme for the active dot without own styles', () => {
      const { container } = renderComposed(<Line dataKey="value" isAnimationActive={false} />);
      expect(getStyleAttributes(container.querySelector('.recharts-line-curve')).stroke).toBe('indigo');
      const activeDot = getStyleAttributes(container.querySelector('.recharts-active-dot circle'));
      expect(activeDot.fill).toBe('white');
      expect(activeDot.stroke).toBe('black');
    });

    it('should keep the theme colors with only strokeDasharray', () => {
      const { container } = renderComposed(<Line dataKey="value" strokeDasharray="5 5" isAnimationActive={false} />);
      const curve = container.querySelector('.recharts-line-curve');
      expect(getStyleAttributes(curve).stroke).toBe('indigo');
      expect(curve?.getAttribute('stroke-dasharray')).toBe('5 5');
      expect(getStyleAttributes(container.querySelector('.recharts-active-dot circle')).stroke).toBe('black');
      expect(getLegendColor(container)).toBe('indigo');
    });

    it('should ignore the theme colors with an explicit stroke, and keep the theme active dot', () => {
      const { container } = renderComposed(<Line dataKey="value" stroke="red" isAnimationActive={false} />);
      const curve = getStyleAttributes(container.querySelector('.recharts-line-curve'));
      expect(curve.stroke).toBe('red');
      expect(curve['stroke-width']).toBe('3');
      const activeDot = getStyleAttributes(container.querySelector('.recharts-active-dot circle'));
      expect(activeDot.fill).toBe('white');
      expect(activeDot.stroke).toBe('black');
      expect(getLegendColor(container)).toBe('red');
    });
  });

  describe('Scatter', () => {
    it('should ignore the theme colors with an explicit fill', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <ScatterChart width={400} height={400}>
            <XAxis dataKey="name" type="category" />
            <YAxis dataKey="value" type="number" />
            <Scatter data={data} dataKey="value" fill="red" isAnimationActive={false} />
          </ScatterChart>
        </RechartsThemeProvider>,
      );
      expect(getStyleAttributes(getAllScatterPoints(container)[0])).toEqual(ownFillAttributes);
    });
  });

  describe('Radar', () => {
    it('should ignore the theme colors with an explicit stroke', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <RadarChart width={400} height={400} data={data}>
            <PolarAngleAxis dataKey="name" />
            <Radar dataKey="value" stroke="red" isAnimationActive={false} />
          </RadarChart>
        </RechartsThemeProvider>,
      );
      const polygon = getStyleAttributes(container.querySelector('.recharts-radar-polygon path'));
      expect(polygon.stroke).toBe('red');
      expect(polygon.fill).not.toBe('purple');
      expect(polygon['stroke-width']).toBe('3');
    });
  });

  describe('RadialBar', () => {
    it('should ignore the theme colors with an explicit fill', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <RadialBarChart width={400} height={400} data={data}>
            <RadialBar dataKey="value" fill="red" isAnimationActive={false} />
          </RadialBarChart>
        </RechartsThemeProvider>,
      );
      expect(getStyleAttributes(container.querySelector('.recharts-radial-bar-sector'))).toEqual(ownFillAttributes);
    });
  });

  describe('Pie', () => {
    const renderPie = (pieProps: Partial<React.ComponentProps<typeof Pie>>) =>
      rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <PieChart width={400} height={400}>
            <Pie data={data} dataKey="value" isAnimationActive={false} {...pieProps} />
            <Legend />
            <Tooltip defaultIndex={0} active />
          </PieChart>
        </RechartsThemeProvider>,
      );

    it('should apply the theme, including the active sector, without own styles', () => {
      const { container } = renderPie({});
      const sectors = container.querySelectorAll('.recharts-pie-sector path');
      expect(getStyleAttributes(sectors[0])).toEqual(themedActiveAttributes);
      expect(getStyleAttributes(sectors[1])).toEqual(themedAttributes);
    });

    it('should merge a non-color style prop with the theme, including the active sector', () => {
      const { container } = renderPie({ strokeWidth: 7 });
      const sectors = container.querySelectorAll('.recharts-pie-sector path');
      expect(getStyleAttributes(sectors[0])).toEqual({
        ...themedAttributes,
        fill: 'white',
        stroke: 'black',
        'stroke-width': '7',
      });
      expect(getStyleAttributes(sectors[1])).toEqual({ ...themedAttributes, 'stroke-width': '7' });
    });

    it('should ignore the theme colors with an explicit fill, and keep the theme active sector', () => {
      const { container } = renderPie({ fill: 'red' });
      const sectors = container.querySelectorAll('.recharts-pie-sector path');
      expect(getStyleAttributes(sectors[0])).toEqual(themedActiveAttributes);
      expect(getStyleAttributes(sectors[1])).toEqual(ownFillAttributes);
      expect(getLegendColor(container)).toBe('red');
    });
  });

  describe('Funnel', () => {
    it('should ignore the theme colors and the legacy defaults with an explicit fill', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <FunnelChart width={400} height={400}>
            <Funnel data={data} dataKey="value" fill="red" isAnimationActive={false} />
          </FunnelChart>
        </RechartsThemeProvider>,
      );
      const trapezoids = container.querySelectorAll('.recharts-trapezoid');
      expect(trapezoids).toHaveLength(3);
      trapezoids.forEach(trapezoid => expect(getStyleAttributes(trapezoid)).toEqual(ownFillAttributes));
    });

    it('should merge a non-color style prop with the theme', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <FunnelChart width={400} height={400}>
            <Funnel data={data} dataKey="value" strokeWidth={7} isAnimationActive={false} />
          </FunnelChart>
        </RechartsThemeProvider>,
      );
      const trapezoids = container.querySelectorAll('.recharts-trapezoid');
      expect(trapezoids).toHaveLength(3);
      trapezoids.forEach(trapezoid =>
        expect(getStyleAttributes(trapezoid)).toEqual({ ...themedAttributes, 'stroke-width': '7' }),
      );
    });
  });
});
