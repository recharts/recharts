import { ReactElement } from 'react';
import { GenericChildStackGroup, StackId, getStackedDataOfItem } from '../../../src/util/ChartUtils';

function makeItem<T>(stackId: T): ReactElement {
  // @ts-expect-error incomplete mock of ReactElement
  return {
    props: { stackId },
  };
}

function createStackGroups<T>(
  key: PropertyKey,
  stackedData: ReadonlyArray<T>,
  items: Array<ReactElement>,
): Record<StackId, GenericChildStackGroup<T>> {
  return {
    [key]: {
      stackedData,
      items,
      numericAxisId: '',
      cateAxisId: '',
    },
  };
}

describe('getStackedDataOfItem', () => {
  it('should return null if stackId is undefined', () => {
    // @ts-expect-error incomplete mock of ReactElement
    const item: ReactElement = { props: {} };
    const result = getStackedDataOfItem(item, {});
    expect(result).toBe(null);
  });

  it('should return null if stackId is a symbol', () => {
    const item = makeItem(Symbol('mock symbol'));
    expect(getStackedDataOfItem(item, {})).toBe(null);
  });

  it('should return undefined if stack group is undefined', () => {
    const item = makeItem<string>('a');
    const stackedData: Array<string> = [];
    const stackGroups = createStackGroups('a', stackedData, [item]);
    const result = getStackedDataOfItem(item, stackGroups);
    expect(result).toBe(undefined);
  });

  it('should return null if stack group has empty items', () => {
    const item = makeItem<string>('a');
    const group = Symbol('my mock group');
    const items: Array<ReactElement> = [];
    const stackGroups = createStackGroups('a', [group], items);
    const result = getStackedDataOfItem(item, stackGroups);
    expect(result).toBe(null);
  });

  it('should return null if stack group items do not contain the item', () => {
    const item1 = makeItem<string>('a');
    const item2 = makeItem<string>('a');
    const group = Symbol('my mock group');
    const stackGroups = createStackGroups('a', [group], [item1]);
    const result = getStackedDataOfItem(item2, stackGroups);
    expect(result).toBe(null);
  });

  it('should return stackedData if stack group contains the item matched by string', () => {
    const item = makeItem<string>('a');
    const group = Symbol('my mock group');
    const stackGroups = createStackGroups('a', [group], [item]);
    const result = getStackedDataOfItem(item, stackGroups);
    expect(result).toBe(group);
  });

  it('should return stackedData if stack group contains the item matched by number', () => {
    const item = makeItem<number>(7);
    const group = Symbol('my mock group');
    const stackGroups = createStackGroups(7, [group], [item]);
    const result = getStackedDataOfItem(item, stackGroups);
    expect(result).toBe(group);
  });

  it('should return null if stack group contains the item matched by symbol', () => {
    const item = makeItem<symbol>(Symbol.for('mock stack ID'));
    const group = Symbol('my mock group');
    const stackGroups = createStackGroups(Symbol.for('mock stack ID'), [group], [item]);
    const result = getStackedDataOfItem(item, stackGroups);
    expect(result).toBe(null);
  });
});
