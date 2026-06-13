import { describe, it, expect } from 'vitest';
import { RechartsAnimationImpl } from '../../src/animation/RechartsAnimation';
import { noop } from '../../src/util/DataUtils';

describe('RechartsAnimation state machine', () => {
  it('should start in "init" state', () => {
    const a = new RechartsAnimationImpl({
      onAnimationStart: noop,
      onAnimationEnd: noop,
      animationDuration: 200,
      animationBegin: 0,
    });
    expect(a.getState()).toBe('init');
  });

  it('should transition to "pending" after the first tick, and call onAnimationStart while doing so, and not call it second time after active', () => {
    const spy = vi.fn();
    const a = new RechartsAnimationImpl({
      onAnimationStart: spy,
      onAnimationEnd: noop,
      animationDuration: 200,
      animationBegin: 20,
    });
    expect(spy).toHaveBeenCalledTimes(0);
    a.tick(10); // this becomes the starting time
    expect(a.getState()).toBe('pending');
    expect(spy).toHaveBeenCalledTimes(1);
    a.tick(30); // this must be larger than "starting time + animationBegin"
    expect(a.getState()).toBe('active');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should not throw an error when onAnimationStart or onAnimationEnd are not defined', () => {
    const a = new RechartsAnimationImpl({
      onAnimationStart: undefined,
      onAnimationEnd: undefined,
      animationDuration: 200,
      animationBegin: 0,
    });
    a.tick(0);
    a.tick(0);
    a.complete();
    expect(a.getState()).toBe('completed');
  });

  it('should return progress = 0 when init and when pending', () => {
    const a = new RechartsAnimationImpl({
      onAnimationStart: noop,
      onAnimationEnd: noop,
      animationDuration: 200,
      animationBegin: 0,
    });
    expect(a.getProgress()).toBe(0);
    a.tick(0);
    expect(a.getProgress()).toBe(0);
  });

  it('should transition to "active" after the second tick', () => {
    const a = new RechartsAnimationImpl({
      onAnimationStart: noop,
      onAnimationEnd: noop,
      animationDuration: 200,
      animationBegin: 0,
    });
    a.tick(0);
    a.tick(0);
    expect(a.getState()).toBe('active');
  });

  it('should return correct progress when in "active" state', () => {
    const a = new RechartsAnimationImpl({
      onAnimationStart: noop,
      onAnimationEnd: noop,
      animationDuration: 200,
      animationBegin: 0,
    });
    a.tick(0);
    a.tick(0);
    expect(a.getProgress()).toBeGreaterThanOrEqual(0);
    expect(a.getProgress()).toBeLessThan(1);
  });

  it('should handle transition to "completed" state and call onAnimationEnd', () => {
    const spy = vi.fn();
    const a = new RechartsAnimationImpl({
      onAnimationStart: undefined,
      onAnimationEnd: spy,
      animationDuration: 200,
      animationBegin: 0,
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
    const a = new RechartsAnimationImpl({
      onAnimationStart: spy,
      onAnimationEnd: noop,
      animationDuration: 200,
      animationBegin: 100,
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
    const a = new RechartsAnimationImpl({
      onAnimationStart: spy,
      onAnimationEnd: noop,
      animationDuration: 200,
      animationBegin: 100,
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
    const a = new RechartsAnimationImpl({
      onAnimationStart: noop,
      onAnimationEnd: noop,
      animationDuration: 200,
      animationBegin: 0,
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
    let a: RechartsAnimationImpl;
    beforeEach(() => {
      a = new RechartsAnimationImpl({
        onAnimationStart: noop,
        onAnimationEnd: noop,
        animationDuration: 200,
        animationBegin: 0,
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
    let a: RechartsAnimationImpl;
    beforeEach(() => {
      a = new RechartsAnimationImpl({
        onAnimationStart: noop,
        onAnimationEnd: noop,
        animationDuration: 200,
        animationBegin: 500,
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
      // progress is not allowed to go out of bounds, so it can be greater than 1
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
      return new RechartsAnimationImpl({
        onAnimationStart: noop,
        onAnimationEnd: noop,
        animationDuration: 200,
        animationBegin: 300,
      });
    }).not.toThrowError();
  });

  it('should handle multiple calls to "tick" with the same time value correctly', () => {
    const a = new RechartsAnimationImpl({
      onAnimationStart: vi.fn(),
      onAnimationEnd: vi.fn(),
      animationDuration: 200,
      animationBegin: 100,
    });

    a.tick(10);
    expect(a.getState()).toBe('pending');

    // Simulate multiple calls to tick with the same time value
    a.tick(200);
    a.tick(200);

    expect(a.getState()).toBe('active');
  });

  it('should allow to complete straight away and skip the other states, and not call any of the handlers', () => {
    const startSpy = vi.fn();
    const endSpy = vi.fn();
    const a = new RechartsAnimationImpl({
      onAnimationStart: startSpy,
      onAnimationEnd: endSpy,
      animationDuration: 200,
      animationBegin: 0,
    });
    a.complete();
    expect(a.getState()).toBe('completed');
    expect(a.getProgress()).toBe(1);
    expect(startSpy).not.toHaveBeenCalled();
    expect(endSpy).not.toHaveBeenCalled();
  });
});
