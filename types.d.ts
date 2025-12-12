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

interface ArrayConstructor {
  /**
   * The vanilla definition casts ReadonlyArray to any[] which hides type problems.
   * Workaround for https://github.com/Microsoft/TypeScript/issues/17002
   *
   * This variant is stricter than necessary to keep the type readable.
   * It will decide that all arrays are read-only arrays, which is not 100% correct,
   * but in practice it should be good enough.
   *
   * If you need to mutate an array - don't.
   * If you must - then don't run it through Array.isArray first.
   *
   * @param arg
   */
  isArray(arg: ReadonlyArray<any> | any): arg is ReadonlyArray<unknown>;
}
