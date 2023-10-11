import React, { ReactNode } from 'react';
import { appendOffsetOfLegend } from '../../../src/util/ChartUtils';
import { ChartOffset } from '../../../src/util/types';
import { getLegendProps } from '../../../src/util/getLegendProps';

jest.mock('../../../src/util/getLegendProps');

const spy = jest.mocked(getLegendProps);

function mockLegendProps(props: null | Omit<ReturnType<typeof getLegendProps>, 'item'>) {
  spy.mockReturnValueOnce({ ...props, item: <p /> });
}

function createMockDomRect(width: number, height: number): DOMRect {
  // @ts-expect-error this is job for jsdom but jsdom does not implement DOMRect yet.
  // See https://github.com/jsdom/jsdom/issues/2716
  return { width, height };
}

describe('appendOffsetOfLegend', () => {
  it('should return offset without changes if legendProps are not defined', () => {
    const offset: ChartOffset = {
      bottom: 9,
      left: 5,
    };
    mockLegendProps(null);
    const legendBox = createMockDomRect(100, 200);
    const result = appendOffsetOfLegend(offset, undefined, { margin: {} }, legendBox);
    expect(result).toBe(offset);
    expect(result).toEqual({
      bottom: 9,
      left: 5,
    });
  });

  it('should return offset without changes if legendBox is not defined', () => {
    const offset: ChartOffset = {
      bottom: 9,
      left: 5,
    };
    mockLegendProps({
      layout: 'vertical',
      align: 'left',
    });
    const result = appendOffsetOfLegend(offset, undefined, { margin: {} }, null);
    expect(result).toEqual({
      bottom: 9,
      left: 5,
    });
  });

  it('should add extra space for a vertical legend', () => {
    const offset: ChartOffset = {
      bottom: 9,
      left: 5,
    };
    mockLegendProps({
      layout: 'vertical',
      align: 'left',
    });
    const legendBox = createMockDomRect(100, 200);
    const result = appendOffsetOfLegend(offset, undefined, { margin: {} }, legendBox);
    expect(result).toEqual({ bottom: 9, left: 105 });
  });

  it('should add extra space for a horizontal legend, middle aligned', () => {
    const offset: ChartOffset = {
      bottom: 9,
      left: 5,
    };
    mockLegendProps({
      layout: 'horizontal',
      verticalAlign: 'middle',
      align: 'left',
    });
    const legendBox = createMockDomRect(100, 200);
    const result = appendOffsetOfLegend(offset, undefined, { margin: {} }, legendBox);
    expect(result).toEqual({ bottom: 9, left: 105 });
  });

  it('should do nothing if align is not set', () => {
    const offset: ChartOffset = {
      bottom: 9,
      left: 5,
    };
    mockLegendProps({
      layout: 'horizontal',
      verticalAlign: 'middle',
    });
    const legendBox = createMockDomRect(100, 200);
    const result = appendOffsetOfLegend(offset, undefined, { margin: {} }, legendBox);
    expect(result).toEqual({ bottom: 9, left: 5 });
  });

  it('should not modify the original offset that was passed as an argument', () => {
    const offset: ChartOffset = {
      bottom: 9,
      left: 5,
    };
    mockLegendProps({
      layout: 'horizontal',
      verticalAlign: 'middle',
      align: 'left',
    });
    const legendBox = createMockDomRect(100, 200);
    appendOffsetOfLegend(offset, undefined, { margin: {} }, legendBox);
    expect(offset).toEqual({ bottom: 9, left: 5 });
  });

  it('should add extra space for a horizontal legend', () => {
    const offset: ChartOffset = {
      bottom: 9,
      right: 14,
    };
    mockLegendProps({
      layout: 'horizontal',
      verticalAlign: 'bottom',
    });
    const legendBox = createMockDomRect(100, 200);
    const result = appendOffsetOfLegend(offset, undefined, { margin: {} }, legendBox);
    expect(result).toEqual({ bottom: 209, right: 14 });
  });

  it('should add extra space for a vertical legend, center aligned', () => {
    const offset: ChartOffset = {
      bottom: 9,
      right: 14,
    };
    mockLegendProps({
      layout: 'vertical',
      align: 'center',
      verticalAlign: 'bottom',
    });
    const legendBox = createMockDomRect(100, 200);
    const result = appendOffsetOfLegend(offset, undefined, { margin: {} }, legendBox);
    expect(result).toEqual({ bottom: 209, right: 14 });
  });

  it('should do nothing for vertical legend with align: center', () => {
    const offset: ChartOffset = {
      bottom: 9,
      right: 14,
    };
    mockLegendProps({
      layout: 'vertical',
      align: 'center',
    });
    const legendBox = createMockDomRect(100, 200);
    const result = appendOffsetOfLegend(offset, undefined, { margin: {} }, legendBox);
    expect(result).toEqual({ bottom: 9, right: 14 });
  });

  it('should do nothing for horizontal legend with verticalAlign: middle', () => {
    const offset: ChartOffset = {
      bottom: 9,
      right: 14,
    };
    mockLegendProps({
      layout: 'horizontal',
      verticalAlign: 'middle',
    });
    const legendBox = createMockDomRect(100, 200);
    const result = appendOffsetOfLegend(offset, undefined, { margin: {} }, legendBox);
    expect(result).toEqual({ bottom: 9, right: 14 });
  });

  it('should pass margin to getLegendProps', () => {
    const children: ReactNode[] = [];
    spy.mockReset();
    appendOffsetOfLegend({}, undefined, { margin: { left: 10, right: 20 }, children, width: 100 }, null);
    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith({ children, legendWidth: 70 });
  });
});
