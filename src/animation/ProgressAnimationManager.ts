import { AnimationManager, HandleChangeFn, ReactSmoothQueue, ReactSmoothStyle } from './AnimationManager';
import { TimeoutController } from './timeoutController';
import { ManualTimeoutController } from './ManualTimeoutController';

/**
 * Status of a single animation managed by ProgressAnimationManager.
 */
export type AnimationStatus = 'idle' | 'pending' | 'active' | 'complete';

/**
 * An AnimationManager implementation that allows manual control of animation progress.
 *
 * Instead of running animations in real-time via requestAnimationFrame,
 * this manager stores the animation queue and allows setting progress
 * to any point (0-1) for manual scrubbing.
 *
 * @internal Used by AnimationProgressProvider
 */
export class ProgressAnimationManager implements AnimationManager {
  private queue: Array<ReactSmoothQueue[number]> | null = null;

  private listener: HandleChangeFn | null = null;

  private readonly timeoutController = new ManualTimeoutController();

  private isPrimed = false;

  private readonly firstTick = 16;

  private progress = 0;

  private status: AnimationStatus = 'idle';

  private readonly onStop?: () => void;

  constructor(
    public readonly animationId: string,
    onStop?: () => void,
  ) {
    this.onStop = onStop;
  }

  // AnimationManager interface

  start(queue: ReactSmoothQueue): void {
    this.queue = [...queue];
    this.isPrimed = false;
    this.progress = 0;
    this.status = 'pending';
    this.timeoutController.clear();
  }

  stop(): void {
    this.queue = null;
    this.status = 'idle';
    this.isPrimed = false;
    this.progress = 0;
    this.timeoutController.clear();
    this.onStop?.();
  }

  subscribe(handleChange: HandleChangeFn): () => void {
    this.listener = handleChange;
    return () => {
      this.listener = null;
    };
  }

  getTimeoutController(): TimeoutController {
    return this.timeoutController;
  }

  // Progress control API

  getProgress(): number {
    return this.progress;
  }

  getStatus(): AnimationStatus {
    return this.status;
  }

  isAnimating(): boolean {
    return this.status === 'pending' || this.status === 'active';
  }

  /**
   * Set animation to a specific progress (0-1).
   * Supports both forward and backward scrubbing.
   * Clamped to [0, 0.999] to keep the animation alive for further scrubbing.
   */
  setProgress(percent: number): void {
    if (!this.queue || this.queue.length === 0) return;
    if (this.status === 'complete') return;

    const safePercent = Math.max(0, Math.min(0.999, percent));

    this.prime();
    this.progress = safePercent;
    this.status = 'active';

    const animationDuration = this.peekAnimationDuration();
    if (animationDuration == null) return;

    const timeToAdvance = animationDuration * safePercent + this.firstTick;
    this.timeoutController.triggerNextTimeout(timeToAdvance);
  }

  /**
   * Complete the animation immediately (jumps to 100% and processes remaining queue).
   */
  complete(): void {
    if (!this.queue || this.queue.length === 0) return;
    if (this.status === 'complete') return;

    this.prime();
    this.progress = 1;

    const animationDuration = this.peekAnimationDuration();
    if (animationDuration != null) {
      const timeToAdvance = animationDuration + this.firstTick;
      this.timeoutController.triggerNextTimeout(timeToAdvance);
    }

    this.processRemaining();
    this.status = 'complete';
    this.onStop?.();
  }

  // Private helpers

  /**
   * Prime the animation by stepping through the initial queue items.
   *
   * The queue from JavascriptAnimate is:
   *   [onAnimationStart, begin, onAnimationActive, duration, onAnimationEnd]
   *
   * Priming processes onAnimationStart + begin delay + onAnimationActive (which
   * starts the easing function), then triggers the first tick to initialize
   * configUpdate's internal beginTime.
   */
  private prime(): void {
    if (this.isPrimed) return;
    this.isPrimed = true;

    // Process onAnimationStart + begin delay
    this.pollItems(2);
    // Process onAnimationActive (starts the easing function)
    this.pollItems(1);
    // First tick to initialize configUpdate's beginTime
    this.timeoutController.triggerNextTimeout(this.firstTick);
  }

  private peekAnimationDuration(): number | null {
    if (!this.queue || this.queue.length === 0) return null;
    const first = this.queue[0];
    return typeof first === 'number' ? first : null;
  }

  private pollItems(count: number): void {
    for (let i = 0; i < count; i++) {
      this.pollOne();
    }
  }

  private pollOne(): void {
    if (!this.queue || this.queue.length === 0) return;
    const [head, ...rest] = this.queue;
    this.queue = rest;

    if (typeof head === 'function') {
      head();
    } else if (typeof head === 'object' || typeof head === 'string') {
      this.listener?.(head as ReactSmoothStyle);
    }
    // numbers (delays) are skipped — we control timing manually
  }

  private processRemaining(): void {
    while (this.queue && this.queue.length > 0) {
      this.pollOne();
    }
  }
}
