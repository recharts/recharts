/**
 * Status of a single animation.
 *
 * Recharts by default handles all of this internally, using requestAnimationFrame.
 * This type is only interesting if you are doing any of the following:
 * - overriding Recharts internal animation system
 * - either using different timing library
 * - or controlling animations manually
 * - writing unit tests
 *
 * 'idle'    - animation has not started yet
 * 'pending' - animation has started yet but nothing is moving.
 *             This is the status right after start() is called, and it lasts until the first frame of animation is rendered.
 *             This usually happens immediately; however Recharts exports `animationBegin` prop and if you set that prop
 *             to N [milliseconds] then the 'pending' state will be N ms long.
 * 'active'  - animation is in progress, frames are being rendered. While in progress, the animation can still revert to any percentage.
 *             Meaning that even if you set the animation progress to `1` (= 100%) you can still set it back to `0.5` (= 50%) and the animation will continue from there.
 *             Now usually all animations only move forwards in time. But for testing or debugging purposes you can set the progress to any value at any time.
 * 'complete' - animation has completed, resources were destroyed and you can no longer move backwards in time.
 *              This doesn't happen automatically after reaching 100%; you need to call the 'complete()' method on the animation handle to trigger this state.
 *              This is because even after reaching 100% you might want to rewind the animation back and forth for testing or debugging.
 */
export type AnimationStatus = 'idle' | 'pending' | 'active' | 'complete';

/**
 * A handle that represents a single animation
 */
export type AnimationHandle = {
  /**
   * Unique identifier of the animation
   */
  readonly animationId: string;
  getStatus(): AnimationStatus;
  /**
   * Returns a number, typically between 0 and 1 but potentially lower than 0 or higher than 1,
   * depending on the easing function. If you construct a custom cubic-bezier function you can get values outside this range.
   *
   * Recharts animations are using linear interpolation and will usually handle progress outside the [0, 1] range just fine.
   *
   * 0 is the start of the animation and 1 is the end.
   */
  getProgress(): number;
  /**
   * Sets the animation progress.
   * This only works if the animation status is `active`. Once animation is `complete` then its progress is locked to `1` (= 100%) and cannot be changed.
   *
   * @param progress number typically between 0 and 1; the range is not enforced and depending on your easing function may be outside this range.
   */
  setProgress(progress: number): void;
  /**
   * Sets progress to `1`, sets status to `complete` and frees resources.
   * Once an animation is complete, the progress cannot be changed and the animation cannot be restarted.
   */
  complete(): void;
};
