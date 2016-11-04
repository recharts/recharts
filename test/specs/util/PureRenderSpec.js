import pureRender, { shallowEqual } from '../../../src/util/PureRender';
import { expect } from 'chai';

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

describe('pureRender Decorator -> shouldComponentUpdate', () => {

  // Test that the pureRender decorator is modifying the class
  // it decorates as expected with the shouldComponentUpdate function
  @pureRender
  class TestClass {
    props = { foo: 1 };
    state = { bar: 2 };
  }

  const myTestClass = new TestClass();
  const shouldComponentUpdate = myTestClass.shouldComponentUpdate;

  it('should return false when props and state are the same from one render to the next', () => {
    expect(shouldComponentUpdate.apply(myTestClass, [{ foo: 1 }, { bar: 2 }])).to.equal(false);
  });

  it('should return true when props are different from one render to the next', () => {
    expect(shouldComponentUpdate.apply(myTestClass, [{ foo: 3 }, { bar: 2 }])).to.equal(true);
  });

  it('should return true when state is different from one render to the next', () => {
    expect(shouldComponentUpdate.apply(myTestClass, [{ foo: 1 }, { bar: 3 }])).to.equal(true);
  });
});
