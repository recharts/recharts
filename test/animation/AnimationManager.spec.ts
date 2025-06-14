import { describe, it, beforeEach, expect, vi } from 'vitest';
import {
  AnimationManager,
  createAnimateManager,
  HandleChangeFn,
  ReactSmoothQueue,
} from '../../src/animation/AnimationManager';
import { MockTimeoutController } from './mockTimeoutController';

describe('createAnimateManager', () => {
  let manager: AnimationManager, handleChange: HandleChangeFn;
  const mockSetTimeout = new MockTimeoutController();

  beforeEach(() => {
    mockSetTimeout.clear();
    handleChange = vi.fn();
    manager = createAnimateManager(mockSetTimeout);
    manager.subscribe(handleChange);
  });

  it('should not start animation before calling start()', () => {
    expect(mockSetTimeout.getCallbacksCount()).toBe(0);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('should do nothing with empty input', () => {
    manager.start([]);
    expect(mockSetTimeout.getCallbacksCount()).toBe(0);
    expect(mockSetTimeout.getTimeouts()).toEqual([]);
    expect(handleChange).not.toHaveBeenCalled();
  });

  describe('when given objects', () => {
    it('should call handleChange once, without timeouts, with one style on the input', async () => {
      manager.start([{ color: 'a' }]);
      // why does the manager call setStyle immediately, and yet starts a timeout at the same time?
      expect(mockSetTimeout.getCallbacksCount()).toBe(1);
      expect(mockSetTimeout.getTimeouts()).toEqual([undefined]);
      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith({ color: 'a' });

      await mockSetTimeout.triggerNextTimeout(1);

      // no further calls to handleChange after the timeout - so why was it setting the timeout in the first place?
      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(mockSetTimeout.getCallbacksCount()).toBe(0);
      expect(mockSetTimeout.getTimeouts()).toEqual([]);
    });

    it('should wait for timeout before calling handleChange with multiple styles', async () => {
      const queue: ReactSmoothQueue = [{ color: 'red' }, 100, { color: 'blue' }, 200, { color: 'green' }];
      manager.start(queue);

      expect(mockSetTimeout.getCallbacksCount()).toBe(1);
      // first item should start immediately
      expect(mockSetTimeout.getTimeouts()).toEqual([undefined]);
      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith({ color: 'red' });

      // Simulate the first timeout
      await mockSetTimeout.triggerNextTimeout(1);

      // now we are waiting, no more calls to handleChange
      expect(mockSetTimeout.getCallbacksCount()).toBe(1);
      expect(mockSetTimeout.getTimeouts()).toEqual([100]);
      expect(handleChange).toHaveBeenCalledTimes(1);

      // Simulate the second timeout
      await mockSetTimeout.triggerNextTimeout(1);

      expect(handleChange).toHaveBeenCalledTimes(2);
      expect(handleChange).toHaveBeenLastCalledWith({ color: 'blue' });
      expect(mockSetTimeout.getTimeouts()).toEqual([undefined]);
      expect(mockSetTimeout.getCallbacksCount()).toBe(1);

      // Simulate the third timeout
      await mockSetTimeout.triggerNextTimeout(1);

      expect(handleChange).toHaveBeenCalledTimes(2);
      expect(mockSetTimeout.getTimeouts()).toEqual([200]);
      expect(mockSetTimeout.getCallbacksCount()).toBe(1);

      // Simulate the fourth timeout
      await mockSetTimeout.triggerNextTimeout(1);

      expect(handleChange).toHaveBeenCalledTimes(3);
      expect(handleChange).toHaveBeenLastCalledWith({ color: 'green' });
      expect(mockSetTimeout.getTimeouts()).toEqual([undefined]);
      expect(mockSetTimeout.getCallbacksCount()).toBe(1);

      // and again the last useless timeout
      await mockSetTimeout.triggerNextTimeout(1);

      expect(handleChange).toHaveBeenCalledTimes(3);
      expect(mockSetTimeout.getTimeouts()).toEqual([]);
      expect(mockSetTimeout.getCallbacksCount()).toBe(0);
    });

    it('should interrupt animation after calling stop()', async () => {
      const queue: ReactSmoothQueue = [{ color: 'red' }, 100, { color: 'blue' }];
      manager.start(queue);
      expect(mockSetTimeout.getCallbacksCount()).toBe(1);
      expect(mockSetTimeout.getTimeouts()).toEqual([undefined]);
      expect(handleChange).toHaveBeenCalledWith({ color: 'red' });

      // Stop animation
      manager.stop();

      // the stop didn't cancel the timeout, but also it's not going to start a new one
      expect(mockSetTimeout.getCallbacksCount()).toBe(1);

      await mockSetTimeout.triggerNextTimeout(1);

      expect(mockSetTimeout.getCallbacksCount()).toBe(0);
      // handleChange should not be called again
      expect(handleChange).toHaveBeenCalledTimes(1);
      // there should be no further timeouts
      expect(mockSetTimeout.getTimeouts()).toEqual([]);
    });

    it('should wait for timeout if it is on the first item', async () => {
      const queue: ReactSmoothQueue = [100, { color: 'red' }];
      manager.start(queue);

      expect(mockSetTimeout.getCallbacksCount()).toBe(1);
      expect(mockSetTimeout.getTimeouts()).toEqual([100]);
      expect(handleChange).not.toHaveBeenCalled();

      // Simulate the timeout
      await mockSetTimeout.triggerNextTimeout(1);

      expect(handleChange).toHaveBeenCalledWith({ color: 'red' });
      expect(mockSetTimeout.getCallbacksCount()).toBe(1);
      expect(mockSetTimeout.getTimeouts()).toEqual([undefined]);

      // Simulate the next timeout
      await mockSetTimeout.triggerNextTimeout(1);

      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(mockSetTimeout.getCallbacksCount()).toBe(0);
    });

    // What is the point of having both unsubscribe and stop?
    it('should unsubscribe but keep the loop running', async () => {
      const queue: ReactSmoothQueue = [{ color: 'red' }, 100, { color: 'blue' }];
      const unsubscribe = manager.subscribe(handleChange);
      manager.start(queue);

      expect(mockSetTimeout.getCallbacksCount()).toBe(1);
      expect(mockSetTimeout.getTimeouts()).toEqual([undefined]);
      expect(handleChange).toHaveBeenCalledWith({ color: 'red' });

      // Unsubscribe
      unsubscribe();

      // Simulate the first timeout
      await mockSetTimeout.triggerNextTimeout(1);

      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith({ color: 'red' });
      expect(mockSetTimeout.getCallbacksCount()).toBe(1);
      expect(mockSetTimeout.getTimeouts()).toEqual([100]);

      // Simulate the second timeout
      await mockSetTimeout.triggerNextTimeout(1);

      // No further calls after unsubscribe
      expect(handleChange).toHaveBeenCalledTimes(1);
      // but the loop is still running
      expect(mockSetTimeout.getCallbacksCount()).toBe(1);
      expect(mockSetTimeout.getTimeouts()).toEqual([undefined]);
    });

    it('should allow to stop and then start again, and it should forget all state from before the stop', async () => {
      const queue1: ReactSmoothQueue = [{ color: 'red' }, 100, { color: 'blue' }];
      const queue2: ReactSmoothQueue = [{ color: 'green' }, 200, { color: 'yellow' }];

      manager.start(queue1);
      expect(mockSetTimeout.getCallbacksCount()).toBe(1);
      expect(mockSetTimeout.getTimeouts()).toEqual([undefined]);
      expect(handleChange).toHaveBeenCalledWith({ color: 'red' });

      // Simulate the first timeout
      await mockSetTimeout.triggerNextTimeout(1);

      // now we are waiting for the second timeout
      expect(mockSetTimeout.getCallbacksCount()).toBe(1);
      expect(mockSetTimeout.getTimeouts()).toEqual([100]);

      // Stop the animation
      manager.stop();

      // Now we can start again
      manager.start(queue2);

      // The functions from the first queue should not be called anymore
      expect(handleChange).toHaveBeenCalledWith({ color: 'red' });
      expect(handleChange).not.toHaveBeenCalledWith({ color: 'blue' });
      // The first item from the second queue should be called immediately
      expect(handleChange).toHaveBeenCalledWith({ color: 'green' });

      // Simulate the second timeout
      await mockSetTimeout.triggerNextTimeout(1);

      expect(handleChange).toHaveBeenCalledTimes(2);
      expect(handleChange).toHaveBeenLastCalledWith({ color: 'green' });
      expect(mockSetTimeout.getCallbacksCount()).toBe(1);
      expect(mockSetTimeout.getTimeouts()).toEqual([200]);

      // Simulate the third timeout
      await mockSetTimeout.triggerNextTimeout(1);

      expect(handleChange).toHaveBeenCalledTimes(3);
      expect(handleChange).toHaveBeenLastCalledWith({ color: 'yellow' });
      expect(mockSetTimeout.getCallbacksCount()).toBe(1);
      expect(mockSetTimeout.getTimeouts()).toEqual([undefined]);

      // and again the last useless timeout
      await mockSetTimeout.triggerNextTimeout(1);

      expect(mockSetTimeout.getCallbacksCount()).toBe(0);
    });
  });

  describe('when given functions', () => {
    it('should call the function immediately, with no arguments', async () => {
      const fn = vi.fn();
      manager.start([fn]);
      expect(fn).toHaveBeenCalled();
      expect(fn).toHaveBeenCalledWith();
      expect(mockSetTimeout.getCallbacksCount()).toBe(1);
      expect(handleChange).not.toHaveBeenCalled();
      expect(mockSetTimeout.getTimeouts()).toEqual([undefined]);

      // Simulate the timeout
      await mockSetTimeout.triggerNextTimeout(1);

      expect(mockSetTimeout.getCallbacksCount()).toBe(0);
    });

    it('should call functions in the queue', async () => {
      const fn1 = vi.fn();
      const fn2 = vi.fn();
      const fn3 = vi.fn();

      manager.start([fn1, 100, fn2, 200, fn3]);

      expect(mockSetTimeout.getCallbacksCount()).toBe(1);
      expect(mockSetTimeout.getTimeouts()).toEqual([undefined]);
      expect(fn1).toHaveBeenCalled();
      expect(fn2).not.toHaveBeenCalled();
      expect(fn3).not.toHaveBeenCalled();

      // Simulate the first timeout
      await mockSetTimeout.triggerNextTimeout(1);

      // now the waiting for the second timeout
      expect(mockSetTimeout.getCallbacksCount()).toBe(1);
      expect(mockSetTimeout.getTimeouts()).toEqual([100]);

      await mockSetTimeout.triggerNextTimeout(1);

      expect(fn2).toHaveBeenCalled();
      expect(fn3).not.toHaveBeenCalled();
      expect(mockSetTimeout.getTimeouts()).toEqual([undefined]);

      // Simulate the second timeout
      await mockSetTimeout.triggerNextTimeout(1);

      expect(mockSetTimeout.getTimeouts()).toEqual([200]);

      await mockSetTimeout.triggerNextTimeout(1);

      expect(fn3).toHaveBeenCalled();

      expect(mockSetTimeout.getCallbacksCount()).toBe(1);
      expect(mockSetTimeout.getTimeouts()).toEqual([undefined]);

      // and again the last useless timeout
      await mockSetTimeout.triggerNextTimeout(1);

      expect(mockSetTimeout.getCallbacksCount()).toBe(0);
      expect(fn1).toHaveBeenCalledTimes(1);
      expect(fn1).toHaveBeenCalledWith();
      expect(fn2).toHaveBeenCalledTimes(1);
      expect(fn2).toHaveBeenCalledWith();
      expect(fn3).toHaveBeenCalledTimes(1);
      expect(fn3).toHaveBeenCalledWith();
    });

    it('should allow to stop and then start again, and it should forget all state from before the stop', async () => {
      const fn1 = vi.fn();
      const fn2 = vi.fn();
      const fn3 = vi.fn();
      const fn4 = vi.fn();

      manager.start([fn1, 100, fn2]);
      expect(mockSetTimeout.getCallbacksCount()).toBe(1);
      expect(mockSetTimeout.getTimeouts()).toEqual([undefined]);
      expect(fn1).toHaveBeenCalledTimes(1);
      expect(fn2).not.toHaveBeenCalled();
      expect(fn3).not.toHaveBeenCalled();

      // Simulate the first timeout
      await mockSetTimeout.triggerNextTimeout(1);

      // now the waiting for the second timeout
      expect(mockSetTimeout.getCallbacksCount()).toBe(1);
      expect(mockSetTimeout.getTimeouts()).toEqual([100]);

      // Stop the animation
      manager.stop();

      expect(fn1).toHaveBeenCalledTimes(1);
      expect(fn2).not.toHaveBeenCalled();

      // Now we can start again
      manager.start([fn3, 200, fn4]);

      // The functions from the first queue should not be called anymore
      expect(fn1).toHaveBeenCalledTimes(1);
      expect(fn2).not.toHaveBeenCalled();
      // fn3 should be called immediately from the second start
      expect(fn3).toHaveBeenCalledTimes(1);
      expect(fn4).not.toHaveBeenCalled();

      // Simulate the second timeout
      await mockSetTimeout.triggerNextTimeout(1);

      // The functions from the first queue should not be called anymore
      expect(fn1).toHaveBeenCalledTimes(1);
      expect(fn2).not.toHaveBeenCalled();
      expect(fn3).toHaveBeenCalledTimes(1);
      expect(fn4).not.toHaveBeenCalled();

      // Simulate the third timeout
      await mockSetTimeout.triggerNextTimeout(1);

      // The functions from the first queue should not be called anymore
      expect(fn1).toHaveBeenCalledTimes(1);
      expect(fn2).not.toHaveBeenCalled();
      expect(fn3).toHaveBeenCalledTimes(1);
      expect(fn4).toHaveBeenCalledTimes(1);

      expect(mockSetTimeout.getCallbacksCount()).toBe(1);
      expect(mockSetTimeout.getTimeouts()).toEqual([undefined]);

      // and again the last useless timeout
      await mockSetTimeout.triggerNextTimeout(1);
      expect(mockSetTimeout.getCallbacksCount()).toBe(0);
    });
  });
});
