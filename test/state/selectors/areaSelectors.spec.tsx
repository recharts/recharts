import React, { useMemo } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { act, render } from '@testing-library/react';
import { AreaSettings, ComputedArea, selectArea } from '../../../src/state/selectors/areaSelectors';
import {
  shouldReturnFromInitialState,
  shouldReturnUndefinedOutOfContext,
  useAppSelectorWithStableTest,
} from '../../helper/selectorTestHelpers';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';
import { Area, AreaChart, XAxis } from '../../../src';
import { PageData } from '../../_data';
import { assertNotNull } from '../../helper/assertNotNull';

const areaSettings: AreaSettings = {
  connectNulls: true,
  baseValue: undefined,
  dataKey: 'uv',
  stackId: undefined,
  data: undefined,
};

describe('selectArea', () => {
  shouldReturnUndefinedOutOfContext(state => selectArea(state, 0, 0, false, areaSettings));
  shouldReturnFromInitialState(state => selectArea(state, 0, 0, false, areaSettings), undefined);

  describe('when in Area chart', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <AreaChart width={400} height={400} data={PageData}>
        <XAxis dataKey="name" />
        <Area dataKey={areaSettings.dataKey} />
        {children}
      </AreaChart>
    ));

    it('should return points and baseline and inRange, and stay stable after re-render', () => {
      const { spy, rerender } = renderTestCase(state => selectArea(state, 0, 0, false, areaSettings));
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
      expect(spy).toHaveBeenCalledWith(expectedResult);
      expect(spy).toHaveBeenCalledTimes(2);

      rerender(
        <AreaChart width={400} height={400} data={PageData}>
          <XAxis dataKey="name" />
          <Area dataKey={areaSettings.dataKey} />
        </AreaChart>,
      );

      expect(spy).toHaveBeenCalledTimes(2);
    });
  });
});

describe('useArea', () => {
  // https://github.com/recharts/recharts/issues/5625
  it.fails('should call one more time after re-render with different dataKey', () => {
    const spy = vi.fn();
    const Comp = ({ dataKey }: { dataKey: string }): null => {
      const myAreaSettings = useMemo(
        () => ({
          ...areaSettings,
          dataKey,
        }),
        [],
      );
      spy(useAppSelectorWithStableTest(state => selectArea(state, 0, 0, false, myAreaSettings)));
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
          <AreaChart width={400} height={400} data={PageData}>
            <XAxis dataKey="name" />
            <Area dataKey={dataKey} />
            <Comp dataKey={dataKey} />
          </AreaChart>
        </>
      );
    };

    const { container } = render(<TestCase />);
    expect(spy).toHaveBeenCalledTimes(2);
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
    expect(spy).toHaveBeenNthCalledWith(1, undefined); // first render does not yet have the state done and parsed so it will provide undefined
    expect(spy).toHaveBeenNthCalledWith(2, expectedResultBefore);
    // this again calls with undefined because the dispatch had removed XAxis from state.
    // There is another dispatch already in the queue adding it back, but there is an in-between render with inconsistent data,
    // which is not correct and will break the animation.
    expect(spy).toHaveBeenNthCalledWith(3, expectedResultBefore);

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

    expect(spy).toHaveBeenCalledTimes(6);
    // this now fails because it renders previous range (because cartesian items still have reference to the previous dataKey)
    // with new dataKey coming from props.
    // A new dispatch is already in progress and will correct it in the next render
    // but this in-between state is not correct and will break the animation.
    expect(spy).toHaveBeenNthCalledWith(4, expectedResultAfterRerender);
    expect(spy).toHaveBeenNthCalledWith(5, expectedResultAfterRerender);
    expect(spy).toHaveBeenNthCalledWith(6, expectedResultAfterRerender);
  });
});
