import { createSelector } from 'reselect';
import sortBy from 'es-toolkit/compat/sortBy';
import { useAppSelector } from '../hooks';
import { RechartsRootState } from '../store';
import {
  ActiveTooltipProps,
  TooltipEntrySettings,
  TooltipIndex,
  TooltipInteractionState,
  TooltipPayload,
  TooltipPayloadConfiguration,
  TooltipPayloadEntry,
  TooltipPayloadSearcher,
} from '../tooltipSlice';
import {
  calculateActiveTickIndex,
  calculateTooltipPos,
  getActiveCoordinate,
  getTooltipEntry,
  getValueByDataKey,
  inRange,
} from '../../util/ChartUtils';
import { ChartDataState } from '../chartDataSlice';
import {
  AxisType,
  BaseAxisProps,
  ChartOffsetRequired,
  ChartPointer,
  Coordinate,
  DataKey,
  LayoutType,
  PolarViewBoxRequired,
  TickItem,
  TooltipEventType,
} from '../../util/types';
import { findEntryInArray } from '../../util/DataUtils';
import { TooltipTrigger } from '../../chart/types';
import { selectChartDataWithIndexes } from './dataSelectors';
import { selectTooltipAxis, selectTooltipAxisTicks, selectTooltipDisplayedData } from './tooltipSelectors';
import { AxisRange } from './axisSelectors';
import { selectChartName } from './rootPropsSelectors';
import { selectChartLayout } from '../../context/chartLayoutContext';
import { selectChartOffset } from './selectChartOffset';
import { selectChartHeight, selectChartWidth } from './containerSelectors';
import { combineActiveLabel } from './combiners/combineActiveLabel';
import { combineTooltipInteractionState } from './combiners/combineTooltipInteractionState';
import { combineActiveTooltipIndex } from './combiners/combineActiveTooltipIndex';
import { combineCoordinateForDefaultIndex } from './combiners/combineCoordinateForDefaultIndex';
import { combineTooltipPayloadConfigurations } from './combiners/combineTooltipPayloadConfigurations';
import { selectTooltipPayloadSearcher } from './selectTooltipPayloadSearcher';
import { selectTooltipState } from './selectTooltipState';

export const useChartName = (): string | undefined => {
  return useAppSelector(selectChartName);
};

const pickTooltipEventType = (_state: RechartsRootState, tooltipEventType: TooltipEventType): TooltipEventType =>
  tooltipEventType;

const pickTrigger = (
  _state: RechartsRootState,
  _tooltipEventType: TooltipEventType,
  trigger: TooltipTrigger,
): TooltipTrigger => trigger;

const pickDefaultIndex = (
  _state: RechartsRootState,
  _tooltipEventType: TooltipEventType,
  _trigger: TooltipTrigger,
  defaultIndex?: TooltipIndex | undefined,
): TooltipIndex | undefined => defaultIndex;

function getSliced<T>(
  arr: unknown | ReadonlyArray<T>,
  startIndex: number,
  endIndex: number,
): ReadonlyArray<T> | unknown {
  if (!Array.isArray(arr)) {
    return arr;
  }
  if (arr && startIndex + endIndex !== 0) {
    return arr.slice(startIndex, endIndex + 1);
  }
  return arr;
}

export const selectOrderedTooltipTicks = createSelector(selectTooltipAxisTicks, (ticks: ReadonlyArray<TickItem>) =>
  sortBy(ticks, o => o.coordinate),
);

export const selectTooltipInteractionState: (
  state: RechartsRootState,
  tooltipEventType: TooltipEventType,
  trigger: TooltipTrigger,
  defaultIndex: TooltipIndex | undefined,
) => TooltipInteractionState | undefined = createSelector(
  [selectTooltipState, pickTooltipEventType, pickTrigger, pickDefaultIndex],
  combineTooltipInteractionState,
);

export const selectActiveIndex: (
  state: RechartsRootState,
  tooltipEventType: TooltipEventType,
  trigger: TooltipTrigger,
  defaultIndex: TooltipIndex | undefined,
) => TooltipIndex | null = createSelector(
  [selectTooltipInteractionState, selectTooltipDisplayedData],
  combineActiveTooltipIndex,
);

