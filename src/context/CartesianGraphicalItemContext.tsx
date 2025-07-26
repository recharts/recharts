import * as React from 'react';
import { createContext, useContext, useEffect } from 'react';
import { CartesianGraphicalItemType, GraphicalItemId } from '../state/graphicalItemsSlice';
import { SetCartesianGraphicalItem } from '../state/SetGraphicalItem';
import { ChartData } from '../state/chartDataSlice';
import { AxisId } from '../state/cartesianAxisSlice';
import { DataKey } from '../util/types';
import { StackId } from '../util/ChartUtils';
import { ErrorBarDataPointFormatter } from '../cartesian/ErrorBar';
import { useIsPanorama } from './PanoramaContext';
import { useUniqueId } from '../util/useUniqueId';
import { addErrorBar, ErrorBarsSettings, removeErrorBar } from '../state/errorBarSlice';
import { useAppDispatch } from '../state/hooks';

const noop = () => {};

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
  data: ChartData | undefined;
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

const GraphicalItemIdContext = createContext<GraphicalItemId | undefined>(undefined);

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
  const isPanorama = useIsPanorama();
  const resolvedId = useUniqueId(`recharts-${type}`, id);

  return (
    <GraphicalItemIdContext.Provider value={resolvedId}>
      <SetCartesianGraphicalItem
        id={resolvedId}
        type={type}
        data={data}
        xAxisId={xAxisId}
        yAxisId={yAxisId}
        zAxisId={zAxisId}
        dataKey={dataKey}
        stackId={stackId}
        hide={hide}
        barSize={barSize}
        isPanorama={isPanorama}
      />
      {children(resolvedId)}
    </GraphicalItemIdContext.Provider>
  );
};

export function ReportErrorBarSettings(props: ErrorBarsSettings): null {
  const dispatch = useAppDispatch();
  const graphicalItemId = useContext(GraphicalItemIdContext);

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
