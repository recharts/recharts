import { act } from '@testing-library/react';
import { RechartsAnimation } from '../../src/animation/RechartsAnimation';
import { mockAnimationController } from './mockAnimationController';
import { MockTimeoutController } from './mockTimeoutController';

export interface MockAnimationManager {
  /**
   * Sets the eased animation progress to a specific percentage.
   * It will step through all previous timeouts, objects, and functions in the queue and execute them as normal,
   * and then it will get <percent> of the way through the easing function.
   * The percentage is absolute, meaning that if you call this function multiple times,
   * it will use the last percentage only and ignore the previous ones.
   * So if you call it with 0.5 twice, you will advance the animation by 50%.
   *
   * There is no way to rewind the animation, so if you want to go back,
   * you will need to stop the animation and start it again from the beginning.
   *
   * Also, there is no checking for the end state of the animation,
   * so if you call this function with number larger than 1, you may find yourself beyond 100% progress.
   *
   * This will not progress beyond the end of the animation, meaning that even if you call this with a percentage larger than 1,
   * it still won't call onAnimationEnd or anything after the easing function has finished.
   * To do that, call `completeAnimation` instead, which will finish everything in the queue immediately.
   *
   * @param percent The percentage to advance the animation by, between 0 and 1.
   * @throws Error Will throw an error if the queue is empty or if the percentage is not between 0 and 1.
   * @returns Promise<void>
   */
  setAnimationProgress(percent: number): Promise<void>;

  /**
   * Completes the animation immediately, finishing all items in the queue.
   * This will not call onAnimationEnd or anything like that,
   * it will just finish everything in the queue immediately.
   * If you want to call onAnimationEnd, you need to do that manually.
   *
   * @throws Error Will throw an error if the queue is empty.
   * @returns Promise<void>
   */
  completeAnimation(): Promise<void>;

  isAnimating(): boolean;
}

/**
 * A higher level mock animation manager that allows for less granular control
 * but also requires less setup to get to a certain point in the animation.
 */
export class MockProgressAnimationManager<T, E> implements MockAnimationManager {
  private readonly onStop?: () => void;

  private animation: RechartsAnimation<any, any> | null = null;

  private readonly timeoutController: MockTimeoutController = new MockTimeoutController();

  constructor(
    private animationId: string,
    onStop?: () => void,
  ) {
    this.onStop = onStop;
  }

  async setAnimationProgress(percent: number): Promise<void> {
    if (this.animation === null) {
      throw new Error(`[${this.animationId}] Animation not available`);
    }
    if (percent < 0) {
      throw new Error('Percent must be greater than or equal to 0');
    }

    if (this.animation.getState() === 'completed') {
      throw new Error(
        'Animation is already complete. Call completeAnimation to finish the queue. MockProgressAnimationManager does not support rewinding.',
      );
    }

    const animationDuration = await this.peekAnimationDuration();

    /*
     * The time is absolute, and the configUpdate is internally tracking the time when it started,
     * so here we can just multiply by percent and add the first tick to get the time to advance.
     */
    const timeToAdvance = animationDuration * percent + this.animation.getBeginDelay() + this.firstTick;

    await this.timeoutController.triggerNextTimeout(timeToAdvance);
  }

  async completeAnimation(): Promise<void> {
    if (this.animation === null) {
      throw new Error('Queue is empty');
    }
    if (this.animation.getProgress() < 1) {
      // Finish the animation by setting the progress to 100% so that we can get fresh assertions in tests
      await this.setAnimationProgress(1);
    }

    act(() => {
      this.animation?.complete();
    });

    this.onStop?.();
  }

  public isAnimating(): boolean {
    return this.animation !== null && this.animation.getState() !== 'completed';
  }

  start(animation: RechartsAnimation<T, E>, listener: (newState: T) => void) {
    this.animation = animation;
    this.isPrimed = false; // Reset the primed state when starting a new animation
    mockAnimationController(this.timeoutController, this.animation, listener);
  }

  stop() {
    this.animation = null;
    this.isPrimed = false; // Reset the primed state when stopping the queue
    this.onStop?.();
  }

  private isPrimed: boolean = false;

  /**
   * The easing animation function has a special requirement to be primed before it can be used.
   * It has to receive at least one non-zero tick to set up its internal state.
   * This is the length of that tick in milliseconds.
   * @private
   */
  private firstTick: number = 16;

  /**
   * Priming the animation manager is a necessary step before starting the animation.
   * This method will step through the queue until it reaches the easing function,
   * then executes it and waits for the first tick of the easing function.
   * It's idempotent, meaning that if you call it multiple times,
   * it will only execute the necessary steps once.
   * @private
   * @returns Promise<void>
   */
  private async prime(): Promise<void> {
    if (this.animation === null) {
      throw new Error('No animation available');
    }
    if (this.isPrimed) {
      return;
    }
    this.isPrimed = true;

    if (this.animation.getState() === 'completed') {
      return; // job done
    }

    if (this.animation.getState() === 'init') {
      await this.timeoutController.triggerNextTimeout(0);
    }

    if (this.animation.getState() === 'pending') {
      /*
       * The `firstTick` exists because the previous implementation `configUpdate` had this thing where it required
       * a first non-zero tick to correctly initialize its internal state.
       * This is confusing and unnecessary so the new implementation does not have that
       * but all our unit tests are {firstTick}ms off so I added the same delay here
       * just so that I don't have to update tons of assertions.
       */
      await this.timeoutController.triggerNextTimeout(this.animation.getBeginDelay() + this.firstTick);
    }

    if (this.animation.getState() === 'active') {
      return; // this is what we wanted to reach!
    }

    throw new Error(`Unexpected animation state: ${this.animation.getState()}`);
  }

  /**
   * Conventionally the first item in the queue after the animation function is the animation duration.
   * This too will break if the Animate component changes its implementation. Unfortunate isn't it.
   * This method will prime the animation manager if it hasn't been primed yet,
   * and then it will return the first item in the queue, which is expected to be the animation duration.
   * @private
   * @throws Error Will throw an error if the queue is empty or if the first item is not a number.
   * @return Promise<number> The animation duration in milliseconds.
   */
  private async peekAnimationDuration(): Promise<number> {
    if (this.animation === null) {
      throw new Error(`[${this.animationId}] Animation not available`);
    }

    await this.prime();

    return this.animation.getDuration();
  }
}
