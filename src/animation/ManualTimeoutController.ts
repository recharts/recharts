import { CallbackType, CancelableTimeout, TimeoutController } from './timeoutController';

/**
 * A timeout controller that stores callbacks for manual triggering
 * instead of using requestAnimationFrame.
 *
 * @internal
 */
export class ManualTimeoutController implements TimeoutController {
  private timeouts: Array<{ callback: CallbackType }> = [];

  setTimeout(callback: CallbackType, _delay?: number): CancelableTimeout {
    this.timeouts.push({ callback });
    return () => {
      this.timeouts = this.timeouts.filter(t => t.callback !== callback);
    };
  }

  triggerNextTimeout(now: number): void {
    const next = this.timeouts.shift();
    if (next == null) return;
    this.timeouts = this.timeouts.filter(t => t.callback !== next.callback);
    next.callback(now);
  }

  getCallbacksCount(): number {
    return this.timeouts.length;
  }

  clear(): void {
    this.timeouts = [];
  }
}
