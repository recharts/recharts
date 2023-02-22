import _ from 'lodash';
import { mathSign, isNumber } from '../util/DataUtils';
import { getStringSize } from '../util/DOMUtils';
import { Props as CartesianAxisProps } from './CartesianAxis';
import { TickItem } from '../util/types';
import { Global } from '../util/Global';

export interface CartesianTickItem extends TickItem {
  tickCoord?: number;
  tickSize?: number;
  isShow?: boolean;
}

/**
 * Given an array and a number N, return a new array which contains every nTh
 * element of the input array.
 * @param {any[]} array An input array.
 * @param {integer} n A number
 * @returns {any[]} The result array of the same type as the input array.
 */
function getEveryNth<Type>(array: Type[], n: number): Type[] {
  if (n === 1) {
    return array;
  }
  const result = [];
  for (let i = 0; i < array.length; i += n) {
    result.push(array[i]);
  }
  return result;
}

/**
 * Given an array of ticks, find N, the lowest possible number for which every
 * nTH tick in the ticks array isShow == true
 * @param {CartesianTickItem[]} ticks An array of CartesianTickItem with the
 * information whether they can be shown without overlapping with their neighbour isShow
 * @returns {CartesianTickItem[]} result
 */
function getEveryNThTick(ticks: CartesianTickItem[]) {
  let N = 1;
  let previous: CartesianTickItem[] = [];
  while (N < ticks.length) {
    const everyNthTick = getEveryNth(ticks, N);

    const visibleTicks = everyNthTick.reduce((previousValue, currentValue) => {
      if (currentValue.isShow === true) {
        return previousValue + 1;
      }
      return previousValue;
    }, 0);

    if (visibleTicks === everyNthTick.length) {
      break;
    }
    previous = everyNthTick;
    N++;
  }
  return previous;
}

function getNumberIntervalTicks(ticks: CartesianTickItem[], interval: number) {
  return getEveryNth(ticks, interval + 1);
}

function getTicksEnd({
  ticks,
  tickFormatter,
  viewBox,
  orientation,
  minTickGap,
  unit,
  fontSize,
  letterSpacing,
}: Omit<CartesianAxisProps, 'tickMargin'>): CartesianTickItem[] {
  const { x, y, width, height } = viewBox;
  const sizeKey = orientation === 'top' || orientation === 'bottom' ? 'width' : 'height';
  // we need add the width of 'unit' only when sizeKey === 'width'
  const unitSize = unit && sizeKey === 'width' ? getStringSize(unit, { fontSize, letterSpacing })[sizeKey] : 0;
  const result = (ticks || []).slice();
  const len = result.length;
  const sign = len >= 2 ? mathSign(result[1].coordinate - result[0].coordinate) : 1;

  let start, end;

  if (sign === 1) {
    start = sizeKey === 'width' ? x : y;
    end = sizeKey === 'width' ? x + width : y + height;
  } else {
    start = sizeKey === 'width' ? x + width : y + height;
    end = sizeKey === 'width' ? x : y;
  }

  for (let i = len - 1; i >= 0; i--) {
    let entry = result[i];
    const position = len - i - 1;
    const content = _.isFunction(tickFormatter) ? tickFormatter(entry.value, position) : entry.value;
    const size = getStringSize(content, { fontSize, letterSpacing })[sizeKey] + unitSize;

    if (i === len - 1) {
      const gap = sign * (entry.coordinate + (sign * size) / 2 - end);
      result[i] = entry = {
        ...entry,
        tickCoord: gap > 0 ? entry.coordinate - gap * sign : entry.coordinate,
      };
    } else {
      result[i] = entry = { ...entry, tickCoord: entry.coordinate };
    }

    const isShow =
      sign * (entry.tickCoord - (sign * size) / 2 - start) >= 0 &&
      sign * (entry.tickCoord + (sign * size) / 2 - end) <= 0;

    if (isShow) {
      end = entry.tickCoord - sign * (size / 2 + minTickGap);
      result[i] = { ...entry, isShow: true };
    }
  }

  return result.filter(entry => entry.isShow);
}

