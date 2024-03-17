import React, { ComponentType, ReactNode } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart,
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
  Sankey,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from '../../../src';
import { restoreGetBoundingClientRect } from '../../helper/mockGetBoundingClientRect';
import { getTooltip, showTooltip } from './tooltipTestHelpers';
import { PageData, SankeyData } from '../../_data';

type TooltipPayloadTestCase = {
  // Identify which test is running
  name: string;
  mouseHoverSelector: string;
  Wrapper: ComponentType<{ children: ReactNode }>;
  expectedTooltipTitle: string;
  expectedTooltipContent: ReadonlyArray<string>;
};

const commonChartProps = {
  width: 400,
  height: 400,
};

const AreaChartTestCase: TooltipPayloadTestCase = {
  name: 'AreaChart',
  Wrapper: ({ children }) => (
    <AreaChart {...commonChartProps} data={PageData}>
      <Area dataKey="uv" unit="kg" />
      <Area dataKey="pv" unit="$$$" name="My custom name" />
      <Area dataKey="amt" />
      {children}
    </AreaChart>
  ),
  mouseHoverSelector: '.recharts-wrapper',
  expectedTooltipTitle: '2',
  expectedTooltipContent: ['uv : 300kg', 'My custom name : 1398$$$', 'amt : 2400'],
};

const AreaChartWithXAxisTestCase: TooltipPayloadTestCase = {
  name: 'AreaChart with XAxis',
  Wrapper: ({ children }) => (
    <AreaChart {...commonChartProps} data={PageData}>
      <Area dataKey="uv" unit="kg" />
      <Area dataKey="pv" unit="$$$" name="My custom name" />
      <Area dataKey="amt" />
      {/* XAxis dataKey becomes the tooltip title */}
      <XAxis dataKey="name" />
      {children}
    </AreaChart>
  ),
  mouseHoverSelector: '.recharts-wrapper',
  expectedTooltipTitle: 'Page C',
  expectedTooltipContent: ['uv : 300kg', 'My custom name : 1398$$$', 'amt : 2400'],
};

const BarChartTestCase: TooltipPayloadTestCase = {
  name: 'BarChart',
  Wrapper: ({ children }) => (
    <BarChart {...commonChartProps} data={PageData}>
      <Bar dataKey="uv" unit="kg" />
      <Bar dataKey="pv" unit="$$$" name="My custom name" />
      <Bar dataKey="amt" unit="" />
      {children}
    </BarChart>
  ),
  mouseHoverSelector: '.recharts-wrapper',
  expectedTooltipTitle: '2',
  expectedTooltipContent: ['uv : 300kg', 'My custom name : 1398$$$', 'amt : 2400'],
};

const LineChartTestCase: TooltipPayloadTestCase = {
  name: 'LineChart',
  Wrapper: ({ children }) => (
    <LineChart {...commonChartProps} data={PageData}>
      <Line dataKey="uv" unit="kg" />
      <Line dataKey="pv" unit="$$$" name="My custom name" />
      <Line dataKey="amt" unit={null} />
      {children}
    </LineChart>
  ),
  mouseHoverSelector: '.recharts-wrapper',
  expectedTooltipTitle: '2',
  expectedTooltipContent: ['uv : 300kg', 'My custom name : 1398$$$', 'amt : 2400'],
};

const LineChartVerticalTestCase: TooltipPayloadTestCase = {
  name: 'vertical LineChart',
  Wrapper: ({ children }) => (
    <LineChart layout="vertical" {...commonChartProps} data={PageData}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      {children}
      <Legend />
      <Line dataKey="uv" unit="kg" />
      <Line dataKey="pv" name="My custom name" unit="$$$" />
      <Line dataKey="amt" unit={undefined} />
    </LineChart>
  ),
  mouseHoverSelector: '.recharts-wrapper',
  expectedTooltipTitle: '1',
  expectedTooltipContent: ['uv : 300kg', 'My custom name : 4567$$$', 'amt : 2400'],
};

