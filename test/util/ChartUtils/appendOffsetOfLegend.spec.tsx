import { vi } from 'vitest';
import { appendOffsetOfLegend } from '../../../src/util/ChartUtils';
import { OffsetHorizontal, OffsetVertical, Size } from '../../../src/util/types';
import { LegendSettings } from '../../../src/state/legendSlice';

const emptyOffset: OffsetVertical & OffsetHorizontal = {
  top: 1,
  right: 2,
  bottom: 9,
  left: 5,
};

vi.mock('../../../src/util/ReactUtils');
describe('appendOffsetOfLegend', () => {
  it('should return offset without changes if Legend is not found in children', () => {
    const result = appendOffsetOfLegend(emptyOffset, undefined, undefined);
    expect(result).toBe(emptyOffset);
    expect(result).toEqual(emptyOffset);
  });

  it('should add extra space for a vertical legend', () => {
    const settings: LegendSettings = {
      verticalAlign: 'bottom',
      layout: 'vertical',
      align: 'left',
      itemSorter: 'value',
    };
    const size: Size = {
      width: 100,
      height: 200,
    };
    const result = appendOffsetOfLegend(emptyOffset, settings, size);
    expect(result).toEqual({
      ...emptyOffset,
      left: 105,
    });
  });

  it('should add extra space for a horizontal legend, middle aligned', () => {
    const settings: LegendSettings = {
      layout: 'horizontal',
      verticalAlign: 'middle',
      align: 'left',
      itemSorter: 'value',
    };
    const size: Size = {
      width: 100,
      height: 200,
    };
    const result = appendOffsetOfLegend(emptyOffset, settings, size);
    expect(result).toEqual({
      ...emptyOffset,
      left: 105,
    });
  });

  it('should not modify the original offset that was passed as an argument', () => {
    const clone: OffsetVertical & OffsetHorizontal = { ...emptyOffset };
    const settings: LegendSettings = {
      layout: 'horizontal',
      verticalAlign: 'middle',
      align: 'left',
      itemSorter: 'value',
    };
    const size: Size = {
      width: 100,
      height: 200,
    };
    appendOffsetOfLegend(emptyOffset, settings, size);

    expect(emptyOffset).toEqual(clone);
  });

  it('should add extra space for a horizontal legend', () => {
    const settings: LegendSettings = {
      align: 'left',
      layout: 'horizontal',
      verticalAlign: 'bottom',
      itemSorter: 'value',
    };
    const size: Size = {
      width: 100,
      height: 200,
    };
    const result = appendOffsetOfLegend(emptyOffset, settings, size);
    expect(result).toEqual({ ...emptyOffset, bottom: 209 });
  });

  it('should add extra space for a vertical legend, center aligned', () => {
    const settings: LegendSettings = {
      align: 'center',
      layout: 'vertical',
      verticalAlign: 'bottom',
      itemSorter: 'value',
    };
    const size: Size = {
      width: 100,
      height: 200,
    };
    const result = appendOffsetOfLegend(emptyOffset, settings, size);
    expect(result).toEqual({ ...emptyOffset, bottom: 209 });
  });

  it('should do nothing for vertical legend with align: center', () => {
    const settings: LegendSettings = {
      align: 'center',
      layout: 'vertical',
      verticalAlign: 'middle',
      itemSorter: 'value',
    };
    const size: Size = {
      width: 100,
      height: 200,
    };
    const result = appendOffsetOfLegend(emptyOffset, settings, size);
    expect(result).toEqual(emptyOffset);
  });

  it('should add space for horizontal legend with verticalAlign: middle and align:left', () => {
    const settings: LegendSettings = {
      align: 'left',
      layout: 'horizontal',
      verticalAlign: 'middle',
      itemSorter: 'value',
    };
    const size: Size = {
      width: 100,
      height: 200,
    };

    const result = appendOffsetOfLegend(emptyOffset, settings, size);
    expect(result).toEqual({ ...emptyOffset, left: 105 });
  });
});
