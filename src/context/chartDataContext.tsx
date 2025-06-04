import { useEffect } from 'react';
import { ChartData, setChartData, setComputedData } from '../state/chartDataSlice';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { RechartsRootState } from '../state/store';
import { BrushStartEndIndex } from './brushUpdateContext';
import { useIsPanorama } from './PanoramaContext';

export const ChartDataContextProvider = (props: { chartData: ChartData | undefined }): null => {
  const { chartData } = props;
  const dispatch = useAppDispatch();
  const isPanorama = useIsPanorama();
  useEffect(() => {
    if (isPanorama) {
      // Panorama mode reuses data from the main chart, so we must not overwrite it here.
      return () => {
        // there is nothing to clean up
      };
    }
    dispatch(setChartData(chartData));
    return () => {
      dispatch(setChartData(undefined));
    };
  }, [chartData, dispatch, isPanorama]);
  return null;
};

export const SetComputedData = (props: { computedData: any }): null => {
  const { computedData } = props;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setComputedData(computedData));
    return () => {
      dispatch(setChartData(undefined));
    };
  }, [computedData, dispatch]);
  return null;
};

const selectChartData = (state: RechartsRootState): ChartData | undefined => state.chartData.chartData;

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
 * However, this particular selector will only return the ones defined on the parent.
 *
 * @deprecated use one of the other selectors instead - which one, depends on how do you identify the applicable graphical items.
 *
 * @return data array for some charts and undefined for other
 */
export const useChartData = (): ChartData | undefined => useAppSelector(selectChartData);

const selectDataIndex = (state: RechartsRootState): BrushStartEndIndex => {
  const { dataStartIndex, dataEndIndex } = state.chartData;
  return { startIndex: dataStartIndex, endIndex: dataEndIndex };
};

/**
 * startIndex and endIndex are data boundaries, set through Brush.
 *
 * @return object with startIndex and endIndex
 */
export const useDataIndex = () => {
  return useAppSelector(selectDataIndex);
};
