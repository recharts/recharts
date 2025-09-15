import React from 'react';
import { describe, expect, it } from 'vitest';
import { createRechartsStore, RechartsRootState } from '../../../src/state/store';
import { combineXAxisRange, selectAxisRangeWithReverse } from '../../../src/state/selectors/axisSelectors';
import {
  assertStableBetweenRenders,
  shouldReturnFromInitialState,
  shouldReturnUndefinedOutOfContext,
} from '../../helper/selectorTestHelpers';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';
import { Bar, BarChart, XAxis } from '../../../src';
import { PageData } from '../../_data';
import { setActiveMouseOverItemIndex } from '../../../src/state/tooltipSlice';

describe('selectAxisRangeWithReverse', () => {
  const selector = (state: RechartsRootState) => selectAxisRangeWithReverse(state, 'xAxis', '0', false);

  shouldReturnUndefinedOutOfContext(selector);
  shouldReturnFromInitialState(selector, [5, 5]);

  it('should be stable between rerenders', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <BarChart data={PageData} width={100} height={100}>
        <Bar dataKey="uv" />
        <XAxis dataKey="name" />
        {children}
      </BarChart>
    ));

    assertStableBetweenRenders(renderTestCase, selector);
  });

  it('should not recompute when an irrelevant property in the state changes', () => {
    const store = createRechartsStore();
    const result1 = selectAxisRangeWithReverse(store.getState(), 'xAxis', '0', false);
    const xAxisRange1 = combineXAxisRange(store.getState(), '0', false);
    store.dispatch(setActiveMouseOverItemIndex({ activeCoordinate: undefined, activeDataKey: 'x', activeIndex: '7' }));
    const result2 = selectAxisRangeWithReverse(store.getState(), 'xAxis', '0', false);
    const xAxisRange2 = combineXAxisRange(store.getState(), '0', false);
    expect(xAxisRange1).toBe(xAxisRange2);
    expect(result1).toBe(result2);
  });
});
