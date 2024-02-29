import React, { ComponentType, ReactNode } from 'react';
import { LayoutType } from '../../src/util/types';
import {
  AreaChart,
  BarChart,
  ComposedChart,
  FunnelChart,
  LineChart,
  PieChart,
  RadarChart,
  RadialBarChart,
  ScatterChart,
} from '../../src';

/**
 * This is for parameterized tests - for when you have a bunch of tests and you want to run the same tests
 * with different kinds of charts.
 */
export type ChartTestCase = {
  ChartElement: ComponentType<{
    children?: ReactNode;
    width?: number;
    height?: number;
    data?: any[];
    layout?: LayoutType;
    compact?: boolean;
  }>;
  testName: string;
};

function makeCompact({ ChartElement, testName }: ChartTestCase) {
  const compactTestCase: ChartTestCase = {
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
export function includingCompact(testCases: ReadonlyArray<ChartTestCase>): ReadonlyArray<ChartTestCase> {
  const result: ChartTestCase[] = [];
  testCases.forEach(testCase => {
    result.push(testCase);
    result.push(makeCompact(testCase));
  });
  return result;
}

export const ComposedChartCase: ChartTestCase = {
  ChartElement: ComposedChart,
  testName: 'ComposedChart',
};

export const AreaChartCase: ChartTestCase = {
  ChartElement: AreaChart,
  testName: 'AreaChart',
};

export const BarChartCase: ChartTestCase = {
  ChartElement: BarChart,
  testName: 'BarChart',
};

export const LineChartCase: ChartTestCase = {
  ChartElement: LineChart,
  testName: 'LineChart',
};

export const ScatterChartCase: ChartTestCase = {
  ChartElement: ScatterChart,
  testName: 'ScatterChart',
};

export const PieChartCase: ChartTestCase = {
  ChartElement: PieChart,
  testName: 'PieChart',
};

export const RadarChartCase: ChartTestCase = {
  ChartElement: RadarChart,
  testName: 'RadarChart',
};

export const RadialBarChartCase: ChartTestCase = {
  ChartElement: RadialBarChart,
  testName: 'RadialBarChart',
};

export const FunnelChartCase: ChartTestCase = {
  ChartElement: FunnelChart,
  testName: 'FunnelChart',
};

/**
 * All charts coming out of generateCategoricalChart.
 * Treemap and Sankey are left out because they do not
 * use generateCategoricalChart - write tests for those separately.
 */
export const allCategoricalChartCases: ReadonlyArray<ChartTestCase> = [
  ComposedChartCase,
  AreaChartCase,
  BarChartCase,
  LineChartCase,
  ScatterChartCase,
  PieChartCase,
  RadarChartCase,
  RadialBarChartCase,
  FunnelChartCase,
];

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
export function allCategoricalsChartsExcept(exceptions: ReadonlyArray<ChartTestCase>): ReadonlyArray<ChartTestCase> {
  return allCategoricalChartCases.filter(testCase => !exceptions.includes(testCase));
}
