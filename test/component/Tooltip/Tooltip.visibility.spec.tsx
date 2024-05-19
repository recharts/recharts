import React, { ComponentType, ReactNode, useState } from 'react';
import { describe, expect, it, test } from 'vitest';
import { fireEvent, getByText, render } from '@testing-library/react';

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Brush,
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
  PolarGrid,
  PolarRadiusAxis,
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
import { mockGetBoundingClientRect } from '../../helper/mockGetBoundingClientRect';
import { PageData, exampleSankeyData, exampleSunburstData, exampleTreemapData } from '../../_data';
import { getTooltip, showTooltip } from './tooltipTestHelpers';
import {
  areaChartMouseHoverTooltipSelector,
  barChartMouseHoverTooltipSelector,
  composedChartMouseHoverTooltipSelector,
  funnelChartMouseHoverTooltipSelector,
  lineChartMouseHoverTooltipSelector,
  MouseHoverTooltipTriggerSelector,
  pieChartMouseHoverTooltipSelector,
  radarChartMouseHoverTooltipSelector,
  radialBarChartMouseHoverTooltipSelector,
  sankeyNodeChartMouseHoverTooltipSelector,
  scatterChartMouseHoverTooltipSelector,
  sunburstChartMouseHoverTooltipSelector,
  treemapNodeChartMouseHoverTooltipSelector,
} from './tooltipMouseHoverSelectors';
import { assertNotNull } from '../../helper/assertNotNull';

type TooltipVisibilityTestCase = {
  // For identifying which test is running
  name: string;
  mouseHoverSelector: MouseHoverTooltipTriggerSelector;
  Wrapper: ComponentType<{ children: ReactNode }>;
  expectedTransform: string;
};

const commonChartProps = {
  width: 400,
  height: 400,
  data: PageData,
};

const AreaChartTestCase: TooltipVisibilityTestCase = {
  name: 'AreaChart',
  Wrapper: ({ children }) => (
    <AreaChart {...commonChartProps}>
      <Area dataKey="uv" />
      {children}
    </AreaChart>
  ),
  mouseHoverSelector: areaChartMouseHoverTooltipSelector,
  expectedTransform: 'transform: translate(249px, 211px);',
};

const BarChartTestCase: TooltipVisibilityTestCase = {
  name: 'BarChart',
  Wrapper: ({ children }) => (
    <BarChart {...commonChartProps}>
      <Bar dataKey="uv" />
      {children}
    </BarChart>
  ),
  mouseHoverSelector: barChartMouseHoverTooltipSelector,
  expectedTransform: 'transform: translate(242.5px, 211px);',
};

const LineChartHorizontalTestCase: TooltipVisibilityTestCase = {
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
  mouseHoverSelector: lineChartMouseHoverTooltipSelector,
  expectedTransform: 'transform: translate(207px, 211px);',
};

const LineChartVerticalTestCase: TooltipVisibilityTestCase = {
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
  mouseHoverSelector: lineChartMouseHoverTooltipSelector,
  expectedTransform: 'transform: translate(211px, 231px);',
};

const ComposedChartWithAreaTestCase: TooltipVisibilityTestCase = {
  name: 'ComposedChart with Area',
  Wrapper: ({ children }) => (
    <ComposedChart {...commonChartProps}>
      <XAxis dataKey="name" type="category" />
      <YAxis dataKey="uv" />
      {children}
      <Area dataKey="pv" />
    </ComposedChart>
  ),
  mouseHoverSelector: composedChartMouseHoverTooltipSelector,
  expectedTransform: 'transform: translate(207px, 211px);',
};

const ComposedChartWithBarTestCase: TooltipVisibilityTestCase = {
  name: 'ComposedChart with Bar',
  Wrapper: ({ children }) => (
    <ComposedChart {...commonChartProps}>
      <XAxis dataKey="name" type="category" />
      <YAxis dataKey="uv" />
      {children}
      <Bar dataKey="amt" />
    </ComposedChart>
  ),
  mouseHoverSelector: composedChartMouseHoverTooltipSelector,
  expectedTransform: 'transform: translate(212.5px, 211px);',
};

