import _ from 'lodash';
import { CartesianTickItem, Size } from '../util/types';
import { mathSign, isNumber } from '../util/DataUtils';
import { getStringSize } from '../util/DOMUtils';
import { Props as CartesianAxisProps } from './CartesianAxis';
import { Global } from '../util/Global';
import { isVisible, getTickBoundaries, getNumberIntervalTicks, getAngledTickWidth } from '../util/TickUtils';
import { getEquidistantTicks } from './getEquidistantTicks';

export type Sign = 0 | 1 | -1;

function getTicksEnd(
  sign: Sign,
  boundaries: { start: number; end: number },
  getTickSize: (tick: CartesianTickItem, index: number) => number,
  ticks: CartesianTickItem[],
  minTickGap: number,
): CartesianTickItem[] {
  const result = (ticks || []).slice();
  const len = result.length;

  const { start } = boundaries;
  let { end } = boundaries;

  for (let i = len - 1; i >= 0; i--) {
    let entry = result[i];
    const size = getTickSize(entry, i);
    if (i === len - 1) {
      const gap = sign * (entry.coordinate + (sign * size) / 2 - end);
      result[i] = entry = {
        ...entry,
        tickCoord: gap > 0 ? entry.coordinate - gap * sign : entry.coordinate,
      };
    } else {
      result[i] = entry = { ...entry, tickCoord: entry.coordinate };
    }

    const isShow = isVisible(sign, entry.tickCoord, size, start, end);

    if (isShow) {
      end = entry.tickCoord - sign * (size / 2 + minTickGap);
      result[i] = { ...entry, isShow: true };
    }
  }

  return result;
}

function getTicksStart(
  sign: Sign,
  boundaries: { start: number; end: number },
  getTickSize: (tick: CartesianTickItem, index: number) => number,
  ticks: CartesianTickItem[],
  minTickGap: number,
  preserveEnd?: boolean,
): CartesianTickItem[] {
  const result = (ticks || []).slice();
  const len = result.length;

  let { start, end } = boundaries;

  if (preserveEnd) {
    // Try to guarantee the tail to be displayed
    let tail = ticks[len - 1];
    const tailSize = getTickSize(tail, len - 1);
    const tailGap = sign * (tail.coordinate + (sign * tailSize) / 2 - end);
    result[len - 1] = tail = {
      ...tail,
      tickCoord: tailGap > 0 ? tail.coordinate - tailGap * sign : tail.coordinate,
    };

    const isTailShow = isVisible(sign, tail.tickCoord, tailSize, start, end);

    if (isTailShow) {
      end = tail.tickCoord - sign * (tailSize / 2 + minTickGap);
      result[len - 1] = { ...tail, isShow: true };
    }
  }

  const count = preserveEnd ? len - 1 : len;
  for (let i = 0; i < count; i++) {
    let entry = result[i];
    const size = getTickSize(entry, i);

    if (i === 0) {
      const gap = sign * (entry.coordinate - (sign * size) / 2 - start);
      result[i] = entry = {
        ...entry,
        tickCoord: gap < 0 ? entry.coordinate - gap * sign : entry.coordinate,
      };
    } else {
      result[i] = entry = { ...entry, tickCoord: entry.coordinate };
    }

    const isShow = isVisible(sign, entry.tickCoord, size, start, end);

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

  const sizeKey = orientation === 'top' || orientation === 'bottom' ? 'width' : 'height';
  const unitSize: Size =
    unit && sizeKey === 'width' ? getStringSize(unit, { fontSize, letterSpacing }) : { width: 0, height: 0 };

  const getTickSize = (content: CartesianTickItem, index: number) => {
    const value = _.isFunction(tickFormatter) ? tickFormatter(content.value, index) : content.value;
    // Recharts only supports angles when sizeKey === 'width'
    return sizeKey === 'width'
      ? getAngledTickWidth(getStringSize(value, { fontSize, letterSpacing }), unitSize, angle)
      : getStringSize(value, { fontSize, letterSpacing })[sizeKey];
  };

  const sign = ticks.length >= 2 ? mathSign(ticks[1].coordinate - ticks[0].coordinate) : 1;
  const boundaries = getTickBoundaries(viewBox, sign, sizeKey);

  if (interval === 'equidistantPreserveStart') {
    return getEquidistantTicks(sign, boundaries, getTickSize, ticks, minTickGap);
  }

  if (interval === 'preserveStart' || interval === 'preserveStartEnd') {
    candidates = getTicksStart(sign, boundaries, getTickSize, ticks, minTickGap, interval === 'preserveStartEnd');
  } else {
    candidates = getTicksEnd(sign, boundaries, getTickSize, ticks, minTickGap);
  }

  return candidates.filter(entry => entry.isShow);
}