function getTicksStart(
  {
    ticks,
    tickFormatter,
    viewBox,
    orientation,
    minTickGap,
    unit,
    fontSize,
    letterSpacing,
  }: Omit<CartesianAxisProps, 'tickMargin'>,
  preserveEnd?: boolean,
): CartesianTickItem[] {
  const { x, y, width, height } = viewBox;
  const sizeKey = orientation === 'top' || orientation === 'bottom' ? 'width' : 'height';
  const result = (ticks || []).slice();
  // we need add the width of 'unit' only when sizeKey === 'width'
  const unitSize = unit && sizeKey === 'width' ? getStringSize(unit, { fontSize, letterSpacing })[sizeKey] : 0;
  const len = result.length;
  const sign = len >= 2 ? mathSign(result[1].coordinate - result[0].coordinate) : 1;

  let start, end;

  if (sign === 1) {
    start = sizeKey === 'width' ? x : y;
    end = sizeKey === 'width' ? x + width : y + height;
  } else {
    start = sizeKey === 'width' ? x + width : y + height;
    end = sizeKey === 'width' ? x : y;
  }

  if (preserveEnd) {
    // Try to guarantee the tail to be displayed
    let tail = ticks[len - 1];
    const tailContent = _.isFunction(tickFormatter) ? tickFormatter(tail.value, len - 1) : tail.value;
    const tailSize = getStringSize(tailContent, { fontSize, letterSpacing })[sizeKey] + unitSize;
    const tailGap = sign * (tail.coordinate + (sign * tailSize) / 2 - end);
    result[len - 1] = tail = {
      ...tail,
      tickCoord: tailGap > 0 ? tail.coordinate - tailGap * sign : tail.coordinate,
    };

    const isTailShow =
      sign * (tail.tickCoord - (sign * tailSize) / 2 - start) >= 0 &&
      sign * (tail.tickCoord + (sign * tailSize) / 2 - end) <= 0;

    if (isTailShow) {
      end = tail.tickCoord - sign * (tailSize / 2 + minTickGap);
      result[len - 1] = { ...tail, isShow: true };
    }
  }

  const count = preserveEnd ? len - 1 : len;
  for (let i = 0; i < count; i++) {
    let entry = result[i];
    const position = i;
    const content = _.isFunction(tickFormatter) ? tickFormatter(entry.value, position) : entry.value;
    const size = getStringSize(content, { fontSize, letterSpacing })[sizeKey] + unitSize;

    if (i === 0) {
      const gap = sign * (entry.coordinate - (sign * size) / 2 - start);
      result[i] = entry = {
        ...entry,
        tickCoord: gap < 0 ? entry.coordinate - gap * sign : entry.coordinate,
      };
    } else {
      result[i] = entry = { ...entry, tickCoord: entry.coordinate };
    }

    const isShow =
      sign * (entry.tickCoord - (sign * size) / 2 - start) >= 0 &&
      sign * (entry.tickCoord + (sign * size) / 2 - end) <= 0;

    if (isShow) {
      start = entry.tickCoord + sign * (size / 2 + minTickGap);
      result[i] = { ...entry, isShow: true };
    }
  }

  return result.filter(entry => entry.isShow);
}

function getEquidistantTicks({
  ticks,
  tickFormatter,
  viewBox,
  orientation,
  minTickGap,
  unit,
  fontSize,
  letterSpacing,
}: Omit<CartesianAxisProps, 'tickMargin'>): CartesianTickItem[] {
  const { x, y, width, height } = viewBox;
  const sizeKey = orientation === 'top' || orientation === 'bottom' ? 'width' : 'height';
  const result = (ticks || []).slice();
  // we need add the width of 'unit' only when sizeKey === 'width'
  const unitSize = unit && sizeKey === 'width' ? getStringSize(unit, { fontSize, letterSpacing })[sizeKey] : 0;
  const len = result.length;
  const sign = len >= 2 ? mathSign(result[1].coordinate - result[0].coordinate) : 1;

  let start, end;

  if (sign === 1) {
    start = sizeKey === 'width' ? x : y;
    end = sizeKey === 'width' ? x + width : y + height;
  } else {
    start = sizeKey === 'width' ? x + width : y + height;
    end = sizeKey === 'width' ? x : y;
  }

  const count = len;
  for (let i = 0; i < count; i++) {
    let entry = result[i];
    const position = i;
    const content = _.isFunction(tickFormatter) ? tickFormatter(entry.value, position) : entry.value;
    const size = getStringSize(content, { fontSize, letterSpacing })[sizeKey] + unitSize;

    if (i === 0) {
      const gap = sign * (entry.coordinate - (sign * size) / 2 - start);
      result[i] = entry = {
        ...entry,
        tickCoord: gap < 0 ? entry.coordinate - gap * sign : entry.coordinate,
      };
    } else {
      result[i] = entry = { ...entry, tickCoord: entry.coordinate };
    }

    const isShow =
      sign * (entry.tickCoord - (sign * size) / 2 - start) >= 0 &&
      sign * (entry.tickCoord + (sign * size) / 2 - end) <= 0;

    if (isShow) {
      start = entry.tickCoord + sign * (size / 2 + minTickGap);
      result[i] = { ...entry, isShow: true };
    }
  }
  // TODO: Refactor the above to remove duplicate logic.

  return getEveryNThTick(result);
}

export function getTicks(props: CartesianAxisProps, fontSize?: string, letterSpacing?: string): any[] {
  const { tick, ticks, viewBox, minTickGap, orientation, interval, tickFormatter, unit } = props;

  if (!ticks || !ticks.length || !tick) {
    return [];
  }

  if (isNumber(interval) || Global.isSsr) {
    return getNumberIntervalTicks(ticks, typeof interval === 'number' && isNumber(interval) ? interval : 0);
  }

  if (interval === 'preserveStartEnd') {
    return getTicksStart(
      {
        ticks,
        tickFormatter,
        viewBox,
        orientation,
        minTickGap,
        unit,
        fontSize,
        letterSpacing,
      },
      true,
    );
  }
  if (interval === 'preserveStart') {
    return getTicksStart({
      ticks,
      tickFormatter,
      viewBox,
      orientation,
      minTickGap,
      unit,
      fontSize,
      letterSpacing,
    });
  }

  if (interval === 'startEquidistant') {
    return getEquidistantTicks({
      ticks,
      tickFormatter,
      viewBox,
      orientation,
      minTickGap,
      unit,
      fontSize,
      letterSpacing,
    });
  }

  return getTicksEnd({
    ticks,
    tickFormatter,
    viewBox,
    orientation,
    minTickGap,
    unit,
    fontSize,
    letterSpacing,
  });
}
