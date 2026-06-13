const INIT = 'init' as const;
const PENDING = 'pending' as const;
const ACTIVE = 'active' as const;
const COMPLETED = 'completed' as const;

type AnimationState = typeof INIT | typeof PENDING | typeof ACTIVE | typeof COMPLETED;

type AnimationStateCallback = () => void;

/**
 * RechartsAnimation is a Recharts state machine. It has several stages in its life:
 *
 * - init - the RechartsAnimation had just been created, and did not announce its start yet (`onAnimationStart`)
 * - pending - the RechartsAnimation has executed `onAnimationStart` and it's now paused for `animationBegin` milliseconds until the transition begins
 * - active - RechartsAnimation is transitioning items on screen
 * - completed - RechartsAnimation has completed its transition and executed `onAnimationEnd`. This state is final and the animation is no longer allowed to transition to other states.
 *
 * Possible transitions are:
 * - init to pending - `onAnimationStart` executes
 * - pending to active
 * - active to completed - `onAnimationEnd` executes
 *
 * The animation also holds a "progress" which is number between 0 and 1 which shows the distance of transition.
 * This number is as follows:
 * - init: 0
 * - pending: 0
 * - active: [0, 1] always
 * - completed: 1
 *
 * The progress is hard-capped to be between 0 and 1 (inclusive) to avoid overshooting caused by coarse timers.
 * For this reason, the easing function must be applied _after_ this animation state, so that one has a chance to construct dynamic "overshoot" animations.
 *
 * AnimationController: so this is typically either a setTimeout-based or requestAnimationFrame-based solution which reports the passage of time and translates that into a "progress". This controller will read the `animationDuration` and the time elapsed since the last tick, run that through easing function, then pass as progress. All good. But! This can also be customized. Since Recharts v3.9 we support passing custom animationControllers. Why is that useful?
 * - Unit testing: one can construct a chart at any point of the animation, for unit tests or visual tests for example (Recharts source code uses this extensively)
 * - Manual animation control: I find it very useful to have a UI that controls the progress of the animation, so that I can observe and debug the animation without being constrained by time.
 * - Other more creative animation controllers: One can construct a chart that animates based on a page scroll distance. Or animates back and forth based on mouse wheel events. Or a BarChart that animates based on microphone signal volume. We don't want to support all of those inside the library - we want to focus on charts - but we want to give users the tools to do that if they want to. And this tool is AnimationController override. We will provide the default implementation in the form of requestAnimationFrameAnimationController and let users add their own.
 *
 * For this reason, we do not automatically end the animation when it reaches `1`. You need to call .complete() first.
 *
 * The RechartsAnimation class is responsible for managing the transition between these stages, and for announcing the start and end of the animation to its parent component.
 *
 * The animation queue is static and consists of four elements:
 * - `onAnimationStart`: function that is called when the animation is moving from `init` to `pending`
 */
export class RechartsAnimation {
  private readonly onAnimationStart: undefined | AnimationStateCallback;

  private readonly onAnimationEnd: undefined | AnimationStateCallback;

  private progress: number;

  private animationStartedTime: number | undefined;

  private pendingStartedTime: number | undefined;

  private readonly animationDuration: number;

  private readonly animationBegin: number;

  constructor(param: {
    onAnimationStart: undefined | AnimationStateCallback;
    onAnimationEnd: undefined | AnimationStateCallback;
    animationDuration: number;
    animationBegin: number;
  }) {
    this.onAnimationStart = param.onAnimationStart;
    this.onAnimationEnd = param.onAnimationEnd;
    this.animationDuration = param.animationDuration;
    this.animationBegin = param.animationBegin;
    this.progress = 0;
  }

  private state: AnimationState = INIT;

  getState() {
    return this.state;
  }

  tick(now: number) {
    if (this.getState() === INIT) {
      this.state = PENDING;
      this.pendingStartedTime = now;
      this.onAnimationStart?.();
      return;
    }

    if (this.getState() === PENDING) {
      if (this.pendingStartedTime == null) {
        throw new Error('Invalid animation state');
      }
      const timeElapsed = now - this.pendingStartedTime;
      if (timeElapsed >= this.animationBegin) {
        this.state = ACTIVE;
        this.animationStartedTime = now;
      }
      return;
    }

    if (this.getState() === ACTIVE) {
      if (this.animationStartedTime == null) {
        throw new Error('Invalid animation state');
      }
      this.setProgress((now - this.animationStartedTime) / this.animationDuration);
    }
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
}
