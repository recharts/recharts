import { act } from '@testing-library/react';
import {
  AnimationManager,
  HandleChangeFn,
  ReactSmoothQueue,
  ReactSmoothStyle,
} from '../../src/animation/AnimationManager';
import { TimeoutController } from '../../src/animation/timeoutController';
import { MockTimeoutController } from './mockTimeoutController';

/**
 * Abstract class for the various mock animation managers.
 * Don't use this directly, use the concrete implementations.
 */
export abstract class MockAbstractAnimationManager implements AnimationManager {
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
  protected async poll(count: number = 1) {
    for (let i = 0; i < count; i++) {
      // eslint-disable-next-line no-await-in-loop
      await act(async () => {
        await this.pollPrivate();
      });
    }
  }

  /**
   * Triggers the next timeout in the queue.
   * This is useful for stepping through the easing function which has its own independent timing mechanism.
   * If there are no timeouts to trigger, it will throw an error.
   * @param now The current time in milliseconds.
   * @throws Error Will throw an error if there are no timeouts to trigger.
   * @returns Promise<void>
   */
  protected async triggerNextTimeout(now: number): Promise<void> {
    if (this.timeoutController.getCallbacksCount() === 0) {
      throw new Error('No timeouts to trigger');
    }

    await this.timeoutController.triggerNextTimeout(now);
  }

  public isAnimating(): boolean {
    return this.queue !== null && this.queue.length > 0;
  }

  protected queue: ReactSmoothQueue | null = null;

  protected readonly timeoutController: MockTimeoutController = new MockTimeoutController();

  private listener: HandleChangeFn | null = null;

  start(queue: ReactSmoothQueue): void {
    this.queue = queue;
    this.timeoutController.clear();
  }

  stop(): void {
    this.queue = null;
  }

  subscribe(handleChange: (style: ReactSmoothStyle) => void): () => void {
    this.listener = handleChange;
    return () => {
      this.listener = null;
    };
  }

  getTimeoutController(): TimeoutController {
    return this.timeoutController;
  }

  private async pollPrivate(): Promise<void> {
    if (this.queue === null || this.queue.length === 0) {
      throw new Error('Queue is empty');
    }
    const head = this.queue[0];

    this.queue = this.queue.slice(1);
    if (typeof head === 'function') {
      head();
    } else if (typeof head === 'object') {
      this.listener?.(head);
    } else if (typeof head === 'number') {
      // just pretending that there was a timeout, good enough for testing
      await Promise.resolve();
    }
  }
}
