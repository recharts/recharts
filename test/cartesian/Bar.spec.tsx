import React from 'react';
import { beforeEach, describe, expect, it, test, vi } from 'vitest';
import { renderWithStrictMode } from '../helper/renderWithStrictMode';
import { Bar, BarChart, BarProps, Customized, Legend, LegendType, Tooltip, XAxis, YAxis } from '../../src';
import {
  allCartesianChartsExcept,
  AreaChartCase,
  BarChartCase,
  CartesianChartTestCase,
  ComposedChartCase,
  FunnelChartCase,
  includingCompact,
  LineChartCase,
} from '../helper/parameterizedTestCases';
import { useAppSelector } from '../../src/state/hooks';
import { CartesianGraphicalItemSettings } from '../../src/state/graphicalItemsSlice';
import { expectBarIsActive, expectBarIsNotActive, expectBars, getAllBars } from '../helper/expectBars';
import { expectLabels } from '../helper/expectLabel';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';
import {
  expectTooltipCoordinate,
  expectTooltipPayload,
  showTooltipOnCoordinate,
} from '../component/Tooltip/tooltipTestHelpers';
import { selectActiveTooltipIndex, selectTooltipAxisTicks } from '../../src/state/selectors/tooltipSelectors';
import { barChartMouseHoverTooltipSelector } from '../component/Tooltip/tooltipMouseHoverSelectors';
import { mockGetBoundingClientRect } from '../helper/mockGetBoundingClientRect';
import { noInteraction, TooltipState } from '../../src/state/tooltipSlice';

type TestCase = CartesianChartTestCase;

const chartsThatSupportBar: ReadonlyArray<TestCase> = [ComposedChartCase, BarChartCase];

const chartsThatDoNotSupportBar: ReadonlyArray<TestCase> = includingCompact(
  // both AreaChart and LineChart will now render Bar but ... differently.
  // also FunnelChart renders bars now!
  allCartesianChartsExcept([...chartsThatSupportBar, LineChartCase, AreaChartCase, FunnelChartCase]),
);

const data = [
  { x: 10, y: 50, width: 20, height: 50, value: 100, label: 'test1' },
  { x: 50, y: 50, width: 20, height: 50, value: 200, label: 'test2' },
  { x: 90, y: 50, width: 20, height: 50, value: 300, label: 'test3' },
  { x: 130, y: 50, width: 20, height: 50, value: 400, label: 'test4' },
  { x: 170, y: 50, width: 20, height: 50, value: 500, label: 'test5' },
];

