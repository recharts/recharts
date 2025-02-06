import React, { ComponentType, ReactNode } from 'react';
import { beforeEach, describe, expect, it, test } from 'vitest';
import { fireEvent, queryByText, render } from '@testing-library/react';

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
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  RadialBar,
  RadialBarChart,
  Tooltip,
  XAxis,
  YAxis,
} from '../../../src';
import { PageData } from '../../_data';
import {
  expectTooltipCoordinate,
  expectTooltipNotVisible,
  expectTooltipPayload,
  getTooltip,
  hideTooltip,
  showTooltip,
  showTooltipOnCoordinate,
} from './tooltipTestHelpers';
import {
  areaChartMouseHoverTooltipSelector,
  barChartMouseHoverTooltipSelector,
  composedChartMouseHoverTooltipSelector,
  lineChartMouseHoverTooltipSelector,
  MouseHoverTooltipTriggerSelector,
  radarChartMouseHoverTooltipSelector,
  radialBarChartMouseHoverTooltipSelector,
} from './tooltipMouseHoverSelectors';
import { createSelectorTestCase, createSynchronisedSelectorTestCase } from '../../helper/createSelectorTestCase';
import { selectSyncId, selectSyncMethod } from '../../../src/state/selectors/rootPropsSelectors';
import { createRechartsStore } from '../../../src/state/store';
import {
  selectActiveCoordinate,
  selectActiveIndex,
  selectIsTooltipActive,
} from '../../../src/state/selectors/selectors';
import { setMouseOverAxisIndex, setSyncInteraction } from '../../../src/state/tooltipSlice';
import { selectActiveTooltipIndex } from '../../../src/state/selectors/tooltipSelectors';
import { mockGetBoundingClientRect } from '../../helper/mockGetBoundingClientRect';
import { selectSynchronisedTooltipState } from '../../../src/synchronisation/syncSelectors';
import { selectTooltipPayloadSearcher } from '../../../src/state/selectors/selectTooltipPayloadSearcher';

type TooltipSyncTestCase = {
  // For identifying which test is running
  name: string;
  mouseHoverSelector: MouseHoverTooltipTriggerSelector;
  Wrapper: ComponentType<{ children: ReactNode; syncId: string; dataKey: string; className?: string }>;
  tooltipContent: { chartOne: { name: string; value: string }; chartTwo: { name: string; value: string } };
};

const commonChartProps = {
  width: 400,
  height: 400,
  data: PageData,
};

const AreaChartTestCase: TooltipSyncTestCase = {
  name: 'AreaChart',
  Wrapper: ({ children, syncId, dataKey }) => (
    <AreaChart {...commonChartProps} syncId={syncId}>
      <Area dataKey={dataKey} />
      {children}
    </AreaChart>
  ),
  mouseHoverSelector: areaChartMouseHoverTooltipSelector,
  tooltipContent: { chartOne: { name: 'uv', value: '300' }, chartTwo: { name: 'pv', value: '1398' } },
};

const BarChartTestCase: TooltipSyncTestCase = {
  name: 'BarChart',
  Wrapper: ({ children, syncId, dataKey }) => (
    <BarChart {...commonChartProps} syncId={syncId}>
      <Bar dataKey={dataKey} />
      {children}
    </BarChart>
  ),
  mouseHoverSelector: barChartMouseHoverTooltipSelector,
  tooltipContent: { chartOne: { name: 'uv', value: '300' }, chartTwo: { name: 'pv', value: '1398' } },
};

const LineChartHorizontalTestCase: TooltipSyncTestCase = {
  name: 'horizontal LineChart',
  Wrapper: ({ children, syncId, dataKey }) => (
    <LineChart {...commonChartProps} syncId={syncId}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      {children}
      <Legend />
      <Line type="monotone" dataKey={dataKey} stroke="#82ca9d" />
    </LineChart>
  ),
  mouseHoverSelector: lineChartMouseHoverTooltipSelector,
  tooltipContent: { chartOne: { name: 'uv', value: '300' }, chartTwo: { name: 'pv', value: '1398' } },
};

