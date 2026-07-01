import * as React from 'react';
import { MutableRefObject, ReactNode, useCallback, useState } from 'react';
import { JavascriptAnimate } from './JavascriptAnimate';
import { EasingInput } from './easing';
import { useAnimationId } from '../util/useAnimationId';
import { AnimationItem, AnimationMatchByProp, matchAnimationItems, matchByIndex } from './matchBy';
import { useAnimationStartSnapshot } from './useAnimationStartSnapshot';
import { CartesianLayout, PolarLayout } from '../util/types';
import { useAppSelector } from '../state/hooks';
import { selectIsZoomed } from '../state/selectors/zoomSelectors';

/**
 * Hook that tracks animation state and provides callbacks for animation start/end.
 *
 * @param onAnimationStart optional callback to call when animation starts
 * @param onAnimationEnd optional callback to call when animation ends
 */
export function useAnimationCallbacks(
  onAnimationStart?: () => void,
  onAnimationEnd?: () => void,
): {
  isAnimating: boolean;
  handleAnimationStart: () => void;
  handleAnimationEnd: () => void;
} {
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
 * A function that interpolates animation items at a given time.
 * This function receives an array of changes, and must "unwrap" them
 * and interpolate appropriate values and return the result which Recharts will then render.
 *
 * @see {@link https://recharts.github.io/en-US/guide/animations/ Animations guide}
 *
 * @param items The tagged animation items describing what changed, or `null` on the very first render
 *   (entrance animation). Each item is self-describing:
 *   - `{ status: 'matched', prev, next }` — interpolate between `prev` and `next`
 *   - `{ status: 'added', next }` — animate in from a computed entry position
 *   - `{ status: 'removed', prev }` — animate out to a computed exit position
 *
 *   At `animationElapsedTime = 1`, removed items should be excluded from the result.
 *
 * @param animationElapsedTime A normalized time value (0 = start, 1 = end)
 * @param layout of the chart, useful for deciding the direction of animation
 * @returns The interpolated items at time animationElapsedTime
 *
 * @since 3.9
 */
export type AnimationInterpolateFn<ItemType, LayoutType extends CartesianLayout | PolarLayout> = (
  items: ReadonlyArray<AnimationItem<ItemType>> | null,
  animationElapsedTime: number,
  layout: LayoutType,
) => ReadonlyArray<ItemType>;

export type AnimatedItemsProps<ItemType, LayoutType extends CartesianLayout | PolarLayout> = {
  /**
   * Opaque input to detect when a new animation should start.
   * When this value changes by reference, a new animation begins.
   */
  animationInput: unknown;
  /** Prefix for the generated animation ID */
  animationIdPrefix: string;
  /** The target items to animate towards */
  items: ReadonlyArray<ItemType> | undefined;
  /** Ref holding previous items — used to detect first render vs data update */
  previousItemsRef: MutableRefObject<ReadonlyArray<ItemType> | null | undefined>;
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
  animationInterpolateFn: AnimationInterpolateFn<ItemType, LayoutType>;
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
  animationMatchBy?: AnimationMatchByProp<ItemType>;
  /**
   * Optional guard for updating previousItemsRef. Default: `(animationElapsedTime) => animationElapsedTime > 0`.
   * Line uses `(animationElapsedTime) => animationElapsedTime > 0 && totalLength > 0` to avoid updating before SVG path is measured.
   */
  shouldUpdatePreviousRef?: (animationElapsedTime: number) => boolean;
  /**
   * Render with interpolated items and animation state.
   *
   * @param items The interpolated items at the current animation frame
   * @param animationElapsedTime The normalized time (0-1), useful for additional animation effects
   * @param isEntrance Whether this is the first render (entrance animation) or a data update animation.
   *   `true` when `prevItems` was `null` — meaning the component just appeared for the first time.
   *   `false` when animating between two datasets.
   */
  children: (items: ReadonlyArray<ItemType>, animationElapsedTime: number, isEntrance: boolean) => ReactNode;
  layout: LayoutType;
};

/**
 * A reusable animation wrapper for array-based chart data.
 *
 * Encapsulates the common animation pattern shared by Bar, Scatter, Funnel, Pie,
 * Radar, RadialBar, Area, and Line:
 * 1. Track previous items in a ref
 * 2. Wrap in JavascriptAnimate
 * 3. Update ref when animationElapsedTime > 0
 *
 * @since 3.9
 */
export function AnimatedItems<ItemType, LayoutType extends CartesianLayout | PolarLayout>(
  props: AnimatedItemsProps<ItemType, LayoutType>,
) {
  const {
    animationInput,
    animationIdPrefix,
    items,
    previousItemsRef,
    isAnimationActive: isAnimationActiveProp,
    animationBegin,
    animationDuration,
    animationEasing,
    onAnimationStart,
    onAnimationEnd,
    animationInterpolateFn,
    animationMatchBy,
    shouldUpdatePreviousRef,
    children,
    layout,
  } = props;

  /*
   * While the chart is zoomed/panned the items' positions change on every viewport update; animating
   * each of those would make panning janky and slow. So we suppress item animation whenever the
   * chart is zoomed, and restore the requested behavior once it is fully zoomed out.
   */
  const isZoomed = useAppSelector(selectIsZoomed) ?? false;
  const isAnimationActive = isZoomed ? false : isAnimationActiveProp;

  const animationId = useAnimationId(animationInput, animationIdPrefix);
  const animationStartItems = useAnimationStartSnapshot(animationId, previousItemsRef);
  const rawPrevItems = animationStartItems.startValue ?? null;
  const animationItems: ReadonlyArray<AnimationItem<ItemType>> | null = matchAnimationItems(
    rawPrevItems,
    items,
    animationMatchBy ?? matchByIndex,
  );

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
      {(animationElapsedTime: number) => {
        const isEntrance = rawPrevItems == null;
        const stepData = items == null ? items : animationInterpolateFn(animationItems, animationElapsedTime, layout);
        const canUpdate = shouldUpdatePreviousRef
          ? shouldUpdatePreviousRef(animationElapsedTime)
          : animationElapsedTime > 0;
        animationStartItems.syncStepValue(stepData, animationElapsedTime, canUpdate);
        if (stepData == null) {
          return null;
        }
        return children(stepData, animationElapsedTime, isEntrance);
      }}
    </JavascriptAnimate>
  );
}
