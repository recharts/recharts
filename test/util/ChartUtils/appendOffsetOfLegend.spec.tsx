import { ReactNode } from 'react';
import { vi } from 'vitest';
import { appendOffsetOfLegend } from '../../../src/util/ChartUtils';
import { ChartOffset } from '../../../src/util/types';
import { getLegendProps } from '../../../src/util/getLegendProps';
import { BoundingBox } from '../../../src/util/useGetBoundingClientRect';
import { findChildByType } from '../../../src/util/ReactUtils';

vi.mock('../../../src/util/ReactUtils');

const spy = vi.mocked(findChildByType);

function mockDomElement(item: ReactNode) {
  // @ts-expect-error I cannot find a way to type DetailedReactHTMLElement properly
  spy.mockReturnValueOnce(item);
}

function mockLegendProps(props: ReturnType<typeof getLegendProps>): ReactNode[] {
  const mockLegendItem = { props };
  mockDomElement(mockLegendItem);
  return [mockLegendItem];
}

function createMockDomRect(width: number, height: number): BoundingBox {
  return { width, height };
}

describe('appendOffsetOfLegend', () => {
  it('should return offset without changes if Legend is not found in children', () => {
    const offset: ChartOffset = {
      bottom: 9,
      left: 5,
    };
    const children: ReactNode[] = [];
    const legendBox = createMockDomRect(100, 200);
    const result = appendOffsetOfLegend(offset, { margin: {}, children }, legendBox);
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
    const children = mockLegendProps({
      layout: 'vertical',
      align: 'left',
    });
    const result = appendOffsetOfLegend(offset, { margin: {}, children }, null);
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
    const children = mockLegendProps({
      layout: 'vertical',
      align: 'left',
    });
    const legendBox = createMockDomRect(100, 200);
    const result = appendOffsetOfLegend(offset, { margin: {}, children }, legendBox);
    expect(result).toEqual({ bottom: 9, left: 105 });
  });

  it('should add extra space for a horizontal legend, middle aligned', () => {
    const offset: ChartOffset = {
      bottom: 9,
      left: 5,
    };
    const children = mockLegendProps({
      layout: 'horizontal',
      verticalAlign: 'middle',
      align: 'left',
    });
    const legendBox = createMockDomRect(100, 200);
    const result = appendOffsetOfLegend(offset, { margin: {}, children }, legendBox);
    expect(result).toEqual({ bottom: 9, left: 105 });
  });

  it('should do nothing if align is not set', () => {
    const offset: ChartOffset = {
      bottom: 9,
      left: 5,
    };
    const children = mockLegendProps({
      layout: 'horizontal',
      verticalAlign: 'middle',
    });
    const legendBox = createMockDomRect(100, 200);
    const result = appendOffsetOfLegend(offset, { margin: {}, children }, legendBox);
    expect(result).toEqual({ bottom: 9, left: 5 });
  });

  it('should not modify the original offset that was passed as an argument', () => {
    const offset: ChartOffset = {
      bottom: 9,
      left: 5,
    };
    const children = mockLegendProps({
      layout: 'horizontal',
      verticalAlign: 'middle',
      align: 'left',
    });
    const legendBox = createMockDomRect(100, 200);
    appendOffsetOfLegend(offset, { margin: {}, children }, legendBox);
    expect(offset).toEqual({ bottom: 9, left: 5 });
  });

  it('should add extra space for a horizontal legend', () => {
    const offset: ChartOffset = {
      bottom: 9,
      right: 14,
    };
    const children = mockLegendProps({
      layout: 'horizontal',
      verticalAlign: 'bottom',
    });
    const legendBox = createMockDomRect(100, 200);
    const result = appendOffsetOfLegend(offset, { margin: {}, children }, legendBox);
    expect(result).toEqual({ bottom: 209, right: 14 });
  });

  it('should add extra space for a vertical legend, center aligned', () => {
    const offset: ChartOffset = {
      bottom: 9,
      right: 14,
    };
    const children = mockLegendProps({
      layout: 'vertical',
      align: 'center',
      verticalAlign: 'bottom',
    });
    const legendBox = createMockDomRect(100, 200);
    const result = appendOffsetOfLegend(offset, { margin: {}, children }, legendBox);
    expect(result).toEqual({ bottom: 209, right: 14 });
  });

  it('should do nothing for vertical legend with align: center', () => {
    const offset: ChartOffset = {
      bottom: 9,
      right: 14,
    };
    const children = mockLegendProps({
      layout: 'vertical',
      align: 'center',
    });
    const legendBox = createMockDomRect(100, 200);
    const result = appendOffsetOfLegend(offset, { margin: {}, children }, legendBox);
    expect(result).toEqual({ bottom: 9, right: 14 });
  });

  it('should do nothing for horizontal legend with verticalAlign: middle', () => {
    const offset: ChartOffset = {
      bottom: 9,
      right: 14,
    };
    const children = mockLegendProps({
      layout: 'horizontal',
      verticalAlign: 'middle',
    });
    const legendBox = createMockDomRect(100, 200);
    const result = appendOffsetOfLegend(offset, { margin: {}, children }, legendBox);
    expect(result).toEqual({ bottom: 9, right: 14 });
  });
});
