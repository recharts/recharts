import { useCallback, useEffect, useRef, useState } from 'react';
import throttle from 'es-toolkit/compat/throttle';
import { Size } from './types';

/**
 * Which box of an element to measure.
 *
 * - `content-box`: without padding, border, and scrollbar. A chart renders inside this box.
 * - `border-box`: including padding and border. This is how much space an element takes up, for example a Legend.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing}
 */
export type MeasuredBox = 'content-box' | 'border-box';

function parsePixels(value: string): number {
  const parsed = parseFloat(value);
  return Number.isNaN(parsed) ? 0 : parsed;
}

/**
 * Measures the layout size of an element.
 *
 * Unlike `getBoundingClientRect()`, this reads the layout size, which CSS transforms do not affect.
 * An element that mounts inside a scaled parent (for example during an animation) gets its real size,
 * and the size stays right after the transform goes away, even though ResizeObserver does not fire then.
 *
 * @param element the element to measure
 * @param box which box to measure
 * @returns the width and height of the box
 */
export function getElementSize(element: HTMLElement, box: MeasuredBox): Size {
  if (box === 'border-box') {
    // offsetWidth and offsetHeight include padding and border
    return { width: element.offsetWidth, height: element.offsetHeight };
  }
  // clientWidth and clientHeight include padding, but not border or scrollbar
  const computedStyle = window.getComputedStyle(element);
  const horizontalPadding = parsePixels(computedStyle.paddingLeft) + parsePixels(computedStyle.paddingRight);
  const verticalPadding = parsePixels(computedStyle.paddingTop) + parsePixels(computedStyle.paddingBottom);
  return {
    width: Math.max(0, element.clientWidth - horizontalPadding),
    height: Math.max(0, element.clientHeight - verticalPadding),
  };
}

export type UseElementSizeOptions = {
  /**
   * Which box of the element to measure.
   */
  box: MeasuredBox;
  /**
   * The size to return before the first measurement, and when the element is not measured at all.
   * Only the value from the first render is used.
   */
  initialSize: Size;
  /**
   * If true, measures again whenever ResizeObserver reports that the element changed size.
   * If false, measures once when the element attaches.
   */
  observe: boolean;
  /**
   * Only applies when `observe` is true. If ResizeObserver is not available, for example in jsdom,
   * true measures once when the element attaches, and false keeps `initialSize`.
   * @default true
   */
  measureWithoutResizeObserver?: boolean;
  /**
   * Measures at most once in this many milliseconds after a ResizeObserver notification. 0 measures on every one.
   * @default 0
   */
  throttleMs?: number;
  /**
   * Ignores size changes of this many pixels or fewer. Use this to break loops where the size of an element
   * changes the layout, which changes the size of the element again.
   * @default 0
   */
  threshold?: number;
  /**
   * Measures again when any of these change. Use this for values that change the content of the element,
   * when the content may change size without the element itself resizing.
   */
  extraDependencies?: ReadonlyArray<unknown>;
  /**
   * Called with the measured size after every ResizeObserver notification, including the first one.
   */
  onResize?: (size: Size) => void;
};

/**
 * Callback ref setter returned by {@link useElementSize}.
 *
 * Pass this to a DOM element's `ref` prop to start measuring it.
 *
 * @param node - the DOM element to measure, or `null` when the element unmounts
 */
export type SetMeasuredElement = (node: HTMLElement | null) => void;

function hasSignificantChange(previous: Size, next: Size, threshold: number): boolean {
  return Math.abs(previous.width - next.width) > threshold || Math.abs(previous.height - next.height) > threshold;
}

/**
 * Measures the layout size of a DOM element, and optionally keeps measuring it as it resizes.
 *
 * Every measurement reads the layout size from the element itself, see {@link getElementSize}.
 * ResizeObserver only tells this hook when to measure again.
 * The returned size is rounded to whole pixels.
 *
 * @param options see {@link UseElementSizeOptions}
 * @returns [size, setMeasuredElement]. Pass the setter to a DOM element ref like this: `<div ref={setMeasuredElement}>`
 */
export function useElementSize(options: UseElementSizeOptions): [Size, SetMeasuredElement] {
  const {
    box,
    initialSize,
    observe,
    measureWithoutResizeObserver = true,
    throttleMs = 0,
    threshold = 0,
    extraDependencies = [],
    onResize,
  } = options;
  const [size, setSize] = useState<Size>(initialSize);
  const elementRef = useRef<HTMLElement | null>(null);
  const stopObservingRef = useRef<(() => void) | null>(null);
  /*
   * A ref keeps the ResizeObserver from being re-created when the onResize function changes.
   * The ref is updated on every render, so the latest onResize function is always called.
   */
  const onResizeRef = useRef(onResize);
  onResizeRef.current = onResize;

  const shouldMeasure = !observe || measureWithoutResizeObserver || typeof ResizeObserver !== 'undefined';

  const measure = useCallback((): Size | null => {
    const node = elementRef.current;
    if (node == null) {
      return null;
    }
    const measured = getElementSize(node, box);
    const rounded: Size = { width: Math.round(measured.width), height: Math.round(measured.height) };
    setSize(previous => (hasSignificantChange(previous, rounded, threshold) ? rounded : previous));
    return rounded;
  }, [box, threshold]);

  const setMeasuredElement = useCallback(
    (node: HTMLElement | null) => {
      elementRef.current = node;

      stopObservingRef.current?.();
      stopObservingRef.current = null;

      if (node == null || !shouldMeasure) {
        return;
      }

      measure();

      if (!observe || typeof ResizeObserver === 'undefined') {
        return;
      }
      const onObserved = () => {
        const measured = measure();
        if (measured != null) {
          onResizeRef.current?.(measured);
        }
      };
      const callback = throttleMs > 0 ? throttle(onObserved, throttleMs, { leading: false, trailing: true }) : null;
      const observer = new ResizeObserver(callback ?? onObserved);
      observer.observe(node);
      stopObservingRef.current = () => {
        observer.disconnect();
        callback?.cancel();
      };
    },
    [measure, observe, shouldMeasure, throttleMs],
  );

  useEffect(() => {
    if (observe && shouldMeasure) {
      measure();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [measure, observe, shouldMeasure, ...extraDependencies]);

  return [size, setMeasuredElement];
}
