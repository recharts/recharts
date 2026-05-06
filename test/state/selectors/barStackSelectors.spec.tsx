import * as React from 'react';
import { describe, expect, test } from 'vitest';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';
import { Bar, BarChart, BarStack, BarRectangleItem } from '../../../src';
import { PageData } from '../../_data';
import {
  expandRectangle,
  selectAllBarsInStack,
  selectStackRects,
} from '../../../src/state/selectors/barStackSelectors';
import { expectLastCalledWith } from '../../helper/expectLastCalledWith';
import { defaultAxisId } from '../../../src/state/cartesianAxisSlice';
import { selectBarRectangles } from '../../../src/state/selectors/barSelectors';

describe('BarStack Selectors', () => {
  describe('in chart with BarStack', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <BarChart width={200} height={200} data={PageData}>
        <BarStack stackId="mystackid">
          <Bar dataKey="uv" id="red" />
          <Bar dataKey="pv" id="green" />
          {children}
        </BarStack>
        <Bar dataKey="amt" id="blue" />
      </BarChart>
    ));

    test('selectAllBarsInStack', () => {
      const { spy } = renderTestCase(state => selectAllBarsInStack(state, 'mystackid', false));
      expectLastCalledWith(spy, [
        expect.objectContaining({
          id: 'red',
          stackId: 'mystackid',
          type: 'bar',
          xAxisId: defaultAxisId,
          yAxisId: defaultAxisId,
        }),
        expect.objectContaining({
          id: 'green',
          stackId: 'mystackid',
          type: 'bar',
          xAxisId: defaultAxisId,
          yAxisId: defaultAxisId,
        }),
      ]);
    });

    test('selectBarRectangles for first bar', () => {
      const { spy } = renderTestCase(state => selectBarRectangles(state, 'red', false, undefined));
      expectLastCalledWith(spy, [
        {
          name: 'Page A',
          uv: 400,
          pv: 2400,
          amt: 2400,
          stackedBarStart: 195,
          x: 8.166666666666668,
          y: 187.39999999999998,
          width: 11,
          height: 7.600000000000023,
          value: [0, 400],
          payload: {
            name: 'Page A',
            uv: 400,
            pv: 2400,
            amt: 2400,
          },
          background: {
            x: 8.166666666666668,
            y: 5,
            width: 11,
            height: 190,
          },
          tooltipPosition: {
            x: 13.666666666666668,
            y: 191.2,
          },
          parentViewBox: {
            x: 0,
            y: 0,
            width: 200,
            height: 200,
          },
          originalDataIndex: 0,
        },
        {
          name: 'Page B',
          uv: 300,
          pv: 4567,
          amt: 2400,
          stackedBarStart: 195,
          x: 39.833333333333336,
          y: 189.3,
          width: 11,
          height: 5.699999999999989,
          value: [0, 300],
          payload: {
            name: 'Page B',
            uv: 300,
            pv: 4567,
            amt: 2400,
          },
          background: {
            x: 39.833333333333336,
            y: 5,
            width: 11,
            height: 190,
          },
          tooltipPosition: {
            x: 45.333333333333336,
            y: 192.15,
          },
          parentViewBox: {
            x: 0,
            y: 0,
            width: 200,
            height: 200,
          },
          originalDataIndex: 1,
        },
        {
          name: 'Page C',
          uv: 300,
          pv: 1398,
          amt: 2400,
          stackedBarStart: 195,
          x: 71.50000000000001,
          y: 189.3,
          width: 11,
          height: 5.699999999999989,
          value: [0, 300],
          payload: {
            name: 'Page C',
            uv: 300,
            pv: 1398,
            amt: 2400,
          },
          background: {
            x: 71.50000000000001,
            y: 5,
            width: 11,
            height: 190,
          },
          tooltipPosition: {
            x: 77.00000000000001,
            y: 192.15,
          },
          parentViewBox: {
            x: 0,
            y: 0,
            width: 200,
            height: 200,
          },
          originalDataIndex: 2,
        },
        {
          name: 'Page D',
          uv: 200,
          pv: 9800,
          amt: 2400,
          stackedBarStart: 195,
          x: 103.16666666666667,
          y: 191.2,
          width: 11,
          height: 3.8000000000000114,
          value: [0, 200],
          payload: {
            name: 'Page D',
            uv: 200,
            pv: 9800,
            amt: 2400,
          },
          background: {
            x: 103.16666666666667,
            y: 5,
            width: 11,
            height: 190,
          },
          tooltipPosition: {
            x: 108.66666666666667,
            y: 193.1,
          },
          parentViewBox: {
            x: 0,
            y: 0,
            width: 200,
            height: 200,
          },
          originalDataIndex: 3,
        },
        {
          name: 'Page E',
          uv: 278,
          pv: 3908,
          amt: 2400,
          stackedBarStart: 195,
          x: 134.83333333333334,
          y: 189.718,
          width: 11,
          height: 5.282000000000011,
          value: [0, 278],
          payload: {
            name: 'Page E',
            uv: 278,
            pv: 3908,
            amt: 2400,
          },
          background: {
            x: 134.83333333333334,
            y: 5,
            width: 11,
            height: 190,
          },
          tooltipPosition: {
            x: 140.33333333333334,
            y: 192.35899999999998,
          },
          parentViewBox: {
            x: 0,
            y: 0,
            width: 200,
            height: 200,
          },
          originalDataIndex: 4,
        },
        {
          name: 'Page F',
          uv: 189,
          pv: 4800,
          amt: 2400,
          stackedBarStart: 195,
          x: 166.5,
          y: 191.409,
          width: 11,
          height: 3.591000000000008,
          value: [0, 189],
          payload: {
            name: 'Page F',
            uv: 189,
            pv: 4800,
            amt: 2400,
          },
          background: {
            x: 166.5,
            y: 5,
            width: 11,
            height: 190,
          },
          tooltipPosition: {
            x: 172,
            y: 193.2045,
          },
          parentViewBox: {
            x: 0,
            y: 0,
            width: 200,
            height: 200,
          },
          originalDataIndex: 5,
        },
      ] as unknown as BarRectangleItem[]);
    });

    test('selectBarRectangles for second bar', () => {
      const { spy } = renderTestCase(state => selectBarRectangles(state, 'green', false, undefined));
      expectLastCalledWith(spy, [
        {
          name: 'Page A',
          uv: 400,
          pv: 2400,
          amt: 2400,
          stackedBarStart: 195,
          x: 8.166666666666668,
          y: 141.8,
          width: 11,
          height: 45.599999999999966,
          value: [400, 2800],
          payload: {
            name: 'Page A',
            uv: 400,
            pv: 2400,
            amt: 2400,
          },
          background: {
            x: 8.166666666666668,
            y: 5,
            width: 11,
            height: 190,
          },
          tooltipPosition: {
            x: 13.666666666666668,
            y: 164.6,
          },
          parentViewBox: {
            x: 0,
            y: 0,
            width: 200,
            height: 200,
          },
          originalDataIndex: 0,
        },
        {
          name: 'Page B',
          uv: 300,
          pv: 4567,
          amt: 2400,
          stackedBarStart: 195,
          x: 39.833333333333336,
          y: 102.52699999999999,
          width: 11,
          height: 86.77300000000002,
          value: [300, 4867],
          payload: {
            name: 'Page B',
            uv: 300,
            pv: 4567,
            amt: 2400,
          },
          background: {
            x: 39.833333333333336,
            y: 5,
            width: 11,
            height: 190,
          },
          tooltipPosition: {
            x: 45.333333333333336,
            y: 145.9135,
          },
          parentViewBox: {
            x: 0,
            y: 0,
            width: 200,
            height: 200,
          },
          originalDataIndex: 1,
        },
        {
          name: 'Page C',
          uv: 300,
          pv: 1398,
          amt: 2400,
          stackedBarStart: 195,
          x: 71.50000000000001,
          y: 162.738,
          width: 11,
          height: 26.562000000000012,
          value: [300, 1698],
          payload: {
            name: 'Page C',
            uv: 300,
            pv: 1398,
            amt: 2400,
          },
          background: {
            x: 71.50000000000001,
            y: 5,
            width: 11,
            height: 190,
          },
          tooltipPosition: {
            x: 77.00000000000001,
            y: 176.019,
          },
          parentViewBox: {
            x: 0,
            y: 0,
            width: 200,
            height: 200,
          },
          originalDataIndex: 2,
        },
        {
          name: 'Page D',
          uv: 200,
          pv: 9800,
          amt: 2400,
          stackedBarStart: 195,
          x: 103.16666666666667,
          y: 5,
          width: 11,
          height: 186.2,
          value: [200, 10000],
          payload: {
            name: 'Page D',
            uv: 200,
            pv: 9800,
            amt: 2400,
          },
          background: {
            x: 103.16666666666667,
            y: 5,
            width: 11,
            height: 190,
          },
          tooltipPosition: {
            x: 108.66666666666667,
            y: 98.1,
          },
          parentViewBox: {
            x: 0,
            y: 0,
            width: 200,
            height: 200,
          },
          originalDataIndex: 3,
        },
        {
          name: 'Page E',
          uv: 278,
          pv: 3908,
          amt: 2400,
          stackedBarStart: 195,
          x: 134.83333333333334,
          y: 115.466,
          width: 11,
          height: 74.252,
          value: [278, 4186],
          payload: {
            name: 'Page E',
            uv: 278,
            pv: 3908,
            amt: 2400,
          },
          background: {
            x: 134.83333333333334,
            y: 5,
            width: 11,
            height: 190,
          },
          tooltipPosition: {
            x: 140.33333333333334,
            y: 152.59199999999998,
          },
          parentViewBox: {
            x: 0,
            y: 0,
            width: 200,
            height: 200,
          },
          originalDataIndex: 4,
        },
        {
          name: 'Page F',
          uv: 189,
          pv: 4800,
          amt: 2400,
          stackedBarStart: 195,
          x: 166.5,
          y: 100.209,
          width: 11,
          height: 91.19999999999999,
          value: [189, 4989],
          payload: {
            name: 'Page F',
            uv: 189,
            pv: 4800,
            amt: 2400,
          },
          background: {
            x: 166.5,
            y: 5,
            width: 11,
            height: 190,
          },
          tooltipPosition: {
            x: 172,
            y: 145.809,
          },
          parentViewBox: {
            x: 0,
            y: 0,
            width: 200,
            height: 200,
          },
          originalDataIndex: 5,
        },
      ] as unknown as BarRectangleItem[]);
    });

    test('selectStackRects should select edges of all rectangles in this stack', () => {
      const { spy } = renderTestCase(state => selectStackRects(state, 'mystackid', false));
      expectLastCalledWith(spy, [
        {
          x: 8.166666666666668,
          y: 141.8,
          width: 11,
          height: 53.19999999999999,
        },
        {
          x: 39.833333333333336,
          y: 102.52699999999999,
          width: 11,
          height: 92.47300000000001,
        },
        {
          x: 71.50000000000001,
          y: 162.738,
          width: 11,
          height: 32.262,
        },
        {
          x: 103.16666666666667,
          y: 5,
          width: 11,
          height: 190,
        },
        {
          x: 134.83333333333334,
          y: 115.466,
          width: 11,
          height: 79.534,
        },
        {
          x: 166.5,
          y: 100.209,
          width: 11,
          height: 94.791,
        },
      ]);
    });
  });

  describe('in chart with stackOffset=sign and negative values', () => {
    // https://github.com/recharts/recharts/issues/6802
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <BarChart
        width={100}
        height={100}
        data={[{ name: 'A', value1: -100, value2: 200 }]}
        margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
        stackOffset="sign"
      >
        <BarStack stackId="mystackid">
          <Bar dataKey="value1" id="red" />
          <Bar dataKey="value2" id="green" />
          {children}
        </BarStack>
        <Bar dataKey="amt" id="blue" />
      </BarChart>
    ));

    test('selectStackRects should select edges of all rectangles in this stack', () => {
      const { spy } = renderTestCase(state => selectStackRects(state, 'mystackid', false));
      expectLastCalledWith(spy, [{ height: 75, width: 38, x: 10, y: 25 }]);
    });

    test('selectBarRectangles should select rectangles with negative height', () => {
      const { spy } = renderTestCase(state => selectBarRectangles(state, 'red', false, undefined));
      expectLastCalledWith(spy, [
        expect.objectContaining({
          x: 10,
          y: 100,
          width: 38,
          height: -25,
          value: [0, -100],
        }),
      ]);
    });

    test('selectBarRectangles should select rectangles with positive height', () => {
      const { spy } = renderTestCase(state => selectBarRectangles(state, 'green', false, undefined));
      expectLastCalledWith(spy, [
        expect.objectContaining({
          x: 10,
          y: 25,
          width: 38,
          height: 50,
          value: [0, 200],
        }),
      ]);
    });
  });

  describe('with sparse BarStack data after zero-dimension filtering', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <BarChart
        width={200}
        height={200}
        data={[
          { name: 'A', value1: 0, value2: 0 },
          { name: 'B', value1: 10, value2: 20 },
        ]}
      >
        <BarStack stackId="sparse">
          <Bar dataKey="value1" id="bar-one" isAnimationActive={false} />
          <Bar dataKey="value2" id="bar-two" isAnimationActive={false} />
          {children}
        </BarStack>
      </BarChart>
    ));

    test('selectStackRects should preserve original data indices when combining filtered bars', () => {
      const { spy: stackSpy } = renderTestCase(state => selectStackRects(state, 'sparse', false));
      const { spy: firstBarSpy } = renderTestCase(state => selectBarRectangles(state, 'bar-one', false, undefined));
      const { spy: secondBarSpy } = renderTestCase(state => selectBarRectangles(state, 'bar-two', false, undefined));

      const stackRects = stackSpy.mock.lastCall?.[0];
      const firstRects = firstBarSpy.mock.lastCall?.[0] ?? [];
      const secondRects = secondBarSpy.mock.lastCall?.[0] ?? [];

      expect(firstRects).toHaveLength(1);
      expect(secondRects).toHaveLength(1);
      expect(firstRects[0]).toEqual(expect.objectContaining({ originalDataIndex: 1 }));
      expect(secondRects[0]).toEqual(expect.objectContaining({ originalDataIndex: 1 }));

      expect(stackRects).toHaveLength(2);
      expect(stackRects?.[0]).toBeUndefined();
      expect(stackRects?.[1]).toEqual(expandRectangle(firstRects[0], secondRects[0]));
    });
  });

  describe('expandRectangle', () => {
    it('should return undefined if both rectangles are undefined', () => {
      const result = expandRectangle(undefined, undefined);
      expect(result).toBeUndefined();
    });

    it('should return the other rectangle if one is undefined', () => {
      const rect1 = { x: 0, y: 0, width: 10, height: 10 };
      const result1 = expandRectangle(rect1, undefined);
      expect(result1).toEqual(rect1);

      const rect2 = { x: 5, y: 5, width: 15, height: 15 };
      const result2 = expandRectangle(undefined, rect2);
      expect(result2).toEqual(rect2);
    });

    it('should expand two rectangles that are touching each other', () => {
      const rect1 = { x: 5, y: 0, width: 25, height: 10 };
      const rect2 = { x: 2, y: 10, width: 20, height: 15 };
      const result = expandRectangle(rect1, rect2);
      /*
       * The resulting rectangle should start at (min x of both) and (min y of both)
       * and should have width that both rectangles fit inside,
       * and height that both rectangles fit inside.
       *
       * First rectangle width:
       * from x=5 to x=30 (5 + 25)
       *
       * Second rectangle width:
       * from x=2 to x=22 (2 + 20)
       *
       * First rectangle height:
       * from y=0 to y=10 (0 + 10)
       *
       * Second rectangle height:
       * from y=10 to y=25 (10 + 15)
       */
      expect(result).toEqual({ x: 2, y: 0, width: 28, height: 25 });
    });

    it('should expand two rectangles that have a gap between them', () => {
      const rect1 = { x: 5, y: 0, width: 10, height: 10 };
      const rect2 = { x: 20, y: 15, width: 10, height: 10 };
      const result = expandRectangle(rect1, rect2);
      /*
       * The resulting rectangle should start at (min x of both) and (min y of both)
       * and should have width that both rectangles fit inside,
       * and height that both rectangles fit inside.
       *
       * First rectangle width:
       * from x=5 to x=15 (5 + 10)
       *
       * Second rectangle width:
       * from x=20 to x=30 (20 + 10)
       *
       * First rectangle height:
       * from y=0 to y=10 (0 + 10)
       *
       * Second rectangle height:
       * from y=15 to y=25 (15 + 10)
       */
      expect(result).toEqual({ x: 5, y: 0, width: 25, height: 25 });
    });

    it('should expand two overlapping rectangles', () => {
      const rect1 = { x: 5, y: 5, width: 20, height: 20 };
      const rect2 = { x: 15, y: 15, width: 20, height: 20 };
      const result = expandRectangle(rect1, rect2);
      /*
       * The resulting rectangle should start at (min x of both) and (min y of both)
       * and should have width that both rectangles fit inside,
       * and height that both rectangles fit inside.
       *
       * First rectangle width:
       * from x=5 to x=25 (5 + 20)
       *
       * Second rectangle width:
       * from x=15 to x=35 (15 + 20)
       *
       * First rectangle height:
       * from y=5 to y=25 (5 + 20)
       *
       * Second rectangle height:
       * from y=15 to y=35 (15 + 20)
       */
      expect(result).toEqual({ x: 5, y: 5, width: 30, height: 30 });
    });

    it('should expand rectangles with negative height', () => {
      const rect1 = { x: 10, y: 100, width: 60, height: -25 };
      /*
       * With stackOffset=sign, height can be negative, that means the bar goes down from YAxis zero.
       * In other words, y is the bottom edge, and height is negative going upwards.
       */
      const rect2 = { x: 100, y: 25, width: -50, height: 50 };
      const result = expandRectangle(rect1, rect2);
      /*
       * The resulting rectangle should start at (min x of both) and (min y of both)
       * and should have width that both rectangles fit inside,
       * and height that both rectangles fit inside.
       *
       * First rectangle width:
       * from x=10 to x=70 (10 + 60)
       *
       * Second rectangle width:
       * from x=50 (100 - 50) to x=100
       *
       * Total width: 10 -> 100 = 90
       *
       * First rectangle height:
       * from y=75 (100 - 25) to y=100
       *
       * Second rectangle height:
       * from y=25 to y=75 (25 + 50)
       *
       * Total height: 25 -> 100 = 75
       */
      expect(result).toEqual({ x: 10, y: 25, width: 90, height: 75 });
    });
  });
});
