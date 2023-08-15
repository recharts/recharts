import { shallowEqual } from '../../src/util/ShallowEqual';

const arrayValue = [1];
const objectValue = { foo: 'bar' };

interface TestDefinition {
  should: string;
  a: unknown;
  b: unknown;
  result: boolean;
}

const tests: TestDefinition[] = [
  {
    should:
      'return true when the same top level keys have the same top level values, when they are different instances',
    a: { foo: true, bar: false },
    b: { foo: true, bar: false },
    result: true,
  },
  {
    should: 'return true when top level values of an Object are non-primitives but are the same instance',
    a: { value: arrayValue },
    b: { value: arrayValue },
    result: true,
  },
  {
    should: 'return true when top level values of an Array are non-primitives but are the same instance',
    a: [arrayValue],
    b: [arrayValue],
    result: true,
  },
  {
    should: 'return true when top level values of an Array are non-primitives but are the same instance',
    a: { a: [1] },
    b: { a: [1] },
    result: false,
  },
  {
    should: 'return false when a has the same keys but different values',
    a: { k: 1 },
    b: { k: 2 },
    result: false,
  },
  {
    should: 'return false when a has more keys ',
    a: { k: 1, x: 5 },
    b: { k: 2 },

    result: false,
  },
  {
    should: 'return false when b has more keys than a',
    a: { k: 1 },
    b: { k: 2, x: 3 },
    result: false,
  },
  {
    should: 'return false when a contains undefined',
    a: { first: undefined },
    b: { second: 'green' },
    result: false,
  },
  {
    should: 'return true with empty objects',
    a: {},
    b: {},
    result: true,
  },
  {
    should: 'return true when passing the same instance',
    a: objectValue,
    b: objectValue,
    result: true,
  },
  {
    should: 'return false if there are corresponding elements which are not ===',
    a: [objectValue, objectValue],
    b: [objectValue, { foo: 'bar' }],
    result: false,
  },
  {
    should: 'return true if all corresponding elements are ===',
    a: [objectValue, objectValue],
    b: [objectValue, objectValue],
    result: true,
  },
];

describe('shallowEqual', () => {
  tests.forEach(({ should, a, b, result }) => {
    it(should, () => {
      expect(shallowEqual(a, b)).toBe(result);
    });
  });
});
