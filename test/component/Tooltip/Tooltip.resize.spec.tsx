import React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { act, render } from '@testing-library/react';
import { Line, LineChart, Tooltip, TooltipProps } from '../../../src';
import { mockGetBoundingClientRect } from '../../helper/mockGetBoundingClientRect';
import { getTooltip, hideTooltip, showTooltipOnCoordinate } from './tooltipTestHelpers';
import { lineChartMouseHoverTooltipSelector } from './tooltipMouseHoverSelectors';

const data = [
  { name: 'A', value: 1 },
  { name: 'B', value: 1 },
  { name: 'C', value: 1 },
];

function TestChart({
  width,
  allowEscapeViewBox,
}: {
  width: number;
  allowEscapeViewBox?: TooltipProps['allowEscapeViewBox'];
}) {
  return (
    <LineChart width={width} height={100} data={data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
      <Line dataKey="value" isAnimationActive={false} />
      <Tooltip allowEscapeViewBox={allowEscapeViewBox} isAnimationActive={false} />
    </LineChart>
  );
}

describe('Tooltip after the chart gets smaller', () => {
  beforeEach(() => {
    mockGetBoundingClientRect({ width: 10, height: 10 });
  });

  /*
   * The chart is 400px wide. The data points are at x = 0, 200 and 400.
   * The mouse is at (390, 20), so the tooltip goes to point C at x = 400.
   * The tooltip box is 10 x 10 and the offset is 10.
   * The tooltip does not fit after the coordinate, so it goes before it: 400 - 10 - 10 = 380.
   * The y translate is 20 + 10 = 30.
   */
  function hoverLastPointThenLeave(allowEscapeViewBox?: TooltipProps['allowEscapeViewBox']) {
    const result = render(<TestChart width={400} allowEscapeViewBox={allowEscapeViewBox} />);
    showTooltipOnCoordinate(result.container, lineChartMouseHoverTooltipSelector, { clientX: 390, clientY: 20 });
    hideTooltip(result.container, lineChartMouseHoverTooltipSelector);
    act(() => {
      vi.runOnlyPendingTimers();
    });
    return result;
  }

  it('should keep the hidden tooltip at its last position before the chart changes', () => {
    const { container } = hoverLastPointThenLeave();
    const tooltip = getTooltip(container);
    expect(tooltip).not.toBeVisible();
    expect(tooltip.style.transform).toBe('translate(380px, 30px)');
  });

  it('should move the hidden tooltip inside the chart when the chart gets smaller', () => {
    const { container, rerender } = hoverLastPointThenLeave();

    rerender(<TestChart width={100} />);
    act(() => {
      vi.runOnlyPendingTimers();
    });

    /*
     * The chart is now 100px wide, and the stale coordinate x = 400 is outside it.
     * The tooltip must end at the end of the chart: 100 - 10 = 90.
     */
    const tooltip = getTooltip(container);
    expect(tooltip).not.toBeVisible();
    expect(tooltip.style.transform).toBe('translate(90px, 30px)');
  });

  it('should not move the hidden tooltip when allowEscapeViewBox is true', () => {
    const allowEscapeViewBox = { x: true, y: true };
    const { container, rerender } = hoverLastPointThenLeave(allowEscapeViewBox);

    rerender(<TestChart width={100} allowEscapeViewBox={allowEscapeViewBox} />);
    act(() => {
      vi.runOnlyPendingTimers();
    });

    // With allowEscapeViewBox, the tooltip always goes after the coordinate: 400 + 10 = 410.
    const tooltip = getTooltip(container);
    expect(tooltip).not.toBeVisible();
    expect(tooltip.style.transform).toBe('translate(410px, 30px)');
  });
});
