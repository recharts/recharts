import { describe, it, beforeEach, expect, vi, MockInstance } from 'vitest';
import { configEasing } from '../../src/animation/easing';
import animationFunction, {
  CancelAnimationFrameDi,
  CancelAnimationFunction,
  RequestAnimationFrameCallback,
  RequestAnimationFrameDi,
  StartAnimationFunction,
} from '../../src/animation/configUpdate';

class MockAnimationFrame {
  private callbacks: Map<number, RequestAnimationFrameCallback> = new Map();

  private nextId = 1;

  private cancelledFrames: Set<number> = new Set();

  requestAnimationFrame = (callback: RequestAnimationFrameCallback): number => {
    const id = this.nextId++;
    this.callbacks.set(id, callback);
    return id;
  };

  cancelAnimationFrame = (id: number): void => {
    if (this.callbacks.has(id)) {
      this.callbacks.delete(id);
    } else {
      // ... unfortunately this is exactly what the code does in the real implementation,
      // it tries to cancel a frame that never existed.
      // This appears to be a no-op in the real implementation, so it's not a big deal.
      // But still it would be nice for the animationFunction to have control over this.
      // throw new Error(`Attempted to cancel a frame with id ${id} that does not exist.`);
    }
    this.cancelledFrames.add(id);
  };

  async advanceTime(now: number): Promise<void> {
    // We need to create a copy of the callbacks array because the original array is going to be modified while the current callbacks are being executed.
    const currentCallbacks = new Map(this.callbacks);
    // Simulate the passage of time by invoking all callbacks with the given time
    Array.from(currentCallbacks.entries()).forEach(([id, callback]) => {
      Promise.resolve().then(() => {
        this.callbacks.delete(id);
        // Call the callback with the current time
        callback(now);
      });
    });
  }

  clear(): void {
    this.callbacks.clear();
    this.cancelledFrames.clear();
    this.nextId = 1;
  }

  getCallbacksCount() {
    return this.callbacks.size;
  }

  getCancelledFramesCount() {
    return this.cancelledFrames.size;
  }
}

