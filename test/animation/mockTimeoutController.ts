import { act } from '@testing-library/react';
import { CallbackType, CancelableTimeout, TimeoutController } from '../../src/animation/timeoutController';

type MockTimeoutControllerConfig = {
  /**
   * The mock controller will never allow more than this number of timeouts at once
   */
  timeoutLimit?: number;
};

/**
 * Mock implementation of TimeoutController for testing purposes.
 * This does not use requestAnimationFrame and allows for manual control of timeouts.
 */
export class MockTimeoutController implements TimeoutController {
  private timeouts: Array<{ callback: CallbackType; delay: number | undefined }> = [];

  private cancelledFramesCount = 0;

  private readonly config: MockTimeoutControllerConfig;

  constructor(config: MockTimeoutControllerConfig = {}) {
    this.config = config;
  }

  setTimeout(callback: CallbackType, delay?: number): CancelableTimeout {
    /*
     * Here on purpose, we store a copy of the callback instead of the callback itself.
     * Why?
     * This is to test that the other classes are keeping track of their cancellations properly.
     * If we didn't do that then it's easy to return the first instance returned from calling `setTimeout`
     * and call it a day. Which is what would happen in this mock controller only,
     * but the actual RequestAnimationFrameTimeoutController implementation keeps track of requestIds,
     * not callback instances so that wouldn't work.
     *
     * So long story short, this copy exists to keep the mock behavior same as actual timeout controller behavior.
     */
    const copy: CallbackType = (now: number) => callback(now);
    this.timeouts.push({ callback: copy, delay });

    if (this.config.timeoutLimit != null && this.timeouts.length > this.config.timeoutLimit) {
      throw new Error(
        `Timeout queue has size ${this.timeouts.length} which is more than the allowed ${this.config.timeoutLimit}`,
      );
    }

    // Return a cancelable timeout function
    return () => {
      this.removeTimeout(copy);
      this.cancelledFramesCount++;
    };
  }

  /**
   * Manually triggers the next timeout callback, as defined by the registration order,
   * not the order of the delay.
   * This (poorly) simulates the passage of time without using requestAnimationFrame.
   * If there are no timeouts registered, it throws an error.
   * If there are multiple timeouts, it triggers the first one in the queue.
   * @param now - The current time in milliseconds.
   * @returns undefined
   */
  async triggerNextTimeout(now: number): Promise<void> {
    const next = this.timeouts.shift();

    if (next == null) {
      return;
    }

    const { callback } = next;
    await Promise.resolve(); // Simulate async behavior
    // Remove the timeout before executing the callback, because the callback may queue itself again
    this.removeTimeout(callback);
    act(() => {
      callback(now);
    });
  }

  /**
   * Flushes all registered timeouts by triggering them in the order they were registered.
   * This simulates the passage of time until all timeouts are executed.
   * @param tickSize - The size of each tick in milliseconds. Defaults to 1000ms.
   * @returns A promise that resolves when all timeouts have been triggered.
   */
  async flushAllTimeouts(tickSize: number = 1000): Promise<void> {
    let time = 0;
    while (this.timeouts.length > 0) {
      // eslint-disable-next-line no-await-in-loop
      await this.triggerNextTimeout(tickSize * time++);
    }
  }

  clear() {
    this.timeouts = [];
    this.cancelledFramesCount = 0;
  }

  private removeTimeout(callback: CallbackType) {
    this.timeouts = this.timeouts.filter(t => t.callback !== callback);
  }

  getCallbacksCount() {
    return this.timeouts.length;
  }

  getTimeouts() {
    return this.timeouts.map(t => t.delay);
  }

  getCancelledFramesCount() {
    return this.cancelledFramesCount;
  }
}
