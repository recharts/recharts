/**
 * Callback type for the timeout function.
 * Receives current time as an argument.
 */
export type CallbackType = (now: number) => void;

/**
 * A function that, when called, cancels the timeout.
 *
 * @since 3.9
 */
export type CancelableTimeout = () => void;

/**
 * TimeoutController is responsible for controlling the movement of time.
 * Think of it as a clock.
 *
 * Recharts default implementation uses requestAnimationFrame which works great in a browser.
 * You may choose to override this which is especially useful if you want to control animations.
 *
 * Why would you want to do this?
 * - unit tests
 * - animations based on something other than time: UI controls, page scroll, mouse movement ...
 *
 * @see {@link https://recharts.github.io/en-US/guide/animations/ Animation guide}
 *
 * @since 3.9
 */
export interface TimeoutController {
  /**
   * Sets a timeout that executes a callback after a specified delay.
   * Allows setting multiple timeouts and provides a way to cancel them independently.
   *
   * Note that this one function has two different time systems!
   * The input (delay - parameter of setTimeout)
   * - is relative
   * - it means "wait for this long"
   * -
   *
   * The output (now - parameter of the callback) is absolute; it means "this is the time now"
   *
   * @param callback - The function to execute after the delay. Receives the current absolute time in milliseconds as an argument.
   * @param delay (optional) - The duration of time in milliseconds to wait before executing the callback. Defaults to 0.
   */
  setTimeout(callback: CallbackType, delay?: number): CancelableTimeout;
}

export class RequestAnimationFrameTimeoutController implements TimeoutController {
  setTimeout(callback: CallbackType, delay: number = 0): CancelableTimeout {
    const startTime = performance.now();

    let requestId: number | null = null;

    const executeCallback = (now: number): void => {
      if (now - startTime >= delay) {
        callback(now);
      } else {
        requestId = requestAnimationFrame(executeCallback);
      }
    };

    requestId = requestAnimationFrame(executeCallback);

    return () => {
      if (requestId != null) {
        cancelAnimationFrame(requestId);
      }
    };
  }
}
