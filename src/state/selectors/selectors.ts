import { createSelector } from '@reduxjs/toolkit';
import sortBy from 'lodash/sortBy';
import { useAppSelector } from '../hooks';
import { RechartsRootState } from '../store';
import {
  ActiveTooltipProps,
  TooltipEntrySettings,
  TooltipIndex,
  TooltipPayload,
  TooltipPayloadConfiguration,
  TooltipPayloadEntry,
  TooltipPayloadSearcher,
  TooltipState,
} from '../tooltipSlice';
import {
  AxisPropsNeededForTicksGenerator,
  calculateActiveTickIndex,
  calculateTooltipPos,
  getActiveCoordinate,
  getTicksOfAxis,
  getTooltipEntry,
  getValueByDataKey,
  inRange,
} from '../../util/ChartUtils';
import { ChartDataState } from '../chartDataSlice';
import { selectTooltipAxis } from '../../context/useTooltipAxis';
import {
  BaseAxisProps,
  ChartCoordinate,
  ChartOffset,
  DataKey,
  LayoutType,
  StackOffsetType,
  TickItem,
  TooltipEventType,
} from '../../util/types';
import { findEntryInArray } from '../../util/DataUtils';
import { AxisMap, AxisPropsWithExtraComputedData, TooltipTrigger } from '../../chart/types';
import {
  selectChartLayout,
  selectPolarAngleAxisMap,
  selectPolarRadiusAxisMap,
  selectXAxisMap,
  selectYAxisMap,
} from '../../context/chartLayoutContext';
import { ChartPointer, MousePointer } from '../../chart/generateCategoricalChart';
import { selectChartDataWithIndexes } from './dataSelectors';
import { selectChartCoordinates, selectContainerScale } from './containerSelectors';
import { selectChartOffset } from './selectChartOffset';

export const selectChartName = (state: RechartsRootState) => state.options.chartName;

export const selectBarCategoryGap = (state: RechartsRootState) => state.options.barCategoryGap;

export const selectStackOffsetType = (state: RechartsRootState): StackOffsetType => state.options.stackOffset;

export const useChartName = (): string => {
  return useAppSelector(selectChartName);
};

const selectDefaultTooltipEventType = (state: RechartsRootState) => state.options.defaultTooltipEventType;
const selectValidateTooltipEventTypes = (state: RechartsRootState) => state.options.validateTooltipEventTypes;

export function selectTooltipEventType(state: RechartsRootState, shared: boolean | undefined): TooltipEventType {
  const defaultTooltipEventType = selectDefaultTooltipEventType(state);
  const validateTooltipEventTypes = selectValidateTooltipEventTypes(state);
  if (shared == null) {
    return defaultTooltipEventType;
  }
  const eventType = shared ? 'axis' : 'item';
  return validateTooltipEventTypes.includes(eventType) ? eventType : defaultTooltipEventType;
}

export function useTooltipEventType(shared: boolean | undefined): TooltipEventType {
  return useAppSelector(state => selectTooltipEventType(state, shared));
}

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

export const selectTooltipState = (state: RechartsRootState) => state.tooltip;

const selectTooltipTicks = createSelector(selectTooltipAxis, (tooltipAxis: AxisPropsNeededForTicksGenerator) =>
  getTicksOfAxis(tooltipAxis, false, true),
);

const selectOrderedTooltipTicks = createSelector(selectTooltipTicks, (ticks: ReadonlyArray<TickItem>) =>
  sortBy(ticks, o => o.coordinate),
);

export function selectActiveIndex(
  state: RechartsRootState,
  tooltipEventType: TooltipEventType,
  trigger: TooltipTrigger,
  defaultIndex: number | undefined,
): TooltipIndex {
  const tooltipState: TooltipState = selectTooltipState(state);
  let activeIndex: TooltipIndex;
  if (tooltipEventType === 'item') {
    if (trigger === 'hover') {
      activeIndex = tooltipState.itemInteraction.activeMouseOverIndex;
    } else {
      activeIndex = tooltipState.itemInteraction.activeClickIndex;
    }
  } else if (trigger === 'hover') {
    activeIndex = tooltipState.axisInteraction.activeMouseOverAxisIndex;
  } else {
    activeIndex = tooltipState.axisInteraction.activeClickAxisIndex;
  }
  if (activeIndex == null && defaultIndex != null) {
    return `${defaultIndex}`;
  }
  return activeIndex;
}

