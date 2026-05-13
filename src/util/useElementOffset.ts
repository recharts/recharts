import { useCallback, useState } from 'react';

const EPS = 1;

/**
 * Stores the dimensions and position of a DOM element relative to the viewport.
 */
export type ElementOffset = {
  /**
   * Height of an element, including vertical padding and borders.
   *
   * https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
   */
  height: number;
  /**
   * The x-coordinate of the element's origin relative to the viewport.
   *
   * https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
   */
  left: number;
  /**
   * The y-coordinate of the element's origin relative to the viewport.
   *
   * https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
   */
  top: number;
  /**
   * Layout width of an element.
   *
   * https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
   */
  width: number;
};

export type SetElementOffset = (node: HTMLElement | null) => void;

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
  const updateBoundingBox = useCallback(
    (node: HTMLElement | null) => {
      if (node != null) {
        const rect = node.getBoundingClientRect();
        const box: ElementOffset = {
          height: rect.height,
          left: rect.left,
          top: rect.top,
          width: rect.width,
        };
        if (
          Math.abs(box.height - lastBoundingBox.height) > EPS ||
          Math.abs(box.left - lastBoundingBox.left) > EPS ||
          Math.abs(box.top - lastBoundingBox.top) > EPS ||
          Math.abs(box.width - lastBoundingBox.width) > EPS
        ) {
          setLastBoundingBox({ height: box.height, left: box.left, top: box.top, width: box.width });
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [lastBoundingBox.width, lastBoundingBox.height, lastBoundingBox.top, lastBoundingBox.left, ...extraDependencies],
  );
  return [lastBoundingBox, updateBoundingBox];
}
