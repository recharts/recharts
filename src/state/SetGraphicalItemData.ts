import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ChartData } from './chartDataSlice';
import { addGraphicalItemData, removeGraphicalItemData } from './graphicalItemsSlice';

export function SetGraphicalItemData({ dataDefinedOnItem }: { dataDefinedOnItem: ChartData }): null {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addGraphicalItemData(dataDefinedOnItem));
    return () => {
      dispatch(removeGraphicalItemData(dataDefinedOnItem));
    };
  }, [dispatch, dataDefinedOnItem]);
  return null;
}
