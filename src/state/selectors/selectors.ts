import { createSelector } from 'reselect';
import sortBy from 'lodash/sortBy';
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
  TooltipState,
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
  ChartCoordinate,
  ChartOffset,
  Coordinate,
  DataKey,
  LayoutType,
  PolarViewBox,
  TickItem,
  TooltipEventType,
} from '../../util/types';
import { findEntryInArray } from '../../util/DataUtils';
import { TooltipTrigger } from '../../chart/types';
import { ChartPointer } from '../../chart/generateCategoricalChart';
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

export const useChartName = (): string => {
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

export const selectTooltipState = (state: RechartsRootState): TooltipState => state.tooltip;

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
  tooltipEventType: TooltipEventType,
  trigger: TooltipTrigger,
): DataKey<any> | undefined => {
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
  (
    tooltipState: TooltipState,
    tooltipEventType: TooltipEventType,
    trigger: TooltipTrigger,
    defaultIndex: TooltipIndex | undefined,
  ): ReadonlyArray<TooltipPayloadConfiguration> => {
    // if tooltip reacts to axis interaction, then we display all items at the same time.
    if (tooltipEventType === 'axis') {
      return tooltipState.tooltipItemPayloads;
    }
    /*
     * By now we already know that tooltipEventType is 'item', so we can only search in itemInteractions.
     * item means that only the hovered or clicked item will be present in the tooltip.
     */
    if (tooltipState.tooltipItemPayloads.length === 0) {
      // No point filtering if the payload is empty
      return [];
    }
    let filterByDataKey: DataKey<any> | undefined;
    if (trigger === 'hover') {
      filterByDataKey = tooltipState.itemInteraction.hover.dataKey;
    } else {
      filterByDataKey = tooltipState.itemInteraction.click.dataKey;
    }
    if (filterByDataKey == null && defaultIndex != null) {
      /*
       * So when we use `defaultIndex` - we don't have a dataKey to filter by because user did not hover over anything yet.
       * In that case let's display the first item in the tooltip; after all, this is `item` interaction case,
       * so we should display only one item at a time instead of all.
       */
      return [tooltipState.tooltipItemPayloads[0]];
    }
    return tooltipState.tooltipItemPayloads.filter(tpc => tpc.settings?.dataKey === filterByDataKey);
  },
);

export const selectTooltipPayloadSearcher = (state: RechartsRootState): TooltipPayloadSearcher | undefined =>
  state.options.tooltipPayloadSearcher;

export const selectCoordinateForDefaultIndex: (
  state: RechartsRootState,
  tooltipEventType: TooltipEventType,
  trigger: TooltipTrigger,
  defaultIndex: TooltipIndex | undefined,
) => ChartCoordinate | undefined = createSelector(
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
  (
    width: number,
    height: number,
    layout: LayoutType,
    offset: ChartOffset | undefined,
    tooltipTicks: ReadonlyArray<TickItem>,
    defaultIndex: TooltipIndex | undefined,
    tooltipConfigurations: ReadonlyArray<TooltipPayloadConfiguration>,
    tooltipPayloadSearcher: TooltipPayloadSearcher | undefined,
  ): ChartCoordinate | undefined => {
    if (defaultIndex == null || offset == null) {
      return undefined;
    }
    // With defaultIndex alone, we don't have enough information to decide _which_ of the multiple tooltips to display. So we choose the first one.
    const firstConfiguration = tooltipConfigurations[0];
    // @ts-expect-error we need to rethink the tooltipPayloadSearcher type
    const maybePosition: Coordinate | undefined =
      firstConfiguration == null ? undefined : tooltipPayloadSearcher(firstConfiguration.positions, defaultIndex);
    if (maybePosition != null) {
      return maybePosition;
    }
    const tick = tooltipTicks?.[Number(defaultIndex)];
    if (!tick) {
      return undefined;
    }
    switch (layout) {
      case 'horizontal': {
        return {
          x: tick.coordinate,
          y: (offset.top + height) / 2,
        };
      }
      default: {
        // This logic is not super sound - it conflates vertical, radial, centric layouts into just one. TODO improve!
        return {
          x: (offset.left + width) / 2,
          y: tick.coordinate,
        };
      }
    }
  },
);

export const selectActiveCoordinate: (
  state: RechartsRootState,
  tooltipEventType: TooltipEventType,
  trigger: TooltipTrigger,
  defaultIndex: TooltipIndex | undefined,
) => ChartCoordinate | undefined = createSelector(
  [selectTooltipInteractionState, selectCoordinateForDefaultIndex],
  (
    tooltipInteractionState: TooltipInteractionState,
    defaultIndexCoordinate: ChartCoordinate,
  ): ChartCoordinate | undefined => {
    return tooltipInteractionState.coordinate ?? defaultIndexCoordinate;
  },
);

export const selectActiveLabel: (
  state: RechartsRootState,
  tooltipEventType: TooltipEventType,
  trigger: TooltipTrigger,
  defaultIndex: TooltipIndex | undefined,
) => string | undefined = createSelector(selectTooltipAxisTicks, selectActiveIndex, combineActiveLabel);

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
  const { chartData, computedData, dataStartIndex, dataEndIndex } = chartDataState;

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
  ],
  combineTooltipPayload,
);

export const selectIsTooltipActive: (
  state: RechartsRootState,
  tooltipEventType: TooltipEventType,
  trigger: TooltipTrigger,
  defaultIndex: TooltipIndex | undefined,
) => { isActive: boolean; activeIndex: string | undefined } = createSelector(
  [selectTooltipInteractionState],
  (tooltipInteractionState: TooltipInteractionState) => {
    return { isActive: tooltipInteractionState.active, activeIndex: tooltipInteractionState.index };
  },
);

export const combineActiveProps = (
  chartEvent: ChartPointer | undefined,
  scale: number | undefined,
  layout: LayoutType | undefined,
  polarViewBox: PolarViewBox | undefined,
  tooltipAxisType: AxisType | undefined,
  tooltipAxisRange: AxisRange | undefined,
  tooltipTicks: ReadonlyArray<TickItem> | undefined,
  orderedTooltipTicks: ReadonlyArray<TickItem> | undefined,
  offset: ChartOffset,
): ActiveTooltipProps => {
  if (!chartEvent || !scale || !layout || !tooltipAxisType || !tooltipAxisRange || !tooltipTicks) {
    return undefined;
  }
  const rangeObj = inRange(chartEvent.chartX, chartEvent.chartY, scale, layout, polarViewBox, offset);
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
