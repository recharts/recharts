import { describe, expect, it } from 'vitest';
import { identity } from 'es-toolkit';
import { CSSTransitionAnimation, JavascriptAnimation } from '../../src';
import { noop } from '../../src/util/DataUtils';
import { expectLastCalledWith } from '../helper/expectLastCalledWith';

describe('RechartsAnimation state machine', () => {
  it('should start in "init" state and call onAnimationStart immediately', () => {
    const spy = vi.fn();
    const a = new JavascriptAnimation({
      animationId: 'animation1',
      onAnimationStart: spy,
      onAnimationEnd: noop,
      animationDuration: 200,
      animationBegin: 0,
      from: 0,
      to: 1,
      easing: identity,
    });
    expect(a.getState()).toBe('init');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should transition to "pending" after the first tick, and call onAnimationStart while doing so, and not call it second time after active', () => {
    const spy = vi.fn();
    const a = new JavascriptAnimation({
      animationId: 'animation1',
      onAnimationStart: spy,
      onAnimationEnd: noop,
      animationDuration: 200,
      animationBegin: 20,
      from: 0,
      to: 1,
      easing: identity,
    });
    expect(spy).toHaveBeenCalledTimes(1);
    a.tick(10); // this becomes the starting time
    expect(a.getState()).toBe('pending');
    expect(spy).toHaveBeenCalledTimes(1);
    a.tick(30); // this must be larger than "starting time + animationBegin"
    expect(a.getState()).toBe('active');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should not throw an error when onAnimationStart or onAnimationEnd are not defined', () => {
    const a = new JavascriptAnimation({
      animationId: 'animation1',
      onAnimationStart: undefined,
      onAnimationEnd: undefined,
      animationDuration: 200,
      animationBegin: 0,
      from: 0,
      to: 1,
      easing: identity,
    });
    a.tick(0);
    a.tick(0);
    a.complete();
    expect(a.getState()).toBe('completed');
  });

  it('should return progress = 0 when init and when pending', () => {
    const a = new JavascriptAnimation({
      animationId: 'animation1',
      onAnimationStart: noop,
      onAnimationEnd: noop,
      animationDuration: 200,
      animationBegin: 0,
      from: 0,
      to: 1,
      easing: identity,
    });
    expect(a.getProgress()).toBe(0);
    a.tick(0);
    expect(a.getProgress()).toBe(0);
  });

  it('should transition to "active" after the second tick', () => {
    const a = new JavascriptAnimation({
      animationId: 'animation1',
      onAnimationStart: noop,
      onAnimationEnd: noop,
      animationDuration: 200,
      animationBegin: 0,
      from: 0,
      to: 1,
      easing: identity,
    });
    a.tick(0);
    a.tick(0);
    expect(a.getState()).toBe('active');
  });

  it('should handle transition to "completed" state and call onAnimationEnd', () => {
    const spy = vi.fn();
    const a = new JavascriptAnimation({
      animationId: 'animation1',
      onAnimationStart: undefined,
      onAnimationEnd: spy,
      animationDuration: 200,
      animationBegin: 0,
      from: 0,
      to: 1,
      easing: identity,
    });
    a.tick(0);
    a.tick(0);
    expect(a.getState()).toBe('active');
    expect(spy).toHaveBeenCalledTimes(0);
    a.complete();
    expect(a.getState()).toBe('completed');
    expect(spy).toHaveBeenCalledTimes(1);
    expect(a.getProgress()).toBe(1);
  });

  it('should wait for [animationBegin] time before progressing from pending to active', () => {
    const spy = vi.fn();
    const a = new JavascriptAnimation({
      animationId: 'animation1',
      onAnimationStart: spy,
      onAnimationEnd: noop,
      animationDuration: 200,
      animationBegin: 100,
      from: 0,
      to: 1,
      easing: identity,
    });

    a.tick(10); // init -> pending at time t = 10
    expect(spy).toHaveBeenCalledTimes(1); // onAnimationStart should be called before animationBegin pause
    expect(a.getState()).toBe('pending');
    a.tick(20);
    expect(a.getState()).toBe('pending'); // still pending, because animationBegin time has not passed
    a.tick(100);
    // still pending, because animationBegin time has not passed!
    // Remember, the initial time for when animationBegin started ticking was t = 10, so it should transition to active at t = 110
    expect(a.getState()).toBe('pending');
    a.tick(110);
    expect(a.getState()).toBe('active'); // now it should transition to active, because animationBegin time has passed
  });

  it('should progress when ticks happen in large chunks instead of every 4 ms', () => {
    /*
     * This allows us to have one long setTimeout and still have the animation behave deterministic.
     * setTimeout is likely to overshoot so the animation state must be robust
     */

    const spy = vi.fn();
    const a = new JavascriptAnimation({
      animationId: 'animation1',
      onAnimationStart: spy,
      onAnimationEnd: noop,
      animationDuration: 200,
      animationBegin: 100,
      from: 0,
      to: 1,
      easing: identity,
    });

    a.tick(10); // init -> pending at time t = 10
    expect(spy).toHaveBeenCalledTimes(1); // onAnimationStart should be called before animationBegin pause
    expect(a.getState()).toBe('pending');
    // we waited way longer than animationBegin + animationDuration - but there should be no skipping!
    a.tick(2000);
    expect(a.getState()).toBe('active');
    // no skipping!
    expect(a.getProgress()).toBe(0);
    a.tick(4000);
    // okay now go straight to the end then. the end must be clipped at 1
    expect(a.getProgress()).toBe(1);
  });

  it('should no longer update progress after complete', () => {
    const a = new JavascriptAnimation({
      animationId: 'animation1',
      onAnimationStart: noop,
      onAnimationEnd: noop,
      animationDuration: 200,
      animationBegin: 0,
      from: 0,
      to: 1,
      easing: identity,
    });
    a.tick(0);
    a.tick(0);
    expect(a.getProgress()).toBe(0);
    a.tick(200);
    expect(a.getProgress()).toBe(1);
    expect(a.getState()).toBe('active');
    a.complete();
    expect(a.getProgress()).toBe(1);
    a.tick(100);
    expect(a.getProgress()).toBe(1);
    a.tick(0);
    expect(a.getProgress()).toBe(1);
    expect(a.getState()).toBe('completed');
  });

  describe('progress tracking when animationBegin = 0', () => {
    let a: JavascriptAnimation;
    beforeEach(() => {
      a = new JavascriptAnimation({
        animationId: 'animation1',
        onAnimationStart: noop,
        onAnimationEnd: noop,
        animationDuration: 200,
        animationBegin: 0,
        from: 0,
        to: 1,
        easing: identity,
      });
      a.tick(0); // pending
      a.tick(0); // active
    });

    it('should start with progress = 0', () => {
      expect(a.getProgress()).toBe(0);
    });

    it('should set progress based on the current time passed to "tick"', () => {
      a.tick(50);
      // 50 time has passed from the animationDuration of 200 therefore the progress is 25%
      expect(a.getProgress()).toBe(0.25);

      a.tick(100);
      // now, 100 time had passed so the current progress is 100%. The time is current time, is not additive!
      expect(a.getProgress()).toBe(0.5);

      a.tick(50);
      // again, this is current time - so the animation is allowed to progress backwards! not additive
      expect(a.getProgress()).toBe(0.25);

      a.tick(400);
      // progress is not allowed to go out of bounds! Use easing function for that
      expect(a.getProgress()).toBe(1);

      a.tick(0);
      // also it's allowed to reset to zero but not lower than that
      expect(a.getProgress()).toBe(0);
    });
  });

  describe('progress tracking when animationBegin > 0', () => {
    let a: JavascriptAnimation;
    beforeEach(() => {
      a = new JavascriptAnimation({
        animationId: 'animation1',
        onAnimationStart: noop,
        onAnimationEnd: noop,
        animationDuration: 200,
        animationBegin: 500,
        from: 0,
        to: 1,
        easing: identity,
      });
      a.tick(100); // pending
      a.tick(1000); // active
    });

    it('should start with progress = 0 even though the current time = 1000', () => {
      expect(a.getProgress()).toBe(0);
    });

    it('should set progress based on the current time passed to "tick"', () => {
      a.tick(50);
      // 50 time is way in the past (remember it started at 1000) so this should clamp to 0
      expect(a.getProgress()).toBe(0);

      a.tick(1100);
      // now, 100 time had passed so the current progress is 50%
      expect(a.getProgress()).toBe(0.5);

      a.tick(1050);
      // we can go to the past
      expect(a.getProgress()).toBe(0.25);

      a.tick(4000);
      // progress is not allowed to go out of bounds, so it cannot be greater than 1
      expect(a.getProgress()).toBe(1);
      // still active! even after overshooting the state should not change. You need to call .complete() explicitly
      expect(a.getState()).toBe('active');

      a.tick(0);
      // also it's allowed to reset to zero
      expect(a.getProgress()).toBe(0);
    });
  });

  it('should allow animationBegin to be greater than animationDuration because "begin" is a pause before the actual animation', () => {
    expect(() => {
      return new JavascriptAnimation({
        animationId: 'animation1',
        onAnimationStart: noop,
        onAnimationEnd: noop,
        animationDuration: 200,
        animationBegin: 300,
        from: 0,
        to: 1,
        easing: identity,
      });
    }).not.toThrow();
  });

  it('should handle multiple calls to "tick" with the same time value correctly', () => {
    const a = new JavascriptAnimation({
      animationId: 'animation1',
      onAnimationStart: noop,
      onAnimationEnd: noop,
      animationDuration: 200,
      animationBegin: 100,
      from: 0,
      to: 1,
      easing: identity,
    });

    a.tick(10);
    expect(a.getState()).toBe('pending');

    // Simulate multiple calls to tick with the same time value
    a.tick(200);
    a.tick(200);

    expect(a.getState()).toBe('active');
  });

  it('should allow to complete straight away and skip the other states, and not call onAnimationEnd', () => {
    const startSpy = vi.fn();
    const endSpy = vi.fn();
    const a = new JavascriptAnimation({
      animationId: 'animation1',
      onAnimationStart: startSpy,
      onAnimationEnd: endSpy,
      animationDuration: 200,
      animationBegin: 0,
      from: 0,
      to: 1,
      easing: identity,
    });
    a.complete();
    expect(a.getState()).toBe('completed');
    expect(a.getProgress()).toBe(1);
    expect(startSpy).toHaveBeenCalledTimes(1);
    expect(endSpy).not.toHaveBeenCalled();
  });

  it('should return "begin" time if the tick just activated it now', () => {
    const a = new JavascriptAnimation({
      animationId: 'animation1',
      onAnimationStart: noop,
      onAnimationEnd: noop,
      animationDuration: 200,
      animationBegin: 300,
      from: 0,
      to: 1,
      easing: identity,
    });
    expect(a.tick(10)).toEqual(300);
    expect(a.getState()).toBe('pending');
  });

  describe('JavascriptAnimation', () => {
    it('should return starting and ending values', () => {
      const a = new JavascriptAnimation({
        animationId: 'animation1',
        onAnimationStart: noop,
        onAnimationEnd: noop,
        animationDuration: 500,
        animationBegin: 300,
        from: 2,
        to: 5,
        easing: identity,
      });
      expect(a.getFrom()).toBe(2);
      expect(a.getTo()).toBe(5);
    });

    it('should return the remaining time from tick() function', () => {
      const a = new JavascriptAnimation({
        animationId: 'animation1',
        onAnimationStart: noop,
        onAnimationEnd: noop,
        animationDuration: 200,
        animationBegin: 300,
        from: 0,
        to: 1,
        easing: identity,
      });
      // first tick is just state switch, so the next delay will be exactly equal to 'animationBegin'
      expect(a.tick(10)).toEqual(300);

      // the animation started at t=10, the time now is t=20, begin=300, so we still have 290 time left
      expect(a.tick(20)).toBe(290);

      /*
       * Okay our timeout got a little bit delayed = the time is now 350, the beginning delay is over.
       * We waited longer than necessary but that's fine.
       * The animation should just start and not be delayed any further.
       * The tick function is now telling us the transition is in progress,
       * and we should report back immediately for next render because this is JS animation and needs frequent renders.
       */
      expect(a.tick(350)).toBe(0);

      // now we're getting into the transition itself
      expect(a.tick(360)).toBe(0);
      // ticking through it
      expect(a.tick(400)).toBe(0);
      // again overshoot - should clamp to zero
      expect(a.tick(550)).toBe(0);

      // more ticking just produces more zeroes
      expect(a.tick(600)).toBe(0);

      a.complete();
      // nothing interesting is going to happen to this animation anymore
      expect(a.tick(700)).toBe(0);
    });

    it('should return 0 if the tick landed exactly at the start of animation', () => {
      const a = new JavascriptAnimation({
        animationId: 'animation1',
        onAnimationStart: noop,
        onAnimationEnd: noop,
        animationDuration: 500,
        animationBegin: 300,
        from: 0,
        to: 1,
        easing: identity,
      });

      expect(a.tick(100)).toEqual(300); // init -> pending
      // 200 remaining from 'begin' delay
      expect(a.tick(200)).toBe(200);
      // 1 time unit remaining
      expect(a.tick(399)).toBe(1);
      expect(a.getState()).toBe('pending');
      // the delay had completed at the exact time of the tick, what a coincidence!
      // the animation should just start and not be delayed further,
      // so we have 0 because this is JS animation and it should render as frequently as possible
      expect(a.tick(400)).toBe(0);
      expect(a.getState()).toBe('active');
    });

    it('should return animation value including easing', () => {
      const easing = (_x: number) => 7;
      const spy = vi.fn(easing);
      const a = new JavascriptAnimation({
        animationId: 'animation1',
        onAnimationStart: noop,
        onAnimationEnd: noop,
        animationDuration: 500,
        animationBegin: 300,
        from: 0,
        to: 1,
        easing: spy,
      });
      a.tick(10);
      a.tick(400);
      expect(a.getState()).toBe('active');
      a.tick(500);

      /*
       * Okay so at this point of time, the animation progress is 20%
       * which is what getProgress() is showing us.
       * The easing function however can stretch or shrink it,
       * which is what we are seeing from getInterpolated()
       */
      expect(a.getProgress()).toBe(0.2);
      expect(a.getInterpolated()).toBe(7);

      expect(spy).toHaveBeenCalledTimes(1);
      expectLastCalledWith(spy, 0.2);
    });

    it('should return animation value including easing for values other than 0, 1', () => {
      const easing = (x: number) => x * 2;
      const easingSpy = vi.fn(easing);
      const a = new JavascriptAnimation({
        animationId: 'animation1',
        onAnimationStart: noop,
        onAnimationEnd: noop,
        animationDuration: 500,
        animationBegin: 300,
        from: 10,
        to: 110,
        easing: easingSpy,
      });
      a.tick(10);
      a.tick(400);
      expect(a.getState()).toBe('active');
      a.tick(500);

      /*
       * Okay so at this point of time, the animation progress is 20%
       * which is what getProgress() is showing us.
       * The easing function however can stretch or shrink it,
       * which is what we are seeing from getInterpolated()
       */
      expect(a.getProgress()).toBe(0.2);
      /*
       * So what's going on here.
       * from 10 to 110 is 100 steps, 20% of the progress means progress = 0.2, all good so far.
       * Now it depends on the order on which you do things.
       *
       * If you do easing -> interpolate:
       * progress = 0.2
       * easing * progress = 0.2 * 2 = 0.4
       * interpolate = 10 (start) + 0.4 * 100 = 50
       *
       * If you do interpolate -> easing:
       * progress = 0.2
       * interpolate = 10 + 0.2 * 100 = 30
       * easing * interpolate = 30 * 2 = 60
       *
       * So you end up with different numbers.
       *
       * If you ask AI it will tell you that you should do easing -> interpolate, always.
       * However, we have ton of tests showing that Rechart has always done interpolate -> easing
       * so let's keep it that way even though it's technically incorrect.
       * If someone complains we can save it for the next major version.
       */
      expect(a.getInterpolated()).toBe(60);

      expect(easingSpy).toHaveBeenCalledTimes(1);
      expectLastCalledWith(easingSpy, 30);
    });
  });

  describe('CSSTransition', () => {
    it('should return starting and ending values', () => {
      const a = new CSSTransitionAnimation({
        animationId: 'animation1',
        onAnimationStart: noop,
        onAnimationEnd: noop,
        animationDuration: 500,
        animationBegin: 300,
        from: 'arbitrary values can go here',
        to: 'because this class does not handle the interpolation',
        easing: 'ease-in',
      });
      expect(a.getFrom()).toBe('arbitrary values can go here');
      expect(a.getTo()).toBe('because this class does not handle the interpolation');
    });

    it('should return the remaining time from tick() function', () => {
      const a = new CSSTransitionAnimation({
        animationId: 'animation1',
        onAnimationStart: noop,
        onAnimationEnd: noop,
        animationDuration: 200,
        animationBegin: 300,
        from: 'scale(1)',
        to: 'scale(7)',
        easing: 'ease-in',
      });
      // first tick is just state switch, so the next delay will be exactly equal to 'animationBegin'
      expect(a.tick(10)).toEqual(300);

      // the animation started at t=10, the time now is t=20, begin=300, so we still have 290 time left
      expect(a.tick(20)).toBe(290);

      /*
       * Okay our timeout got a little bit delayed = the time is now 350, the beginning delay is over.
       * We waited longer than necessary but that's fine.
       * The animation should just start and not be delayed any further.
       * The tick function is now telling us the transition is in progress,
       * and will take 200 time to complete (= animationDuration from the config)
       */
      expect(a.tick(350)).toBe(200);

      // now we're getting into the transition itself
      expect(a.tick(360)).toBe(190);
      // ticking through it
      expect(a.tick(400)).toBe(150);
      // again overshoot - should clamp to zero
      expect(a.tick(550)).toBe(0);

      // more ticking just produces more zeroes
      expect(a.tick(600)).toBe(0);

      a.complete();
      // nothing interesting is going to happen to this animation anymore
      expect(a.tick(700)).toBe(0);
    });

    it('should return remaining time of next step if the tick landed exactly at the start of animation', () => {
      const a = new CSSTransitionAnimation({
        animationId: 'animation1',
        onAnimationStart: noop,
        onAnimationEnd: noop,
        animationDuration: 500,
        animationBegin: 300,
        from: 'scale(1)',
        to: 'scale(7)',
        easing: 'ease-in',
      });

      expect(a.tick(100)).toEqual(300); // init -> pending
      // 200 remaining from 'begin' delay
      expect(a.tick(200)).toBe(200);
      // 1 time unit remaining
      expect(a.tick(399)).toBe(1);
      expect(a.getState()).toBe('pending');
      // the delay had completed at the exact time of the tick, what a coincidence!
      // the animation should just start and not be delayed further,
      // so we have the full duration remaining
      expect(a.tick(400)).toBe(500);
      expect(a.getState()).toBe('active');
    });

    it('should return animation value as-is, ignore easing', () => {
      const a = new CSSTransitionAnimation({
        animationId: 'animation1',
        onAnimationStart: noop,
        onAnimationEnd: noop,
        animationDuration: 500,
        animationBegin: 300,
        from: 'scale(1)',
        to: 'scale(7)',
        easing: 'ease-in',
      });
      a.tick(10);
      a.tick(400);
      expect(a.getState()).toBe('active');
      a.tick(500);

      /*
       * CSS transitions are different! The progress here is 20% but!
       * What we actually want is we want the final value here
       * because that's what we put into DOM for the browser to render.
       * And so `getInterpolated()` is meant to return the final value, always.
       */
      expect(a.getProgress()).toBe(0.2);
      expect(a.getInterpolated()).toBe('scale(7)');
    });
  });
});
