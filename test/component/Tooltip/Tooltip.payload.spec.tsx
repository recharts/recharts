import React, { ComponentType, ReactNode } from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
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
  Sankey,
  Scatter,
  ScatterChart,
  SunburstChart,
  Tooltip,
  Treemap,
  XAxis,
  YAxis,
} from '../../../src';
import { expectTooltipPayload, showTooltip } from './tooltipTestHelpers';
import { exampleSunburstData, exampleTreemapData, PageData, exampleSankeyData } from '../../_data';
import {
  areaChartMouseHoverTooltipSelector,
  barChartMouseHoverTooltipSelector,
  barMouseHoverTooltipSelector,
  composedChartMouseHoverTooltipSelector,
  funnelChartMouseHoverTooltipSelector,
  lineChartMouseHoverTooltipSelector,
  MouseHoverTooltipTriggerSelector,
  pieChartMouseHoverTooltipSelector,
  radarChartMouseHoverTooltipSelector,
  radialBarChartMouseHoverTooltipSelector,
  radialBarMouseHoverTooltipSelector,
  sankeyChartMouseHoverTooltipSelector,
  sankeyNodeChartMouseHoverTooltipSelector,
  sunburstChartMouseHoverTooltipSelector,
  treemapNodeChartMouseHoverTooltipSelector,
} from './tooltipMouseHoverSelectors';

type TooltipPayloadTestCase = {
  // Identify which test is running
  name: string;
  mouseHoverSelector: MouseHoverTooltipTriggerSelector;
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
  mouseHoverSelector: areaChartMouseHoverTooltipSelector,
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
  mouseHoverSelector: areaChartMouseHoverTooltipSelector,
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
  mouseHoverSelector: barChartMouseHoverTooltipSelector,
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
  mouseHoverSelector: lineChartMouseHoverTooltipSelector,
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
  mouseHoverSelector: lineChartMouseHoverTooltipSelector,
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
  mouseHoverSelector: composedChartMouseHoverTooltipSelector,
  expectedTooltipTitle: '2',
  expectedTooltipContent: ['uv : 300kg', 'My custom name : 1398$$$', 'amt : 2400'],
};

const PieChartTestCase: TooltipPayloadTestCase = {
  name: 'PieChart',
  Wrapper: ({ children }) => (
    <PieChart {...commonChartProps}>
      {/* Pie does not have a unit it appears? Also, the `name` prop doesn't do anything */}
      <Pie isAnimationActive={false} data={PageData} dataKey="uv" name="My custom name" />
      {/* PieChart tooltip always only renders one value, so these should stay out of the content */}
      <Pie isAnimationActive={false} data={PageData} dataKey="pv" name="My custom name" />
      <Pie isAnimationActive={false} data={PageData} dataKey="amt" name="My custom name" />
      {children}
    </PieChart>
  ),
  mouseHoverSelector: pieChartMouseHoverTooltipSelector,
  expectedTooltipTitle: '',
  expectedTooltipContent: ['Page A : 400'],
};

const FunnelChartTestCase: TooltipPayloadTestCase = {
  name: 'FunnelChart',
  Wrapper: ({ children }) => (
    <FunnelChart width={700} height={500}>
      <Funnel
        isAnimationActive={false}
        dataKey="uv"
        nameKey="name"
        name="This is not going to the tooltip title unfortunately"
        data={PageData}
      />
      {children}
    </FunnelChart>
  ),
  mouseHoverSelector: funnelChartMouseHoverTooltipSelector,
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
  mouseHoverSelector: pieChartMouseHoverTooltipSelector,
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
  mouseHoverSelector: radarChartMouseHoverTooltipSelector,
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
  mouseHoverSelector: radarChartMouseHoverTooltipSelector,
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
  mouseHoverSelector: radialBarChartMouseHoverTooltipSelector,
  // I cannot figure out how to make RadialBar display anything else other than the index
  expectedTooltipTitle: '4',
  expectedTooltipContent: ['uv : 278', 'My custom name : 3908', 'amt : 2400'],
};

const SankeyNodeHoverTestCase: TooltipPayloadTestCase = {
  name: 'Sankey Node hover',
  Wrapper: ({ children }) => (
    <Sankey height={600} width={600} data={exampleSankeyData}>
      {children}
    </Sankey>
  ),
  mouseHoverSelector: sankeyNodeChartMouseHoverTooltipSelector,
  expectedTooltipTitle: '',
  expectedTooltipContent: ['Agricultural waste : 124.729'],
};