describe.each(chartsThatSupportBar)('<Bar /> as a child of $testName', ({ ChartElement }) => {
  it(`should render rectangles in horizontal Bar`, () => {
    const { container } = renderWithStrictMode(
      <ChartElement layout="horizontal" data={data}>
        <Bar isAnimationActive={false} dataKey="value" />
      </ChartElement>,
    );

    expectBars(container, [
      {
        d: 'M 14.8,413.3333333333333 h 78 v 81.66666666666669 h -78 Z',
        height: '81.66666666666669',
        radius: '0',
        width: '78',
        x: '14.8',
        y: '413.3333333333333',
      },
      {
        d: 'M 112.8,331.66666666666674 h 78 v 163.33333333333326 h -78 Z',
        height: '163.33333333333326',
        radius: '0',
        width: '78',
        x: '112.8',
        y: '331.66666666666674',
      },
      {
        d: 'M 210.8,250 h 78 v 245 h -78 Z',
        height: '245',
        radius: '0',
        width: '78',
        x: '210.8',
        y: '250',
      },
      {
        d: 'M 308.8,168.33333333333337 h 78 v 326.66666666666663 h -78 Z',
        height: '326.66666666666663',
        radius: '0',
        width: '78',
        x: '308.8',
        y: '168.33333333333337',
      },
      {
        d: 'M 406.8,86.66666666666666 h 78 v 408.33333333333337 h -78 Z',
        height: '408.33333333333337',
        radius: '0',
        width: '78',
        x: '406.8',
        y: '86.66666666666666',
      },
    ]);
  });

  it(`should render rectangles when wrapped in custom Component`, () => {
    const MyBar = (props: BarProps) => <Bar {...props} />;
    const { container } = renderWithStrictMode(
      <ChartElement layout="horizontal" data={data}>
        <MyBar isAnimationActive={false} dataKey="value" />
      </ChartElement>,
    );

    expectBars(container, [
      {
        d: 'M 14.8,413.3333333333333 h 78 v 81.66666666666669 h -78 Z',
        height: '81.66666666666669',
        radius: '0',
        width: '78',
        x: '14.8',
        y: '413.3333333333333',
      },
      {
        d: 'M 112.8,331.66666666666674 h 78 v 163.33333333333326 h -78 Z',
        height: '163.33333333333326',
        radius: '0',
        width: '78',
        x: '112.8',
        y: '331.66666666666674',
      },
      {
        d: 'M 210.8,250 h 78 v 245 h -78 Z',
        height: '245',
        radius: '0',
        width: '78',
        x: '210.8',
        y: '250',
      },
      {
        d: 'M 308.8,168.33333333333337 h 78 v 326.66666666666663 h -78 Z',
        height: '326.66666666666663',
        radius: '0',
        width: '78',
        x: '308.8',
        y: '168.33333333333337',
      },
      {
        d: 'M 406.8,86.66666666666666 h 78 v 408.33333333333337 h -78 Z',
        height: '408.33333333333337',
        radius: '0',
        width: '78',
        x: '406.8',
        y: '86.66666666666666',
      },
    ]);
  });

  it(`should render rectangles in vertical Bar`, () => {
    const { container } = renderWithStrictMode(
      <ChartElement layout="vertical" data={data}>
        <YAxis type="category" />
        <XAxis type="number" />
        <Bar isAnimationActive={false} dataKey="value" />
      </ChartElement>,
    );

    expectBars(container, [
      {
        d: 'M 65,14.2 h 71.66666666666669 v 73 h -71.66666666666669 Z',
        height: '73',
        radius: '0',
        width: '71.66666666666669',
        x: '65',
        y: '14.2',
      },
      {
        d: 'M 65,106.2 h 143.33333333333334 v 73 h -143.33333333333334 Z',
        height: '73',
        radius: '0',
        width: '143.33333333333334',
        x: '65',
        y: '106.2',
      },
      {
        d: 'M 65,198.2 h 215 v 73 h -215 Z',
        height: '73',
        radius: '0',
        width: '215',
        x: '65',
        y: '198.2',
      },
      {
        d: 'M 65,290.2 h 286.6666666666667 v 73 h -286.6666666666667 Z',
        height: '73',
        radius: '0',
        width: '286.6666666666667',
        x: '65',
        y: '290.2',
      },
      {
        d: 'M 65,382.2 h 358.3333333333333 v 73 h -358.3333333333333 Z',
        height: '73',
        radius: '0',
        width: '358.3333333333333',
        x: '65',
        y: '382.2',
      },
    ]);
  });

  it("Don't render any rectangle when data is empty", () => {
    const { container } = renderWithStrictMode(
      <ChartElement data={[]}>
        <Bar dataKey="value" />
      </ChartElement>,
    );

    expectBars(container, []);
  });

  describe('barSize', () => {
    it('should make bars wider in horizontal chart', () => {
      const barSize = 79;
      const { container } = renderWithStrictMode(
        <ChartElement layout="horizontal" data={data}>
          <Bar isAnimationActive={false} dataKey="value" barSize={barSize} />
        </ChartElement>,
      );

      expectBars(container, [
        {
          d: 'M 14,413.3333333333333 h 79 v 81.66666666666669 h -79 Z',
          height: '81.66666666666669',
          radius: '0',
          width: '79',
          x: '14',
          y: '413.3333333333333',
        },
        {
          d: 'M 112,331.66666666666674 h 79 v 163.33333333333326 h -79 Z',
          height: '163.33333333333326',
          radius: '0',
          width: '79',
          x: '112',
          y: '331.66666666666674',
        },
        {
          d: 'M 210,250 h 79 v 245 h -79 Z',
          height: '245',
          radius: '0',
          width: '79',
          x: '210',
          y: '250',
        },
        {
          d: 'M 308,168.33333333333337 h 79 v 326.66666666666663 h -79 Z',
          height: '326.66666666666663',
          radius: '0',
          width: '79',
          x: '308',
          y: '168.33333333333337',
        },
        {
          d: 'M 406,86.66666666666666 h 79 v 408.33333333333337 h -79 Z',
          height: '408.33333333333337',
          radius: '0',
          width: '79',
          x: '406',
          y: '86.66666666666666',
        },
      ]);
    });

    it('should make bars narrower in horizontal chart', () => {
      const barSize = 77;
      const { container } = renderWithStrictMode(
        <ChartElement layout="horizontal" data={data}>
          <Bar isAnimationActive={false} dataKey="value" barSize={barSize} />
        </ChartElement>,
      );

      expectBars(container, [
        {
          d: 'M 15,413.3333333333333 h 77 v 81.66666666666669 h -77 Z',
          height: '81.66666666666669',
          radius: '0',
          width: '77',
          x: '15',
          y: '413.3333333333333',
        },
        {
          d: 'M 113,331.66666666666674 h 77 v 163.33333333333326 h -77 Z',
          height: '163.33333333333326',
          radius: '0',
          width: '77',
          x: '113',
          y: '331.66666666666674',
        },
        {
          d: 'M 211,250 h 77 v 245 h -77 Z',
          height: '245',
          radius: '0',
          width: '77',
          x: '211',
          y: '250',
        },
        {
          d: 'M 309,168.33333333333337 h 77 v 326.66666666666663 h -77 Z',
          height: '326.66666666666663',
          radius: '0',
          width: '77',
          x: '309',
          y: '168.33333333333337',
        },
        {
          d: 'M 407,86.66666666666666 h 77 v 408.33333333333337 h -77 Z',
          height: '408.33333333333337',
          radius: '0',
          width: '77',
          x: '407',
          y: '86.66666666666666',
        },
      ]);
    });

    it('should make bars taller in vertical chart', () => {
      const barSize = 74;
      const { container } = renderWithStrictMode(
        <ChartElement layout="vertical" data={data}>
          <YAxis type="category" />
          <XAxis type="number" />
          <Bar isAnimationActive={false} dataKey="value" barSize={barSize} />
        </ChartElement>,
      );

      expectBars(container, [
        {
          d: 'M 65,14 h 71.66666666666669 v 74 h -71.66666666666669 Z',
          height: '74',
          radius: '0',
          width: '71.66666666666669',
          x: '65',
          y: '14',
        },
        {
          d: 'M 65,106 h 143.33333333333334 v 74 h -143.33333333333334 Z',
          height: '74',
          radius: '0',
          width: '143.33333333333334',
          x: '65',
          y: '106',
        },
        {
          d: 'M 65,198 h 215 v 74 h -215 Z',
          height: '74',
          radius: '0',
          width: '215',
          x: '65',
          y: '198',
        },
        {
          d: 'M 65,290 h 286.6666666666667 v 74 h -286.6666666666667 Z',
          height: '74',
          radius: '0',
          width: '286.6666666666667',
          x: '65',
          y: '290',
        },
        {
          d: 'M 65,382 h 358.3333333333333 v 74 h -358.3333333333333 Z',
          height: '74',
          radius: '0',
          width: '358.3333333333333',
          x: '65',
          y: '382',
        },
      ]);
    });

    it('should make bars shorter in vertical chart', () => {
      const barSize = 72;
      const { container } = renderWithStrictMode(
        <ChartElement layout="vertical" data={data}>
          <YAxis type="category" />
          <XAxis type="number" />
          <Bar isAnimationActive={false} dataKey="value" barSize={barSize} />
        </ChartElement>,
      );

      expectBars(container, [
        {
          d: 'M 65,15 h 71.66666666666669 v 72 h -71.66666666666669 Z',
          height: '72',
          radius: '0',
          width: '71.66666666666669',
          x: '65',
          y: '15',
        },
        {
          d: 'M 65,107 h 143.33333333333334 v 72 h -143.33333333333334 Z',
          height: '72',
          radius: '0',
          width: '143.33333333333334',
          x: '65',
          y: '107',
        },
        {
          d: 'M 65,199 h 215 v 72 h -215 Z',
          height: '72',
          radius: '0',
          width: '215',
          x: '65',
          y: '199',
        },
        {
          d: 'M 65,291 h 286.6666666666667 v 72 h -286.6666666666667 Z',
          height: '72',
          radius: '0',
          width: '286.6666666666667',
          x: '65',
          y: '291',
        },
        {
          d: 'M 65,383 h 358.3333333333333 v 72 h -358.3333333333333 Z',
          height: '72',
          radius: '0',
          width: '358.3333333333333',
          x: '65',
          y: '383',
        },
      ]);
    });
  });

  describe('maxBarSize', () => {
    it('should do nothing if bars are already smaller than the maxBarSize', () => {
      const { container } = renderWithStrictMode(
        <ChartElement layout="horizontal" data={data}>
          <Bar isAnimationActive={false} dataKey="value" maxBarSize={79} />
        </ChartElement>,
      );

      expectBars(container, [
        {
          d: 'M 14.8,413.3333333333333 h 78 v 81.66666666666669 h -78 Z',
          height: '81.66666666666669',
          radius: '0',
          width: '78',
          x: '14.8',
          y: '413.3333333333333',
        },
        {
          d: 'M 112.8,331.66666666666674 h 78 v 163.33333333333326 h -78 Z',
          height: '163.33333333333326',
          radius: '0',
          width: '78',
          x: '112.8',
          y: '331.66666666666674',
        },
        {
          d: 'M 210.8,250 h 78 v 245 h -78 Z',
          height: '245',
          radius: '0',
          width: '78',
          x: '210.8',
          y: '250',
        },
        {
          d: 'M 308.8,168.33333333333337 h 78 v 326.66666666666663 h -78 Z',
          height: '326.66666666666663',
          radius: '0',
          width: '78',
          x: '308.8',
          y: '168.33333333333337',
        },
        {
          d: 'M 406.8,86.66666666666666 h 78 v 408.33333333333337 h -78 Z',
          height: '408.33333333333337',
          radius: '0',
          width: '78',
          x: '406.8',
          y: '86.66666666666666',
        },
      ]);
    });

    it('should change all bars width when bars are larger than the maxBarSize', () => {
      const maxBarSize = 77;
      const { container } = renderWithStrictMode(
        <ChartElement layout="horizontal" data={data}>
          <Bar isAnimationActive={false} dataKey="value" maxBarSize={maxBarSize} />
        </ChartElement>,
      );

      expectBars(container, [
        {
          d: 'M 15.3,413.3333333333333 h 77 v 81.66666666666669 h -77 Z',
          height: '81.66666666666669',
          radius: '0',
          width: String(maxBarSize),
          x: '15.3',
          y: '413.3333333333333',
        },
        {
          d: 'M 113.3,331.66666666666674 h 77 v 163.33333333333326 h -77 Z',
          height: '163.33333333333326',
          radius: '0',
          width: String(maxBarSize),
          x: '113.3',
          y: '331.66666666666674',
        },
        {
          d: 'M 211.3,250 h 77 v 245 h -77 Z',
          height: '245',
          radius: '0',
          width: String(maxBarSize),
          x: '211.3',
          y: '250',
        },
        {
          d: 'M 309.3,168.33333333333337 h 77 v 326.66666666666663 h -77 Z',
          height: '326.66666666666663',
          radius: '0',
          width: String(maxBarSize),
          x: '309.3',
          y: '168.33333333333337',
        },
        {
          d: 'M 407.3,86.66666666666666 h 77 v 408.33333333333337 h -77 Z',
          height: '408.33333333333337',
          radius: '0',
          width: String(maxBarSize),
          x: '407.3',
          y: '86.66666666666666',
        },
      ]);
    });

    it('should do nothing if barSize is set', () => {
      const maxBarSize = 77;
      const { container } = renderWithStrictMode(
        <ChartElement layout="horizontal" data={data}>
          <Bar isAnimationActive={false} dataKey="value" maxBarSize={maxBarSize} barSize={maxBarSize + 5} />
        </ChartElement>,
      );

      expectBars(container, [
        {
          d: 'M 13,413.3333333333333 h 82 v 81.66666666666669 h -82 Z',
          height: '81.66666666666669',
          radius: '0',
          width: '82',
          x: '13',
          y: '413.3333333333333',
        },
        {
          d: 'M 111,331.66666666666674 h 82 v 163.33333333333326 h -82 Z',
          height: '163.33333333333326',
          radius: '0',
          width: '82',
          x: '111',
          y: '331.66666666666674',
        },
        {
          d: 'M 209,250 h 82 v 245 h -82 Z',
          height: '245',
          radius: '0',
          width: '82',
          x: '209',
          y: '250',
        },
        {
          d: 'M 307,168.33333333333337 h 82 v 326.66666666666663 h -82 Z',
          height: '326.66666666666663',
          radius: '0',
          width: '82',
          x: '307',
          y: '168.33333333333337',
        },
        {
          d: 'M 405,86.66666666666666 h 82 v 408.33333333333337 h -82 Z',
          height: '408.33333333333337',
          radius: '0',
          width: '82',
          x: '405',
          y: '86.66666666666666',
        },
      ]);
    });

    it('should do nothing in vertical chart if all bars are smaller than the maxBarSize', () => {
      const { container } = renderWithStrictMode(
        <ChartElement layout="vertical" data={data}>
          <YAxis type="category" />
          <XAxis type="number" />
          <Bar isAnimationActive={false} dataKey="value" maxBarSize={74} />
        </ChartElement>,
      );

      expectBars(container, [
        {
          d: 'M 65,14.2 h 71.66666666666669 v 73 h -71.66666666666669 Z',
          height: '73',
          radius: '0',
          width: '71.66666666666669',
          x: '65',
          y: '14.2',
        },
        {
          d: 'M 65,106.2 h 143.33333333333334 v 73 h -143.33333333333334 Z',
          height: '73',
          radius: '0',
          width: '143.33333333333334',
          x: '65',
          y: '106.2',
        },
        {
          d: 'M 65,198.2 h 215 v 73 h -215 Z',
          height: '73',
          radius: '0',
          width: '215',
          x: '65',
          y: '198.2',
        },
        {
          d: 'M 65,290.2 h 286.6666666666667 v 73 h -286.6666666666667 Z',
          height: '73',
          radius: '0',
          width: '286.6666666666667',
          x: '65',
          y: '290.2',
        },
        {
          d: 'M 65,382.2 h 358.3333333333333 v 73 h -358.3333333333333 Z',
          height: '73',
          radius: '0',
          width: '358.3333333333333',
          x: '65',
          y: '382.2',
        },
      ]);
    });

    it('should change all bars height in vertical chart if all bars are larger than the maxBarSize', () => {
      const maxBarSize = 72;
      const { container } = renderWithStrictMode(
        <ChartElement layout="vertical" data={data}>
          <YAxis type="category" />
          <XAxis type="number" />
          <Bar isAnimationActive={false} dataKey="value" maxBarSize={maxBarSize} />
        </ChartElement>,
      );

      expectBars(container, [
        {
          d: 'M 65,14.7 h 71.66666666666669 v 72 h -71.66666666666669 Z',
          height: String(maxBarSize),
          radius: '0',
          width: '71.66666666666669',
          x: '65',
          y: '14.7',
        },
        {
          d: 'M 65,106.7 h 143.33333333333334 v 72 h -143.33333333333334 Z',
          height: String(maxBarSize),
          radius: '0',
          width: '143.33333333333334',
          x: '65',
          y: '106.7',
        },
        {
          d: 'M 65,198.7 h 215 v 72 h -215 Z',
          height: String(maxBarSize),
          radius: '0',
          width: '215',
          x: '65',
          y: '198.7',
        },
        {
          d: 'M 65,290.7 h 286.6666666666667 v 72 h -286.6666666666667 Z',
          height: String(maxBarSize),
          radius: '0',
          width: '286.6666666666667',
          x: '65',
          y: '290.7',
        },
        {
          d: 'M 65,382.7 h 358.3333333333333 v 72 h -358.3333333333333 Z',
          height: String(maxBarSize),
          radius: '0',
          width: '358.3333333333333',
          x: '65',
          y: '382.7',
        },
      ]);
    });

    it('should do nothing if barSize is set in vertical chart', () => {
      const maxBarSize = 72;
      const { container } = renderWithStrictMode(
        <ChartElement layout="vertical" data={data}>
          <YAxis type="category" />
          <XAxis type="number" />
          <Bar isAnimationActive={false} dataKey="value" maxBarSize={maxBarSize} barSize={maxBarSize + 7} />
        </ChartElement>,
      );

      expectBars(container, [
        {
          d: 'M 65,11 h 71.66666666666669 v 79 h -71.66666666666669 Z',
          height: '79',
          radius: '0',
          width: '71.66666666666669',
          x: '65',
          y: '11',
        },
        {
          d: 'M 65,103 h 143.33333333333334 v 79 h -143.33333333333334 Z',
          height: '79',
          radius: '0',
          width: '143.33333333333334',
          x: '65',
          y: '103',
        },
        {
          d: 'M 65,195 h 215 v 79 h -215 Z',
          height: '79',
          radius: '0',
          width: '215',
          x: '65',
          y: '195',
        },
        {
          d: 'M 65,287 h 286.6666666666667 v 79 h -286.6666666666667 Z',
          height: '79',
          radius: '0',
          width: '286.6666666666667',
          x: '65',
          y: '287',
        },
        {
          d: 'M 65,379 h 358.3333333333333 v 79 h -358.3333333333333 Z',
          height: '79',
          radius: '0',
          width: '358.3333333333333',
          x: '65',
          y: '379',
        },
      ]);
    });
  });

  describe('With background', () => {
    const composedDataWithBackground = [
      {
        x: 10,
        y: 50,
        width: 20,
        height: 20,
        value: 40,
        label: 'test',
        background: { x: 10, y: 50, width: 20, height: 50 },
      },
      {
        x: 50,
        y: 50,
        width: 20,
        height: 50,
        value: 100,
        label: 'test',
        background: { x: 50, y: 50, width: 20, height: 50 },
      },
    ];

    it('Will create a background Rectangle with the passed in props', () => {
      const { container } = renderWithStrictMode(
        <ChartElement data={composedDataWithBackground}>
          <Bar background={{ fill: '#000' }} dataKey="value" />
        </ChartElement>,
      );

      expect(container.querySelectorAll('.recharts-bar-background-rectangle')).toHaveLength(
        composedDataWithBackground.length,
      );

      expectBars(container, []);
    });

    it('Will accept a function for the background prop', () => {
      const className = 'test-custom-background';
      const backgroundComponent = () => {
        return <div className={className} />;
      };
      const { container } = renderWithStrictMode(
        <ChartElement data={composedDataWithBackground}>
          <Bar background={backgroundComponent} dataKey="value" />
        </ChartElement>,
      );

      expect(container.querySelectorAll(`.${className}`)).toHaveLength(composedDataWithBackground.length);
    });

    it('should pass props to the custom background function', () => {
      const expectedProps = {
        className: 'recharts-bar-background-rectangle',
        dataKey: 'value',
        fill: '#eee',
        height: 490,
        index: expect.any(Number),
        label: 'test',
        onMouseEnter: expect.any(Function),
        onMouseLeave: expect.any(Function),
        onClick: expect.any(Function),
        payload: {
          background: {
            height: 50,
            width: 20,
            x: expect.any(Number),
            y: 50,
          },
          height: expect.any(Number),
          label: 'test',
          value: expect.any(Number),
          width: 20,
          x: expect.any(Number),
          y: 50,
        },
        width: 196,
        x: expect.any(Number),
        y: 5,
      };
      const backgroundComponent = (props: unknown) => {
        expect.soft(props).toEqual(expectedProps);
        return <></>;
      };
      renderWithStrictMode(
        <ChartElement data={composedDataWithBackground}>
          <Bar background={backgroundComponent} dataKey="value" />
        </ChartElement>,
      );
    });
  });

  describe('label', () => {
    describe('as boolean', () => {
      it('should draw default labels when label = true', () => {
        const { container } = renderWithStrictMode(
          <ChartElement data={data}>
            <Bar isAnimationActive={false} label dataKey="value" />
          </ChartElement>,
        );
        const labels = container.querySelectorAll('.recharts-text.recharts-label');
        expect(labels).toHaveLength(data.length);
        labels.forEach(l => {
          expect(l).toHaveAttribute('x', expect.any(String));
          expect(l).toHaveAttribute('y', expect.any(String));
          expect(l).toHaveAttribute('height', expect.any(String));
          expect(l).toHaveAttribute('offset', '5');
          expect(l).toHaveAttribute('text-anchor', 'middle');
          expect(l).toHaveAttribute('width', '78');
          expect(l).toHaveAttribute('fill', '#808080');
        });
      });

      it('should not draw labels while animating', () => {
        const { container } = renderWithStrictMode(
          <ChartElement data={data}>
            <Bar isAnimationActive label dataKey="value" />
          </ChartElement>,
        );
        const labels = container.querySelectorAll('.recharts-text.recharts-label');
        expect(labels).toHaveLength(0);
      });

      it('should not draw labels when label = false', () => {
        const { container } = renderWithStrictMode(
          <ChartElement data={data}>
            <Bar isAnimationActive={false} label={false} dataKey="value" />
          </ChartElement>,
        );
        const labels = container.querySelectorAll('.recharts-text.recharts-label');
        expect(labels).toHaveLength(0);
      });
    });

    describe('as svg properties object', () => {
      it('should draw labels and add extra props from the object', () => {
        const { container } = renderWithStrictMode(
          <ChartElement data={data}>
            <Bar
              isAnimationActive={false}
              label={{
                fill: 'red',
                elevation: 9,
              }}
              dataKey="value"
            />
          </ChartElement>,
        );
        expectLabels(container, [
          {
            height: '81.66666666666669',
            offset: '5',
            textContent: '100',
            width: '78',
            x: '53.8',
            y: '454.16666666666663',
          },
          {
            height: '163.33333333333326',
            offset: '5',
            textContent: '200',
            width: '78',
            x: '151.8',
            y: '413.33333333333337',
          },
          {
            height: '245',
            offset: '5',
            textContent: '300',
            width: '78',
            x: '249.8',
            y: '372.5',
          },
          {
            height: '326.66666666666663',
            offset: '5',
            textContent: '400',
            width: '78',
            x: '347.8',
            y: '331.6666666666667',
          },
          {
            height: '408.33333333333337',
            offset: '5',
            textContent: '500',
            width: '78',
            x: '445.8',
            y: '290.83333333333337',
          },
        ]);
      });

      it('should overwrite the recharts-label className but keep recharts-text className', () => {
        const { container } = renderWithStrictMode(
          <ChartElement data={data}>
            <Bar
              isAnimationActive={false}
              label={{
                className: 'my-test-class',
              }}
              dataKey="value"
            />
          </ChartElement>,
        );
        const labels = container.querySelectorAll('.recharts-text.recharts-label');
        expect(labels).toHaveLength(0);
        const customLabels = container.querySelectorAll('.my-test-class');
        expect(customLabels).toHaveLength(data.length);
        customLabels.forEach(l => {
          expect(l).toHaveAttribute('class', 'recharts-text my-test-class');
        });
      });
    });

    describe('as function', () => {
      it('should pass props to the label function', () => {
        const spy = vi.fn().mockReturnValue(null);
        renderWithStrictMode(
          <ChartElement data={data}>
            <Bar isAnimationActive={false} label={spy} dataKey="value" />
          </ChartElement>,
        );
        expect(spy).toHaveBeenCalledTimes(data.length * 2);
        expect(spy).toBeCalledWith(
          {
            content: spy,
            height: expect.any(Number),
            index: expect.any(Number),
            offset: 5,
            parentViewBox: undefined,
            textBreakAll: undefined,
            value: expect.any(Number),
            viewBox: {
              height: expect.any(Number),
              width: expect.any(Number),
              x: expect.any(Number),
              y: 86.66666666666666,
            },
            width: expect.any(Number),
            x: expect.any(Number),
            y: expect.any(Number),
          },
          {}, // this object arrives as a second argument, I am not sure where that comes from
        );
      });

      it('should render what the label function returned', () => {
        const labelFn = () => <g className="my-mock-class" />;
        const { container } = renderWithStrictMode(
          <ChartElement data={data}>
            <Bar isAnimationActive={false} label={labelFn} dataKey="value" />
          </ChartElement>,
        );
        const labels = container.querySelectorAll('.my-mock-class');
        expect(labels).toHaveLength(data.length);
        labels.forEach(l => {
          expect.soft(l).not.toHaveAttribute('x');
          expect.soft(l).not.toHaveAttribute('y');
          expect.soft(l).not.toHaveAttribute('height');
          expect.soft(l).not.toHaveAttribute('offset');
          expect.soft(l).not.toHaveAttribute('text-anchor');
          expect.soft(l).not.toHaveAttribute('width');
          expect.soft(l).not.toHaveAttribute('fill');
        });
      });
    });

    describe('as a custom Element', () => {
      it(`should render what the function returned, and then inject extra sneaky props in it
                - but not all of them, and not the same as in the other ways of rendering labels`, () => {
        const MyLabel = <g className="my-mock-class" />;
        const { container } = renderWithStrictMode(
          <ChartElement data={data}>
            <Bar isAnimationActive={false} label={MyLabel} dataKey="value" />
          </ChartElement>,
        );

        expectLabels(
          container,
          [
            {
              height: '81.66666666666669',
              offset: '5',
              textContent: '',
              width: '78',
              x: '14.8',
              y: '413.3333333333333',
            },
            {
              height: '163.33333333333326',
              offset: '5',
              textContent: '',
              width: '78',
              x: '112.8',
              y: '331.66666666666674',
            },
            {
              height: '245',
              offset: '5',
              textContent: '',
              width: '78',
              x: '210.8',
              y: '250',
            },
            {
              height: '326.66666666666663',
              offset: '5',
              textContent: '',
              width: '78',
              x: '308.8',
              y: '168.33333333333337',
            },
            {
              height: '408.33333333333337',
              offset: '5',
              textContent: '',
              width: '78',
              x: '406.8',
              y: '86.66666666666666',
            },
          ],
          '.my-mock-class',
        );
      });
    });
  });

  describe('minPointSize', () => {
    const highLowData = [
      { name: 'test1', value: 10000 },
      { name: 'test2', value: 0 },
      { name: 'test3', value: 1 },
    ];

    it('should pass props to the minPointSize function', () => {
      const spy = vi.fn().mockImplementation(() => 5);
      renderWithStrictMode(
        <ChartElement data={highLowData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar isAnimationActive={false} minPointSize={spy} dataKey="value" />
        </ChartElement>,
      );
      // this is called 4*length in regular chart, but only 1*length in compact charts.
      // expect(spy).toHaveBeenCalledTimes(highLowData.length);
      // expect it to be called with the value and the value's index
      expect(spy).toBeCalledWith(expect.any(Number), expect.any(Number));
    });

    it('should ignore 0 value bars when minPointSize is undefined, and render the small bars really really small', () => {
      const { container } = renderWithStrictMode(
        <ChartElement data={highLowData}>
          <XAxis dataKey="name" />
          <Bar isAnimationActive={false} dataKey="value" />
        </ChartElement>,
      );

      expectBars(container, [
        {
          d: 'M 21.333333333333336,5 h 130 v 460 h -130 Z',
          height: '460',
          radius: '0',
          width: '130',
          x: '21.333333333333336',
          y: '5',
        },
        {
          d: 'M 348,464.954 h 130 v 0.04599999999999227 h -130 Z',
          height: '0.04599999999999227',
          radius: '0',
          width: '130',
          x: '348',
          y: '464.954',
        },
      ]);
    });

    it('should assign minimum height to low value bars if minPointSize is a number', () => {
      const { container } = renderWithStrictMode(
        <ChartElement data={highLowData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar isAnimationActive={false} minPointSize={5} dataKey="value" />
        </ChartElement>,
      );

      expectBars(container, [
        {
          d: 'M 79.33333333333334,5 h 114 v 460 h -114 Z',
          height: '460',
          radius: '0',
          width: '114',
          x: '79.33333333333334',
          y: '5',
        },
        {
          d: 'M 222.66666666666669,460 h 114 v 5 h -114 Z',
          height: '5',
          radius: '0',
          width: '114',
          x: '222.66666666666669',
          y: '460',
        },
        {
          d: 'M 366,460 h 114 v 5 h -114 Z',
          height: '5',
          radius: '0',
          width: '114',
          x: '366',
          y: '460',
        },
      ]);
    });

    it('should assign minimum width, in a vertical chart', () => {
      const { container } = renderWithStrictMode(
        <ChartElement data={highLowData} layout="vertical">
          <XAxis dataKey="value" type="number" />
          <YAxis dataKey="name" type="category" />
          <Bar isAnimationActive={false} minPointSize={5} dataKey="value" />
        </ChartElement>,
      );

      expectBars(container, [
        {
          d: 'M 65,20.333333333333336 h 430 v 122 h -430 Z',
          height: '122',
          radius: '0',
          width: '430',
          x: '65',
          y: '20.333333333333336',
        },
        {
          d: 'M 65,173.66666666666669 h 5 v 122 h -5 Z',
          height: '122',
          radius: '0',
          width: '5',
          x: '65',
          y: '173.66666666666669',
        },
        {
          d: 'M 65,327 h 5 v 122 h -5 Z',
          height: '122',
          radius: '0',
          width: '5',
          x: '65',
          y: '327',
        },
      ]);
    });

    it('should render with varying minPointSize as per function results', () => {
      const { container } = renderWithStrictMode(
        <ChartElement data={highLowData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar isAnimationActive={false} minPointSize={(value: number) => (value > 0 ? 2 : 0)} dataKey="value" />
        </ChartElement>,
      );
      /*
       expect only 2 rects, the one with 0 value does not render
       value of 100 should have height greater than 1
       value of 1 should have height greater than 0 due to minPointSize
      */
      expectBars(container, [
        {
          d: 'M 79.33333333333334,5 h 114 v 460 h -114 Z',
          height: '460',
          radius: '0',
          width: '114',
          x: '79.33333333333334',
          y: '5',
        },
        {
          d: 'M 366,463 h 114 v 2 h -114 Z',
          height: '2',
          radius: '0',
          width: '114',
          x: '366',
          y: '463',
        },
      ]);
    });
  });

  describe('state integration', () => {
    it('should report its props to redux state, and remove them when removed from DOM', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        const cartesianItems = useAppSelector(state => state.graphicalItems.cartesianItems);
        spy(cartesianItems);
        return null;
      };

      const { rerender } = renderWithStrictMode(
        <ChartElement data={data}>
          <Bar dataKey="value" xAxisId={7} yAxisId={9} stackId="q" hide />
          <Customized component={<Comp />} />
        </ChartElement>,
      );
      const expected: ReadonlyArray<CartesianGraphicalItemSettings> = [
        {
          isPanorama: false,
          type: 'bar',
          data: null,
          dataKey: 'value',
          xAxisId: 7,
          yAxisId: 9,
          zAxisId: 0,
          errorBars: [],
          stackId: 'q',
          hide: true,
          barSize: undefined,
        },
      ];
      expect(spy).toHaveBeenLastCalledWith(expected);

      rerender(
        <ChartElement data={data}>
          <Customized component={<Comp />} />
        </ChartElement>,
      );
      expect(spy).toHaveBeenLastCalledWith([]);
    });

    it('should report default props to redux state', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        const cartesianItems = useAppSelector(state => state.graphicalItems.cartesianItems);
        spy(cartesianItems);
        return null;
      };

      renderWithStrictMode(
        <ChartElement data={data}>
          <Bar dataKey="value" />
          <Customized component={<Comp />} />
        </ChartElement>,
      );
      const expected: ReadonlyArray<CartesianGraphicalItemSettings> = [
        {
          isPanorama: false,
          type: 'bar',
          data: null,
          dataKey: 'value',
          xAxisId: 0,
          yAxisId: 0,
          zAxisId: 0,
          errorBars: [],
          stackId: undefined,
          hide: false,
          barSize: undefined,
        },
      ];
      expect(spy).toHaveBeenLastCalledWith(expected);
    });
  });
});

