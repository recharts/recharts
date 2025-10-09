export function arrayEqualityCheck<T>(a: ReadonlyArray<T>, b: ReadonlyArray<T>): boolean {
  if (Array.isArray(a) && Array.isArray(b) && a.length === 0 && b.length === 0) {
    // empty arrays are always equal, regardless of reference
    return true;
  }
  return a === b;
}
