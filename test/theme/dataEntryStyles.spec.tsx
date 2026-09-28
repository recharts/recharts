import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  Bar,
  BarChart,
  Cell,
  Funnel,
  FunnelChart,
  Pie,
  PieChart,
  RadialBar,
  RadialBarChart,
  RechartsThemeProvider,
  Scatter,
  ScatterChart,
  Tooltip,
  Treemap,
  XAxis,
  YAxis,
} from '../../src';
import { RechartsTheme } from '../../src/theme/RechartsTheme';
import {
  getEntryStyleOverrides,
  getOwnStylesWithFallback,
  getUnthemedStyles,
  hasOwnStyles,
} from '../../src/theme/dataEntryStyles';
import { rechartsTestRender } from '../helper/createSelectorTestCase';
import { getAllBarPaths } from '../helper/expectBars';
import { getAllScatterPoints } from '../helper/expectScatterPoints';

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

/**
 * The first entry has its own fill, the second entry has no styles and should keep the theme,
 * the third entry has its own stroke only.
 */
const data = [
  { name: 'own fill', value: 100, fill: 'gold' },
  { name: 'themed', value: 80 },
  { name: 'own stroke', value: 60, stroke: 'red' },
];

const dataWithoutStyles = data.map(({ name, value }) => ({ name, value }));

type StyleAttributes = {
  fill: string | null;
  'fill-opacity': string | null;
  stroke: string | null;
  'stroke-width': string | null;
};

function getStyleAttributes(element: Element): StyleAttributes {
  return {
    fill: element.getAttribute('fill'),
    'fill-opacity': element.getAttribute('fill-opacity'),
    stroke: element.getAttribute('stroke'),
    'stroke-width': element.getAttribute('stroke-width'),
  };
}

const themedAttributes: StyleAttributes = {
  fill: 'purple',
  'fill-opacity': '0.5',
  stroke: 'indigo',
  'stroke-width': '3',
};

const ownFillAttributes: StyleAttributes = {
  fill: 'gold',
  'fill-opacity': null,
  stroke: null,
  'stroke-width': null,
};

const ownStrokeAttributes: StyleAttributes = {
  fill: null,
  'fill-opacity': null,
  stroke: 'red',
  'stroke-width': null,
};

function queryAll(container: Element, selector: string): ReadonlyArray<StyleAttributes> {
  return Array.from(container.querySelectorAll(selector)).map(getStyleAttributes);
}

describe('hasOwnStyles', () => {
  it('should return false for values that are not objects', () => {
    expect(hasOwnStyles(undefined)).toBe(false);
    expect(hasOwnStyles(null)).toBe(false);
    expect(hasOwnStyles(7)).toBe(false);
    expect(hasOwnStyles('fill')).toBe(false);
  });

  it('should return false for objects without style properties', () => {
    expect(hasOwnStyles({ name: 'a', value: 1 })).toBe(false);
    expect(hasOwnStyles({ fill: undefined, stroke: null })).toBe(false);
  });

  it.each(['fill', 'fillOpacity', 'stroke', 'strokeOpacity', 'strokeWidth', 'strokeDasharray'])(
    'should return true when %s is defined',
    key => {
      expect(hasOwnStyles({ [key]: 0 })).toBe(true);
    },
  );
});

describe('getUnthemedStyles', () => {
  it('should return all style keys, including the undefined ones', () => {
    expect(getUnthemedStyles({ stroke: 'red' })).toEqual({
      fill: undefined,
      fillOpacity: undefined,
      stroke: 'red',
      strokeOpacity: undefined,
      strokeWidth: undefined,
      strokeDasharray: undefined,
    });
    expect(Object.keys(getUnthemedStyles({}))).toHaveLength(6);
  });
});

