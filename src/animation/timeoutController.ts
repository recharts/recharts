/**
 * Callback type for the timeout function.
 * Receives current time in milliseconds as an argument.
 */
export type CallbackType = (now: number) => void;

/**
 * A function that, when called, cancels the timeout.
 */
export type CancelableTimeout = () => void;

export interface TimeoutController {
  /**
   * Sets a timeout that executes a callback after a specified delay.
   * Allows setting multiple timeouts and provides a way to cancel them independently.
   * @param callback - The function to execute after the delay. Receives the current time in milliseconds as an argument.
   * @param delay (optional) - The time in milliseconds to wait before executing the callback. Defaults to 0.
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
        // tests fail without the extra if, even when five lines below it's not needed
        // TODO finish transition to the mocked timeout controller and then remove this condition
      } else if (typeof requestAnimationFrame === 'function') {
        requestId = requestAnimationFrame(executeCallback);
      }
    };

    requestId = requestAnimationFrame(executeCallback);

    return () => {
      cancelAnimationFrame(requestId);
    };
  }
}
