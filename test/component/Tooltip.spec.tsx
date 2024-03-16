import React, { ComponentType, ReactNode, useState } from 'react';
import { afterEach, describe, expect, it, test } from 'vitest';
import { fireEvent, getByText, render } from '@testing-library/react';

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Brush,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
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
} from '../../src';
import { assertNotNull } from '../helper/assertNotNull';
import { mockGetBoundingClientRect, restoreGetBoundingClientRect } from '../helper/mockGetBoundingClientRect';
import { PageData, SankeyData } from '../_data';

type TooltipTestCase = {
  name: string;
  Wrapper: ComponentType<{ children: ReactNode }>;
};

const commonChartProps = {
  width: 400,
  height: 400,
  data: PageData,
};

const testCases: ReadonlyArray<TooltipTestCase> = [
  {
    name: 'AreaChart',
    Wrapper: ({ children }) => (
      <AreaChart {...commonChartProps}>
        <Area dataKey="uv" />
        {children}
      </AreaChart>
    ),
  },
  {
    name: 'BarChart',
    Wrapper: ({ children }) => (
      <BarChart {...commonChartProps}>
        <Bar dataKey="uv" />
        {children}
      </BarChart>
    ),
  },
  {
    name: 'horizontal LineChart',
    Wrapper: ({ children }) => (
      <LineChart {...commonChartProps}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        {children}
        <Legend />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    ),
  },
  {
    name: 'vertical LineChart',
    Wrapper: ({ children }) => (
      <LineChart
        layout="vertical"
        {...commonChartProps}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        {children}
        <Legend />
        <Line dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    ),
  },
  {
    name: 'ComposedChart with Area',
    Wrapper: ({ children }) => (
      <ComposedChart {...commonChartProps}>
        <XAxis dataKey="name" type="category" />
        <YAxis dataKey="uv" />
        {children}
        <Area dataKey="pv" />
      </ComposedChart>
    ),
  },
  {
    name: 'ComposedChart with Bar',
    Wrapper: ({ children }) => (
      <ComposedChart {...commonChartProps}>
        <XAxis dataKey="name" type="category" />
        <YAxis dataKey="uv" />
        {children}
        <Bar dataKey="amt" />
      </ComposedChart>
    ),
  },
  {
    name: 'ComposedChart with Line',
    Wrapper: ({ children }) => (
      <ComposedChart {...commonChartProps}>
        <XAxis dataKey="name" type="category" />
        <YAxis dataKey="amt" />
        {children}
        <Line dataKey="pv" />
      </ComposedChart>
    ),
  },
  {
    name: 'PieChart',
    Wrapper: ({ children }) => (
      <PieChart height={400} width={400}>
        <Pie data={PageData} dataKey="uv" nameKey="name" />
        {children}
      </PieChart>
    ),
  },
  {
    name: 'RadarChart',
    Wrapper: ({ children }) => (
      <RadarChart height={400} width={400}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis />
        <Radar name="Mike" dataKey="uv" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        {children}
      </RadarChart>
    ),
  },
  {
    name: 'RadialBarChart',
    Wrapper: ({ children }) => (
      <RadialBarChart height={400} width={400}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis />
        <RadialBar name="Mike" dataKey="uv" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        {children}
      </RadialBarChart>
    ),
  },
  {
    name: 'ScatterChart',
    Wrapper: ({ children }) => (
      <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis dataKey="uv" name="stature" unit="cm" />
        <YAxis dataKey="pv" name="weight" unit="kg" />
        <Scatter line name="A school" data={PageData} fill="#ff7300" />
        {children}
      </ScatterChart>
    ),
  },
  // FunnelChart is excluded because FunnelChart does not support Tooltip
  {
    name: 'Sankey',
    Wrapper: ({ children }) => (
      <Sankey width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }} data={SankeyData}>
        {children}
      </Sankey>
    ),
  },
];

