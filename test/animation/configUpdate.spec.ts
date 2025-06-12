import { describe, it, beforeEach, expect, vi, MockInstance } from 'vitest';
import { configEasing } from '../../src/animation/easing';
import animationFunction, {
  CancelAnimationFrameDi,
  CancelAnimationFunction,
  RequestAnimationFrameDi,
  StartAnimationFunction,
} from '../../src/animation/configUpdate';
import { MockTimeoutController } from './mockTimeoutController';
import { RequestAnimationFrameTimeoutController } from '../../src/animation/timeoutController';

describe('animationFunction', () => {
  describe('with linear easing', () => {
    const mockAnimationFrame = new MockTimeoutController();
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

      startAnimation = animationFunction(from, to, linearEasing, duration, render, mockAnimationFrame);
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
      await mockAnimationFrame.triggerNextTimeout(16);
      expect(render).toHaveBeenLastCalledWith({ x: 0, y: 0 });
      expect(render).toHaveBeenCalledTimes(1);
      expect(mockAnimationFrame.getCallbacksCount()).toBe(1);
    });

    it('should call render with updated values on subsequent frames', async () => {
      startAnimation();
      // the first frame is required to set the initial state inside the animation function,
      // and also it cannot be at time 0 because the animation function uses a falsy check to see if it had executed before
      // and zero is falsy.
      await mockAnimationFrame.triggerNextTimeout(4);
      expect(render).toHaveBeenLastCalledWith({ x: 0, y: 0 });
      expect(render).toHaveBeenCalledTimes(1);

      // Halfway through the animation
      await mockAnimationFrame.triggerNextTimeout(500);
      // numbers are not exactly halfway through because the animation did not start at time 0, it started at time 4
      expect(render).toHaveBeenLastCalledWith({ x: 49.6, y: 49.6 });
      expect(render).toHaveBeenCalledTimes(2);
      expect(mockAnimationFrame.getCallbacksCount()).toBe(1);

      // exact end of the animation - we got lucky but this is not guaranteed
      await mockAnimationFrame.triggerNextTimeout(1004);
      expect(render).toHaveBeenLastCalledWith({ x: 100, y: 100 });
      expect(render).toHaveBeenCalledTimes(4);
      expect(mockAnimationFrame.getCallbacksCount()).toBe(0);
    });

    it('should call render with updated values on subsequent frames when the last tick is not exactly after the animationDuration', async () => {
      startAnimation();
      // the first frame is required to set the initial state inside the animation function,
      // and also it cannot be at time 0 because the animation function uses a falsy check to see if it had executed before
      // and zero is falsy.
      await mockAnimationFrame.triggerNextTimeout(4);
      expect(render).toHaveBeenLastCalledWith({ x: 0, y: 0 });
      expect(render).toHaveBeenCalledTimes(1);

      // we're on a slow device, and we had dropped some frames,
      // so the ending frame is like waaay after the animation duration
      await mockAnimationFrame.triggerNextTimeout(2000);
      // the second and third calls are the same, so not quite necessary - we could have just called it once here
      expect(render).toHaveBeenNthCalledWith(2, { x: 100, y: 100 });
      expect(render).toHaveBeenNthCalledWith(3, { x: 100, y: 100 });
      expect(render).toHaveBeenLastCalledWith({ x: 100, y: 100 });
      expect(render).toHaveBeenCalledTimes(3);
      expect(mockAnimationFrame.getCallbacksCount()).toBe(0);
    });

    it('should stop animation when requested', async () => {
      const stopAnimation: CancelAnimationFunction = startAnimation();

      expect(mockAnimationFrame.getCallbacksCount()).toBe(1);
      expect(mockAnimationFrame.getCancelledFramesCount()).toBe(0);
      stopAnimation();

      expect(mockAnimationFrame.getCancelledFramesCount()).toBe(1);
      expect(render).not.toHaveBeenCalled();
      expect(mockAnimationFrame.getCallbacksCount()).toBe(0);
    });
  });

  describe('with spring easing', () => {
    const mockAnimationFrame = new MockTimeoutController();
    const springEasing = configEasing('spring');
    let startAnimation: StartAnimationFunction;
    const render = vi.fn();

    beforeEach(() => {
      // Reset the mock animation frame before each test
      mockAnimationFrame.clear();
      render.mockReset();
      const from = { x: 0, y: 0 };
      const to = { x: 100, y: 100 };
      const duration = 1000;

      startAnimation = animationFunction(from, to, springEasing, duration, render, mockAnimationFrame);
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
      await mockAnimationFrame.triggerNextTimeout(16);
      expect(render).toHaveBeenLastCalledWith({ x: 0, y: 0 });
      expect(render).toHaveBeenCalledTimes(1);
      expect(mockAnimationFrame.getCallbacksCount()).toBe(1);
    });

    it('should call render with updated values on subsequent frames', async () => {
      startAnimation();
      // the first frame is required to set the initial state inside the animation function,
      // and also it cannot be at time 0 because the animation function uses a falsy check to see if it had executed before
      // and zero is falsy.
      await mockAnimationFrame.triggerNextTimeout(4);
      expect(render).toHaveBeenLastCalledWith({ x: 0, y: 0 });
      expect(render).toHaveBeenCalledTimes(1);

      // Halfway through the animation
      await mockAnimationFrame.triggerNextTimeout(500);

      // numbers are not exactly halfway through because the animation did not start at time 0, it started at time 4
      expect(render).toHaveBeenLastCalledWith({
        x: 106.01478200678056,
        y: 106.01478200678056,
      });
      expect(render).toHaveBeenCalledTimes(2);
      expect(mockAnimationFrame.getCallbacksCount()).toBe(1);
      // exact end of the animation - we got lucky but this is not guaranteed
      await mockAnimationFrame.triggerNextTimeout(1004);
      expect(render).toHaveBeenLastCalledWith({
        x: 103.8629546018778,
        y: 103.8629546018778,
      });
      expect(render).toHaveBeenCalledTimes(3);
      // okay the animation continues beyond the duration?
      expect(mockAnimationFrame.getCallbacksCount()).toBe(1);

      await mockAnimationFrame.triggerNextTimeout(2000);
      expect(render).toHaveBeenLastCalledWith({
        x: 99.86220182838869,
        y: 99.86220182838869,
      });
      expect(render).toHaveBeenCalledTimes(4);
      expect(mockAnimationFrame.getCallbacksCount()).toBe(1);

      // and it continues even further

      await mockAnimationFrame.triggerNextTimeout(3000);
      expect(render).toHaveBeenLastCalledWith({
        x: 100.00438658948147,
        y: 100.00438658948147,
      });
      expect(render).toHaveBeenCalledTimes(5);
      expect(mockAnimationFrame.getCallbacksCount()).toBe(1);

      // on and on

      await mockAnimationFrame.triggerNextTimeout(4000);
      expect(render).toHaveBeenLastCalledWith({
        x: 99.9998780350853,
        y: 99.9998780350853,
      });
      expect(render).toHaveBeenCalledTimes(6);
      expect(mockAnimationFrame.getCallbacksCount()).toBe(1);

      // when does this end?

      await mockAnimationFrame.triggerNextTimeout(5000);

      expect(render).toHaveBeenLastCalledWith({
        x: 100,
        y: 100,
      });
      expect(render).toHaveBeenCalledTimes(7);
      // Done ... animation that had duration of 1000ms took 5000ms to complete, that doesn't sound right
      // Actually. It looks like the duration is not respected at all, the animation is just always 5000ms long.
      expect(mockAnimationFrame.getCallbacksCount()).toBe(0);
    });

    it('should call render with updated values on subsequent frames when the last tick is not exactly after the animationDuration', async () => {
      startAnimation();
      // the first frame is required to set the initial state inside the animation function,
      // and also it cannot be at time 0 because the animation function uses a falsy check to see if it had executed before
      // and zero is falsy.
      await mockAnimationFrame.triggerNextTimeout(4);
      expect(render).toHaveBeenLastCalledWith({ x: 0, y: 0 });
      expect(render).toHaveBeenCalledTimes(1);

      // we're on a slow device, and we had dropped some frames,
      // so the ending frame is like waaay after the animation duration
      await mockAnimationFrame.triggerNextTimeout(2000);

      expect(render).toHaveBeenNthCalledWith(2, {
        x: 99.86165969099825,
        y: 99.86165969099825,
      });
      expect(render).toHaveBeenCalledTimes(2);
      expect(mockAnimationFrame.getCallbacksCount()).toBe(1);

      // okay, so the animation continues even after the duration
      // this is the same 5000ms animation that we had before, so now let's overshoot it even more
      await mockAnimationFrame.triggerNextTimeout(8000);
      expect(render).toHaveBeenNthCalledWith(3, {
        x: 100,
        y: 100,
      });
      expect(render).toHaveBeenCalledTimes(3);
      expect(mockAnimationFrame.getCallbacksCount()).toBe(0);
    });

    it('should stop animation when requested', async () => {
      const stopAnimation: CancelAnimationFunction = startAnimation();

      expect(mockAnimationFrame.getCallbacksCount()).toBe(1);
      expect(mockAnimationFrame.getCancelledFramesCount()).toBe(0);
      stopAnimation();

      // Ensure that the render was not called after stopping
      expect(render).not.toHaveBeenCalled();
      expect(mockAnimationFrame.getCancelledFramesCount()).toBe(1);
      expect(mockAnimationFrame.getCallbacksCount()).toBe(0);
    });
  });

  describe('linear easing with mocked requestAnimationFrame', () => {
    const realAnimationFrame = new RequestAnimationFrameTimeoutController();
    // this static property addition to a function is wild
    const linearEasing = configEasing('linear');
    let startAnimation: StartAnimationFunction,
      requestAnimationFrameMock: MockInstance<RequestAnimationFrameDi>,
      cancelAnimationFrameMock: MockInstance<CancelAnimationFrameDi>;
    const render = vi.fn();

    beforeEach(() => {
      render.mockReset();
      // Reset mocks
      vi.resetAllMocks();
      vi.useFakeTimers();

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

      startAnimation = animationFunction(from, to, linearEasing, duration, render, realAnimationFrame);

      expect(typeof startAnimation).toBe('function');

      const stopAnimation = startAnimation();
      expect(typeof stopAnimation).toBe('function');
    });

    it('should use stepperUpdate if easing.isStepper is true', async () => {
      const easing = configEasing('spring');
      const from = { val: '0' };
      const to = { val: '1' };
      const duration = 20;

      startAnimation = animationFunction(from, to, easing, duration, render, realAnimationFrame);

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

      startAnimation = animationFunction(from, to, easing, duration, render, realAnimationFrame);
      startAnimation();
      vi.advanceTimersToNextFrame();

      expect(requestAnimationFrameMock).toHaveBeenCalled();

      expect(render).toHaveBeenCalled();
    });

    it('should stop animation when requested', () => {
      const from = { x: 0, y: 0 };
      const to = { x: 100, y: 100 };
      const duration = 1000;

      startAnimation = animationFunction(from, to, linearEasing, duration, render, realAnimationFrame);
      const stopAnimation = startAnimation();

      expect(requestAnimationFrameMock).toHaveBeenCalled();
      stopAnimation();

      expect(cancelAnimationFrameMock).toHaveBeenCalled();
    });

    it('should call render with correct values', () => {
      const from = { x: 0, y: 0 };
      const to = { x: 100, y: 100 };
      const duration = 1000;

      startAnimation = animationFunction(from, to, linearEasing, duration, render, realAnimationFrame);

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
