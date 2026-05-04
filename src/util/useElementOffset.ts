import { useCallback, useRef, useState } from 'react';

const EPS = 1;

/**
 * Stores DOMRect dimensions from `getBoundingClientRect()`.
 *
 * These values are viewport-relative and may be fractional, matching DOMRect semantics.
 */
export type ElementOffset = {
  /**
   * Element border-box height in CSS pixels, from `DOMRect.height`.
   */
  height: number;
  /**
   * Distance in CSS pixels from the viewport's left edge to the element's border-box left edge, from `DOMRect.left`.
   */
  left: number;
  /**
   * Distance in CSS pixels from the viewport's top edge to the element's border-box top edge, from `DOMRect.top`.
   */
  top: number;
  /**
   * Element border-box width in CSS pixels, from `DOMRect.width`.
   */
  width: number;
};

export type SetElementOffset = (node: HTMLElement | null) => void;

export function hasElementOffsetChanged(previous: ElementOffset, next: ElementOffset, epsilon: number): boolean {
  return (
    Math.abs(next.height - previous.height) > epsilon ||
    Math.abs(next.left - previous.left) > epsilon ||
    Math.abs(next.top - previous.top) > epsilon ||
    Math.abs(next.width - previous.width) > epsilon
  );
}

/**
 * Use this to listen to element layout changes.
 *
 * Very useful for reading actual sizes of DOM elements relative to the viewport.
 *
 * @param extraDependencies use this to trigger new DOM dimensions read when any of these change. Good for things like payload and label, that will re-render something down in the children array, but you want to read the layout box of a parent.
 * @returns [lastElementOffset, updateElementOffset] most recent value, and setter. Pass the setter to a DOM element ref like this: `<div ref={updateElementOffset}>`
 */
export function useElementOffset(extraDependencies: ReadonlyArray<unknown> = []): [ElementOffset, SetElementOffset] {
  const [lastBoundingBox, setLastBoundingBox] = useState<ElementOffset>({ height: 0, left: 0, top: 0, width: 0 });
  const observerRef = useRef<ResizeObserver | null>(null);

  const updateBoundingBox = useCallback(
    (node: HTMLElement | null) => {
      observerRef.current?.disconnect();
      observerRef.current = null;

      if (node != null) {
        const updateBox = () => {
          const rect = node.getBoundingClientRect();
          const box: ElementOffset = {
            height: rect.height,
            left: rect.left,
            top: rect.top,
            width: rect.width,
          };
          setLastBoundingBox(previousBoundingBox =>
            hasElementOffsetChanged(previousBoundingBox, box, EPS) ? box : previousBoundingBox,
          );
        };

        updateBox();

        if (typeof ResizeObserver !== 'undefined') {
          observerRef.current = new ResizeObserver(updateBox);
          observerRef.current.observe(node);
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...extraDependencies],
  );
  return [lastBoundingBox, updateBoundingBox];
}
