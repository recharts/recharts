import * as React from 'react';
import { MutableRefObject, ReactNode, useCallback, useState } from 'react';
import { JavascriptAnimate } from './JavascriptAnimate';
import { EasingInput } from './easing';
import { useAnimationId } from '../util/useAnimationId';
import { alignItemsWithRemovals, AnimationMatchByProp, matchByIndex } from './matchBy';

/**
 * Hook that tracks whether an animation is in progress and wraps
 * optional user-provided onAnimationStart/onAnimationEnd callbacks.
 *
 * Used by all animated chart components (Bar, Scatter, Funnel, Pie,
 * Radar, RadialBar, Area, Line) to control label visibility during animation.
 */
/**
 * Hook that tracks animation state and provides callbacks for animation start/end.
 *
 * @param onAnimationStart optional callback to call when animation starts
 * @param onAnimationEnd optional callback to call when animation ends
 */
export function useAnimationCallbacks(onAnimationStart?: () => void, onAnimationEnd?: () => void) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAnimationStart = useCallback(() => {
    if (typeof onAnimationStart === 'function') {
      onAnimationStart();
    }
    setIsAnimating(true);
  }, [onAnimationStart]);

  const handleAnimationEnd = useCallback(() => {
    if (typeof onAnimationEnd === 'function') {
      onAnimationEnd();
    }
    setIsAnimating(false);
  }, [onAnimationEnd]);

  return { isAnimating, handleAnimationStart, handleAnimationEnd };
}

/**
 * A tagged union describing the status of an item during animation.
 *
 * - `matched`: item exists in both previous and next data — interpolate between positions
 * - `added`: item is new (no previous position) — animate in
 * - `removed`: item was in previous data but not in next — animate out
 */
export type AnimationItem<T> =
  | { readonly status: 'matched'; readonly prev: T; readonly next: T }
  | { readonly status: 'added'; readonly next: T }
  | { readonly status: 'removed'; readonly prev: T };

/**
 * A function that interpolates animation items at a given time.
 *
 * @param items The tagged animation items describing what changed, or `null` on the very first render
 *   (entrance animation). Each item is self-describing:
 *   - `{ status: 'matched', prev, next }` — interpolate between `prev` and `next`
 *   - `{ status: 'added', next }` — animate in from a computed entry position
 *   - `{ status: 'removed', prev }` — animate out to a computed exit position
 *
 *   At `t = 1`, removed items should be excluded from the result.
 *
 * @param t A normalized time value (0 = start, 1 = end)
 * @returns The interpolated items at time t
 */
export type AnimationInterpolateFn<T> = (items: ReadonlyArray<AnimationItem<T>> | null, t: number) => ReadonlyArray<T>;

export type AnimatedItemsProps<T> = {
  /**
   * Opaque input to detect when a new animation should start.
   * When this value changes by reference, a new animation begins.
   */
  animationInput: unknown;
  /** Prefix for the generated animation ID */
  animationIdPrefix: string;
  /** The target items to animate towards */
  items: ReadonlyArray<T> | undefined;
  /** Ref holding previous items — used to detect first render vs data update */
  previousItemsRef: MutableRefObject<ReadonlyArray<T> | null | undefined>;
  /** Whether animation is active */
  isAnimationActive: boolean | 'auto';
  /** Delay in ms before animation begins */
  animationBegin: number;
  /** Duration of animation in ms */
  animationDuration: number;
  /** Easing function or named easing */
  animationEasing: EasingInput;
  /** Called when the animation begins */
  onAnimationStart?: () => void;
  /** Called when the animation completes */
  onAnimationEnd?: () => void;
  /** The interpolation function — either the default or user-provided */
  animationInterpolateFn: AnimationInterpolateFn<T>;
  /**
   * Strategy for matching previous items to next items during animation.
   *
   * - `matchByIndex` (default): match by array index with proportional stretching
   * - `matchAppend`: match 1:1 by index, extras animate in as new
   * - A function `(item, index) => key`: match by the returned key value
   *
   * Use `matchByDataKey('someKey')` for time-series or streaming charts
   * where items should be matched by their data identity rather than position.
   */
  animationMatchBy?: AnimationMatchByProp<T>;
  /**
   * Optional guard for updating previousItemsRef. Default: `(t) => t > 0`.
   * Line uses `(t) => t > 0 && totalLength > 0` to avoid updating before SVG path is measured.
   */
  shouldUpdatePreviousRef?: (t: number) => boolean;
  /**
   * Render with interpolated items and animation state.
   *
   * @param items The interpolated items at the current animation frame
   * @param t The normalized time (0-1), useful for additional animation effects
   * @param isEntrance Whether this is the first render (entrance animation) or a data update animation.
   *   `true` when `prevItems` was `null` — meaning the component just appeared for the first time.
   *   `false` when animating between two datasets.
   */
  children: (items: ReadonlyArray<T>, t: number, isEntrance: boolean) => ReactNode;
};

/**
 * A reusable animation wrapper for array-based chart data.
 *
 * Encapsulates the common animation pattern shared by Bar, Scatter, Funnel, Pie,
 * Radar, RadialBar, Area, and Line:
 * 1. Track previous items in a ref
 * 2. Wrap in JavascriptAnimate
 * 3. Update ref when t > 0
 */
export function AnimatedItems<T>(props: AnimatedItemsProps<T>) {
  const {
    animationInput,
    animationIdPrefix,
    items,
    previousItemsRef,
    isAnimationActive,
    animationBegin,
    animationDuration,
    animationEasing,
    onAnimationStart,
    onAnimationEnd,
    animationInterpolateFn,
    animationMatchBy,
    shouldUpdatePreviousRef,
    children,
  } = props;

  const animationId = useAnimationId(animationInput, animationIdPrefix);

  const rawPrevItems = previousItemsRef.current ?? null;
  // Build tagged animation items describing matched, added, and removed items.
  let animationItems: ReadonlyArray<AnimationItem<T>> | null;
  if (rawPrevItems && items) {
    const matchBy = animationMatchBy ?? matchByIndex;
    const { aligned, removed } = alignItemsWithRemovals(rawPrevItems, items, matchBy);
    const tagged: AnimationItem<T>[] = [];
    for (let i = 0; i < items.length; i++) {
      const prev = aligned[i] as T | undefined;
      const next = items[i]!;
      if (prev != null) {
        tagged.push({ status: 'matched', prev, next });
      } else {
        tagged.push({ status: 'added', next });
      }
    }
    for (const prev of removed) {
      tagged.push({ status: 'removed', prev });
    }
    animationItems = tagged;
  } else if (items) {
    // First render or no previous items — all items are "added"
    animationItems = items.map(next => ({ status: 'added' as const, next }));
  } else {
    animationItems = null;
  }

  return (
    <JavascriptAnimate
      animationId={animationId}
      begin={animationBegin}
      duration={animationDuration}
      isActive={isAnimationActive}
      easing={animationEasing}
      onAnimationEnd={onAnimationEnd}
      onAnimationStart={onAnimationStart}
      key={animationId}
    >
      {(t: number) => {
        const isEntrance = rawPrevItems == null;
        // TODO performance; how does the matching work with 10k items? Can we skip interpolation and just jump to final state after some threshold?
        const stepData = items == null ? items : animationInterpolateFn(animationItems, t);
        const canUpdate = shouldUpdatePreviousRef ? shouldUpdatePreviousRef(t) : t > 0;
        if (canUpdate) {
          previousItemsRef.current = stepData;
        }
        if (stepData == null) {
          return null;
        }
        return children(stepData, t, isEntrance);
      }}
    </JavascriptAnimate>
  );
}
