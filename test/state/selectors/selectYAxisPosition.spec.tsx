import React from 'react';
import { describe, it } from 'vitest';
import { Selector } from '@reduxjs/toolkit';
import { RechartsRootState } from '../../../src/state/store';
import { selectYAxisPosition } from '../../../src/state/selectors/axisSelectors';
import {
  assertStableBetweenRenders,
  shouldReturnFromInitialState,
  shouldReturnUndefinedOutOfContext,
} from '../../helper/selectorTestHelpers';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';
import { Line, LineChart, YAxis } from '../../../src';
import { PageData } from '../../_data';
import { defaultAxisId } from '../../../src/state/cartesianAxisSlice';

describe('selectYAxisPosition', () => {
  const selector: Selector<RechartsRootState, ReturnType<typeof selectYAxisPosition>, []> = state =>
    selectYAxisPosition(state, defaultAxisId);

  shouldReturnUndefinedOutOfContext(selector);
  shouldReturnFromInitialState(selector, { x: 0, y: 5 });

  it('should be stable between renders', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <LineChart width={100} height={100}>
        <Line data={PageData} dataKey="pv" />
        <YAxis />
        {children}
      </LineChart>
    ));

    assertStableBetweenRenders(renderTestCase, selector);
  });
});
