import { vi } from 'vitest';
import { appendOffsetOfLegend } from '../../../src/util/ChartUtils';
import { ChartOffset, Size } from '../../../src/util/types';
import { LegendSettings } from '../../../src/state/legendSlice';

vi.mock('../../../src/util/ReactUtils');
describe('appendOffsetOfLegend', () => {
  it('should return offset without changes if Legend is not found in children', () => {
    const offset: ChartOffset = {
      bottom: 9,
      left: 5,
    };
    const result = appendOffsetOfLegend(offset, undefined, undefined);
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
    const settings: LegendSettings = {
      verticalAlign: 'bottom',
      layout: 'vertical',
      align: 'left',
    };
    const size: Size = {
      width: 100,
      height: 200,
    };
    const result = appendOffsetOfLegend(offset, settings, size);
    expect(result).toEqual({ bottom: 9, left: 105 });
  });

  it('should add extra space for a horizontal legend, middle aligned', () => {
    const offset: ChartOffset = {
      bottom: 9,
      left: 5,
    };
    const settings: LegendSettings = {
      layout: 'horizontal',
      verticalAlign: 'middle',
      align: 'left',
    };
    const size: Size = {
      width: 100,
      height: 200,
    };
    const result = appendOffsetOfLegend(offset, settings, size);
    expect(result).toEqual({ bottom: 9, left: 105 });
  });

  it('should not modify the original offset that was passed as an argument', () => {
    const offset: ChartOffset = {
      bottom: 9,
      left: 5,
    };
    const settings: LegendSettings = {
      layout: 'horizontal',
      verticalAlign: 'middle',
      align: 'left',
    };
    const size: Size = {
      width: 100,
      height: 200,
    };
    appendOffsetOfLegend(offset, settings, size);

    expect(offset).toEqual({ bottom: 9, left: 5 });
  });

  it('should add extra space for a horizontal legend', () => {
    const offset: ChartOffset = {
      bottom: 9,
      right: 14,
    };
    const settings: LegendSettings = {
      align: 'left',
      layout: 'horizontal',
      verticalAlign: 'bottom',
    };
    const size: Size = {
      width: 100,
      height: 200,
    };
    const result = appendOffsetOfLegend(offset, settings, size);
    expect(result).toEqual({ bottom: 209, right: 14 });
  });

  it('should add extra space for a vertical legend, center aligned', () => {
    const offset: ChartOffset = {
      bottom: 9,
      right: 14,
    };
    const settings: LegendSettings = {
      align: 'center',
      layout: 'vertical',
      verticalAlign: 'bottom',
    };
    const size: Size = {
      width: 100,
      height: 200,
    };
    const result = appendOffsetOfLegend(offset, settings, size);
    expect(result).toEqual({ bottom: 209, right: 14 });
  });

  it('should do nothing for vertical legend with align: center', () => {
    const offset: ChartOffset = {
      bottom: 9,
      right: 14,
    };
    const settings: LegendSettings = {
      align: 'center',
      layout: 'vertical',
      verticalAlign: 'middle',
    };
    const size: Size = {
      width: 100,
      height: 200,
    };
    const result = appendOffsetOfLegend(offset, settings, size);
    expect(result).toEqual({ bottom: 9, right: 14 });
  });

  it('should do nothing for horizontal legend with verticalAlign: middle', () => {
    const offset: ChartOffset = {
      bottom: 9,
      right: 14,
    };
    const settings: LegendSettings = {
      align: 'left',
      layout: 'horizontal',
      verticalAlign: 'middle',
    };
    const size: Size = {
      width: 100,
      height: 200,
    };

    const result = appendOffsetOfLegend(offset, settings, size);
    expect(result).toEqual({ bottom: 9, right: 14 });
  });
});
