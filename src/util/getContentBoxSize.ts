import { Size } from './types';

function parsePixels(value: string): number {
  const parsed = parseFloat(value);
  return Number.isNaN(parsed) ? 0 : parsed;
}

/**
 * Measures the layout size of the content box of an element: its size without padding, border, and scrollbar.
 *
 * This is the same box that ResizeObserver reports in `contentRect`,
 * so use this for a first measurement before ResizeObserver reports anything.
 *
 * Unlike `getBoundingClientRect()`, this reads the layout size, which CSS transforms do not affect.
 * A chart that mounts inside a scaled element (for example during an animation) gets its real size.
 *
 * @param element the element to measure
 * @returns the width and height of the content box, in whole pixels
 */
export function getContentBoxSize(element: HTMLElement): Size {
  // clientWidth and clientHeight include padding, but not border or scrollbar
  const computedStyle = window.getComputedStyle(element);
  const horizontalPadding = parsePixels(computedStyle.paddingLeft) + parsePixels(computedStyle.paddingRight);
  const verticalPadding = parsePixels(computedStyle.paddingTop) + parsePixels(computedStyle.paddingBottom);
  return {
    width: Math.max(0, element.clientWidth - horizontalPadding),
    height: Math.max(0, element.clientHeight - verticalPadding),
  };
}
