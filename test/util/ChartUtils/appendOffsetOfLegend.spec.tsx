import { vi } from 'vitest';
import { appendOffsetOfLegend } from '../../../src/util/ChartUtils';
import { ChartOffset } from '../../../src/util/types';
import { BoundingBox } from '../../../src/util/useGetBoundingClientRect';

vi.mock('../../../src/util/ReactUtils');

function createMockDomRect(width: number, height: number): BoundingBox {
  return { width, height };
}

describe('appendOffsetOfLegend', () => {
  it('should return offset without changes if Legend is not found in children', () => {
    const offset: ChartOffset = {
      bottom: 9,
      left: 5,
    };
    const legendBox = createMockDomRect(100, 200);
    const result = appendOffsetOfLegend(offset, { props: {}, type: '', key: 'keys' }, legendBox);
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
    const props = {
      layout: 'vertical' as const,
      align: 'left' as const,
    };
    const result = appendOffsetOfLegend(offset, { props, type: '', key: 'keys' }, null);
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
    const props = {
      layout: 'vertical' as const,
      align: 'left' as const,
    };
    const legendBox = createMockDomRect(100, 200);
    const result = appendOffsetOfLegend(offset, { props, type: '', key: 'keys' }, legendBox);
    expect(result).toEqual({ bottom: 9, left: 105 });
  });

  it('should add extra space for a horizontal legend, middle aligned', () => {
    const offset: ChartOffset = {
      bottom: 9,
      left: 5,
    };
    const props = {
      layout: 'horizontal' as const,
      verticalAlign: 'middle' as const,
      align: 'left' as const,
    };
    const legendBox = createMockDomRect(100, 200);
    const result = appendOffsetOfLegend(offset, { props, type: '', key: 'keys' }, legendBox);
    expect(result).toEqual({ bottom: 9, left: 105 });
  });

  it('should do nothing if align is not set', () => {
    const offset: ChartOffset = {
      bottom: 9,
      left: 5,
    };
    const props = {
      layout: 'horizontal' as const,
      verticalAlign: 'middle' as const,
    };
    const legendBox = createMockDomRect(100, 200);
    const result = appendOffsetOfLegend(offset, { props, type: '', key: 'keys' }, legendBox);
    expect(result).toEqual({ bottom: 9, left: 5 });
  });

  it('should not modify the original offset that was passed as an argument', () => {
    const offset: ChartOffset = {
      bottom: 9,
      left: 5,
    };
    const props = {
      layout: 'horizontal' as const,
      verticalAlign: 'middle' as const,
      align: 'left' as const,
    };
    const legendBox = createMockDomRect(100, 200);
    appendOffsetOfLegend(offset, { props, type: '', key: 'keys' }, legendBox);

    expect(offset).toEqual({ bottom: 9, left: 5 });
  });

  it('should add extra space for a horizontal legend', () => {
    const offset: ChartOffset = {
      bottom: 9,
      right: 14,
    };
    const props = {
      layout: 'horizontal' as const,
      verticalAlign: 'bottom' as const,
    };
    const legendBox = createMockDomRect(100, 200);
    const result = appendOffsetOfLegend(offset, { props, type: '', key: 'keys' }, legendBox);
    expect(result).toEqual({ bottom: 209, right: 14 });
  });

  it('should add extra space for a vertical legend, center aligned', () => {
    const offset: ChartOffset = {
      bottom: 9,
      right: 14,
    };
    const props = {
      layout: 'horizontal' as const,
      verticalAlign: 'bottom' as const,
      align: 'center' as const,
    };
    const legendBox = createMockDomRect(100, 200);
    const result = appendOffsetOfLegend(offset, { props, type: '', key: 'keys' }, legendBox);
    expect(result).toEqual({ bottom: 209, right: 14 });
  });

  it('should do nothing for vertical legend with align: center', () => {
    const offset: ChartOffset = {
      bottom: 9,
      right: 14,
    };
    const props = {
      layout: 'vertical' as const,
      align: 'center' as const,
    };
    const legendBox = createMockDomRect(100, 200);
    const result = appendOffsetOfLegend(offset, { props, type: '', key: 'keys' }, legendBox);
    expect(result).toEqual({ bottom: 9, right: 14 });
  });

  it('should do nothing for horizontal legend with verticalAlign: middle', () => {
    const offset: ChartOffset = {
      bottom: 9,
      right: 14,
    };
    const props = {
      layout: 'horizontal' as const,
      verticalAlign: 'middle' as const,
    };

    const legendBox = createMockDomRect(100, 200);
    const result = appendOffsetOfLegend(offset, { props, type: '', key: 'keys' }, legendBox);
    expect(result).toEqual({ bottom: 9, right: 14 });
  });
});
