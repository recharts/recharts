import { TickItem } from './types';
import { RechartsScale } from './scale/RechartsScale';

/**
 * Value-equality helpers with a small numeric tolerance.
 *
 * High-frequency zoom/pan gestures recompute geometry on every event; positions can differ by
 * sub-pixel float noise even when nothing visibly moved. These helpers let reporters, reducers and
 * selector subscriptions treat such values as unchanged, which breaks render feedback loops and
 * keeps drags smooth. Shared by the rendered-ticks reporter/slice, CartesianGrid and useScatterLOD.
 */

const EPSILON = 1e-6;

export function areNumbersApproximatelyEqual(a: number | undefined, b: number | undefined): boolean {
  if (a === b) {
    return true;
  }
  if (a == null || b == null) {
    return false;
  }
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return true;
  }
  return Math.abs(a - b) < EPSILON;
}

export function areChartValuesApproximatelyEqual(a: unknown, b: unknown): boolean {
  if (typeof a === 'number' && typeof b === 'number') {
    return areNumbersApproximatelyEqual(a, b);
  }
  if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime();
  }
  return Object.is(a, b);
}

export function areValueArraysApproximatelyEqual(
  a: ReadonlyArray<unknown> | undefined,
  b: ReadonlyArray<unknown> | undefined,
): boolean {
  if (a === b) {
    return true;
  }
  if (a == null || b == null || a.length !== b.length) {
    return false;
  }
  return a.every((entry, index) => areChartValuesApproximatelyEqual(entry, b[index]));
}

/** Compares two scales by their observable outputs (domain, range, bandwidth). */
export function areScalesApproximatelyEqual(a: RechartsScale | undefined, b: RechartsScale | undefined): boolean {
  if (a === b) {
    return true;
  }
  if (a == null || b == null) {
    return false;
  }
  return (
    areValueArraysApproximatelyEqual(a.domain(), b.domain()) &&
    areValueArraysApproximatelyEqual(a.range(), b.range()) &&
    areNumbersApproximatelyEqual(a.bandwidth?.(), b.bandwidth?.())
  );
}

export function areRenderedTicksEqual(
  a: ReadonlyArray<TickItem> | null | undefined,
  b: ReadonlyArray<TickItem>,
): boolean {
  if (a == null || a.length !== b.length) {
    return false;
  }
  return a.every((tick, index) => {
    const next = b[index];
    return (
      next != null &&
      tick.value === next.value &&
      areNumbersApproximatelyEqual(tick.coordinate, next.coordinate) &&
      areNumbersApproximatelyEqual(tick.offset, next.offset) &&
      tick.index === next.index
    );
  });
}
