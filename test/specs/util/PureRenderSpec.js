import { shallowEqual } from '../../../src/util/PureRender';
import { expect } from 'chai';


describe('shallowEqual', () => {
  it('shallowEqual(a, a) return true', () => {
    const a = {};
    expect(shallowEqual(a, a)).to.equal(true);
  });

  it('shallowEqual({}, 1) return false', () => {
    expect(shallowEqual({}, 1)).to.equal(false);
  });

  it('shallowEqual({k: [1, 3]}, {k: [1, 3, 4]}) return false', () => {
    const a = {k: [1, 3]};
    const b = {k: [1, 3, 4]};
    expect(shallowEqual(a, b)).to.equal(false);
  });

  it('shallowEqual({k: [1, 2]}, {k: [1, 3]}) return false', () => {
    const a = {k: [1, 3]};
    const b = {k: [2, 7]};

    expect(shallowEqual(a, b)).to.equal(false);
  });
});