const ComposedChartWithLineTestCase: TooltipVisibilityTestCase = {
  name: 'ComposedChart with Line',
  Wrapper: ({ children }) => (
    <ComposedChart {...commonChartProps}>
      <XAxis dataKey="name" type="category" />
      <YAxis dataKey="amt" />
      {children}
      <Line dataKey="pv" />
    </ComposedChart>
  ),
  mouseHoverSelector: composedChartMouseHoverTooltipSelector,
  expectedTransform: 'transform: translate(207px, 211px);',
};

const FunnelChartTestCase: TooltipVisibilityTestCase = {
  name: 'FunnelChart',
  Wrapper: ({ children }) => (
    <FunnelChart width={700} height={500}>
      <Funnel isAnimationActive={false} dataKey="uv" nameKey="name" data={PageData} />
      {children}
    </FunnelChart>
  ),
  mouseHoverSelector: funnelChartMouseHoverTooltipSelector,
  expectedTransform: 'transform: translate(355px, 55px);',
};

const PieChartTestCase: TooltipVisibilityTestCase = {
  name: 'PieChart',
  Wrapper: ({ children }) => (
    <PieChart height={400} width={400}>
      <Pie data={PageData} isAnimationActive={false} dataKey="uv" nameKey="name" cx={200} cy={200} />
      {children}
    </PieChart>
  ),
  mouseHoverSelector: pieChartMouseHoverTooltipSelector,
  expectedTransform: 'transform: translate(271.8676024097812px, 161.6138988484545px);',
};

const RadarChartTestCase: TooltipVisibilityTestCase = {
  name: 'RadarChart',
  Wrapper: ({ children }) => (
    <RadarChart height={600} width={600} data={PageData}>
      <PolarGrid />
      <PolarAngleAxis dataKey="name" />
      <PolarRadiusAxis />
      <Radar name="Mike" dataKey="uv" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      {children}
    </RadarChart>
  ),
  mouseHoverSelector: radarChartMouseHoverTooltipSelector,
  expectedTransform: 'transform: translate(188.75025773223268px, 239.9964286625318px);',
};

const RadialBarChartTestCase: TooltipVisibilityTestCase = {
  name: 'RadialBarChart',
  Wrapper: ({ children }) => (
    <RadialBarChart height={600} width={600} data={PageData}>
      <PolarGrid />
      <PolarAngleAxis dataKey="name" />
      <PolarRadiusAxis />
      <RadialBar name="Mike" dataKey="uv" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      {children}
    </RadialBarChart>
  ),
  mouseHoverSelector: radialBarChartMouseHoverTooltipSelector,
  expectedTransform: 'transform: translate(226.5613998199874px, 226.5613998199874px);',
};

const SankeyTestCase: TooltipVisibilityTestCase = {
  name: 'Sankey',
  Wrapper: ({ children }) => (
    <Sankey width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }} data={exampleSankeyData}>
      {children}
    </Sankey>
  ),
  mouseHoverSelector: sankeyNodeChartMouseHoverTooltipSelector,
  expectedTransform: 'transform: translate(35px, 114.89236115144739px);',
};

const ScatterChartTestCase: TooltipVisibilityTestCase = {
  name: 'ScatterChart',
  Wrapper: ({ children }) => (
    <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
      <XAxis dataKey="uv" name="stature" unit="cm" />
      <YAxis dataKey="pv" name="weight" unit="kg" />
      <Scatter line name="A school" data={PageData} fill="#ff7300" />
      {children}
    </ScatterChart>
  ),
  mouseHoverSelector: scatterChartMouseHoverTooltipSelector,
  expectedTransform: 'transform: translate(115px, 280.8px);',
};

const SunburstChartTestCase: TooltipVisibilityTestCase = {
  name: 'SunburstChart',
  Wrapper: ({ children }) => (
    <SunburstChart width={400} height={400} data={exampleSunburstData}>
      {children}
    </SunburstChart>
  ),
  mouseHoverSelector: sunburstChartMouseHoverTooltipSelector,
  expectedTransform: 'transform: translate(285px, 210px);',
};

