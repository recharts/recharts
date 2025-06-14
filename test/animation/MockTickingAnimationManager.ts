import { expect } from 'vitest';
import { AnimationManager, ReactSmoothQueue } from '../../src/animation/AnimationManager';
import { MockAbstractAnimationManager } from './MockAbstractAnimationManager';

/**
 * It's a faff trying to match function so let's have another type for the easy assertions
 */
export type SerializableQueue = ReadonlyArray<string | number | Record<string, any>>;

/**
 * This mock animation manager is used for testing purposes.
 * Useful for detailed control over the animation queue,
 * insight into the current state of the animation,
 * and for stepping through the animation queue in a controlled manner.
 */
export class MockTickingAnimationManager extends MockAbstractAnimationManager implements AnimationManager {
  /**
   * Allows writing assertions against the current state of the queue.
   * It doesn't use the queue directly, but rather a serializable view of it,
   * where functions are represented by their names which makes it easier to write tests for it.
   * @param expectedQueue The expected state of the queue. If null, it asserts that the queue is empty.
   * @throws Error if the current queue does not match the expected queue.
   * @returns void
   */
  public assertQueue(expectedQueue: SerializableQueue | null): void {
    if (expectedQueue === null) {
      expect(this.queue).toBeNull();
      return;
    }
    const serializedQueue: SerializableQueue = this.queue.map(item => {
      if (typeof item === 'function') {
        const name = 'getMockName' in item && typeof item.getMockName === 'function' ? item.getMockName() : item.name;
        return `[function ${name || 'anonymous'}]`;
      }
      return item;
    });
    expect(serializedQueue).toEqual(expectedQueue);
  }

  /**
   * Processes a specified number of items in the queue.
   * The queue can contain functions, objects, or numbers, so each behaves a little differently:
   * - Functions are called immediately.
   * - Objects are passed to the subscriber
   * - Numbers are treated as timeouts, and we just resolve the promise immediately to simulate the timeout.
   * - Easing functions within the queue are not supported in this mock,
   *    and they are executed as regular functions immediately.
   *    If you want to step through easing functions, you should call `triggerNextTimeout` when it comes to it.
   * @param count The number of items to process from the queue. Defaults to 1.
   * @throws Error Will throw an error if the queue is empty.
   * @returns Promise<void>
   */
  public poll(count: number = 1): Promise<void> {
    return super.poll(count);
  }

  /**
   * Triggers the next timeout in the queue.
   * This is useful for stepping through the easing function which has its own independent timing mechanism.
   * If there are no timeouts to trigger, it will throw an error.
   * @param now The current time in milliseconds.
   * @throws Error Will throw an error if there are no timeouts to trigger.
   * @returns Promise<void>
   */
  public async triggerNextTimeout(now: number): Promise<void> {
    return super.triggerNextTimeout(now);
  }

  private isRunningPrivate: boolean = false;

  start(queue: ReactSmoothQueue): void {
    super.start(queue);
    this.isRunningPrivate = true;
  }

  stop(): void {
    super.stop();
    this.isRunningPrivate = false;
  }

  isRunning(): boolean {
    return this.isRunningPrivate;
  }
}
