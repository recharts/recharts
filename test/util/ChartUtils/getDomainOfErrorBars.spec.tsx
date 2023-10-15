import React, { ReactElement, ReactNode } from 'react';
import { findAllByType } from '../../../src/util/ReactUtils';
import { getDomainOfErrorBars } from '../../../src/util/ChartUtils';
import { ErrorBar } from '../../../src/cartesian/ErrorBar';
import { AxisType, LayoutType } from '../../../src/util/types';

jest.mock('../../../src/util/ReactUtils');

const spy = jest.mocked(findAllByType);

function mockErrorBarElements(items: ReactNode[]): ReactElement {
  spy.mockReturnValueOnce(items);
  return <></>;
}

describe('getDomainOfErrorBars', () => {
  it('should return null if ErrorBar is not present in children', () => {
    const item = mockErrorBarElements([]);
    expect(getDomainOfErrorBars([], item, '')).toBe(null);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(undefined, ErrorBar);
  });

  describe('all layout+axis combinations', () => {
    type Case = [layoutType: LayoutType | undefined, axisType: AxisType | undefined, direction: 'x' | 'y' | undefined];
    const relevantCases: Case[] = [
      ['centric', 'angleAxis', undefined],
      ['centric', 'radiusAxis', undefined],
      ['centric', 'xAxis', 'x'],
      ['centric', 'xAxis', undefined],
      ['centric', 'yAxis', 'y'],
      ['centric', 'yAxis', undefined],
      ['centric', 'zAxis', undefined],
      ['centric', undefined, 'x'],
      ['centric', undefined, 'y'],
      ['centric', undefined, undefined],
      ['horizontal', 'yAxis', 'x'],
      ['horizontal', 'yAxis', 'y'],
      ['horizontal', 'yAxis', undefined],
      ['horizontal', undefined, 'x'],
      ['horizontal', undefined, 'y'],
      ['horizontal', undefined, undefined],
      ['radial', 'angleAxis', undefined],
      ['radial', 'radiusAxis', undefined],
      ['radial', 'xAxis', 'x'],
      ['radial', 'xAxis', undefined],
      ['radial', 'yAxis', 'y'],
      ['radial', 'yAxis', undefined],
      ['radial', 'zAxis', undefined],
      ['radial', undefined, 'x'],
      ['radial', undefined, 'y'],
      ['radial', undefined, undefined],
      ['vertical', 'xAxis', 'x'],
      ['vertical', 'xAxis', 'y'],
      ['vertical', 'xAxis', undefined],
      ['vertical', undefined, 'x'],
      ['vertical', undefined, 'y'],
      ['vertical', undefined, undefined],
      [undefined, 'angleAxis', undefined],
      [undefined, 'radiusAxis', undefined],
      [undefined, 'xAxis', 'x'],
      [undefined, 'xAxis', undefined],
      [undefined, 'yAxis', 'y'],
      [undefined, 'yAxis', undefined],
      [undefined, 'zAxis', undefined],
      [undefined, undefined, 'x'],
      [undefined, undefined, 'y'],
      [undefined, undefined, undefined],
    ];
    const returnsNullCases: Case[] = [
      ['centric', 'angleAxis', 'x'],
      ['centric', 'angleAxis', 'y'],
      ['centric', 'radiusAxis', 'x'],
      ['centric', 'radiusAxis', 'y'],
      ['centric', 'xAxis', 'y'],
      ['centric', 'yAxis', 'x'],
      ['centric', 'zAxis', 'x'],
      ['centric', 'zAxis', 'y'],
      ['horizontal', 'angleAxis', 'x'],
      ['horizontal', 'angleAxis', 'y'],
      ['horizontal', 'angleAxis', undefined],
      ['horizontal', 'radiusAxis', 'x'],
      ['horizontal', 'radiusAxis', 'y'],
      ['horizontal', 'radiusAxis', undefined],
      ['horizontal', 'xAxis', 'x'],
      ['horizontal', 'xAxis', 'y'],
      ['horizontal', 'xAxis', undefined],
      ['horizontal', 'zAxis', 'x'],
      ['horizontal', 'zAxis', 'y'],
      ['horizontal', 'zAxis', undefined],
      ['radial', 'angleAxis', 'x'],
      ['radial', 'angleAxis', 'y'],
      ['radial', 'radiusAxis', 'x'],
      ['radial', 'radiusAxis', 'y'],
      ['radial', 'xAxis', 'y'],
      ['radial', 'yAxis', 'x'],
      ['radial', 'zAxis', 'x'],
      ['radial', 'zAxis', 'y'],
      ['vertical', 'angleAxis', 'x'],
      ['vertical', 'angleAxis', 'y'],
      ['vertical', 'angleAxis', undefined],
      ['vertical', 'radiusAxis', 'x'],
      ['vertical', 'radiusAxis', 'y'],
      ['vertical', 'radiusAxis', undefined],
      ['vertical', 'yAxis', 'x'],
      ['vertical', 'yAxis', 'y'],
      ['vertical', 'yAxis', undefined],
      ['vertical', 'zAxis', 'x'],
      ['vertical', 'zAxis', 'y'],
      ['vertical', 'zAxis', undefined],
      [undefined, 'angleAxis', 'x'],
      [undefined, 'angleAxis', 'y'],
      [undefined, 'radiusAxis', 'x'],
      [undefined, 'radiusAxis', 'y'],
      [undefined, 'xAxis', 'y'],
      [undefined, 'yAxis', 'x'],
      [undefined, 'zAxis', 'x'],
      [undefined, 'zAxis', 'y'],
    ];

    it('should cover all cases without duplicates', () => {
      const set = new Set<string>();
      function verify(c: Case) {
        const s = JSON.stringify(c);
        if (set.has(s)) {
          throw new Error(`Test case duplicate: ${s}`);
        }
        set.add(s);
      }
      relevantCases.forEach(verify);
      returnsNullCases.forEach(verify);
      const countOfLayoutOptions = 5; // 4 layouts + undefined
      const countOfAxisOptions = 6; // 5 axes + undefined
      const countOfDirectionOptions = 3; // 2 directions + undefined
      const allCombinationsCount = countOfLayoutOptions * countOfAxisOptions * countOfDirectionOptions;
      expect(set.size).toBe(allCombinationsCount);
    });

    test.each(relevantCases)(
      'layout: %s, axis: %s, direction: %s should return Array with two numbers',
      (layoutType, axisType, direction) => {
        const errorBarElement = { props: { direction } };
        const item = mockErrorBarElements([errorBarElement]);
        const result = getDomainOfErrorBars([], item, 0, layoutType, axisType);
        expect(result).toBeInstanceOf(Array);
      },
    );

    test.each(returnsNullCases)(
      'layout: %s, axis: %s, direction: %s should return null',
      (layoutType, axisType, direction) => {
        const errorBarElement = { props: { direction } };
        const item = mockErrorBarElements([errorBarElement]);
        const result = getDomainOfErrorBars([], item, 0, layoutType, axisType);
        expect(result).toBe(null);
      },
    );
  });

  it('should return [Infinity, -Infinity] if data is an empty array', () => {
    const item = mockErrorBarElements([{ props: {} }]);
    const result = getDomainOfErrorBars([], item, '', undefined, undefined);
    expect(result).toEqual([Infinity, -Infinity]);
  });

  it('should find the extreme values from data, and add errorValues', () => {
    const item = mockErrorBarElements([
      {
        props: { dataKey: () => 3 },
      },
      {
        props: { dataKey: () => 7 },
      },
      {
        props: { dataKey: () => 1 },
      },
    ]);
    const data = [
      {
        x: 11,
      },
      {
        x: 17,
      },
      {
        x: 19,
      },
    ];
    const result = getDomainOfErrorBars(data, item, 'x', undefined, undefined);
    expect(result).toEqual([11 - 7, 19 + 7]);
  });

  it('should use absolute value of error', () => {
    const item = mockErrorBarElements([
      {
        props: { dataKey: () => -100 },
      },
      {
        props: { dataKey: () => 1 },
      },
    ]);
    const data = [
      {
        x: 11,
      },
      {
        x: 17,
      },
      {
        x: 19,
      },
    ];
    const result = getDomainOfErrorBars(data, item, 'x', undefined, undefined);
    expect(result).toEqual([11 - 100, 19 + 100]);
  });

  it('should pick min and max if entries are arrays of numbers and errors are arrays', () => {
    const item = mockErrorBarElements([
      {
        props: { dataKey: () => [-100, -200] },
      },
      {
        props: { dataKey: () => [5, 7] },
      },
    ]);
    const data = [
      {
        x: [4, 3, 2, 1],
      },
      {
        x: [17, 19, 21],
      },
      {
        x: [103, 102, 101],
      },
    ];
    const result = getDomainOfErrorBars(data, item, 'x', undefined, undefined);
    expect(result).toEqual([1 - 100, 103 + 200]);
  });

  it('should return [NaN, NaN] when errors are not numbers', () => {
    const item = mockErrorBarElements([
      {
        props: { dataKey: () => true },
      },
      {
        props: { dataKey: (): string[] => [] },
      },
    ]);
    const data = [
      {
        x: [4, 3, 2, 1],
      },
      {
        x: [17, 19, 21],
      },
      {
        x: [103, 102, 101],
      },
    ];
    const result = getDomainOfErrorBars(data, item, 'x', undefined, undefined);
    expect(result).toEqual([NaN, NaN]);
  });

  it('should return [NaN, NaN] when data entries are not numbers', () => {
    const item = mockErrorBarElements([
      {
        props: { dataKey: () => [-100, -200] },
      },
      {
        props: { dataKey: () => [5, 7] },
      },
    ]);
    const data = [
      {
        x: {},
      },
      {
        x: 'random string',
      },
      {
        x: false,
      },
    ];
    const result = getDomainOfErrorBars(data, item, 'x', undefined, undefined);
    expect(result).toEqual([NaN, NaN]);
  });
});
