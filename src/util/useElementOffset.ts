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
 * Checks whether two ElementOffset values differ by more than `EPS` (1px) in any dimension.
 *
 * @param a - the first ElementOffset to compare
 * @param b - the second ElementOffset to compare
 * @returns true if any dimension differs by more than 1px
 */
function hasSignificantChange(a: ElementOffset, b: ElementOffset): boolean {
  return (
    Math.abs(a.height - b.height) > EPS ||
    Math.abs(a.left - b.left) > EPS ||
    Math.abs(a.top - b.top) > EPS ||
    Math.abs(a.width - b.width) > EPS
  );
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
 * Use this to listen to element layout changes.
 *
 * Very useful for reading actual sizes of DOM elements relative to the viewport.
 *
 * Uses ResizeObserver to automatically detect size changes of the observed element.
 *
 * @param extraDependencies use this to trigger new DOM dimensions read when any of these change. Good for things like payload and label, that will re-render something down in the children array, but you want to read the layout box of a parent.
 * @returns [lastElementOffset, updateElementOffset] most recent value, and setter. Pass the setter to a DOM element ref like this: `<div ref={updateElementOffset}>`
 */
export function useElementOffset(extraDependencies: ReadonlyArray<unknown> = []): [ElementOffset, SetElementOffset] {
  const [lastBoundingBox, setLastBoundingBox] = useState<ElementOffset>({ height: 0, left: 0, top: 0, width: 0 });
  const observerRef = useRef<ResizeObserver | null>(null);
  const lastBoundingBoxRef = useRef(lastBoundingBox);
  lastBoundingBoxRef.current = lastBoundingBox;

  const updateBoundingBox = useCallback(
    (node: HTMLElement | null) => {
      // Disconnect any previously active ResizeObserver
      if (observerRef.current != null) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }

      if (node != null) {
        // Measure immediately on ref attach
        const box = readElementOffset(node);
        if (hasSignificantChange(box, lastBoundingBoxRef.current)) {
          setLastBoundingBox(box);
        }

        // Set up ResizeObserver for future size changes
        if (typeof ResizeObserver !== 'undefined') {
          const observer = new ResizeObserver(() => {
            const newBox = readElementOffset(node);
            if (hasSignificantChange(newBox, lastBoundingBoxRef.current)) {
              setLastBoundingBox(newBox);
            }
          });
          observer.observe(node);
          observerRef.current = observer;
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...extraDependencies],
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return [lastBoundingBox, updateBoundingBox];
}
