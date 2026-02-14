import { describe, it, expect, vi, beforeEach, Mock } from 'vitest';
import { SyntheticEvent } from 'react';
import { Store } from '@reduxjs/toolkit';
import { act } from '@testing-library/react';
import { externalEventAction } from '../../src/state/externalEventsMiddleware';
import { createRechartsStore, RechartsRootState } from '../../src/state/store';

describe('externalEventsMiddleware', () => {
  let store: Store<RechartsRootState>, mockHandler: Mock, mockEvent: SyntheticEvent;

  beforeEach(() => {
    store = createRechartsStore();
    mockHandler = vi.fn();
    mockEvent = {
      type: 'mousemove',
      persist: vi.fn(),
    } as unknown as SyntheticEvent;
    vi.clearAllTimers();
  });

  it('should not call handler when handler is undefined', () => {
    store.dispatch(
      externalEventAction({
        reactEvent: mockEvent,
        handler: undefined,
      }),
    );

    act(() => {
      vi.runOnlyPendingTimers();
    });

    expect(mockHandler).not.toHaveBeenCalled();
    expect(mockEvent.persist).not.toHaveBeenCalled();
  });

  it('should call handler with state and event after requestAnimationFrame triggers', () => {
    store.dispatch(
      externalEventAction({
        reactEvent: mockEvent,
        handler: mockHandler,
      }),
    );

    expect(mockEvent.persist).toHaveBeenCalledTimes(1);
    expect(mockHandler).toHaveBeenCalledTimes(0);
    expect(vi.getTimerCount()).toBe(1);

    act(() => {
      vi.runOnlyPendingTimers();
    });

    expect(vi.getTimerCount()).toBe(0);
    expect(mockHandler).toHaveBeenCalledTimes(1);
    expect(mockHandler).toHaveBeenCalledWith(
      expect.objectContaining({
        activeCoordinate: undefined,
        activeDataKey: undefined,
        activeIndex: null,
        activeLabel: undefined,
        activeTooltipIndex: null,
        isTooltipActive: false,
      }),
      expect.objectContaining({
        type: mockEvent.type,
      }),
    );
  });

  it('should persist the event for React 16 users', () => {
    store.dispatch(
      externalEventAction({
        reactEvent: mockEvent,
        handler: mockHandler,
      }),
    );

    expect(mockEvent.persist).toHaveBeenCalledTimes(1);
  });

  it('should cancel previous animation frame when dispatched multiple times with same event type', () => {
    const firstEvent = {
      type: 'touchmove',
      persist: vi.fn(),
    } as unknown as SyntheticEvent;

    // First dispatch
    store.dispatch(
      externalEventAction({
        reactEvent: firstEvent,
        handler: mockHandler,
      }),
    );

    expect(vi.getTimerCount()).toBe(1);

    // Second dispatch with same event type should cancel the first
    const secondMockEvent = {
      type: 'touchmove',
      persist: vi.fn(),
    } as unknown as SyntheticEvent;

    store.dispatch(
      externalEventAction({
        reactEvent: secondMockEvent,
        handler: mockHandler,
      }),
    );

    expect(vi.getTimerCount()).toBe(1);
  });

  it('should NOT cancel animation frames for different event types', () => {
    const touchEvent = {
      type: 'touchmove',
      persist: vi.fn(),
    } as unknown as SyntheticEvent;

    const mouseMoveEvent = {
      type: 'mousemove',
      persist: vi.fn(),
    } as unknown as SyntheticEvent;

    const handler1 = vi.fn();
    const handler2 = vi.fn();

    expect(vi.getTimerCount()).toBe(0);

    // Dispatch touchmove event
    store.dispatch(
      externalEventAction({
        reactEvent: touchEvent,
        handler: handler1,
      }),
    );

    expect(vi.getTimerCount()).toBe(1);

    // Dispatch mousemove event - should NOT cancel touchmove event
    store.dispatch(
      externalEventAction({
        reactEvent: mouseMoveEvent,
        handler: handler2,
      }),
    );

    // Both should be pending
    expect(vi.getTimerCount()).toBe(2);

    act(() => {
      vi.runOnlyPendingTimers();
    });

    // Both handlers should have been called
    expect(handler1).toHaveBeenCalledTimes(1);
    expect(handler2).toHaveBeenCalledTimes(1);
  });

  it('should handle multiple handlers with different events', () => {
    const handler1 = vi.fn();
    const handler2 = vi.fn();
    const event1 = { type: 'touchmove', persist: vi.fn() } as unknown as SyntheticEvent;
    const event2 = { type: 'mousemove', persist: vi.fn() } as unknown as SyntheticEvent;

    store.dispatch(
      externalEventAction({
        reactEvent: event1,
        handler: handler1,
      }),
    );

    store.dispatch(
      externalEventAction({
        reactEvent: event2,
        handler: handler2,
      }),
    );

    act(() => {
      vi.runOnlyPendingTimers();
    });

    expect(handler1).toHaveBeenCalledTimes(1);
    expect(handler2).toHaveBeenCalledTimes(1);
    expect(event1.persist).toHaveBeenCalledTimes(1);
    expect(event2.persist).toHaveBeenCalledTimes(1);
  });

  it('should have access to currentTarget in the async handler even if it is nullified on the original event', () => {
    let currentTarget: HTMLElement | null = document.createElement('div');
    const spy = vi.fn();
    const eventWithCurrentTarget = {
      type: 'mousemove',
      persist: vi.fn(),
      preventDefault: spy,
      get currentTarget() {
        return currentTarget;
      },
    } as unknown as SyntheticEvent;

    store.dispatch(
      externalEventAction({
        reactEvent: eventWithCurrentTarget,
        handler: mockHandler,
      }),
    );

    // Simulate the browser/React behavior where currentTarget becomes null after the event handler finishes
    currentTarget = null;

    act(() => {
      vi.runOnlyPendingTimers();
    });

    expect(mockHandler).toHaveBeenCalledTimes(1);
    const eventPassedToHandler = mockHandler.mock.calls[0][1];
    expect(eventPassedToHandler.currentTarget).not.toBeNull();
    // Verify it is the element we created
    expect(eventPassedToHandler.currentTarget).toBeInstanceOf(HTMLDivElement);
    expect(spy).toHaveBeenCalledTimes(0);
    eventPassedToHandler.preventDefault();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
