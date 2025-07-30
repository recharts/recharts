import * as React from 'react';
import { createContext, useContext, useEffect } from 'react';
import { AxisId } from '../state/cartesianAxisSlice';
import { ErrorBarDataPointFormatter } from '../cartesian/ErrorBar';
import { addErrorBar, ErrorBarsSettings, removeErrorBar } from '../state/errorBarSlice';
import { useAppDispatch } from '../state/hooks';
import { useGraphicalItemId } from './RegisterGraphicalItemId';

const noop = () => {};

type ErrorBarContextType<T> = {
  data: ReadonlyArray<T> | undefined;
  xAxisId: AxisId;
  yAxisId: AxisId;
  dataPointFormatter: ErrorBarDataPointFormatter;
  errorBarOffset: number;
};

const initialContextState: ErrorBarContextType<any> = {
  data: [],
  xAxisId: 'xAxis-0',
  yAxisId: 'yAxis-0',
  dataPointFormatter: () => ({ x: 0, y: 0, value: 0 }),
  errorBarOffset: 0,
};

const ErrorBarContext = createContext(initialContextState);

export function SetErrorBarContext<T>(props: ErrorBarContextType<T> & { children: React.ReactNode }) {
  const { children, ...rest } = props;
  return <ErrorBarContext.Provider value={rest}>{children}</ErrorBarContext.Provider>;
}

export const useErrorBarContext = () => useContext(ErrorBarContext);

export function ReportErrorBarSettings(props: ErrorBarsSettings): null {
  const dispatch = useAppDispatch();
  const graphicalItemId = useGraphicalItemId();

  useEffect(() => {
    if (graphicalItemId == null) {
      // ErrorBar outside a graphical item context does not do anything.
      return noop;
    }
    const payload = { itemId: graphicalItemId, errorBar: props };
    dispatch(addErrorBar(payload));
    return () => {
      dispatch(removeErrorBar(payload));
    };
  }, [dispatch, graphicalItemId, props]);
  return null;
}