describe('<Tooltip />', () => {
  afterEach(restoreGetBoundingClientRect);

  describe.each(testCases)('as a child of $name', ({ Wrapper }) => {
    test('Without an event, the tooltip wrapper is rendered but not visible', () => {
      const { container } = render(
        <Wrapper>
          <Tooltip />
        </Wrapper>,
      );

      const wrapper = container.querySelector('.recharts-tooltip-wrapper');
      expect(wrapper).toBeInTheDocument();
      expect(wrapper).not.toBeVisible();
    });

    test('No content is rendered without an explicit event', () => {
      const { container } = render(
        <Wrapper>
          <Tooltip />
        </Wrapper>,
      );

      const tooltipContentName = container.querySelector('.recharts-tooltip-item-name');
      const tooltipContentValue = container.querySelector('.recharts-tooltip-item-value');
      expect(tooltipContentName).toBeNull();
      expect(tooltipContentValue).toBeNull();
    });

    test('Mouse over chart renders content', () => {
      const { container } = render(
        <Wrapper>
          <Tooltip />
        </Wrapper>,
      );

      const chart = container.querySelector('.recharts-wrapper');
      assertNotNull(chart);
      fireEvent.mouseOver(chart, { clientX: 200, clientY: 200 });

      // After the mouse over event over the chart, the tooltip wrapper still is not set to visible,
      // but the content is already created based on the nearest data point.
      const tooltipContentName = container.querySelector('.recharts-tooltip-item-name');
      const tooltipContentValue = container.querySelector('.recharts-tooltip-item-value');
      expect(tooltipContentName).not.toBeNull();
      expect(tooltipContentValue).not.toBeNull();
      expect(tooltipContentName).toBeInTheDocument();
      expect(tooltipContentValue).toBeInTheDocument();
    });

    test('Should move when the mouse moves', async () => {
      mockGetBoundingClientRect({
        width: 10,
        height: 10,
      });
      const { container } = render(
        <Wrapper>
          <Tooltip />
        </Wrapper>,
      );

      const chart = container.querySelector('.recharts-wrapper');
      assertNotNull(chart);
      fireEvent.mouseMove(chart, { clientX: 200, clientY: 200 });

      const tooltip = container.querySelector('.recharts-tooltip-wrapper')!;
      expect(tooltip.getAttribute('style')!.includes('translate')).toBe(true);
    });

    it('should render customized tooltip when content is set to be a react element', () => {
      const Customized = () => {
        return <div className="customized" />;
      };
      const { container } = render(
        <Wrapper>
          <Tooltip content={<Customized />} />
        </Wrapper>,
      );

      const chart = container.querySelector('.recharts-wrapper');
      assertNotNull(chart);
      fireEvent.mouseOver(chart, { clientX: 200, clientY: 200 });

      const customizedContent = container.querySelector('.customized');
      expect(customizedContent).toBeInTheDocument();
    });

    describe('active prop', () => {
      test('with active=true it should render tooltip even after moving the mouse out of the chart.', () => {
        const { container } = render(
          <Wrapper>
            <Tooltip active />
          </Wrapper>,
        );

        const tooltip = container.querySelector('.recharts-tooltip-wrapper');
        expect(tooltip).not.toBeVisible();

        const chart = container.querySelector('.recharts-wrapper');
        assertNotNull(chart);
        fireEvent.mouseOver(chart, { clientX: 200, clientY: 200 });

        expect(tooltip).toBeVisible();

        fireEvent.mouseOut(chart);

        // Still visible after moving out of the chart, because active is true.
        expect(tooltip).toBeVisible();
      });

      test('with active=false it should never render tooltip', () => {
        const { container } = render(
          <Wrapper>
            <Tooltip active={false} />
          </Wrapper>,
        );

        const tooltip = container.querySelector('.recharts-tooltip-wrapper');
        expect(tooltip).not.toBeVisible();

        const chart = container.querySelector('.recharts-wrapper');
        assertNotNull(chart);
        fireEvent.mouseOver(chart, { clientX: 200, clientY: 200 });

        expect(tooltip).not.toBeVisible();

        fireEvent.mouseOut(chart);

        expect(tooltip).not.toBeVisible();
      });

      test('with active=undefined it should render the Tooltip only while in the chart', () => {
        const { container } = render(
          <AreaChart width={400} height={400} data={PageData}>
            <Area dataKey="uv" />
            <Tooltip />
          </AreaChart>,
        );

        const tooltip = container.querySelector('.recharts-tooltip-wrapper');
        expect(tooltip).not.toBeVisible();

        const chart = container.querySelector('.recharts-wrapper');
        assertNotNull(chart);
        fireEvent.mouseOver(chart, { clientX: 200, clientY: 200 });

        expect(tooltip).toBeVisible();

        fireEvent.mouseOut(chart);

        expect(tooltip).not.toBeVisible();
      });
    });

    describe('defaultIndex prop', () => {
      it('should show tooltip from the beginning if defaultIndex is set to a valid value', () => {
        const { container } = render(
          <Wrapper>
            <Tooltip defaultIndex={2} />
          </Wrapper>,
        );

        const tooltip = container.querySelector('.recharts-tooltip-wrapper');
        expect(tooltip).toBeInTheDocument();

        // Tooltip should be visible, since defaultIndex was set
        expect(tooltip).toBeVisible();

        // The cursor should also be visible
        expect(container.querySelector('.recharts-tooltip-cursor')).toBeVisible();

        // TODO replace this commented code with a new test suite for all the active-X elements
        // The active dot should also be visible
        // expect(container.querySelector('.recharts-active-dot')).toBeVisible();

        // TODO replace this commented code with a new test suite for tooltip payload and content
        // "2uv..." should be displayed in the Tooltip payload
        // expect(tooltip.textContent).toBe('2uv : 200');

        const chart = container.querySelector('.recharts-wrapper');
        fireEvent.mouseOver(chart, { clientX: 350, clientY: 200 });

        // Tooltip should be able to move when the mouse moves over the chart
        expect(tooltip).toBeVisible();
        // TODO replace this commented code with a new test suite for tooltip payload and content
        // expect(tooltip.textContent).toBe('4uv : 189');
        fireEvent.mouseOver(chart, { clientX: 350, clientY: 200 });

        // TODO assert tooltip positions
        // Tooltip should be able to move when the mouse moves over the chart
        expect(tooltip).toBeVisible();

        fireEvent.mouseOut(chart);

        // Since active is false, the tooltip can be dismissed by mousing out
        expect(tooltip).not.toBeVisible();
      });

      test('defaultIndex can be updated by parent control', () => {
        const data2 = [
          { x: 100, y: 200, z: 200 },
          { x: 120, y: 100, z: 260 },
          { x: 170, y: 300, z: 400 },
          { x: 140, y: 250, z: 280 },
          { x: 150, y: 400, z: 500 },
          { x: 110, y: 280, z: 200 },
        ];
        const Example = () => {
          const [defaultIndex, setDefaultIndex] = useState(0);

          return (
            <div>
              <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <XAxis dataKey="x" name="stature" unit="cm" />
                <YAxis dataKey="y" name="weight" unit="kg" />
                <Scatter line name="A school" data={data2} fill="#ff7300" />
                <Tooltip defaultIndex={defaultIndex} active />
              </ScatterChart>
              <button type="button" id="goRight" onClick={() => setDefaultIndex(defaultIndex + 1)}>
                Go right
              </button>
            </div>
          );
        };
        const { container } = render(<Example />);

        const tooltip = container.querySelector('.recharts-tooltip-wrapper');
        expect(tooltip).toBeInTheDocument();

        // Tooltip should be visible, since defaultIndex was set
        expect(tooltip).toBeVisible();

        // The cursor should also be visible
        expect(container.querySelector('.recharts-tooltip-cursor')).toBeVisible();

        // Data should be displayed in the Tooltip payload
        expect(tooltip?.textContent).toBe('100stature : 100cmweight : 200kg');

        fireEvent.click(container.querySelector('#goRight') as HTMLButtonElement);

        // Data should be displayed in the Tooltip payload
        expect(tooltip?.textContent).toBe('120stature : 120cmweight : 100kg');
      });

      it('should ignore invalid defaultIndex value', () => {
        const { container } = render(
          <div role="main" style={{ width: '400px', height: '400px' }}>
            <AreaChart width={400} height={400} data={PageData}>
              <Area dataKey="uv" />
              <Tooltip defaultIndex={20} />
            </AreaChart>
          </div>,
        );

        const tooltip = container.querySelector('.recharts-tooltip-wrapper');
        expect(tooltip).toBeInTheDocument();
        expect(tooltip).not.toBeVisible();
      });
    });
  });
  describe('includeHidden prop', () => {
    test('False - Should not render tooltip for hidden items', () => {
      let tooltipPayload: any[] | undefined = [];

      const { container } = render(
        <ComposedChart width={400} height={400} data={PageData}>
          <Area dataKey="uv" hide name="1" />
          <Bar dataKey="uv" hide name="2" />
          <Line dataKey="uv" hide name="3" />
          <Scatter dataKey="uv" hide name="4" />
          <Line dataKey="uv" name="5" />
          <Tooltip
            includeHidden
            content={({ payload }) => {
              tooltipPayload = payload;
              return null;
            }}
          />
        </ComposedChart>,
      );

      expect(tooltipPayload).toHaveLength(0);

      const chart = container.querySelector('.recharts-wrapper');
      fireEvent.mouseOver(chart!, { clientX: 200, clientY: 200 });

      expect(tooltipPayload.map(({ name }) => name).join('')).toBe('12345');
    });

    test('True - Should render tooltip for hidden items', () => {
      let tooltipPayload: any[] | undefined = [];

      const { container } = render(
        <ComposedChart width={400} height={400} data={PageData}>
          <Area dataKey="uv" hide name="1" />
          <Bar dataKey="uv" hide name="2" />
          <Line dataKey="uv" hide name="3" />
          <Scatter dataKey="uv" hide name="4" />
          <Line dataKey="uv" name="5" />
          <Tooltip
            includeHidden={false}
            content={({ payload }) => {
              tooltipPayload = payload;
              return null;
            }}
          />
        </ComposedChart>,
      );

      expect(tooltipPayload).toHaveLength(0);

      const chart = container.querySelector('.recharts-wrapper');
      fireEvent.mouseOver(chart!, { clientX: 200, clientY: 200 });

      expect(tooltipPayload.map(({ name }) => name).join('')).toBe('5');
    });

    test('Should filter nulls when filterNull and payloadUniqBy are true', () => {
      const dataWithNull = [...PageData, { name: 'Page F', uv: null, pv: 4800, amt: 2400 }];
      let tooltipPayload: any[] | undefined = [];

      const { container } = render(
        <ComposedChart width={400} height={400} data={dataWithNull}>
          <Line dataKey="uv" />
          <Line dataKey="pv" />
          <Tooltip
            payloadUniqBy
            filterNull
            content={({ payload }) => {
              tooltipPayload = payload;
              return null;
            }}
          />
        </ComposedChart>,
      );

      expect(tooltipPayload).toHaveLength(0);

      const chart = container.querySelector('.recharts-wrapper');

      expect(chart).not.toBeNull();
      // Page E
      fireEvent.mouseOver(chart, { clientX: 325, clientY: 200 });
      expect(tooltipPayload).toHaveLength(2);

      // Page F, ignores null
      fireEvent.mouseOver(chart, { clientX: 375, clientY: 200 });
      expect(tooltipPayload).toHaveLength(1);
      expect(tooltipPayload[0].payload.name).toBe('Page F');
    });
  });

  it('Should display the data selected by Brush', () => {
    const { container } = render(
      <LineChart width={600} height={300} data={PageData}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Brush dataKey="name" startIndex={1} height={30} stroke="#8884d8" />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>,
    );

    const line = container.querySelector('.recharts-cartesian-grid-horizontal line')!;
    const chart = container.querySelector('.recharts-wrapper');
    fireEvent.mouseOver(chart!, { clientX: +line.getAttribute('x')! + 1, clientY: 50 });
    expect(getByText(container, '4567')).toBeVisible();
  });

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

    let tooltipPayload: any[] | null | undefined = null;

    const { container } = render(
      <div role="main" style={{ width: '400px', height: '400px' }}>
        <ComposedChart width={400} height={400}>
          <XAxis dataKey="category" type="category" />
          <YAxis dataKey="value" />
          <Tooltip
            content={({ payload }) => {
              tooltipPayload = payload;
              return null;
            }}
          />

          <Line dataKey="value" data={lineData1} />
          <Line dataKey="value" data={lineData2} />
        </ComposedChart>
      </div>,
    );

    const chart = container.querySelector('.recharts-wrapper');
    fireEvent.mouseOver(chart!, { clientX: 200, clientY: 200 });
    expect.soft(tooltipPayload).not.toBeNull();
    expect.soft(tooltipPayload).toHaveLength(2);
    expect.soft(tooltipPayload![0]?.payload.value).toEqual(0.7);
    expect.soft(tooltipPayload![1]?.payload.value).toEqual(0.4);
  });
});
