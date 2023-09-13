import _ from 'lodash';
import { CartesianTickItem, CartesianViewBox, Size } from '../util/types';
import { mathSign } from '../util/DataUtils';
import { TickFormatter, TickGap } from './CartesianAxis';
import { getEveryNthWithCondition } from '../util/getEveryNthWithCondition';
import { doesTickFitInBetweenStartAndEnd, getInitialStartAndEnd, getSizeOfTick } from '../util/TickUtils';

export function getEquidistantTicks(
  sizeKey: 'width' | 'height',
  unitSize: Size,
  angle?: number,
  ticks?: CartesianTickItem[],
  tickFormatter?: TickFormatter,
  viewBox?: CartesianViewBox,
  minTickGap?: TickGap,
  fontSize?: string,
  letterSpacing?: string,
): CartesianTickItem[] {
  const result = (ticks || []).slice();
  const length = result.length;
  const sign = length >= 2 ? mathSign(result[1].coordinate - result[0].coordinate) : 1;

  let { start: initialStart, end } = getInitialStartAndEnd(viewBox, sign, sizeKey);
  let index = 0;
  // Premature optimisation idea 1: Estimate a lower bound, and start from there.
  // For now, start from every tick
  let stepsize = 1;
  let start = initialStart;

  while (stepsize < result.length) {
    // Given stepsize, evaluate whether every stepsize-th tick can be shown.
    // If it can not, then increase the stepsize by 1, and try again.

    const entry = ticks?.[index];

    // Break condition - If we have evaluate all the ticks, then we are done.
    if (entry === undefined) {
      return getEveryNthWithCondition(ticks, stepsize);
    }

    // Check if the element collides with the next element
    const size = getSizeOfTick(tickFormatter, entry, index, sizeKey, fontSize, letterSpacing, unitSize, angle);

    const tickCoord = entry.coordinate;
    // We will always show the first tick.
    const isShow = index === 0 || doesTickFitInBetweenStartAndEnd(sign, tickCoord, size, start, end);

    if (!isShow) {
      // Start all over with a largerÍ stepsize
      index = 0;
      start = initialStart;
      stepsize += 1;
    }

    if (isShow) {
      // If it can be shown, update the start
      start = tickCoord + sign * (size / 2 + minTickGap);
      index += stepsize;
    }
  }

  return [];
}
