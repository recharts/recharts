import { AxisViewport, getViewportWidth } from './viewport';

export type NumericScale = (value: number) => number | undefined;

/** Convert a data value to a finite number without turning missing values into zero. */
export function toFiniteNumber(value: unknown): number | undefined {
  if (value == null || (typeof value === 'string' && value.trim() === '')) {
    return undefined;
  }
  const numericValue = Number(value);
  return Number.isFinite(numericValue) ? numericValue : undefined;
}

/**
 * Map a numeric value to its fraction along the complete scale domain.
 *
 * Axis scales already contain the current viewport in their output range. This reverses that range
 * projection with the original, un-zoomed range, preserving non-linear scale transforms such as log
 * and pow. A descending range works without a special case because its signed span is retained.
 */
export function scaleValueToDomainRatio(
  value: number,
  scale: NumericScale,
  unzoomedRange: readonly [number, number],
  viewport: AxisViewport,
): number | undefined {
  const pixel = scale(value);
  const [rangeStart, rangeEnd] = unzoomedRange;
  const rangeSpan = rangeEnd - rangeStart;
  if (pixel == null || !Number.isFinite(pixel) || !Number.isFinite(rangeSpan) || rangeSpan === 0) {
    return undefined;
  }

  const ratioWithinVisibleRange = (pixel - rangeStart) / rangeSpan;
  const domainRatio = viewport.startRatio + ratioWithinVisibleRange * getViewportWidth(viewport);
  return Number.isFinite(domainRatio) ? domainRatio : undefined;
}
