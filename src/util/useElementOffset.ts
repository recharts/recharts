import { useCallback, useEffect, useRef, useState } from 'react';

const EPS = 1;

/**
 * TODO this documentation does not reflect what this hook is doing, update it.
 * Stores the `offsetHeight`, `offsetLeft`, `offsetTop`, and `offsetWidth` of a DOM element.
 */
export type ElementOffset = {
  /**
   * Height of an element, including vertical padding and borders, as an integer.
   *
   * Typically, offsetHeight is a measurement in pixels of the element's CSS height, including any borders, padding, and horizontal scrollbars (if rendered). It does not include the height of pseudo-elements such as ::before or ::after
   *
   * https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetHeight
   */
  height: number;
  /**
   * Number of pixels that the upper left corner of the current element is offset to the left within the HTMLElement.offsetParent node
   *
   * https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetLeft
   */
  left: number;
  /**
   * Distance from the outer border of the current element (including its margin) to the top padding edge of the offsetParent, the closest positioned ancestor element.
   *
   * https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetTop
   */
  top: number;
  /**
   * Layout width of an element as an integer.
   *
   * Typically, offsetWidth is a measurement in pixels of the element's CSS width, including any borders, padding, and vertical scrollbars (if rendered). It does not include the width of pseudo-elements such as ::before or ::after.
   *
   * https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetWidth
   */
  width: number;
};

export type SetElementOffset = (node: HTMLElement | null) => void;

function hasSignificantChange(a: ElementOffset, b: ElementOffset): boolean {
  return (
    Math.abs(a.height - b.height) > EPS ||
    Math.abs(a.left - b.left) > EPS ||
    Math.abs(a.top - b.top) > EPS ||
    Math.abs(a.width - b.width) > EPS
  );
}

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
        if (hasSignificantChange(box, lastBoundingBox)) {
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
    [lastBoundingBox.width, lastBoundingBox.height, lastBoundingBox.top, lastBoundingBox.left, ...extraDependencies],
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return [lastBoundingBox, updateBoundingBox];
}