export function selectActiveCoordinate(
  state: RechartsRootState,
  tooltipEventType: TooltipEventType,
  trigger: TooltipTrigger,
): ChartCoordinate | undefined {
  const tooltipState: TooltipState = selectTooltipState(state);
  let activeCoordinate: ChartCoordinate;
  if (tooltipEventType === 'item') {
    if (trigger === 'hover') {
      activeCoordinate = tooltipState.itemInteraction.activeMouseOverCoordinate;
    } else {
      activeCoordinate = tooltipState.itemInteraction.activeClickCoordinate;
    }
  } else if (trigger === 'hover') {
    activeCoordinate = tooltipState.axisInteraction.activeMouseOverCoordinate;
  } else {
    activeCoordinate = tooltipState.axisInteraction.activeClickCoordinate;
  }
  return activeCoordinate;
}

export const selectActiveLabel = createSelector(
  selectTooltipTicks,
  selectActiveIndex,
  (tooltipTicks: ReadonlyArray<TickItem>, activeIndex: TooltipIndex): string | undefined => {
    const n = Number(activeIndex);
    if (Number.isNaN(n) || activeIndex == null) {
      return undefined;
    }
    return n >= 0 ? tooltipTicks?.[n]?.value : undefined;
  },
);

function selectFinalData(dataDefinedOnItem: unknown, dataDefinedOnChart: ReadonlyArray<unknown>) {
  /*
   * If a payload has data specified directly from the graphical item, prefer that.
   * Otherwise, fill in data from the chart level, using the same index.
   */
  if (dataDefinedOnItem != null) {
    return dataDefinedOnItem;
  }
  return dataDefinedOnChart;
}

export function selectTooltipPayloadConfigurations(
  state: RechartsRootState,
  tooltipEventType: TooltipEventType,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  trigger: TooltipTrigger,
): ReadonlyArray<TooltipPayloadConfiguration> {
  const tooltipState = selectTooltipState(state);
  // if tooltip reacts to axis interaction, then we display all items at the same time.
  if (tooltipEventType === 'axis') {
    return tooltipState.tooltipItemPayloads;
  }
  let filterByDataKey: DataKey<any> | undefined;
  /*
   * By now we already know that tooltipEventType is 'item', so we can only search in itemInteractions.
   * item means that only the hovered or clicked item will be present in the tooltip.
   */
  if (trigger === 'hover') {
    filterByDataKey = tooltipState.itemInteraction.activeMouseOverDataKey;
  } else {
    filterByDataKey = tooltipState.itemInteraction.activeClickDataKey;
  }
  return tooltipState.tooltipItemPayloads.filter(tpc => tpc.settings?.dataKey === filterByDataKey);
}

