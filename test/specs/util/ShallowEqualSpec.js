import { expect } from 'chai';
import { shallowEqual } from '../../../src/util/ShallowEqual';

/* eslint-disable max-len */
describe('shallowEqual', () => {
  it('should return true when the same top level keys have the same top level values, when they are different instances', () => {
    expect(shallowEqual({ foo: true, bar: false }, { foo: true, bar: false })).to.equal(true);
  });

  it('should return true when top level values of an Object are non-primitives but are the same instance', () => {
    const a = [1];
    // {a: [1]}
    expect(shallowEqual({ a }, { a })).to.equal(true);
  });

  it('should return true when top level values of an Array are non-primitives but are the same instance', () => {
    const a = [1];
    // [[1]]
    expect(shallowEqual([a], [a])).to.equal(true);
  });

  it('should return false when top level values of an Object are non-primitives and are different instances', () => {
    expect(shallowEqual({ a: [1] }, { a: [1] })).to.equal(false);
  });

  it('should return false when a has the same keys but different values', () => {
    const a = { k: 1 };
    const b = { k: 2 };

    expect(shallowEqual(a, b)).to.equal(false);
  });

  it('should return false when a has more keys ', () => {
    const a = { k: 1, x: 5 };
    const b = { k: 2 };

    expect(shallowEqual(a, b)).to.equal(false);
  });

  it('should return false when b has more keys than a', () => {
    const a = { k: 1 };
    const b = { k: 2, x: 3 };

    expect(shallowEqual(a, b)).to.equal(false);
  });
});
