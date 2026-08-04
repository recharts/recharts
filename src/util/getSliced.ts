export function getSliced<T>(arr: ReadonlyArray<T>, startIndex: number, endIndex: number): ReadonlyArray<T> {
  if (!Array.isArray(arr)) {
    return arr;
  }
  return arr.slice(startIndex, endIndex + 1);
}
