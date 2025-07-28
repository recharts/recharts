/*
 * Reproducing https://github.com/recharts/recharts/issues/3044
 * https://codesandbox.io/p/sandbox/recharts-issue-template-forked-yhhnky
 */
import React from 'react';
import { describe, it, expect, beforeEach } from 'vitest';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';
import { ComposedChart, Legend, Line, Tooltip, useActiveTooltipDataPoints, XAxis, YAxis } from '../../../src';
import { expectLines } from '../../helper/expectLine';
import {
  selectAxisScale,
  selectCartesianGraphicalItemsData,
  selectDisplayedData,
} from '../../../src/state/selectors/axisSelectors';
import { selectActiveTooltipIndex } from '../../../src/state/selectors/tooltipSelectors';
import { showTooltipOnCoordinate } from './tooltipTestHelpers';
import { composedChartMouseHoverTooltipSelector } from './tooltipMouseHoverSelectors';
import { mockGetBoundingClientRect } from '../../helper/mockGetBoundingClientRect';
import { expectLastCalledWith } from '../../helper/expectLastCalledWith';

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
      expect(spy).toHaveBeenCalledTimes(3);

      showTooltipOnCoordinate(container, composedChartMouseHoverTooltipSelector, { clientX: 387.5, clientY: 100 });

      expectLastCalledWith(spy, [
        { xAxis: 30, y1: 6 },
        { xAxis: 30, y2: 12 },
      ]);
      expect(spy).toHaveBeenCalledTimes(4);

      // it is important that the data points are equal by reference because ActivePoints uses strict equality to compare them
      const activePoints = spy.mock.calls[3][0];
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
      expect(spy).toHaveBeenCalledTimes(3);
      const scale = spy.mock.calls[2][0];
      const chartX1 = scale(5);
      expect(chartX1).toBe(118.75);

      const chartX2 = scale(30);
      expect(chartX2).toBe(387.5);

      const chartX3 = scale(40);
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
});
