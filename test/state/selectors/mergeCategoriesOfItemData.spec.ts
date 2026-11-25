import { describe, expect, it } from 'vitest';
import { getItemDataLengths, mergeCategoriesOfItemData } from '../../../src/state/selectors/axisSelectors';

const appliedValues = (categories: ReadonlyArray<unknown>) => categories.map(value => ({ value }));
const categoriesOf = (values: ReadonlyArray<{ value: unknown }>) => values.map(({ value }) => value);

describe('getItemDataLengths', () => {
  it('returns the length of the data of every item that defines its own, in order', () => {
    const items = [{ data: [{ x: 1 }, { x: 2 }] }, { data: undefined }, { data: [] }, { data: [{ x: 3 }] }];

    const result = getItemDataLengths(items);

    expect(result).toEqual([2, 0, 1]);
  });
});

describe('mergeCategoriesOfItemData', () => {
  it('returns the values as they are when they come from one array', () => {
    const values = appliedValues(['a', 'b', 'a']);

    const result = mergeCategoriesOfItemData(values, [3]);

    expect(result).toBe(values);
  });

  it('returns the values as they are when one of two arrays is empty', () => {
    const values = appliedValues(['a', 'a']);

    const result = mergeCategoriesOfItemData(values, [0, 2]);

    expect(result).toBe(values);
  });

  it('returns the values as they are when there is no array', () => {
    const values = appliedValues(['a', 'a']);

    const result = mergeCategoriesOfItemData(values, []);

    expect(result).toBe(values);
  });

  it('returns the values as they are when the lengths of the arrays do not add up to the number of values', () => {
    const values = appliedValues(['a', 'b', 'c']);

    const result = mergeCategoriesOfItemData(values, [2, 2]);

    expect(result).toBe(values);
  });

  it('leaves out the categories that an array shares with an array before it', () => {
    const values = appliedValues(['a', 'b', 'c', 'b', 'd', 'c']);

    const result = mergeCategoriesOfItemData(values, [3, 3]);

    expect(categoriesOf(result)).toEqual(['a', 'b', 'c', 'd']);
  });

  it('keeps the order of first appearance', () => {
    const values = appliedValues(['c', 'a', 'b', 'a', 'c', 'd']);

    const result = mergeCategoriesOfItemData(values, [2, 2, 2]);

    expect(categoriesOf(result)).toEqual(['c', 'a', 'b', 'd']);
  });

  it('keeps one value for each repeat of a category within one array', () => {
    const values = appliedValues(['a', 'a', 'b', 'a', 'b', 'b']);

    const result = mergeCategoriesOfItemData(values, [3, 3]);

    expect(categoriesOf(result)).toEqual(['a', 'a', 'b', 'b']);
  });

  it('keeps a category that is repeated within an array that comes second', () => {
    const values = appliedValues(['x', 'a', 'a']);

    const result = mergeCategoriesOfItemData(values, [1, 2]);

    expect(categoriesOf(result)).toEqual(['x', 'a', 'a']);
  });

  it('keeps rows without a category', () => {
    const values = appliedValues(['a', null, undefined, 'a', null]);

    const result = mergeCategoriesOfItemData(values, [3, 2]);

    expect(categoriesOf(result)).toEqual(['a', null, undefined, null]);
  });

  it('tells numbers and numeric strings apart, like a Set does', () => {
    const values = appliedValues([1, '1', 1, '1']);

    const result = mergeCategoriesOfItemData(values, [2, 2]);

    expect(categoriesOf(result)).toEqual([1, '1']);
  });

  it('does not distinguish NaN from itself', () => {
    const values = appliedValues([NaN, NaN]);

    const result = mergeCategoriesOfItemData(values, [1, 1]);

    expect(categoriesOf(result)).toEqual([NaN]);
  });
});
