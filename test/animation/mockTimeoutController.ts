import { CallbackType, CancelableTimeout, TimeoutController } from '../../src/animation/timeoutController';

/**
 * Mock implementation of TimeoutController for testing purposes.
 * This does not use requestAnimationFrame and allows for manual control of timeouts.
 */
export class MockTimeoutController implements TimeoutController {
  private timeouts: Array<{ callback: CallbackType; delay: number | undefined }> = [];

  private cancelledFramesCount = 0;

  setTimeout(callback: CallbackType, delay?: number): CancelableTimeout {
    this.timeouts.push({ callback, delay });

    // Return a cancelable timeout function
    return () => {
      this.removeTimeout(callback);
      this.cancelledFramesCount++;
    };
  }

  /**
   * Manually triggers the next timeout callback, as defined by the registration order,
   * not the order of the delay.
   * This (poorly) simulates the passage of time without using requestAnimationFrame.
   * @param now - The current time in milliseconds.
   * @throws If there are no timeouts to trigger.
   * @returns undefined
   */
  async triggerNextTimeout(now: number): Promise<void> {
    if (this.timeouts.length === 0) {
      throw new Error('No timeouts to trigger');
    }

    const { callback } = this.timeouts.shift()!;
    await Promise.resolve(); // Simulate async behavior
    // Remove the timeout before executing the callback, because the callback may queue itself again
    this.removeTimeout(callback);
    callback(now);
  }

  clear() {
    this.timeouts = [];
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
