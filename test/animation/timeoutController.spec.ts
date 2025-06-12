import { describe, it, expect, vi, beforeAll, afterAll, MockInstance } from 'vitest';
import { RequestAnimationFrameTimeoutController } from '../../src/animation/timeoutController';

describe('RequestAnimationFrameTimeoutController', () => {
  beforeAll(() => {
    vi.useFakeTimers();
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  it('should call requestAnimationFrame with a callback', () => {
    const rafSpy: MockInstance<Window['requestAnimationFrame']> = vi.spyOn(window, 'requestAnimationFrame');
    const controller = new RequestAnimationFrameTimeoutController();
    const cb = vi.fn();

    controller.setTimeout(cb);
    expect(cb).not.toHaveBeenCalled();
    expect(rafSpy).toHaveBeenCalledWith(expect.any(Function));

    // Simulate the passage of time
    vi.runAllTimers();
    expect(cb).toHaveBeenCalledTimes(1);
    expect(rafSpy).toHaveBeenCalledTimes(1);
  });

  it('should cancel timeout', () => {
    const rafSpy: MockInstance<Window['requestAnimationFrame']> = vi.spyOn(window, 'requestAnimationFrame');
    const cancelSpy: MockInstance<Window['cancelAnimationFrame']> = vi.spyOn(window, 'cancelAnimationFrame');
    const controller = new RequestAnimationFrameTimeoutController();
    const cb = vi.fn();

    const cancellableTimeout = controller.setTimeout(cb);
    expect(cb).not.toHaveBeenCalled();
    expect(rafSpy).toHaveBeenCalledWith(expect.any(Function));

    cancellableTimeout();

    // Simulate the passage of time
    vi.runAllTimers();
    expect(cb).toHaveBeenCalledTimes(0);
    expect(rafSpy).toHaveBeenCalledTimes(1);
    expect(cancelSpy).toHaveBeenCalledTimes(1);
  });

  it('should allow multiple timeouts to be set', () => {
    const controller = new RequestAnimationFrameTimeoutController();

    const cb1 = vi.fn();
    const cb2 = vi.fn();

    controller.setTimeout(cb1);
    controller.setTimeout(cb2);

    // Simulate the passage of time
    vi.runAllTimers();

    expect(cb1).toHaveBeenCalledTimes(1);
    expect(cb2).toHaveBeenCalledTimes(1);
  });

  it('should allow setting a timeout with a delay', () => {
    const controller = new RequestAnimationFrameTimeoutController();
    const cb = vi.fn();

    controller.setTimeout(cb, 1000);

    // Simulate the passage of time
    vi.advanceTimersByTime(999);
    expect(cb).not.toHaveBeenCalled();

    vi.advanceTimersByTime(100);
    expect(cb).toHaveBeenCalledTimes(1);
  });

  it('should allow settings two callbacks with different delays', () => {
    const controller = new RequestAnimationFrameTimeoutController();
    const cb1 = vi.fn();
    const cb2 = vi.fn();

    controller.setTimeout(cb1, 1000);
    controller.setTimeout(cb2, 500);

    // Simulate the passage of time
    vi.advanceTimersByTime(499);
    expect(cb1).not.toHaveBeenCalled();
    expect(cb2).not.toHaveBeenCalled();

    vi.advanceTimersByTime(100);
    expect(cb1).not.toHaveBeenCalled();
    expect(cb2).toHaveBeenCalledTimes(1);

    vi.advanceTimersByTime(500);
    expect(cb1).toHaveBeenCalledTimes(1);
  });

  it('should allow cancelling a timeout before it executes', () => {
    const controller = new RequestAnimationFrameTimeoutController();
    const cb = vi.fn();

    const cancellableTimeout = controller.setTimeout(cb, 1000);

    // Cancel the timeout before it executes
    cancellableTimeout();

    // Simulate the passage of time
    vi.advanceTimersByTime(2000);

    expect(cb).not.toHaveBeenCalled();
  });

  it('should allow cancelling a timeout before it executes, but after a bit of delay', () => {
    const controller = new RequestAnimationFrameTimeoutController();
    const cb = vi.fn();

    const cancellableTimeout = controller.setTimeout(cb, 1000);

    vi.advanceTimersByTime(100);

    // Cancel the timeout before it executes
    cancellableTimeout();

    // Simulate the passage of time
    vi.advanceTimersByTime(2000);

    expect(cb).not.toHaveBeenCalled();
  });
});
