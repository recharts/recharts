import { isFunction } from '../../src/util/isFunction';

describe('isFunction', () => {
  // all the above as parametrised test
  it.each([
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    [() => {}, true],
    // eslint-disable-next-line func-names, @typescript-eslint/no-empty-function
    [function () {}, true],
    // eslint-disable-next-line no-new-func
    [new Function(), true],
    [(value: unknown) => value, true],
    [undefined, false],
    [null, false],
    [0, false],
    ['1', false],
    [NaN, false],
    ['', false],
  ])('detects function', (func, expected) => {
    const isFunctionFunc = isFunction(func);
    expect(isFunctionFunc).toBe(expected);
  });
});
