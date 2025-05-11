import { describe, test, expect } from 'vitest';
import { ErrorBarsSettings } from '../../src/state/graphicalItemsSlice';
import { fromMainValueToError, getErrorDomainByDataKey } from '../../src/state/selectors/axisSelectors';

describe('fromMainValueToError', () => {
  const invalidValues: ReadonlyArray<unknown> = [
    null,
    undefined,
    'a',
    NaN,
    Symbol('a'),
    [],
    {},
    () => {},
    new Date(),
    new Map(),
    new Set(),
    Infinity,
  ];

  test.each(invalidValues)('should return undefined when the input is %s', value => {
    expect(fromMainValueToError(value)).toBeUndefined();
  });

  const validValues = [
    { value: [1, 2], expected: [1, 2] },
    { value: [2, 1], expected: [1, 2] },
    { value: [1, 2, 3], expected: [1, 3] },
    { value: [3, 2, 1], expected: [1, 3] },
    { value: 3, expected: [3, 3] },
    { value: -3, expected: [-3, -3] },
  ];

  test.each(validValues)('should return %s when the input is %s', ({ value, expected }) => {
    expect(fromMainValueToError(value)).toEqual(expected);
  });
});

describe('getErrorDomainByDataKey', () => {
  describe.each([null, undefined])('when entry = %s', entry => {
    it('should return empty array when errorBar.dataKey is string', () => {
      const errorBars: ReadonlyArray<ErrorBarsSettings> = [{ dataKey: 'uv', direction: 'x' }];
      expect(getErrorDomainByDataKey(entry, 1, errorBars)).toEqual([]);
    });

    it(`should return empty array even when errorBars.dataKey returns a number anyway;
              this behaviour is inherited from getValueByDataKey and is not technically required here but here we are`, () => {
      const errorBars: ReadonlyArray<ErrorBarsSettings> = [{ dataKey: () => 7, direction: 'x' }];
      expect(getErrorDomainByDataKey(entry, 1, errorBars)).toEqual([]);
    });
  });

  it('should return empty array when errorBars is empty', () => {
    expect(getErrorDomainByDataKey(1, 1, [])).toEqual([]);
  });

  it.each([null, undefined])('should return empty array when errorBars.dataKey is %s', dataKey => {
    const errorBars: ReadonlyArray<ErrorBarsSettings> = [{ dataKey, direction: 'x' }];
    expect(getErrorDomainByDataKey(1, 1, errorBars)).toEqual([]);
  });

  it('should return all ErrorValues in a single array when the errorBar.dataKey results in a number', () => {
    const entry = {
      val: 2,
      errX: 3,
      errY: 7,
    };
    const errorBars: ReadonlyArray<ErrorBarsSettings> = [
      { dataKey: 'errX', direction: 'x' },
      { dataKey: 'errY', direction: 'y' },
    ];
    expect(getErrorDomainByDataKey(entry, 2, errorBars)).toEqual([-1, 5, -5, 9]);
  });

  it('should return array of all errors when the errorBar.dataKey results in an array', () => {
    const entry = {
      val: 2,
      errX: [3, 7],
      errY: [11, 13],
    };
    const errorBars: ReadonlyArray<ErrorBarsSettings> = [
      { dataKey: 'errX', direction: 'x' },
      { dataKey: 'errY', direction: 'y' },
    ];
    expect(getErrorDomainByDataKey(entry, 2, errorBars)).toEqual([-1, 9, -9, 15]);
  });

  it('should return empty array if errorBars are undefined', () => {
    const entry = {
      val: 2,
      errX: [3, 7],
      errY: [11, 13],
    };
    const errorBars: ReadonlyArray<ErrorBarsSettings> | undefined = undefined;
    expect(getErrorDomainByDataKey(entry, 2, errorBars)).toEqual([]);
  });
});
