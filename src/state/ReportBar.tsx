import { useEffect } from 'react';
import { useAppDispatch } from './hooks';
import { addBar, removeBar } from './graphicalItemsSlice';

export const ReportBar = (): null => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(addBar());
    return () => {
      dispatch(removeBar());
    };
  });
  return null;
};
