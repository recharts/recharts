import React, { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { act, fireEvent } from '@testing-library/react';
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
  RechartsTheme,
  RechartsThemeProvider,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from '../../src';
import { getActiveStyleOverrides, resolveThemedActiveStyles } from '../../src/theme/activeStyles';
import { rechartsTestRender } from '../helper/createSelectorTestCase';
import { assertNotNull } from '../helper/assertNotNull';

const theme: RechartsTheme = {
  graphicalItems: [
    { fill: 'purple', stroke: 'indigo', active: { fill: 'white', stroke: 'crimson', strokeWidth: 3 } },
    { fill: 'teal', stroke: 'navy', active: { fill: 'black', stroke: 'orange', strokeWidth: 5 } },
  ],
};

const data = [
  { name: 'A', x: 1, y: 10, value: 30 },
  { name: 'B', x: 2, y: 20, value: 20 },
  { name: 'C', x: 3, y: 30, value: 10 },
];

const dataWithOwnStyles = [data[0], { ...data[1], fill: 'gold' }, data[2]];

function renderActiveShape(chart: ReactNode, activeTheme: RechartsTheme | undefined = theme): SVGPathElement {
  const { container } = rechartsTestRender(<RechartsThemeProvider value={activeTheme}>{chart}</RechartsThemeProvider>);
  // Funnel does not read the Tooltip defaultIndex, so we hover over the trapezoid instead.
  // https://github.com/recharts/recharts/issues/7945
  const trapezoid = container.querySelectorAll('.recharts-funnel-trapezoid')[1];
  if (trapezoid != null) {
    fireEvent.mouseEnter(trapezoid);
  }
  // Bar switches to the active state one animation frame after the Tooltip becomes active.
  act(() => {
    vi.runOnlyPendingTimers();
  });
  const activeShapes = container.querySelectorAll<SVGPathElement>(
    '.recharts-active-shape path, .recharts-active-bar path',
  );
  expect(activeShapes).toHaveLength(1);
  const activeShape = activeShapes[0];
  assertNotNull(activeShape);
  return activeShape;
}

type ActiveOption = boolean | Record<string, unknown> | (() => React.ReactElement);
type ChartOptions = {
  active: ActiveOption;
  itemProps?: { fill?: string; stroke?: string; strokeWidth?: number };
  chartData?: ReadonlyArray<object>;
  cell?: boolean;
};

/**
 * Renders a child for each data entry, where only the active one (index 1) has a Cell with its own styles.
 */
const cells = () => data.map((entry, index) => <Cell key={entry.name} {...(index === 1 ? { fill: 'gold' } : {})} />);

const customShape = () => (
  <g className="custom-shape">
    <path fill="lime" />
  </g>
);

/*
 * All charts make the data entry at index 1 active.
 * `expected` is the `active` slice of the theme that the active shape should receive:
 * Bar, Scatter, and RadialBar select the theme by dataKey, which is the first slice for a single graphical item.
 * Pie and Funnel select the theme by the index of the data entry.
 */
const testCases: ReadonlyArray<{
  name: string;
  expected: { fill: string; stroke: string; strokeWidth: string };
  inactive: { fill: string; stroke: string };
  renderChart: (options: ChartOptions) => ReactNode;
}> = [
  {
    name: 'Bar',
    expected: { fill: 'white', stroke: 'crimson', strokeWidth: '3' },
    inactive: { fill: 'purple', stroke: 'indigo' },
    renderChart: ({ active, itemProps, chartData = data, cell }) => (
      <BarChart width={400} height={400} data={chartData}>
        <Bar dataKey="value" isAnimationActive={false} activeBar={active} {...itemProps}>
          {cell && cells()}
        </Bar>
        <Tooltip defaultIndex={1} />
      </BarChart>
    ),
  },
  {
    name: 'Scatter',
    expected: { fill: 'white', stroke: 'crimson', strokeWidth: '3' },
    inactive: { fill: 'purple', stroke: 'indigo' },
    renderChart: ({ active, itemProps, chartData = data, cell }) => (
      <ScatterChart width={400} height={400}>
        <XAxis dataKey="x" type="number" />
        <YAxis dataKey="y" type="number" />
        <Scatter data={chartData} dataKey="y" isAnimationActive={false} activeShape={active} {...itemProps}>
          {cell && cells()}
        </Scatter>
        <Tooltip defaultIndex={1} />
      </ScatterChart>
    ),
  },
  {
    name: 'RadialBar',
    expected: { fill: 'white', stroke: 'crimson', strokeWidth: '3' },
    inactive: { fill: 'purple', stroke: 'indigo' },
    renderChart: ({ active, itemProps, chartData = data, cell }) => (
      <RadialBarChart width={400} height={400} data={chartData}>
        <RadialBar dataKey="value" isAnimationActive={false} activeShape={active} {...itemProps}>
          {cell && cells()}
        </RadialBar>
        <Tooltip defaultIndex={1} />
      </RadialBarChart>
    ),
  },
  {
    name: 'Pie',
    expected: { fill: 'black', stroke: 'orange', strokeWidth: '5' },
    inactive: { fill: 'teal', stroke: 'navy' },
    renderChart: ({ active, itemProps, chartData = data, cell }) => (
      <PieChart width={400} height={400}>
        <Pie data={chartData} dataKey="value" isAnimationActive={false} activeShape={active} {...itemProps}>
          {cell && cells()}
        </Pie>
        <Tooltip defaultIndex={1} />
      </PieChart>
    ),
  },
  {
    name: 'Funnel',
    expected: { fill: 'black', stroke: 'orange', strokeWidth: '5' },
    inactive: { fill: 'teal', stroke: 'navy' },
    renderChart: ({ active, itemProps, chartData = data, cell }) => (
      <FunnelChart width={400} height={400}>
        <Funnel data={chartData} dataKey="value" isAnimationActive={false} activeShape={active} {...itemProps}>
          {cell && cells()}
        </Funnel>
        <Tooltip />
      </FunnelChart>
    ),
  },
];

describe.each(testCases)('theme active styles in $name', ({ expected, inactive, renderChart }) => {
  it('applies the theme active styles when the active shape is enabled with true', () => {
    const activeShape = renderActiveShape(renderChart({ active: true }));
    expect(activeShape).toHaveAttribute('fill', expected.fill);
    expect(activeShape).toHaveAttribute('stroke', expected.stroke);
    expect(activeShape).toHaveAttribute('stroke-width', expected.strokeWidth);
  });

  it('applies the theme active styles when the active shape is an object without colors', () => {
    const activeShape = renderActiveShape(renderChart({ active: { className: 'my-active-shape' } }));
    expect(activeShape).toHaveAttribute('fill', expected.fill);
    expect(activeShape).toHaveAttribute('stroke', expected.stroke);
    expect(activeShape).toHaveAttribute('stroke-width', expected.strokeWidth);
  });

  it('merges the other styles of the active shape object with the theme active styles', () => {
    const activeShape = renderActiveShape(renderChart({ active: { strokeWidth: 9 } }));
    expect(activeShape).toHaveAttribute('fill', expected.fill);
    expect(activeShape).toHaveAttribute('stroke', expected.stroke);
    expect(activeShape).toHaveAttribute('stroke-width', '9');
  });

  it('ignores the theme active styles when the active shape is an object with its own color', () => {
    const activeShape = renderActiveShape(renderChart({ active: { fill: 'lime' } }));
    expect(activeShape).toHaveAttribute('fill', 'lime');
    expect(activeShape).toHaveAttribute('stroke', inactive.stroke);
    expect(activeShape).not.toHaveAttribute('stroke-width');
  });

  it('ignores the theme active styles when the active shape is a custom function', () => {
    const activeShape = renderActiveShape(renderChart({ active: customShape }));
    expect(activeShape).toHaveAttribute('fill', 'lime');
    expect(activeShape).not.toHaveAttribute('stroke');
  });

  it('ignores the theme, including the active styles, when the graphical item has its own color', () => {
    const activeShape = renderActiveShape(renderChart({ active: true, itemProps: { fill: 'lime' } }));
    expect(activeShape).toHaveAttribute('fill', 'lime');
    expect(activeShape).not.toHaveAttribute('stroke', expected.stroke);
    expect(activeShape).not.toHaveAttribute('stroke-width', expected.strokeWidth);
  });

  it('merges the other style props of the graphical item with the theme active styles', () => {
    const activeShape = renderActiveShape(renderChart({ active: true, itemProps: { strokeWidth: 9 } }));
    expect(activeShape).toHaveAttribute('fill', expected.fill);
    expect(activeShape).toHaveAttribute('stroke', expected.stroke);
    expect(activeShape).toHaveAttribute('stroke-width', '9');
  });

  it('ignores the theme active styles when the data entry has its own color', () => {
    const activeShape = renderActiveShape(renderChart({ active: true, chartData: dataWithOwnStyles }));
    expect(activeShape).toHaveAttribute('fill', 'gold');
    expect(activeShape).not.toHaveAttribute('stroke', expected.stroke);
    expect(activeShape).not.toHaveAttribute('stroke-width', expected.strokeWidth);
  });

  it('ignores the theme active styles when the Cell has its own color', () => {
    const activeShape = renderActiveShape(renderChart({ active: true, cell: true }));
    expect(activeShape).toHaveAttribute('fill', 'gold');
    expect(activeShape).not.toHaveAttribute('stroke', expected.stroke);
    expect(activeShape).not.toHaveAttribute('stroke-width', expected.strokeWidth);
  });

  it('keeps the inactive styles when the theme has no active styles', () => {
    const themeWithoutActive: RechartsTheme = {
      graphicalItems: theme.graphicalItems.map(({ fill, stroke }) => ({ fill, stroke })),
    };
    const activeShape = renderActiveShape(renderChart({ active: true }), themeWithoutActive);
    expect(activeShape).toHaveAttribute('fill', inactive.fill);
    expect(activeShape).toHaveAttribute('stroke', inactive.stroke);
  });
});

describe('theme active styles in Bar with a custom shape', () => {
  it('ignores the theme active styles when activeBar is true and the shape is a custom function', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider value={theme}>
        <BarChart width={400} height={400} data={data}>
          <Bar
            dataKey="value"
            isAnimationActive={false}
            activeBar
            shape={({ fill, stroke }) => <path className="custom-bar" fill={fill} stroke={stroke} />}
          />
          <Tooltip defaultIndex={1} />
        </BarChart>
      </RechartsThemeProvider>,
    );
    act(() => {
      vi.runOnlyPendingTimers();
    });
    const activeBar = container.querySelector('.recharts-active-bar .custom-bar');
    assertNotNull(activeBar);
    expect(activeBar).toHaveAttribute('fill', 'purple');
    expect(activeBar).toHaveAttribute('stroke', 'indigo');
  });
});

