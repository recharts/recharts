import React from 'react';
import { describe, expect, it, test } from 'vitest';
import { Series } from 'victory-vendor/d3-shape';
import { Bar, BarChart, BarRectangleItem, BarStack } from '../../../src';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';
import { PageData } from '../../_data';
import {
  selectBarPosition,
  selectBarRectangles,
  selectStackedDataOfItem,
} from '../../../src/state/selectors/barSelectors';
import { expectLastCalledWith } from '../../helper/expectLastCalledWith';
import { expectBars, ExpectedBar } from '../../helper/expectBars';
import { BarPositionPosition, getStackedData } from '../../../src/util/ChartUtils';
import { StackDataPoint, StackSeriesIdentifier } from '../../../src/util/stacks/stackTypes';
import { selectDisplayedStackedData } from '../../../src/state/selectors/axisSelectors';
import { defaultAxisId } from '../../../src/state/cartesianAxisSlice';
import { DisplayedStackedData } from '../../../src/state/selectors/combiners/combineDisplayedStackedData';

describe('stackOffset=sign with all positive numbers should behave the same as stackOffset=none', () => {
  const expectedBars: ReadonlyArray<ExpectedBar> = [
    {
      d: 'M 8.1667,189.5714 h 25 v 5.4286 h -25 Z',
      height: '5.4286',
      radius: '0',
      width: '25',
      x: '8.1667',
      y: '189.5714',
    },
    {
      d: 'M 39.8333,190.9286 h 25 v 4.0714 h -25 Z',
      height: '4.0714',
      radius: '0',
      width: '25',
      x: '39.8333',
      y: '190.9286',
    },
    {
      d: 'M 71.5,190.9286 h 25 v 4.0714 h -25 Z',
      height: '4.0714',
      radius: '0',
      width: '25',
      x: '71.5',
      y: '190.9286',
    },
    {
      d: 'M 103.1667,192.2857 h 25 v 2.7143 h -25 Z',
      height: '2.7143',
      radius: '0',
      width: '25',
      x: '103.1667',
      y: '192.2857',
    },
    {
      d: 'M 134.8333,191.2271 h 25 v 3.7729 h -25 Z',
      height: '3.7729',
      radius: '0',
      width: '25',
      x: '134.8333',
      y: '191.2271',
    },
    {
      d: 'M 166.5,192.435 h 25 v 2.565 h -25 Z',
      height: '2.565',
      radius: '0',
      width: '25',
      x: '166.5',
      y: '192.435',
    },
    {
      d: 'M 8.1667,157 h 25 v 32.5714 h -25 Z',
      height: '32.5714',
      radius: '0',
      width: '25',
      x: '8.1667',
      y: '157',
    },
    {
      d: 'M 39.8333,128.9479 h 25 v 61.9807 h -25 Z',
      height: '61.9807',
      radius: '0',
      width: '25',
      x: '39.8333',
      y: '128.9479',
    },
    {
      d: 'M 71.5,171.9557 h 25 v 18.9729 h -25 Z',
      height: '18.9729',
      radius: '0',
      width: '25',
      x: '71.5',
      y: '171.9557',
    },
    {
      d: 'M 103.1667,59.2857 h 25 v 133 h -25 Z',
      height: '133',
      radius: '0',
      width: '25',
      x: '103.1667',
      y: '59.2857',
    },
    {
      d: 'M 134.8333,138.19 h 25 v 53.0371 h -25 Z',
      height: '53.0371',
      radius: '0',
      width: '25',
      x: '134.8333',
      y: '138.19',
    },
    {
      d: 'M 166.5,127.2921 h 25 v 65.1429 h -25 Z',
      height: '65.1429',
      radius: '0',
      width: '25',
      x: '166.5',
      y: '127.2921',
    },
    {
      d: 'M 8.1667,124.4286 h 25 v 32.5714 h -25 Z',
      height: '32.5714',
      radius: '0',
      width: '25',
      x: '8.1667',
      y: '124.4286',
    },
    {
      d: 'M 39.8333,96.3764 h 25 v 32.5714 h -25 Z',
      height: '32.5714',
      radius: '0',
      width: '25',
      x: '39.8333',
      y: '96.3764',
    },
    {
      d: 'M 71.5,139.3843 h 25 v 32.5714 h -25 Z',
      height: '32.5714',
      radius: '0',
      width: '25',
      x: '71.5',
      y: '139.3843',
    },
    {
      d: 'M 103.1667,26.7143 h 25 v 32.5714 h -25 Z',
      height: '32.5714',
      radius: '0',
      width: '25',
      x: '103.1667',
      y: '26.7143',
    },
    {
      d: 'M 134.8333,105.6186 h 25 v 32.5714 h -25 Z',
      height: '32.5714',
      radius: '0',
      width: '25',
      x: '134.8333',
      y: '105.6186',
    },
    {
      d: 'M 166.5,94.7207 h 25 v 32.5714 h -25 Z',
      height: '32.5714',
      radius: '0',
      width: '25',
      x: '166.5',
      y: '94.7207',
    },
  ];

  const expectedRectangles1: ReadonlyArray<BarRectangleItem> = [
    expect.objectContaining({
      width: 25,
      height: 5.428571428571445,
      x: 8.166666666666668,
      y: 189.57142857142856,
    }),
    expect.objectContaining({
      height: 4.071428571428584,
      width: 25,
      x: 39.833333333333336,
      y: 190.92857142857142,
    }),
    expect.objectContaining({
      height: 4.071428571428584,
      width: 25,
      x: 71.50000000000001,
      y: 190.92857142857142,
    }),
    expect.objectContaining({
      height: 2.714285714285694,
      width: 25,
      x: 103.16666666666667,
      y: 192.2857142857143,
    }),
    expect.objectContaining({
      height: 3.7728571428571627,
      width: 25,
      x: 134.83333333333334,
      y: 191.22714285714284,
    }),
    expect.objectContaining({
      height: 2.5649999999999977,
      width: 25,
      x: 166.5,
      y: 192.435,
    }),
  ];

  const expectedRectangles2: ReadonlyArray<BarRectangleItem> = [
    expect.objectContaining({
      height: 32.571428571428555,
      width: 25,
      x: 8.166666666666668,
      y: 157,
    }),
    expect.objectContaining({
      height: 61.98071428571427,
      width: 25,
      x: 39.833333333333336,
      y: 128.94785714285715,
    }),
    expect.objectContaining({
      height: 18.972857142857123,
      width: 25,
      x: 71.50000000000001,
      y: 171.9557142857143,
    }),
    expect.objectContaining({
      height: 133.00000000000003,
      width: 25,
      x: 103.16666666666667,
      y: 59.28571428571428,
    }),
    expect.objectContaining({
      height: 53.03714285714281,
      width: 25,
      x: 134.83333333333334,
      y: 138.19000000000003,
    }),
    expect.objectContaining({
      height: 65.14285714285714,
      width: 25,
      x: 166.5,
      y: 127.29214285714286,
    }),
  ];

  const expectedRectangles3: ReadonlyArray<BarRectangleItem> = [
    expect.objectContaining({
      height: 32.57142857142857,
      width: 25,
      x: 8.166666666666668,
      y: 124.42857142857143,
    }),
    expect.objectContaining({
      height: 32.57142857142857,
      width: 25,
      x: 39.833333333333336,
      y: 96.37642857142858,
    }),
    expect.objectContaining({
      height: 32.571428571428555,
      width: 25,
      x: 71.50000000000001,
      y: 139.38428571428574,
    }),
    expect.objectContaining({
      height: 32.571428571428555,
      width: 25,
      x: 103.16666666666667,
      y: 26.714285714285722,
    }),
    expect.objectContaining({
      height: 32.5714285714286,
      width: 25,
      x: 134.83333333333334,
      y: 105.61857142857143,
    }),
    expect.objectContaining({
      height: 32.571428571428584,
      width: 25,
      x: 166.5,
      y: 94.72071428571428,
    }),
  ];

  const expectedBarPosition3: BarPositionPosition = {
    offset: 3.166666666666667,
    size: 25,
  };

  const expectedStackedDataOfItem3: Series<StackDataPoint, StackSeriesIdentifier> = expect.toBeRechartsStackedSeries([
    [2800, 5200],
    [4867, 7267],
    [1698, 4098],
    [10000, 12400],
    [4186, 6586],
    [4989, 7389],
  ]);

  const expectedStackedData: DisplayedStackedData = [
    { blue: 2400, green: 2400, red: 400 },
    { blue: 2400, green: 4567, red: 300 },
    { blue: 2400, green: 1398, red: 300 },
    { blue: 2400, green: 9800, red: 200 },
    { blue: 2400, green: 3908, red: 278 },
    { blue: 2400, green: 4800, red: 189 },
  ];

  describe('in chart with stackOffset=none', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <BarChart width={200} height={200} data={PageData} stackOffset="none">
        <BarStack stackId="mystackid">
          <Bar dataKey="uv" id="red" isAnimationActive={false} />
          <Bar dataKey="pv" id="green" isAnimationActive={false} />
          <Bar dataKey="amt" id="blue" isAnimationActive={false} />
          {children}
        </BarStack>
      </BarChart>
    ));

    it('should render bars', () => {
      const { container } = renderTestCase();
      expectBars(container, expectedBars);
    });

    it('should select rectangles for first bar', () => {
      const { spy } = renderTestCase(state => selectBarRectangles(state, 'red', false, undefined));
      expectLastCalledWith(spy, expectedRectangles1);
    });

    it('should select rectangles for second bar', () => {
      const { spy } = renderTestCase(state => selectBarRectangles(state, 'green', false, undefined));
      expectLastCalledWith(spy, expectedRectangles2);
    });

    it('should select rectangles for third bar', () => {
      const { spy } = renderTestCase(state => selectBarRectangles(state, 'blue', false, undefined));
      expectLastCalledWith(spy, expectedRectangles3);
    });

    test('selectBarPosition', () => {
      const { spy } = renderTestCase(state => selectBarPosition(state, 'blue', false));
      expectLastCalledWith(spy, expectedBarPosition3);
    });

    test('selectStackedDataOfItem', () => {
      const { spy } = renderTestCase(state => selectStackedDataOfItem(state, 'blue', false));
      expectLastCalledWith(spy, expectedStackedDataOfItem3);
    });

    test('selectDisplayedStackedData', () => {
      const { spy } = renderTestCase(state => selectDisplayedStackedData(state, 'yAxis', defaultAxisId, false));
      expectLastCalledWith(spy, expectedStackedData);
    });

    test('getStackedData', () => {
      const actual = getStackedData(expectedStackedData, ['red', 'green', 'blue'], 'none');
      expect(actual[2]).toEqual(expectedStackedDataOfItem3);
    });
  });

  describe('in chart with stackOffset=sign', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <BarChart width={200} height={200} data={PageData} stackOffset="sign">
        <BarStack stackId="mystackid">
          <Bar dataKey="uv" id="red" isAnimationActive={false} />
          <Bar dataKey="pv" id="green" isAnimationActive={false} />
          <Bar dataKey="amt" id="blue" isAnimationActive={false} />
          {children}
        </BarStack>
      </BarChart>
    ));

    /*
     * Because all numbers are positive in PageData,
     * stackOffset=sign should behave the same as stackOffset=none
     *
     * https://github.com/recharts/recharts/issues/6803
     */

    it('should render bars', () => {
      const { container } = renderTestCase();
      expectBars(container, expectedBars);
    });

    it('should select rectangles for first bar', () => {
      const { spy } = renderTestCase(state => selectBarRectangles(state, 'red', false, undefined));
      expectLastCalledWith(spy, expectedRectangles1);
    });

    it('should select rectangles for second bar', () => {
      const { spy } = renderTestCase(state => selectBarRectangles(state, 'green', false, undefined));
      expectLastCalledWith(spy, expectedRectangles2);
    });

    it('should select rectangles for third bar', () => {
      const { spy } = renderTestCase(state => selectBarRectangles(state, 'blue', false, undefined));
      expectLastCalledWith(spy, expectedRectangles3);
    });

    test('selectBarPosition', () => {
      const { spy } = renderTestCase(state => selectBarPosition(state, 'blue', false));
      expectLastCalledWith(spy, expectedBarPosition3);
    });

    test('selectStackedDataOfItem', () => {
      const { spy } = renderTestCase(state => selectStackedDataOfItem(state, 'blue', false));
      expectLastCalledWith(spy, expectedStackedDataOfItem3);
    });

    test('selectDisplayedStackedData', () => {
      const { spy } = renderTestCase(state => selectDisplayedStackedData(state, 'yAxis', defaultAxisId, false));
      expectLastCalledWith(spy, expectedStackedData);
    });

    test('getStackedData', () => {
      const actual = getStackedData(expectedStackedData, ['red', 'green', 'blue'], 'sign');
      expect(actual[2]).toEqual(expectedStackedDataOfItem3);
    });
  });

  describe('in chart with stackOffset=positive', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <BarChart width={200} height={200} data={PageData} stackOffset="positive">
        <BarStack stackId="mystackid">
          <Bar dataKey="uv" id="red" isAnimationActive={false} />
          <Bar dataKey="pv" id="green" isAnimationActive={false} />
          <Bar dataKey="amt" id="blue" isAnimationActive={false} />
          {children}
        </BarStack>
      </BarChart>
    ));

    /*
     * Because all numbers are positive in PageData,
     * stackOffset=positive should behave the same as stackOffset=none
     * This was not reported in https://github.com/recharts/recharts/issues/6803
     * but it stands to reason that it should behave the same!
     */

    it('should render bars', () => {
      const { container } = renderTestCase();
      expectBars(container, expectedBars);
    });

    it('should select rectangles for first bar', () => {
      const { spy } = renderTestCase(state => selectBarRectangles(state, 'red', false, undefined));
      expectLastCalledWith(spy, expectedRectangles1);
    });

    it('should select rectangles for second bar', () => {
      const { spy } = renderTestCase(state => selectBarRectangles(state, 'green', false, undefined));
      expectLastCalledWith(spy, expectedRectangles2);
    });

    it('should select rectangles for third bar', () => {
      const { spy } = renderTestCase(state => selectBarRectangles(state, 'blue', false, undefined));
      expectLastCalledWith(spy, expectedRectangles3);
    });

    test('selectBarPosition', () => {
      const { spy } = renderTestCase(state => selectBarPosition(state, 'blue', false));
      expectLastCalledWith(spy, expectedBarPosition3);
    });

    test('selectStackedDataOfItem', () => {
      const { spy } = renderTestCase(state => selectStackedDataOfItem(state, 'blue', false));
      expectLastCalledWith(spy, expectedStackedDataOfItem3);
    });

    test('selectDisplayedStackedData', () => {
      const { spy } = renderTestCase(state => selectDisplayedStackedData(state, 'yAxis', defaultAxisId, false));
      expectLastCalledWith(spy, expectedStackedData);
    });

    test('getStackedData', () => {
      const actual = getStackedData(expectedStackedData, ['red', 'green', 'blue'], 'positive');
      expect(actual[2]).toEqual(expectedStackedDataOfItem3);
    });
  });
});
