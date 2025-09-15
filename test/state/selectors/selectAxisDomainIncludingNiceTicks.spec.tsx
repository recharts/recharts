import React from 'react';
import {
  assertStableBetweenRenders,
  shouldReturnFromInitialState,
  shouldReturnUndefinedOutOfContext,
} from '../../helper/selectorTestHelpers';
import { selectAxisDomainIncludingNiceTicks } from '../../../src/state/selectors/axisSelectors';
import { RechartsRootState } from '../../../src/state/store';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';
import { Bar, BarChart, XAxis } from '../../../src';
import { PageData } from '../../_data';
import { defaultAxisId } from '../../../src/state/cartesianAxisSlice';

describe('selectAxisDomainIncludingNiceTicks', () => {
  const selector = (state: RechartsRootState) =>
    selectAxisDomainIncludingNiceTicks(state, 'xAxis', defaultAxisId, false);
  shouldReturnUndefinedOutOfContext(selector);
  shouldReturnFromInitialState(selector, undefined);

  it('should remain stable between re-renders', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <BarChart data={PageData} width={100} height={100}>
        <Bar dataKey="uv" />
        <XAxis dataKey="name" />
        {children}
      </BarChart>
    ));

    assertStableBetweenRenders(renderTestCase, selector);
  });
});
