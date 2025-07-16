import React from 'react';
import { beforeEach, describe, expect, it } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import { Bar, BarChart, Tooltip } from '../../../src';
import { PageData } from '../../_data';
import { mockGetBoundingClientRect } from '../../helper/mockGetBoundingClientRect';

describe('Tooltip outside click behavior', () => {
  beforeEach(() => {
    mockGetBoundingClientRect({ width: 100, height: 100 });
  });

  it('should close tooltip when clicking outside the chart', () => {
    const { container } = render(
      <div>
        <div data-testid="outside-element">Outside Element</div>
        <BarChart width={500} height={500} data={PageData}>
          <Bar isAnimationActive={false} dataKey="uv" />
          <Tooltip trigger="click" />
        </BarChart>
      </div>,
    );

    // Check if tooltip is initially hidden
    const tooltip = container.querySelector('.recharts-tooltip-wrapper');
    expect(tooltip).not.toBeVisible();

    // Click on a bar to show the tooltip
    const bar = container.querySelector('.recharts-bar-rectangle');
    fireEvent.click(bar, { clientX: 20, clientY: 20 });
    expect(tooltip).toBeVisible();

    // Click outside the chart
    const outsideElement = container.querySelector('[data-testid="outside-element"]');
    fireEvent.mouseDown(outsideElement, { clientX: 600, clientY: 600 });

    // Tooltip should be closed
    expect(tooltip).not.toBeVisible();
  });

  it('should not close tooltip when clicking inside the chart', () => {
    const { container } = render(
      <BarChart width={500} height={500} data={PageData}>
        <Bar isAnimationActive={false} dataKey="uv" />
        <Tooltip trigger="click" />
      </BarChart>,
    );

    // Click on a bar to show the tooltip
    const bar = container.querySelector('.recharts-bar-rectangle');
    fireEvent.click(bar, { clientX: 20, clientY: 20 });

    const tooltip = container.querySelector('.recharts-tooltip-wrapper');
    expect(tooltip).toBeVisible();

    // Click on empty chart area (should not close the tooltip)
    const chartWrapper = container.querySelector('.recharts-wrapper');
    fireEvent.mouseDown(chartWrapper, { clientX: 100, clientY: 100 });

    // Tooltip should still be visible
    expect(tooltip).toBeVisible();
  });
});
