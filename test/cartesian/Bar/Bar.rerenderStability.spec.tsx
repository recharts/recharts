import React, { ReactNode } from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Bar, BarChart, Cell, LabelList, Tooltip } from '../../../src';
import { PageData } from '../../_data';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';
import { mockGetBoundingClientRect } from '../../helper/mockGetBoundingClientRect';
import { showTooltipOnCoordinate } from '../../component/Tooltip/tooltipTestHelpers';
import { barChartMouseHoverTooltipSelector } from '../../component/Tooltip/tooltipMouseHoverSelectors';

const smallerData = PageData.slice(0, 2);

const onAnimationStart = vi.fn();
const onAnimationEnd = vi.fn();

function getLabels(container: Element): ReadonlyArray<string> {
  return Array.from(container.querySelectorAll('.recharts-label-list text')).map(text => text.textContent ?? '');
}

function getBarFills(container: Element): ReadonlyArray<string | null> {
  return Array.from(container.querySelectorAll('.recharts-bar-rectangle path')).map(bar => bar.getAttribute('fill'));
}

/**
 * The chart data reference never changes in any of these tests. Only the surrounding component
 * re-renders, which is what every app does when it holds state next to the chart.
 *
 * `<Bar>` has children here, so `React.memo` cannot absorb that re-render: `children` is not on
 * the `propsAreEqual` allowlist and JSX allocates a new element every time. An inline event
 * handler such as `onClick={() => {}}` defeats the memo the same way, with no children at all.
 */
describe('Bar should not re-animate when the surrounding component re-renders', () => {
  beforeEach(() => {
    onAnimationStart.mockClear();
    onAnimationEnd.mockClear();
    mockGetBoundingClientRect({ width: 400, height: 400 });
  });

  describe('without Cell children', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <BarChart width={400} height={400} data={smallerData}>
        <Bar
          dataKey="pv"
          activeBar={{ fill: 'red' }}
          onAnimationStart={onAnimationStart}
          onAnimationEnd={onAnimationEnd}
        >
          <LabelList dataKey="pv" />
        </Bar>
        <Tooltip />
        {children}
      </BarChart>
    ));

    it('should keep the labels rendered and not restart the animation', async () => {
      const { container, animationManager, rerenderSameComponent } = renderTestCase();
      await animationManager.completeAnimation();

      expect(getLabels(container)).toEqual(['2400', '4567']);
      expect(onAnimationStart).toHaveBeenCalledTimes(1);
      expect(onAnimationEnd).toHaveBeenCalledTimes(1);

      rerenderSameComponent();

      expect(getLabels(container)).toEqual(['2400', '4567']);
      expect(onAnimationStart).toHaveBeenCalledTimes(1);
      expect(onAnimationEnd).toHaveBeenCalledTimes(1);
    });

    it('should not restart the animation when hovering over the chart', async () => {
      const { container, animationManager } = renderTestCase();
      await animationManager.completeAnimation();

      showTooltipOnCoordinate(container, barChartMouseHoverTooltipSelector, { clientX: 100, clientY: 200 });
      showTooltipOnCoordinate(container, barChartMouseHoverTooltipSelector, { clientX: 300, clientY: 200 });

      expect(getLabels(container)).toEqual(['2400', '4567']);
      expect(onAnimationStart).toHaveBeenCalledTimes(1);
      expect(onAnimationEnd).toHaveBeenCalledTimes(1);
    });
  });

  describe('with Cell children', () => {
    function BarChartWithCells({ children, fills }: { children: ReactNode; fills: ReadonlyArray<string> }) {
      return (
        <BarChart width={400} height={400} data={smallerData}>
          <Bar dataKey="pv" onAnimationStart={onAnimationStart} onAnimationEnd={onAnimationEnd}>
            <LabelList dataKey="pv" />
            {fills.map((fill, index) => (
              <Cell key={index} fill={fill} />
            ))}
          </Bar>
          {children}
        </BarChart>
      );
    }

    const greenAndBlue = ['green', 'blue'];
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <BarChartWithCells fills={greenAndBlue}>{children}</BarChartWithCells>
    ));

    it('should keep the labels rendered and not restart the animation', async () => {
      const { container, animationManager, rerenderSameComponent } = renderTestCase();
      await animationManager.completeAnimation();

      expect(getBarFills(container)).toEqual(['green', 'blue']);
      expect(getLabels(container)).toEqual(['2400', '4567']);
      expect(onAnimationStart).toHaveBeenCalledTimes(1);

      rerenderSameComponent();

      expect(getBarFills(container)).toEqual(['green', 'blue']);
      expect(getLabels(container)).toEqual(['2400', '4567']);
      expect(onAnimationStart).toHaveBeenCalledTimes(1);
    });

    it('should still apply new Cell props when they actually change', async () => {
      const { container, animationManager, rerender } = renderTestCase();
      await animationManager.completeAnimation();

      expect(getBarFills(container)).toEqual(['green', 'blue']);

      rerender(({ children }) => <BarChartWithCells fills={['orange', 'purple']}>{children}</BarChartWithCells>);
      await animationManager.completeAnimation();

      expect(getBarFills(container)).toEqual(['orange', 'purple']);
    });
  });
});
