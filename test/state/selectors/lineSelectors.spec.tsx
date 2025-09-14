import { describe, expect, it } from 'vitest';
import React, { ReactNode } from 'react';
import { act } from '@testing-library/react';
import { shouldReturnFromInitialState, shouldReturnUndefinedOutOfContext } from '../../helper/selectorTestHelpers';
import { selectLinePoints } from '../../../src/state/selectors/lineSelectors';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis } from '../../../src';
import { PageData } from '../../_data';
import { assertNotNull } from '../../helper/assertNotNull';
import { LinePointItem } from '../../../src/cartesian/Line';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';

describe('selectLinePoints', () => {
  shouldReturnUndefinedOutOfContext(state => selectLinePoints(state, 0, 0, false, ''));
  shouldReturnFromInitialState(state => selectLinePoints(state, 0, 0, false, ''), undefined);

  describe('when in Line chart', () => {
    // https://github.com/recharts/recharts/issues/5625
    it('should call one more time after re-render with different dataKey', () => {
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
            <LineChart width={400} height={400} data={PageData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <Line dataKey={dataKey} id="my-line-id" />
              <Tooltip />
              {children}
            </LineChart>
          </>
        );
      };

      const renderTestCase = createSelectorTestCase(TestCase);

      const { container, spy } = renderTestCase(state => selectLinePoints(state, 0, 0, false, 'my-line-id'));
      const expectedResultBefore: ReadonlyArray<LinePointItem> = [
        {
          payload: {
            amt: 2400,
            name: 'Page A',
            pv: 2400,
            uv: 400,
          },
          value: 400,
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
          value: 300,
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
          value: 300,
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
          value: 200,
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
          value: 278,
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
          value: 189,
          x: 395,
          y: 194.90000000000003,
        },
      ];

      expect(spy).toHaveBeenCalledTimes(2);
      expect(spy).toHaveBeenNthCalledWith(1, undefined); // first render does not yet have the state done and parsed so it will provide undefined
      expect(spy).toHaveBeenNthCalledWith(2, expectedResultBefore); // second render has the right points

      const button = container.querySelector('button');
      assertNotNull(button);
      act(() => {
        button.click();
      });

      const expectedResultAfterRerender: ReadonlyArray<LinePointItem> = [
        {
          payload: {
            amt: 2400,
            name: 'Page A',
            pv: 2400,
            uv: 400,
          },
          value: 2400,
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
          value: 4567,
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
          value: 1398,
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
          value: 9800,
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
          value: 3908,
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
          value: 4800,
          x: 395,
          y: 192.20000000000002,
        },
      ];

      expect(spy).toHaveBeenCalledTimes(3);
      /*
       * Last render has the new updated data with consistent dataKey.
       * Line will resume animation from the most recent previous data
       * to the new points.
       */
      expect(spy).toHaveBeenNthCalledWith(3, expectedResultAfterRerender);
    });

    it('should return the same points even after clicking on the chart', () => {});
  });
});
