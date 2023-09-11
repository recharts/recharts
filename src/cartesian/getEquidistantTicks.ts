import _ from 'lodash';
import { CartesianTickItem, CartesianViewBox } from '../util/types';
import { mathSign } from '../util/DataUtils';
import { Orientation, TickFormatter, TickGap, Unit } from './CartesianAxis';

function getStartAndEnd(
  orientation?: Orientation,
  ticks?: CartesianTickItem[],
  viewBox?: CartesianViewBox,
): { start: number; end: number } {
  const { x, y, width, height } = viewBox;
  const sizeKey = orientation === 'top' || orientation === 'bottom' ? 'width' : 'height';
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

  return {
    start,
    end,
  };
}

export function getEquidistantTicks(
  angle?: number,
  ticks?: CartesianTickItem[],
  tickFormatter?: TickFormatter,
  viewBox?: CartesianViewBox,
  orientation?: Orientation,
  minTickGap?: TickGap,
  unit?: Unit,
  fontSize?: string,
  letterSpacing?: string,
): CartesianTickItem[] {
  // Premature optimisation idea 1: Estimate a lower bound, and start from there.
  // For now, start from every tick

  let stepsize = 0;
  let element = ticks?.[0];
  let nextElement = ticks?.[1];

  for (let index = 0; index < ticks.length; index++) {
    // Check if the element collides with the next element
    const element = ticks[index];
  }

  // For each [interval] check if all [interval]TH ticks can be shown.
  // If no, increase [interval]+1, repeat

  // Premature Optimisation idea 2: Instead of recomputing the width of tick over and over,
  // create a cache and look it up.

  return [];
}
