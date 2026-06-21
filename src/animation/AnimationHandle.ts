// eslint-disable-next-line max-classes-per-file
import { interpolate } from '../util/DataUtils';
import { EasingFunction, NamedBezier } from './easing';

const INIT = 'init' as const;
const PENDING = 'pending' as const;
const ACTIVE = 'active' as const;
const COMPLETED = 'completed' as const;

export type AnimationState = typeof INIT | typeof PENDING | typeof ACTIVE | typeof COMPLETED;

type AnimationStateCallback = () => void;

function duration(time: number): number {
  return Math.max(0, time);
}

abstract class RechartsAnimation<T, E> {
  /**
   * Returns the absolute time after the animationBegin delay has been completed,
   * and when the animationDuration started ticking.
   */
  public getAnimationStartedTime(): number | undefined {
    return this.animationStartedTime;
  }

  /**
   * Returns the absolute time of when the animation began - now it will wait for {animationBegin} ms before the transition starts
   */
  public getBeginStartedTime(): number | undefined {
    return this.beginStartedTime;
  }

  private readonly onAnimationEnd: undefined | AnimationStateCallback;

  private progress: number;

  private animationStartedTime: number | undefined;

  private beginStartedTime: number | undefined;

  protected readonly animationDuration: number;

  private readonly animationBegin: number;

  private readonly from: T;

  private readonly to: T;

  protected readonly easing: E;

  private readonly animationId: string;

  constructor(param: {
    animationId: string;
    onAnimationStart: undefined | AnimationStateCallback;
    onAnimationEnd: undefined | AnimationStateCallback;
    animationDuration: number;
    animationBegin: number;
    from: T;
    to: T;
    easing: E;
  }) {
    this.animationId = param.animationId;
    this.onAnimationEnd = param.onAnimationEnd;
    this.animationDuration = duration(param.animationDuration);
    this.animationBegin = duration(param.animationBegin);
    this.progress = 0;
    this.from = param.from;
    this.to = param.to;
    this.easing = param.easing;
    // Mimic what the previous animationManager was doing - call onAnimationStart immediately and synchronously
    param.onAnimationStart?.();
  }

  private state: AnimationState = INIT;

  /**
   * Returns the state machine current state
   * - `init`:       animation had just been created. It immediately calls `onAnimationStart`
   * - `pending`:    animation is now paused for `animationBegin` milliseconds until the transition begins
   * - `active`:     animation is transitioning items on screen
   * - `completed`:  animation has completed its transition and executed `onAnimationEnd`.
   *                 This state is final and the animation is no longer allowed to transition to other states.
   */
  public getState() {
    return this.state;
  }

  /**
   * Returns the easing input or function
   */
  public getEasing(): E {
    return this.easing;
  }

  /**
   * Returns the configuration - the duration of the transition.
   * Does not change in time, does not change when state changes, this is a static value.
   */
  public getAnimationDuration(): number {
    return this.animationDuration;
  }

  /**
   * Sets the current time of the animation. The animation sets its internal state and progress accordingly.
   * This is current, absolute time; not additive!
   * This allows you to essentially "travel back in time" based on the value you pass in here.
   *
   * Returns the (relative) time remaining until the current activity is over.
   * Meaning: if the state is in a middle of a delay, returns the time left until the delay is finished.
   * If the state is in the middle of a transition, returns time left until that transition is complete.
   * This is useful because it's the same number you can take and put into setTimeout(fn, X)
   * as that's how much time we need to wait until the next state transition happens.
   */
  public tick(now: number): number {
    if (this.getState() === INIT) {
      this.state = PENDING;
      this.beginStartedTime = now;
      return this.animationBegin;
    }

    if (this.getState() === PENDING) {
      if (this.beginStartedTime == null) {
        throw new Error();
      }
      const timeElapsed = now - this.beginStartedTime;
      if (timeElapsed >= this.animationBegin) {
        this.state = ACTIVE;
        this.animationStartedTime = now;
        // The state flipped just now so the elapsed time is zero
        return this.nextAnimationUpdate(0);
      }
      return duration(this.animationBegin - timeElapsed);
    }

    if (this.getState() === ACTIVE) {
      if (this.animationStartedTime == null) {
        throw new Error();
      }
      const timeElapsed = now - this.animationStartedTime;
      this.setProgress(timeElapsed / this.animationDuration);
      return this.nextAnimationUpdate(timeElapsed);
    }

    // state === COMPLETED, nothing interesting is going to happen
    return 0;
  }

  private setProgress(newProgress: number) {
    this.progress = Math.min(1, Math.max(0, newProgress));
  }

