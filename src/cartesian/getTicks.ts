import _ from 'lodash';
import { CartesianTickItem, Size } from '../util/types';
import { mathSign, isNumber } from '../util/DataUtils';
import { getStringSize } from '../util/DOMUtils';
import { Props as CartesianAxisProps } from './CartesianAxis';
import { Global } from '../util/Global';
import { getEveryNthWithCondition } from '../util/getEveryNthWithCondition';
import { getAngledRectangleWidth } from '../util/CartesianUtils';

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

function getAngledTickWidth(contentSize: Size, unitSize: Size, angle: number) {
  const size = { width: contentSize.width + unitSize.width, height: contentSize.height + unitSize.height };

  return getAngledRectangleWidth(size, angle);
}

function getTicksEnd({
  angle,
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
  const unitSize: Size =
    unit && sizeKey === 'width' ? getStringSize(unit, { fontSize, letterSpacing }) : { width: 0, height: 0 };
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
    const content = _.isFunction(tickFormatter) ? tickFormatter(entry.value, len - i - 1) : entry.value;
    // Recharts only supports angles when sizeKey === 'width'
    const size =
      sizeKey === 'width'
        ? getAngledTickWidth(getStringSize(content, { fontSize, letterSpacing }), unitSize, angle)
        : getStringSize(content, { fontSize, letterSpacing })[sizeKey];
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

  return result;
}

function getTicksStart(
  {
    angle,
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
  const unitSize: Size =
    unit && sizeKey === 'width' ? getStringSize(unit, { fontSize, letterSpacing }) : { width: 0, height: 0 };
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
    // Recharts only supports angles when sizeKey === 'width'
    const tailSize =
      sizeKey === 'width'
        ? getAngledTickWidth(getStringSize(tailContent, { fontSize, letterSpacing }), unitSize, angle)
        : getStringSize(tailContent, { fontSize, letterSpacing })[sizeKey];
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
    const content = _.isFunction(tickFormatter) ? tickFormatter(entry.value, i) : entry.value;
    const size =
      sizeKey === 'width'
        ? getAngledTickWidth(getStringSize(content, { fontSize, letterSpacing }), unitSize, angle)
        : getStringSize(content, { fontSize, letterSpacing })[sizeKey];

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

  return result;
}

export function getTicks(props: CartesianAxisProps, fontSize?: string, letterSpacing?: string): any[] {
  const { tick, ticks, viewBox, minTickGap, orientation, interval, tickFormatter, unit, angle } = props;

  if (!ticks || !ticks.length || !tick) {
    return [];
  }

  if (isNumber(interval) || Global.isSsr) {
    return getNumberIntervalTicks(ticks, typeof interval === 'number' && isNumber(interval) ? interval : 0);
  }

  let candidates: CartesianTickItem[] = [];

  if (interval === 'equidistantPreserveStart') {
    candidates = getTicksStart({
      angle,
      ticks,
      tickFormatter,
      viewBox,
      orientation,
      minTickGap,
      unit,
      fontSize,
      letterSpacing,
    });

    return getEveryNThTick(candidates);
  }

  if (interval === 'preserveStart' || interval === 'preserveStartEnd') {
    candidates = getTicksStart(
      {
        angle,
        ticks,
        tickFormatter,
        viewBox,
        orientation,
        minTickGap,
        unit,
        fontSize,
        letterSpacing,
      },
      interval === 'preserveStartEnd',
    );
  } else {
    candidates = getTicksEnd({
      angle,
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

  return candidates.filter(entry => entry.isShow);
}
