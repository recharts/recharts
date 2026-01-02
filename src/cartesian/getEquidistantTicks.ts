import { isVisible } from '../util/TickUtils';
import { CartesianTickItem } from '../util/types';
import { getEveryNth } from '../util/getEveryNth';
import { Sign } from './getTicks';

export function getEquidistantTicks(
  sign: Sign,
  boundaries: { start: number; end: number },
  getTickSize: (tick: CartesianTickItem, index: number) => number,
  ticks: ReadonlyArray<CartesianTickItem>,
  minTickGap: number,
): ReadonlyArray<CartesianTickItem> {
  // If the ticks are readonly, then the slice might not be necessary
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

    // Break condition - If we have evaluated all the ticks, then we are done.
    if (entry === undefined) {
      return getEveryNth(ticks, stepsize);
    }

    // Check if the element collides with the next element
    const i = index;
    let size: number | undefined;
    const getSize = () => {
      if (size === undefined) {
        size = getTickSize(entry, i);
      }

      return size;
    };

    const tickCoord = entry.coordinate;
    // We will always show the first tick.
    const isShow = index === 0 || isVisible(sign, tickCoord, getSize, start, end);

    if (!isShow) {
      // Start all over with a larger stepsize
      index = 0;
      start = initialStart;
      stepsize += 1;
    }

    if (isShow) {
      // If it can be shown, update the start
      start = tickCoord + sign * (getSize() / 2 + minTickGap);
      index += stepsize;
    }
  }

  return [];
}

export function getEquidistantPreserveEndTicks(
  sign: Sign,
  boundaries: { start: number; end: number },
  getTickSize: (tick: CartesianTickItem, index: number) => number,
  ticks: ReadonlyArray<CartesianTickItem>,
  minTickGap: number,
): ReadonlyArray<CartesianTickItem> {
  // If the ticks are readonly, then the slice might not be necessary
  // Reworked logic for getEquidistantPreserveEndTicks
  const result = (ticks || []).slice();
  const len = result.length;

  if (len === 0) {
    return [];
  }

  const { start: initialStart, end } = boundaries;

  // Start with stepsize = 1 (every tick) up to the maximum possible stepsize (len)
  for (let stepsize = 1; stepsize <= len; stepsize++) {
    // 1. Calculate the offset so the last tick (index len - 1) is always included in the sequence.
    const offset = (len - 1) % stepsize;
    let start = initialStart; // `start` tracks the coordinate of the last successfully drawn tick + gap
    let ok = true;

    // 2. Iterate through the end-anchored sequence: offset, offset + stepsize, ..., len - 1
    for (let index = offset; index < len; index += stepsize) {
      const entry = ticks[index];
      if (entry == null) {
        continue;
      }
      const i = index;
      let size: number | undefined;

      // Use a function to get size, as in the original code
      const getSize = () => {
        if (size === undefined) {
          size = getTickSize(entry, i);
        }
        return size;
      };

      const tickCoord = entry.coordinate;

      // 3. Apply visibility logic (including the first tick special case)
      // The reviewer says *not* to unconditionally bypass checks for the last tick.
      const isShow = index === offset || isVisible(sign, tickCoord, getSize, start, end);

      if (!isShow) {
        // If any tick in this end-anchored sequence fails visibility/collision,
        // reject this stepsize and move to the next iteration (larger stepsize).
        ok = false;
        break;
      }

      // 4. If showable, update the 'start' coordinate for the next collision check
      if (isShow) {
        start = tickCoord + sign * (getSize() / 2 + minTickGap);
      }
    }

    // 5. If the entire sequence for this stepsize passed the visibility check, return the result
    if (ok) {
      // Build the final result array explicitly using the validated stepsize and offset.
      const finalTicks: CartesianTickItem[] = [];
      for (let index = offset; index < len; index += stepsize) {
        const tick = ticks[index];
        if (tick != null) {
          finalTicks.push(tick);
        }
      }
      return finalTicks;
    }
  }

  // If no stepsize works (this shouldn't happen unless minTickGap is huge), return an empty array.
  return [];
}
