import React from 'react';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';
import { LineChart, Tooltip } from '../../../src';

describe('Tooltip state integration', () => {
  const renderTestCase = createSelectorTestCase(({ children }) => (
    <LineChart width={1} height={1}>
      <Tooltip shared trigger="click" axisId="my-axis-id" />
      {children}
    </LineChart>
  ));

  test('Tooltip should publish its settings to Redux store', () => {
    const { spy } = renderTestCase(state => state.tooltip.settings);
    expect(spy).toHaveBeenLastCalledWith({
      axisId: 'my-axis-id',
      shared: true,
      trigger: 'click',
    });
  });
});
