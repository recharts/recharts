export function assertNotNull<T>(item: T): asserts item is NonNullable<T> {
  if (item == null) {
    throw new Error('Unexpected null');
  }
}
