import React, { ComponentType, ReactNode } from 'react';
import { CartesianLayout, PolarChartProps } from '../../src/util/types';
import {
  AreaChart,
  BarChart,
  ComposedChart,
  FunnelChart,
  LineChart,
  Pie,
  PieChart,
  Radar,
  RadarChart,
  RadialBar,
  RadialBarChart,
  Sankey,
  Scatter,
  ScatterChart,
  SunburstChart,
  Treemap,
} from '../../src';
import { PageData, exampleSankeyData, exampleSunburstData, exampleTreemapData } from '../_data';

/**
 * This is for parameterized tests - for when you have a bunch of tests and you want to run the same tests
 * with different kinds of charts.
 *
 * These are minimal examples that render a chart without throwing any errors.
 * Useful for basic shared interactions but if you want to test specific behaviour
 * then you probably want to write bespoke tests for that.
 */
export type CartesianChartTestCase = {
  ChartElement: ComponentType<{
    children?: ReactNode;
    width?: number;
    height?: number;
    data?: any[];
    layout?: CartesianLayout;
    compact?: boolean;
    className?: string;
    onClick?: (param: unknown) => void;
    onMouseEnter?: (param: unknown) => void;
    onMouseMove?: (param: unknown) => void;
    onMouseLeave?: (param: unknown) => void;
    onTouchStart?: (param: unknown) => void;
    onTouchMove?: (param: unknown) => void;
    onTouchEnd?: (param: unknown) => void;
  }>;
  testName: string;
};

export type PolarChartTestCase = {
  ChartElement: ComponentType<PolarChartProps>;
  testName: string;
};

function makeCompact({ ChartElement, testName }: CartesianChartTestCase) {
  const compactTestCase: CartesianChartTestCase = {
    ChartElement: props => <ChartElement {...props} compact />,
    testName: `compact ${testName}`,
  };
  return compactTestCase;
}

/**
 * Duplicates each test case into two, one regular one compact.
 *
 * Recharts has two rendering modes, one "regular" another one "compact".
 * The compact one is used when rendering a Brush - Recharts has the feature
 * to return small "baby" chart inside there, for overview.
 * There are some differences - for example, the compact version does not include Legend.
 * And it does not listen to mouse events.
 *
 * For the cases when the behaviour is the same - for example, Area, or Bar rendering -
 * this method can be useful to generate the test cases with both modes.
 *
 * @param testCases - array of test cases
 * @returns array of test cases twice the size
 */
export function includingCompact(
  testCases: ReadonlyArray<CartesianChartTestCase>,
): ReadonlyArray<CartesianChartTestCase> {
  const result: CartesianChartTestCase[] = [];
  testCases.forEach(testCase => {
    result.push(testCase);
    result.push(makeCompact(testCase));
  });
  return result;
}

export function onlyCompact(testCases: ReadonlyArray<CartesianChartTestCase>): ReadonlyArray<CartesianChartTestCase> {
  return testCases.map(makeCompact);
}

export const ComposedChartCase: CartesianChartTestCase = {
  ChartElement: props => <ComposedChart width={500} height={500} {...props} />,
  testName: 'ComposedChart',
};

export const AreaChartCase: CartesianChartTestCase = {
  ChartElement: props => <AreaChart width={500} height={500} {...props} />,
  testName: 'AreaChart',
};

export const BarChartCase: CartesianChartTestCase = {
  ChartElement: props => <BarChart width={500} height={500} {...props} />,
  testName: 'BarChart',
};

export const LineChartCase: CartesianChartTestCase = {
  ChartElement: props => <LineChart width={500} height={500} {...props} />,
  testName: 'LineChart',
};

export const ScatterChartCase: CartesianChartTestCase = {
  ChartElement: props => (
    <ScatterChart width={500} height={500} {...props}>
      <Scatter />
    </ScatterChart>
  ),
  testName: 'ScatterChart',
};

export const PieChartCase: PolarChartTestCase = {
  ChartElement: props => (
    <PieChart width={500} height={500} {...props}>
      <Pie data={PageData} dataKey="uv" />
    </PieChart>
  ),
  testName: 'PieChart',
};

export const RadarChartCase: PolarChartTestCase = {
  ChartElement: props => (
    <RadarChart width={500} height={500} {...props}>
      <Radar dataKey="pv" />
    </RadarChart>
  ),
  testName: 'RadarChart',
};

export const RadialBarChartCase: PolarChartTestCase = {
  ChartElement: props => (
    <RadialBarChart width={500} height={500} {...props}>
      <RadialBar dataKey="pv" />
    </RadialBarChart>
  ),
  testName: 'RadialBarChart',
};

export const FunnelChartCase: CartesianChartTestCase = {
  ChartElement: props => <FunnelChart width={500} height={500} {...props} />,
  testName: 'FunnelChart',
};

export const TreemapChartCase: CartesianChartTestCase = {
  ChartElement: props => (
    <Treemap
      isAnimationActive={false}
      nameKey="name"
      dataKey="value"
      type="nest"
      width={500}
      height={500}
      data={exampleTreemapData}
      {...props}
    />
  ),
  testName: 'Treemap',
};

export const SankeyChartCase: CartesianChartTestCase = {
  ChartElement: props => {
    const { data, ...rest } = props;
    return <Sankey width={400} height={400} {...rest} data={exampleSankeyData} />;
  },
  testName: 'Sankey',
};

export const SunburstChartCase: CartesianChartTestCase = {
  ChartElement: props => {
    const { data, ...rest } = props;
    return <SunburstChart {...rest} data={exampleSunburstData} />;
  },
  testName: 'Sunburst',
};

/**
 * All charts using CartesianChartProps.
 * Treemap and Sankey are left out because they use their own props system.
 */
export const allCartesianChartCases: ReadonlyArray<CartesianChartTestCase> = [
  ComposedChartCase,
  AreaChartCase,
  BarChartCase,
  LineChartCase,
  ScatterChartCase,
  FunnelChartCase,
];

export const allPolarChartCases: ReadonlyArray<PolarChartTestCase> = [PieChartCase, RadarChartCase, RadialBarChartCase];

export const allCharts: ReadonlyArray<CartesianChartTestCase> = [].concat(
  allCartesianChartCases,
  TreemapChartCase,
  SankeyChartCase,
  SunburstChartCase,
);

/**
 * For when you want to exclude certain charts from the test suite.
 * Useful for testing two sets of behaviour: my component behaves like this in these charts,
 * and behaves like this in all other charts.
 *
 * This function uses allCategoricalChartCases as the base, and removes the given exceptions.
 *
 * @param exceptions charts that will be excluded from allCategoricalChartCases
 * @returns chart test cases that are left
 */
export function allCartesianChartsExcept(
  exceptions: ReadonlyArray<CartesianChartTestCase>,
): ReadonlyArray<CartesianChartTestCase> {
  return allCartesianChartCases.filter(testCase => !exceptions.includes(testCase));
}