const TreemapTestCase: TooltipVisibilityTestCase = {
  name: 'Treemap',
  Wrapper: ({ children }) => (
    <Treemap
      width={400}
      height={400}
      data={exampleTreemapData}
      isAnimationActive={false}
      nameKey="name"
      dataKey="value"
    >
      {children}
    </Treemap>
  ),
  mouseHoverSelector: treemapNodeChartMouseHoverTooltipSelector,
  expectedTransform: 'transform: translate(94.5px, 58.5px);',
};

const testCases: ReadonlyArray<TooltipVisibilityTestCase> = [
  AreaChartTestCase,
  BarChartTestCase,
  LineChartHorizontalTestCase,
  LineChartVerticalTestCase,
  ComposedChartWithAreaTestCase,
  ComposedChartWithBarTestCase,
  ComposedChartWithLineTestCase,
  FunnelChartTestCase,
  PieChartTestCase,
  RadarChartTestCase,
  RadialBarChartTestCase,
  SankeyTestCase,
  ScatterChartTestCase,
  // Sunburst is excluded because it renders tooltip multiple times and all tests fail :( TODO fix and re-enable
  SunburstChartTestCase,
  TreemapTestCase,
];

describe('Tooltip visibility', () => {
  describe.each(testCases)('as a child of $name', ({ name, Wrapper, mouseHoverSelector, expectedTransform }) => {
    test('Without an event, the tooltip wrapper is rendered but not visible', () => {
      const { container } = render(
        <Wrapper>
          <Tooltip />
        </Wrapper>,
      );

      const wrapper = getTooltip(container);
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

    test(`Mouse over element ${mouseHoverSelector} renders content`, () => {
      const { container, debug } = render(
        <Wrapper>
          <Tooltip />
        </Wrapper>,
      );

      showTooltip(container, mouseHoverSelector, debug);

      const tooltip = getTooltip(container);
      expect(tooltip).toBeVisible();

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

      const tooltipTriggerElement = showTooltip(container, mouseHoverSelector);

      const tooltip1 = getTooltip(container);
      expect(tooltip1.getAttribute('style')).toContain('position: absolute;');
      expect(tooltip1.getAttribute('style')).toContain('top: 0px');
      expect(tooltip1.getAttribute('style')).toContain('left: 0px');

      fireEvent.mouseMove(tooltipTriggerElement, { clientX: 201, clientY: 201 });

      const tooltip2 = getTooltip(container);

      expect(tooltip2.getAttribute('style')).toContain(expectedTransform);
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

      showTooltip(container, mouseHoverSelector);

      const customizedContent = container.querySelector('.customized');
      expect(customizedContent).toBeInTheDocument();
    });

    describe('portal prop', () => {
      it('should render outside of SVG, as a direct child of recharts-wrapper by default', () => {
        const { container } = render(
          <Wrapper>
            <Tooltip />
          </Wrapper>,
        );
        showTooltip(container, mouseHoverSelector);

        expect(container.querySelectorAll('.recharts-wrapper svg .recharts-tooltip-wrapper')).toHaveLength(0);
        expect(container.querySelector('.recharts-wrapper > .recharts-tooltip-wrapper')).toBeVisible();
      });

      it('should render in a custom portal if "portal" prop is set', () => {
        function Example() {
          const [portalRef, setPortalRef] = useState<HTMLElement | null>(null);

          return (
            <>
              <Wrapper>
                <Tooltip portal={portalRef} />
              </Wrapper>
              <div
                data-testid="my-custom-portal-target"
                ref={node => {
                  if (portalRef == null && node != null) {
                    setPortalRef(node);
                  }
                }}
              />
            </>
          );
        }
        const { container } = render(<Example />);
        showTooltip(container, mouseHoverSelector);

        expect(container.querySelector('.recharts-wrapper .recharts-tooltip-wrapper')).not.toBeInTheDocument();
        expect(
          container.querySelector('[data-testid="my-custom-portal-target"] > .recharts-tooltip-wrapper'),
        ).toBeVisible();
      });
    });

    describe('active prop', () => {
      test('with active=true it should render tooltip even after moving the mouse out of the chart.', context => {
        if (name === 'Sankey') {
          /*
           * Sankey chart for some reason ignores active property on Tooltip
           */
          context.skip();
        }
        if (name === 'Treemap') {
          /*
           * Treemap chart for some reason ignores active property on Tooltip
           */
          context.skip();
        }
        if (name === 'SunburstChart') {
          /*
           * SunburstChart for some reason ignores active property on Tooltip
           */
          context.skip();
        }
        const { container } = render(
          <Wrapper>
            <Tooltip active />
          </Wrapper>,
        );

        const tooltip = getTooltip(container);
        expect(tooltip).not.toBeVisible();

        const tooltipTriggerElement = showTooltip(container, mouseHoverSelector);

        expect(tooltip).toBeVisible();

        fireEvent.mouseOut(tooltipTriggerElement);

        // Still visible after moving out of the chart, because active is true.
        expect(tooltip).toBeVisible();
      });

      test('with active=false it should never render tooltip', context => {
        if (name === 'Sankey') {
          /*
           * Sankey chart for some reason ignores active property on Tooltip
           */
          context.skip();
        }
        if (name === 'Treemap') {
          /*
           * Treemap chart for some reason ignores active property on Tooltip
           */
          context.skip();
        }
        const { container } = render(
          <Wrapper>
            <Tooltip active={false} />
          </Wrapper>,
        );

        const tooltip = getTooltip(container);
        expect(tooltip).not.toBeVisible();

        const tooltipTriggerElement = showTooltip(container, mouseHoverSelector);

        expect(tooltip).not.toBeVisible();

        fireEvent.mouseOut(tooltipTriggerElement);

        expect(tooltip).not.toBeVisible();
      });

      test('with active=undefined it should render the Tooltip only while in the chart', () => {
        const { container } = render(
          <Wrapper>
            <Tooltip />
          </Wrapper>,
        );

        const tooltip = getTooltip(container);
        expect(tooltip).not.toBeVisible();

        const tooltipTriggerElement = showTooltip(container, mouseHoverSelector);

        expect(tooltip).toBeVisible();

        fireEvent.mouseOut(tooltipTriggerElement);

        expect(tooltip).not.toBeVisible();
      });
    });

    describe('defaultIndex prop', () => {
      it('should show tooltip from the beginning if defaultIndex is set to a valid value', context => {
        if (name === 'RadialBarChart') {
          /*
           * RadialBarChart throws an error when called with defaultIndex!
           * Error: Uncaught [TypeError: Cannot read properties of undefined (reading 'coordinate')]
           * at CategoricalChartWrapper.displayDefaultTooltip
           */
          // IntelliJ (incorrectly) reports this as test failure - but CLI says it's skipped. Since CLI is the source of truth I leave this here.
          context.skip();
        }
        if (name === 'FunnelChart') {
          // FunnelChart throws an error when called with defaultIndex
          context.skip();
        }
        if (name === 'Sankey') {
          /*
           * Sankey chart for some reason ignores defaultIndex property on Tooltip
           */
          context.skip();
        }
        if (name === 'Treemap') {
          /*
           * Treemap chart for some reason ignores defaultIndex property on Tooltip
           */
          context.skip();
        }
        if (name === 'SunburstChart') {
          /*
           * SunburstChart for some reason ignores active property on Tooltip
           */
          context.skip();
        }
        const { container } = render(
          <Wrapper>
            <Tooltip defaultIndex={2} />
          </Wrapper>,
        );

        const tooltip = getTooltip(container);
        expect(tooltip).toBeInTheDocument();

        // Tooltip should be visible, since defaultIndex was set
        expect(tooltip).toBeVisible();

        const tooltipTriggerElement = showTooltip(container, mouseHoverSelector);

        // Tooltip should be able to move when the mouse moves over the chart
        expect(tooltip).toBeVisible();

        fireEvent.mouseOver(tooltipTriggerElement, { clientX: 350, clientY: 200 });

        // Tooltip should be able to move when the mouse moves over the chart
        expect(tooltip).toBeVisible();

        fireEvent.mouseOut(tooltipTriggerElement);

        // Since active is false, the tooltip can be dismissed by mousing out
        expect(tooltip).not.toBeVisible();
      });

      it('should ignore invalid defaultIndex value', context => {
        if (name === 'FunnelChart') {
          // FunnelChart throws an error when called with defaultIndex
          context.skip();
        }
        const { container } = render(
          <Wrapper>
            <Tooltip defaultIndex={20} />
          </Wrapper>,
        );

        const tooltip = getTooltip(container);
        expect(tooltip).toBeInTheDocument();
        expect(tooltip).not.toBeVisible();
      });
    });
  });

  describe('includeHidden prop', () => {
    test('true - Should render tooltip for hidden items', () => {
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
      assertNotNull(chart);
      fireEvent.mouseOver(chart, { clientX: 200, clientY: 200 });

      expect(tooltipPayload.map(({ name }) => name).join('')).toBe('12345');
    });

    test('false - Should hide tooltip for hidden items', () => {
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
      assertNotNull(chart);
      fireEvent.mouseOver(chart, { clientX: 200, clientY: 200 });

      expect(tooltipPayload.map(({ name }) => name).join('')).toBe('5');
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

    const tooltip = getTooltip(container);
    expect(tooltip).toBeInTheDocument();

    // Tooltip should be visible, since defaultIndex was set
    expect(tooltip).toBeVisible();

    // The cursor should also be visible
    expect(container.querySelector('.recharts-tooltip-cursor')).toBeVisible();

    // Data should be displayed in the Tooltip payload
    expect(tooltip.textContent).toBe('100stature : 100cmweight : 200kg');

    fireEvent.click(container.querySelector('#goRight') as HTMLButtonElement);

    // Data should be displayed in the Tooltip payload
    expect(tooltip.textContent).toBe('120stature : 120cmweight : 100kg');
  });
});

describe('Active element visibility', () => {
  describe.each([
    AreaChartTestCase,
    LineChartHorizontalTestCase,
    LineChartVerticalTestCase,
    ComposedChartWithAreaTestCase,
    ComposedChartWithLineTestCase,
    RadarChartTestCase,
  ])('as a child of $name', ({ Wrapper, mouseHoverSelector }) => {
    it('should display activeDot', () => {
      const { container, debug } = render(
        <Wrapper>
          <Tooltip />
        </Wrapper>,
      );
      expect(container.querySelector('.recharts-active-dot')).not.toBeInTheDocument();

      showTooltip(container, mouseHoverSelector, debug);

      expect(container.querySelector('.recharts-active-dot')).toBeVisible();
    });
  });

  describe.each([
    BarChartTestCase,
    ComposedChartWithBarTestCase,
    PieChartTestCase,
    RadialBarChartTestCase,
    SankeyTestCase,
    ScatterChartTestCase,
    SunburstChartTestCase,
    TreemapTestCase,
  ])('as a child of $name', ({ Wrapper, mouseHoverSelector }) => {
    it('should not display activeDot', () => {
      const { container, debug } = render(
        <Wrapper>
          <Tooltip />
        </Wrapper>,
      );
      expect(container.querySelector('.recharts-active-dot')).not.toBeInTheDocument();

      showTooltip(container, mouseHoverSelector, debug);

      expect(container.querySelector('.recharts-active-dot')).not.toBeInTheDocument();
    });
  });
});

describe('Cursor visibility', () => {
  describe.each([
    AreaChartTestCase,
    BarChartTestCase,
    LineChartHorizontalTestCase,
    LineChartVerticalTestCase,
    ComposedChartWithAreaTestCase,
    ComposedChartWithLineTestCase,
    RadarChartTestCase,
  ])('as a child of $name', ({ Wrapper, mouseHoverSelector }) => {
    it('should display cursor inside of the SVG', () => {
      const { container, debug } = render(
        <Wrapper>
          <Tooltip />
        </Wrapper>,
      );
      expect(container.querySelector('.recharts-tooltip-cursor')).not.toBeInTheDocument();

      showTooltip(container, mouseHoverSelector, debug);

      expect(container.querySelector('.recharts-wrapper svg .recharts-tooltip-cursor')).toBeVisible();
    });

    it('should not display cursor when cursor=false', () => {
      const { container, debug } = render(
        <Wrapper>
          <Tooltip cursor={false} />
        </Wrapper>,
      );
      expect(container.querySelector('.recharts-tooltip-cursor')).not.toBeInTheDocument();

      showTooltip(container, mouseHoverSelector, debug);

      expect(container.querySelector('.recharts-tooltip-cursor')).not.toBeInTheDocument();
    });
  });
});