const LineChartVerticalTestCase: TooltipSyncTestCase = {
  name: 'vertical LineChart',
  Wrapper: ({ children, syncId, dataKey }) => (
    <LineChart
      layout="vertical"
      {...commonChartProps}
      syncId={syncId}
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
      <Line dataKey={dataKey} stroke="#82ca9d" />
    </LineChart>
  ),
  mouseHoverSelector: lineChartMouseHoverTooltipSelector,
  tooltipContent: { chartOne: { name: 'uv', value: '278' }, chartTwo: { name: 'pv', value: '3908' } },
};

const ComposedChartWithAreaTestCase: TooltipSyncTestCase = {
  name: 'ComposedChart with Area',
  Wrapper: ({ children, syncId, dataKey }) => (
    <ComposedChart {...commonChartProps} syncId={syncId}>
      <XAxis dataKey="name" type="category" />
      <YAxis dataKey="uv" />
      {children}
      <Area dataKey={dataKey} />
    </ComposedChart>
  ),
  mouseHoverSelector: composedChartMouseHoverTooltipSelector,
  tooltipContent: { chartOne: { name: 'uv', value: '300' }, chartTwo: { name: 'pv', value: '1398' } },
};

const ComposedChartWithBarTestCase: TooltipSyncTestCase = {
  name: 'ComposedChart with Bar',
  Wrapper: ({ children, syncId, dataKey }) => (
    <ComposedChart {...commonChartProps} syncId={syncId}>
      <XAxis dataKey="name" type="category" />
      <YAxis dataKey="uv" />
      {children}
      <Bar dataKey={dataKey} />
    </ComposedChart>
  ),
  mouseHoverSelector: composedChartMouseHoverTooltipSelector,
  tooltipContent: { chartOne: { name: 'uv', value: '300' }, chartTwo: { name: 'pv', value: '1398' } },
};

const ComposedChartWithLineTestCase: TooltipSyncTestCase = {
  name: 'ComposedChart with Line',
  Wrapper: ({ children, syncId, dataKey }) => (
    <ComposedChart {...commonChartProps} syncId={syncId}>
      <XAxis dataKey="name" type="category" />
      <YAxis dataKey="amt" />
      {children}
      <Line dataKey={dataKey} />
    </ComposedChart>
  ),
  mouseHoverSelector: composedChartMouseHoverTooltipSelector,
  tooltipContent: { chartOne: { name: 'uv', value: '300' }, chartTwo: { name: 'pv', value: '1398' } },
};

const RadarChartTestCase: TooltipSyncTestCase = {
  name: 'RadarChart',
  Wrapper: ({ children, syncId, dataKey }) => (
    <RadarChart height={600} width={600} data={PageData} syncId={syncId}>
      <PolarGrid />
      <PolarAngleAxis dataKey="name" />
      <PolarRadiusAxis />
      <Radar name="Mike" dataKey={dataKey} stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      {children}
    </RadarChart>
  ),
  mouseHoverSelector: radarChartMouseHoverTooltipSelector,
  tooltipContent: { chartOne: { name: 'Mike', value: '189' }, chartTwo: { name: 'Mike', value: '4800' } },
};

const RadialBarChartTestCase: TooltipSyncTestCase = {
  name: 'RadialBarChart',
  Wrapper: ({ children, syncId, dataKey, className }) => (
    <RadialBarChart height={600} width={600} data={PageData} syncId={syncId} className={className}>
      <PolarGrid />
      <PolarAngleAxis dataKey="name" />
      <PolarRadiusAxis />
      <RadialBar
        name="Mike"
        dataKey={dataKey}
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
        isAnimationActive={false}
      />
      {children}
    </RadialBarChart>
  ),
  mouseHoverSelector: radialBarChartMouseHoverTooltipSelector,
  tooltipContent: { chartOne: { name: 'Mike', value: '278' }, chartTwo: { name: 'Mike', value: '3908' } },
};

// TODO: fix synchronization in Pie, Scatter, Funnel. These currently accept syncId as a prop but do not work.
// const PieChartTestCase: TooltipVisibilityTestCase = {
//   name: 'PieChart',
//   Wrapper: ({ children, syncId }) => (
//     <PieChart height={400} width={400} syncId={syncId}>
//       <Pie data={PageData} isAnimationActive={false} dataKey="uv" nameKey="name" cx={200} cy={200} />
//       {children}
//     </PieChart>
//   ),
//   mouseHoverSelector: pieChartMouseHoverTooltipSelector,
// };