export const selectTooltipDataKey = (
  state: RechartsRootState,
  tooltipEventType: TooltipEventType | undefined,
  trigger: TooltipTrigger,
): DataKey<any> | undefined => {
  if (tooltipEventType == null) {
    return undefined;
  }
  const tooltipState = selectTooltipState(state);
  if (tooltipEventType === 'axis') {
    if (trigger === 'hover') {
      return tooltipState.axisInteraction.hover.dataKey;
    }
    return tooltipState.axisInteraction.click.dataKey;
  }
  if (trigger === 'hover') {
    return tooltipState.itemInteraction.hover.dataKey;
  }
  return tooltipState.itemInteraction.click.dataKey;
};

export const selectTooltipPayloadConfigurations: (
  state: RechartsRootState,
  tooltipEventType: TooltipEventType,
  trigger: TooltipTrigger,
  defaultIndex: TooltipIndex | undefined,
) => ReadonlyArray<TooltipPayloadConfiguration> = createSelector(
  [selectTooltipState, pickTooltipEventType, pickTrigger, pickDefaultIndex],
  combineTooltipPayloadConfigurations,
);

export const selectCoordinateForDefaultIndex: (
  state: RechartsRootState,
  tooltipEventType: TooltipEventType,
  trigger: TooltipTrigger,
  defaultIndex: TooltipIndex | undefined,
) => Coordinate | undefined = createSelector(
  [
    selectChartWidth,
    selectChartHeight,
    selectChartLayout,
    selectChartOffset,
    selectTooltipAxisTicks,
    pickDefaultIndex,
    selectTooltipPayloadConfigurations,
    selectTooltipPayloadSearcher,
  ],
  combineCoordinateForDefaultIndex,
);

export const selectActiveCoordinate: (
  state: RechartsRootState,
  tooltipEventType: TooltipEventType,
  trigger: TooltipTrigger,
  defaultIndex: TooltipIndex | undefined,
  // TODO the state is marked as containing Coordinate but actually in polar charts it contains PolarCoordinate, we should keep the polar state separate
) => Coordinate | undefined = createSelector(
  [selectTooltipInteractionState, selectCoordinateForDefaultIndex],
  (tooltipInteractionState: TooltipInteractionState, defaultIndexCoordinate: Coordinate): Coordinate | undefined => {
    return tooltipInteractionState.coordinate ?? defaultIndexCoordinate;
  },
);

export const selectActiveLabel: (
  state: RechartsRootState,
  tooltipEventType: TooltipEventType,
  trigger: TooltipTrigger,
  defaultIndex: TooltipIndex | undefined,
) => string | number | undefined = createSelector(selectTooltipAxisTicks, selectActiveIndex, combineActiveLabel);

function selectFinalData(dataDefinedOnItem: unknown, dataDefinedOnChart: ReadonlyArray<unknown> | undefined) {
  /*
   * If a payload has data specified directly from the graphical item, prefer that.
   * Otherwise, fill in data from the chart level, using the same index.
   */
  if (dataDefinedOnItem != null) {
    return dataDefinedOnItem;
  }
  return dataDefinedOnChart;
}

