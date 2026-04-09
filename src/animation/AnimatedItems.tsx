import * as React from 'react';
import { MutableRefObject, ReactNode, useCallback, useState } from 'react';
import { JavascriptAnimate } from './JavascriptAnimate';
import { EasingInput } from './easing';
import { useAnimationId } from '../util/useAnimationId';
import { alignItems, AnimationMatchByProp, matchByIndex } from './matchBy';

/**
 * Hook that tracks whether an animation is in progress and wraps
 * optional user-provided onAnimationStart/onAnimationEnd callbacks.
 *
 * Used by all animated chart components (Bar, Scatter, Funnel, Pie,
 * Radar, RadialBar, Area, Line) to control label visibility during animation.
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
 * A function that interpolates between previous and next items at a given time.
 *
 * @param prevItems The items from the previous animation frame, or null on first render
 * @param nextItems The target items to animate towards
 * @param t A normalized time value (0 = start, 1 = end)
 * @returns The interpolated items at time t
 */
export type AnimationInterpolateFn<T> = (
  prevItems: ReadonlyArray<T> | null,
  nextItems: ReadonlyArray<T>,
  t: number,
) => ReadonlyArray<T>;

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
   */
  children: (items: ReadonlyArray<T>, t: number) => ReactNode;
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
  // Align previous items so that prevItems[i] corresponds to items[i]
  // according to the chosen matching strategy (stretch, append, or key-based).
  const prevItems =
    rawPrevItems && items ? alignItems(rawPrevItems, items, animationMatchBy ?? matchByIndex) : rawPrevItems;

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
        const stepData = items == null ? items : animationInterpolateFn(prevItems, items, t);
        const canUpdate = shouldUpdatePreviousRef ? shouldUpdatePreviousRef(t) : t > 0;
        if (canUpdate) {
          previousItemsRef.current = stepData;
        }
        if (stepData == null) {
          return null;
        }
        return children(stepData, t);
      }}
    </JavascriptAnimate>
  );
}