// const ScatterChartTestCase: TooltipVisibilityTestCase = {
//   name: 'ScatterChart',
//   Wrapper: ({ children, syncId }) => (
//     <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }} syncId={syncId}>
//       <XAxis dataKey="uv" name="stature" unit="cm" />
//       <YAxis dataKey="pv" name="weight" unit="kg" />
//       <Scatter line name="A school" data={PageData} fill="#ff7300" />
//       {children}
//     </ScatterChart>
//   ),
//   mouseHoverSelector: scatterChartMouseHoverTooltipSelector,
// };

// const FunnelChartTestCase: TooltipVisibilityTestCase = {
//   name: 'FunnelChart',
//   Wrapper: ({ children, syncId }) => (
//     <FunnelChart width={700} height={500} syncId={syncId}>
//       <Funnel isAnimationActive={false} dataKey="uv" nameKey="name" data={PageData} />
//       {children}
//     </FunnelChart>
//   ),
//   mouseHoverSelector: funnelChartMouseHoverTooltipSelector,
// };

// TODO: support synchronization in Sankey, Sunburst, Treemap
// const SankeyTestCase: TooltipVisibilityTestCase = {
//   name: 'Sankey',
//   Wrapper: ({ children }) => (
//     <Sankey width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }} data={SankeyData}>
//       {children}
//     </Sankey>
//   ),
//   mouseHoverSelector: sankeyNodeChartMouseHoverTooltipSelector,
//   expectedTransform: 'transform: translate(35px, 114.89236115144739px);',
// };

// const SunburstChartTestCase: TooltipVisibilityTestCase = {
//   name: 'SunburstChart',
//   Wrapper: ({ children }) => (
//     <SunburstChart width={400} height={400} data={exampleSunburstData}>
//       {children}
//     </SunburstChart>
//   ),
//   mouseHoverSelector: sunburstChartMouseHoverTooltipSelector,
//   expectedTransform: 'transform: translate(285px, 210px);',
// };

// const TreemapTestCase: TooltipVisibilityTestCase = {
//   name: 'Treemap',
//   Wrapper: ({ children }) => (
//     <Treemap
//       width={400}
//       height={400}
//       data={exampleTreemapData}
//       isAnimationActive={false}
//       nameKey="name"
//       dataKey="value"
//     >
//       {children}
//     </Treemap>
//   ),
//   mouseHoverSelector: treemapNodeChartMouseHoverTooltipSelector,
//   expectedTransform: 'transform: translate(94.5px, 58.5px);',
// };

const cartesianTestCases: ReadonlyArray<TooltipSyncTestCase> = [
  AreaChartTestCase,
  BarChartTestCase,
  LineChartHorizontalTestCase,
  LineChartVerticalTestCase,
  ComposedChartWithAreaTestCase,
  ComposedChartWithBarTestCase,
  ComposedChartWithLineTestCase,
  // FunnelChartTestCase,
  // ScatterChartTestCase,
];

const radialTestCases: ReadonlyArray<TooltipSyncTestCase> = [
  // PieChartTestCase,
  RadarChartTestCase,
  RadialBarChartTestCase,
];

