import { describe, it, expect } from 'vitest';
import React from 'react';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';
import { Bar, BarChart, Tooltip } from '../../../src';
import { PageData } from '../../_data';
import { selectIsTooltipActive } from '../../../src/state/selectors/selectors';
import { barChartMouseHoverTooltipSelector } from '../../component/Tooltip/tooltipMouseHoverSelectors';
import { hideTooltip, showTooltip } from '../../component/Tooltip/tooltipTestHelpers';

describe('selectIsTooltipActive', () => {
  const renderTestCase = createSelectorTestCase(({ children }) => (
    <BarChart width={800} height={400} data={PageData}>
      <Bar dataKey="uv" />
      <Tooltip />
      {children}
    </BarChart>
  ));

  it('should select false before any interactions', () => {
    const { spy } = renderTestCase(state => selectIsTooltipActive(state, 'axis', 'hover', undefined));
    expect(spy).toHaveBeenLastCalledWith({
      activeIndex: null,
      isActive: false,
    });
  });

  it('should select true after mouse hover, and then false again on mouse leave', () => {
    const { container, spy } = renderTestCase(state => selectIsTooltipActive(state, 'axis', 'hover', undefined));
    expect(spy).toHaveBeenLastCalledWith({
      activeIndex: null,
      isActive: false,
    });
    expect(spy).toHaveBeenCalledTimes(3);

    showTooltip(container, barChartMouseHoverTooltipSelector);
    expect(spy).toHaveBeenLastCalledWith({
      activeIndex: '1',
      isActive: true,
    });
    expect(spy).toHaveBeenCalledTimes(5);

    hideTooltip(container, barChartMouseHoverTooltipSelector);
    expect(spy).toHaveBeenLastCalledWith({
      activeIndex: null,
      isActive: false,
    });
    expect(spy).toHaveBeenCalledTimes(7);
  });
});
