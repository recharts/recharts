import { CartesianTickItem } from '../../util/types';

/**
 * Given an array and a number N, return a new array which contains every nTh
 * element of the input array. For n below 1, an empty array is returned.
 * @param {any[]} array An input array.
 * @param {integer} n A number
 * @returns {any[]} The result array of the same type as the input array.
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

/**
 * Given an array of ticks, find N, the lowest possible number for which every
 * nTH tick in the ticks array isShow == true and return the array of every nTh tick.
 * @param {CartesianTickItem[]} ticks An array of CartesianTickItem with the
 * information whether they can be shown without overlapping with their neighbour isShow.
 * @returns {CartesianTickItem[]} Every nTh tick in an array.
 */
export function getEveryNThTick(ticks: CartesianTickItem[]) {
  let N = 1;
  let previous: CartesianTickItem[] = [];
  while (N < ticks.length) {
    const everyNthTick = getEveryNth(ticks, N);

    const visibleTicks = everyNthTick.reduce((previousValue, currentValue) => {
      if (currentValue.isShow === true) {
        return previousValue + 1;
      }
      return previousValue;
    }, 0);

    if (visibleTicks === everyNthTick.length) {
      break;
    }
    previous = everyNthTick;
    N++;
  }
  return previous;
}

export function getNumberIntervalTicks(ticks: CartesianTickItem[], interval: number) {
  return getEveryNth(ticks, interval + 1);
}