describe('getEntryStyleOverrides', () => {
  const unthemedStyles = getUnthemedStyles({ strokeWidth: 2 });

  it('should return undefined without a theme', () => {
    expect(getEntryStyleOverrides({ fill: 'gold' }, undefined)).toBe(undefined);
  });

  it('should return undefined for entries without own styles', () => {
    expect(getEntryStyleOverrides({ value: 1 }, unthemedStyles)).toBe(undefined);
  });

  it('should return the unthemed styles for entries with own styles', () => {
    expect(getEntryStyleOverrides({ fill: 'gold' }, unthemedStyles)).toBe(unthemedStyles);
  });
});

describe('getOwnStylesWithFallback', () => {
  it('should prefer entry styles and fall back to the unthemed styles', () => {
    expect(getOwnStylesWithFallback({ fill: 'gold' }, getUnthemedStyles({ fill: 'blue', strokeWidth: 2 }))).toEqual({
      fill: 'gold',
      fillOpacity: undefined,
      stroke: undefined,
      strokeOpacity: undefined,
      strokeWidth: 2,
      strokeDasharray: undefined,
    });
  });
});

describe('graphical items with styles defined in data', () => {
  describe('Bar', () => {
    const renderBar = (barProps: Partial<React.ComponentProps<typeof Bar>>, chartData = data) =>
      rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <BarChart width={400} height={400} data={chartData}>
            <Bar dataKey="value" isAnimationActive={false} {...barProps} />
          </BarChart>
        </RechartsThemeProvider>,
      );

    it('should ignore the theme for entries that define their own styles', () => {
      const { container } = renderBar({});
      expect(Array.from(getAllBarPaths(container)).map(getStyleAttributes)).toEqual([
        ownFillAttributes,
        themedAttributes,
        ownStrokeAttributes,
      ]);
    });

    it('should keep explicit props for entries that define their own styles', () => {
      const { container } = renderBar({ strokeWidth: 2 });
      expect(getStyleAttributes(getAllBarPaths(container)[0])).toEqual({ ...ownFillAttributes, 'stroke-width': '2' });
    });

    it('should treat Cell styles the same as data styles', () => {
      const { container } = renderBar(
        {
          children: [<Cell key="0" fill="gold" />, <Cell key="1" />, <Cell key="2" stroke="red" />],
        },
        dataWithoutStyles,
      );
      expect(Array.from(getAllBarPaths(container)).map(getStyleAttributes)).toEqual([
        ownFillAttributes,
        themedAttributes,
        ownStrokeAttributes,
      ]);
    });

    it('should not change anything without a theme', () => {
      const { container } = rechartsTestRender(
        <BarChart width={400} height={400} data={data}>
          <Bar dataKey="value" isAnimationActive={false} stroke="black" />
        </BarChart>,
      );
      expect(getStyleAttributes(getAllBarPaths(container)[0])).toEqual({ ...ownFillAttributes, stroke: 'black' });
    });
  });

  describe('RadialBar', () => {
    it('should ignore the theme for entries that define their own styles', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <RadialBarChart width={400} height={400} data={data}>
            <RadialBar dataKey="value" isAnimationActive={false} />
          </RadialBarChart>
        </RechartsThemeProvider>,
      );
      expect(queryAll(container, '.recharts-radial-bar-sector')).toEqual([
        ownFillAttributes,
        themedAttributes,
        ownStrokeAttributes,
      ]);
    });
  });

  describe('Scatter', () => {
    it('should ignore the theme for entries that define their own styles', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <ScatterChart width={400} height={400}>
            <XAxis dataKey="name" type="category" />
            <YAxis dataKey="value" type="number" />
            <Scatter data={data} dataKey="value" isAnimationActive={false} />
          </ScatterChart>
        </RechartsThemeProvider>,
      );
      expect(Array.from(getAllScatterPoints(container)).map(getStyleAttributes)).toEqual([
        ownFillAttributes,
        themedAttributes,
        ownStrokeAttributes,
      ]);
    });
  });

  describe('Pie', () => {
    const renderPie = (pieProps: Partial<React.ComponentProps<typeof Pie>>, children?: React.ReactNode) =>
      rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <PieChart width={400} height={400}>
            <Pie data={data} dataKey="value" isAnimationActive={false} {...pieProps} />
            {children}
          </PieChart>
        </RechartsThemeProvider>,
      );

    it('should ignore the theme and the legacy defaults for entries that define their own styles', () => {
      const { container } = renderPie({});
      expect(queryAll(container, '.recharts-pie-sector path')).toEqual([
        ownFillAttributes,
        themedAttributes,
        ownStrokeAttributes,
      ]);
    });

    it('should keep explicit props for entries that define their own styles', () => {
      const { container } = renderPie({ stroke: 'white', fill: 'blue' });
      expect(queryAll(container, '.recharts-pie-sector path')).toEqual([
        { ...ownFillAttributes, stroke: 'white' },
        { ...themedAttributes, fill: 'blue', stroke: 'white' },
        { ...ownStrokeAttributes, fill: 'blue' },
      ]);
    });

    it('should not apply the active theme to entries that define their own styles', () => {
      const { container } = renderPie({}, <Tooltip defaultIndex={0} />);
      expect(getStyleAttributes(container.querySelectorAll('.recharts-pie-sector path')[0])).toEqual(ownFillAttributes);
    });

    it('should apply the active theme to entries without own styles', () => {
      const { container } = renderPie({}, <Tooltip defaultIndex={1} />);
      expect(getStyleAttributes(container.querySelectorAll('.recharts-pie-sector path')[1])).toEqual({
        ...themedAttributes,
        fill: 'white',
        stroke: 'black',
      });
    });

    it('should keep the legacy behavior without a theme', () => {
      const { container } = rechartsTestRender(
        <PieChart width={400} height={400}>
          <Pie data={data} dataKey="value" isAnimationActive={false} />
        </PieChart>,
      );
      expect(getStyleAttributes(container.querySelectorAll('.recharts-pie-sector path')[0])).toEqual({
        ...ownFillAttributes,
        stroke: '#fff',
      });
    });
  });

  describe('Funnel', () => {
    it('should ignore the theme and the legacy defaults for entries that define their own styles', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <FunnelChart width={400} height={400}>
            <Funnel data={data} dataKey="value" isAnimationActive={false} />
          </FunnelChart>
        </RechartsThemeProvider>,
      );
      expect(queryAll(container, '.recharts-trapezoid')).toEqual([
        ownFillAttributes,
        themedAttributes,
        ownStrokeAttributes,
      ]);
    });

    it('should treat Cell styles the same as data styles', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <FunnelChart width={400} height={400}>
            <Funnel data={dataWithoutStyles} dataKey="value" isAnimationActive={false}>
              <Cell fill="gold" />
              <Cell />
              <Cell stroke="red" />
            </Funnel>
          </FunnelChart>
        </RechartsThemeProvider>,
      );
      expect(queryAll(container, '.recharts-trapezoid')).toEqual([
        ownFillAttributes,
        themedAttributes,
        ownStrokeAttributes,
      ]);
    });
  });

  describe('Treemap', () => {
    it('should ignore the theme for nodes that define their own styles', () => {
      // Treemap renders its id on every node, so it cannot use rechartsTestRender which asserts unique ids
      const { container } = render(
        <RechartsThemeProvider value={theme}>
          <Treemap width={400} height={400} data={data} dataKey="value" nameKey="name" isAnimationActive={false} />
        </RechartsThemeProvider>,
      );
      const nodes = queryAll(container, '.recharts-treemap-depth-1 .recharts-rectangle');
      expect(nodes).toHaveLength(3);
      expect(nodes).toContainEqual(ownFillAttributes);
      // Treemap only takes fill and stroke from the theme
      expect(nodes).toContainEqual({ ...themedAttributes, 'fill-opacity': null, 'stroke-width': null });
      expect(nodes).toContainEqual(ownStrokeAttributes);
    });
  });
});
