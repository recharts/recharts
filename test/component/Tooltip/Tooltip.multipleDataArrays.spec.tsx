/*
 * Reproducing https://github.com/recharts/recharts/issues/3044
 * https://codesandbox.io/p/sandbox/recharts-issue-template-forked-yhhnky
 */
import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';
import {
  ComposedChart,
  Legend,
  Line,
  Tooltip,
  TooltipContentProps,
  useActiveTooltipDataPoints,
  XAxis,
  YAxis,
} from '../../../src';
import { expectLines } from '../../helper/expectLine';
import {
  selectAxisScale,
  selectCartesianGraphicalItemsData,
  selectDisplayedData,
} from '../../../src/state/selectors/axisSelectors';
import { selectActiveTooltipIndex, selectTooltipAxisTicks } from '../../../src/state/selectors/tooltipSelectors';
import { expectTooltipPayload, showTooltipOnCoordinate } from './tooltipTestHelpers';
import { composedChartMouseHoverTooltipSelector } from './tooltipMouseHoverSelectors';
import { mockGetBoundingClientRect } from '../../helper/mockGetBoundingClientRect';
import { expectLastCalledWith } from '../../helper/expectLastCalledWith';
import { assertNotNull } from '../../helper/assertNotNull';

describe('Tooltip in chart with multiple data arrays', () => {
  beforeEach(() => {
    mockGetBoundingClientRect({ width: 100, height: 100 });
  });

  const data1 = [
    { xAxis: 10, y1: 4 },
    { xAxis: 20, y1: 10 },
    { xAxis: 30, y1: 6 },
    { xAxis: 40, y1: 8 },
  ];

  const data2 = [
    { xAxis: 5, y2: 9 },
    { xAxis: 12, y2: 7 },
    { xAxis: 13, y2: 8 },
    { xAxis: 18, y2: 12 },
    { xAxis: 25, y2: 12 },
    { xAxis: 30, y2: 12 },
  ];

  describe('with default props', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <ComposedChart width={500} height={300}>
        <XAxis dataKey="xAxis" type="number" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line dataKey="y1" data={data1} />
        <Line dataKey="y2" data={data2} />
        {children}
      </ComposedChart>
    ));

    it('should select activeTooltipDataPoints', () => {
      const { container, spy } = renderTestCase(useActiveTooltipDataPoints);

      expectLastCalledWith(spy, undefined);
      expect(spy).toHaveBeenCalledTimes(1);

      showTooltipOnCoordinate(container, composedChartMouseHoverTooltipSelector, { clientX: 387.5, clientY: 100 });

      expectLastCalledWith(spy, [
        { xAxis: 30, y1: 6 },
        { xAxis: 30, y2: 12 },
      ]);
      expect(spy).toHaveBeenCalledTimes(2);

      // it is important that the data points are equal by reference because ActivePoints uses strict equality to compare them
      const activePoints = spy.mock.calls[spy.mock.calls.length - 1][0];
      assertNotNull(activePoints);
      expect(activePoints[0]).toBe(data1[2]);
      expect(activePoints[1]).toBe(data2[5]);
    });

    it('should render two lines', () => {
      const { container } = renderTestCase();
      expectLines(container, [
        { d: 'M172.5,111.667L280,31.667L387.5,85L495,58.333' },
        { d: 'M118.75,45L194,71.667L204.75,58.333L258.5,5L333.75,5L387.5,5' },
      ]);
    });

    it('should select individual items data', () => {
      const { spy } = renderTestCase(state => selectCartesianGraphicalItemsData(state, 'xAxis', 0));

      expectLastCalledWith(spy, [
        { xAxis: 10, y1: 4 },
        { xAxis: 20, y1: 10 },
        { xAxis: 30, y1: 6 },
        { xAxis: 40, y1: 8 },
        { xAxis: 5, y2: 9 },
        { xAxis: 12, y2: 7 },
        { xAxis: 13, y2: 8 },
        { xAxis: 18, y2: 12 },
        { xAxis: 25, y2: 12 },
        { xAxis: 30, y2: 12 },
      ]);
      expect(spy).toHaveBeenCalledTimes(3);
    });

    it('should select displayed data', () => {
      const { spy } = renderTestCase(state => selectDisplayedData(state, 'xAxis', 0, false));

      expectLastCalledWith(spy, [
        { xAxis: 10, y1: 4 },
        { xAxis: 20, y1: 10 },
        { xAxis: 30, y1: 6 },
        { xAxis: 40, y1: 8 },
        { xAxis: 5, y2: 9 },
        { xAxis: 12, y2: 7 },
        { xAxis: 13, y2: 8 },
        { xAxis: 18, y2: 12 },
        { xAxis: 25, y2: 12 },
        { xAxis: 30, y2: 12 },
      ]);
      expect(spy).toHaveBeenCalledTimes(3);
    });

    it('should select scale', () => {
      const { spy } = renderTestCase(state => selectAxisScale(state, 'xAxis', 0, false));

      expectLastCalledWith(
        spy,
        expect.toBeRechartsScale({
          domain: [0, 40],
          range: [65, 495],
        }),
      );
      expect(spy).toHaveBeenCalledTimes(4);
      const scale = spy.mock.calls[2][0];
      assertNotNull(scale);
      const chartX1 = scale.map(5);
      expect(chartX1).toBe(118.75);

      const chartX2 = scale.map(30);
      expect(chartX2).toBe(387.5);

      const chartX3 = scale.map(40);
      expect(chartX3).toBe(495);
    });

    it('should highlight the first dot when hovering the first xaxis tick', () => {
      const { container, spy } = renderTestCase(selectActiveTooltipIndex);
      expectLastCalledWith(spy, null);

      showTooltipOnCoordinate(container, composedChartMouseHoverTooltipSelector, { clientX: 118.75, clientY: 100 });
      // this is 4 because the tick is at xAxis=5 which is the fifth point in the displayedData array
      expectLastCalledWith(spy, '4');
    });

    it('should highlight the last dot when hovering the last xaxis tick', () => {
      const { container, spy } = renderTestCase(selectActiveTooltipIndex);
      expectLastCalledWith(spy, null);

      showTooltipOnCoordinate(container, composedChartMouseHoverTooltipSelector, { clientX: 495, clientY: 100 });
      // this is 3 because the tick is at xAxis=40 which is the fourth point in the displayedData array
      expectLastCalledWith(spy, '3');
    });
  });

  describe('with defaultIndex=0', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <ComposedChart width={500} height={300}>
        <XAxis dataKey="xAxis" type="number" />
        <YAxis />
        <Tooltip defaultIndex={0} />
        <Legend />
        <Line dataKey="y1" data={data1} />
        <Line dataKey="y2" data={data2} />
        {children}
      </ComposedChart>
    ));

    it('should highlight the first dot', () => {
      const { spy } = renderTestCase(selectActiveTooltipIndex);
      expectLastCalledWith(spy, '0');
    });
  });

  describe('when a series has no point at the hovered label', () => {
    // https://github.com/recharts/recharts/issues/7903
    it('should leave the series out of the tooltip and draw no active dot for it on a number axis', () => {
      const seriesA = [0, 1, 2, 3, 4, 5].map(x => ({ x, value: x + 1 }));
      const seriesB = [3, 4, 5].map(x => ({ x, value: x + 2 }));
      const { container } = render(
        <ComposedChart width={500} height={300}>
          <XAxis dataKey="x" type="number" />
          <YAxis />
          <Tooltip />
          <Line dataKey="value" name="A" data={seriesA} />
          <Line dataKey="value" name="B" data={seriesB} />
        </ComposedChart>,
      );

      showTooltipOnCoordinate(container, composedChartMouseHoverTooltipSelector, { clientX: 65, clientY: 100 });
      expectTooltipPayload(container, '0', ['A : 1']);
      expect(container.querySelectorAll('.recharts-active-dot')).toHaveLength(1);

      showTooltipOnCoordinate(container, composedChartMouseHoverTooltipSelector, { clientX: 118.75, clientY: 100 });
      expectTooltipPayload(container, '1', ['A : 2']);
      expect(container.querySelectorAll('.recharts-active-dot')).toHaveLength(1);

      showTooltipOnCoordinate(container, composedChartMouseHoverTooltipSelector, { clientX: 172.5, clientY: 100 });
      expectTooltipPayload(container, '2', ['A : 3']);
      expect(container.querySelectorAll('.recharts-active-dot')).toHaveLength(1);

      showTooltipOnCoordinate(container, composedChartMouseHoverTooltipSelector, { clientX: 226.25, clientY: 100 });
      expectTooltipPayload(container, '3', ['A : 4', 'B : 5']);
      expect(container.querySelectorAll('.recharts-active-dot')).toHaveLength(2);
    });

    it('should leave the series out of the tooltip on a category axis with allowDuplicatedCategory=false', () => {
      const seriesA = [
        { name: 'a', value: 1 },
        { name: 'b', value: 2 },
        { name: 'c', value: 3 },
        { name: 'd', value: 4 },
      ];
      const seriesB = [
        { name: 'c', value: 10 },
        { name: 'd', value: 20 },
      ];
      const { container } = render(
        <ComposedChart width={500} height={300}>
          <XAxis dataKey="name" allowDuplicatedCategory={false} />
          <YAxis />
          <Tooltip />
          <Line dataKey="value" name="A" data={seriesA} />
          <Line dataKey="value" name="B" data={seriesB} />
        </ComposedChart>,
      );

      showTooltipOnCoordinate(container, composedChartMouseHoverTooltipSelector, { clientX: 118.75, clientY: 100 });
      expectTooltipPayload(container, 'a', ['A : 1']);
      expect(container.querySelectorAll('.recharts-active-dot')).toHaveLength(1);

      showTooltipOnCoordinate(container, composedChartMouseHoverTooltipSelector, { clientX: 333.75, clientY: 100 });
      expectTooltipPayload(container, 'c', ['A : 3', 'B : 10']);
      expect(container.querySelectorAll('.recharts-active-dot')).toHaveLength(2);
    });
  });

  describe('when every series has a point at every category', () => {
    // https://github.com/recharts/recharts/issues/4687
    const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun'];
    const pageViews = months.map(month => ({ month, views: months.indexOf(month) + 2 }));
    const visitors = months.map(month => ({ month, visitors: 2 * (months.indexOf(month) + 2) }));
    const clicks = months.map(month => ({ month, clicks: 3 * (months.indexOf(month) + 2) }));
    const seriesData = [pageViews, visitors, clicks];
    // the coordinate of the tick of each category
    const tickCoordinates = [65, 151, 237, 323, 409, 495];

    const renderTestCase = (content?: TooltipContentProps['content']) =>
      createSelectorTestCase(({ children }) => (
        <ComposedChart width={500} height={300}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip content={content} />
          <Line dataKey="views" name="Page views" data={pageViews} />
          <Line dataKey="visitors" name="Visitors" data={visitors} />
          <Line dataKey="clicks" name="Clicks" data={clicks} />
          {children}
        </ComposedChart>
      ));

    it('should give the axis one tick per category, not one per data point', () => {
      const { spy } = renderTestCase()(selectTooltipAxisTicks);

      expectLastCalledWith(
        spy,
        months.map((month, index) => ({ coordinate: tickCoordinates[index], value: month, index, offset: 0 })),
      );
    });

    it('should draw every series across the whole axis', () => {
      const { container } = renderTestCase()();

      expectLines(container, [
        { d: 'M65,243.333L151,232.5L237,221.667L323,210.833L409,200L495,189.167' },
        { d: 'M65,221.667L151,200L237,178.333L323,156.667L409,135L495,113.333' },
        { d: 'M65,200L151,167.5L237,135L323,102.5L409,70L495,37.5' },
      ]);
    });

    it('should select an activeTooltipIndex that is an index into the data of every series', () => {
      const { container, spy } = renderTestCase()(selectActiveTooltipIndex);
      expectLastCalledWith(spy, null);

      tickCoordinates.forEach((clientX, index) => {
        showTooltipOnCoordinate(container, composedChartMouseHoverTooltipSelector, { clientX, clientY: 100 });
        expectLastCalledWith(spy, String(index));
      });
    });

    it('should show the values of the hovered category from every series', () => {
      const { container } = renderTestCase()();

      showTooltipOnCoordinate(container, composedChartMouseHoverTooltipSelector, { clientX: 323, clientY: 100 });
      expectTooltipPayload(container, 'apr', ['Clicks : 15', 'Page views : 5', 'Visitors : 10']);
    });

    it('should pass an activeIndex to the tooltip content that reads the hovered category out of the data of every series', () => {
      const content = vi.fn((_props: TooltipContentProps) => <div />);
      const { container } = renderTestCase(content)();

      const hoveredCategories: ReadonlyArray<[number, number]> = [
        // clientX of the hover, index of the category
        [65, 0],
        [323, 3],
        [495, 5],
      ];
      hoveredCategories.forEach(([clientX, index]) => {
        showTooltipOnCoordinate(container, composedChartMouseHoverTooltipSelector, { clientX, clientY: 100 });
        const props: TooltipContentProps = content.mock.calls[content.mock.calls.length - 1][0];
        expect(props.activeIndex).toBe(String(index));
        expect(props.label).toBe(months[index]);
        expect(props.payload.map(entry => entry.payload)).toEqual(seriesData.map(data => data[index]));
      });
    });

    it('should draw the active dot of every series at the hovered category', () => {
      const { container } = renderTestCase()();

      showTooltipOnCoordinate(container, composedChartMouseHoverTooltipSelector, { clientX: 323, clientY: 100 });

      const activeDots = container.querySelectorAll('.recharts-active-dot');
      expect(activeDots).toHaveLength(3);
      activeDots.forEach(activeDot => {
        const circle = activeDot.querySelector('circle');
        assertNotNull(circle);
        expect(circle.getAttribute('cx')).toBe('323');
      });
    });

    it('should select an activeTooltipIndex that is an index into every series on a number axis too', () => {
      const xValues = [10, 20, 30, 40];
      const renderNumberAxisTestCase = createSelectorTestCase(({ children }) => (
        <ComposedChart width={500} height={300}>
          <XAxis dataKey="x" type="number" />
          <YAxis />
          <Tooltip />
          <Line dataKey="a" name="a" data={xValues.map(x => ({ x, a: x }))} />
          <Line dataKey="b" name="b" data={xValues.map(x => ({ x, b: 10 + x }))} />
          {children}
        </ComposedChart>
      ));
      const { container, spy } = renderNumberAxisTestCase(selectActiveTooltipIndex);

      [172.5, 280, 387.5, 495].forEach((clientX, index) => {
        showTooltipOnCoordinate(container, composedChartMouseHoverTooltipSelector, { clientX, clientY: 100 });
        expectLastCalledWith(spy, String(index));
      });

      expectTooltipPayload(container, '40', ['a : 40', 'b : 50']);
    });
  });
});