// Tooltip sync does not work for PieChart, ScatterChart, FunnelChart, SunburstChart, SankeyChart, Treemap
describe('Tooltip synchronization', () => {
  beforeEach(() => {
    mockGetBoundingClientRect({ width: 100, height: 100 });
  });

  describe.each([...cartesianTestCases, ...radialTestCases])(
    'as a child of $name',
    ({ name, Wrapper, mouseHoverSelector, tooltipContent }) => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <>
          <div id="chartOne">
            <Wrapper syncId="tooltipSync" dataKey="uv" className="chartOne">
              <Tooltip />
              {children}
            </Wrapper>
          </div>
          <div id="chartTwo">
            <Wrapper syncId="tooltipSync" dataKey="pv" className="chartTwo">
              <Tooltip />
            </Wrapper>
          </div>
        </>
      ));

      test(`${name} shows tooltip when synchronized with ${name}`, () => {
        const { chartOne: chartOneContent, chartTwo: chartTwoContent } = tooltipContent;
        const { container, debug } = renderTestCase();
        // use ids to separate the charts so the `.recharts-wrapper` class can be used to activate the tooltip
        const wrapperOne = container.querySelector('#chartOne');
        const wrapperTwo = container.querySelector('#chartTwo');

        // target the first chart to show the tooltip
        showTooltip(wrapperOne, mouseHoverSelector, debug);

        // target the second chart to see if it has the synchronized tooltip showing
        const tooltip = getTooltip(wrapperTwo);
        expect(tooltip).toBeVisible();

        [
          { wrapper: wrapperOne, content: chartOneContent },
          { wrapper: wrapperTwo, content: chartTwoContent },
        ].forEach(({ wrapper, content }) => {
          const tooltipContentName = wrapper.querySelector('.recharts-tooltip-item-name');
          const tooltipContentValue = wrapper.querySelector('.recharts-tooltip-item-value');
          expect(tooltipContentName).not.toBeNull();
          expect(tooltipContentValue).not.toBeNull();
          expect(tooltipContentName).toBeInTheDocument();
          expect(tooltipContentValue).toBeInTheDocument();
          expect(tooltipContentName.textContent).toEqual(content.name);
          expect(tooltipContentValue.textContent).toEqual(content.value);
        });
      });

      test(`${name} should put the syncId into redux state`, () => {
        const { spy } = renderTestCase(selectSyncId);
        expect(spy).toHaveBeenLastCalledWith('tooltipSync');
      });

      test(`${name} should select syncMethod`, () => {
        const { spy } = renderTestCase(selectSyncMethod);
        expect(spy).toHaveBeenLastCalledWith('index');
      });
    },
  );

  describe('when syncMethod=value on the receiving chart', () => {
    const data1 = [
      { name: 'Page A', uv: 300 },
      { name: 'Page B', uv: 400 },
      { name: 'Page C', uv: 500 },
      { name: 'Page D', uv: 600 },
      { name: 'Page E', uv: 700 },
      { name: 'Page F', uv: 800 },
    ];

    const data2 = [
      { name: 'Page F', pv: 1800 },
      { name: 'Page E', pv: 1700 },
      { name: 'Page D', pv: 1600 },
      { name: 'Page C', pv: 1500 },
      { name: 'Page B', pv: 1400 },
      { name: 'Page A', pv: 1300 },
    ];

    const renderTestCase = createSynchronisedSelectorTestCase(
      ({ children }) => (
        <LineChart syncId="tooltipSync" data={data1} width={400} height={400} className="chart-1">
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          {children}
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        </LineChart>
      ),
      ({ children }) => (
        <LineChart syncId="tooltipSync" syncMethod="value" data={data2} width={400} height={400} className="chart-2">
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          {children}
          <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
        </LineChart>
      ),
    );

    test('should synchronize the data based on the tooltip label - not value of the data', () => {
      const { wrapperA, wrapperB, debug } = renderTestCase();

      expectTooltipNotVisible(wrapperA);
      expectTooltipNotVisible(wrapperB);

      showTooltip(wrapperA, lineChartMouseHoverTooltipSelector, debug);

      expectTooltipPayload(wrapperA, 'Page C', ['uv : 500']);
      expectTooltipPayload(wrapperB, 'Page C', ['pv : 1500']);

      hideTooltip(wrapperA, lineChartMouseHoverTooltipSelector);

      expectTooltipNotVisible(wrapperA);
      expectTooltipNotVisible(wrapperB);
    });

    it('should select tooltip payload searcher', () => {
      const { spyA, spyB } = renderTestCase(selectTooltipPayloadSearcher);
      expect(spyA).toHaveBeenLastCalledWith(expect.any(Function));
      expect(spyB).toHaveBeenLastCalledWith(expect.any(Function));
    });

    it('should synchronise the y-coordinate', () => {
      const { wrapperA, spyA, spyB, debug } = renderTestCase(state =>
        selectActiveCoordinate(state, 'axis', 'hover', undefined),
      );

      showTooltip(wrapperA, lineChartMouseHoverTooltipSelector, debug);

      expect(spyA).toHaveBeenLastCalledWith({ x: 197, y: 200 });
      expect(spyB).toHaveBeenLastCalledWith({ x: 263, y: 200 });
    });
  });

  describe('selectActiveCoordinate', () => {
    it('should return undefined for initial state', () => {
      const store = createRechartsStore();
      const actual = selectActiveCoordinate(store.getState(), 'axis', 'hover', undefined);
      expect(actual).toEqual(undefined);
    });

    it('should return coordinate after mouseMoveAction', () => {
      const store = createRechartsStore();
      store.dispatch(
        setMouseOverAxisIndex({
          activeCoordinate: { x: 3, y: 4 },
          activeDataKey: 'uv',
          activeIndex: '1',
        }),
      );
      const actual = selectActiveCoordinate(store.getState(), 'axis', 'hover', undefined);
      expect(actual).toEqual({ x: 3, y: 4 });
    });

    it('should return coordinate after setSyncInteraction', () => {
      const store = createRechartsStore();
      store.dispatch(
        setSyncInteraction({
          active: true,
          coordinate: { x: 5, y: 6 },
          dataKey: 'uv',
          index: '1',
          label: 'Page B',
        }),
      );
      const actual = selectActiveCoordinate(store.getState(), 'axis', 'hover', undefined);
      expect(actual).toEqual({ x: 5, y: 6 });
    });
  });

  describe('selectIsTooltipActive', () => {
    it('should return false for initial state', () => {
      const store = createRechartsStore();
      const actual = selectIsTooltipActive(store.getState(), 'axis', 'hover', undefined);
      expect(actual).toEqual({
        activeIndex: null,
        isActive: false,
      });
    });

    it('should return true after mouseMoveAction', () => {
      const store = createRechartsStore();
      store.dispatch(
        setMouseOverAxisIndex({
          activeCoordinate: { x: 0, y: 0 },
          activeDataKey: 'uv',
          activeIndex: '1',
        }),
      );
      const actual = selectIsTooltipActive(store.getState(), 'axis', 'hover', undefined);
      expect(actual).toEqual({
        activeIndex: '1',
        isActive: true,
      });
    });

    it('should return true after setSyncInteraction', () => {
      const store = createRechartsStore();
      store.dispatch(
        setSyncInteraction({
          active: true,
          dataKey: 'uv',
          index: '1',
          label: 'Page B',
          coordinate: { x: 0, y: 0 },
        }),
      );
      const actual = selectIsTooltipActive(store.getState(), 'axis', 'hover', undefined);
      expect(actual).toEqual({
        activeIndex: '1',
        isActive: true,
      });
    });
  });

  describe('selectActiveIndex', () => {
    it('should return null for initial state', () => {
      const store = createRechartsStore();
      const actual = selectActiveIndex(store.getState(), 'axis', 'hover', undefined);
      expect(actual).toEqual(null);
    });

    it('should return index after mouseMoveAction', () => {
      const store = createRechartsStore();
      store.dispatch(
        setMouseOverAxisIndex({
          activeCoordinate: { x: 0, y: 0 },
          activeDataKey: 'uv',
          activeIndex: '1',
        }),
      );
      const actual = selectActiveIndex(store.getState(), 'axis', 'hover', undefined);
      expect(actual).toEqual('1');
    });

    it('should return index after setSyncInteraction', () => {
      const store = createRechartsStore();
      store.dispatch(
        setSyncInteraction({
          active: true,
          dataKey: 'uv',
          index: '2',
          label: 'Page B',
          coordinate: { x: 0, y: 0 },
        }),
      );
      const actual = selectActiveIndex(store.getState(), 'axis', 'hover', undefined);
      expect(actual).toEqual('2');
    });
  });

  describe('as a child of RadialBarChart', () => {
    const renderTestCase = createSynchronisedSelectorTestCase(
      ({ children }) => (
        <RadialBarChartTestCase.Wrapper syncId="my-sync-id" dataKey="uv" className="radialbar-chart-1">
          <Tooltip isAnimationActive={false} />
          {children}
        </RadialBarChartTestCase.Wrapper>
      ),
      ({ children }) => (
        <RadialBarChartTestCase.Wrapper syncId="my-sync-id" dataKey="uv" className="radialbar-chart-2">
          <Tooltip isAnimationActive={false} />
          {children}
        </RadialBarChartTestCase.Wrapper>
      ),
    );

    it('should synchronise active index for graphical items', () => {
      const { wrapperA, spyA, spyB } = renderTestCase(selectActiveTooltipIndex);

      expect(spyA).toHaveBeenLastCalledWith(null);
      expect(spyB).toHaveBeenLastCalledWith(null);

      showTooltip(wrapperA, radialBarChartMouseHoverTooltipSelector);

      expect(spyA).toHaveBeenLastCalledWith('4');
      expect(spyB).toHaveBeenLastCalledWith('4');
    });

    it('should synchronise active index for tooltip', () => {
      const { wrapperA, spyA, spyB } = renderTestCase(state =>
        selectIsTooltipActive(state, 'axis', 'hover', undefined),
      );

      expect(spyA).toHaveBeenLastCalledWith({
        activeIndex: null,
        isActive: false,
      });
      expect(spyB).toHaveBeenLastCalledWith({
        activeIndex: null,
        isActive: false,
      });

      showTooltip(wrapperA, radialBarChartMouseHoverTooltipSelector);

      expect(spyA).toHaveBeenLastCalledWith({
        activeIndex: '4',
        isActive: true,
      });
      expect(spyB).toHaveBeenLastCalledWith({
        activeIndex: '4',
        isActive: true,
      });
    });

    it('should synchronise tooltip coordinate', () => {
      const { wrapperA, spyA, spyB } = renderTestCase(state =>
        selectActiveCoordinate(state, 'axis', 'hover', undefined),
      );

      expect(spyA).toHaveBeenLastCalledWith(undefined);
      expect(spyB).toHaveBeenLastCalledWith(undefined);

      showTooltip(wrapperA, radialBarChartMouseHoverTooltipSelector);

      expect(spyA).toHaveBeenLastCalledWith({
        // This is returning lot more information than it should
        angle: 135,
        clockWise: false,
        cx: 300,
        cy: 300,
        endAngle: 360,
        innerRadius: 0,
        outerRadius: 236,
        radius: 157.33333333333334,
        startAngle: 0,
        x: 188.74853309331652,
        y: 188.7485330933165,
      });
      expect(spyB).toHaveBeenLastCalledWith({
        angle: 135,
        clockWise: false,
        cx: 300,
        cy: 300,
        endAngle: 360,
        innerRadius: 0,
        outerRadius: 236,
        radius: 157.33333333333334,
        startAngle: 0,
        x: 188.74853309331652,
        y: 188.7485330933165,
      });
    });

    test('should show and hide synchronised tooltip', () => {
      mockGetBoundingClientRect({
        width: 10,
        height: 10,
      });
      const { wrapperA, wrapperB } = renderTestCase();

      expectTooltipNotVisible(wrapperA);
      expectTooltipNotVisible(wrapperB);

      showTooltip(wrapperA, radialBarChartMouseHoverTooltipSelector);

      expectTooltipPayload(wrapperA, '4', ['Mike : 278']);
      expectTooltipPayload(wrapperB, '4', ['Mike : 278']);

      expectTooltipCoordinate(wrapperA, { x: 198.74853309331652, y: 198.7485330933165 });
      expectTooltipCoordinate(wrapperB, { x: 198.74853309331652, y: 198.7485330933165 });

      hideTooltip(wrapperA, radialBarChartMouseHoverTooltipSelector);

      expectTooltipNotVisible(wrapperA);
      expectTooltipNotVisible(wrapperB);
    });
  });

  describe('in two LineCharts where first one has Tooltip active=true and the other has no active prop', () => {
    const renderTestCase = createSynchronisedSelectorTestCase(
      ({ children }) => (
        <LineChart width={400} height={400} data={PageData} syncId="example-sync-id" className="BookOne">
          <Line isAnimationActive={false} name="BookOne" type="monotone" dataKey="uv" />
          <XAxis dataKey="name" />
          <Tooltip active />
          {children}
        </LineChart>
      ),
      ({ children }) => (
        <LineChart width={400} height={400} data={PageData} syncId="example-sync-id" className="BookTwo">
          <Line isAnimationActive={false} name="BookTwo" type="monotone" dataKey="uv" />
          <XAxis dataKey="name" />
          <Tooltip />
          {children}
        </LineChart>
      ),
    );

    it('should start with both tooltips hidden', () => {
      const { wrapperA, wrapperB } = renderTestCase();
      expectTooltipNotVisible(wrapperA);
      expectTooltipNotVisible(wrapperB);
    });

    it('should show both tooltips when hovering over chart A', () => {
      const { wrapperA, wrapperB, spyA, spyB, debug } = renderTestCase(selectActiveTooltipIndex);
      showTooltip(wrapperA, lineChartMouseHoverTooltipSelector, debug);

      expect(spyA).toHaveBeenLastCalledWith('2');
      expect(spyB).toHaveBeenLastCalledWith('2');

      expectTooltipPayload(wrapperA, 'Page C', ['BookOne : 300']);
      expectTooltipPayload(wrapperB, 'Page C', ['BookTwo : 300']);
    });

    it('should continue showing both tooltips after mouse leaves the chart A - because of the active prop!', () => {
      const { wrapperA, wrapperB, debug } = renderTestCase();
      showTooltip(wrapperA, lineChartMouseHoverTooltipSelector, debug);
      hideTooltip(wrapperA, lineChartMouseHoverTooltipSelector);
      expectTooltipPayload(wrapperA, 'Page C', ['BookOne : 300']);
      expectTooltipPayload(wrapperB, 'Page C', ['BookTwo : 300']);
    });

    it('should show both tooltips when hovering over chart B', () => {
      const { wrapperA, wrapperB, debug } = renderTestCase();
      showTooltip(wrapperB, lineChartMouseHoverTooltipSelector, debug);
      expectTooltipPayload(wrapperA, 'Page C', ['BookOne : 300']);
      expectTooltipPayload(wrapperB, 'Page C', ['BookTwo : 300']);
    });

    it('should hide both tooltips after mouse leaves the chart B - because it has no active prop', () => {
      const { wrapperA, wrapperB, debug } = renderTestCase();
      showTooltip(wrapperB, lineChartMouseHoverTooltipSelector, debug);
      hideTooltip(wrapperB, lineChartMouseHoverTooltipSelector);
      expectTooltipNotVisible(wrapperA);
      expectTooltipNotVisible(wrapperB);
    });

    it('after switching charts from B to A, it should follow the mouse and update coordinates on both charts', () => {
      const { wrapperA, wrapperB, debug } = renderTestCase();
      showTooltip(wrapperB, lineChartMouseHoverTooltipSelector, debug);
      hideTooltip(wrapperB, lineChartMouseHoverTooltipSelector);
      showTooltipOnCoordinate(wrapperA, lineChartMouseHoverTooltipSelector, { clientX: 100, clientY: 100 }, debug);

      expectTooltipPayload(wrapperA, 'Page B', ['BookOne : 300']);
      expectTooltipPayload(wrapperB, 'Page B', ['BookTwo : 300']);
    });

    it('after switching charts from A to B, it should follow the mouse and update coordinates on both charts', () => {
      const { wrapperA, wrapperB, spyA, spyB, debug } = renderTestCase(selectActiveTooltipIndex);
      showTooltip(wrapperA, lineChartMouseHoverTooltipSelector, debug);
      hideTooltip(wrapperA, lineChartMouseHoverTooltipSelector);
      showTooltipOnCoordinate(wrapperB, lineChartMouseHoverTooltipSelector, { clientX: 100, clientY: 100 }, debug);

      expect(spyA).toHaveBeenLastCalledWith('1');
      expect(spyB).toHaveBeenLastCalledWith('1');

      expectTooltipPayload(wrapperA, 'Page B', ['BookOne : 300']);
      expectTooltipPayload(wrapperB, 'Page B', ['BookTwo : 300']);
    });

    it('should clear synchronisation state after switching from A to B', () => {
      const { wrapperA, wrapperB, spyA, spyB, debug } = renderTestCase(selectSynchronisedTooltipState);

      expect(spyA).toHaveBeenLastCalledWith({
        active: false,
        coordinate: undefined,
        dataKey: undefined,
        index: null,
        label: undefined,
      });
      expect(spyA).toHaveBeenCalledTimes(2);
      expect(spyB).toHaveBeenLastCalledWith({
        active: false,
        coordinate: undefined,
        dataKey: undefined,
        index: null,
        label: undefined,
      });
      expect(spyB).toHaveBeenCalledTimes(1);

      showTooltip(wrapperA, lineChartMouseHoverTooltipSelector, debug);
      // chart A is the target of mouse events so its sync state stays undefined
      expect(spyA).toHaveBeenLastCalledWith({
        active: false,
        coordinate: undefined,
        dataKey: undefined,
        index: null,
        label: undefined,
      });
      expect(spyA).toHaveBeenCalledTimes(2);
      // chart B is now receiving synchronisation
      expect(spyB).toHaveBeenLastCalledWith({
        active: true,
        coordinate: {
          x: 161,
          y: 200,
        },
        dataKey: undefined,
        index: '2',
        label: 'Page C',
      });
      expect(spyB).toHaveBeenCalledTimes(2);

      hideTooltip(wrapperA, lineChartMouseHoverTooltipSelector);
      expect(spyA).toHaveBeenLastCalledWith({
        active: false,
        coordinate: undefined,
        dataKey: undefined,
        index: null,
        label: undefined,
      });
      expect(spyA).toHaveBeenCalledTimes(2);
      // thanks to the active=true prop, the synchronised state remains on the chart B even though the active is on chart A
      expect(spyB).toHaveBeenLastCalledWith({
        active: true,
        coordinate: {
          x: 161,
          y: 200,
        },
        dataKey: undefined,
        index: '2',
        label: 'Page C',
      });
      expect(spyB).toHaveBeenCalledTimes(2);

      showTooltipOnCoordinate(wrapperB, lineChartMouseHoverTooltipSelector, { clientX: 100, clientY: 100 }, debug);
      // chart A has now received new synchronisation state from mouse events on chart B
      expect(spyA).toHaveBeenLastCalledWith({
        active: true,
        coordinate: {
          x: 83,
          y: 100,
        },
        dataKey: undefined,
        index: '1',
        label: 'Page B',
      });
      expect(spyA).toHaveBeenCalledTimes(3);
      expect(spyB).toHaveBeenLastCalledWith({
        // Thanks to mouse events, synchronisation on this chart is now turned off so that it can start sending events to other charts
        active: false,
        coordinate: {
          x: 161,
          y: 200,
        },
        dataKey: undefined,
        index: '2',
        label: 'Page C',
      });
      expect(spyB).toHaveBeenCalledTimes(3);
    });
  });
});

