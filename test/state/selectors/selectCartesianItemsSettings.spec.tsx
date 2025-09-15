import React from 'react';
import { describe, it } from 'vitest';
import { Selector } from '@reduxjs/toolkit';
import { RechartsRootState } from '../../../src/state/store';
import { selectCartesianItemsSettings } from '../../../src/state/selectors/axisSelectors';
import {
  assertStableBetweenRenders,
  shouldReturnFromInitialState,
  shouldReturnUndefinedOutOfContext,
} from '../../helper/selectorTestHelpers';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';
import { Line, LineChart, XAxis } from '../../../src';
import { PageData } from '../../_data';
import { defaultAxisId } from '../../../src/state/cartesianAxisSlice';
import { expectLastCalledWith } from '../../helper/expectLastCalledWith';

describe('selectCartesianItemsSettings', () => {
  const selector: Selector<RechartsRootState, ReturnType<typeof selectCartesianItemsSettings>, []> = state =>
    selectCartesianItemsSettings(state, 'xAxis', defaultAxisId);

  shouldReturnUndefinedOutOfContext(selector);
  shouldReturnFromInitialState(selector, []);

  it('should be stable between renders', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <LineChart width={100} height={100}>
        <Line data={PageData} dataKey="pv" />
        <XAxis dataKey="name" />
        {children}
      </LineChart>
    ));

    assertStableBetweenRenders(renderTestCase, selector);
  });

  it('should return one item from a simple chart', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <LineChart width={100} height={100}>
        <Line data={PageData} dataKey="pv" />
        <XAxis dataKey="name" />
        {children}
      </LineChart>
    ));
    const { spy } = renderTestCase(selector);
    expectLastCalledWith(spy, [
      {
        data: [
          {
            amt: 2400,
            name: 'Page A',
            pv: 2400,
            uv: 400,
          },
          {
            amt: 2400,
            name: 'Page B',
            pv: 4567,
            uv: 300,
          },
          {
            amt: 2400,
            name: 'Page C',
            pv: 1398,
            uv: 300,
          },
          {
            amt: 2400,
            name: 'Page D',
            pv: 9800,
            uv: 200,
          },
          {
            amt: 2400,
            name: 'Page E',
            pv: 3908,
            uv: 278,
          },
          {
            amt: 2400,
            name: 'Page F',
            pv: 4800,
            uv: 189,
          },
        ],
        dataKey: 'pv',
        hide: false,
        id: 'recharts-line-:r1:',
        isPanorama: false,
        type: 'line',
        xAxisId: 0,
        yAxisId: 0,
        zAxisId: 0,
      },
    ]);
  });
});
