import { MutableRefObject, useCallback, useRef } from 'react';

export type AnimationStartSnapshot<T> = {
  /**
   * The frozen value captured at the start of the current animation cycle.
   *
   * Consumers should read from this when computing interpolation pairs.
   * It intentionally does not drift while the same animation is in progress,
   * even if multiple renders happen for the same animation frame.
   */
  startValue: T;
  /**
   * Feed each rendered animation frame back into the snapshot state machine.
   *
   * This method serves two jobs:
   * 1. it "arms" the hook once the new animation has rendered its t=0 frame, and
   * 2. it optionally commits later in-flight frames back into the mutable ref so
   *    future animations can continue smoothly from the latest visible geometry.
   */
  syncStepValue: (stepValue: T, t: number, canCommit?: boolean) => void;
};

/**
 * Small state machine shared by animated components that need interruption-safe
 * animations.
 *
 * Why this exists:
 * Recharts stores the latest visible animation frame in mutable refs so the next
 * animation can resume from that exact geometry. That works well, but there is a
 * subtle trap: when an animation is interrupted, React may render several times
 * before the new animation has actually emitted its own `t=0` frame. If we keep
 * reading and writing the same live ref during that window, the "start" value of
 * the new animation can drift, which produces visible jumps.
 *
 * This hook separates those two responsibilities:
 * - `startValue` is a frozen snapshot of the previous animation state, captured
 *   once per animation cycle and kept stable while that cycle is being matched
 *   and interpolated.
 * - `previousValueRef.current` remains the mutable "latest visible frame" store
 *   that future animations can resume from.
 *
 * The hook does not know anything about points, baselines, sectors, or shapes.
 * It only manages *when* a snapshot is captured and *when* new frames are allowed
 * to overwrite the mutable ref.
 *
 * Lifecycle:
 * 1. When `animationInput` changes by reference, a new cycle begins. We capture
 *    the current ref value into `startValue` and temporarily block writes.
 * 2. When the new animation renders `t=0`, we unlock writes. This ensures the new
 *    animation has had a chance to render its true starting frame before any live
 *    ref gets updated.
 * 3. For `t > 0`, callers may commit the visible frame back into the mutable ref.
 *    Callers can still veto that with `canCommit=false` (for example when a Line
 *    needs to wait until SVG path length has been measured).
 * 4. At `t=1`, we also refresh the frozen snapshot so subsequent rerenders in the
 *    completed state observe the finished geometry.
 */
export function useAnimationStartSnapshot<T>(
  animationInput: unknown,
  previousValueRef: MutableRefObject<T>,
): AnimationStartSnapshot<T> {
  /*
   * Stores the identity of the animation cycle we are currently serving.
   * As soon as this changes, we know we need a brand new frozen snapshot.
   */
  const previousAnimationInputRef = useRef(animationInput);
  /*
   * Frozen start-of-cycle value used for interpolation.
   * This is the value callers should match against for the whole duration of the
   * current animation, even if the live ref is updated many times afterward.
   */
  const startValueRef = useRef(previousValueRef.current);
  /*
   * Prevents us from writing back into the live ref until the new animation has
   * actually rendered its own t=0 frame. This avoids "pre-start" renders from
   * accidentally rebasing the next animation onto already-shifted geometry.
   */
  const isReadyToCommitRef = useRef(true);

  if (previousAnimationInputRef.current !== animationInput) {
    // New animation cycle: capture exactly one frozen starting snapshot.
    previousAnimationInputRef.current = animationInput;
    startValueRef.current = previousValueRef.current;
    // Writes stay blocked until the new cycle acknowledges its t=0 frame.
    isReadyToCommitRef.current = false;
  }

  const syncStepValue = useCallback(
    (stepValue: T, t: number, canCommit: boolean = true) => {
      if (t === 0) {
        /*
         * t=0 is the handshake that says: "the new animation has now rendered its
         * own starting frame". We do not write anything yet; we only allow later
         * in-flight frames to be committed safely.
         */
        isReadyToCommitRef.current = true;
        return;
      }

      if (t === 1) {
        // Keep the frozen snapshot aligned with the fully completed geometry.
        startValueRef.current = stepValue;
      }

      if (t > 0 && isReadyToCommitRef.current && canCommit) {
        /*
         * Commit the latest visible frame so a future interruption can resume from
         * exactly what the user saw on screen most recently.
         */
        // eslint-disable-next-line no-param-reassign
        previousValueRef.current = stepValue;
      }
    },
    [previousValueRef],
  );

  return {
    startValue: startValueRef.current,
    syncStepValue,
  };
}
