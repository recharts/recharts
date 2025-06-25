import React, { ComponentType, ReactNode, useState } from 'react';
import { beforeEach, describe, expect, it, test } from 'vitest';
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
import { exampleSankeyData, exampleSunburstData, exampleTreemapData, PageData } from '../../_data';
import {
  expectTooltipNotVisible,
  expectTooltipPayload,
  getTooltip,
  MouseCoordinate,
  showTooltip,
  showTooltipOnCoordinate,
  showTooltipOnCoordinateTouch,
} from './tooltipTestHelpers';
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
  sankeyNodeMouseHoverTooltipSelector,
  scatterChartMouseHoverTooltipSelector,
  sunburstChartMouseHoverTooltipSelector,
  treemapNodeChartMouseHoverTooltipSelector,
} from './tooltipMouseHoverSelectors';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';
import {
  selectTooltipAxis,
  selectTooltipAxisId,
  selectTooltipAxisRangeWithReverse,
  selectTooltipAxisRealScaleType,
  selectTooltipAxisScale,
  selectTooltipAxisTicks,
  selectTooltipAxisType,
  selectTooltipCategoricalDomain,
} from '../../../src/state/selectors/tooltipSelectors';
import { selectChartDataWithIndexes } from '../../../src/state/selectors/dataSelectors';
import {
  selectActiveCoordinate,
  selectActiveLabel,
  selectIsTooltipActive,
} from '../../../src/state/selectors/selectors';
import { expectLastCalledWithScale } from '../../helper/expectScale';
import { selectChartLayout } from '../../../src/context/chartLayoutContext';
import { TooltipIndex, TooltipState } from '../../../src/state/tooltipSlice';
import { selectTooltipState } from '../../../src/state/selectors/selectTooltipState';
import { selectChartOffset } from '../../../src/state/selectors/selectChartOffset';
import {
  selectLegendPayload,
  selectLegendSettings,
  selectLegendSize,
} from '../../../src/state/selectors/legendSelectors';
import { mockTouchingElement } from '../../helper/mockTouchingElement';
import { LegendSettings } from '../../../src/state/legendSlice';

type TooltipVisibilityTestCase = {
  // For identifying which test is running
  name: string;
  mouseHoverSelector: MouseHoverTooltipTriggerSelector;
  mouseCoordinate?: MouseCoordinate;
  Wrapper: ComponentType<{ children: ReactNode }>;
  expectedTransform: string;
  tooltipIndex: TooltipIndex;
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
  tooltipIndex: '0',
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
  tooltipIndex: '0',
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
  tooltipIndex: '0',
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
  tooltipIndex: '0',
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
  tooltipIndex: '0',
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
  tooltipIndex: '0',
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
  tooltipIndex: '0',
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
  tooltipIndex: '0',
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
  tooltipIndex: '0',
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
  tooltipIndex: '0',
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
  expectedTransform: 'transform: translate(198.74853309331652px, 198.7485330933165px);',
  tooltipIndex: '0',
};

const SankeyTestCase: TooltipVisibilityTestCase = {
  name: 'Sankey',
  Wrapper: ({ children }) => (
    <Sankey width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }} data={exampleSankeyData}>
      {children}
    </Sankey>
  ),
  mouseHoverSelector: sankeyNodeMouseHoverTooltipSelector,
  expectedTransform: 'transform: translate(35px, 114.89236115144739px);',
  tooltipIndex: '0',
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
  tooltipIndex: '0',
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
  tooltipIndex: '0',
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
  tooltipIndex: 'children[0]children[0]',
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
  SunburstChartTestCase,
  TreemapTestCase,
];

