import { describe, expect, it } from 'vitest';
import { createRechartsStore } from '../../src/state/store';
import {
  addCartesianGraphicalItem,
  removeCartesianGraphicalItem,
  replaceCartesianGraphicalItem,
} from '../../src/state/graphicalItemsSlice';
import { PageData } from '../_data';
import { selectUnfilteredCartesianItems } from '../../src/state/selectors/axisSelectors';
import { BarSettings } from '../../src/state/types/BarSettings';
import { LineSettings } from '../../src/state/types/LineSettings';
import { AreaSettings } from '../../src/state/types/AreaSettings';

describe('graphicalItemsSlice', () => {
  const item1: BarSettings = {
    maxBarSize: 0,
    minPointSize: undefined,
    id: 'my-bar',
    isPanorama: false,
    type: 'bar',
    stackId: undefined,
    dataKey: undefined,
    data: PageData,
    xAxisId: 'x',
    yAxisId: 'y',
    zAxisId: 0,
    hide: false,
    barSize: undefined,
  };

  const item2: LineSettings = {
    id: 'my-line',
    isPanorama: false,
    type: 'line',
    dataKey: undefined,
    data: PageData,
    xAxisId: 'x',
    yAxisId: 'y',
    zAxisId: 0,
    hide: false,
  };

  const item3: AreaSettings = {
    baseValue: undefined,
    connectNulls: false,
    id: 'my-area',
    isPanorama: false,
    type: 'area',
    stackId: undefined,
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