describe.each(chartsThatSupportBar)('<Bar /> as a child of $testName', ({ ChartElement }) => {
  /**
   * legend does not render in the compact chart so that's why this excludes the compact cases
   */
  describe('legendType', () => {
    const allLegendTypesExceptNone: ReadonlyArray<LegendType> = [
      'circle',
      'cross',
      'diamond',
      'line',
      'plainline',
      'rect',
      'square',
      'star',
      'triangle',
      'wye',
    ];

    test.each(allLegendTypesExceptNone)('should render legendType %s', legendType => {
      const { container } = renderWithStrictMode(
        <ChartElement data={data}>
          <Bar dataKey="value" legendType={legendType} />
          <Legend />
        </ChartElement>,
      );
      const legendIcon = container.querySelectorAll('.recharts-legend-item-text');
      expect(legendIcon).toHaveLength(1);
    });

    it('should not render any legend if legendType = none', () => {
      const { container } = renderWithStrictMode(
        <ChartElement data={data}>
          <Bar dataKey="value" legendType="none" />
          <Legend />
        </ChartElement>,
      );
      const legendIcon = container.querySelectorAll('.recharts-legend-item-text');
      expect(legendIcon).toHaveLength(0);
    });
  });
});

describe.each(chartsThatDoNotSupportBar)('<Bar /> as a child of $testName', ({ ChartElement }) => {
  it('should not render anything', () => {
    const { container } = renderWithStrictMode(
      <ChartElement data={data}>
        <Bar isAnimationActive={false} dataKey="value" data-testid="customized-bar" />
      </ChartElement>,
    );

    expect(container.querySelectorAll('.recharts-bar-rectangle')).toHaveLength(0);
  });
});

