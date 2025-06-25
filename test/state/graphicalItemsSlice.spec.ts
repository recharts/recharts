import { describe, expect, it } from 'vitest';
import { createRechartsStore } from '../../src/state/store';
import {
  addCartesianGraphicalItem,
  CartesianGraphicalItemSettings,
  removeCartesianGraphicalItem,
  replaceCartesianGraphicalItem,
} from '../../src/state/graphicalItemsSlice';
import { PageData } from '../_data';
import { selectUnfilteredCartesianItems } from '../../src/state/selectors/axisSelectors';

describe('graphicalItemsSlice', () => {
  const item1: CartesianGraphicalItemSettings = {
    isPanorama: false,
    type: 'bar',
    stackId: undefined,
    errorBars: undefined,
    dataKey: undefined,
    data: PageData,
    xAxisId: 'x',
    yAxisId: 'y',
    zAxisId: 0,
    hide: false,
    barSize: undefined,
  };

  const item2: CartesianGraphicalItemSettings = {
    isPanorama: false,
    type: 'line',
    stackId: undefined,
    errorBars: undefined,
    dataKey: undefined,
    data: PageData,
    xAxisId: 'x',
    yAxisId: 'y',
    zAxisId: 0,
    hide: false,
    barSize: undefined,
  };

  const item3: CartesianGraphicalItemSettings = {
    isPanorama: false,
    type: 'area',
    stackId: undefined,
    errorBars: undefined,
    dataKey: undefined,
    data: PageData,
    xAxisId: 'x',
    yAxisId: 'y',
    zAxisId: 0,
    hide: false,
    barSize: undefined,
  };

  it('should add and remove graphical items from state', () => {
    const store = createRechartsStore();
    expect(selectUnfilteredCartesianItems(store.getState())).toHaveLength(0);

    store.dispatch(addCartesianGraphicalItem(item1));
    expect(selectUnfilteredCartesianItems(store.getState())).toEqual([item1]);

    store.dispatch(removeCartesianGraphicalItem(item1));
    expect(selectUnfilteredCartesianItems(store.getState())).toHaveLength(0);
  });

  it('should replace graphical items in state and keep the order', () => {
    const store = createRechartsStore();
    expect(selectUnfilteredCartesianItems(store.getState())).toHaveLength(0);

    store.dispatch(addCartesianGraphicalItem(item1));
    store.dispatch(addCartesianGraphicalItem(item2));
    expect(selectUnfilteredCartesianItems(store.getState())).toEqual([item1, item2]);

    // Replace item1 with item3
    store.dispatch(replaceCartesianGraphicalItem({ prev: item1, next: item3 }));

    // item3 is now in place of item1, and item2 remains on the second position
    expect(selectUnfilteredCartesianItems(store.getState())).toEqual([item3, item2]);
  });
});
