import { describe, expect, it } from 'vitest';
import { graphicalItemIdentity, ThemableItem } from '../../src/theme/graphicalItemIdentity';

describe('graphicalItemIdentity', () => {
  const allDataKeys = ['profit', 'revenue', 'expenses'];

  it('should assign indices from sorted unique dataKeys', () => {
    expect(graphicalItemIdentity({ dataKey: 'expenses' }, allDataKeys, 3)).toBe(0);
    expect(graphicalItemIdentity({ dataKey: 'profit' }, allDataKeys, 3)).toBe(1);
    expect(graphicalItemIdentity({ dataKey: 'revenue' }, allDataKeys, 3)).toBe(2);
  });

  it('should not depend on the order or duplicate entries in the dataKeys', () => {
    const unsortedDataKeys = ['revenue', 'profit', 'profit', 'expenses'];

    expect(graphicalItemIdentity({ dataKey: 'profit' }, unsortedDataKeys, 3)).toBe(1);
    expect(graphicalItemIdentity({ dataKey: 'revenue' }, unsortedDataKeys, 3)).toBe(2);
  });

  it('should include the current item when it is not registered yet', () => {
    expect(graphicalItemIdentity({ dataKey: 'revenue' }, ['profit'], 2)).toBe(1);
    expect(graphicalItemIdentity({ dataKey: 'profit' }, [], 2)).toBe(0);
  });

  it('should wrap indices when there are more dataKeys than themes', () => {
    const dataKeys = ['a', 'b', 'c'];

    expect(graphicalItemIdentity({ dataKey: 'a' }, dataKeys, 2)).toBe(0);
    expect(graphicalItemIdentity({ dataKey: 'b' }, dataKeys, 2)).toBe(1);
    expect(graphicalItemIdentity({ dataKey: 'c' }, dataKeys, 2)).toBe(0);
  });

  it('should return the same index for items with equivalent dataKeys', () => {
    const stringItem: ThemableItem = { dataKey: '42' };
    const numericItem: ThemableItem = { dataKey: 42 };
    const dataKeys = ['42'];

    expect(graphicalItemIdentity(stringItem, dataKeys, 5)).toBe(graphicalItemIdentity(numericItem, dataKeys, 5));
  });

  it('should return 0 when no themes are available', () => {
    const item: ThemableItem = { dataKey: 'anything' };

    expect(graphicalItemIdentity(item, [], 0)).toBe(0);
    expect(graphicalItemIdentity(item, [], -1)).toBe(0);
  });

  it('should not throw when given a dataKey function', () => {
    const dataKey = () => {};

    expect(graphicalItemIdentity({ dataKey }, [], 10)).toBe(0);
  });
});
