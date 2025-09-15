import React, { ReactNode } from 'react';
import { describe, expect, it } from 'vitest';
import { act } from '@testing-library/react';
import { ComputedArea, selectArea } from '../../../src/state/selectors/areaSelectors';
import { shouldReturnFromInitialState, shouldReturnUndefinedOutOfContext } from '../../helper/selectorTestHelpers';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';
import { Area, AreaChart, XAxis } from '../../../src';
import { PageData } from '../../_data';
import { assertNotNull } from '../../helper/assertNotNull';

describe('selectArea', () => {
  shouldReturnUndefinedOutOfContext(state => selectArea(state, 0, 0, false, 'area-0'));
  shouldReturnFromInitialState(state => selectArea(state, 0, 0, false, 'area-0'), undefined);

  describe('when in Area chart', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <AreaChart width={400} height={400} data={PageData}>
        <XAxis dataKey="name" />
        <Area dataKey="uv" id="area-0" />
        {children}
      </AreaChart>
    ));

    it('should return points and baseline and inRange, and stay stable after re-render', () => {
      const { spy, rerenderSameComponent } = renderTestCase(state => selectArea(state, 0, 0, false, 'area-0'));
      const expectedResult: ComputedArea = {
        baseLine: 365,
        isRange: false,
        points: [
          {
            payload: {
              amt: 2400,
              name: 'Page A',
              pv: 2400,
              uv: 400,
            },
            value: [0, 400],
            x: 5,
            y: 5,
          },
          {
            payload: {
              amt: 2400,
              name: 'Page B',
              pv: 4567,
              uv: 300,
            },
            value: [0, 300],
            x: 83,
            y: 95,
          },
          {
            payload: {
              amt: 2400,
              name: 'Page C',
              pv: 1398,
              uv: 300,
            },
            value: [0, 300],
            x: 161,
            y: 95,
          },
          {
            payload: {
              amt: 2400,
              name: 'Page D',
              pv: 9800,
              uv: 200,
            },
            value: [0, 200],
            x: 239,
            y: 185,
          },
          {
            payload: {
              amt: 2400,
              name: 'Page E',
              pv: 3908,
              uv: 278,
            },
            value: [0, 278],
            x: 317,
            y: 114.80000000000001,
          },
          {
            payload: {
              amt: 2400,
              name: 'Page F',
              pv: 4800,
              uv: 189,
            },
            value: [0, 189],
            x: 395,
            y: 194.90000000000003,
          },
        ],
      };
      expect(spy).toHaveBeenLastCalledWith(expectedResult);
      expect(spy).toHaveBeenCalledTimes(2);

      rerenderSameComponent();

      expect(spy).toHaveBeenLastCalledWith(expectedResult);
      expect(spy).toHaveBeenCalledTimes(3);

      expect(spy.mock.calls[1][0]).toBe(spy.mock.calls[2][0]);
    });
  });

  // https://github.com/recharts/recharts/issues/5625
  describe('after re-render with different dataKey', () => {
    const TestCase = ({ children }: { children: ReactNode }) => {
      const [dataKey, setDataKey] = React.useState('uv');
      return (
        <>
          {dataKey === 'uv' ? (
            <button type="button" onClick={() => setDataKey('pv')}>
              Change DataKey to pv
            </button>
          ) : (
            <button type="button" onClick={() => setDataKey('uv')}>
              Change DataKey to uv
            </button>
          )}
          <AreaChart width={400} height={400} data={PageData}>
            <XAxis dataKey="name" />
            <Area dataKey={dataKey} id="area-0" />
            {children}
          </AreaChart>
        </>
      );
    };

    const renderTestCase = createSelectorTestCase(({ children }) => <TestCase>{children}</TestCase>);
    it('should select one more time', () => {
      const { container, spy } = renderTestCase(state => selectArea(state, 0, 0, false, 'area-0'));
      const expectedResultBefore: ComputedArea = {
        baseLine: 365,
        isRange: false,
        points: [
          {
            payload: {
              amt: 2400,
              name: 'Page A',
              pv: 2400,
              uv: 400,
            },
            value: [0, 400],
            x: 5,
            y: 5,
          },
          {
            payload: {
              amt: 2400,
              name: 'Page B',
              pv: 4567,
              uv: 300,
            },
            value: [0, 300],
            x: 83,
            y: 95,
          },
          {
            payload: {
              amt: 2400,
              name: 'Page C',
              pv: 1398,
              uv: 300,
            },
            value: [0, 300],
            x: 161,
            y: 95,
          },
          {
            payload: {
              amt: 2400,
              name: 'Page D',
              pv: 9800,
              uv: 200,
            },
            value: [0, 200],
            x: 239,
            y: 185,
          },
          {
            payload: {
              amt: 2400,
              name: 'Page E',
              pv: 3908,
              uv: 278,
            },
            value: [0, 278],
            x: 317,
            y: 114.80000000000001,
          },
          {
            payload: {
              amt: 2400,
              name: 'Page F',
              pv: 4800,
              uv: 189,
            },
            value: [0, 189],
            x: 395,
            y: 194.90000000000003,
          },
        ],
      };

      expect(spy).toHaveBeenCalledTimes(2);
      expect(spy).toHaveBeenNthCalledWith(1, undefined); // first render does not yet have the state done and parsed so it will provide undefined
      expect(spy).toHaveBeenNthCalledWith(2, expectedResultBefore); // second render has the right points

      const button = container.querySelector('button');
      assertNotNull(button);
      act(() => {
        button.click();
      });

      const expectedResultAfterRerender: ComputedArea = {
        baseLine: 365,
        isRange: false,
        points: [
          {
            payload: {
              amt: 2400,
              name: 'Page A',
              pv: 2400,
              uv: 400,
            },
            value: [0, 2400],
            x: 5,
            y: 278.59999999999997,
          },
          {
            payload: {
              amt: 2400,
              name: 'Page B',
              pv: 4567,
              uv: 300,
            },
            value: [0, 4567],
            x: 83,
            y: 200.588,
          },
          {
            payload: {
              amt: 2400,
              name: 'Page C',
              pv: 1398,
              uv: 300,
            },
            value: [0, 1398],
            x: 161,
            y: 314.672,
          },
          {
            payload: {
              amt: 2400,
              name: 'Page D',
              pv: 9800,
              uv: 200,
            },
            value: [0, 9800],
            x: 239,
            y: 12.200000000000006,
          },
          {
            payload: {
              amt: 2400,
              name: 'Page E',
              pv: 3908,
              uv: 278,
            },
            value: [0, 3908],
            x: 317,
            y: 224.31199999999998,
          },
          {
            payload: {
              amt: 2400,
              name: 'Page F',
              pv: 4800,
              uv: 189,
            },
            value: [0, 4800],
            x: 395,
            y: 192.20000000000002,
          },
        ],
      };

      expect(spy).toHaveBeenCalledTimes(3);
      /*
       * Fourth render has the new updated data with consistent dataKey.
       * Area will resume the animation from the most recent previous data
       * to the new points.
       */
      expect(spy).toHaveBeenNthCalledWith(3, expectedResultAfterRerender);
    });
  });
});
