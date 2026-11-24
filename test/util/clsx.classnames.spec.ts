// Adapted from the clsx v2.1.1 tests (MIT); see src/util/clsx.ts.
/**
 * Ported from `classnames` for compatibility checks.
 */

import { expect, test } from 'vitest';
import { clsx } from '../../src/util/clsx';

test('(compat) keeps object keys with truthy values', () => {
  const out = clsx({ a: true, b: false, c: 0, d: null, e: undefined, f: 1 });
  expect(out).toBe('a f');
});

test('(compat) joins arrays of class names and ignore falsy values', () => {
  const out = clsx('a', 0, null, undefined, true, 1, 'b');
  expect(out).toBe('a 1 b');
});

test('(compat) supports heterogenous arguments', () => {
  expect(clsx({ a: true }, 'b', 0)).toBe('a b');
});

test('(compat) should be trimmed', () => {
  expect(clsx('', 'b', {}, '')).toBe('b');
});

test('(compat) returns an empty string for an empty configuration', () => {
  expect(clsx({})).toBe('');
});

test('(compat) supports an array of class names', () => {
  expect(clsx(['a', 'b'])).toBe('a b');
});

test('(compat) joins array arguments with string arguments', () => {
  expect(clsx(['a', 'b'], 'c')).toBe('a b c');
  expect(clsx('c', ['a', 'b'])).toBe('c a b');
});

test('(compat) handles multiple array arguments', () => {
  expect(clsx(['a', 'b'], ['c', 'd'])).toBe('a b c d');
});

test('(compat) handles arrays that include falsy and true values', () => {
  expect(clsx(['a', 0, null, undefined, false, true, 'b'])).toBe('a b');
});

test('(compat) handles arrays that include arrays', () => {
  expect(clsx(['a', ['b', 'c']])).toBe('a b c');
});

test('(compat) handles arrays that include objects', () => {
  expect(clsx(['a', { b: true, c: false }])).toBe('a b');
});

test('(compat) handles deep array recursion', () => {
  expect(clsx(['a', ['b', ['c', { d: true }]]])).toBe('a b c d');
});

test('(compat) handles arrays that are empty', () => {
  expect(clsx('a', [])).toBe('a');
});

test('(compat) handles nested arrays that have empty nested arrays', () => {
  expect(clsx('a', [[]])).toBe('a');
});

test('(compat) handles all types of truthy and falsy property values as expected', () => {
  const out = clsx({
    // falsy:
    null: null,
    emptyString: '',
    NaN,
    zero: 0,
    negativeZero: -0,
    false: false,
    undefined,

    // truthy (literally anything else):
    nonEmptyString: 'foobar',
    whitespace: ' ',
    function: Object.prototype.toString,
    emptyObject: {},
    nonEmptyObject: { a: 1, b: 2 },
    emptyList: [],
    nonEmptyList: [1, 2, 3],
    greaterZero: 1,
  });

  expect(out).toBe('nonEmptyString whitespace function emptyObject nonEmptyObject emptyList nonEmptyList greaterZero');
});
