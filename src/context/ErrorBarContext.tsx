import * as React from 'react';
import { createContext, useContext, useEffect, useRef } from 'react';
import { AxisId } from '../state/cartesianAxisSlice';
import { ErrorBarDataPointFormatter } from '../cartesian/ErrorBar';
import { addErrorBar, ErrorBarsSettings, removeErrorBar, replaceErrorBar } from '../state/errorBarSlice';
import { useAppDispatch } from '../state/hooks';
import { useGraphicalItemId } from './RegisterGraphicalItemId';

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
  const prevPropsRef = useRef<ErrorBarsSettings | null>(null);

  useEffect(() => {
    if (graphicalItemId == null) {
      // ErrorBar outside a graphical item context does not do anything.
      return;
    }
    if (prevPropsRef.current === null) {
      dispatch(addErrorBar({ itemId: graphicalItemId, errorBar: props }));
    } else if (prevPropsRef.current !== props) {
      dispatch(replaceErrorBar({ itemId: graphicalItemId, prev: prevPropsRef.current, next: props }));
    }
    prevPropsRef.current = props;
  }, [dispatch, graphicalItemId, props]);

  useEffect(() => {
    return () => {
      if (prevPropsRef.current != null) {
        dispatch(removeErrorBar({ itemId: graphicalItemId, errorBar: prevPropsRef.current }));
        prevPropsRef.current = null;
      }
    };
  }, [dispatch, graphicalItemId]);

  return null;
}
