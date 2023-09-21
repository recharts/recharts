import { getAngledRectangleWidth } from './CartesianUtils';
import { getEveryNthWithCondition } from './getEveryNthWithCondition';
import { Size, CartesianViewBox, CartesianTickItem } from './types';

export function getAngledTickWidth(contentSize: Size, unitSize: Size, angle: number) {
  const size = { width: contentSize.width + unitSize.width, height: contentSize.height + unitSize.height };

  return getAngledRectangleWidth(size, angle);
}

export function getTickBoundaries(viewBox: CartesianViewBox, sign: number, sizeKey: string) {
  const isWidth = sizeKey === 'width';
  const { x, y, width, height } = viewBox;
  if (sign === 1) {
    return {
      start: isWidth ? x : y,
      end: isWidth ? x + width : y + height,
    };
  }
  return {
    start: isWidth ? x + width : y + height,
    end: isWidth ? x : y,
  };
}

export function isVisible(sign: number, tickPosition: number, size: number, start: number, end: number): boolean {
  return sign * (tickPosition - (sign * size) / 2 - start) >= 0 && sign * (tickPosition + (sign * size) / 2 - end) <= 0;
}

/**
 * Given an array of ticks, find N, the lowest possible number for which every
 * nTH tick in the ticks array isShow == true and return the array of every nTh tick.
 * @param {CartesianTickItem[]} ticks An array of CartesianTickItem with the
 * information whether they can be shown without overlapping with their neighbour isShow.
 * @returns {CartesianTickItem[]} Every nTh tick in an array.
 */
export function getEveryNThTick(ticks: CartesianTickItem[]) {
  let N = 1;
  let previous = getEveryNthWithCondition(ticks, N, tickItem => tickItem.isShow);
  while (N <= ticks.length) {
    if (previous !== undefined) {
      return previous;
    }
    N++;
    previous = getEveryNthWithCondition(ticks, N, tickItem => tickItem.isShow);
  }

  return ticks.slice(0, 1);
}

export function getNumberIntervalTicks(ticks: CartesianTickItem[], interval: number) {
  return getEveryNthWithCondition(ticks, interval + 1);
}