describe('brush synchronization', () => {
  it('Should synchronize the data selected by (a single) Brush', async () => {
    const { container } = render(
      <>
        <LineChart width={600} height={300} data={PageData} syncId="brushSync">
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Brush dataKey="name" />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
        <AreaChart width={600} height={300} data={PageData} syncId="brushSync">
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Area type="monotone" dataKey="uv" stroke="#82ca9d" />
        </AreaChart>
      </>,
    );

    const wrappers = container.querySelectorAll<HTMLElement>('.recharts-wrapper');
    const firstChart = wrappers[0];
    expect(firstChart).toBeDefined();
    const secondChart = wrappers[1];
    expect(secondChart).toBeDefined();

    const brushTravellerOne = container.querySelectorAll<SVGRectElement>('.recharts-brush-traveller')[0];
    fireEvent.mouseDown(brushTravellerOne);
    fireEvent.mouseMove(brushTravellerOne, { clientX: 250 });
    fireEvent.mouseUp(brushTravellerOne);

    expect(queryByText(firstChart, 'Page A')).not.toBeInTheDocument();
    expect(queryByText(secondChart, 'Page A')).not.toBeInTheDocument();
  });
});

describe('Cursor synchronization', () => {
  beforeEach(() => {
    mockGetBoundingClientRect({ width: 100, height: 100 });
  });

  // Cursor sync does not work for RadialBarChart, PieChart, ScatterChart?
  describe.each([
    AreaChartTestCase,
    BarChartTestCase,
    LineChartHorizontalTestCase,
    LineChartVerticalTestCase,
    ComposedChartWithAreaTestCase,
    ComposedChartWithLineTestCase,
    RadarChartTestCase,
  ])('as a child of $name with syncId', ({ Wrapper, mouseHoverSelector }) => {
    it('should display cursor inside of the synchronized SVG', async () => {
      const { container, debug } = render(
        <>
          <Wrapper syncId="cursorSync" dataKey="uv">
            <Tooltip />
          </Wrapper>
          <Wrapper syncId="cursorSync" dataKey="amt">
            <Tooltip />
          </Wrapper>
        </>,
      );
      const wrappers = container.querySelectorAll('.recharts-wrapper');
      const wrapperOne = wrappers[0];
      const wrapperTwo = wrappers[1];

      expect(container.querySelector('.recharts-tooltip-cursor')).not.toBeInTheDocument();

      showTooltip(container, mouseHoverSelector, debug);

      expect(wrapperOne.querySelector('.recharts-wrapper svg .recharts-tooltip-cursor')).toBeVisible();
      expect(wrapperTwo.querySelector('.recharts-tooltip-cursor')).not.toBeNull();
      expect(wrapperTwo.querySelector('.recharts-tooltip-cursor')).toBeVisible();
    });
  });
});