const ComposedChartTestCase: TooltipPayloadTestCase = {
  name: 'ComposedChart',
  Wrapper: ({ children }) => (
    <ComposedChart {...commonChartProps} data={PageData}>
      {children}
      <Area dataKey="uv" unit="kg" />
      <Bar dataKey="pv" name="My custom name" unit="$$$" />
      <Line dataKey="amt" unit={undefined} />
    </ComposedChart>
  ),
  mouseHoverSelector: '.recharts-wrapper',
  expectedTooltipTitle: '2',
  expectedTooltipContent: ['uv : 300kg', 'My custom name : 1398$$$', 'amt : 2400'],
};

const PieChartTestCase: TooltipPayloadTestCase = {
  name: 'PieChart',
  Wrapper: ({ children }) => (
    <PieChart {...commonChartProps}>
      {/* Pie does not have a unit it appears? Also the `name` prop doesn't do anything */}
      <Pie isAnimationActive={false} data={PageData} dataKey="uv" name="My custom name" />
      {/* PieChart tooltip always only renders one value, so these should stay out of the content */}
      <Pie isAnimationActive={false} data={PageData} dataKey="pv" name="My custom name" />
      <Pie isAnimationActive={false} data={PageData} dataKey="amt" name="My custom name" />
      {children}
    </PieChart>
  ),
  mouseHoverSelector: '.recharts-pie-sector',
  expectedTooltipTitle: '',
  expectedTooltipContent: ['Page A : 400'],
};

const PieChartWithCustomNameKeyTestCase: TooltipPayloadTestCase = {
  name: 'PieChart with custom nameKey',
  Wrapper: ({ children }) => (
    <PieChart {...commonChartProps}>
      <Pie isAnimationActive={false} data={PageData} dataKey="uv" nameKey="pv" />
      <Pie isAnimationActive={false} data={PageData} dataKey="pv" name="My custom name" />
      <Pie isAnimationActive={false} data={PageData} dataKey="amt" name="My custom name" />
      {children}
    </PieChart>
  ),
  mouseHoverSelector: '.recharts-pie-sector',
  // I can't get Pie to render any tooltip title - I suppose that's a feature?
  expectedTooltipTitle: '',
  expectedTooltipContent: ['2400 : 400'],
};

const RadarChartTestCase: TooltipPayloadTestCase = {
  name: 'RadarChart',
  Wrapper: ({ children }) => (
    <RadarChart height={600} width={600} data={PageData}>
      <Radar dataKey="uv" />
      <Radar dataKey="pv" name="My custom name" />
      <Radar dataKey="amt" />
      {children}
    </RadarChart>
  ),
  mouseHoverSelector: '.recharts-wrapper',
  expectedTooltipTitle: '5',
  expectedTooltipContent: ['uv : 189', 'My custom name : 4800', 'amt : 2400'],
};

const RadarChartWithAxisTestCase: TooltipPayloadTestCase = {
  name: 'RadarChart with PolarAngleAxis',
  Wrapper: ({ children }) => (
    <RadarChart height={600} width={600} data={PageData}>
      <Radar dataKey="uv" />
      <Radar dataKey="pv" name="My custom name" />
      <Radar dataKey="amt" />
      <PolarAngleAxis dataKey="name" />
      {children}
    </RadarChart>
  ),
  mouseHoverSelector: '.recharts-wrapper',
  expectedTooltipTitle: 'Page F',
  expectedTooltipContent: ['uv : 189', 'My custom name : 4800', 'amt : 2400'],
};

const RadialBarChartTestCase: TooltipPayloadTestCase = {
  name: 'RadialBarChart',
  Wrapper: ({ children }) => (
    <RadialBarChart height={600} width={600} data={PageData}>
      <RadialBar dataKey="uv" />
      <RadialBar dataKey="pv" name="My custom name" />
      <RadialBar dataKey="amt" />
      {children}
    </RadialBarChart>
  ),
  mouseHoverSelector: '.recharts-wrapper',
  // I cannot figure out how to make RadialBar display anything else other than the index
  expectedTooltipTitle: '4',
  expectedTooltipContent: ['uv : 278', 'My custom name : 3908', 'amt : 2400'],
};

const SankeyNodeHoverTestCase: TooltipPayloadTestCase = {
  name: 'Sankey Node hover',
  Wrapper: ({ children }) => (
    <Sankey height={600} width={600} data={SankeyData}>
      {children}
    </Sankey>
  ),
  mouseHoverSelector: '.recharts-sankey-nodes .recharts-rectangle',
  expectedTooltipTitle: '',
  expectedTooltipContent: ['Agricultural waste : 124.729'],
};

