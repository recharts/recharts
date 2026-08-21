import { useCallback, useEffect, useRef, useState } from 'react';

const EPS = 1;

/**
 * Stores the dimensions and position of a DOM element as returned by `getBoundingClientRect()`.
 *
 * Values are viewport-relative and may be fractional (subpixel precision).
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect}
 */
export type ElementOffset = {
  /**
   * Height of an element as returned by `getBoundingClientRect()`.
   * This is the CSS height including padding and border, and may be a fractional value.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMRect/height}
   */
  height: number;
  /**
   * Distance from the left edge of the viewport to the left edge of the element,
   * as returned by `getBoundingClientRect()`.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMRect/left}
   */
  left: number;
  /**
   * Distance from the top edge of the viewport to the top edge of the element,
   * as returned by `getBoundingClientRect()`.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMRect/top}
   */
  top: number;
  /**
   * Width of an element as returned by `getBoundingClientRect()`.
   * This is the CSS width including padding and border, and may be a fractional value.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMRect/width}
   */
  width: number;
};

/**
 * Callback ref setter returned by {@link useElementOffset}.
 *
 * Pass this to a DOM element's `ref` prop to start observing its layout.
 *
 * @param node - the DOM element to observe, or `null` when the element unmounts
 */
export type SetElementOffset = (node: HTMLElement | null) => void;

/**
 * Checks whether two ElementOffset sizes differ by more than `EPS` (1px).
 *
 * @param a - the first ElementOffset to compare
 * @param b - the second ElementOffset to compare
 * @returns true if width or height differs by more than 1px
 */
function hasSignificantSizeChange(a: ElementOffset, b: ElementOffset): boolean {
  return Math.abs(a.height - b.height) > EPS || Math.abs(a.width - b.width) > EPS;
}

/**
 * Reads the current bounding box of a DOM element using `getBoundingClientRect()`.
 *
 * @param node - the DOM element to measure
 * @returns an ElementOffset with the element's current dimensions and viewport-relative position
 */
function readElementOffset(node: HTMLElement): ElementOffset {
  const rect = node.getBoundingClientRect();
  return {
    height: rect.height,
    left: rect.left,
    top: rect.top,
    width: rect.width,
  };
}

/**
 * Use this to listen to element size changes.
 *
 * Very useful for reading actual sizes of DOM elements. The returned position is a snapshot from the last size change;
 * position changes alone do not update the returned value.
 *
 * Uses ResizeObserver to automatically detect size changes of the observed element.
 *
 * @param extraDependencies use this to trigger new DOM dimensions read when any of these change. Good for things like payload and label, that will re-render something down in the children array, but you want to read the layout box of a parent.
 * @returns [lastElementOffset, updateElementOffset] most recent value, and setter. Pass the setter to a DOM element ref like this: `<div ref={updateElementOffset}>`
 */
export function useElementOffset(extraDependencies: ReadonlyArray<unknown> = []): [ElementOffset, SetElementOffset] {
  const [lastBoundingBox, setLastBoundingBox] = useState<ElementOffset>({ height: 0, left: 0, top: 0, width: 0 });
  const observerRef = useRef<ResizeObserver | null>(null);
  const elementRef = useRef<HTMLElement | null>(null);
  const lastBoundingBoxRef = useRef(lastBoundingBox);

  const measureElement = useCallback(() => {
    const node = elementRef.current;
    if (node == null) {
      return;
    }

    const box = readElementOffset(node);
    if (hasSignificantSizeChange(box, lastBoundingBoxRef.current)) {
      lastBoundingBoxRef.current = box;
      setLastBoundingBox(box);
    }
  }, []);

  const updateBoundingBox = useCallback(
    (node: HTMLElement | null) => {
      elementRef.current = node;

      // Disconnect any previously active ResizeObserver
      observerRef.current?.disconnect();
      observerRef.current = null;

      if (node == null) {
        return;
      }

      // Measure immediately on ref attach
      measureElement();

      // Set up ResizeObserver for future size changes
      if (typeof ResizeObserver !== 'undefined') {
        const observer = new ResizeObserver(measureElement);
        observer.observe(node);
        observerRef.current = observer;
      }
    },
    [measureElement],
  );

  useEffect(measureElement, [measureElement, ...extraDependencies]);

  return [lastBoundingBox, updateBoundingBox];
}
