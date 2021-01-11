import { getStringSize } from '../../src/util/DOMUtils';

describe('DOMUtils', () => {
  it('getStringSize() return 0', () => {
    expect(getStringSize()).toEqual({ width: 0, height: 0 });
  });
});
