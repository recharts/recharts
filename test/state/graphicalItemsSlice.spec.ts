import { describe, expect, it } from 'vitest';
import { createRechartsStore } from '../../src/state/store';
import {
  addCartesianGraphicalItem,
  CartesianGraphicalItemSettings,
  removeCartesianGraphicalItem,
} from '../../src/state/graphicalItemsSlice';
import { PageData } from '../_data';

describe('graphicalItemsSlice', () => {
  it('should add and remove graphical items from state', () => {
    const store = createRechartsStore();
    expect(store.getState().graphicalItems.cartesianItems).toHaveLength(0);

    const item: CartesianGraphicalItemSettings = {
      stackId: undefined,
      errorBars: undefined,
      dataKey: undefined,
      data: PageData,
      xAxisId: 'x',
      yAxisId: 'y',
      zAxisId: 0,
      hide: false,
    };
    store.dispatch(addCartesianGraphicalItem(item));
    expect(store.getState().graphicalItems.cartesianItems).toHaveLength(1);

    store.dispatch(removeCartesianGraphicalItem(item));
    expect(store.getState().graphicalItems.cartesianItems).toHaveLength(0);
  });
});
