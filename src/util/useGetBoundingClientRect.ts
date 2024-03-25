import { useCallback, useState } from 'react';

const EPS = 1;

export type BoundingBox = {
  width: number;
  height: number;
};
export type SetBoundingBox = (node: HTMLElement | null) => void;

/**
 * Use this to listen to bounding box changes.
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
 *
 * Very useful for reading actual sizes of DOM elements.
 *
 * Be aware that this is difficult to test for. jsdom, by design, returns all zeroes!
 * If you want to write tests check out the utility function `mockGetBoundingClientRect`
 *
 * @param onUpdate this is extra callback that's called with the full DOMRect. Note that this receives different object than the return value.
 * @param extraDependencies use this to trigger new DOM dimensions read when any of these change. Good for things like payload and label, that will re-render something down in the children array, but you want to read the bounding box of a parent.
 * @returns [lastBoundingBox, updateBoundingBox] most recent value, and setter. Pass the setter to a DOM element ref like this: `<div ref={updateBoundingBox}>`
 */
export function useGetBoundingClientRect(
  onUpdate: undefined | ((boundingBox: BoundingBox | null) => void),
  extraDependencies: ReadonlyArray<unknown>,
): [BoundingBox, SetBoundingBox] {
  const [lastBoundingBox, setLastBoundingBox] = useState<BoundingBox>({ width: 0, height: 0 });
  const updateBoundingBox = useCallback(
    (node: HTMLDivElement | null) => {
      if (node != null && node.getBoundingClientRect) {
        const box = node.getBoundingClientRect();
        box.width = node.offsetWidth;
        box.height = node.offsetHeight;
        if (Math.abs(box.width - lastBoundingBox.width) > EPS || Math.abs(box.height - lastBoundingBox.height) > EPS) {
          setLastBoundingBox({ width: box.width, height: box.height });
          if (onUpdate) {
            onUpdate(box);
          }
        }
      }
    },
    [lastBoundingBox.width, lastBoundingBox.height, onUpdate, ...extraDependencies],
  );
  return [lastBoundingBox, updateBoundingBox];
}
