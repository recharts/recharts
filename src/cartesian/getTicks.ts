import _ from 'lodash';
import { CartesianTickItem, Size } from '../util/types';
import { mathSign, isNumber } from '../util/DataUtils';
import { getStringSize } from '../util/DOMUtils';
import { Props as CartesianAxisProps } from './CartesianAxis';
import { Global } from '../util/Global';
import { getEquidistantTicks } from './getEquidistantTicks';
import {
  doesTickFitInBetweenStartAndEnd,
  getEveryNThTick,
  getInitialStartAndEnd,
  getNumberIntervalTicks,
  getSizeOfTick,
} from '../util/TickUtils';

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
  const sizeKey = orientation === 'top' || orientation === 'bottom' ? 'width' : 'height';
  // we need add the width of 'unit' only when sizeKey === 'width'
  const unitSize: Size =
    unit && sizeKey === 'width' ? getStringSize(unit, { fontSize, letterSpacing }) : { width: 0, height: 0 };
  const result = (ticks || []).slice();
  const len = result.length;
  const sign = len >= 2 ? mathSign(result[1].coordinate - result[0].coordinate) : 1;

  let { start, end } = getInitialStartAndEnd(viewBox, sign, sizeKey);

  for (let i = len - 1; i >= 0; i--) {
    let entry = result[i];
    const size = getSizeOfTick(tickFormatter, entry, len - i - 1, sizeKey, fontSize, letterSpacing, unitSize, angle);
    if (i === len - 1) {
      const gap = sign * (entry.coordinate + (sign * size) / 2 - end);
      result[i] = entry = {
        ...entry,
        tickCoord: gap > 0 ? entry.coordinate - gap * sign : entry.coordinate,
      };
    } else {
      result[i] = entry = { ...entry, tickCoord: entry.coordinate };
    }

    const isShow = doesTickFitInBetweenStartAndEnd(sign, entry.tickCoord, size, start, end);

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
  const sizeKey = orientation === 'top' || orientation === 'bottom' ? 'width' : 'height';
  const result = (ticks || []).slice();
  // we need add the width of 'unit' only when sizeKey === 'width'
  const unitSize: Size =
    unit && sizeKey === 'width' ? getStringSize(unit, { fontSize, letterSpacing }) : { width: 0, height: 0 };
  const len = result.length;
  const sign = len >= 2 ? mathSign(result[1].coordinate - result[0].coordinate) : 1;

  let { start, end } = getInitialStartAndEnd(viewBox, sign, sizeKey);

  if (preserveEnd) {
    // Try to guarantee the tail to be displayed
    let tail = ticks[len - 1];
    const tailSize = getSizeOfTick(tickFormatter, tail, len - 1, sizeKey, fontSize, letterSpacing, unitSize, angle);
    const tailGap = sign * (tail.coordinate + (sign * tailSize) / 2 - end);
    result[len - 1] = tail = {
      ...tail,
      tickCoord: tailGap > 0 ? tail.coordinate - tailGap * sign : tail.coordinate,
    };

    const isTailShow = doesTickFitInBetweenStartAndEnd(sign, tail.tickCoord, tailSize, start, end);

    if (isTailShow) {
      end = tail.tickCoord - sign * (tailSize / 2 + minTickGap);
      result[len - 1] = { ...tail, isShow: true };
    }
  }

  const count = preserveEnd ? len - 1 : len;
  for (let i = 0; i < count; i++) {
    let entry = result[i];
    const size = getSizeOfTick(tickFormatter, entry, i, sizeKey, fontSize, letterSpacing, unitSize, angle);

    if (i === 0) {
      const gap = sign * (entry.coordinate - (sign * size) / 2 - start);
      result[i] = entry = {
        ...entry,
        tickCoord: gap < 0 ? entry.coordinate - gap * sign : entry.coordinate,
      };
    } else {
      result[i] = entry = { ...entry, tickCoord: entry.coordinate };
    }

    const isShow = doesTickFitInBetweenStartAndEnd(sign, entry.tickCoord, size, start, end);

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

  // TODO: Refactor all methods to take unitSize and sizeKey, since they are shared.
  const sizeKey = orientation === 'top' || orientation === 'bottom' ? 'width' : 'height';
  const unitSize: Size =
    unit && sizeKey === 'width' ? getStringSize(unit, { fontSize, letterSpacing }) : { width: 0, height: 0 };

  if (interval === 'equidistant') {
    return getEquidistantTicks(
      sizeKey,
      unitSize,
      angle,
      ticks,
      tickFormatter,
      viewBox,
      minTickGap,
      fontSize,
      letterSpacing,
    );
  }

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
