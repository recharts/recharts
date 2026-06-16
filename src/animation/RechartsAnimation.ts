// eslint-disable-next-line max-classes-per-file
import { interpolate } from '../util/DataUtils';

const INIT = 'init' as const;
const PENDING = 'pending' as const;
const ACTIVE = 'active' as const;
const COMPLETED = 'completed' as const;

type AnimationState = typeof INIT | typeof PENDING | typeof ACTIVE | typeof COMPLETED;

type AnimationStateCallback = () => void;

export interface RechartsAnimation<T> {
  /**
   * Returns the state machine current state
   * - `init`:       RechartsAnimation had just been created, and did not announce its start yet (`onAnimationStart`)
   * - `pending`:    RechartsAnimation has executed `onAnimationStart` and it's now paused for `animationBegin` milliseconds until the transition begins
   * - `active`:     RechartsAnimation is transitioning items on screen
   * - `completed`:  RechartsAnimation has completed its transition and executed `onAnimationEnd`.
   *                 This state is final and the animation is no longer allowed to transition to other states.
   */
  getState(): AnimationState;
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
   * The progress is linear with time; if you wish for easing, apply the easing function after reading the progress.
   */
  getProgress(): number;
  /**
   * Sets the current time of the animation. The animation sets its internal state and progress accordingly.
   * This is current, absolute time; not additive! This allows you to essentially "travel back in time" based on the value you pass in here.
   *
   * Returns the (relative) time remaining until the current activity is over.
   * Meaning: if the state is in a middle of a delay, returns the time left until the delay is finished.
   * If the state is in the middle of a transition, returns time left until that transition is complete.
   * This is useful because it's the same number you can take and put into setTimeout(fn, X)
   * as that's how much time we need to wait until the next state transition happens.
   */
  tick(now: number): number;
  /**
   * Completes the animation. Completed animation:
   * - cannot be manipulated anymore
   * - its progress is set to 1
   * - tick function doesn't do anything
   * - getState() always returns 'completed'
   */
  complete(): void;

  /**
   * Returns the starting value of the animation.
   * Does not include progress, easing, interpolation, none of that - just the static starting value
   */
  getFrom(): T;

  /**
   * Returns the end value of the animation.
   * Does not include progress, easing, interpolation, none of that - just the static end value
   */
  getTo(): T;
}

function remaining(time: number): number {
  return Math.max(0, time);
}

/**
 * RechartsAnimation is a Recharts state machine. It has several stages in its life:
 *
 * Possible transitions are:
 * - init to pending - `onAnimationStart` executes
 * - pending to active
 * - active to completed - `onAnimationEnd` executes
 *
 * AnimationController: so this is typically either a setTimeout-based or requestAnimationFrame-based solution which reports the passage of time and translates that into a "progress". This controller will read the `animationDuration` and the time elapsed since the last tick, run that through easing function, then pass as progress. All good. But! This can also be customized. Since Recharts v3.9 we support passing custom animationControllers. Why is that useful?
 * - Unit testing: one can construct a chart at any point of the animation, for unit tests or visual tests for example (Recharts source code uses this extensively)
 * - Manual animation control: I find it very useful to have a UI that controls the progress of the animation, so that I can observe and debug the animation without being constrained by time.
 * - Other more creative animation controllers: One can construct a chart that animates based on a page scroll distance. Or animates back and forth based on mouse wheel events. Or a BarChart that animates based on microphone signal volume. We don't want to support all of those inside the library - we want to focus on charts - but we want to give users the tools to do that if they want to. And this tool is AnimationController override. We will provide the default implementation in the form of requestAnimationFrameAnimationController and let users add their own.
 *
 * For this reason, we do not automatically end the animation when it reaches `1`. You need to call .complete() first.
 *
 * The RechartsAnimation class is responsible for managing the transition between these stages.
 *
 * The animation queue is static and consists of four elements:
 * - `onAnimationStart`: function that is called when the animation is moving from `init` to `pending`
 * - `animationBegin`: delay between `onAnimationStart` and the transition
 * - the transition itself, `animationDuration`-long
 * `onAnimationEnd`: function that is called when the animation is moving from `active` to `completed`
 */
abstract class RechartsAnimationImpl<T extends string | number> implements RechartsAnimation<T> {
  private readonly onAnimationStart: undefined | AnimationStateCallback;

  private readonly onAnimationEnd: undefined | AnimationStateCallback;

  private progress: number;

  private animationStartedTime: number | undefined;

  private pendingStartedTime: number | undefined;

  protected readonly animationDuration: number;

  private readonly animationBegin: number;

  private readonly from: T;

  private readonly to: T;

  constructor(param: {
    onAnimationStart: undefined | AnimationStateCallback;
    onAnimationEnd: undefined | AnimationStateCallback;
    animationDuration: number;
    animationBegin: number;
    from: T;
    to: T;
  }) {
    this.onAnimationStart = param.onAnimationStart;
    this.onAnimationEnd = param.onAnimationEnd;
    this.animationDuration = param.animationDuration;
    this.animationBegin = param.animationBegin;
    this.progress = 0;
    this.from = param.from;
    this.to = param.to;
  }

  private state: AnimationState = INIT;

  getState() {
    return this.state;
  }

  tick(now: number): number {
    if (this.getState() === INIT) {
      this.state = PENDING;
      this.pendingStartedTime = now;
      this.onAnimationStart?.();
      return this.animationBegin;
    }

    if (this.getState() === PENDING) {
      if (this.pendingStartedTime == null) {
        throw new Error();
      }
      const timeElapsed = now - this.pendingStartedTime;
      if (timeElapsed >= this.animationBegin) {
        this.state = ACTIVE;
        this.animationStartedTime = now;
        // The state flipped just now so the elapsed time is zero
        return this.nextAnimationUpdate(0);
      }
      return remaining(this.animationBegin - timeElapsed);
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

  getProgress(): number {
    return this.progress;
  }

  complete() {
    this.progress = 1;
    if (this.state === 'active') {
      // Do not call callbacks if the animation was interrupted before it even started!
      this.onAnimationEnd?.();
    }
    this.state = COMPLETED;
  }

  getFrom() {
    return this.from;
  }

  getTo() {
    return this.to;
  }

  /**
   * Returns the duration of time of when the controller should ask for the next update
   */
  protected abstract nextAnimationUpdate(timeElapsed: number): number;

  /**
   * Returns value of the transition at the current time.
   * The exact details differ based on the animation type
   */
  protected abstract interpolated(): T;
}

export class JavascriptAnimation extends RechartsAnimationImpl<number> {
  // eslint-disable-next-line class-methods-use-this
  protected nextAnimationUpdate(): number {
    /*
     * JavaScript-based animations have to update as soon as possible,
     * so we return 0 here to indicate that the next update should be scheduled immediately
     * and it should trigger render on every occasion.
     */
    return 0;
  }

  protected interpolated(): number {
    /*
     * TODO easing
     */
    return interpolate(this.getFrom(), this.getTo(), this.getProgress());
  }
}

export class CSSTransition extends RechartsAnimationImpl<string> {
  protected nextAnimationUpdate(timeElapsed: number): number {
    /**
     * CSS transitions do not need DOM updates past the initial render
     * so here we just instruct the controller to wait until the animation duration is over.
     */
    return remaining(this.animationDuration - timeElapsed);
  }

  /**
   * CSS transitions leave both interpolation and easing to the browser
   * - so all we need to do here is return the final state
   * and let browser handle the rest.
   */
  protected interpolated(): string {
    return this.getTo();
  }
}