describe('mouse interactions in stacked bar: https://github.com/recharts/recharts/issues/5124', () => {
  beforeEach(() => {
    mockGetBoundingClientRect({ width: 100, height: 100 });
  });

  const stackedData = [{ x: 1, y: 2 }];

  describe('with Tooltip shared=true', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => {
      return (
        <BarChart data={stackedData} width={100} height={100}>
          <Bar activeBar dataKey="x" stackId="1" isAnimationActive={false} />
          <Bar activeBar dataKey="y" stackId="1" isAnimationActive={false} />
          <Tooltip shared isAnimationActive={false} />
          {children}
        </BarChart>
      );
    });

    it('should render two bars on the same index', () => {
      const { container } = renderTestCase();
      expectBars(container, [
        {
          d: 'M 14,65.00000000000001 h 72 v 29.999999999999986 h -72 Z',
          height: '29.999999999999986',
          radius: '0',
          width: '72',
          x: '14',
          y: '65.00000000000001',
        },
        {
          d: 'M 14,5 h 72 v 60.000000000000014 h -72 Z',
          height: '60.000000000000014',
          radius: '0',
          width: '72',
          x: '14',
          y: '5',
        },
      ]);
    });

    it('should render all bars inactive before user interaction', () => {
      const { container } = renderTestCase();
      const bars = getAllBars(container);
      expectBarIsNotActive(bars[0]);
      expectBarIsNotActive(bars[1]);
      expect(bars).toHaveLength(2);
    });

    it('should show tooltip when hovering over a chart', () => {
      const { container, spy } = renderTestCase(selectActiveTooltipIndex);
      expect(spy).toHaveBeenLastCalledWith(null);

      showTooltipOnCoordinate(container, barChartMouseHoverTooltipSelector, { clientX: 10, clientY: 10 });
      expect(spy).toHaveBeenLastCalledWith('0');
      expectTooltipPayload(container, '0', ['x : 1', 'y : 2']);
    });

    it('should show tooltip somewhere close to the mouse cursor', () => {
      mockGetBoundingClientRect({
        width: 10,
        height: 10,
      });
      const { container } = renderTestCase();

      showTooltipOnCoordinate(container, barChartMouseHoverTooltipSelector, { clientX: 10, clientY: 10 });
      expectTooltipCoordinate(container, { x: 60, y: 20 });

      showTooltipOnCoordinate(container, barChartMouseHoverTooltipSelector, { clientX: 20, clientY: 20 });
      expectTooltipCoordinate(container, { x: 60, y: 30 });
    });

    it('should make both bars active when hovering over the chart', () => {
      const { container } = renderTestCase();

      showTooltipOnCoordinate(container, barChartMouseHoverTooltipSelector, { clientX: 10, clientY: 10 });

      const bars = getAllBars(container);
      expectBarIsActive(bars[0]);
      expectBarIsActive(bars[1]);
    });
  });

  describe('with Tooltip shared=false', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => {
      return (
        <BarChart data={stackedData} width={100} height={100}>
          <Bar activeBar dataKey="x" stackId="1" isAnimationActive={false} />
          <Bar activeBar dataKey="y" stackId="1" isAnimationActive={false} />
          <Tooltip shared={false} isAnimationActive={false} />
          {children}
        </BarChart>
      );
    });

    it('should render two bars on the same index', () => {
      const { container } = renderTestCase();
      expectBars(container, [
        {
          d: 'M 14,65.00000000000001 h 72 v 29.999999999999986 h -72 Z',
          height: '29.999999999999986',
          radius: '0',
          width: '72',
          x: '14',
          y: '65.00000000000001',
        },
        {
          d: 'M 14,5 h 72 v 60.000000000000014 h -72 Z',
          height: '60.000000000000014',
          radius: '0',
          width: '72',
          x: '14',
          y: '5',
        },
      ]);
    });

    it('should render all bars inactive before user interaction', () => {
      const { container } = renderTestCase();
      const bars = getAllBars(container);

      expectBarIsNotActive(bars[0]);
      expectBarIsNotActive(bars[1]);
      expect(bars).toHaveLength(2);
    });

    it('should show tooltip when hovering over a bar', () => {
      const { container, spy } = renderTestCase(selectActiveTooltipIndex);
      expect(spy).toHaveBeenLastCalledWith(null);

      const bars = getAllBars(container);
      showTooltipOnCoordinate(bars[0], undefined, { clientX: 10, clientY: 10 });
      expect(spy).toHaveBeenLastCalledWith('0');
      expectTooltipPayload(container, '', ['x : 1']);
    });

    it('should select tooltip axis ticks', () => {
      const { spy } = renderTestCase(selectTooltipAxisTicks);
      expect(spy).toHaveBeenLastCalledWith([
        {
          coordinate: 50,
          index: 0,
          offset: 45,
          value: 0,
        },
      ]);
    });

    it('should update tooltip interaction state after mouse hover', () => {
      const { container, spy } = renderTestCase(state => state.tooltip);
      const expectedStateBeforeHover: TooltipState = {
        axisInteraction: {
          click: noInteraction,
          hover: noInteraction,
        },
        itemInteraction: {
          click: noInteraction,
          hover: noInteraction,
        },
        keyboardInteraction: noInteraction,
        settings: {
          active: undefined,
          axisId: 0,
          defaultIndex: undefined,
          shared: false,
          trigger: 'hover',
        },
        syncInteraction: {
          ...noInteraction,
          label: undefined,
        },
        tooltipItemPayloads: [
          {
            dataDefinedOnItem: undefined,
            positions: undefined,
            settings: {
              color: undefined,
              dataKey: 'x',
              fill: undefined,
              hide: false,
              name: 'x',
              nameKey: undefined,
              stroke: undefined,
              strokeWidth: undefined,
              type: undefined,
              unit: undefined,
            },
          },
          {
            dataDefinedOnItem: undefined,
            positions: undefined,
            settings: {
              color: undefined,
              dataKey: 'y',
              fill: undefined,
              hide: false,
              name: 'y',
              nameKey: undefined,
              stroke: undefined,
              strokeWidth: undefined,
              type: undefined,
              unit: undefined,
            },
          },
        ],
      };
      expect(spy).toHaveBeenLastCalledWith(expectedStateBeforeHover);

      const bars = getAllBars(container);
      showTooltipOnCoordinate(bars[0], undefined, { clientX: 10, clientY: 10 });

      const expectedStateAfterHover: TooltipState = {
        axisInteraction: {
          click: noInteraction,
          hover: noInteraction,
        },
        itemInteraction: {
          click: noInteraction,
          hover: {
            active: true,
            coordinate: {
              x: 50,
              y: 80,
            },
            dataKey: 'x',
            index: '0',
          },
        },
        keyboardInteraction: noInteraction,
        settings: {
          active: undefined,
          axisId: 0,
          defaultIndex: undefined,
          shared: false,
          trigger: 'hover',
        },
        syncInteraction: {
          ...noInteraction,
          label: undefined,
        },
        tooltipItemPayloads: [
          {
            dataDefinedOnItem: undefined,
            positions: undefined,
            settings: {
              color: undefined,
              dataKey: 'x',
              fill: undefined,
              hide: false,
              name: 'x',
              nameKey: undefined,
              stroke: undefined,
              strokeWidth: undefined,
              type: undefined,
              unit: undefined,
            },
          },
          {
            dataDefinedOnItem: undefined,
            positions: undefined,
            settings: {
              color: undefined,
              dataKey: 'y',
              fill: undefined,
              hide: false,
              name: 'y',
              nameKey: undefined,
              stroke: undefined,
              strokeWidth: undefined,
              type: undefined,
              unit: undefined,
            },
          },
        ],
      };
      expect(spy).toHaveBeenLastCalledWith(expectedStateAfterHover);
    });

    it('should show tooltip somewhere close to the mouse cursor', () => {
      mockGetBoundingClientRect({
        width: 10,
        height: 10,
      });
      const { container } = renderTestCase();

      const bars = getAllBars(container);
      showTooltipOnCoordinate(bars[0], undefined, { clientX: 10, clientY: 10 });
      expectTooltipCoordinate(container, { x: 60, y: 60 });

      showTooltipOnCoordinate(bars[0], undefined, { clientX: 20, clientY: 20 });
      /*
       * okay so it shows the tooltip at the same place as the last time, not the new mouse position
       * - fine, it's sticking to the item, not the mouse.
       */
      expectTooltipCoordinate(container, { x: 60, y: 60 });

      // let's hover over the second bar and check the coordinate again
      showTooltipOnCoordinate(bars[1], undefined, { clientX: 20, clientY: 20 });
      expectTooltipCoordinate(container, { x: 60, y: 45.00000000000001 });
    });

    it('should make the first bar active - but not the second one - when hovering over it', () => {
      const { container } = renderTestCase();
      const bars = getAllBars(container);

      showTooltipOnCoordinate(bars[0], undefined, { clientX: 10, clientY: 10 });
      expectBarIsActive(bars[0]);
      expectBarIsNotActive(bars[1]);
    });
  });
});
