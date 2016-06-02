import { expect } from 'chai';
import { getStringSize } from '../../../src/util/DOMUtils';

describe('DOMUtils', () => {
  it('getStringSize() return 0', () => {
    expect(getStringSize()).to.equal(0);
  });
});
