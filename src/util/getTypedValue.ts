import get from 'es-toolkit/compat/get';
import { isNullish, isNumOrStr } from './DataUtils';

/**
 * Extracts values from data objects.
 * Similar to DataKey but with stricter types.
 */
export type TypedDataKey<T = any, R = unknown> =
  // If T is any or unknown, we allow any key
  unknown extends T
    ? string | number | ((obj: T) => R)
    : // If T has a string index signature (legacy loose typing), we allow any key
      string extends keyof T
      ? string | number | ((obj: T) => R)
      :
          | {
              [K in keyof T]: T[K] extends R ? (K extends string | number ? K : never) : never;
            }[keyof T]
          | (T extends ReadonlyArray<infer E> ? (E extends R ? `${number}` : never) : never)
          | ((obj: T) => R);

// Scenario 1: Key is a keyof T. The return type is inferred from T[K].
export function getTypedValue<T, K extends keyof T>(
  obj: T | null | undefined,
  key: K | undefined,
  defaultValue?: T[K],
): T[K];
// Scenario 2: Key is a function. The return type is inferred from the function return type.
export function getTypedValue<T, R>(obj: T | null | undefined, key: undefined | ((obj: T) => R), defaultValue?: R): R;
// Scenario 3: T is an array, and key is a stringified index.
export function getTypedValue<T extends ReadonlyArray<unknown>>(
  obj: T | null | undefined,
  key: `${number}` | undefined,
  defaultValue?: T[number],
): T[number];
// Scenario 4: Key is a string or number, but not necessarily a keyof T. The return type is unknown by default, or can be specified explicitly.
export function getTypedValue<R = unknown, T = unknown>(
  obj: T | null | undefined,
  key: string | number | undefined,
  defaultValue?: R,
): R;
// Scenario 5: Key is a TypedDataKey, which matches the pattern used by DataKey in other parts of the library. The return type is inferred from the TypedDataKey.
export function getTypedValue<T, R = unknown>(
  obj: T | null | undefined,
  key: TypedDataKey<T, R> | undefined,
  defaultValue?: R,
): R;
export function getTypedValue<R = unknown>(obj: unknown, key: TypedDataKey<any, R> | undefined, defaultValue?: R): R;
export function getTypedValue(
  obj: unknown,
  key: string | number | ((obj: unknown) => unknown) | undefined,
  defaultValue?: unknown,
): unknown {
  if (isNullish(obj) || isNullish(key)) {
    return defaultValue;
  }

  if (isNumOrStr(key)) {
    return get(obj, key, defaultValue);
  }

  if (typeof key === 'function') {
    return key(obj);
  }

  return defaultValue;
}
