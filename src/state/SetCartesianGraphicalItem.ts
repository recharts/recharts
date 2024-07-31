import { useEffect } from 'react';
import { useAppDispatch } from './hooks';
import {
  addCartesianGraphicalItem,
  CartesianGraphicalItemSettings,
  removeCartesianGraphicalItem,
} from './graphicalItemsSlice';

export function SetCartesianGraphicalItem({
  data,
  dataKey,
  hide,
  stackId,
  xAxisId,
  yAxisId,
  zAxisId,
  errorBars,
}: CartesianGraphicalItemSettings): null {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(addCartesianGraphicalItem({ data, dataKey, hide, stackId, xAxisId, yAxisId, zAxisId, errorBars }));
    return () => {
      dispatch(removeCartesianGraphicalItem({ data, dataKey, hide, stackId, xAxisId, yAxisId, zAxisId, errorBars }));
    };
  }, [data, dataKey, dispatch, errorBars, hide, stackId, xAxisId, yAxisId, zAxisId]);
  return null;
}