const SankeyLinkHoverTestCase: TooltipPayloadTestCase = {
  name: 'Sankey Link hover',
  Wrapper: ({ children }) => (
    <Sankey height={600} width={600} data={SankeyData}>
      {children}
    </Sankey>
  ),
  mouseHoverSelector: '.recharts-sankey-links .recharts-sankey-link',
  expectedTooltipTitle: '',
  expectedTooltipContent: ['Agricultural waste - Bio-conversion : 124.729'],
};

const ScatterChartTestCase: TooltipPayloadTestCase = {
  name: 'ScatterChart',
  Wrapper: ({ children }) => (
    <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
      <XAxis dataKey="uv" name="stature" unit="cm" />
      <YAxis dataKey="pv" name="weight" unit="kg" />
      <Scatter line name="A school" data={PageData} fill="#ff7300" />
      {children}
    </ScatterChart>
  ),
  mouseHoverSelector: '.recharts-scatter-symbol',
  expectedTooltipTitle: '',
  expectedTooltipContent: ['stature : 400cm', 'weight : 2400kg'],
};

const testCases: ReadonlyArray<TooltipPayloadTestCase> = [
  AreaChartTestCase,
  AreaChartWithXAxisTestCase,
  BarChartTestCase,
  LineChartTestCase,
  LineChartVerticalTestCase,
  ComposedChartTestCase,
  PieChartTestCase,
  PieChartWithCustomNameKeyTestCase,
  RadarChartTestCase,
  RadarChartWithAxisTestCase,
  RadialBarChartTestCase,
  SankeyNodeHoverTestCase,
  SankeyLinkHoverTestCase,
  ScatterChartTestCase,
];

function expectTooltipPayload(
  container: HTMLElement,
  expectedTooltipTitle: string,
  expectedTooltipContent: ReadonlyArray<string>,
) {
  const tooltip = getTooltip(container);
  expect(tooltip).toBeInTheDocument();
  expect(tooltip).toBeVisible();
  expect.soft(tooltip.querySelector('.recharts-tooltip-label').textContent).toBe(expectedTooltipTitle);
  const tooltipItems = tooltip.querySelectorAll('.recharts-tooltip-item');
  expect.soft(Array.from(tooltipItems).map(item => item.textContent)).toEqual(expectedTooltipContent);
}

describe('Tooltip payload', () => {
  afterEach(() => {
    restoreGetBoundingClientRect();
  });

  describe.each(testCases)(
    'as a child of $name',
    ({ Wrapper, mouseHoverSelector, expectedTooltipTitle, expectedTooltipContent }) => {
      it('should render expected tooltip payload', () => {
        const { container, debug } = render(
          <Wrapper>
            <Tooltip />
          </Wrapper>,
        );

        expect(container.querySelector('.recharts-tooltip-item-name')).toBeNull();
        expect(container.querySelector('.recharts-tooltip-item-value')).toBeNull();

        showTooltip(container, mouseHoverSelector, debug);

        expectTooltipPayload(container, expectedTooltipTitle, expectedTooltipContent);
      });
    },
  );

  describe('filterNull prop', () => {
    const dataWithNulls: Array<{ x: number | null; y: number | null }> = [{ x: null, y: 2 }];
    test.each([undefined, true])('should filter away nulls when filterNull = %s', filterNull => {
      const { container, debug } = render(
        <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <XAxis dataKey="x" />
          <YAxis dataKey="y" />
          <Scatter name="A school" data={dataWithNulls} fill="#ff7300" />
          <Tooltip filterNull={filterNull} />
        </ScatterChart>,
      );

      showTooltip(container, ScatterChartTestCase.mouseHoverSelector, debug);

      expectTooltipPayload(container, '', ['y : 2']);
    });

    it('should display nulls when filterNull = false', () => {
      const { container, debug } = render(
        <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <XAxis dataKey="x" />
          <YAxis dataKey="y" />
          <Scatter name="A school" data={dataWithNulls} fill="#ff7300" />
          <Tooltip filterNull={false} />
        </ScatterChart>,
      );

      showTooltip(container, ScatterChartTestCase.mouseHoverSelector, debug);

      expectTooltipPayload(container, '', ['x : ', 'y : 2']);
    });
  });
});
