import { useEffect } from 'react';
import { useAppDispatch } from './hooks';
import {
  addCartesianGraphicalItem,
  addPolarGraphicalItem,
  CartesianGraphicalItemSettings,
  PolarGraphicalItemSettings,
  removeCartesianGraphicalItem,
  removePolarGraphicalItem,
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

export function SetPolarGraphicalItem(props: PolarGraphicalItemSettings): null {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(addPolarGraphicalItem(props));
    return () => {
      dispatch(removePolarGraphicalItem(props));
    };
  }, [dispatch, props]);
  return null;
}
