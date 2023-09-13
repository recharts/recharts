import _ from 'lodash';
import { CartesianTickItem, CartesianViewBox, Size } from '../util/types';
import { getStringSize } from '../util/DOMUtils';
import { getEveryNthWithCondition } from '../util/getEveryNthWithCondition';
import { getAngledRectangleWidth } from '../util/CartesianUtils';
import { TickFormatter } from '../cartesian/CartesianAxis';

export function getInitialStartAndEnd(viewBox: CartesianViewBox, sign: number, sizeKey: string) {
  let start, end;

  const { x, y, width, height } = viewBox;
  if (sign === 1) {
    start = sizeKey === 'width' ? x : y;
    end = sizeKey === 'width' ? x + width : y + height;
  } else {
    start = sizeKey === 'width' ? x + width : y + height;
    end = sizeKey === 'width' ? x : y;
  }
  return { end, start };
}
export function getSizeOfTick(
  tickFormatter: TickFormatter,
  entry: CartesianTickItem,
  index: number,
  sizeKey: 'width' | 'height',
  fontSize: string | number,
  letterSpacing: string | number,
  unitSize: Size,
  angle: number,
) {
  const content = _.isFunction(tickFormatter) ? tickFormatter(entry.value, index) : entry.value;
  // Recharts only supports angles when sizeKey === 'width'
  return sizeKey === 'width'
    ? getAngledTickWidth(getStringSize(content, { fontSize, letterSpacing }), unitSize, angle)
    : getStringSize(content, { fontSize, letterSpacing })[sizeKey];
}

export function doesTickFitInBetweenStartAndEnd(
  sign: number,
  tickPosition: number,
  size: number,
  start: number,
  end: number,
): boolean {
  console.log('check start', sign * (tickPosition - (sign * size) / 2 - start) >= 0);
  console.log('check end', sign * (tickPosition + (sign * size) / 2 - end) <= 0);
  console.log({
    sign,
    tickPosition,
    size,
    start,
    end,
  });
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

export function getAngledTickWidth(contentSize: Size, unitSize: Size, angle: number) {
  const size = { width: contentSize.width + unitSize.width, height: contentSize.height + unitSize.height };

  return getAngledRectangleWidth(size, angle);
}
