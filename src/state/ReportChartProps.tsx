import { useEffect } from 'react';
import { updateOptions, UpdatableChartOptions } from './rootPropsSlice';
import { useAppDispatch } from './hooks';

export function ReportChartProps(props: UpdatableChartOptions): null {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(updateOptions(props));
  }, [dispatch, props]);
  return null;
}
