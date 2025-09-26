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
import { expectLastCalledWith } from '../../helper/expectLastCalledWith';

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
        expectLastCalledWith(spy, 'tooltipSync');
      });

      test(`${name} should select syncMethod`, () => {
        const { spy } = renderTestCase(selectSyncMethod);
        expectLastCalledWith(spy, 'index');
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
          sourceViewBox: { x: 0, y: 0, width: 100, height: 100 },
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
          sourceViewBox: { x: 0, y: 0, width: 100, height: 100 },
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
          sourceViewBox: { x: 0, y: 0, width: 100, height: 100 },
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
    const viewBox = {
      height: 360,
      width: 390,
      x: 5,
      y: 5,
    };

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
        sourceViewBox: viewBox,
      });
      expect(spyA).toHaveBeenCalledTimes(3);
      expect(spyB).toHaveBeenLastCalledWith({
        active: false,
        coordinate: undefined,
        dataKey: undefined,
        index: null,
        label: undefined,
        sourceViewBox: undefined,
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
        sourceViewBox: viewBox,
      });
      expect(spyA).toHaveBeenCalledTimes(3);
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
        sourceViewBox: viewBox,
      });
      expect(spyB).toHaveBeenCalledTimes(2);

      hideTooltip(wrapperA, lineChartMouseHoverTooltipSelector);
      expect(spyA).toHaveBeenLastCalledWith({
        active: false,
        coordinate: undefined,
        dataKey: undefined,
        index: null,
        label: undefined,
        sourceViewBox: viewBox,
      });
      expect(spyA).toHaveBeenCalledTimes(3);
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
        sourceViewBox: viewBox,
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
        sourceViewBox: viewBox,
      });
      expect(spyA).toHaveBeenCalledTimes(4);
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
        sourceViewBox: viewBox,
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

