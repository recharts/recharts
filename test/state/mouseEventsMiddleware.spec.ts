import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { act } from '@testing-library/react';
import { createRechartsStore } from '../../src/state/store';
import { mouseClickAction, mouseMoveAction } from '../../src/state/mouseEventsMiddleware';
import { HTMLMousePointer } from '../../src';
import { getMockDomRect } from '../helper/mockGetBoundingClientRect';
import { setChartSize } from '../../src/state/layoutSlice';
import { addXAxis, XAxisSettings } from '../../src/state/cartesianAxisSlice';
import { selectTooltipState } from '../../src/state/selectors/selectTooltipState';
import { setMouseClickAxisIndex } from '../../src/state/tooltipSlice';

function createMockMousePointer(x: number, y: number, width = 500, height = 300): HTMLMousePointer {
  return {
    clientX: x,
    clientY: y,
    currentTarget: {
      getBoundingClientRect: () => getMockDomRect({ width, height }),
      offsetWidth: width,
      offsetHeight: height,
    },
  };
}

/**
 * Minimal XAxis settings for testing bounds check.
 * Chart: 400x400, margin={5,5,5,5}, XAxis at bottom with height=30.
 * Resulting offset: left=5, top=5, width=390, height=360.
 * Plot area Y range: [5, 365]. XAxis tick labels live below y=365.
 */
const testXAxis: XAxisSettings = {
  id: 0,
  height: 30,
  orientation: 'bottom',
  hide: false,
  mirror: false,
  padding: { left: 0, right: 0 },
  dataKey: undefined,
  domain: undefined,
  allowDataOverflow: false,
  allowDecimals: true,
  allowDuplicatedCategory: true,
  reversed: false,
  includeHidden: false,
  type: 'category',
  scale: 'auto',
  tick: true,
  tickCount: 5,
  ticks: undefined,
  tickFormatter: undefined,
  interval: 'preserveEnd',
  minTickGap: 5,
  angle: 0,
  name: undefined,
  unit: undefined,
  niceTicks: 'auto',
};

function createStoreWithChartDimensions() {
  const store = createRechartsStore();
  // 400x400 chart with default margin {top:5, right:5, bottom:5, left:5}
  store.dispatch(setChartSize({ width: 400, height: 400 }));
  // XAxis at bottom, height=30 → offset.bottom = 5+30=35 → offset.height = 400-5-35 = 360
  store.dispatch(addXAxis(testXAxis));
  return store;
}

describe('mouseClickMiddleware', () => {
  let store: ReturnType<typeof createRechartsStore>;

  beforeEach(() => {
    store = createRechartsStore();
  });

  it('should run immediately without requestAnimationFrame', () => {
    const mockMousePointer = createMockMousePointer(100, 100);
    expect(vi.getTimerCount()).toBe(0);

    store.dispatch(mouseClickAction(mockMousePointer));

    expect(vi.getTimerCount()).toBe(0);
  });

  it('should handle multiple clicks without canceling each other', () => {
    const click1 = createMockMousePointer(50, 50);
    const click2 = createMockMousePointer(100, 100);
    const click3 = createMockMousePointer(150, 150);

    // All clicks should be processed immediately without RAF
    store.dispatch(mouseClickAction(click1));
    store.dispatch(mouseClickAction(click2));
    store.dispatch(mouseClickAction(click3));

    // No timers should be pending since clicks are synchronous
    expect(vi.getTimerCount()).toBe(0);
  });
});

describe('mouseClickMiddleware – plot bounds guard', () => {
  afterEach(() => {
    /*
     * autoBatchEnhancer schedules a requestAnimationFrame to notify subscribers
     * after each dispatch. We clear all pending timers here so leftover RAF handles
     * from each test's store do not inflate `vi.getTimerCount()` in later tests.
     */
    vi.clearAllTimers();
  });

  /*
   * Chart setup: 400x400, margin={5,5,5,5}, XAxis at bottom with height=30.
   * offset.left=5, offset.top=5, offset.width=390, offset.height=360.
   * Plot area Y range: [5, 365]. XAxis tick labels live below y=365.
   * The mock bounding rect is 400x400 at (0,0), so relativeCoord = clientCoord.
   */
  const INSIDE_PLOT = createMockMousePointer(200, 200, 400, 400); // well inside
  const OUTSIDE_PLOT_BELOW_XAXIS = createMockMousePointer(200, 375, 400, 400); // y=375 > 365

  it('should NOT activate the tooltip when clicking outside the plot area (below XAxis)', () => {
    const store = createStoreWithChartDimensions();

    store.dispatch(mouseClickAction(OUTSIDE_PLOT_BELOW_XAXIS));

    const tooltipState = selectTooltipState(store.getState());
    expect(tooltipState.axisInteraction.click.active).toBe(false);
  });

  it('should deactivate an existing tooltip click state when clicking outside the plot area', () => {
    const store = createStoreWithChartDimensions();

    // Pre-activate the tooltip by simulating a prior valid click inside the plot
    store.dispatch(
      setMouseClickAxisIndex({
        activeIndex: '2',
        activeDataKey: undefined,
        activeCoordinate: { x: 200, y: 200 },
      }),
    );
    expect(selectTooltipState(store.getState()).axisInteraction.click.active).toBe(true);

    // Click outside the plot area (on the XAxis tick label region)
    store.dispatch(mouseClickAction(OUTSIDE_PLOT_BELOW_XAXIS));

    const tooltipState = selectTooltipState(store.getState());
    expect(tooltipState.axisInteraction.click.active).toBe(false);
  });

  it('should NOT deactivate the tooltip when clicking inside the plot area', () => {
    const store = createStoreWithChartDimensions();

    // Pre-activate the tooltip
    store.dispatch(
      setMouseClickAxisIndex({
        activeIndex: '2',
        activeDataKey: undefined,
        activeCoordinate: { x: 200, y: 200 },
      }),
    );
    expect(selectTooltipState(store.getState()).axisInteraction.click.active).toBe(true);

    // Click inside the plot area – the tooltip should remain active
    // (setMouseClickAxisIndex will be dispatched again if an axis tick is found, but active stays true)
    store.dispatch(mouseClickAction(INSIDE_PLOT));

    const tooltipState = selectTooltipState(store.getState());
    // active must still be true; index may have changed based on tick resolution but active is preserved
    expect(tooltipState.axisInteraction.click.active).toBe(true);
  });
});

describe('mouseMoveMiddleware', () => {
  let store: ReturnType<typeof createRechartsStore>;

  beforeEach(() => {
    store = createRechartsStore();
  });

  it('should debounce rapid mousemove events using requestAnimationFrame', () => {
    const move1 = createMockMousePointer(50, 50);
    const move2 = createMockMousePointer(100, 100);
    const move3 = createMockMousePointer(150, 150);

    store.dispatch(mouseMoveAction(move1));
    expect(vi.getTimerCount()).toBe(1);

    store.dispatch(mouseMoveAction(move2));
    // Should cancel previous RAF and schedule new one - still 1 timer
    expect(vi.getTimerCount()).toBe(1);

    store.dispatch(mouseMoveAction(move3));
    // Should cancel previous RAF and schedule new one - still 1 timer
    expect(vi.getTimerCount()).toBe(1);

    // Process the RAF
    act(() => {
      vi.runOnlyPendingTimers();
    });

    expect(vi.getTimerCount()).toBe(0);
  });
});
