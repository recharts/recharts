import { CartesianTickItem } from './types';

/**
 * Returns a new array containing every n-th element from the input array, ensuring that the first tick
 * is shifted to guarantee its visibility. If `isValid` is provided, all selected elements must pass
 * the validation check; otherwise, the function returns `undefined`.
 *
 * @param {ReadonlyArray<CartesianTickItem>} array - The input array of CartesianTickItem objects.
 * @param {number} n - The step size for selecting elements. Must be a positive integer.
 * @param {Function} getTickSize - A function that calculates the size of a tick (e.g., width or height).
 *                                Takes a tick and its index as arguments.
 * @param {Function} [isValid] - An optional validation function. If provided, all selected elements
 *                               must pass this check; otherwise, the function returns `undefined`.
 * @returns {ReadonlyArray<CartesianTickItem> | undefined} - A new array of selected ticks, or `undefined`
 *                                                           if validation fails or `n` is invalid.
 */
export function getEveryNthWithShiftingFirst(
  array: ReadonlyArray<CartesianTickItem>,
  n: number,
  getTickSize: (tick: CartesianTickItem, index: number) => number,
  isValid?: (candidate: CartesianTickItem) => boolean,
): ReadonlyArray<CartesianTickItem> | undefined {
  if (n < 1) {
    return [];
  }
  const result: CartesianTickItem[] = [];
  const copyArray: Array<CartesianTickItem> = (array || []).slice();

  for (let i = 0; i < copyArray.length; i += n) {
    if (isValid === undefined || isValid(copyArray[i]) === true) {
      const tick = copyArray[i];
      if (i === 0) {
        result.push({ ...tick, tickCoord: tick.coordinate + getTickSize(tick, i) / 2 });
      } else {
        result.push(tick);
      }
    } else {
      return undefined;
    }
  }
  return result;
}

/**
 * Given an array and a number N, return a new array which contains every nTh
 * element of the input array. For n below 1, an empty array is returned.
 * If isValid is provided, all candidates must suffice the condition, else undefined is returned.
 * @param {T[]} array An input array.
 * @param {integer} n A number
 * @param {Function} isValid A function to evaluate a candidate form the array
 * @returns {T[]} The result array of the same type as the input array.
 */
export function getEveryNthWithCondition<Type>(
  array: ReadonlyArray<Type>,
  n: number,
  isValid?: (candidate: Type) => boolean,
): ReadonlyArray<Type> | undefined {
  if (n < 1) {
    return [];
  }
  if (n === 1 && isValid === undefined) {
    return array;
  }
  const result: Type[] = [];
  for (let i = 0; i < array.length; i += n) {
    if (isValid === undefined || isValid(array[i]) === true) {
      result.push(array[i]);
    } else {
      return undefined;
    }
  }
  return result;
}