describe('animationFunction', () => {
  describe('with linear easing', () => {
    const mockAnimationFrame = new MockAnimationFrame();
    // this static property addition to a function is wild
    const linearEasing = configEasing('linear');
    let startAnimation: StartAnimationFunction;
    const render = vi.fn();

    beforeEach(() => {
      // Reset the mock animation frame before each test
      mockAnimationFrame.clear();
      render.mockReset();
      const from = { x: 0, y: 0 };
      const to = { x: 100, y: 100 };
      const duration = 1000;

      startAnimation = animationFunction(
        from,
        to,
        linearEasing,
        duration,
        render,
        mockAnimationFrame.requestAnimationFrame,
        mockAnimationFrame.cancelAnimationFrame,
      );
    });

    it('should return function', () => {
      expect(typeof startAnimation).toBe('function');
      expect(startAnimation).toHaveLength(0);
    });

    it('should not call render before animation starts', () => {
      expect(render).not.toHaveBeenCalled();
    });

    it('should not queue any animation frames before start', () => {
      expect(mockAnimationFrame.getCallbacksCount()).toBe(0);
    });

    it('should queue an animation frame after starting', () => {
      startAnimation();
      expect(mockAnimationFrame.getCallbacksCount()).toBe(1);
      expect(render).not.toHaveBeenCalled();
    });

    it('should call render with initial values on first frame, and queue another frame', async () => {
      startAnimation();
      await mockAnimationFrame.advanceTime(16);
      expect(render).toHaveBeenLastCalledWith({ x: 0, y: 0 });
      expect(render).toHaveBeenCalledTimes(1);
      expect(mockAnimationFrame.getCallbacksCount()).toBe(1);
    });

    it('should call render with updated values on subsequent frames', async () => {
      startAnimation();
      // the first frame is required to set the initial state inside the animation function,
      // and also it cannot be at time 0 because the animation function uses a falsy check to see if it had executed before
      // and zero is falsy.
      await mockAnimationFrame.advanceTime(4);
      expect(render).toHaveBeenLastCalledWith({ x: 0, y: 0 });
      expect(render).toHaveBeenCalledTimes(1);

      // Halfway through the animation
      await mockAnimationFrame.advanceTime(500);
      // numbers are not exactly halfway through because the animation did not start at time 0, it started at time 4
      expect(render).toHaveBeenLastCalledWith({ x: 49.6, y: 49.6 });
      expect(render).toHaveBeenCalledTimes(2);
      expect(mockAnimationFrame.getCallbacksCount()).toBe(1);

      // exact end of the animation - we got lucky but this is not guaranteed
      await mockAnimationFrame.advanceTime(1004);
      expect(render).toHaveBeenLastCalledWith({ x: 100, y: 100 });
      expect(render).toHaveBeenCalledTimes(4);
      expect(mockAnimationFrame.getCallbacksCount()).toBe(0);
    });

    it('should call render with updated values on subsequent frames when the last tick is not exactly after the animationDuration', async () => {
      startAnimation();
      // the first frame is required to set the initial state inside the animation function,
      // and also it cannot be at time 0 because the animation function uses a falsy check to see if it had executed before
      // and zero is falsy.
      await mockAnimationFrame.advanceTime(4);
      expect(render).toHaveBeenLastCalledWith({ x: 0, y: 0 });
      expect(render).toHaveBeenCalledTimes(1);

      // we're on a slow device, and we had dropped some frames,
      // so the ending frame is like waaay after the animation duration
      await mockAnimationFrame.advanceTime(2000);
      // the second and third calls are the same, so not quite necessary - we could have just called it once here
      expect(render).toHaveBeenNthCalledWith(2, { x: 100, y: 100 });
      expect(render).toHaveBeenNthCalledWith(3, { x: 100, y: 100 });
      expect(render).toHaveBeenLastCalledWith({ x: 100, y: 100 });
      expect(render).toHaveBeenCalledTimes(3);
      expect(mockAnimationFrame.getCallbacksCount()).toBe(0);
    });

    it('should stop animation when requested', () => {
      const stopAnimation: CancelAnimationFunction = startAnimation();

      expect(mockAnimationFrame.getCallbacksCount()).toBe(1);
      expect(mockAnimationFrame.getCancelledFramesCount()).toBe(0);
      stopAnimation();

      expect(mockAnimationFrame.getCancelledFramesCount()).toBe(1);

      // Ensure that the render was not called after stopping
      mockAnimationFrame.advanceTime(1000);

      expect(render).not.toHaveBeenCalled();
    });
  });

  describe('linear easing with mocked requestAnimationFrame', () => {
    const mockAnimationFrame = new MockAnimationFrame();
    // this static property addition to a function is wild
    const linearEasing = configEasing('linear');
    let startAnimation: StartAnimationFunction,
      requestAnimationFrameMock: MockInstance<RequestAnimationFrameDi>,
      cancelAnimationFrameMock: MockInstance<CancelAnimationFrameDi>;
    const render = vi.fn();

    beforeEach(() => {
      // Reset the mock animation frame before each test
      mockAnimationFrame.clear();
      render.mockReset();
    });

    beforeEach(() => {
      // Reset mocks
      vi.resetAllMocks();
      vi.useFakeTimers({ toFake: ['requestAnimationFrame'] });

      // Create spy functions for requestAnimationFrame and cancelAnimationFrame
      requestAnimationFrameMock = vi.spyOn(window, 'requestAnimationFrame');
      cancelAnimationFrameMock = vi.spyOn(window, 'cancelAnimationFrame');
    });

    afterEach(() => {
      // Clear any pending timeouts
      vi.clearAllTimers();
      vi.useRealTimers();
    });

    it('should return a function that starts and stops animation', () => {
      const from = { x: 0, y: 0 };
      const to = { x: 100, y: 100 };
      const duration = 1000;

      startAnimation = animationFunction(from, to, linearEasing, duration, render);

      expect(typeof startAnimation).toBe('function');

      const stopAnimation = startAnimation();
      expect(typeof stopAnimation).toBe('function');
    });

    it('should use stepperUpdate if easing.isStepper is true', async () => {
      const easing = configEasing('spring');
      const from = { val: '0' };
      const to = { val: '1' };
      const duration = 20;

      startAnimation = animationFunction(from, to, easing, duration, render);

      startAnimation();

      expect(requestAnimationFrameMock).toHaveBeenCalledWith(expect.any(Function));

      vi.advanceTimersToNextFrame();

      // Check if render was called
      expect(render).toHaveBeenCalled();
    });

    it('should use timingUpdate if easing.isStepper is false', () => {
      const easing = configEasing('spring');
      const from = { x: 0, y: 0 };
      const to = { x: 100, y: 100 };
      const duration = 20;

      startAnimation = animationFunction(from, to, easing, duration, render);
      startAnimation();
      vi.advanceTimersToNextFrame();

      expect(requestAnimationFrameMock).toHaveBeenCalled();

      expect(render).toHaveBeenCalled();
    });

    it('should stop animation when requested', () => {
      const from = { x: 0, y: 0 };
      const to = { x: 100, y: 100 };
      const duration = 1000;

      startAnimation = animationFunction(from, to, linearEasing, duration, render);
      const stopAnimation = startAnimation();

      expect(requestAnimationFrameMock).toHaveBeenCalled();
      stopAnimation();

      expect(cancelAnimationFrameMock).toHaveBeenCalled();
    });

    it('should call render with correct values', () => {
      const from = { x: 0, y: 0 };
      const to = { x: 100, y: 100 };
      const duration = 1000;

      startAnimation = animationFunction(from, to, linearEasing, duration, render);

      startAnimation();
      vi.advanceTimersToNextFrame();
      vi.runAllTimers();

      expect(render).toHaveBeenCalledWith({
        x: from.x,
        y: from.y,
      });
    });
  });
});
