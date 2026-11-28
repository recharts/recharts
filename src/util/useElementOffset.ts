/**
 * Dimensions and position of a DOM element.
 *
 * Recharts measures elements with `useElementSize` now, which only reports the size.
 * This type stays because the Legend `onBBoxUpdate` prop uses it.
 */
export type ElementOffset = {
  /**
   * Height of the element, including padding and border.
   */
  height: number;
  /**
   * Distance from the left edge of the viewport to the left edge of the element.
   */
  left: number;
  /**
   * Distance from the top edge of the viewport to the top edge of the element.
   */
  top: number;
  /**
   * Width of the element, including padding and border.
   */
  width: number;
};
