import React from 'react';
import { act } from '@testing-library/react';
import { expect, describe, it, beforeEach, vi } from 'vitest';
import { BarChart, Bar, XAxis, Tooltip } from '../../../src';
import { showTooltip, hideTooltip } from '../../component/Tooltip/tooltipTestHelpers';
import { barChartMouseHoverTooltipSelector } from '../../component/Tooltip/tooltipMouseHoverSelectors';
import { mockGetBoundingClientRect } from '../../helper/mockGetBoundingClientRect';
import { rechartsTestRender } from '../../helper/createSelectorTestCase';

describe('Bar hover "stuck" regressions (Issue 6953)', () => {
  const data = [
    { x: 'A', y: 10 },
    { x: 'B', y: 20 },
  ];

  beforeEach(() => {
    mockGetBoundingClientRect({ width: 100, height: 100 });
    vi.useFakeTimers();
  });

  it('should clear active bar correctly on rapid hover and leave (animations OFF)', async () => {
    const { container } = rechartsTestRender(
      <BarChart width={400} height={400} data={data}>
        <XAxis dataKey="x" />
        <Bar dataKey="y" activeBar isAnimationActive={false} />
        <Tooltip />
      </BarChart>,
    );

    act(() => {
      showTooltip(container, barChartMouseHoverTooltipSelector);
    });

    expect(container.querySelector('.recharts-active-bar-layer')).not.toBeNull();

    act(() => {
      hideTooltip(container, barChartMouseHoverTooltipSelector);
    });

    act(() => {
      vi.runAllTimers();
    });

    expect(container.querySelector('.recharts-active-bar-layer')).toBeNull();
  });

  it('should clear active bar correctly on rapid hover and leave (animations ON)', async () => {
    const { container } = rechartsTestRender(
      <BarChart width={400} height={400} data={data}>
        <XAxis dataKey="x" />
        <Bar dataKey="y" activeBar isAnimationActive />
        <Tooltip />
      </BarChart>,
    );

    act(() => {
      showTooltip(container, barChartMouseHoverTooltipSelector);
    });

    expect(container.querySelector('.recharts-active-bar-layer')).not.toBeNull();

    act(() => {
      hideTooltip(container, barChartMouseHoverTooltipSelector);
    });

    act(() => {
      vi.runAllTimers();
    });

    expect(container.querySelector('.recharts-active-bar-layer')).toBeNull();
  });
});
