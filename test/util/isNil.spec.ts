import { isNil } from '../../src/util/isNil';

describe('isNil', () => {
  test('detects undefined', () => {
    const isUndefinedNil = isNil(undefined);
    expect(isUndefinedNil).toBe(true);
  });

  test('detects null', () => {
    const isNullNil = isNil(null);
    expect(isNullNil).toBe(true);
  });

  test('can be used in Array.prototype.filter', () => {
    const array = [undefined, null, 0, '1', NaN, ''];
    const filtered = array.filter(isNil);
    expect(filtered).toEqual([undefined, null]);
  });
});
