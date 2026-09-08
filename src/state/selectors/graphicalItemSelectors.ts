import { createSelector } from 'reselect';
import { isNotNil } from '../../util/DataUtils';
import { DataKey } from '../../util/types';
import { RechartsRootState } from '../store';
import {
  CartesianGraphicalItemSettings,
  GraphicalItemId,
  GraphicalItemSettings,
  PolarGraphicalItemSettings,
} from '../graphicalItemsSlice';
import { AxisId, defaultAxisId } from '../cartesianAxisSlice';

export function selectXAxisIdFromGraphicalItemId(state: RechartsRootState, id: GraphicalItemId): AxisId {
  return state.graphicalItems.cartesianItems.find(item => item.id === id)?.xAxisId ?? defaultAxisId;
}

export function selectYAxisIdFromGraphicalItemId(state: RechartsRootState, id: GraphicalItemId): AxisId {
  return state.graphicalItems.cartesianItems.find(item => item.id === id)?.yAxisId ?? defaultAxisId;
}

export const selectAllUnfilteredGraphicalItems: (
  state: RechartsRootState,
) => ReadonlyArray<CartesianGraphicalItemSettings | PolarGraphicalItemSettings> = createSelector(
  [
    (state: RechartsRootState) => state.graphicalItems.cartesianItems,
    (state: RechartsRootState) => state.graphicalItems.polarItems,
  ],
  (cartesianItems, polarItems) => [...cartesianItems, ...polarItems],
);

export const selectAllUnfilteredGraphicalItemDataKeys: (state: RechartsRootState) => ReadonlyArray<DataKey<any>> =
  createSelector(
    [selectAllUnfilteredGraphicalItems],
    (graphicalItems: ReadonlyArray<GraphicalItemSettings>): ReadonlyArray<DataKey<any>> =>
      graphicalItems.map(item => item.dataKey).filter(isNotNil),
  );
