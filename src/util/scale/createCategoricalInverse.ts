import { InverseScaleFunction } from '../../hooks';
import { CustomScaleDefinition } from './CustomScaleDefinition';

/**
 * Binary search to find the index where x would fit in array a.
 * Works for arrays that are sorted both ascending and descending.
 *
 * Unlike d3.bisect, this implementation handles both ascending and descending arrays.
 *
 * @param haystack Sorted array of numbers
 * @param needle Number to find the insertion index for
 * @returns Index where x would fit in array a
 */
export function bisect(haystack: ReadonlyArray<number>, needle: number): number {
  let lo = 0;
  let hi = haystack.length;
  const ascending = haystack[0]! < haystack[haystack.length - 1]!;

  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (ascending ? haystack[mid]! < needle : haystack[mid]! > needle) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  return lo;
}

/**
 * Computes an inverse scale function for categorical/ordinal scales.
 * Uses bisect to find the closest domain value for a given pixel coordinate.
 */
export function createCategoricalInverse(
  scale: CustomScaleDefinition | undefined,
  allDataPointsOnAxis?: ReadonlyArray<unknown>,
): InverseScaleFunction | undefined {
  if (!scale) {
    return undefined;
  }
  const domain = allDataPointsOnAxis ?? scale.domain();
  // Banded scales return the start of each band, but chart categories are centered in it.
  const offset = (scale.bandwidth?.() ?? 0) / 2;
  const range = scale.range();

  if (domain.length === 0 || range.length < 2) {
    return undefined;
  }

  // Pair every domain value with its pixel position, then sort by pixel.
  // The data order is not necessarily the pixel order: a categorical axis can
  // list its values out of numeric order (e.g. years newest first), and that
  // listing order - not the sorted values - is what the scale maps to pixels.
  // Sorting by pixel keeps the pixel array monotonic so that bisect, and the
  // nearest-neighbour lookup below, return the correct point.
  // Values with no real position are dropped: gaps (`null`/`undefined`), whose
  // scaled value is either NaN or, on a continuous scale, a coerced pixel that
  // belongs to no data point.
  const points = domain
    // @ts-expect-error we're attempting to scale unknown without having guarantee that it is a Domain type
    .map((value: unknown) => ({ value, pixel: (scale(value) ?? NaN) + offset }))
    .filter(point => point.value != null && Number.isFinite(point.pixel))
    .sort((a, b) => a.pixel - b.pixel);

  if (points.length === 0) {
    return undefined;
  }

  const values: ReadonlyArray<unknown> = points.map(point => point.value);
  const pixelPositions: ReadonlyArray<number> = points.map(point => point.pixel);

  return (pixelValue: number): unknown => {
    // Find the closest point using bisect
    const index = bisect(pixelPositions, pixelValue);

    // Clamp to valid range
    if (index <= 0) {
      return values[0];
    }
    if (index >= values.length) {
      return values[values.length - 1];
    }

    // Check which neighbor is closer
    const leftPixel = pixelPositions[index - 1] ?? 0;
    const rightPixel = pixelPositions[index] ?? 0;
    if (Math.abs(pixelValue - leftPixel) <= Math.abs(pixelValue - rightPixel)) {
      return values[index - 1];
    }
    return values[index];
  };
}
