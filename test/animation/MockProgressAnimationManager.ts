import { MockAbstractAnimationManager } from './MockAbstractAnimationManager';
import { AnimationManager, ReactSmoothQueue } from '../../src/animation/AnimationManager';

/**
 * A higher level mock animation manager that allows for less granular control
 * but also requires less setup to get to a certain point in the animation.
 */
export class MockProgressAnimationManager extends MockAbstractAnimationManager implements AnimationManager {
  /**
   * Advances the eased animation by a specified percentage.
   * It will step through all previous timeouts, objects, and functions in the queue and execute them as normal,
   * and then it will get <percent> of the way through the easing function.
   * The percentage is additive, meaning that if you call this function multiple times,
   * it will continue to advance the animation by the specified percentage each time.
   * So if you call it with 0.5 twice, you will advance the animation by 100% (0.5 + 0.5).
   *
   * There is no way to rewind the animation, so if you want to go back,
   * you will need to stop the animation and start it again from the beginning.
   *
   * Also there is no checking for the current state of the animation,
   * so if you call this function multiple times, you mind find yourself beyond 100% progress.
   *
   * @param percent The percentage to advance the animation by, between 0 and 1.
   * @throws Error Will throw an error if the queue is empty or if the percentage is not between 0 and 1.
   * @returns Promise<void>
   */
  async advanceAnimation(percent: number): Promise<void> {
    if (this.queue === null || this.queue.length === 0) {
      throw new Error('Queue is empty');
    }
    if (percent < 0) {
      throw new Error('Percent must be greater than or equal to 0');
    }

    const animationDuration = await this.peekAnimationDuration();

    /*
     * The time is absolute, and the configUpdate is internally tracking the time when it started,
     * so here we can just multiply by percent and add the first tick to get the time to advance.
     */
    const timeToAdvance = animationDuration * percent + this.firstTick;

    await this.timeoutController.triggerNextTimeout(timeToAdvance);
  }

  start(queue: ReactSmoothQueue) {
    super.start(queue);
    this.isPrimed = false; // Reset the primed state when starting a new queue
  }

  stop() {
    super.stop();
    this.isPrimed = false; // Reset the primed state when stopping the queue
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
    if (this.isPrimed) {
      return;
    }

    /*
     * We don't really have a good way to check which function is the easing function.
     * We should have it return a Promise or something like that,
     * but until that happens we're just going to make an educated guess and say that
     * the Animate component by default puts the easing function as the third item in the queue.
     * If that changes, bunch of tests will break, so no harm.
     */
    await this.poll(2); // Poll the first two items in the queue, which we expect to be 1. onStart and 2. starting delay
    await this.poll(1); // Poll the next item, which we expect to be the easing function

    /*
     * Now, a specialty of the configUpdate easing function is that it needs one tick
     * to kickstart and set up its internal state.
     */
    await this.triggerNextTimeout(this.firstTick);

    this.isPrimed = true;
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
    if (this.queue === null || this.queue.length === 0) {
      throw new Error('Queue is empty');
    }

    await this.prime();

    const animationDuration = this.queue[0];

    if (typeof animationDuration !== 'number') {
      throw new Error(
        `We assume the first item in the queue is the animation duration.
        Found: [${typeof animationDuration}] instead.
        This probably means you are calling this method at a wrong time.`,
      );
    }

    return animationDuration;
  }
}
