import { useEffect } from 'react';
import { useAppDispatch } from './hooks';
import {
  addCartesianGraphicalItem,
  CartesianGraphicalItemSettings,
  removeCartesianGraphicalItem,
} from './graphicalItemsSlice';

export function SetCartesianGraphicalItem(props: CartesianGraphicalItemSettings): null {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(addCartesianGraphicalItem(props));
    return () => {
      dispatch(removeCartesianGraphicalItem(props));
    };
  }, [dispatch, props]);
  return null;
}