describe('Tooltip visibility', () => {
  beforeEach(() => {
    mockGetBoundingClientRect({ width: 100, height: 100 });
  });

  describe.each(testCases)(
    'as a child of $name',
    ({ name, Wrapper, mouseHoverSelector, expectedTransform, tooltipIndex }) => {
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

      it(`should move tooltip onTouchMove with active tooltip index ${tooltipIndex}`, async context => {
        // TODO: these charts currently do not work onTouchMove. Did they before?
        // This is because these are set via item rather than axis. The middleware currently only sets axis coordinates.
        if (name === 'SunburstChart' || name === 'FunnelChart' || name === 'Sankey' || name === 'ScatterChart') {
          context.skip();
        }

        mockTouchingElement(tooltipIndex, 'uv');

        mockGetBoundingClientRect({
          width: 10,
          height: 10,
        });
        const { container } = render(
          <Wrapper>
            <Tooltip />
          </Wrapper>,
        );

        showTooltipOnCoordinateTouch(container, mouseHoverSelector, {
          clientX: 200,
          clientY: 200,
        });

        const tooltip1 = getTooltip(container);
        expect(tooltip1.getAttribute('style')).toContain('position: absolute;');
        expect(tooltip1.getAttribute('style')).toContain('top: 0px');
        expect(tooltip1.getAttribute('style')).toContain('left: 0px');

        showTooltipOnCoordinateTouch(container, mouseHoverSelector, {
          clientX: 201,
          clientY: 201,
        });

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

        it('should keep custom portal visible when active is true after mouseOut, should no longer have absolute styles', () => {
          function Example() {
            const [portalRef, setPortalRef] = useState<HTMLElement | null>(null);

            return (
              <>
                <Wrapper>
                  <Tooltip portal={portalRef} active />
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

          const tooltipWrapper = container.querySelector('.recharts-tooltip-wrapper');

          expect(tooltipWrapper).toHaveStyle({ visibility: 'visible' });
          expect(tooltipWrapper).not.toHaveStyle({ postition: 'absolute' });

          fireEvent.mouseLeave(container, mouseHoverSelector);

          expect(tooltipWrapper).toHaveStyle({ visibility: 'visible' });
          expect(tooltipWrapper).not.toHaveStyle({ postition: 'absolute' });

          expect(
            container.querySelector('[data-testid="my-custom-portal-target"] > .recharts-tooltip-wrapper'),
          ).toBeVisible();
        });
      });

      describe('active prop', () => {
        test('with active=true it should render tooltip even after moving the mouse out of the chart.', () => {
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

        test('with active=false it should never render tooltip', () => {
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
          if (name === 'Sankey') {
            /*
             * Sankey chart won't work with numerical indexes and it will need a different format
             */
            context.skip();
          }
          const { container } = render(
            <Wrapper>
              <Tooltip defaultIndex={tooltipIndex} />
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

        it('should ignore invalid defaultIndex value', () => {
          const { container } = render(
            <Wrapper>
              <Tooltip defaultIndex={NaN} />
            </Wrapper>,
          );

          const tooltip = getTooltip(container);
          expect(tooltip).toBeInTheDocument();
          expect(tooltip).not.toBeVisible();
        });

        it('should show the last item when defaultIndex is same or larger than the data.length', context => {
          if (name === 'FunnelChart') {
            // FunnelChart throws an error when called with defaultIndex
            context.skip();
          }
          if (name === 'Sankey') {
            /*
             * Sankey chart does not support numeric tooltip indexes
             */
            context.skip();
          }
          if (name === 'Treemap') {
            /*
             * Treemap chart does not support numeric tooltip indexes
             */
            context.skip();
          }
          if (name === 'SunburstChart') {
            /*
             * SunburstChart does not support numeric tooltip indexes
             */
            context.skip();
          }
          const { container } = render(
            <Wrapper>
              <Tooltip defaultIndex={commonChartProps.data.length} />
            </Wrapper>,
          );

          const tooltip = getTooltip(container);
          expect(tooltip).toBeInTheDocument();
          expect(tooltip).toBeVisible();
        });
      });
    },
  );

  describe(`as a child of vertical LineChart`, () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <LineChartVerticalTestCase.Wrapper>
        <Tooltip />
        {children}
      </LineChartVerticalTestCase.Wrapper>
    ));

    it('should select chart layout', () => {
      const { spy } = renderTestCase(selectChartLayout);
      expect(spy).toHaveBeenLastCalledWith('vertical');
    });

    it('should select chart offset', () => {
      const { spy } = renderTestCase(selectChartOffset);
      expect(spy).toHaveBeenLastCalledWith({
        bottom: 135,
        brushBottom: 35,
        height: 245,
        left: 80,
        right: 30,
        top: 20,
        width: 290,
      });
    });

    it('should select legend settings', () => {
      const { spy } = renderTestCase(selectLegendSettings);
      const expected: LegendSettings = {
        align: 'center',
        itemSorter: 'value',
        layout: 'horizontal',
        verticalAlign: 'bottom',
      };
      expect(spy).toHaveBeenLastCalledWith(expected);
    });

    it('should select legend size', () => {
      const { spy } = renderTestCase(selectLegendSize);
      expect(spy).toHaveBeenLastCalledWith({
        height: 100,
        width: 100,
      });
    });

    it('should select legend payload', () => {
      const { spy } = renderTestCase(selectLegendPayload);
      expect(spy).toHaveBeenLastCalledWith([
        {
          color: '#82ca9d',
          dataKey: 'uv',
          inactive: false,
          payload: {
            activeDot: true,
            animateNewValues: true,
            animationBegin: 0,
            animationDuration: 1500,
            animationEasing: 'ease',
            connectNulls: false,
            dataKey: 'uv',
            dot: true,
            fill: '#fff',
            hide: false,
            isAnimationActive: true,
            label: false,
            legendType: 'line',
            stroke: '#82ca9d',
            strokeWidth: 1,
            xAxisId: 0,
            yAxisId: 0,
          },
          type: 'line',
          value: 'uv',
        },
      ]);
    });

    it('should select tooltip axis type', () => {
      const { spy } = renderTestCase(selectTooltipAxisType);
      expect(spy).toHaveBeenLastCalledWith('yAxis');
    });

    it('should select tooltip axis ID', () => {
      const { spy } = renderTestCase(selectTooltipAxisId);
      expect(spy).toHaveBeenLastCalledWith(0);
    });

    it('should select dataStartIndex and dataEndIndex', () => {
      const { spy } = renderTestCase(selectChartDataWithIndexes);
      expect(spy).toHaveBeenLastCalledWith({
        chartData: [
          {
            amt: 2400,
            name: 'Page A',
            pv: 2400,
            uv: 400,
          },
          {
            amt: 2400,
            name: 'Page B',
            pv: 4567,
            uv: 300,
          },
          {
            amt: 2400,
            name: 'Page C',
            pv: 1398,
            uv: 300,
          },
          {
            amt: 2400,
            name: 'Page D',
            pv: 9800,
            uv: 200,
          },
          {
            amt: 2400,
            name: 'Page E',
            pv: 3908,
            uv: 278,
          },
          {
            amt: 2400,
            name: 'Page F',
            pv: 4800,
            uv: 189,
          },
        ],
        computedData: undefined,
        dataEndIndex: 5,
        dataStartIndex: 0,
      });
    });

    it('should select active label', () => {
      const { spy } = renderTestCase(state => selectActiveLabel(state, 'axis', 'hover', '2'));
      expect(spy).toHaveBeenLastCalledWith('Page C');
    });

    it('should select active coordinate', () => {
      const { container, spy } = renderTestCase(state => selectActiveCoordinate(state, 'axis', 'hover', undefined));
      expect(spy).toHaveBeenLastCalledWith(undefined);
      expect(spy).toHaveBeenCalledTimes(1);

      showTooltipOnCoordinate(
        container,
        LineChartVerticalTestCase.mouseHoverSelector,
        LineChartVerticalTestCase.mouseCoordinate,
      );

      expect(spy).toHaveBeenLastCalledWith({
        x: 200,
        y: 216,
      });
      expect(spy).toHaveBeenCalledTimes(2);
    });

    it('should select tooltip axis range', () => {
      const { spy } = renderTestCase(selectTooltipAxisRangeWithReverse);
      expect(spy).toHaveBeenLastCalledWith([20, 265]);
    });

    it('should select tooltip axis scale', () => {
      const { spy } = renderTestCase(selectTooltipAxisScale);
      expectLastCalledWithScale(spy, {
        domain: ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F'],
        range: [20, 265],
      });
    });

    it('should select categorical domain', () => {
      const { spy } = renderTestCase(selectTooltipCategoricalDomain);
      expect(spy).toHaveBeenLastCalledWith(undefined);
    });

    it('should select tooltip axis ticks', () => {
      const { spy } = renderTestCase(selectTooltipAxisTicks);

      expect(spy).toHaveBeenLastCalledWith([
        {
          coordinate: 20,
          index: 0,
          offset: 0,
          value: 'Page A',
        },
        {
          coordinate: 69,
          index: 1,
          offset: 0,
          value: 'Page B',
        },
        {
          coordinate: 118,
          index: 2,
          offset: 0,
          value: 'Page C',
        },
        {
          coordinate: 167,
          index: 3,
          offset: 0,
          value: 'Page D',
        },
        {
          coordinate: 216,
          index: 4,
          offset: 0,
          value: 'Page E',
        },
        {
          coordinate: 265,
          index: 5,
          offset: 0,
          value: 'Page F',
        },
      ]);
    });

    it('should select isActive and activeIndex, and update it after mouse hover', () => {
      const { container, spy } = renderTestCase(state => selectIsTooltipActive(state, 'axis', 'hover', undefined));
      expect(spy).toHaveBeenLastCalledWith({
        activeIndex: null,
        isActive: false,
      });
      expect(spy).toHaveBeenCalledTimes(3);

      showTooltipOnCoordinate(
        container,
        LineChartVerticalTestCase.mouseHoverSelector,
        LineChartVerticalTestCase.mouseCoordinate,
      );

      expect(spy).toHaveBeenLastCalledWith({
        activeIndex: '4',
        isActive: true,
      });
      expect(spy).toHaveBeenCalledTimes(4);
    });
  });

  describe('as a child of RadarChart', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <RadarChartTestCase.Wrapper>
        <Tooltip />
        {children}
      </RadarChartTestCase.Wrapper>
    ));

    it('should select tooltip axis type', () => {
      const { spy } = renderTestCase(selectTooltipAxisType);
      expect(spy).toHaveBeenLastCalledWith('angleAxis');
    });

    it('should select tooltip axis ID', () => {
      const { spy } = renderTestCase(selectTooltipAxisId);
      expect(spy).toHaveBeenLastCalledWith(0);
    });

    it('should select tooltip axis settings', () => {
      const { spy } = renderTestCase(selectTooltipAxis);
      expect(spy).toHaveBeenLastCalledWith({
        allowDataOverflow: false,
        allowDecimals: undefined,
        allowDuplicatedCategory: false,
        dataKey: 'name',
        domain: undefined,
        id: 0,
        includeHidden: false,
        name: undefined,
        reversed: false,
        scale: 'auto',
        tick: true,
        tickCount: undefined,
        ticks: undefined,
        type: 'category',
        unit: undefined,
      });
    });

    it('should select tooltip axis range', () => {
      const { spy } = renderTestCase(selectTooltipAxisRangeWithReverse);
      expect(spy).toHaveBeenLastCalledWith([90, -270]);
    });

    it('should select tooltip axis scale', () => {
      const { spy } = renderTestCase(selectTooltipAxisScale);
      expectLastCalledWithScale(spy, {
        domain: ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F'],
        range: [90, -270],
      });
    });

    it('should select tooltip axis ticks', () => {
      const { spy } = renderTestCase(selectTooltipAxisTicks);
      expect(spy).toHaveBeenLastCalledWith([
        {
          coordinate: 90,
          index: 0,
          offset: 60,
          value: 'Page A',
        },
        {
          coordinate: 30,
          index: 1,
          offset: 60,
          value: 'Page B',
        },
        {
          coordinate: -30,
          index: 2,
          offset: 60,
          value: 'Page C',
        },
        {
          coordinate: -90,
          index: 3,
          offset: 60,
          value: 'Page D',
        },
        {
          coordinate: -150,
          index: 4,
          offset: 60,
          value: 'Page E',
        },
        {
          coordinate: -210,
          index: 5,
          offset: 60,
          value: 'Page F',
        },
      ]);
    });

    it('should select tooltip state before & after hover', () => {
      const { container, spy } = renderTestCase(selectTooltipState);

      const expectedBeforeHover: TooltipState = {
        axisInteraction: {
          click: {
            active: false,
            dataKey: undefined,
            index: null,
            coordinate: undefined,
          },
          hover: {
            active: false,
            dataKey: undefined,
            index: null,
            coordinate: undefined,
          },
        },
        itemInteraction: {
          click: {
            active: false,
            index: null,
            dataKey: undefined,
            coordinate: undefined,
          },
          hover: {
            active: false,
            index: null,
            dataKey: undefined,
            coordinate: undefined,
          },
        },
        keyboardInteraction: {
          active: false,
          dataKey: undefined,
          index: null,
          coordinate: undefined,
        },
        syncInteraction: {
          active: false,
          dataKey: undefined,
          index: null,
          coordinate: undefined,
          label: undefined,
        },
        settings: {
          axisId: 0,
          shared: undefined,
          trigger: 'hover',
          active: undefined,
          defaultIndex: undefined,
        },
        tooltipItemPayloads: [
          {
            dataDefinedOnItem: undefined,
            positions: undefined,
            settings: {
              color: '#8884d8',
              dataKey: 'uv',
              fill: '#8884d8',
              hide: false,
              name: 'Mike',
              nameKey: undefined,
              stroke: '#8884d8',
              strokeWidth: undefined,
              type: undefined,
              unit: '',
            },
          },
        ],
      };
      expect(spy).toHaveBeenLastCalledWith(expectedBeforeHover);

      showTooltip(container, RadarChartTestCase.mouseHoverSelector);

      const expectedAfterHover: TooltipState = {
        axisInteraction: {
          click: {
            active: false,
            dataKey: undefined,
            index: null,
            coordinate: undefined,
          },
          hover: {
            active: true,
            dataKey: undefined,
            index: '5',
            coordinate: {
              // I don't think we need the whole axis to be included here but this is what the generator did
              // @ts-expect-error typescript says this property should not be here at all
              angle: -210,
              clockWise: false,
              cx: 300,
              cy: 300,
              endAngle: -270,
              innerRadius: 0,
              outerRadius: 236,
              radius: 141.4213562373095,
              startAngle: 90,
              x: 177.5255128608411,
              y: 229.28932188134524,
            },
          },
        },
        itemInteraction: {
          click: {
            active: false,
            index: null,
            dataKey: undefined,
            coordinate: undefined,
          },
          hover: {
            active: false,
            index: null,
            dataKey: undefined,
            coordinate: undefined,
          },
        },
        keyboardInteraction: {
          active: false,
          dataKey: undefined,
          index: null,
          coordinate: undefined,
        },
        syncInteraction: {
          active: false,
          dataKey: undefined,
          index: null,
          coordinate: undefined,
          label: undefined,
        },
        settings: {
          axisId: 0,
          shared: undefined,
          trigger: 'hover',
          active: undefined,
          defaultIndex: undefined,
        },
        tooltipItemPayloads: [
          {
            dataDefinedOnItem: undefined,
            positions: undefined,
            settings: {
              color: '#8884d8',
              dataKey: 'uv',
              fill: '#8884d8',
              hide: false,
              name: 'Mike',
              nameKey: undefined,
              stroke: '#8884d8',
              strokeWidth: undefined,
              type: undefined,
              unit: '',
            },
          },
        ],
      };
      expect(spy).toHaveBeenLastCalledWith(expectedAfterHover);
    });

    it('should select active label', () => {
      const { spy } = renderTestCase(state => selectActiveLabel(state, 'axis', 'hover', '2'));
      expect(spy).toHaveBeenLastCalledWith('Page C');
    });

    it('should select active coordinate', () => {
      const { container, spy } = renderTestCase(state => selectActiveCoordinate(state, 'axis', 'hover', undefined));
      expect(spy).toHaveBeenLastCalledWith(undefined);
      expect(spy).toHaveBeenCalledTimes(1);

      showTooltipOnCoordinate(container, RadarChartTestCase.mouseHoverSelector, RadarChartTestCase.mouseCoordinate);

      expect(spy).toHaveBeenLastCalledWith({
        angle: -210,
        clockWise: false,
        cx: 300,
        cy: 300,
        endAngle: -270,
        innerRadius: 0,
        outerRadius: 236,
        radius: 141.4213562373095,
        startAngle: 90,
        x: 177.5255128608411,
        y: 229.28932188134524,
      });
      expect(spy).toHaveBeenCalledTimes(2);
    });
  });

  describe('as a child of RadialBarChart', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <RadialBarChartTestCase.Wrapper>
        <Tooltip />
        {children}
      </RadialBarChartTestCase.Wrapper>
    ));

    it('should select chart layout', () => {
      const { spy } = renderTestCase(selectChartLayout);
      expect(spy).toHaveBeenLastCalledWith('radial');
    });

    it('should select tooltip axis type', () => {
      const { spy } = renderTestCase(selectTooltipAxisType);
      expect(spy).toHaveBeenLastCalledWith('radiusAxis');
    });

    it('should select tooltip axis ID', () => {
      const { spy } = renderTestCase(selectTooltipAxisId);
      expect(spy).toHaveBeenLastCalledWith(0);
    });

    it('should select tooltip axis settings', () => {
      const { spy } = renderTestCase(selectTooltipAxis);
      expect(spy).toHaveBeenLastCalledWith({
        allowDataOverflow: false,
        allowDecimals: undefined,
        allowDuplicatedCategory: true,
        dataKey: undefined,
        domain: undefined,
        id: 0,
        includeHidden: undefined,
        name: undefined,
        reversed: undefined,
        scale: 'auto',
        tick: true,
        tickCount: 5,
        ticks: undefined,
        type: 'number',
        unit: undefined,
      });
    });

    it('should select tooltip axis range', () => {
      const { spy } = renderTestCase(selectTooltipAxisRangeWithReverse);
      expect(spy).toHaveBeenLastCalledWith([0, 236]);
    });

    it('should select tooltip axis scale', () => {
      const { spy } = renderTestCase(selectTooltipAxisScale);
      expectLastCalledWithScale(spy, {
        domain: [0, 1, 2, 3, 4, 5],
        range: [0, 236],
      });
    });

    it('should select categoricalDomain = undefined', () => {
      const { spy } = renderTestCase(selectTooltipCategoricalDomain);
      expect(spy).toHaveBeenLastCalledWith(undefined);
    });

    it('should select tooltip axis ticks', () => {
      const { spy } = renderTestCase(selectTooltipAxisTicks);
      expect(spy).toHaveBeenLastCalledWith([
        {
          coordinate: 0,
          index: 0,
          offset: 0,
          value: 0,
        },
        {
          coordinate: 39.333333333333336,
          index: 1,
          offset: 0,
          value: 1,
        },
        {
          coordinate: 78.66666666666667,
          index: 2,
          offset: 0,
          value: 2,
        },
        {
          coordinate: 118,
          index: 3,
          offset: 0,
          value: 3,
        },
        {
          coordinate: 157.33333333333334,
          index: 4,
          offset: 0,
          value: 4,
        },
        {
          coordinate: 196.66666666666669,
          index: 5,
          offset: 0,
          value: 5,
        },
      ]);
    });

    it('should move when the mouse moves', async () => {
      mockGetBoundingClientRect({
        width: 10,
        height: 10,
      });
      const { container } = renderTestCase();

      showTooltipOnCoordinate(container, RadialBarChartTestCase.mouseHoverSelector, {
        clientX: 200,
        clientY: 200,
      });

      const tooltip1 = getTooltip(container);
      expect(tooltip1.getAttribute('style')).toContain('position: absolute;');
      expect(tooltip1.getAttribute('style')).toContain('top: 0px');
      expect(tooltip1.getAttribute('style')).toContain('left: 0px');

      showTooltipOnCoordinate(container, RadialBarChartTestCase.mouseHoverSelector, { clientX: 201, clientY: 201 });

      const tooltip2 = getTooltip(container);

      expect(tooltip2.getAttribute('style')).toContain(RadialBarChartTestCase.expectedTransform);
    });

    it('should move onTouchMove', async () => {
      mockGetBoundingClientRect({
        width: 10,
        height: 10,
      });
      const { container } = renderTestCase();

      showTooltipOnCoordinateTouch(container, RadialBarChartTestCase.mouseHoverSelector, {
        clientX: 200,
        clientY: 200,
      });

      const tooltip1 = getTooltip(container);
      expect(tooltip1.getAttribute('style')).toContain('position: absolute;');
      expect(tooltip1.getAttribute('style')).toContain('top: 0px');
      expect(tooltip1.getAttribute('style')).toContain('left: 0px');

      showTooltipOnCoordinateTouch(container, RadialBarChartTestCase.mouseHoverSelector, {
        clientX: 201,
        clientY: 201,
      });

      const tooltip2 = getTooltip(container);

      expect(tooltip2.getAttribute('style')).toContain(RadialBarChartTestCase.expectedTransform);
    });
  });

  describe('includeHidden prop', () => {
    describe('when includeHidden = true', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <ComposedChart width={400} height={400} data={PageData}>
          <Area dataKey="uv" hide name="1" />
          <Bar dataKey="pv" hide name="2" />
          <Line dataKey="amt" hide name="3" />
          <Scatter dataKey="uv" hide name="4" />
          <Line dataKey="pv" name="5" />
          <XAxis type="number" dataKey="amt" name="stature" unit="cm" />
          <YAxis type="number" dataKey="pv" name="weight" unit="kg" />
          <Tooltip includeHidden />
          {children}
        </ComposedChart>
      ));

      it('should select tooltip axis ID', () => {
        const { spy } = renderTestCase(selectTooltipAxisId);
        expect(spy).toHaveBeenLastCalledWith(0);
      });

      it('should select tooltip axis type', () => {
        const { spy } = renderTestCase(selectTooltipAxisType);
        expect(spy).toHaveBeenLastCalledWith('xAxis');
      });

      it('should select active label when given explicit index', () => {
        const { spy } = renderTestCase(state => selectActiveLabel(state, 'axis', 'hover', '2'));
        expect(spy).toHaveBeenLastCalledWith(2400);
      });

      it('should select active coordinate', () => {
        const { container, spy } = renderTestCase(state => selectActiveCoordinate(state, 'axis', 'hover', undefined));
        expect(spy).toHaveBeenLastCalledWith(undefined);
        expect(spy).toHaveBeenCalledTimes(1);

        showTooltip(container, composedChartMouseHoverTooltipSelector);

        expect(spy).toHaveBeenLastCalledWith({
          x: 395,
          y: 200,
        });
        expect(spy).toHaveBeenCalledTimes(2);
      });

      it('should select tooltip axis scale', () => {
        const { spy } = renderTestCase(selectTooltipAxisScale);
        expectLastCalledWithScale(spy, {
          domain: [0, 2400],
          range: [65, 395],
        });
      });

      it('should select tooltip axis settings', () => {
        const { spy } = renderTestCase(selectTooltipAxis);
        expect(spy).toHaveBeenLastCalledWith({
          allowDataOverflow: false,
          allowDecimals: true,
          allowDuplicatedCategory: true,
          angle: 0,
          dataKey: 'amt',
          domain: undefined,
          height: 30,
          hide: false,
          id: 0,
          includeHidden: false,
          interval: 'preserveEnd',
          minTickGap: 5,
          mirror: false,
          name: 'stature',
          orientation: 'bottom',
          padding: {
            left: 0,
            right: 0,
          },
          reversed: false,
          scale: 'auto',
          tick: true,
          tickCount: 5,
          tickFormatter: undefined,
          ticks: undefined,
          type: 'number',
          unit: 'cm',
        });
      });

      it('should select tooltip axis real scale type', () => {
        const { spy } = renderTestCase(selectTooltipAxisRealScaleType);
        expect(spy).toHaveBeenLastCalledWith('linear');
      });

      it('should select tooltip axis ticks', () => {
        const { spy } = renderTestCase(selectTooltipAxisTicks);
        expect(spy).toHaveBeenLastCalledWith([
          { coordinate: 395, value: 2400, index: 0, offset: 0 },
          { coordinate: 395, value: 2400, index: 1, offset: 0 },
          { coordinate: 395, value: 2400, index: 2, offset: 0 },
          { coordinate: 395, value: 2400, index: 3, offset: 0 },
          { coordinate: 395, value: 2400, index: 4, offset: 0 },
          { coordinate: 395, value: 2400, index: 5, offset: 0 },
        ]);
      });

      it('should select isActive', () => {
        const { container, spy } = renderTestCase(state => selectIsTooltipActive(state, 'axis', 'hover', undefined));
        expect(spy).toHaveBeenLastCalledWith({
          activeIndex: null,
          isActive: false,
        });
        expect(spy).toHaveBeenCalledTimes(3);

        showTooltip(container, composedChartMouseHoverTooltipSelector);

        expect(spy).toHaveBeenLastCalledWith({
          activeIndex: '0',
          isActive: true,
        });
        expect(spy).toHaveBeenCalledTimes(4);
      });

      it('should render tooltip payload for hidden items', () => {
        const { container } = renderTestCase();

        expectTooltipNotVisible(container);

        showTooltip(container, composedChartMouseHoverTooltipSelector);

        expectTooltipPayload(container, '2400', [
          '1 : 400',
          '2 : 2400',
          '3 : 2400',
          '5 : 2400',
          'stature : 2400cm',
          'weight : 2400kg',
        ]);
      });
    });

    describe('when includeHidden = false', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <ComposedChart width={400} height={400} data={PageData}>
          <Area dataKey="uv" hide name="1" />
          <Bar dataKey="pv" hide name="2" />
          <Line dataKey="amt" hide name="3" />
          <Scatter dataKey="uv" hide name="4" />
          <Line dataKey="pv" name="5" />
          <XAxis type="number" dataKey="amt" name="stature" unit="cm" />
          <YAxis type="number" dataKey="pv" name="weight" unit="kg" />
          <Tooltip includeHidden={false} />
          {children}
        </ComposedChart>
      ));

      it('should hide tooltip for hidden items', () => {
        const { container } = renderTestCase();

        expectTooltipNotVisible(container);

        showTooltip(container, composedChartMouseHoverTooltipSelector);

        expectTooltipPayload(container, '2400', ['5 : 2400']);
      });
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
    expect(tooltip.textContent).toBe('stature : 100cmweight : 200kg');

    fireEvent.click(container.querySelector('#goRight') as HTMLButtonElement);

    // Data should be displayed in the Tooltip payload
    expect(tooltip.textContent).toBe('stature : 120cmweight : 100kg');
  });
});

describe('Active element visibility', () => {
  beforeEach(() => {
    mockGetBoundingClientRect({ width: 100, height: 100 });
  });

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
  beforeEach(() => {
    mockGetBoundingClientRect({ width: 100, height: 100 });
  });

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
