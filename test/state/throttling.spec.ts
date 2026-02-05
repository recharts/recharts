import { describe, it, expect, vi, beforeEach } from 'vitest';
import { act } from '@testing-library/react';
import { HTMLMousePointer } from '../../src';
import { createRechartsStore } from '../../src/state/store';
import { mouseMoveAction } from '../../src/state/mouseEventsMiddleware';
import { keyDownAction } from '../../src/state/keyboardEventsMiddleware';
import { externalEventAction } from '../../src/state/externalEventsMiddleware';
import { setEventSettings } from '../../src/state/eventSettingsSlice';
import { getMockDomRect } from '../helper/mockGetBoundingClientRect';

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

describe('Throttling Middleware', () => {
  let store: ReturnType<typeof createRechartsStore>;

  beforeEach(() => {
    store = createRechartsStore();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe('mouseMoveMiddleware', () => {
    it('should use RAF by default', () => {
      store.dispatch(setEventSettings({ throttleDelay: 'raf', throttledEvents: 'all' }));
      const move1 = createMockMousePointer(50, 50);

      store.dispatch(mouseMoveAction(move1));
      // RAF is modeled as a timer in vitest/jest usually if configured, or need checking how existing tests do it.
      // Existing tests use vi.getTimerCount() for RAF.
      expect(vi.getTimerCount()).toBe(1);

      act(() => {
        vi.runAllTimers();
      });
      expect(vi.getTimerCount()).toBe(0);
    });

    it('should use setTimeout when throttleDelay is a number', () => {
      store.dispatch(setEventSettings({ throttleDelay: 100, throttledEvents: 'all' }));
      const move1 = createMockMousePointer(50, 50);

      store.dispatch(mouseMoveAction(move1));
      expect(vi.getTimerCount()).toBe(1);

      // Fast forward time less than delay
      act(() => {
        vi.advanceTimersByTime(50);
      });
      // Should still be pending
      expect(vi.getTimerCount()).toBe(1);

      // Complete the delay
      act(() => {
        vi.advanceTimersByTime(50);
      });
      expect(vi.getTimerCount()).toBe(0);
    });

    it('should run synchronously when throttledEvents does not include mousemove', () => {
      store.dispatch(setEventSettings({ throttleDelay: 'raf', throttledEvents: ['click'] }));
      const move1 = createMockMousePointer(50, 50);

      store.dispatch(mouseMoveAction(move1));
      expect(vi.getTimerCount()).toBe(0);
    });

    it('should run synchronously when throttledEvents is empty', () => {
      store.dispatch(setEventSettings({ throttleDelay: 'raf', throttledEvents: [] }));
      const move1 = createMockMousePointer(50, 50);

      store.dispatch(mouseMoveAction(move1));
      expect(vi.getTimerCount()).toBe(0);
    });

    it('should throttle mousemove events (not debounce) when throttleDelay is a number', () => {
      store.dispatch(setEventSettings({ throttleDelay: 100, throttledEvents: 'all' }));
      const move1 = createMockMousePointer(50, 50);
      const move2 = createMockMousePointer(60, 60);

      // t=0
      store.dispatch(mouseMoveAction(move1));
      expect(vi.getTimerCount()).toBe(1);

      // t=50
      act(() => {
        vi.advanceTimersByTime(50);
      });
      store.dispatch(mouseMoveAction(move2));
      // Should still be 1 timer.
      // If debounced: new timer starts at t=50, expires at t=150.
      // If throttled: old timer kept at t=0, expires at t=100.
      expect(vi.getTimerCount()).toBe(1);

      // t=110 (advance another 60)
      act(() => {
        vi.advanceTimersByTime(60);
      });

      // If throttled, timer should have fired at t=100.
      // If debounced, timer is still pending (until t=150).
      expect(vi.getTimerCount()).toBe(0);
    });
  });

  describe('keyboardEventsMiddleware', () => {
    it('should throttle keydown events (not debounce) when throttleDelay is a number', () => {
      store.dispatch(setEventSettings({ throttleDelay: 100, throttledEvents: 'all' }));

      // t=0
      store.dispatch(keyDownAction('ArrowRight'));
      expect(vi.getTimerCount()).toBe(1);

      // t=50
      act(() => {
        vi.advanceTimersByTime(50);
      });
      store.dispatch(keyDownAction('ArrowRight'));
      expect(vi.getTimerCount()).toBe(1);

      // t=110
      act(() => {
        vi.advanceTimersByTime(60);
      });

      expect(vi.getTimerCount()).toBe(0);
    });
  });

  describe('externalEventsMiddleware', () => {
    const mockHandler = vi.fn();
    const mockEvent = {
      type: 'click',
      persist: vi.fn(),
    };

    it('should execute first event immediately (leading edge) when throttleDelay is a number', () => {
      store.dispatch(setEventSettings({ throttleDelay: 100, throttledEvents: 'all' }));

      store.dispatch(
        externalEventAction({
          reactEvent: mockEvent as any,
          handler: mockHandler,
        }),
      );

      expect(mockHandler).toHaveBeenCalledTimes(1);
      expect(vi.getTimerCount()).toBe(1); // Trailing timer

      // Complete the timeout to clean up the Map
      act(() => {
        vi.runAllTimers();
      });
      expect(vi.getTimerCount()).toBe(0);
    });

    it('should throttle click event (leading + trailing) when configured', () => {
      store.dispatch(setEventSettings({ throttleDelay: 100, throttledEvents: 'all' }));

      // t=0: Event 1 (Leading)
      store.dispatch(
        externalEventAction({
          reactEvent: mockEvent as any,
          handler: mockHandler,
        }),
      );
      expect(mockHandler).toHaveBeenCalledTimes(1);

      // t=50: Event 2 (Ignored/Saved for trailing)
      store.dispatch(
        externalEventAction({
          reactEvent: mockEvent as any,
          handler: mockHandler,
        }),
      );
      expect(mockHandler).toHaveBeenCalledTimes(1);

      // t=110: Timer fires (Trailing)
      act(() => {
        vi.advanceTimersByTime(110);
      });

      expect(mockHandler).toHaveBeenCalledTimes(2);
      // Timer should be cleared after trailing execution, ready for new leading edge
      expect(vi.getTimerCount()).toBe(0);
    });

    it('should NOT throttle click event when not in allowlist', () => {
      store.dispatch(setEventSettings({ throttleDelay: 100, throttledEvents: ['mousemove'] }));

      store.dispatch(
        externalEventAction({
          reactEvent: mockEvent as any,
          handler: mockHandler,
        }),
      );

      expect(vi.getTimerCount()).toBe(0);
      expect(mockHandler).toHaveBeenCalled();
    });
  });
});
