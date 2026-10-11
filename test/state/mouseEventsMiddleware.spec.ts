import { beforeEach, describe, expect, it, vi } from 'vitest';
import { act } from '@testing-library/react';
import { createRechartsStore } from '../../src/state/store';
import { mouseClickAction, mouseMoveAction } from '../../src/state/mouseEventsMiddleware';
import { HTMLMousePointer } from '../../src';
import { getMockDomRect } from '../helper/mockGetBoundingClientRect';
import { mouseLeaveChart } from '../../src/state/tooltipSlice';
import { setEventSettings } from '../../src/state/eventSettingsSlice';

function createMockMousePointer(x: number, y: number): HTMLMousePointer {
  return {
    clientX: x,
    clientY: y,
    currentTarget: {
      getBoundingClientRect: () => getMockDomRect({ width: 500, height: 300 }),
      offsetWidth: 500,
      offsetHeight: 300,
    },
  };
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

  it('should cancel the pending requestAnimationFrame when the mouse leaves the chart', () => {
    store.dispatch(mouseMoveAction(createMockMousePointer(100, 100)));
    expect(vi.getTimerCount()).toBe(1);

    store.dispatch(mouseLeaveChart());

    expect(vi.getTimerCount()).toBe(0);
  });

  it('should cancel the pending timeout when the mouse leaves the chart', () => {
    store.dispatch(setEventSettings({ throttleDelay: 50, throttledEvents: 'all' }));
    const setTimeoutSpy = vi.spyOn(globalThis, 'setTimeout');
    const clearTimeoutSpy = vi.spyOn(globalThis, 'clearTimeout');

    store.dispatch(mouseMoveAction(createMockMousePointer(100, 100)));
    expect(setTimeoutSpy).toHaveBeenCalledTimes(1);
    const timeoutId = setTimeoutSpy.mock.results[0]?.value;

    store.dispatch(mouseLeaveChart());

    expect(clearTimeoutSpy).toHaveBeenCalledWith(timeoutId);
  });
});
