import React from 'react';
import { describe, it } from 'vitest';
import { Selector } from '@reduxjs/toolkit';
import { RechartsRootState } from '../../../src/state/store';
import { selectAxisDomain } from '../../../src/state/selectors/axisSelectors';
import {
  assertStableBetweenRenders,
  shouldReturnFromInitialState,
  shouldReturnUndefinedOutOfContext,
} from '../../helper/selectorTestHelpers';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';
import { Line, LineChart, XAxis } from '../../../src';
import { PageData } from '../../_data';
import { defaultAxisId } from '../../../src/state/cartesianAxisSlice';

describe('selectAxisDomain stable rendering', () => {
  const selector: Selector<RechartsRootState, ReturnType<typeof selectAxisDomain>, []> = state =>
    selectAxisDomain(state, 'xAxis', defaultAxisId, false);

  shouldReturnUndefinedOutOfContext(selector);
  shouldReturnFromInitialState(selector, undefined);

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
});
