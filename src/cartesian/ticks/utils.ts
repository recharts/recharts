import { CartesianTickItem } from '../../util/types';

/**
 * Given an array and a number N, return a new array which contains every nTh
 * element of the input array. For n below 1, an empty array is returned.
 * @param {T[]} array An input array.
 * @param {integer} n A number
 * @returns {T[]} The result array of the same type as the input array.
 */
function getEveryNth<Type>(array: Type[], n: number): Type[] {
  if (n < 1) {
    return [];
  }
  if (n === 1) {
    return array;
  }
  const result = [];
  for (let i = 0; i < array.length; i += n) {
    result.push(array[i]);
  }
  return result;
}

export function getNumberIntervalTicks(ticks: CartesianTickItem[], interval: number) {
  return getEveryNth(ticks, interval + 1);
}