export const combineTooltipPayload = (
  tooltipPayloadConfigurations: ReadonlyArray<TooltipPayloadConfiguration>,
  activeIndex: TooltipIndex,
  chartDataState: ChartDataState,
  tooltipAxis: BaseAxisProps | undefined,
  activeLabel: string | undefined,
  tooltipPayloadSearcher: TooltipPayloadSearcher | undefined,
  tooltipEventType: TooltipEventType,
): TooltipPayload | undefined => {
  if (activeIndex == null || tooltipPayloadSearcher == null) {
    return undefined;
  }
  const { chartData, computedData, dataStartIndex, dataEndIndex } = chartDataState;

  const init: Array<TooltipPayloadEntry> = [];

  return tooltipPayloadConfigurations.reduce((agg, { dataDefinedOnItem, settings }): Array<TooltipPayloadEntry> => {
    const finalData = selectFinalData(dataDefinedOnItem, chartData);

    const sliced = getSliced(finalData, dataStartIndex, dataEndIndex);

    const finalDataKey: DataKey<any> | undefined = settings?.dataKey ?? tooltipAxis?.dataKey;
    // BaseAxisProps does not support nameKey but it could!
    const finalNameKey: DataKey<any> | undefined = settings?.nameKey; // ?? tooltipAxis?.nameKey;
    let tooltipPayload: unknown;
    if (
      tooltipAxis?.dataKey &&
      !tooltipAxis?.allowDuplicatedCategory &&
      Array.isArray(sliced) &&
      /*
       * If the tooltipEventType is 'axis', we should search for the dataKey in the sliced data
       * because thanks to allowDuplicatedCategory=false, the order of elements in the array
       * no longer matches the order of elements in the original data
       * and so we need to search by the active dataKey + label rather than by index.
       *
       * On the other hand the tooltipEventType 'item' should always search by index
       * because we get the index from interacting over the individual elements
       * which is always accurate, irrespective of the allowDuplicatedCategory setting.
       */
      tooltipEventType === 'axis'
    ) {
      tooltipPayload = findEntryInArray(sliced, tooltipAxis.dataKey, activeLabel);
    } else {
      tooltipPayload = tooltipPayloadSearcher(sliced, activeIndex, computedData, finalNameKey);
    }

    if (Array.isArray(tooltipPayload)) {
      tooltipPayload.forEach(item => {
        const newSettings: TooltipEntrySettings = {
          ...settings,
          name: item.name,
          unit: item.unit,
          // color and fill are erased to keep 100% the identical behaviour to recharts 2.x - but there's nothing stopping us from returning them here. It's technically a breaking change.
          color: undefined,
          // color and fill are erased to keep 100% the identical behaviour to recharts 2.x - but there's nothing stopping us from returning them here. It's technically a breaking change.
          fill: undefined,
        };
        agg.push(
          getTooltipEntry({
            tooltipEntrySettings: newSettings,
            dataKey: item.dataKey,
            payload: item.payload,
            // @ts-expect-error getValueByDataKey does not validate the output type
            value: getValueByDataKey(item.payload, item.dataKey),
            name: item.name,
          }),
        );
      });
    } else {
      // I am not quite sure why these two branches (Array vs Array of Arrays) have to behave differently - I imagine we should unify these. 3.x breaking change?
      agg.push(
        getTooltipEntry({
          tooltipEntrySettings: settings,
          dataKey: finalDataKey,
          payload: tooltipPayload,
          // @ts-expect-error getValueByDataKey does not validate the output type
          value: getValueByDataKey(tooltipPayload, finalDataKey),
          // @ts-expect-error getValueByDataKey does not validate the output type
          name: getValueByDataKey(tooltipPayload, finalNameKey) ?? settings?.name,
        }),
      );
    }
    return agg;
  }, init);
};

export const selectTooltipPayload: (
  state: RechartsRootState,
  tooltipEventType: TooltipEventType,
  trigger: TooltipTrigger,
  defaultIndex: TooltipIndex | undefined,
) => TooltipPayload | undefined = createSelector(
  [
    selectTooltipPayloadConfigurations,
    selectActiveIndex,
    selectChartDataWithIndexes,
    selectTooltipAxis,
    selectActiveLabel,
    selectTooltipPayloadSearcher,
    pickTooltipEventType,
  ],
  combineTooltipPayload,
);

export const selectIsTooltipActive: (
  state: RechartsRootState,
  tooltipEventType: TooltipEventType,
  trigger: TooltipTrigger,
  defaultIndex: TooltipIndex | undefined,
) => { isActive: boolean; activeIndex: TooltipIndex | undefined } = createSelector(
  [selectTooltipInteractionState],
  (tooltipInteractionState: TooltipInteractionState) => {
    return { isActive: tooltipInteractionState.active, activeIndex: tooltipInteractionState.index };
  },
);

export const combineActiveProps = (
  chartEvent: ChartPointer | undefined,
  layout: LayoutType | undefined,
  polarViewBox: PolarViewBoxRequired | undefined,
  tooltipAxisType: AxisType | undefined,
  tooltipAxisRange: AxisRange | undefined,
  tooltipTicks: ReadonlyArray<TickItem> | undefined,
  orderedTooltipTicks: ReadonlyArray<TickItem> | undefined,
  offset: ChartOffsetRequired,
): ActiveTooltipProps | undefined => {
  if (!chartEvent || !layout || !tooltipAxisType || !tooltipAxisRange || !tooltipTicks) {
    return undefined;
  }
  const rangeObj = inRange(chartEvent.chartX, chartEvent.chartY, layout, polarViewBox, offset);
  if (!rangeObj) {
    return undefined;
  }
  const pos: number | undefined = calculateTooltipPos(rangeObj, layout);

  const activeIndex = calculateActiveTickIndex(
    pos,
    orderedTooltipTicks,
    tooltipTicks,
    tooltipAxisType,
    tooltipAxisRange,
  );

  const activeCoordinate = getActiveCoordinate(layout, tooltipTicks, activeIndex, rangeObj);

  return { activeIndex: String(activeIndex), activeCoordinate };
};
