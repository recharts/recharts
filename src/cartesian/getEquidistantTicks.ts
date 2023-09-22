import { isVisible } from '../util/TickUtils';
import { CartesianTickItem } from '../util/types';
import { getEveryNthWithCondition } from '../util/getEveryNthWithCondition';
import { Sign } from './getTicks';

export function getEquidistantTicks(
  sign: Sign,
  boundaries: { start: number; end: number },
  getTickSize: (tick: CartesianTickItem, index: number) => number,
  ticks: CartesianTickItem[],
  minTickGap: number,
): CartesianTickItem[] {
  const result = (ticks || []).slice();

  const { start: initialStart, end } = boundaries;
  let index = 0;
  // Premature optimisation idea 1: Estimate a lower bound, and start from there.
  // For now, start from every tick
  let stepsize = 1;
  let start = initialStart;

  while (stepsize <= result.length) {
    // Given stepsize, evaluate whether every stepsize-th tick can be shown.
    // If it can not, then increase the stepsize by 1, and try again.

    const entry = ticks?.[index];

    // Break condition - If we have evaluate all the ticks, then we are done.
    if (entry === undefined) {
      return getEveryNthWithCondition(ticks, stepsize);
    }

    // Check if the element collides with the next element
    const size = getTickSize(entry, index);

    const tickCoord = entry.coordinate;
    // We will always show the first tick.
    const isShow = index === 0 || isVisible(sign, tickCoord, size, start, end);

    if (!isShow) {
      // Start all over with a larger stepsize
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
