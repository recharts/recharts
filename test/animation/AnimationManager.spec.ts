import { describe, it, beforeEach, expect, vi } from 'vitest';
import {
  AnimationManager,
  createAnimateManager,
  HandleChangeFn,
  ReactSmoothQueue,
  SetTimeoutFn,
} from '../../src/animation/AnimationManager';

class MockSetTimeout {
  private timeouts: Array<number> = [];

  private callback: null | (() => void) = null;

  setTimeout: SetTimeoutFn = (callback: () => void, timeout: number): void => {
    this.timeouts.push(timeout);
    this.callback = callback;
  };

  getTimeouts(): ReadonlyArray<number> {
    return this.timeouts;
  }

  isWaitingForTimeout(): boolean {
    return this.callback !== null;
  }

  async callCallback(): Promise<void> {
    const cb = this.callback;
    this.callback = null;
    await Promise.resolve(); // to ensure the callback is called in the next tick
    cb();
  }

  reset() {
    this.timeouts = [];
  }
}

describe('createAnimateManager', () => {
  let manager: AnimationManager, handleChange: HandleChangeFn;
  const mockSetTimeout = new MockSetTimeout();

  beforeEach(() => {
    manager = createAnimateManager(mockSetTimeout.setTimeout);
    mockSetTimeout.reset();
    handleChange = vi.fn();
    manager.subscribe(handleChange);
  });

  it('should not start animation before calling start()', () => {
    expect(mockSetTimeout.isWaitingForTimeout()).toBe(false);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('should do nothing with empty input', () => {
    manager.start([]);
    expect(mockSetTimeout.isWaitingForTimeout()).toBe(false);
    expect(mockSetTimeout.getTimeouts()).toEqual([]);
    expect(handleChange).not.toHaveBeenCalled();
  });

  describe('when given objects', () => {
    it('should call handleChange once, without timeouts, with one style on the input', () => {
      manager.start([{ color: 'a' }]);
      // why does the manager call setStyle immediately, and yet starts a timeout at the same time?
      expect(mockSetTimeout.isWaitingForTimeout()).toBe(true);
      expect(mockSetTimeout.getTimeouts()).toEqual([undefined]);
      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith({ color: 'a' });

      mockSetTimeout.callCallback();

      // no further calls to handleChange after the timeout - so why was it setting the timeout in the first place?
      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(mockSetTimeout.isWaitingForTimeout()).toBe(false);
      expect(mockSetTimeout.getTimeouts()).toEqual([undefined]);
    });

    it('should wait for timeout before calling handleChange with multiple styles', async () => {
      const queue: ReactSmoothQueue = [{ color: 'red' }, 100, { color: 'blue' }, 200, { color: 'green' }];
      manager.start(queue);

      expect(mockSetTimeout.isWaitingForTimeout()).toBe(true);
      // first item should start immediately
      expect(mockSetTimeout.getTimeouts()).toEqual([undefined]);
      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith({ color: 'red' });

      // Simulate the first timeout
      await mockSetTimeout.callCallback();

      // now we are waiting, no more calls to handleChange
      expect(mockSetTimeout.isWaitingForTimeout()).toBe(true);
      expect(mockSetTimeout.getTimeouts()).toEqual([undefined, 100]);
      expect(handleChange).toHaveBeenCalledTimes(1);

      // Simulate the second timeout
      await mockSetTimeout.callCallback();

      expect(handleChange).toHaveBeenCalledTimes(2);
      expect(handleChange).toHaveBeenLastCalledWith({ color: 'blue' });
      expect(mockSetTimeout.getTimeouts()).toEqual([undefined, 100, undefined]);
      expect(mockSetTimeout.isWaitingForTimeout()).toBe(true);

      // Simulate the third timeout
      await mockSetTimeout.callCallback();

      expect(handleChange).toHaveBeenCalledTimes(2);
      expect(mockSetTimeout.getTimeouts()).toEqual([undefined, 100, undefined, 200]);
      expect(mockSetTimeout.isWaitingForTimeout()).toBe(true);

      // Simulate the fourth timeout
      await mockSetTimeout.callCallback();

      expect(handleChange).toHaveBeenCalledTimes(3);
      expect(handleChange).toHaveBeenLastCalledWith({ color: 'green' });
      expect(mockSetTimeout.getTimeouts()).toEqual([undefined, 100, undefined, 200, undefined]);
      expect(mockSetTimeout.isWaitingForTimeout()).toBe(true);

      // and again the last useless timeout
      await mockSetTimeout.callCallback();

      expect(handleChange).toHaveBeenCalledTimes(3);
      expect(mockSetTimeout.getTimeouts()).toEqual([undefined, 100, undefined, 200, undefined]);
      expect(mockSetTimeout.isWaitingForTimeout()).toBe(false);
    });

    it('should interrupt animation after calling stop()', async () => {
      const queue: ReactSmoothQueue = [{ color: 'red' }, 100, { color: 'blue' }];
      manager.start(queue);
      expect(mockSetTimeout.isWaitingForTimeout()).toBe(true);
      expect(mockSetTimeout.getTimeouts()).toEqual([undefined]);
      expect(handleChange).toHaveBeenCalledWith({ color: 'red' });

      // Stop animation
      manager.stop();

      // the stop didn't cancel the timeout, but also it's not going to start a new one
      expect(mockSetTimeout.isWaitingForTimeout()).toBe(true);

      await mockSetTimeout.callCallback();

      expect(mockSetTimeout.isWaitingForTimeout()).toBe(false);
      // handleChange should not be called again
      expect(handleChange).toHaveBeenCalledTimes(1);
      // there should be no further timeouts
      expect(mockSetTimeout.getTimeouts()).toEqual([undefined]);
    });

    it('should wait for timeout if it is on the first item', async () => {
      const queue: ReactSmoothQueue = [100, { color: 'red' }];
      manager.start(queue);

      expect(mockSetTimeout.isWaitingForTimeout()).toBe(true);
      expect(mockSetTimeout.getTimeouts()).toEqual([100]);
      expect(handleChange).not.toHaveBeenCalled();

      // Simulate the timeout
      await mockSetTimeout.callCallback();

      expect(handleChange).toHaveBeenCalledWith({ color: 'red' });
      expect(mockSetTimeout.isWaitingForTimeout()).toBe(true);
      expect(mockSetTimeout.getTimeouts()).toEqual([100, undefined]);

      // Simulate the next timeout
      await mockSetTimeout.callCallback();

      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(mockSetTimeout.isWaitingForTimeout()).toBe(false);
    });

    // What is the point of having both unsubscribe and stop?
    it('should unsubscribe but keep the loop running', async () => {
      const queue: ReactSmoothQueue = [{ color: 'red' }, 100, { color: 'blue' }];
      const unsubscribe = manager.subscribe(handleChange);
      manager.start(queue);

      expect(mockSetTimeout.isWaitingForTimeout()).toBe(true);
      expect(mockSetTimeout.getTimeouts()).toEqual([undefined]);
      expect(handleChange).toHaveBeenCalledWith({ color: 'red' });

      // Unsubscribe
      unsubscribe();

      // Simulate the first timeout
      await mockSetTimeout.callCallback();

      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith({ color: 'red' });
      expect(mockSetTimeout.isWaitingForTimeout()).toBe(true);
      expect(mockSetTimeout.getTimeouts()).toEqual([undefined, 100]);

      // Simulate the second timeout
      await mockSetTimeout.callCallback();

      // No further calls after unsubscribe
      expect(handleChange).toHaveBeenCalledTimes(1);
      // but the loop is still running
      expect(mockSetTimeout.isWaitingForTimeout()).toBe(true);
      expect(mockSetTimeout.getTimeouts()).toEqual([undefined, 100, undefined]);
    });
  });

  describe('when given functions', () => {
    it('should call the function immediately, with no arguments', async () => {
      const fn = vi.fn();
      manager.start([fn]);
      expect(fn).toHaveBeenCalled();
      expect(fn).toHaveBeenCalledWith();
      expect(mockSetTimeout.isWaitingForTimeout()).toBe(true);
      expect(handleChange).not.toHaveBeenCalled();
      expect(mockSetTimeout.getTimeouts()).toEqual([undefined]);

      // Simulate the timeout
      await mockSetTimeout.callCallback();

      expect(mockSetTimeout.isWaitingForTimeout()).toBe(false);
    });

    it('should call functions in the queue', async () => {
      const fn1 = vi.fn();
      const fn2 = vi.fn();
      const fn3 = vi.fn();

      manager.start([fn1, 100, fn2, 200, fn3]);

      expect(mockSetTimeout.isWaitingForTimeout()).toBe(true);
      expect(mockSetTimeout.getTimeouts()).toEqual([undefined]);
      expect(fn1).toHaveBeenCalled();
      expect(fn2).not.toHaveBeenCalled();
      expect(fn3).not.toHaveBeenCalled();

      // Simulate the first timeout
      await mockSetTimeout.callCallback();

      // now the waiting for the second timeout
      expect(mockSetTimeout.isWaitingForTimeout()).toBe(true);
      expect(mockSetTimeout.getTimeouts()).toEqual([undefined, 100]);

      await mockSetTimeout.callCallback();

      expect(fn2).toHaveBeenCalled();
      expect(fn3).not.toHaveBeenCalled();
      expect(mockSetTimeout.getTimeouts()).toEqual([undefined, 100, undefined]);

      // Simulate the second timeout
      await mockSetTimeout.callCallback();

      expect(mockSetTimeout.getTimeouts()).toEqual([undefined, 100, undefined, 200]);

      await mockSetTimeout.callCallback();

      expect(fn3).toHaveBeenCalled();

      expect(mockSetTimeout.isWaitingForTimeout()).toBe(true);
      expect(mockSetTimeout.getTimeouts()).toEqual([undefined, 100, undefined, 200, undefined]);

      // and again the last useless timeout
      await mockSetTimeout.callCallback();

      expect(mockSetTimeout.isWaitingForTimeout()).toBe(false);
      expect(fn1).toHaveBeenCalledTimes(1);
      expect(fn1).toHaveBeenCalledWith();
      expect(fn2).toHaveBeenCalledTimes(1);
      expect(fn2).toHaveBeenCalledWith();
      expect(fn3).toHaveBeenCalledTimes(1);
      expect(fn3).toHaveBeenCalledWith();
    });
  });
});
