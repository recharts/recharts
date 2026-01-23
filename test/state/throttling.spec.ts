import { describe, it, expect, vi, beforeEach } from 'vitest';
import { act } from '@testing-library/react';
import { createRechartsStore } from '../../src/state/store';
import { mouseMoveAction } from '../../src/state/mouseEventsMiddleware';
import { externalEventAction } from '../../src/state/externalEventsMiddleware';
import { setEventSettings } from '../../src/state/eventSettingsSlice';
import { MousePointer } from '../../src/util/types';
import { getMockDomRect } from '../helper/mockGetBoundingClientRect';

function createMockMousePointer(x: number, y: number): MousePointer {
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
  });

  describe('externalEventsMiddleware', () => {
    const mockHandler = vi.fn();
    const mockEvent = {
      type: 'click',
      persist: vi.fn(),
    };

    it('should throttle click event when configured', () => {
      store.dispatch(setEventSettings({ throttleDelay: 100, throttledEvents: 'all' }));

      store.dispatch(
        externalEventAction({
          reactEvent: mockEvent as any,
          handler: mockHandler,
        }),
      );

      expect(vi.getTimerCount()).toBe(1);
      expect(mockHandler).not.toHaveBeenCalled();

      act(() => {
        vi.advanceTimersByTime(100);
      });

      expect(mockHandler).toHaveBeenCalled();
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
