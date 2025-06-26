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
import { getNormalizedStackId, StackId } from '../util/ChartUtils';

type SetCartesianGraphicalItemProps = Omit<CartesianGraphicalItemSettings, 'stackId'> & {
  stackId: StackId | undefined;
};

export function SetCartesianGraphicalItem(props: SetCartesianGraphicalItemProps): null {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const settings: CartesianGraphicalItemSettings = {
      ...props,
      stackId: getNormalizedStackId(props.stackId),
    };
    dispatch(addCartesianGraphicalItem(settings));
    return () => {
      dispatch(removeCartesianGraphicalItem(settings));
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
