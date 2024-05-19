import React, { ComponentType, ReactNode } from 'react';
import { LayoutType } from '../../src/util/types';
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
export type ChartTestCase = {
  ChartElement: ComponentType<{
    children?: ReactNode;
    width?: number;
    height?: number;
    data?: any[];
    layout?: LayoutType;
    compact?: boolean;
    onClick?: (param: any) => void;
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

export function onlyCompact(testCases: ReadonlyArray<ChartTestCase>): ReadonlyArray<ChartTestCase> {
  return testCases.map(makeCompact);
}

export const ComposedChartCase: ChartTestCase = {
  ChartElement: props => <ComposedChart width={500} height={500} {...props} />,
  testName: 'ComposedChart',
};

export const AreaChartCase: ChartTestCase = {
  ChartElement: props => <AreaChart width={500} height={500} {...props} />,
  testName: 'AreaChart',
};

export const BarChartCase: ChartTestCase = {
  ChartElement: props => <BarChart width={500} height={500} {...props} />,
  testName: 'BarChart',
};

export const LineChartCase: ChartTestCase = {
  ChartElement: props => <LineChart width={500} height={500} {...props} />,
  testName: 'LineChart',
};

export const ScatterChartCase: ChartTestCase = {
  ChartElement: props => (
    <ScatterChart width={500} height={500} {...props}>
      <Scatter />
    </ScatterChart>
  ),
  testName: 'ScatterChart',
};

export const PieChartCase: ChartTestCase = {
  ChartElement: props => (
    <PieChart width={500} height={500} {...props}>
      <Pie data={PageData} dataKey="uv" />
    </PieChart>
  ),
  testName: 'PieChart',
};

export const RadarChartCase: ChartTestCase = {
  ChartElement: props => (
    <RadarChart width={500} height={500} {...props}>
      <Radar dataKey="pv" />
    </RadarChart>
  ),
  testName: 'RadarChart',
};

export const RadialBarChartCase: ChartTestCase = {
  ChartElement: props => (
    <RadialBarChart width={500} height={500} {...props}>
      <RadialBar dataKey="pv" />
    </RadialBarChart>
  ),
  testName: 'RadialBarChart',
};

export const FunnelChartCase: ChartTestCase = {
  ChartElement: props => <FunnelChart width={500} height={500} {...props} />,
  testName: 'FunnelChart',
};

export const TreemapChartCase: ChartTestCase = {
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

export const SankeyChartCase: ChartTestCase = {
  ChartElement: props => {
    const { data, ...rest } = props;
    return <Sankey width={400} height={400} {...rest} data={exampleSankeyData} />;
  },
  testName: 'Sankey',
};

export const SunburstChartCase: ChartTestCase = {
  ChartElement: props => {
    const { data, ...rest } = props;
    return <SunburstChart {...rest} data={exampleSunburstData} />;
  },
  testName: 'Sunburst',
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

export const allCharts: ReadonlyArray<ChartTestCase> = [].concat(
  allCategoricalChartCases,
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
export function allCategoricalsChartsExcept(exceptions: ReadonlyArray<ChartTestCase>): ReadonlyArray<ChartTestCase> {
  return allCategoricalChartCases.filter(testCase => !exceptions.includes(testCase));
}