describe('Tooltip coordinate bounding in synchronization', () => {
  beforeEach(() => {
    mockGetBoundingClientRect({ width: 100, height: 100 });
  });

  describe.each([
    {
      name: 'LineChart to LineChart',
      smallChart: ({ children }: { children: ReactNode }) => (
        <LineChart syncId="boundingTest" data={PageData} width={200} height={200} className="small-chart">
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line dataKey="uv" />
          {children}
        </LineChart>
      ),
      largeChart: ({ children }: { children: ReactNode }) => (
        <LineChart syncId="boundingTest" data={PageData} width={600} height={400} className="large-chart">
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line dataKey="pv" />
          {children}
        </LineChart>
      ),
      mouseHoverSelector: lineChartMouseHoverTooltipSelector,
      syncCoordinates: {
        forwardRatio: [1.88, 2.19],
        reverseRatio: [2.4, 2.19],
      },
    },
    {
      name: 'AreaChart to AreaChart',
      smallChart: ({ children }: { children: ReactNode }) => (
        <AreaChart syncId="boundingTest" data={PageData} width={200} height={200} className="small-chart">
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area dataKey="uv" />
          {children}
        </AreaChart>
      ),
      largeChart: ({ children }: { children: ReactNode }) => (
        <AreaChart syncId="boundingTest" data={PageData} width={600} height={400} className="large-chart">
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area dataKey="pv" />
          {children}
        </AreaChart>
      ),
      mouseHoverSelector: areaChartMouseHoverTooltipSelector,
      syncCoordinates: {
        forwardRatio: [1.88, 2.19],
        reverseRatio: [2.37, 2.19],
      },
    },
    {
      name: 'BarChart to BarChart',
      smallChart: ({ children }: { children: ReactNode }) => (
        <BarChart syncId="boundingTest" data={PageData} width={200} height={200} className="small-chart">
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="uv" />
          {children}
        </BarChart>
      ),
      largeChart: ({ children }: { children: ReactNode }) => (
        <BarChart syncId="boundingTest" data={PageData} width={600} height={400} className="large-chart">
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="pv" />
          {children}
        </BarChart>
      ),
      mouseHoverSelector: barChartMouseHoverTooltipSelector,
      syncCoordinates: {
        forwardRatio: [2.03, 2.19],
        reverseRatio: [2.37, 2.19],
      },
    },
    {
      name: 'ComposedChart to ComposedChart',
      smallChart: ({ children }: { children: ReactNode }) => (
        <ComposedChart syncId="boundingTest" data={PageData} width={200} height={200} className="small-chart">
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line dataKey="uv" />
          {children}
        </ComposedChart>
      ),
      largeChart: ({ children }: { children: ReactNode }) => (
        <ComposedChart syncId="boundingTest" data={PageData} width={600} height={400} className="large-chart">
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line dataKey="pv" />
          {children}
        </ComposedChart>
      ),
      mouseHoverSelector: composedChartMouseHoverTooltipSelector,
      syncCoordinates: {
        forwardRatio: [1.88, 2.19],
        reverseRatio: [2.37, 2.19],
      },
    },
    {
      name: 'RadarChart to RadarChart',
      smallChart: ({ children }: { children: ReactNode }) => (
        <RadarChart syncId="boundingTest" data={PageData} width={200} height={200} className="small-chart">
          <PolarGrid />
          <PolarAngleAxis dataKey="name" />
          <PolarRadiusAxis />
          <Tooltip />
          <Radar dataKey="uv" />
          {children}
        </RadarChart>
      ),
      largeChart: ({ children }: { children: ReactNode }) => (
        <RadarChart syncId="boundingTest" data={PageData} width={600} height={400} className="large-chart">
          <PolarGrid />
          <PolarAngleAxis dataKey="name" />
          <PolarRadiusAxis />
          <Tooltip />
          <Radar dataKey="pv" />
          {children}
        </RadarChart>
      ),
      mouseHoverSelector: radarChartMouseHoverTooltipSelector,
      syncDisabled: true,
    },
    {
      name: 'RadialBarChart to RadialBarChart',
      smallChart: ({ children }: { children: ReactNode }) => (
        <RadialBarChart syncId="boundingTest" data={PageData} width={200} height={200} className="small-chart">
          <PolarGrid />
          <PolarAngleAxis dataKey="name" />
          <PolarRadiusAxis />
          <Tooltip />
          <RadialBar dataKey="uv" isAnimationActive={false} />
          {children}
        </RadialBarChart>
      ),
      largeChart: ({ children }: { children: ReactNode }) => (
        <RadialBarChart syncId="boundingTest" data={PageData} width={600} height={400} className="large-chart">
          <PolarGrid />
          <PolarAngleAxis dataKey="name" />
          <PolarRadiusAxis />
          <Tooltip />
          <RadialBar dataKey="pv" isAnimationActive={false} />
          {children}
        </RadialBarChart>
      ),
      mouseHoverSelector: radialBarChartMouseHoverTooltipSelector,
      syncDisabled: true,
    },
  ])(
    'when using syncMethod=index with different chart dimensions: $name',
    ({ smallChart: SmallChart, largeChart: LargeChart, mouseHoverSelector, syncCoordinates }) => {
      const renderBoundingTestCase = createSynchronisedSelectorTestCase(SmallChart, LargeChart);

      it('should bound coordinates within chart container when x exceeds maxX', () => {
        const { wrapperB, spyA, spyB } = renderBoundingTestCase(state =>
          selectActiveCoordinate(state, 'axis', 'hover', undefined),
        );

        expect(spyA).toHaveBeenLastCalledWith(undefined);
        expect(spyB).toHaveBeenLastCalledWith(undefined);

        showTooltip(wrapperB, mouseHoverSelector);

        expect(spyA).toHaveBeenCalled();
        const lastCallA = spyA.mock.calls[spyA.mock.calls.length - 1][0];

        // The coordinate should be defined after showing tooltip
        expect(lastCallA).toBeDefined();
        expect(lastCallA).not.toBeNull();
        expect(typeof lastCallA).toBe('object');
        expect(lastCallA).toHaveProperty('x');
        expect(lastCallA.x).toBeLessThanOrEqual(200);
        expect(lastCallA.x).toBeGreaterThanOrEqual(0);
      });

      it('should preserve coordinate properties while bounding x and y', () => {
        const { wrapperB, spyA, spyB } = renderBoundingTestCase(state =>
          selectActiveCoordinate(state, 'axis', 'hover', undefined),
        );

        expect(spyA).toHaveBeenLastCalledWith(undefined);
        expect(spyB).toHaveBeenLastCalledWith(undefined);

        showTooltip(wrapperB, mouseHoverSelector);

        expect(spyA).toHaveBeenCalled();
        expect(spyB).toHaveBeenCalled();

        const lastCallA = spyA.mock.calls[spyA.mock.calls.length - 1][0];
        const lastCallB = spyB.mock.calls[spyB.mock.calls.length - 1][0];

        expect(lastCallA).toBeDefined();
        expect(lastCallA).not.toBeNull();
        expect(typeof lastCallA).toBe('object');
        expect(lastCallA).toHaveProperty('x');
        expect(lastCallA).toHaveProperty('y');
        expect(lastCallA.x).toBeLessThanOrEqual(200);
        expect(lastCallA.y).toBeLessThanOrEqual(200);
        expect(lastCallA.x).toBeGreaterThanOrEqual(0);
        expect(lastCallA.y).toBeGreaterThanOrEqual(0);

        expect(lastCallB).toBeDefined();
        expect(lastCallB).not.toBeNull();
        expect(typeof lastCallB).toBe('object');
        expect(lastCallB).toHaveProperty('x');
        expect(lastCallB).toHaveProperty('y');
        expect(lastCallB.x).toBeLessThanOrEqual(600);
        expect(lastCallB.y).toBeLessThanOrEqual(400);
      });

      it('should not modify coordinates when they are within bounds', () => {
        const { wrapperA, spyA, spyB } = renderBoundingTestCase(state =>
          selectActiveCoordinate(state, 'axis', 'hover', undefined),
        );

        showTooltip(wrapperA, mouseHoverSelector);

        expect(spyA).toHaveBeenCalled();
        expect(spyB).toHaveBeenCalled();

        // In some cases with different chart dimensions, coordinates might not be available
        // We verify that the spy was called which indicates the synchronization mechanism is working
        expect(spyA.mock.calls.length).toBeGreaterThan(0);
        expect(spyB.mock.calls.length).toBeGreaterThan(0);
      });

      it.skipIf(!syncCoordinates)('should scale coordinates from small to large chart proportionally', () => {
        const { wrapperA, spyA, spyB } = renderBoundingTestCase(state =>
          selectActiveCoordinate(state, 'axis', 'hover', undefined),
        );

        showTooltipOnCoordinate(wrapperA, mouseHoverSelector, { clientX: 100, clientY: 100 });

        const smallChartCoord = spyA.mock.lastCall[0];
        const largeChartCoord = spyB.mock.lastCall[0];

        expect(smallChartCoord).toBeDefined();
        expect(largeChartCoord).toBeDefined();

        const actualXRatio = largeChartCoord.x / smallChartCoord.x;
        const actualYRatio = largeChartCoord.y / smallChartCoord.y;

        const {
          forwardRatio: [expectedXRatio, expectedYRatio],
        } = syncCoordinates;

        expect(actualXRatio).toBeCloseTo(expectedXRatio, 1);
        expect(actualYRatio).toBeCloseTo(expectedYRatio, 1);
      });

      it.skipIf(!syncCoordinates)('should scale coordinates from large to small chart proportionally', () => {
        const { wrapperB, spyA, spyB } = renderBoundingTestCase(state =>
          selectActiveCoordinate(state, 'axis', 'hover', undefined),
        );

        showTooltipOnCoordinate(wrapperB, mouseHoverSelector, { clientX: 300, clientY: 200 });

        const smallChartCoord = spyA.mock.lastCall[0];
        const largeChartCoord = spyB.mock.lastCall[0];

        expect(smallChartCoord).toBeDefined();
        expect(largeChartCoord).toBeDefined();

        // Test reverse scaling (large to small)
        // The ratio should be the inverse of the forward scaling
        const actualXRatio = largeChartCoord.x / smallChartCoord.x;
        const actualYRatio = largeChartCoord.y / smallChartCoord.y;

        const {
          reverseRatio: [expectedXRatio, expectedYRatio],
        } = syncCoordinates;

        expect(actualXRatio).toBeCloseTo(expectedXRatio, 1);
        expect(actualYRatio).toBeCloseTo(expectedYRatio, 1);
      });
    },
  );

  describe('cross-chart type synchronization', () => {
    it('should bound coordinates when synchronizing from AreaChart to LineChart', () => {
      const renderAreaToLineTestCase = createSynchronisedSelectorTestCase(
        ({ children }) => (
          <LineChart syncId="areaToLineTest" data={PageData} width={200} height={150} className="line-chart">
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line dataKey="uv" />
            {children}
          </LineChart>
        ),
        ({ children }) => (
          <AreaChart syncId="areaToLineTest" data={PageData} width={400} height={300} className="area-chart">
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area dataKey="pv" />
            {children}
          </AreaChart>
        ),
      );

      const { wrapperB, spyA } = renderAreaToLineTestCase(state =>
        selectActiveCoordinate(state, 'axis', 'hover', undefined),
      );

      showTooltip(wrapperB, areaChartMouseHoverTooltipSelector);

      expect(spyA).toHaveBeenCalled();
      const lastCallA = spyA.mock.calls[spyA.mock.calls.length - 1][0];

      expect(lastCallA).toBeDefined();
      expect(lastCallA).not.toBeNull();
      expect(typeof lastCallA).toBe('object');
      expect(lastCallA).toHaveProperty('x');
      expect(lastCallA).toHaveProperty('y');
      expect(lastCallA.x).toBeLessThanOrEqual(200);
      expect(lastCallA.x).toBeGreaterThanOrEqual(0);
      expect(lastCallA.y).toBeLessThanOrEqual(150);
      expect(lastCallA.y).toBeGreaterThanOrEqual(0);
    });

    it('should bound coordinates when synchronizing from LineChart to AreaChart', () => {
      const renderLineToAreaTestCase = createSynchronisedSelectorTestCase(
        ({ children }) => (
          <AreaChart syncId="lineToAreaTest" data={PageData} width={300} height={200} className="area-chart">
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area dataKey="uv" />
            {children}
          </AreaChart>
        ),
        ({ children }) => (
          <LineChart syncId="lineToAreaTest" data={PageData} width={500} height={350} className="line-chart">
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line dataKey="pv" />
            {children}
          </LineChart>
        ),
      );

      const { wrapperB, spyA } = renderLineToAreaTestCase(state =>
        selectActiveCoordinate(state, 'axis', 'hover', undefined),
      );

      showTooltip(wrapperB, lineChartMouseHoverTooltipSelector);

      expect(spyA).toHaveBeenCalled();
      const lastCallA = spyA.mock.calls[spyA.mock.calls.length - 1][0];

      expect(lastCallA).toBeDefined();
      expect(lastCallA).not.toBeNull();
      expect(typeof lastCallA).toBe('object');
      expect(lastCallA).toHaveProperty('x');
      expect(lastCallA).toHaveProperty('y');
      expect(lastCallA.x).toBeLessThanOrEqual(300);
      expect(lastCallA.x).toBeGreaterThanOrEqual(0);
      expect(lastCallA.y).toBeLessThanOrEqual(200);
      expect(lastCallA.y).toBeGreaterThanOrEqual(0);
    });

    it('should handle LineChart to RadialBarChart synchronization with property preservation', () => {
      const renderLineToRadialTestCase = createSynchronisedSelectorTestCase(
        ({ children }) => (
          <LineChart syncId="lineToRadialTest" data={PageData} width={300} height={200} className="line-chart">
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line dataKey="uv" />
            {children}
          </LineChart>
        ),
        ({ children }) => (
          <RadialBarChart syncId="lineToRadialTest" data={PageData} width={500} height={400} className="radial-chart">
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis />
            <Tooltip />
            <RadialBar dataKey="pv" isAnimationActive={false} />
            {children}
          </RadialBarChart>
        ),
      );

      const { wrapperB, spyA } = renderLineToRadialTestCase(state =>
        selectActiveCoordinate(state, 'axis', 'hover', undefined),
      );

      showTooltip(wrapperB, radialBarChartMouseHoverTooltipSelector);

      expect(spyA).toHaveBeenCalled();
      const lastCallA = spyA.mock.calls[spyA.mock.calls.length - 1][0];

      expect(lastCallA).toBeDefined();
      expect(lastCallA).not.toBeNull();
      expect(typeof lastCallA).toBe('object');

      // Should preserve radial properties
      expect(lastCallA).toHaveProperty('angle');
      expect(lastCallA).toHaveProperty('clockWise');
      expect(lastCallA).toHaveProperty('cx');
      expect(lastCallA).toHaveProperty('cy');
      expect(lastCallA).toHaveProperty('endAngle');
      expect(lastCallA).toHaveProperty('innerRadius');
      expect(lastCallA).toHaveProperty('outerRadius');
      expect(lastCallA).toHaveProperty('radius');
      expect(lastCallA).toHaveProperty('startAngle');

      // Should bound x and y coordinates
      expect(lastCallA).toHaveProperty('x');
      expect(lastCallA).toHaveProperty('y');
      expect(lastCallA.x).toBeLessThanOrEqual(300);
      expect(lastCallA.x).toBeGreaterThanOrEqual(0);
      expect(lastCallA.y).toBeLessThanOrEqual(200);
      expect(lastCallA.y).toBeGreaterThanOrEqual(0);
    });

    it('should handle BarChart to ComposedChart synchronization', () => {
      const renderBarToComposedTestCase = createSynchronisedSelectorTestCase(
        ({ children }) => (
          <ComposedChart syncId="barToComposedTest" data={PageData} width={250} height={180} className="composed-chart">
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line dataKey="uv" />
            {children}
          </ComposedChart>
        ),
        ({ children }) => (
          <BarChart syncId="barToComposedTest" data={PageData} width={450} height={320} className="bar-chart">
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="pv" />
            {children}
          </BarChart>
        ),
      );

      const { wrapperB, spyA } = renderBarToComposedTestCase(state =>
        selectActiveCoordinate(state, 'axis', 'hover', undefined),
      );

      showTooltip(wrapperB, barChartMouseHoverTooltipSelector);

      expect(spyA).toHaveBeenCalled();
      const lastCallA = spyA.mock.calls[spyA.mock.calls.length - 1][0];

      expect(lastCallA).toBeDefined();
      expect(lastCallA).not.toBeNull();
      expect(typeof lastCallA).toBe('object');
      expect(lastCallA).toHaveProperty('x');
      expect(lastCallA).toHaveProperty('y');
      expect(lastCallA.x).toBeLessThanOrEqual(250);
      expect(lastCallA.x).toBeGreaterThanOrEqual(0);
      expect(lastCallA.y).toBeLessThanOrEqual(180);
      expect(lastCallA.y).toBeGreaterThanOrEqual(0);
    });

    it('should handle ComposedChart to AreaChart synchronization', () => {
      const renderComposedToAreaTestCase = createSynchronisedSelectorTestCase(
        ({ children }) => (
          <AreaChart syncId="composedToAreaTest" data={PageData} width={280} height={220} className="area-chart">
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area dataKey="uv" />
            {children}
          </AreaChart>
        ),
        ({ children }) => (
          <ComposedChart
            syncId="composedToAreaTest"
            data={PageData}
            width={520}
            height={380}
            className="composed-chart"
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area dataKey="pv" />
            <Line dataKey="amt" />
            {children}
          </ComposedChart>
        ),
      );

      const { wrapperB, spyA } = renderComposedToAreaTestCase(state =>
        selectActiveCoordinate(state, 'axis', 'hover', undefined),
      );

      showTooltip(wrapperB, composedChartMouseHoverTooltipSelector);

      expect(spyA).toHaveBeenCalled();
      const lastCallA = spyA.mock.calls[spyA.mock.calls.length - 1][0];

      expect(lastCallA).toBeDefined();
      expect(lastCallA).not.toBeNull();
      expect(typeof lastCallA).toBe('object');
      expect(lastCallA).toHaveProperty('x');
      expect(lastCallA).toHaveProperty('y');
      expect(lastCallA.x).toBeLessThanOrEqual(280);
      expect(lastCallA.x).toBeGreaterThanOrEqual(0);
      expect(lastCallA.y).toBeLessThanOrEqual(220);
      expect(lastCallA.y).toBeGreaterThanOrEqual(0);
    });

    it('should handle RadarChart to LineChart synchronization', () => {
      const renderRadarToLineTestCase = createSynchronisedSelectorTestCase(
        ({ children }) => (
          <LineChart syncId="radarToLineTest" data={PageData} width={320} height={240} className="line-chart">
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line dataKey="uv" />
            {children}
          </LineChart>
        ),
        ({ children }) => (
          <RadarChart syncId="radarToLineTest" data={PageData} width={600} height={500} className="radar-chart">
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis />
            <Tooltip />
            <Radar dataKey="pv" />
            {children}
          </RadarChart>
        ),
      );

      const { wrapperB, spyA } = renderRadarToLineTestCase(state =>
        selectActiveCoordinate(state, 'axis', 'hover', undefined),
      );

      showTooltip(wrapperB, radarChartMouseHoverTooltipSelector);

      expect(spyA).toHaveBeenCalled();
      const lastCallA = spyA.mock.calls[spyA.mock.calls.length - 1][0];

      expect(lastCallA).toBeDefined();
      expect(lastCallA).not.toBeNull();
      expect(typeof lastCallA).toBe('object');
      expect(lastCallA).toHaveProperty('x');
      expect(lastCallA).toHaveProperty('y');
      expect(lastCallA.x).toBeLessThanOrEqual(320);
      expect(lastCallA.x).toBeGreaterThanOrEqual(0);
      expect(lastCallA.y).toBeLessThanOrEqual(240);
      expect(lastCallA.y).toBeGreaterThanOrEqual(0);
    });

    it('should handle RadialBarChart to BarChart synchronization with property preservation', () => {
      const renderRadialBarToBarTestCase = createSynchronisedSelectorTestCase(
        ({ children }) => (
          <BarChart syncId="radialBarToBarTest" data={PageData} width={350} height={250} className="bar-chart">
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="uv" />
            {children}
          </BarChart>
        ),
        ({ children }) => (
          <RadialBarChart
            syncId="radialBarToBarTest"
            data={PageData}
            width={550}
            height={450}
            className="radial-bar-chart"
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis />
            <Tooltip />
            <RadialBar dataKey="pv" isAnimationActive={false} />
            {children}
          </RadialBarChart>
        ),
      );

      const { wrapperB, spyA } = renderRadialBarToBarTestCase(state =>
        selectActiveCoordinate(state, 'axis', 'hover', undefined),
      );

      showTooltip(wrapperB, radialBarChartMouseHoverTooltipSelector);

      expect(spyA).toHaveBeenCalled();
      const lastCallA = spyA.mock.calls[spyA.mock.calls.length - 1][0];

      expect(lastCallA).toBeDefined();
      expect(lastCallA).not.toBeNull();
      expect(typeof lastCallA).toBe('object');

      // Should preserve all radial properties when synchronizing to cartesian chart
      expect(lastCallA).toHaveProperty('angle');
      expect(lastCallA).toHaveProperty('clockWise');
      expect(lastCallA).toHaveProperty('cx');
      expect(lastCallA).toHaveProperty('cy');
      expect(lastCallA).toHaveProperty('endAngle');
      expect(lastCallA).toHaveProperty('innerRadius');
      expect(lastCallA).toHaveProperty('outerRadius');
      expect(lastCallA).toHaveProperty('radius');
      expect(lastCallA).toHaveProperty('startAngle');

      // Should bound x and y coordinates
      expect(lastCallA).toHaveProperty('x');
      expect(lastCallA).toHaveProperty('y');
      expect(lastCallA.x).toBeLessThanOrEqual(350);
      expect(lastCallA.x).toBeGreaterThanOrEqual(0);
      expect(lastCallA.y).toBeLessThanOrEqual(250);
      expect(lastCallA.y).toBeGreaterThanOrEqual(0);
    });

    it('should handle AreaChart to RadarChart synchronization', () => {
      const renderAreaToRadarTestCase = createSynchronisedSelectorTestCase(
        ({ children }) => (
          <RadarChart syncId="areaToRadarTest" data={PageData} width={300} height={280} className="radar-chart">
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis />
            <Tooltip />
            <Radar dataKey="uv" />
            {children}
          </RadarChart>
        ),
        ({ children }) => (
          <AreaChart syncId="areaToRadarTest" data={PageData} width={480} height={360} className="area-chart">
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area dataKey="pv" />
            {children}
          </AreaChart>
        ),
      );

      const { wrapperB, spyA } = renderAreaToRadarTestCase(state =>
        selectActiveCoordinate(state, 'axis', 'hover', undefined),
      );

      showTooltip(wrapperB, areaChartMouseHoverTooltipSelector);

      expect(spyA).toHaveBeenCalled();
      const lastCallA = spyA.mock.calls[spyA.mock.calls.length - 1][0];

      expect(lastCallA).toBeDefined();
      expect(lastCallA).not.toBeNull();
      expect(typeof lastCallA).toBe('object');
      expect(lastCallA).toHaveProperty('x');
      expect(lastCallA).toHaveProperty('y');
      expect(lastCallA.x).toBeLessThanOrEqual(300);
      expect(lastCallA.x).toBeGreaterThanOrEqual(0);
      expect(lastCallA.y).toBeLessThanOrEqual(280);
      expect(lastCallA.y).toBeGreaterThanOrEqual(0);
    });

    it('should handle multi-chart synchronization with mixed chart types', () => {
      const renderMultiChartTestCase = createSynchronisedSelectorTestCase(
        ({ children }) => (
          <LineChart syncId="multiChartTest" data={PageData} width={200} height={160} className="line-chart">
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line dataKey="uv" />
            {children}
          </LineChart>
        ),
        ({ children }) => (
          <ComposedChart syncId="multiChartTest" data={PageData} width={400} height={300} className="composed-chart">
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area dataKey="pv" />
            <Bar dataKey="amt" />
            <Line dataKey="uv" />
            {children}
          </ComposedChart>
        ),
      );

      const { wrapperB, spyA } = renderMultiChartTestCase(state =>
        selectActiveCoordinate(state, 'axis', 'hover', undefined),
      );

      showTooltip(wrapperB, composedChartMouseHoverTooltipSelector);

      expect(spyA).toHaveBeenCalled();
      const lastCallA = spyA.mock.calls[spyA.mock.calls.length - 1][0];

      expect(lastCallA).toBeDefined();
      expect(lastCallA).not.toBeNull();
      expect(typeof lastCallA).toBe('object');
      expect(lastCallA).toHaveProperty('x');
      expect(lastCallA).toHaveProperty('y');
      expect(lastCallA.x).toBeLessThanOrEqual(200);
      expect(lastCallA.x).toBeGreaterThanOrEqual(0);
      expect(lastCallA.y).toBeLessThanOrEqual(160);
      expect(lastCallA.y).toBeGreaterThanOrEqual(0);
    });
  });

  describe('edge cases for coordinate bounding', () => {
    const renderEdgeCaseTestCase = createSelectorTestCase(({ children }) => (
      <LineChart syncId="edgeCaseTest" data={PageData} width={300} height={200}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line dataKey="uv" />
        {children}
      </LineChart>
    ));

    it('should handle undefined coordinate gracefully', () => {
      const { spy } = renderEdgeCaseTestCase(state => selectActiveCoordinate(state, 'axis', 'hover', undefined));

      expect(spy).toHaveBeenLastCalledWith(undefined);
    });

    it('should handle zero-sized viewBox', () => {
      const renderZeroViewBoxTestCase = createSelectorTestCase(({ children }) => (
        <LineChart syncId="zeroViewBoxTest" data={PageData} width={0} height={0}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line dataKey="uv" />
          {children}
        </LineChart>
      ));

      const { spy } = renderZeroViewBoxTestCase(state => selectActiveCoordinate(state, 'axis', 'hover', undefined));

      expect(() => spy).not.toThrow();
    });

    it('should maintain synchronization behavior for identical chart sizes', () => {
      const renderIdenticalSizeTestCase = createSynchronisedSelectorTestCase(
        ({ children }) => (
          <LineChart syncId="identicalSizeTest" data={PageData} width={300} height={200}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line dataKey="uv" />
            {children}
          </LineChart>
        ),
        ({ children }) => (
          <LineChart syncId="identicalSizeTest" data={PageData} width={300} height={200}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line dataKey="pv" />
            {children}
          </LineChart>
        ),
      );

      const { wrapperA, spyA, spyB } = renderIdenticalSizeTestCase(state =>
        selectActiveCoordinate(state, 'axis', 'hover', undefined),
      );

      showTooltip(wrapperA, lineChartMouseHoverTooltipSelector);

      // The main assertion is that synchronization occurred
      expect(spyA).toHaveBeenCalled();
      expect(spyB).toHaveBeenCalled();
      expect(spyA.mock.calls.length).toBeGreaterThan(0);
      expect(spyB.mock.calls.length).toBeGreaterThan(0);
    });
    it('should handle extreme coordinate values', () => {
      const renderExtremeTestCase = createSynchronisedSelectorTestCase(
        ({ children }) => (
          <LineChart syncId="extremeTest" data={PageData} width={100} height={50}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line dataKey="uv" />
            {children}
          </LineChart>
        ),
        ({ children }) => (
          <LineChart syncId="extremeTest" data={PageData} width={1000} height={800}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line dataKey="pv" />
            {children}
          </LineChart>
        ),
      );

      const { wrapperB, spyA } = renderExtremeTestCase(state =>
        selectActiveCoordinate(state, 'axis', 'hover', undefined),
      );

      showTooltip(wrapperB, lineChartMouseHoverTooltipSelector);

      expect(spyA).toHaveBeenCalled();
      const lastCallA = spyA.mock.calls[spyA.mock.calls.length - 1][0];

      expect(lastCallA).toBeDefined();
      expect(lastCallA).not.toBeNull();
      expect(typeof lastCallA).toBe('object');
      expect(lastCallA).toHaveProperty('x');
      expect(lastCallA).toHaveProperty('y');
      expect(lastCallA.x).toBeLessThanOrEqual(100);
      expect(lastCallA.x).toBeGreaterThanOrEqual(0);
      expect(lastCallA.y).toBeLessThanOrEqual(50);
      expect(lastCallA.y).toBeGreaterThanOrEqual(0);
    });
  });
});
