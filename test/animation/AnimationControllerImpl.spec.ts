import { describe, it, beforeEach, expect, Mock } from 'vitest';
import { identity } from 'es-toolkit';
import { MockTimeoutController } from './mockTimeoutController';
import { animationControllerImpl } from '../../src/animation/AnimationControllerImpl';
import { CSSTransition, JavascriptAnimation } from '../../src/animation/RechartsAnimation';
import { noop } from '../../src/util/DataUtils';
import { expectLastCalledWith } from '../helper/expectLastCalledWith';

describe('AnimationControllerImpl', () => {
  let timeoutController: MockTimeoutController, animationState: JavascriptAnimation;

  beforeEach(() => {
    timeoutController = new MockTimeoutController({
      timeoutLimit: 1,
    });
    animationState = new JavascriptAnimation({
      animationId: '1',
      animationBegin: 100,
      animationDuration: 200,
      onAnimationStart: noop,
      onAnimationEnd: noop,
      from: 0,
      to: 1,
      easing: identity,
    });
  });

  it('should return stop function', () => {
    const ret = animationControllerImpl(timeoutController, animationState, noop);
    expect(ret).toBeInstanceOf(Function);
  });

  it('should use the timeout controller to progress the animation state', async () => {
    expect(timeoutController.getCallbacksCount()).toBe(0);

    animationControllerImpl(timeoutController, animationState, noop);

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
    animationControllerImpl(timeoutController, animationState, noop);
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
    animationControllerImpl(timeoutController, animationState, noop);
    await timeoutController.triggerNextTimeout(0); // init -> pending
    await timeoutController.triggerNextTimeout(100);
    expect(animationState.getState()).toBe('active');

    /*
     * So the animation had just started, it's going to take 200 time to complete,
     * but the controller should schedule next timeout immediately
     */
    expect(timeoutController.getTimeouts()).toEqual([0]);
  });

  it('should allow starting and then cancelling multiple animations', async () => {
    const time1 = new MockTimeoutController({
      timeoutLimit: 1,
    });
    const time2 = new MockTimeoutController({
      timeoutLimit: 1,
    });
    const animation1 = new JavascriptAnimation({
      animationId: '1',
      animationBegin: 100,
      animationDuration: 200,
      onAnimationStart: noop,
      onAnimationEnd: noop,
      from: 0,
      to: 1,
      easing: identity,
    });
    const spy1: Mock<(now: number) => void> = vi.fn();
    const animation2 = new JavascriptAnimation({
      animationId: '1',
      animationBegin: 100,
      animationDuration: 200,
      onAnimationStart: noop,
      onAnimationEnd: noop,
      from: 0,
      to: 1,
      easing: identity,
    });
    const spy2: Mock<(now: number) => void> = vi.fn();
    const cancel1 = animationControllerImpl(time1, animation1, spy1);
    const cancel2 = animationControllerImpl(time2, animation2, spy2);

    await time1.triggerNextTimeout(0); // init -> pending
    await time2.triggerNextTimeout(0); // init -> pending
    await time1.triggerNextTimeout(100); // pending -> active
    await time2.triggerNextTimeout(100); // pending -> active
    expect(animation1.getState()).toBe('active');
    expect(animation2.getState()).toBe('active');
    expect(spy1).toHaveBeenCalledTimes(1);
    await time1.triggerNextTimeout(150);
    await time2.triggerNextTimeout(150);
    expect(spy1).toHaveBeenCalledTimes(2);
    expect(spy2).toHaveBeenCalledTimes(2);

    cancel1();
    await time1.triggerNextTimeout(200);
    await time2.triggerNextTimeout(200);
    // animation1 should be cancelled, so only animation2 should receive updates
    expect(spy1).toHaveBeenCalledTimes(2);
    expect(spy2).toHaveBeenCalledTimes(3);

    cancel2();
    await time1.triggerNextTimeout(250);
    await time2.triggerNextTimeout(250);
    // both animations should be cancelled, so no more updates
    expect(spy1).toHaveBeenCalledTimes(2);
    expect(spy2).toHaveBeenCalledTimes(3);
  });

  describe('when given JavascriptAnimation', () => {
    it('should return interpolated and eased value for continuous rendering', async () => {
      const easedAnimation: JavascriptAnimation = new JavascriptAnimation({
        animationId: '1',
        animationBegin: 100,
        animationDuration: 200,
        onAnimationStart: noop,
        onAnimationEnd: noop,
        from: 0,
        to: 1,
        easing: x => x * 2,
      });
      const spy: Mock<(now: number) => void> = vi.fn();
      animationControllerImpl(timeoutController, easedAnimation, spy);

      await timeoutController.triggerNextTimeout(0); // init -> pending
      await timeoutController.triggerNextTimeout(100);
      expect(easedAnimation.getState()).toBe('active');
      expect(easedAnimation.getProgress()).toBe(0);
      expect(spy).toHaveBeenCalledTimes(1);
      expectLastCalledWith(spy, 0);

      await timeoutController.triggerNextTimeout(150);
      expect(easedAnimation.getProgress()).toBe(0.25);
      expect(easedAnimation.getInterpolated()).toBe(0.5);
      expect(spy).toHaveBeenCalledTimes(2);
      // spy should receive the interpolated and eased value because the JS engine needs it to render next update
      expectLastCalledWith(spy, 0.5);
    });
  });

  describe('when given CSSTransition', () => {
    it('should return the end style as that is what DOM expects', async () => {
      const easedAnimation: CSSTransition = new CSSTransition({
        animationId: '1',
        animationBegin: 100,
        animationDuration: 200,
        onAnimationStart: noop,
        onAnimationEnd: noop,
        from: 'height: 100px',
        to: 'height: 200px',
        easing: 'ease-in',
      });
      const spy: Mock<(now: string) => void> = vi.fn();
      animationControllerImpl(timeoutController, easedAnimation, spy);

      await timeoutController.triggerNextTimeout(0); // init -> pending
      await timeoutController.triggerNextTimeout(100);
      expect(easedAnimation.getState()).toBe('active');
      expect(easedAnimation.getProgress()).toBe(0);
      expect(spy).toHaveBeenCalledTimes(1);
      expectLastCalledWith(spy, 'height: 200px');

      await timeoutController.triggerNextTimeout(150);
      expect(easedAnimation.getProgress()).toBe(0.25);
      expect(easedAnimation.getInterpolated()).toBe('height: 200px');
      expect(spy).toHaveBeenCalledTimes(2);
      // spy should receive the interpolated and eased value because the JS engine needs it to render next update
      expectLastCalledWith(spy, 'height: 200px');
    });
  });

  describe('interrupting animation', () => {
    it('should cancel timeout when stop is called at the start', async () => {
      const stop = animationControllerImpl(timeoutController, animationState, noop);

      expect(timeoutController.getCallbacksCount()).toBe(1);
      stop();
      expect(timeoutController.getCallbacksCount()).toBe(0);
    });

    it('should cancel timeout when stop is called while animation is active', async () => {
      const stop = animationControllerImpl(timeoutController, animationState, noop);

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
      animationControllerImpl(timeoutController, animationState, spy);

      await timeoutController.triggerNextTimeout(0); // init -> pending
      expect(animationState.getState()).toBe('pending');
      expect(spy).toHaveBeenCalledTimes(0);

      await timeoutController.triggerNextTimeout(100); // pending -> active
      expect(animationState.getState()).toBe('active');
      expect(spy).toHaveBeenCalledTimes(1);
      expectLastCalledWith(spy, 0);

      await timeoutController.triggerNextTimeout(150);
      expect(spy).toHaveBeenCalledTimes(2);
      expectLastCalledWith(spy, 0.25);

      await timeoutController.triggerNextTimeout(200);
      expect(spy).toHaveBeenCalledTimes(3);
      expectLastCalledWith(spy, 0.5);

      await timeoutController.triggerNextTimeout(300);
      expect(spy).toHaveBeenCalledTimes(4);
      expectLastCalledWith(spy, 1);
      expect(animationState.getState()).toBe('completed');

      // animation is now complete, no more updates
      await timeoutController.triggerNextTimeout(400);
      expect(spy).toHaveBeenCalledTimes(4);
    });
  });
});
