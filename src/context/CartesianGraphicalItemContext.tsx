import React, { createContext, useCallback, useContext, useEffect } from 'react';
import { ErrorBarsSettings } from '../state/graphicalItemsSlice';
import { SetCartesianGraphicalItem } from '../state/SetCartesianGraphicalItem';
import { ChartData } from '../state/chartDataSlice';
import { AxisId } from '../state/axisMapSlice';
import { DataKey } from '../util/types';
import { StackId } from '../util/ChartUtils';

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
  yAxisId: AxisId;
  dataKey: DataKey<any>;
  children: React.ReactNode;
  stackId: StackId | undefined;
  hide: boolean;
};

export const CartesianGraphicalItemContext = ({
  children,
  xAxisId,
  yAxisId,
  dataKey,
  data,
  stackId,
  hide,
}: GraphicalItemContextProps) => {
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
      <SetCartesianGraphicalItem
        data={data}
        xAxisId={xAxisId}
        yAxisId={yAxisId}
        dataKey={dataKey}
        errorBars={errorBars}
        stackId={stackId}
        hide={hide}
      />
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
