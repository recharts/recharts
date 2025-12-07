import * as React from 'react';
import { describe, expect, test } from 'vitest';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';
import { Bar, BarChart, BarStack } from '../../../src';
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
        expect.objectContaining({
          x: 8.166666666666668,
          y: 187.39999999999998,
          width: 10,
          height: 7.600000000000023,
        }),
        expect.objectContaining({
          x: 39.833333333333336,
          y: 189.3,
          width: 10,
          height: 5.699999999999989,
        }),
        expect.objectContaining({
          x: 71.50000000000001,
          y: 189.3,
          width: 10,
          height: 5.699999999999989,
        }),
        expect.objectContaining({
          x: 103.16666666666667,
          y: 191.2,
          width: 10,
          height: 3.8000000000000114,
        }),
        expect.objectContaining({
          x: 134.83333333333334,
          y: 189.718,
          width: 10,
          height: 5.282000000000011,
        }),
        expect.objectContaining({
          x: 166.5,
          y: 191.409,
          width: 10,
          height: 3.591000000000008,
        }),
      ]);
    });

    test('selectBarRectangles for second bar', () => {
      const { spy } = renderTestCase(state => selectBarRectangles(state, 'green', false, undefined));
      expectLastCalledWith(spy, [
        expect.objectContaining({
          x: 8.166666666666668,
          y: 141.8,
          width: 10,
          height: 45.599999999999966,
        }),
        expect.objectContaining({
          x: 39.833333333333336,
          y: 102.52699999999999,
          width: 10,
          height: 86.77300000000002,
        }),
        expect.objectContaining({
          x: 71.50000000000001,
          y: 162.738,
          width: 10,
          height: 26.562000000000012,
        }),
        expect.objectContaining({
          x: 103.16666666666667,
          y: 5,
          width: 10,
          height: 186.2,
        }),
        expect.objectContaining({
          x: 134.83333333333334,
          y: 115.466,
          width: 10,
          height: 74.252,
        }),
        expect.objectContaining({
          x: 166.5,
          y: 100.209,
          width: 10,
          height: 91.19999999999999,
        }),
      ]);
    });

    test('selectStackRects should select edges of all rectangles in this stack', () => {
      const { spy } = renderTestCase(state => selectStackRects(state, 'mystackid', false));
      expectLastCalledWith(spy, [
        { height: 53.19999999999999, width: 10, x: 8.166666666666668, y: 141.8 },
        { height: 92.47300000000001, width: 10, x: 39.833333333333336, y: 102.52699999999999 },
        { height: 32.262, width: 10, x: 71.50000000000001, y: 162.738 },
        { height: 190, width: 10, x: 103.16666666666667, y: 5 },
        { height: 79.534, width: 10, x: 134.83333333333334, y: 115.466 },
        { height: 94.791, width: 10, x: 166.5, y: 100.209 },
      ]);
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
  });
});
