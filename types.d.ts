interface Array<T> {
  /**
   * Filters out null and undefined values from an array.
   * This override provides a more specific return type when Boolean is used as the predicate.
   *
   * This is necessary because the default TypeScript definition for `Array.prototype.filter`
   * does not account for the fact that when using `Boolean` as the predicate,
   * the return type should be an array of non-nullable values.
   *
   * @example
   * const arr = [1, null, 2, undefined, 3];
   * const filtered = arr.filter(Boolean); // filtered is of type number[]
   */
  filter(predicate: BooleanConstructor): Array<NonNullable<T>>;
}

interface ReadonlyArray<T> {
  /**
   * Filters out null and undefined values from a readonly array.
   * This override provides a more specific return type when Boolean is used as the predicate.
   *
   * This is necessary because the default TypeScript definition for `ReadonlyArray.prototype.filter`
   * does not account for the fact that when using `Boolean` as the predicate,
   * the return type should be an array of non-nullable values.
   *
   * @example
   * const arr: ReadonlyArray<number | null> = [1, null, 2, undefined, 3];
   * const filtered = arr.filter(Boolean); // filtered is of type ReadonlyArray<number>
   */
  filter(predicate: BooleanConstructor): ReadonlyArray<NonNullable<T>>;
}
