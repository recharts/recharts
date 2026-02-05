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
  // Build an array of pixel positions for each domain value
  // @ts-expect-error we're attempting to scale unknown without having guarantee that it is a Domain type
  const pixelPositions: number[] = domain.map(d => scale(d) ?? 0);
  const range = scale.range();

  if (domain.length === 0 || range.length < 2) {
    return undefined;
  }

  return (pixelValue: number): unknown => {
    // Find the closest domain value using bisect
    const index = bisect(pixelPositions, pixelValue);

    // Clamp to valid range
    if (index <= 0) {
      return domain[0];
    }
    if (index >= domain.length) {
      return domain[domain.length - 1];
    }

    // Check which neighbor is closer
    const leftPixel = pixelPositions[index - 1] ?? 0;
    const rightPixel = pixelPositions[index] ?? 0;
    if (Math.abs(pixelValue - leftPixel) <= Math.abs(pixelValue - rightPixel)) {
      return domain[index - 1];
    }
    return domain[index];
  };
}
