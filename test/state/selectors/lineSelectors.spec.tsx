import { describe, expect, it, vi } from 'vitest';
import React, { useMemo } from 'react';
import { act, render } from '@testing-library/react';
import {
  shouldReturnFromInitialState,
  shouldReturnUndefinedOutOfContext,
  useAppSelectorWithStableTest,
} from '../../helper/selectorTestHelpers';
import { ResolvedLineSettings, selectLinePoints } from '../../../src/state/selectors/lineSelectors';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis } from '../../../src';
import { PageData } from '../../_data';
import { assertNotNull } from '../../helper/assertNotNull';
import { LinePointItem } from '../../../src/cartesian/Line';

const lineSettings: ResolvedLineSettings = {
  data: undefined,
  dataKey: 'uv',
};

describe('selectLinePoints', () => {
  shouldReturnUndefinedOutOfContext(state => selectLinePoints(state, 0, 0, false, lineSettings));
  shouldReturnFromInitialState(state => selectLinePoints(state, 0, 0, false, lineSettings), undefined);

  describe('when in Line chart', () => {
    // https://github.com/recharts/recharts/issues/5625
    it('should call one more time after re-render with different dataKey', () => {
      const spy = vi.fn();
      const Comp = ({ dataKey }: { dataKey: string }): null => {
        const myLineSettings = useMemo(
          () => ({
            ...lineSettings,
            dataKey,
          }),
          [dataKey],
        );
        spy(useAppSelectorWithStableTest(state => selectLinePoints(state, 0, 0, false, myLineSettings)));
        return null;
      };
      const TestCase = () => {
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
              <Line dataKey={dataKey} />
              <Tooltip />
              <Comp dataKey={dataKey} />
            </LineChart>
          </>
        );
      };

      const { container } = render(<TestCase />);
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

      expect(spy).toHaveBeenCalledTimes(4);
      /*
       * This now returns undefined because we're in an inconsistent state:
       * Props have been updated and are already passing in the new dataKey, but the state has not yet been updated.
       * A new dispatch is already in progress and will correct it in the next render
       * but this in-between state is not correct and would render non-sensical data.
       *
       * The selector detects this and returns undefined to prevent rendering non-sensical data.
       *
       * Area later uses this undefined to interrupt the animation.
       */
      expect(spy).toHaveBeenNthCalledWith(3, undefined);
      /*
       * Fourth render has the new updated data with consistent dataKey.
       * Area will resume the animation from the most recent previous data
       * to the new points.
       */
      expect(spy).toHaveBeenNthCalledWith(4, expectedResultAfterRerender);
    });
  });
});
