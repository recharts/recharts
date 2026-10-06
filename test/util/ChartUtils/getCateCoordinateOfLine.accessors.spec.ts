import { describe, expect, it, vi } from 'vitest';
import { scaleLinear } from 'victory-vendor/d3-scale';
import { getCateCoordinateOfLine } from '../../../src/util/ChartUtils';
import { DataKey, TickItem } from '../../../src/util/types';
import { rechartsScaleFactory } from '../../../src/util/scale/RechartsScale';

type DataPoint = {
  [key: string]: unknown;
  category?: { name: string | number | null };
};

const scale = rechartsScaleFactory<number>(scaleLinear());
const ticks: ReadonlyArray<TickItem> = [
  { coordinate: 10, index: 0, value: 'A' },
  { coordinate: 110, index: 1, value: 'B' },
];

const accessors: Array<{ name: string; dataKey: DataKey<DataPoint, unknown>; entry: DataPoint }> = [
  { name: 'flat key', dataKey: 'name', entry: { name: 'A' } },
  { name: 'nested key', dataKey: 'category.name', entry: { category: { name: 'A' } } },
  { name: 'array path', dataKey: 'categories[0].name', entry: { categories: [{ name: 'A' }] } },
  { name: 'function', dataKey: entry => entry.category?.name, entry: { category: { name: 'A' } } },
  { name: 'numeric zero key', dataKey: 0, entry: { 0: 'A' } },
  { name: 'empty string key', dataKey: '', entry: { '': 'A' } },
];

describe('getCateCoordinateOfLine category accessors', () => {
  it.each(accessors)('matches the category for $name instead of using the row index', ({ dataKey, entry }) => {
    expect(
      getCateCoordinateOfLine<DataPoint>({
        axis: { type: 'category', allowDuplicatedCategory: false, dataKey, scale },
        ticks,
        entry,
        bandSize: 20,
        index: 1,
      }),
    ).toBe(20);
  });

  it('preserves literal dotted-key precedence', () => {
    expect(
      getCateCoordinateOfLine<DataPoint>({
        axis: { type: 'category', allowDuplicatedCategory: false, dataKey: 'category.name', scale },
        ticks,
        entry: { 'category.name': 'B', category: { name: 'A' } },
        bandSize: 20,
        index: 0,
      }),
    ).toBe(120);
  });

  it.each([0, ''])('matches the valid falsy category value %j', value => {
    expect(
      getCateCoordinateOfLine<DataPoint>({
        axis: { type: 'category', allowDuplicatedCategory: false, dataKey: 'category.name', scale },
        ticks: [{ coordinate: 10, index: 0, value }],
        entry: { category: { name: value } },
        bandSize: 20,
        index: 1,
      }),
    ).toBe(20);
  });

  it.each([undefined, null, 'not in the ticks'])('preserves the index fallback for accessor result %j', value => {
    expect(
      getCateCoordinateOfLine<DataPoint>({
        axis: { type: 'category', allowDuplicatedCategory: false, dataKey: () => value, scale },
        ticks,
        entry: {},
        bandSize: 20,
        index: 1,
      }),
    ).toBe(120);
  });

  it.each([undefined, 'missing', 'missing.path'])('preserves the index fallback for missing key %j', dataKey => {
    expect(
      getCateCoordinateOfLine<DataPoint>({
        axis: { type: 'category', allowDuplicatedCategory: false, dataKey, scale },
        ticks,
        entry: {},
        bandSize: 20,
        index: 1,
      }),
    ).toBe(120);
  });

  it.each([undefined, []])('returns null when ticks are %j', unavailableTicks => {
    expect(
      getCateCoordinateOfLine<DataPoint>({
        axis: { type: 'category', allowDuplicatedCategory: false, dataKey: () => 'A', scale },
        ticks: unavailableTicks,
        entry: {},
        bandSize: 20,
        index: 0,
      }),
    ).toBeNull();
  });

  it('evaluates a function accessor once when matching a category', () => {
    const dataKey = vi.fn(() => 'A');
    const entry = {};
    expect(
      getCateCoordinateOfLine<DataPoint>({
        axis: { type: 'category', allowDuplicatedCategory: false, dataKey, scale },
        ticks,
        entry,
        bandSize: 20,
        index: 1,
      }),
    ).toBe(20);
    expect(dataKey).toHaveBeenCalledExactlyOnceWith(entry);
  });

  it('does not evaluate the accessor when duplicated categories are allowed', () => {
    const dataKey = vi.fn(() => 'A');
    expect(
      getCateCoordinateOfLine<DataPoint>({
        axis: { type: 'category', allowDuplicatedCategory: true, dataKey, scale },
        ticks,
        entry: {},
        bandSize: 20,
        index: 1,
      }),
    ).toBe(120);
    expect(dataKey).not.toHaveBeenCalled();
  });

  it('evaluates a nullish-returning accessor once before using the index fallback', () => {
    const dataKey = vi.fn(() => undefined);
    const entry = {};
    expect(
      getCateCoordinateOfLine<DataPoint>({
        axis: { type: 'category', allowDuplicatedCategory: false, dataKey, scale },
        ticks,
        entry,
        bandSize: 20,
        index: 1,
      }),
    ).toBe(120);
    expect(dataKey).toHaveBeenCalledExactlyOnceWith(entry);
  });
});
