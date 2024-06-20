import React, { createContext, useCallback, useContext, useEffect } from 'react';
import { ErrorBarsSettings } from '../state/graphicalItemsSlice';
import { SetCartesianGraphicalItem } from '../state/SetCartesianGraphicalItem';
import { ChartData } from '../state/chartDataSlice';
import { AxisId } from '../state/axisMapSlice';
import { DataKey } from '../util/types';

const noop = () => {};

type DispatchPayload = {
  addErrorBar: (errorBar: ErrorBarsSettings) => void;
  removeErrorBar: (errorBar: ErrorBarsSettings) => void;
};

const ErrorBarDirectionDispatchContext = createContext<DispatchPayload>({
  addErrorBar: noop,
  removeErrorBar: noop,
});

type GraphicalItemContextProps = {
  data: ChartData;
  xAxisId: AxisId;
  dataKey: DataKey<any>;
  children: React.ReactNode;
};

export const CartesianGraphicalItemContext = ({ children, xAxisId, dataKey, data }: GraphicalItemContextProps) => {
  const [errorBars, updateErrorBars] = React.useState<ReadonlyArray<ErrorBarsSettings>>([]);
  // useCallback is necessary in these two because without it, the new function reference causes an infinite render loop
  const addErrorBar = useCallback(
    (errorBar: ErrorBarsSettings) => {
      updateErrorBars(prev => [...prev, errorBar]);
    },
    [updateErrorBars],
  );
  const removeErrorBar = useCallback(
    (errorBar: ErrorBarsSettings) => {
      updateErrorBars(prev => prev.filter(eb => eb !== errorBar));
    },
    [updateErrorBars],
  );
  return (
    <ErrorBarDirectionDispatchContext.Provider value={{ addErrorBar, removeErrorBar }}>
      <SetCartesianGraphicalItem data={data} xAxisId={xAxisId} dataKey={dataKey} errorBars={errorBars} />
      {children}
    </ErrorBarDirectionDispatchContext.Provider>
  );
};

export function ReportErrorBarSettings(props: ErrorBarsSettings): null {
  const { addErrorBar, removeErrorBar } = useContext(ErrorBarDirectionDispatchContext);
  useEffect(() => {
    addErrorBar(props);
    return () => {
      removeErrorBar(props);
    };
  }, [addErrorBar, removeErrorBar, props]);
  return null;
}