  /**
   * Returns an abstract "progress" which is number between 0 and 1 which shows the distance of transition.
   * This progress depends on the animation state:
   * - `init`: 0
   * - `pending`: 0
   * - `active`: transitioning between [0, 1] based on the time elapsed
   * - `completed`: 1
   *
   * The progress is hard-capped to be between 0 and 1 (inclusive) to avoid overshooting caused by coarse timers.
   * For this reason, the easing function must be applied _after_ this animation state,
   * so that one has a chance to construct dynamic "overshoot" animations.
   *
   * The progress is linear with time.
   * If you wish for easing, use `getInterpolated()` instead.
   */
  public getProgress(): number {
    return this.progress;
  }

  /**
   * Completes the animation. Completed animation:
   * - cannot be manipulated anymore
   * - its progress is set to 1
   * - tick function doesn't do anything
   * - getState() always returns 'completed'
   */
  public complete() {
    this.progress = 1;
    if (this.state === 'active') {
      // Do not call callbacks if the animation was interrupted before it even started!
      this.onAnimationEnd?.();
    }
    this.state = COMPLETED;
  }

  /**
   * Returns the starting value of the animation.
   * Does not include progress, easing, interpolation, none of that - just the static starting value
   */
  public getFrom() {
    return this.from;
  }

  /**
   * Returns the end value of the animation.
   * Does not include progress, easing, interpolation, none of that - just the static end value
   */
  public getTo() {
    return this.to;
  }

  /**
   * Unique identifier of an animation
   */
  public getAnimationId(): string {
    return this.animationId;
  }

  /**
   * Returns the configuration - the duration of delay in between animation initialization, and transition.
   * Does not change in time, does not change when state changes, this is a static value.
   */
  getAnimationBegin(): number {
    return this.animationBegin;
  }

  /**
   * Returns value of the transition at the current time.
   * The exact details differ based on the animation type
   */
  public abstract getInterpolated(): T;

  /**
   * Returns the duration of time of when the controller should ask for the next update
   */
  protected abstract nextAnimationUpdate(timeElapsed: number): number;
}

/**
 * Animation handle representing a Javascript-based animation.
 * This animation requires one render cycle for each frame, and it calls setTimeout as quickly as possible
 *
 * @since 3.9
 */
export class JavascriptAnimation extends RechartsAnimation<number, EasingFunction> {
  // eslint-disable-next-line class-methods-use-this
  protected nextAnimationUpdate(): number {
    /*
     * JavaScript-based animations have to update as soon as possible,
     * so we return 0 here to indicate that the next update should be scheduled immediately
     * and it should trigger render on every occasion.
     */
    return 0;
  }

  /**
   * Returns value of the animation after its easing function had been applied.
   * This value, unlike getProgress(), can escape the [0..1] range
   * because this is entirely within the easing function control. Spring typically does this.
   */
  public getInterpolated(): number {
    return this.easing(interpolate(this.getFrom(), this.getTo(), this.getProgress()));
  }
}

/**
 * Animation handle representing a CSS transition.
 * This animation requires only one render, and the actual transition is then handled by the browser.
 *
 * @since 3.9
 */
export class CSSTransitionAnimation extends RechartsAnimation<string, NamedBezier> {
  protected nextAnimationUpdate(timeElapsed: number): number {
    /**
     * CSS transitions do not need DOM updates past the initial render
     * so here we just instruct the controller to wait until the animation duration is over.
     */
    return duration(this.animationDuration - timeElapsed);
  }

  /**
   * Returns the final value of the animation (the `to`).
   *
   * CSS transitions leave both interpolation and easing to the browser,
   * so all we need to do here is return the final state
   * and let browser handle the rest.
   */
  public getInterpolated(): string {
    return this.getTo();
  }
}

/**
 * Recharts animation state machine.
 *
 * Possible transitions are:
 * - `init`: starting state - `onAnimationStart` executes
 * - `init` to `pending` - `animationBegin` duration begins
 * - `pending` to `active` - `animationDuration` duration begins, timer ticks decide the progress
 * - `active` to `completed` - `onAnimationEnd` executes
 *
 * The state always moves in this direction, cannot move backwards.
 *
 * The animation queue is static and consists of four elements:
 * - `onAnimationStart`: function that is called when the animation is created
 * - `animationBegin`: delay between `onAnimationStart` and the transition
 * - the transition itself, takes `animationDuration` ms to finish
 * - `onAnimationEnd`: function that is called when the animation is moving from `active` to `completed`
 *
 * @since 3.9
 */
export type AnimationHandle = JavascriptAnimation | CSSTransitionAnimation;
