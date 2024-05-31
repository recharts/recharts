import { useEffect } from 'react';
import { useAppDispatch } from './hooks';
import { ChartData } from './chartDataSlice';
import { addGraphicalItemData, removeGraphicalItemData } from './graphicalItemsSlice';

export function SetGraphicalItemData({ dataDefinedOnItem }: { dataDefinedOnItem: ChartData }): null {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(addGraphicalItemData(dataDefinedOnItem));
    return () => {
      dispatch(removeGraphicalItemData(dataDefinedOnItem));
    };
  }, [dispatch, dataDefinedOnItem]);
  return null;
}
