import { describe, it, expect } from 'vitest';
import { computeWaterfallData } from '../../src/util/waterfall';

describe('computeWaterfallData', () => {
  it('stacks positive values upward from 0', () => {
    const data = [
      { name: 'A', value: 10 },
      { name: 'B', value: 5 },
    ];
    const result = computeWaterfallData({ data, dataKey: 'value' });

    expect(result).toHaveLength(2);
    expect(result[0].waterfallRange).toEqual([0, 10]);
    expect(result[1].waterfallRange).toEqual([10, 15]);
  });

  it('stacks negative values downward from 0', () => {
    const data = [
      { name: 'A', value: -4 },
      { name: 'B', value: -6 },
    ];
    const result = computeWaterfallData({ data, dataKey: 'value' });

    expect(result[0].waterfallRange).toEqual([-4, 0]);
    expect(result[1].waterfallRange).toEqual([-10, -4]);
  });

  it('handles mixed positive and negative values', () => {
    const data = [
      { name: 'Revenue', value: 100 },
      { name: 'Costs', value: -30 },
      { name: 'Bonus', value: 20 },
    ];
    const result = computeWaterfallData({ data, dataKey: 'value' });

    expect(result[0].waterfallRange).toEqual([0, 100]);
    expect(result[1].waterfallRange).toEqual([70, 100]);
    expect(result[2].waterfallRange).toEqual([70, 90]);
  });

  it('anchors total bars to zero', () => {
    const data = [
      { name: 'Revenue', value: 100, isTotal: false },
      { name: 'Costs', value: -30, isTotal: false },
      { name: 'Profit', value: 70, isTotal: true },
    ];
    const result = computeWaterfallData({ data, dataKey: 'value', totalKey: 'isTotal' });

    const total = result[2];
    expect(total.isTotal).toBe(true);
    expect(total.waterfallRange).toEqual([0, 70]);
  });

  it('anchors negative total bars correctly', () => {
    const data = [
      { name: 'Loss', value: -50, isTotal: false },
      { name: 'Net', value: -50, isTotal: true },
    ];
    const result = computeWaterfallData({ data, dataKey: 'value', totalKey: 'isTotal' });

    expect(result[1].waterfallRange).toEqual([-50, 0]);
  });

  it('does not advance running total for total bars', () => {
    const data = [
      { name: 'A', value: 10, isTotal: false },
      { name: 'Subtotal', value: 10, isTotal: true },
      { name: 'B', value: 5, isTotal: false },
    ];
    const result = computeWaterfallData({ data, dataKey: 'value', totalKey: 'isTotal' });

    // B starts from running total of 10 (not 20)
    expect(result[2].waterfallRange).toEqual([10, 15]);
  });

  it('tracks cumulative values', () => {
    const data = [
      { name: 'A', value: 10 },
      { name: 'B', value: -3 },
      { name: 'C', value: 5 },
    ];
    const result = computeWaterfallData({ data, dataKey: 'value' });

    expect(result[0].cumulativeValue).toBe(10);
    expect(result[1].cumulativeValue).toBe(7);
    expect(result[2].cumulativeValue).toBe(12);
  });

  it('preserves original data fields', () => {
    const data = [{ name: 'A', value: 10, category: 'income', extra: 42 }];
    const result = computeWaterfallData({ data, dataKey: 'value' });

    expect(result[0].name).toBe('A');
    expect(result[0].category).toBe('income');
    expect(result[0].extra).toBe(42);
    expect(result[0].entry).toEqual(data[0]);
  });

  it('supports accessor functions for dataKey', () => {
    const data = [{ label: 'A', amount: 10 }];
    const result = computeWaterfallData({
      data,
      dataKey: (d: { amount: number }) => d.amount,
    });

    expect(result[0].waterfallRange).toEqual([0, 10]);
  });

  it('supports accessor functions for totalKey', () => {
    const data = [
      { name: 'A', value: 10, type: 'delta' },
      { name: 'Total', value: 10, type: 'total' },
    ];
    const result = computeWaterfallData({
      data,
      dataKey: 'value',
      totalKey: (d: { type: string }) => d.type === 'total',
    });

    expect(result[1].isTotal).toBe(true);
    expect(result[1].waterfallRange).toEqual([0, 10]);
  });

  it('returns empty array for empty input', () => {
    expect(computeWaterfallData({ data: [], dataKey: 'value' })).toEqual([]);
  });

  it('handles zero values', () => {
    const data = [
      { name: 'A', value: 5 },
      { name: 'Zero', value: 0 },
      { name: 'B', value: 3 },
    ];
    const result = computeWaterfallData({ data, dataKey: 'value' });

    expect(result[1].waterfallRange).toEqual([5, 5]);
    expect(result[2].waterfallRange).toEqual([5, 8]);
  });
});
