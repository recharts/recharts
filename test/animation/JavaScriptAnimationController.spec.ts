import { describe, it, beforeEach, expect, Mock } from 'vitest';
import { MockTimeoutController } from './mockTimeoutController';
import { JavaScriptAnimationController } from '../../src/animation/JavaScriptAnimationController';
import { RechartsAnimation, JavascriptAnimation } from '../../src/animation/RechartsAnimation';
import { noop } from '../../src/util/DataUtils';
import { AnimationController } from '../../src/animation/AnimationController';

describe('JavaScriptAnimationController', () => {
  let timeoutController: MockTimeoutController,
    animationController: AnimationController<number>,
    animationState: RechartsAnimation<number>;

  beforeEach(() => {
    timeoutController = new MockTimeoutController({
      timeoutLimit: 1,
    });
    animationController = new JavaScriptAnimationController();
    animationState = new JavascriptAnimation({
      animationBegin: 100,
      animationDuration: 200,
      onAnimationStart: noop,
      onAnimationEnd: noop,
      from: 0,
      to: 1,
    });
  });

  it('should return stop function', () => {
    const ret = animationController.start(timeoutController, animationState, noop);
    expect(ret).toBeInstanceOf(Function);
  });

  it('should use the timeout controller to progress the animation state', async () => {
    expect(timeoutController.getCallbacksCount()).toBe(0);

    animationController.start(timeoutController, animationState, noop);

    // first we expect it to start a first timeout to start the animation
    // expect(timeoutController.getCallbacksCount()).toBe(1);
    // the animation is not actually started yet, so => init
    expect(animationState.getState()).toBe('init');

    // allow the time to move forward
    await timeoutController.triggerNextTimeout(50);

    // animation state is now one step further
    expect(animationState.getState()).toBe('pending');

    // now we moved 50 time (remember the time is absolute units, not relative), but animationBegin is 100! so still pending
    await timeoutController.triggerNextTimeout(100);
    expect(animationState.getState()).toBe('pending');

    await timeoutController.triggerNextTimeout(150);
    expect(animationState.getState()).toBe('active');

    await timeoutController.triggerNextTimeout(300);
    expect(animationState.getState()).toBe('active');
    // duration=200, time now=300, time animation started=150, 150/200 has elapsed, that's 75% progress
    expect(animationState.getProgress()).toBe(0.75);

    await timeoutController.triggerNextTimeout(400);
    // We expect the JavaScript controller to automatically complete the animation
    // once the time had elapsed.
    expect(animationState.getState()).toBe('completed');

    // there should be no more timeouts scheduled at this time
    expect(timeoutController.getCallbacksCount()).toBe(0);
  });

  it('should set long timeouts while animation is paused', async () => {
    animationController.start(timeoutController, animationState, noop);
    await timeoutController.triggerNextTimeout(0); // init -> pending
    // The animation is now paused for duration=100, so the controller can afford to set longer timeout
    expect(timeoutController.getTimeouts()).toEqual([100]);
  });

  it('should set the minimum timeouts while animation is active', async () => {
    /*
     * This is a specialty of the JavaScript controller and the reason why is it separate from CSS controller.
     * Because JS animations must trigger a DOM render, the controller is expected
     * to use the smallest possible timeout so that it can get notified as soon as possible when the animation state changes, and trigger a render.
     */
    animationController.start(timeoutController, animationState, noop);
    await timeoutController.triggerNextTimeout(0); // init -> pending
    await timeoutController.triggerNextTimeout(100);
    expect(animationState.getState()).toBe('active');

    /*
     * So the animation had just started, it's going to take 200 time to complete,
     * but the controller should schedule next timeout immediately
     */
    expect(timeoutController.getTimeouts()).toEqual([0]);
  });

  describe.todo('easing');

  describe('interrupting animation', () => {
    it('should cancel timeout when stop is called at the start', async () => {
      const stop = animationController.start(timeoutController, animationState, noop);

      expect(timeoutController.getCallbacksCount()).toBe(1);
      stop();
      expect(timeoutController.getCallbacksCount()).toBe(0);
    });

    it('should cancel timeout when stop is called while animation is active', async () => {
      const stop = animationController.start(timeoutController, animationState, noop);

      expect(timeoutController.getCallbacksCount()).toBe(1);

      await timeoutController.triggerNextTimeout(0);
      await timeoutController.triggerNextTimeout(1000);
      expect(timeoutController.getCallbacksCount()).toBe(1);
      expect(animationState.getState()).toBe('active');
      stop();
      expect(timeoutController.getCallbacksCount()).toBe(0);
    });
  });

  describe('subscribing for updates', () => {
    it('should call subscribe with the same number as the animationState.progress', async () => {
      const spy: Mock<(now: number) => void> = vi.fn();
      animationController.start(timeoutController, animationState, spy);

      await timeoutController.triggerNextTimeout(0); // init -> pending
      expect(animationState.getState()).toBe('pending');
      expect(spy).toHaveBeenCalledTimes(0);

      await timeoutController.triggerNextTimeout(100); // pending -> active
      expect(animationState.getState()).toBe('active');
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenLastCalledWith(0);

      await timeoutController.triggerNextTimeout(150);
      expect(spy).toHaveBeenCalledTimes(2);
      expect(spy).toHaveBeenLastCalledWith(0.25);

      await timeoutController.triggerNextTimeout(200);
      expect(spy).toHaveBeenCalledTimes(3);
      expect(spy).toHaveBeenLastCalledWith(0.5);

      await timeoutController.triggerNextTimeout(300);
      expect(spy).toHaveBeenCalledTimes(4);
      expect(spy).toHaveBeenLastCalledWith(1);
      expect(animationState.getState()).toBe('completed');

      // animation is now complete, no more updates
      await timeoutController.triggerNextTimeout(400);
      expect(spy).toHaveBeenCalledTimes(4);
    });
  });
});