export const combineTooltipPayload = (
  tooltipItemPayloads: ReadonlyArray<TooltipPayloadConfiguration>,
  activeIndex: TooltipIndex,
  chartDataState: ChartDataState,
  tooltipAxis: BaseAxisProps | undefined,
  activeLabel: string | undefined,
  tooltipPayloadSearcher: TooltipPayloadSearcher | undefined,
): TooltipPayload | undefined => {
  if (activeIndex == null || tooltipPayloadSearcher == null) {
    return undefined;
  }
  const { chartData, dataStartIndex, dataEndIndex } = chartDataState;

  const init: Array<TooltipPayloadEntry> = [];

  return tooltipItemPayloads.reduce((agg, { dataDefinedOnItem, settings }): Array<TooltipPayloadEntry> => {
    const finalData = selectFinalData(dataDefinedOnItem, chartData);

    const sliced = getSliced(finalData, dataStartIndex, dataEndIndex);

    const finalDataKey: DataKey<any> | undefined = settings?.dataKey ?? tooltipAxis?.dataKey;
    // BaseAxisProps does not support nameKey but it could!
    const finalNameKey: DataKey<any> | undefined = settings?.nameKey; // ?? tooltipAxis?.nameKey;
    let tooltipPayload: unknown;
    if (tooltipAxis?.dataKey && !tooltipAxis?.allowDuplicatedCategory && Array.isArray(sliced)) {
      tooltipPayload = findEntryInArray(sliced, tooltipAxis.dataKey, activeLabel);
    } else {
      tooltipPayload = tooltipPayloadSearcher(sliced, activeIndex);
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

const selectTooltipPayloadSearcher = (state: RechartsRootState): TooltipPayloadSearcher | undefined =>
  state.options.tooltipPayloadSearcher;

export const selectTooltipPayload: (
  state: RechartsRootState,
  tooltipEventType: TooltipEventType,
  trigger: TooltipTrigger,
  defaultIndex: number | undefined,
) => TooltipPayload | undefined = createSelector(
  selectTooltipPayloadConfigurations,
  selectActiveIndex,
  selectChartDataWithIndexes,
  selectTooltipAxis,
  selectActiveLabel,
  selectTooltipPayloadSearcher,
  combineTooltipPayload,
);

export const selectIsTooltipActive: (
  state: RechartsRootState,
  tooltipEventType: TooltipEventType,
  trigger: TooltipTrigger,
  defaultIndex?: number | undefined,
) => boolean = createSelector(
  (state: RechartsRootState) => state,
  (_state, tooltipEventType: TooltipEventType) => tooltipEventType,
  (_state, _tooltipEventType, trigger: TooltipTrigger) => trigger,
  (_state, _tooltipEventType, _trigger, defaultIndex?: number | undefined) => defaultIndex,
  selectActiveCoordinate,
  (
    state: RechartsRootState,
    tooltipEventType: TooltipEventType,
    trigger: TooltipTrigger,
    defaultIndex: number | undefined,
    coordinate: ChartCoordinate,
  ) => {
    // if coordinate is undefined it has not yet been set, if it is null it has been "reset"
    // we can change this later but not sure how else to maintain current functionality
    if (coordinate === undefined && defaultIndex != null) {
      return true;
    }
    if (tooltipEventType === 'axis') {
      if (trigger === 'hover') {
        return state.tooltip.axisInteraction.activeHover;
      }
      return state.tooltip.axisInteraction.activeClick;
    }
    if (trigger === 'hover') {
      return state.tooltip.itemInteraction.activeHover;
    }
    return state.tooltip.itemInteraction.activeClick;
  },
);

export const combineActiveProps = (
  chartEvent: ChartPointer | undefined,
  scale: number | undefined,
  layout: LayoutType | undefined,
  xAxisMap: AxisMap | undefined,
  yAxisMap: AxisMap | undefined,
  angleAxisMap: AxisMap | undefined,
  radiusAxisMap: AxisMap | undefined,
  tooltipAxis: AxisPropsWithExtraComputedData | undefined,
  tooltipTicks: ReadonlyArray<TickItem> | undefined,
  orderedTooltipTicks: ReadonlyArray<TickItem> | undefined,
  offset: ChartOffset,
): ActiveTooltipProps => {
  if (!chartEvent || !scale || !layout || !tooltipAxis || !tooltipTicks) {
    return undefined;
  }
  const rangeObj = inRange(chartEvent.chartX, chartEvent.chartY, scale, layout, angleAxisMap, radiusAxisMap, offset);
  if (!rangeObj) {
    return undefined;
  }
  const pos: number | undefined = calculateTooltipPos(rangeObj, layout);

  const activeIndex = calculateActiveTickIndex(pos, orderedTooltipTicks, tooltipTicks, tooltipAxis);

  const activeCoordinate = getActiveCoordinate(layout, tooltipTicks, activeIndex, rangeObj);

  return { activeIndex: String(activeIndex), activeCoordinate };
};

export const selectActivePropsFromMousePointer: (
  state: RechartsRootState,
  mousePointer: MousePointer,
) => ActiveTooltipProps = createSelector(
  selectChartCoordinates,
  selectContainerScale,
  selectChartLayout,
  selectXAxisMap,
  selectYAxisMap,
  selectPolarAngleAxisMap,
  selectPolarRadiusAxisMap,
  selectTooltipAxis,
  selectTooltipTicks,
  selectOrderedTooltipTicks,
  selectChartOffset,
  combineActiveProps,
);
