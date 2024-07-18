import { vi } from 'vitest';
import { appendOffsetOfLegend } from '../../../src/util/ChartUtils';
import { ChartOffset } from '../../../src/util/types';
import { LegendState } from '../../../src/state/legendSlice';

vi.mock('../../../src/util/ReactUtils');
describe('appendOffsetOfLegend', () => {
  it('should return offset without changes if Legend is not found in children', () => {
    const offset: ChartOffset = {
      bottom: 9,
      left: 5,
    };
    const result = appendOffsetOfLegend(offset, undefined);
    expect(result).toBe(offset);
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
    const props: LegendState = {
      verticalAlign: 'bottom',
      layout: 'vertical',
      align: 'left',
      width: 100,
      height: 200,
    };
    const result = appendOffsetOfLegend(offset, props);
    expect(result).toEqual({ bottom: 9, left: 105 });
  });

  it('should add extra space for a horizontal legend, middle aligned', () => {
    const offset: ChartOffset = {
      bottom: 9,
      left: 5,
    };
    const props: LegendState = {
      layout: 'horizontal',
      verticalAlign: 'middle',
      align: 'left',
      width: 100,
      height: 200,
    };
    const result = appendOffsetOfLegend(offset, props);
    expect(result).toEqual({ bottom: 9, left: 105 });
  });

  it('should not modify the original offset that was passed as an argument', () => {
    const offset: ChartOffset = {
      bottom: 9,
      left: 5,
    };
    const props: LegendState = {
      layout: 'horizontal',
      verticalAlign: 'middle',
      align: 'left',
      width: 100,
      height: 200,
    };
    appendOffsetOfLegend(offset, props);

    expect(offset).toEqual({ bottom: 9, left: 5 });
  });

  it('should add extra space for a horizontal legend', () => {
    const offset: ChartOffset = {
      bottom: 9,
      right: 14,
    };
    const props: LegendState = {
      layout: 'horizontal',
      verticalAlign: 'bottom',
      align: 'left',
      width: 100,
      height: 200,
    };
    const result = appendOffsetOfLegend(offset, props);
    expect(result).toEqual({ bottom: 209, right: 14 });
  });

  it('should add extra space for a vertical legend, center aligned', () => {
    const offset: ChartOffset = {
      bottom: 9,
      right: 14,
    };
    const props: LegendState = {
      layout: 'horizontal',
      verticalAlign: 'bottom',
      align: 'center',
      width: 100,
      height: 200,
    };
    const result = appendOffsetOfLegend(offset, props);
    expect(result).toEqual({ bottom: 209, right: 14 });
  });

  it('should do nothing for vertical legend with align: center', () => {
    const offset: ChartOffset = {
      bottom: 9,
      right: 14,
    };
    const props: LegendState = {
      verticalAlign: 'middle',
      layout: 'vertical',
      align: 'center',
      width: 100,
      height: 200,
    };
    const result = appendOffsetOfLegend(offset, props);
    expect(result).toEqual({ bottom: 9, right: 14 });
  });

  it('should do nothing for horizontal legend with verticalAlign: middle', () => {
    const offset: ChartOffset = {
      bottom: 9,
      right: 14,
    };
    const props: LegendState = {
      align: 'left',
      layout: 'horizontal',
      verticalAlign: 'middle',
      width: 100,
      height: 200,
    };

    const result = appendOffsetOfLegend(offset, props);
    expect(result).toEqual({ bottom: 9, right: 14 });
  });
});