describe('resolveThemedActiveStyles', () => {
  const activeStyle = { fill: 'white', stroke: 'black', strokeWidth: 2 };

  it('returns undefined without active styles', () => {
    expect(resolveThemedActiveStyles(undefined, {})).toBeUndefined();
  });

  it.each([undefined, null, {}, { r: 5 }])('returns the active styles as they are for %j', ownStyles => {
    expect(resolveThemedActiveStyles(activeStyle, ownStyles)).toBe(activeStyle);
  });

  it.each([{ fill: 'red' }, { stroke: 'red' }, { fill: 'red', strokeWidth: 5 }])(
    'returns undefined when own styles have a color: %j',
    ownStyles => {
      expect(resolveThemedActiveStyles(activeStyle, ownStyles)).toBeUndefined();
    },
  );

  it('leaves out the styles that own styles override', () => {
    expect(resolveThemedActiveStyles(activeStyle, { strokeWidth: 5, fillOpacity: 0.5 })).toEqual({
      fill: 'white',
      stroke: 'black',
    });
  });
});

describe('getActiveStyleOverrides', () => {
  const styles = { fill: 'white', strokeWidth: 2 };

  it.each([true, {}, { className: 'active' }])('returns the theme styles for %j', option => {
    expect(getActiveStyleOverrides(option, styles)).toBe(styles);
  });

  it.each([false, undefined, null, { fill: 'red' }, { stroke: 'red' }, () => null, <g key="element" />])(
    'returns undefined for %j',
    option => {
      expect(getActiveStyleOverrides(option, styles)).toBeUndefined();
    },
  );

  it('leaves out the styles that the option object overrides', () => {
    expect(getActiveStyleOverrides({ strokeWidth: 5 }, styles)).toEqual({ fill: 'white' });
  });

  it('returns undefined when the data entry or the Cell have their own color', () => {
    expect(getActiveStyleOverrides(true, styles, { fill: 'red' })).toBeUndefined();
    expect(getActiveStyleOverrides(true, styles, {}, { stroke: 'red' })).toBeUndefined();
  });

  it('leaves out the styles that the data entry overrides', () => {
    expect(getActiveStyleOverrides(true, styles, { strokeWidth: 5 }, undefined)).toEqual({ fill: 'white' });
  });

  it('returns undefined without theme styles', () => {
    expect(getActiveStyleOverrides(true, undefined, {})).toBeUndefined();
  });
});
