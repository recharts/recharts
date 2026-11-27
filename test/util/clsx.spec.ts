// Adapted from the clsx v2.1.1 tests (MIT); see src/util/clsx.ts.
import { expect, expectTypeOf, test } from 'vitest';
import { clsx as fn } from '../../src/util/clsx';
import type { ClassArray, ClassDictionary, ClassValue } from '../../src/util/clsx';

test('exports a function that returns a string', () => {
  expect(typeof fn).toBe('function');
  expect(typeof fn()).toBe('string');
});

test('strings', () => {
  expect(fn('')).toBe('');
  expect(fn('foo')).toBe('foo');
  expect(fn(false)).toBe('');
});

test('strings (variadic)', () => {
  expect(fn('')).toBe('');
  expect(fn('foo', 'bar')).toBe('foo bar');
  expect(fn('foo', false, 'baz')).toBe('foo baz');
  expect(fn(false, 'bar', 'baz', '')).toBe('bar baz');
});

test('numbers', () => {
  expect(fn(1)).toBe('1');
  expect(fn(12)).toBe('12');
  expect(fn(0.1)).toBe('0.1');
  expect(fn(0)).toBe('');

  expect(fn(Infinity)).toBe('Infinity');
  expect(fn(NaN)).toBe('');
});

test('numbers (variadic)', () => {
  expect(fn(0, 1)).toBe('1');
  expect(fn(1, 2)).toBe('1 2');
});

test('objects', () => {
  expect(fn({})).toBe('');
  expect(fn({ foo: true })).toBe('foo');
  expect(fn({ foo: true, bar: false })).toBe('foo');
  expect(fn({ foo: 'hiya', bar: 1 })).toBe('foo bar');
  expect(fn({ foo: 1, bar: 0, baz: 1 })).toBe('foo baz');
  expect(fn({ '-foo': 1, '--bar': 1 })).toBe('-foo --bar');
});

test('objects (variadic)', () => {
  expect(fn({}, {})).toBe('');
  expect(fn({ foo: 1 }, { bar: 2 })).toBe('foo bar');
  expect(fn({ foo: 1 }, null, { baz: 1, bat: 0 })).toBe('foo baz');
  expect(fn({ foo: 1 }, {}, {}, { bar: 'a' }, { baz: null, bat: Infinity })).toBe('foo bar bat');
});

test('arrays', () => {
  expect(fn([])).toBe('');
  expect(fn(['foo'])).toBe('foo');
  expect(fn(['foo', 'bar'])).toBe('foo bar');
  expect(fn(['foo', 0, 'baz'])).toBe('foo baz');
});

test('arrays (nested)', () => {
  expect(fn([[[]]])).toBe('');
  expect(fn([[['foo']]])).toBe('foo');
  expect(fn([true, [['foo']]])).toBe('foo');
  expect(fn(['foo', ['bar', ['', [['baz']]]]])).toBe('foo bar baz');
});

test('arrays (variadic)', () => {
  expect(fn([], [])).toBe('');
  expect(fn(['foo'], ['bar'])).toBe('foo bar');
  expect(fn(['foo'], null, ['baz', ''], true, '', [])).toBe('foo baz');
});

test('arrays (no `push` escape)', () => {
  expect(fn({ push: 1 })).toBe('push');
  expect(fn({ pop: true })).toBe('pop');
  expect(fn({ push: true })).toBe('push');
  expect(fn('hello', { world: 1, push: true })).toBe('hello world push');
});

test('functions', () => {
  const foo = () => undefined;
  expect(Reflect.apply(fn, undefined, [foo, 'hello'])).toBe('hello');
  expect(Reflect.apply(fn, undefined, [foo, 'hello', fn])).toBe('hello');
  expect(Reflect.apply(fn, undefined, [foo, 'hello', [[fn], 'world']])).toBe('hello world');
});

test('preserves whitespace and duplicates and ignores bigint values', () => {
  expect(fn(' a ', 'a', BigInt(1), [BigInt(2), 'a'])).toBe(' a  a a');
});

test('includes inherited enumerable keys after own keys', () => {
  const classes = { own: true };
  Object.setPrototypeOf(classes, { inherited: true, ignored: false });
  expect(fn(classes)).toBe('own inherited');
});

test('exports the recursive class value types', () => {
  const dictionary: ClassDictionary = { enabled: Symbol('truthy') };
  const classes: ClassArray = ['base', [dictionary, BigInt(1), false, null, undefined]];
  expectTypeOf(fn).parameters.toEqualTypeOf<ClassValue[]>();
  expect(fn(...classes)).toBe('base enabled');
});
