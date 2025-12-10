import { RechartsRootState } from '../store';
import { GraphicalItemId } from '../graphicalItemsSlice';
import { AxisId, defaultAxisId } from '../cartesianAxisSlice';

export function selectXAxisIdFromGraphicalItemId(state: RechartsRootState, id: GraphicalItemId): AxisId {
  return state.graphicalItems.cartesianItems.find(item => item.id === id)?.xAxisId ?? defaultAxisId;
}

export function selectYAxisIdFromGraphicalItemId(state: RechartsRootState, id: GraphicalItemId): AxisId {
  return state.graphicalItems.cartesianItems.find(item => item.id === id)?.yAxisId ?? defaultAxisId;
}
