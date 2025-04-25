/**
 * Helper type to check if two types A and B are exactly equal
 */
export type AreEqual<A, B> = A | B extends A & B ? true : false;

/**
 * Helper function to assert that a type is valid at compile time.
 * If a type is `never`, it means that the type is invalid and will throw a compile-time error.
 * This is a no-op function that does nothing at runtime.
 * It is used to ensure that the type passed to it is valid and will throw a compile-time error if not.
 *
 * Use it together with `AreEqual` to assert that two types are equal, for example:
 *
 * ```ts
 * assertType<AreEqual<'a', 'a'>>(true);
 * assertType<AreEqual<'a', 'b'>>(false);
 * ```
 *
 * @param _assert - The value to assert the type of.
 * @returns - Nothing. This is a no-op function.
 */
export function assertType<T>(_assert: T): void {}

// Example usage (and unit tests):

// passing cases
assertType<AreEqual<'a', 'a'>>(true);
assertType<AreEqual<'a' | 'b', 'a' | 'b'>>(true);
assertType<AreEqual<'a', 'b'>>(false);
assertType<AreEqual<'a' | 'b', 'a'>>(false);

// failing cases
// @ts-expect-error this should fail
assertType<AreEqual<'a', 'b'>>(true);
// @ts-expect-error this should fail
assertType<AreEqual<'a', 'a'>>(false);
// @ts-expect-error this should fail
assertType<AreEqual<'a' | 'b', 'a'>>(true);
// @ts-expect-error this should fail
assertType<AreEqual<'a', 'a' | 'b'>>(true);
