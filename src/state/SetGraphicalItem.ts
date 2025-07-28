import { useEffect, useRef } from 'react';
import { useAppDispatch } from './hooks';
import {
  addCartesianGraphicalItem,
  addPolarGraphicalItem,
  CartesianGraphicalItemSettings,
  PolarGraphicalItemSettings,
  removeCartesianGraphicalItem,
  removePolarGraphicalItem,
  replaceCartesianGraphicalItem,
} from './graphicalItemsSlice';

export function SetCartesianGraphicalItem<T extends CartesianGraphicalItemSettings>(props: T): null {
  const dispatch = useAppDispatch();
  const prevPropsRef = useRef<T | null>(null);

  useEffect(() => {
    if (prevPropsRef.current === null) {
      dispatch(addCartesianGraphicalItem(props));
    } else if (prevPropsRef.current !== props) {
      dispatch(replaceCartesianGraphicalItem({ prev: prevPropsRef.current, next: props }));
    }
    prevPropsRef.current = props;
  }, [dispatch, props]);

  useEffect(() => {
    return () => {
      if (prevPropsRef.current) {
        dispatch(removeCartesianGraphicalItem(prevPropsRef.current));
        /*
         * Here we have to reset the ref to null because in StrictMode, the effect will run twice,
         * but it will keep the same ref value from the first render.
         *
         * In browser, React will clear the ref after the first effect cleanup,
         * so that wouldn't be an issue.
         *
         * In StrictMode, however, the ref is kept,
         * and in the hook above the code checks for `prevPropsRef.current === null`
         * which would be false so it would not dispatch the `addCartesianGraphicalItem` action again.
         *
         * https://github.com/recharts/recharts/issues/6022
         */
        prevPropsRef.current = null;
      }
    };
  }, [dispatch]);

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
