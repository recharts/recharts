import { createSelector } from 'reselect';
import { computeLinePoints, LinePointItem } from '../../cartesian/Line';
import { RechartsRootState } from '../store';
import { AxisId } from '../cartesianAxisSlice';
import { selectChartDataWithIndexesIfNotInPanorama } from './dataSelectors';
import { selectChartLayout } from '../../context/chartLayoutContext';
import { selectAxisWithScale, selectTicksOfGraphicalItem, selectUnfilteredCartesianItems } from './axisSelectors';
import { DataKey } from '../../util/types';
import { getBandSizeOfAxis, isCategoricalAxis } from '../../util/ChartUtils';
import { ChartData } from '../chartDataSlice';

export type ResolvedLineSettings = {
  data: ChartData | undefined;
  dataKey: DataKey<any> | undefined;
};

const selectXAxisWithScale = (state: RechartsRootState, xAxisId: AxisId, _yAxisId: AxisId, isPanorama: boolean) =>
  selectAxisWithScale(state, 'xAxis', xAxisId, isPanorama);

const selectXAxisTicks = (state: RechartsRootState, xAxisId: AxisId, _yAxisId: AxisId, isPanorama: boolean) =>
  selectTicksOfGraphicalItem(state, 'xAxis', xAxisId, isPanorama);

const selectYAxisWithScale = (state: RechartsRootState, _xAxisId: AxisId, yAxisId: AxisId, isPanorama: boolean) =>
  selectAxisWithScale(state, 'yAxis', yAxisId, isPanorama);

const selectYAxisTicks = (state: RechartsRootState, _xAxisId: AxisId, yAxisId: AxisId, isPanorama: boolean) =>
  selectTicksOfGraphicalItem(state, 'yAxis', yAxisId, isPanorama);

const selectBandSize = createSelector(
  [selectChartLayout, selectXAxisWithScale, selectYAxisWithScale, selectXAxisTicks, selectYAxisTicks],
  (layout, xAxis, yAxis, xAxisTicks, yAxisTicks) => {
    if (isCategoricalAxis(layout, 'xAxis')) {
      return getBandSizeOfAxis(xAxis, xAxisTicks, false);
    }
    return getBandSizeOfAxis(yAxis, yAxisTicks, false);
  },
);

const pickLineSettings = (
  _state: RechartsRootState,
  _xAxisId: AxisId,
  _yAxisId: AxisId,
  _isPanorama: boolean,
  lineSettings: ResolvedLineSettings,
) => lineSettings;

/*
 * There is a race condition problem because we read some data from props and some from the state.
 * The state is updated through a dispatch and is one render behind,
 * and so we have this weird one tick render where the displayedData in one selector have the old dataKey
 * but the new dataKey in another selector.
 *
 * A proper fix is to either move everything into the state, or read the dataKey always from props
 * - but this is a smaller change.
 */
const selectSynchronisedLineSettings: (
  state: RechartsRootState,
  xAxisId: AxisId,
  yAxisId: AxisId,
  isPanorama: boolean,
  lineSettings: ResolvedLineSettings,
) => ResolvedLineSettings | undefined = createSelector(
  [selectUnfilteredCartesianItems, pickLineSettings],
  (graphicalItems, lineSettingsFromProps) => {
    if (
      graphicalItems.some(
        cgis =>
          cgis.type === 'line' &&
          lineSettingsFromProps.dataKey === cgis.dataKey &&
          lineSettingsFromProps.data === cgis.data,
      )
    ) {
      /*
       * now, at least one of the lines has the same dataKey as the one in props.
       * Is this a perfect match? Maybe not because we could theoretically have two different Lines with the same dataKey
       * and the same stackId and the same data but still different lines, yes,
       * but the chances of that happening are ... lowish.
       *
       * A proper fix would be to store the lineSettings in a state too, and compare references directly instead of enumerating the properties.
       */
      return lineSettingsFromProps;
    }
    return undefined;
  },
);

export const selectLinePoints: (
  state: RechartsRootState,
  xAxisId: AxisId,
  yAxisId: AxisId,
  isPanorama: boolean,
  { dataKey, data }: ResolvedLineSettings,
) => ReadonlyArray<LinePointItem> | undefined = createSelector(
  [
    selectChartLayout,
    selectXAxisWithScale,
    selectYAxisWithScale,
    selectXAxisTicks,
    selectYAxisTicks,
    selectSynchronisedLineSettings,
    selectBandSize,
    selectChartDataWithIndexesIfNotInPanorama,
  ],
  (
    layout,
    xAxis,
    yAxis,
    xAxisTicks,
    yAxisTicks,
    lineSettings,
    bandSize,
    { chartData, dataStartIndex, dataEndIndex },
  ): ReadonlyArray<LinePointItem> | undefined => {
    if (
      lineSettings == null ||
      xAxis == null ||
      yAxis == null ||
      xAxisTicks == null ||
      yAxisTicks == null ||
      xAxisTicks.length === 0 ||
      yAxisTicks.length === 0 ||
      bandSize == null
    ) {
      return undefined;
    }

    const { dataKey, data } = lineSettings;
    let displayedData: ChartData | undefined;

    if (data != null && data.length > 0) {
      displayedData = data;
    } else {
      displayedData = chartData?.slice(dataStartIndex, dataEndIndex + 1);
    }

    if (displayedData == null) {
      return undefined;
    }

    return computeLinePoints({ layout, xAxis, yAxis, xAxisTicks, yAxisTicks, dataKey, bandSize, displayedData });
  },
);
