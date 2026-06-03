import { describe, expect, it, vi } from 'vitest';
import { ManualTimeoutController } from '../../src/animation/ManualTimeoutController';

describe('ManualTimeoutController', () => {
  it('should store callbacks and trigger them manually', () => {
    const controller = new ManualTimeoutController();
    const callback = vi.fn();

    controller.setTimeout(callback, 100);
    expect(controller.getCallbacksCount()).toBe(1);
    expect(callback).not.toHaveBeenCalled();

    controller.triggerNextTimeout(50);
    expect(callback).toHaveBeenCalledWith(50);
    expect(controller.getCallbacksCount()).toBe(0);
  });

  it('should trigger callbacks in FIFO order', () => {
    const controller = new ManualTimeoutController();
    const callOrder: number[] = [];
    const cb1 = vi.fn(() => callOrder.push(1));
    const cb2 = vi.fn(() => callOrder.push(2));

    controller.setTimeout(cb1, 100);
    controller.setTimeout(cb2, 200);

    controller.triggerNextTimeout(10);
    controller.triggerNextTimeout(20);

    expect(callOrder).toEqual([1, 2]);
  });

  it('should allow cancelling a timeout', () => {
    const controller = new ManualTimeoutController();
    const callback = vi.fn();

    const cancel = controller.setTimeout(callback, 100);
    expect(controller.getCallbacksCount()).toBe(1);

    cancel();
    expect(controller.getCallbacksCount()).toBe(0);

    controller.triggerNextTimeout(50);
    expect(callback).not.toHaveBeenCalled();
  });

  it('should remove duplicate registrations when triggering', () => {
    const controller = new ManualTimeoutController();
    const callback = vi.fn();

    // Register the same callback twice
    controller.setTimeout(callback, 100);
    controller.setTimeout(callback, 200);
    expect(controller.getCallbacksCount()).toBe(2);

    controller.triggerNextTimeout(50);
    expect(callback).toHaveBeenCalledTimes(1);
    // The duplicate should also be removed
    expect(controller.getCallbacksCount()).toBe(0);
  });

  it('should do nothing when no timeouts are queued', () => {
    const controller = new ManualTimeoutController();
    // Should not throw
    controller.triggerNextTimeout(100);
    expect(controller.getCallbacksCount()).toBe(0);
  });

  it('should clear all pending timeouts', () => {
    const controller = new ManualTimeoutController();
    controller.setTimeout(vi.fn(), 100);
    controller.setTimeout(vi.fn(), 200);
    expect(controller.getCallbacksCount()).toBe(2);

    controller.clear();
    expect(controller.getCallbacksCount()).toBe(0);
  });
});
