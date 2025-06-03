import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { describe, it, expect, vi, Mock, beforeEach } from 'vitest';
import {
  SankeyChartCase,
  SunburstChartCase,
  TreemapChartCase,
  allCartesianChartsExcept,
  allCharts,
  onlyCompact,
} from '../helper/parameterizedTestCases';
import { MouseHandlerDataParam } from '../../src/synchronisation/types';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';
import { Bar, BarChart, Tooltip, XAxis } from '../../src';
import { PageData } from '../_data';
import { mockGetBoundingClientRect } from '../helper/mockGetBoundingClientRect';

/**
 * These three charts accept the same named events - but they only trigger them when user interacts with the graphics.
 * There are no calls when user interacts with the chart area alone.
 */
const chartsThatSupportWrapperEvents = allCartesianChartsExcept([TreemapChartCase, SankeyChartCase, SunburstChartCase]);

function expectLastCalledWithData(spy: Mock, expectedNextState: MouseHandlerDataParam) {
  const lastCall = spy.mock.calls[spy.mock.calls.length - 1];
  // first argument is the nextState object, second argument is the React event
  expect(lastCall).toHaveLength(2);
  expect(lastCall[0]).toEqual(expectedNextState);
  /*
   * vitest gets stuck in a loop when trying to parse the SyntheticEvent object, not sure what's going on there.
   * For now let's just see that it's there.
   */
  expect(lastCall[1]).toBeInstanceOf(Object);
}

const spies = {
  onClick: vi.fn(),
  onMouseEnter: vi.fn(),
  onMouseMove: vi.fn(),
  onMouseLeave: vi.fn(),
  onTouchStart: vi.fn(),
  onTouchMove: vi.fn(),
  onTouchEnd: vi.fn(),
};

describe('chart wrapper events', () => {
  beforeEach(() => {
    Object.values(spies).forEach(spy => spy.mockClear());
  });

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
      expect(spies.onMouseEnter).toHaveBeenCalledTimes(1);
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

describe('chart wrapper event data', () => {
  beforeEach(() => {
    Object.values(spies).forEach(spy => spy.mockClear());
    mockGetBoundingClientRect({ width: 100, height: 100 });
  });

  describe('when Tooltip has trigger=click', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <BarChart width={400} height={400} data={PageData} {...spies}>
        <Bar dataKey="uv" />
        <Tooltip trigger="click" />
        <XAxis dataKey="name" />
        {children}
      </BarChart>
    ));

    it('should pass tooltip state to onClick when user clicks on the chart', () => {
      const { container } = renderTestCase();
      fireEvent.click(container.querySelector('.recharts-wrapper'), { clientX: 10, clientY: 10 });
      expectLastCalledWithData(spies.onClick, {
        activeCoordinate: { x: 37.5, y: 10 },
        activeDataKey: undefined,
        activeIndex: '0',
        activeLabel: 'Page A',
        activeTooltipIndex: '0',
        isTooltipActive: true,
      });
    });
  });

  describe.each(['hover', undefined] as const)('when Tooltip has trigger=%s', trigger => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <BarChart width={400} height={400} data={PageData} {...spies}>
        <Bar dataKey="uv" />
        <Tooltip trigger={trigger} />
        <XAxis dataKey="name" />
        {children}
      </BarChart>
    ));

    it('should pass tooltip state to onMouseEnter, onMouseMove, and onMouseLeave when user hovers over the chart', () => {
      const { container } = renderTestCase();
      fireEvent.mouseOver(container.querySelector('.recharts-wrapper'), { clientX: 10, clientY: 10 });
      expectLastCalledWithData(spies.onMouseEnter, {
        activeCoordinate: { x: 37.5, y: 10 },
        activeDataKey: undefined,
        activeIndex: '0',
        activeLabel: 'Page A',
        activeTooltipIndex: '0',
        isTooltipActive: true,
      });
      fireEvent.mouseMove(container.querySelector('.recharts-wrapper'), { clientX: 20, clientY: 20 });
      expectLastCalledWithData(spies.onMouseMove, {
        activeCoordinate: { x: 37.5, y: 20 },
        activeDataKey: undefined,
        activeIndex: '0',
        activeLabel: 'Page A',
        activeTooltipIndex: '0',
        isTooltipActive: true,
      });
      fireEvent.mouseLeave(container.querySelector('.recharts-wrapper'));
      expectLastCalledWithData(spies.onMouseLeave, {
        activeCoordinate: {
          x: 37.5,
          y: 20,
        },
        activeDataKey: undefined,
        activeIndex: null,
        activeLabel: undefined,
        activeTooltipIndex: null,
        isTooltipActive: false,
      });
    });
  });
});
