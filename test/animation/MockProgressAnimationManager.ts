import { MockAbstractAnimationManager } from './MockAbstractAnimationManager';
import { AnimationManager, ReactSmoothQueue } from '../../src/animation/AnimationManager';

/**
 * A higher level mock animation manager that allows for less granular control
 * but also requires less setup to get to a certain point in the animation.
 */
export class MockProgressAnimationManager extends MockAbstractAnimationManager implements AnimationManager {
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
  async setAnimationProgress(percent: number): Promise<void> {
    if (this.queue === null || this.queue.length === 0) {
      throw new Error('Queue is empty');
    }
    if (percent < 0) {
      throw new Error('Percent must be greater than or equal to 0');
    }

    if (this.animationProgress >= 1) {
      throw new Error(
        'Animation is already complete. Call completeAnimation to finish the queue. MockProgressAnimationManager does not support rewinding.',
      );
    }

    this.animationProgress = percent;

    const animationDuration = await this.peekAnimationDuration();

    /*
     * The time is absolute, and the configUpdate is internally tracking the time when it started,
     * so here we can just multiply by percent and add the first tick to get the time to advance.
     */
    const timeToAdvance = animationDuration * percent + this.firstTick;

    await this.timeoutController.triggerNextTimeout(timeToAdvance);
  }

  /**
   * Completes the animation immediately, finishing all items in the queue.
   * This will not call onAnimationEnd or anything like that,
   * it will just finish everything in the queue immediately.
   * If you want to call onAnimationEnd, you need to do that manually.
   *
   * @throws Error Will throw an error if the queue is empty.
   * @returns Promise<void>
   */
  async completeAnimation(): Promise<void> {
    if (this.queue === null || this.queue.length === 0) {
      throw new Error('Queue is empty');
    }

    if (this.animationProgress < 1) {
      // Finish the animation by setting the progress to 100%. This will also prime the animation manager if it hasn't been primed yet.
      await this.setAnimationProgress(1);
    }

    return this.poll(this.queue.length);
  }

  start(queue: ReactSmoothQueue) {
    super.start(queue);
    this.isPrimed = false; // Reset the primed state when starting a new queue
    this.animationProgress = 0; // Reset the animation progress when starting a new queue
  }

  stop() {
    super.stop();
    this.isPrimed = false; // Reset the primed state when stopping the queue
    this.animationProgress = 0; // Reset the animation progress when stopping a queue
  }

  private isPrimed: boolean = false;

  /**
   * The easing animation function has a special requirement to be primed before it can be used.
   * It has to receive at least one non-zero tick to set up its internal state.
   * This is the length of that tick in milliseconds.
   * @private
   */
  private firstTick: number = 16;

  private animationProgress: number = 0;

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
