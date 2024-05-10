import { createContext, useContext, useEffect } from 'react';
import { ChartData, setChartData } from '../state/chartDataSlice';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { RechartsRootState } from '../state/store';

const DataStartIndexContext = createContext<number>(0);
const DataEndIndexContext = createContext<number>(0);

export const ChartDataContextProvider = (props: { chartData: ChartData }): null => {
  const { chartData } = props;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setChartData(chartData));
    return () => {
      dispatch(setChartData([]));
    };
  }, [chartData, dispatch]);
  return null;
};
export const DataStartIndexContextProvider = DataStartIndexContext.Provider;
export const DataEndIndexContextProvider = DataEndIndexContext.Provider;

/**
 * "data" is the data of the chart - it has no type because this part of recharts is very flexible.
 * Basically it's an array of "something" and then there's the dataKey property in various places
 * that's meant to pull other things away from the data.
 *
 * Some charts have `data` defined on the chart root, and they will return the array through this hook.
 * For example: <ComposedChart data={data} />.
 *
 * Other charts, such as Pie, have data defined on individual graphical elements.
 * These charts will return `undefined` through this hook, and you need to read the data from children.
 * For example: <PieChart><Pie data={data} />
 *
 * Some charts also allow setting both - data on the parent, and data on the children at the same time!
 *
 * @return data array for some charts and undefined for other
 */
export const useChartData = (): ChartData | undefined =>
  useAppSelector((state: RechartsRootState) => state.chartData.chartData);

/**
 * startIndex and endIndex are data boundaries, set through Brush.
 *
 * @return object with startIndex and endIndex
 */
export const useDataIndex = () => {
  const startIndex = useContext(DataStartIndexContext);
  const endIndex = useContext(DataEndIndexContext);
  return { startIndex, endIndex };
};