const SankeyLinkHoverTestCase: TooltipPayloadTestCase = {
  name: 'Sankey Link hover',
  Wrapper: ({ children }) => (
    <Sankey height={600} width={600} data={exampleSankeyData}>
      {children}
    </Sankey>
  ),
  mouseHoverSelector: sankeyChartMouseHoverTooltipSelector,
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SunburstChartTestCase: TooltipPayloadTestCase = {
  name: 'SunburstChart',
  Wrapper: ({ children }) => (
    <SunburstChart width={400} height={400} data={exampleSunburstData}>
      {children}
    </SunburstChart>
  ),
  mouseHoverSelector: sunburstChartMouseHoverTooltipSelector,
  expectedTooltipTitle: '',
  expectedTooltipContent: ['Child1 : 30'],
};

const TreemapTestCase: TooltipPayloadTestCase = {
  name: 'Treemap',
  Wrapper: ({ children }) => (
    <Treemap
      width={400}
      height={400}
      data={exampleTreemapData}
      dataKey="value"
      nameKey="name"
      stroke="#fff"
      fill="#8884d8"
    >
      {children}
    </Treemap>
  ),
  mouseHoverSelector: treemapNodeChartMouseHoverTooltipSelector,
  expectedTooltipTitle: '',
  expectedTooltipContent: ['U : 12490887132'],
};

const testCases: ReadonlyArray<TooltipPayloadTestCase> = [
  AreaChartTestCase,
  AreaChartWithXAxisTestCase,
  BarChartTestCase,
  LineChartTestCase,
  LineChartVerticalTestCase,
  ComposedChartTestCase,
  FunnelChartTestCase,
  PieChartTestCase,
  PieChartWithCustomNameKeyTestCase,
  RadarChartTestCase,
  RadarChartWithAxisTestCase,
  RadialBarChartTestCase,
  SankeyNodeHoverTestCase,
  SankeyLinkHoverTestCase,
  ScatterChartTestCase,
  SunburstChartTestCase,
  TreemapTestCase,
];

describe('Tooltip payload', () => {
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

  /*
   * I cannot find any meaningful difference that the payloadUniqBy prop makes.
   * If you can think of a test case please add.
   */
  describe.todo('payloadUniqBy prop');

  it('should contain payload data from multiple datasets', () => {
    const lineData1 = [
      { category: 'A', value: 0.2 },
      { category: 'B', value: 0.3 },
      { category: 'B', value: 0.5 },
      { category: 'C', value: 0.6 },
      { category: 'C', value: 0.7 },
      { category: 'D', value: 0.4 },
    ];

    const lineData2 = [
      { category: 'A', value: null },
      { category: 'B', value: null },
      { category: 'B', value: null },
      { category: 'C', value: 0.2 },
      { category: 'C', value: 0.4 },
      { category: 'D', value: 0.6 },
    ];

    const { container, debug } = render(
      <div role="main" style={{ width: '400px', height: '400px' }}>
        <ComposedChart width={400} height={400}>
          <XAxis dataKey="category" type="category" />
          <YAxis dataKey="value" />
          <Tooltip />

          <Line dataKey="value" data={lineData1} />
          <Line dataKey="value" data={lineData2} />
        </ComposedChart>
      </div>,
    );

    showTooltip(container, ComposedChartTestCase.mouseHoverSelector, debug);

    expectTooltipPayload(container, 'C', ['value : 0.7', 'value : 0.4']);
  });

  describe('shared prop', () => {
    describe('in BarChart', () => {
      it('when true, should render tooltip payload with data from all Bars', () => {
        const { container, debug } = render(
          <BarChart {...commonChartProps} data={PageData}>
            <Bar dataKey="uv" unit="kg" />
            <Bar dataKey="pv" unit="$$$" name="My custom name" />
            <Bar dataKey="amt" unit="" />
            <Tooltip shared />
          </BarChart>,
        );

        showTooltip(container, barChartMouseHoverTooltipSelector, debug);

        const expectedTooltipTitle = '2';
        const expectedTooltipContent = ['uv : 300kg', 'My custom name : 1398$$$', 'amt : 2400'];
        expectTooltipPayload(container, expectedTooltipTitle, expectedTooltipContent);
      });

      it('when false, should render tooltip payload with data from single Bar', () => {
        const { container, debug } = render(
          <BarChart {...commonChartProps} data={PageData}>
            <Bar dataKey="uv" unit="kg" />
            <Bar dataKey="pv" unit="$$$" name="My custom name" />
            <Bar dataKey="amt" unit="" />
            <Tooltip shared={false} />
          </BarChart>,
        );

        showTooltip(container, barMouseHoverTooltipSelector, debug);

        const expectedTooltipTitle = '';
        const expectedTooltipContent = ['uv : 400kg'];
        expectTooltipPayload(container, expectedTooltipTitle, expectedTooltipContent);
      });
    });

    describe('in RadialBarChart', () => {
      it('when true, should render tooltip payload with data from all Bars', () => {
        const { container, debug } = render(
          <RadialBarChart height={600} width={600} data={PageData}>
            <RadialBar dataKey="uv" />
            <RadialBar dataKey="pv" name="My custom name" />
            <RadialBar dataKey="amt" />
            <Tooltip shared />
          </RadialBarChart>,
        );

        showTooltip(container, radialBarChartMouseHoverTooltipSelector, debug);

        const expectedTooltipTitle = '4';
        const expectedTooltipContent = ['uv : 278', 'My custom name : 3908', 'amt : 2400'];
        expectTooltipPayload(container, expectedTooltipTitle, expectedTooltipContent);
      });

      it('when false, should render tooltip payload with data from single Bar', () => {
        const { container, debug } = render(
          <RadialBarChart height={600} width={600} data={PageData}>
            <RadialBar dataKey="uv" isAnimationActive={false} />
            <RadialBar dataKey="pv" name="My custom name" isAnimationActive={false} />
            <RadialBar dataKey="amt" isAnimationActive={false} />
            <Tooltip shared={false} />
          </RadialBarChart>,
        );

        showTooltip(container, radialBarMouseHoverTooltipSelector, debug);

        const expectedTooltipTitle = '';
        const expectedTooltipContent = ['uv : 400'];
        expectTooltipPayload(container, expectedTooltipTitle, expectedTooltipContent);
      });
    });
  });
});
