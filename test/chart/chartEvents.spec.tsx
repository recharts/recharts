import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import {
  SankeyChartCase,
  SunburstChartCase,
  TreemapChartCase,
  allCategoricalsChartsExcept,
  allCharts,
  onlyCompact,
} from '../helper/parameterizedTestCases';

/**
 * These three charts accept the same named events - but they only trigger them when user interacts with the graphics.
 * There are no calls when user interacts with the chart area alone.
 */
const chartsThatSupportWrapperEvents = allCategoricalsChartsExcept([
  TreemapChartCase,
  SankeyChartCase,
  SunburstChartCase,
]);

describe('chart wrapper events', () => {
  const spies = {
    onClick: vi.fn(),
    onMouseEnter: vi.fn(),
    onMouseMove: vi.fn(),
    onMouseLeave: vi.fn(),
    onTouchStart: vi.fn(),
    onTouchMove: vi.fn(),
    onTouchEnd: vi.fn(),
  };

  describe.each(chartsThatSupportWrapperEvents)('in $testName', ({ ChartElement }) => {
    it('should not call any chart events without user interaction', () => {
      render(<ChartElement />);
      Object.values(spies).forEach(spy => {
        expect(spy).not.toHaveBeenCalled();
      });
    });

    it('should call onClick when user clicks on the chart', () => {
      const { container } = render(<ChartElement onClick={spies.onClick} />);
      fireEvent.click(container.querySelector('.recharts-wrapper'), { clientX: 10, clientY: 10 });
      expect(spies.onClick).toHaveBeenCalled();
    });

    it('should call onMouseEnter, onMouseMove, and onMouseLeave when user hovers over the chart', () => {
      const { container } = render(
        <ChartElement
          onMouseEnter={spies.onMouseEnter}
          onMouseMove={spies.onMouseMove}
          onMouseLeave={spies.onMouseLeave}
        />,
      );
      fireEvent.mouseOver(container.querySelector('.recharts-wrapper'), { clientX: 10, clientY: 10 });
      expect(spies.onMouseEnter).toHaveBeenCalled();
      expect(spies.onMouseMove).not.toHaveBeenCalled();
      expect(spies.onMouseLeave).not.toHaveBeenCalled();
      fireEvent.mouseMove(container.querySelector('.recharts-wrapper'), { clientX: 20, clientY: 20 });
      expect(spies.onMouseMove).toHaveBeenCalled();
      expect(spies.onMouseLeave).not.toHaveBeenCalled();
      fireEvent.mouseLeave(container.querySelector('.recharts-wrapper'));
      expect(spies.onMouseLeave).toHaveBeenCalled();
    });

    it('should call onTouchStart, onTouchMove, and onTouchEnd when user touches the chart', () => {
      const { container } = render(
        <ChartElement
          onTouchStart={spies.onTouchStart}
          onTouchMove={spies.onTouchMove}
          onTouchEnd={spies.onTouchEnd}
        />,
      );
      fireEvent.touchStart(container.querySelector('.recharts-wrapper'), {
        changedTouches: [{ pageX: 10, pageY: 10 }],
      });
      expect(spies.onTouchStart).toHaveBeenCalled();
      expect(spies.onTouchMove).not.toHaveBeenCalled();
      expect(spies.onTouchEnd).not.toHaveBeenCalled();
      fireEvent.touchMove(container.querySelector('.recharts-wrapper'), {
        changedTouches: [{ pageX: 20, pageY: 20 }],
      });
      expect(spies.onTouchMove).toHaveBeenCalled();
      expect(spies.onTouchEnd).not.toHaveBeenCalled();
      fireEvent.touchEnd(container.querySelector('.recharts-wrapper'), {
        changedTouches: [{ pageX: 20, pageY: 20 }],
      });
      expect(spies.onTouchEnd).toHaveBeenCalled();
    });
  });

  describe.each(onlyCompact(allCharts))('$testName', ({ ChartElement }) => {
    it('should not call onClick when user clicks on the chart', () => {
      const { container } = render(<ChartElement onClick={spies.onClick} />);
      fireEvent.click(container.querySelector('.recharts-surface'), { clientX: 10, clientY: 10 });
      expect(spies.onClick).not.toHaveBeenCalled();
    });

    it('should not call onMouseEnter, onMouseMove, or onMouseLeave', () => {
      const { container } = render(
        <ChartElement
          onMouseEnter={spies.onMouseEnter}
          onMouseMove={spies.onMouseMove}
          onMouseLeave={spies.onMouseLeave}
        />,
      );
      fireEvent.mouseOver(container.querySelector('.recharts-surface'), { clientX: 10, clientY: 10 });
      fireEvent.mouseMove(container.querySelector('.recharts-surface'), { clientX: 20, clientY: 20 });
      fireEvent.mouseLeave(container.querySelector('.recharts-surface'));
      expect(spies.onMouseEnter).not.toHaveBeenCalled();
      expect(spies.onMouseMove).not.toHaveBeenCalled();
      expect(spies.onMouseLeave).not.toHaveBeenCalled();
    });

    it('should not call onTouchStart, onTouchMove, or onTouchEnd', () => {
      const { container } = render(
        <ChartElement
          onTouchStart={spies.onTouchStart}
          onTouchMove={spies.onTouchMove}
          onTouchEnd={spies.onTouchEnd}
        />,
      );
      fireEvent.touchStart(container.querySelector('.recharts-surface'), { clientX: 10, clientY: 10 });
      fireEvent.touchMove(container.querySelector('.recharts-surface'), { clientX: 20, clientY: 20 });
      fireEvent.touchEnd(container.querySelector('.recharts-surface'));
      expect(spies.onTouchStart).not.toHaveBeenCalled();
      expect(spies.onTouchMove).not.toHaveBeenCalled();
      expect(spies.onTouchEnd).not.toHaveBeenCalled();
    });
  });
});
