import { InverseScaleFunction } from '../../hooks';
import { CustomScaleDefinition } from './CustomScaleDefinition';
import { isWellBehavedNumber } from '../isWellBehavedNumber';

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
  const range = scale.range();

  if (domain.length === 0 || range.length < 2) {
    return undefined;
  }

  /*
   * Bisect needs the values in the order of their pixel positions, so sort by pixel and not by value:
   * a categorical axis keeps its categories in the order of its domain, which is not necessarily ascending.
   * Values that the scale cannot place, like the `null` of a gap in a Line, have no position and are skipped.
   */
  const placedValues: Array<{ value: unknown; pixel: number }> = [];
  domain.forEach(value => {
    // @ts-expect-error we're attempting to scale unknown without having guarantee that it is a Domain type
    const pixel = scale(value);
    if (isWellBehavedNumber(pixel)) {
      placedValues.push({ value, pixel });
    }
  });
  placedValues.sort((a, b) => a.pixel - b.pixel);
  const pixelPositions = placedValues.map(({ pixel }) => pixel);

  return (pixelValue: number): unknown => {
    // Find the closest domain value using bisect
    const index = bisect(pixelPositions, pixelValue);

    // Clamp to valid range
    if (index <= 0) {
      return placedValues[0]?.value;
    }
    if (index >= placedValues.length) {
      return placedValues[placedValues.length - 1]?.value;
    }

    // Check which neighbor is closer
    const left = placedValues[index - 1];
    const right = placedValues[index];
    if (left == null || right == null) {
      return undefined;
    }
    if (Math.abs(pixelValue - left.pixel) <= Math.abs(pixelValue - right.pixel)) {
      return left.value;
    }
    return right.value;
  };
}
