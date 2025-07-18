import * as React from 'react';
import { createContext, useCallback, useContext, useEffect } from 'react';
import { CartesianGraphicalItemType, ErrorBarsSettings, GraphicalItemId } from '../state/graphicalItemsSlice';
import { SetCartesianGraphicalItem } from '../state/SetGraphicalItem';
import { ChartData } from '../state/chartDataSlice';
import { AxisId } from '../state/cartesianAxisSlice';
import { DataKey } from '../util/types';
import { StackId } from '../util/ChartUtils';
import { ErrorBarDataPointFormatter } from '../cartesian/ErrorBar';
import { useIsPanorama } from './PanoramaContext';
import { useUniqueId } from '../util/useUniqueId';

const noop = () => {};

type DispatchPayload = {
  addErrorBar: (errorBar: ErrorBarsSettings) => void;
  removeErrorBar: (errorBar: ErrorBarsSettings) => void;
};

const ErrorBarDirectionDispatchContext = createContext<DispatchPayload>({
  addErrorBar: noop,
  removeErrorBar: noop,
});

type ErrorBarContextType<T> = {
  data: ReadonlyArray<T>;
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

type GraphicalItemContextProps = {
  id: string | undefined;
  type: CartesianGraphicalItemType;
  data: ChartData;
  xAxisId: AxisId;
  yAxisId: AxisId;
  zAxisId: AxisId;
  dataKey: DataKey<any>;
  stackId: StackId | undefined;
  hide: boolean;
  barSize: string | number | undefined;
  /**
   * Children must be a function that receives the resolved ID of the graphical item.
   * This ID will either be the one provided via props.id or generated automatically.
   */
  children: (id: GraphicalItemId) => React.ReactNode;
};

export const CartesianGraphicalItemContext = ({
  id,
  children,
  xAxisId,
  yAxisId,
  zAxisId,
  dataKey,
  data,
  stackId,
  hide,
  type,
  barSize,
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
  const isPanorama = useIsPanorama();

  const resolvedId = useUniqueId(`recharts-${type}`, id);

  return (
    <ErrorBarDirectionDispatchContext.Provider value={{ addErrorBar, removeErrorBar }}>
      <SetCartesianGraphicalItem
        id={resolvedId}
        type={type}
        data={data}
        xAxisId={xAxisId}
        yAxisId={yAxisId}
        zAxisId={zAxisId}
        dataKey={dataKey}
        errorBars={errorBars}
        stackId={stackId}
        hide={hide}
        barSize={barSize}
        isPanorama={isPanorama}
      />
      {children(resolvedId)}
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
