import { createSelector } from '@reduxjs/toolkit';
import sortBy from 'lodash/sortBy';
import { selectSynchronisedTooltipState } from '../../synchronisation/syncSelectors';
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
  TooltipSettingsState,
  TooltipState,
  TooltipSyncState,
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
import { selectTooltipAxis, selectTooltipAxisTicks } from './tooltipSelectors';
import { AxisRange } from './axisSelectors';
import { selectChartName } from './rootPropsSelectors';
import { selectChartLayout } from '../../context/chartLayoutContext';
import { selectChartOffset } from './selectChartOffset';
import { selectChartHeight, selectChartWidth } from './containerSelectors';
import { combineActiveLabel } from './combiners/combineActiveLabel';

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
  defaultIndex?: number | undefined,
): number | undefined => defaultIndex;

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

export const selectTooltipSettings = (state: RechartsRootState): TooltipSettingsState => state.tooltip.settings;

export const selectOrderedTooltipTicks = createSelector(selectTooltipAxisTicks, (ticks: ReadonlyArray<TickItem>) =>
  sortBy(ticks, o => o.coordinate),
);

export function selectActiveIndex(
  state: RechartsRootState,
  tooltipEventType: TooltipEventType,
  trigger: TooltipTrigger,
  defaultIndex: number | undefined,
): TooltipIndex {
  const tooltipState: TooltipState = selectTooltipState(state);
  if (tooltipState.syncInteraction.active) {
    // Chart synchronisation wins over everything else
    return tooltipState.syncInteraction.index;
  }
  let activeIndex: TooltipIndex;
  if (tooltipEventType === 'item') {
    if (trigger === 'hover') {
      activeIndex = tooltipState.itemInteraction.hover.index;
    } else {
      activeIndex = tooltipState.itemInteraction.click.index;
    }
  } else if (trigger === 'hover') {
    activeIndex = tooltipState.axisInteraction.activeMouseOverAxisIndex;
  } else {
    activeIndex = tooltipState.axisInteraction.click.index;
  }
  if (activeIndex == null && defaultIndex != null) {
    return `${defaultIndex}`;
  }
  return activeIndex;
}

export const selectTooltipDataKey = (
  state: RechartsRootState,
  tooltipEventType: TooltipEventType,
  trigger: TooltipTrigger,
): DataKey<any> | undefined => {
  const tooltipState = selectTooltipState(state);
  if (tooltipEventType === 'axis') {
    if (trigger === 'hover') {
      return tooltipState.axisInteraction.activeMouseOverAxisDataKey;
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
  defaultIndex: number | undefined,
) => ReadonlyArray<TooltipPayloadConfiguration> = createSelector(
  [selectTooltipState, pickTooltipEventType, pickTrigger, pickDefaultIndex],
  (
    tooltipState: TooltipState,
    tooltipEventType: TooltipEventType,
    trigger: TooltipTrigger,
    defaultIndex: number | undefined,
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

const selectCoordinateForDefaultIndex: (
  state: RechartsRootState,
  tooltipEventType: TooltipEventType,
  trigger: TooltipTrigger,
  defaultIndex: number | undefined,
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
    defaultIndex: number | undefined,
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
      // @ts-expect-error defaultIndex really should be type TooltipIndex, not number, if we want to support all charts
      firstConfiguration == null ? undefined : tooltipPayloadSearcher(firstConfiguration.positions, defaultIndex);
    if (maybePosition != null) {
      return maybePosition;
    }
    const tick = tooltipTicks?.[defaultIndex];
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
  defaultIndex: number | undefined,
) => ChartCoordinate | undefined = createSelector(
  [selectTooltipState, selectCoordinateForDefaultIndex, pickTooltipEventType, pickTrigger],
  (
    tooltipState: TooltipState,
    defaultIndexCoordinate: ChartCoordinate,
    tooltipEventType: TooltipEventType,
    trigger: TooltipTrigger,
  ): ChartCoordinate | undefined => {
    if (tooltipState.syncInteraction.active) {
      /*
       * Chart synchronisation wins over everything else.
       * The synchronisation hook already validates the coordinates to make sure they are within the current chart bounds,
       * so that we can just return them here.
       */
      return tooltipState.syncInteraction.coordinate;
    }
    let activeCoordinate: ChartCoordinate;
    if (tooltipEventType === 'item') {
      if (trigger === 'hover') {
        activeCoordinate = tooltipState.itemInteraction.hover.coordinate;
      } else {
        activeCoordinate = tooltipState.itemInteraction.click.coordinate;
      }
    } else if (trigger === 'hover') {
      activeCoordinate = tooltipState.axisInteraction.activeMouseOverCoordinate;
    } else {
      activeCoordinate = tooltipState.axisInteraction.click.coordinate;
    }
    return activeCoordinate ?? defaultIndexCoordinate;
  },
);

export const selectActiveLabel: (
  state: RechartsRootState,
  tooltipEventType: TooltipEventType,
  trigger: TooltipTrigger,
  defaultIndex: number | undefined,
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
  defaultIndex: number | undefined,
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
  defaultIndex?: number | undefined,
) => { isActive: boolean; activeIndex: string | undefined } = createSelector(
  [
    selectTooltipState,
    pickTooltipEventType,
    pickTrigger,
    pickDefaultIndex,
    selectTooltipSettings,
    selectSynchronisedTooltipState,
  ],
  (
    tooltipState: TooltipState,
    tooltipEventType: TooltipEventType,
    trigger: TooltipTrigger,
    defaultIndex: number | undefined,
    { active: activeFromProps }: TooltipSettingsState,
    syncState: TooltipSyncState,
  ) => {
    if (syncState.active) {
      // Chart synchronisation wins over everything else
      return { isActive: true, activeIndex: syncState.index };
    }
    let isActive: boolean, activeIndex: string | undefined;
    if (tooltipEventType === 'axis') {
      if (trigger === 'hover') {
        if (activeFromProps) {
          isActive = tooltipState.axisInteraction.activeMouseOverAxisIndex != null;
          activeIndex = tooltipState.axisInteraction.activeMouseOverAxisIndex;
        } else {
          isActive = tooltipState.axisInteraction.activeHover;
          activeIndex = tooltipState.axisInteraction.activeMouseOverAxisIndex;
        }
      } else if (activeFromProps) {
        isActive = tooltipState.axisInteraction.click.index != null;
        activeIndex = tooltipState.axisInteraction.click.index;
      } else {
        isActive = tooltipState.axisInteraction.click.active;
        activeIndex = tooltipState.axisInteraction.click.index;
      }
    } else if (trigger === 'hover') {
      if (activeFromProps) {
        isActive = tooltipState.itemInteraction.hover.index != null;
        activeIndex = tooltipState.itemInteraction.hover.index;
      } else {
        isActive = tooltipState.itemInteraction.hover.active;
        activeIndex = tooltipState.itemInteraction.hover.index;
      }
    } else if (activeFromProps) {
      isActive = tooltipState.itemInteraction.click.index != null;
      activeIndex = tooltipState.itemInteraction.click.index;
    } else {
      isActive = tooltipState.itemInteraction.click.active;
      activeIndex = tooltipState.itemInteraction.click.index;
    }

    if (activeIndex == null && isActive === false && defaultIndex != null) {
      return { isActive: true, activeIndex: String(defaultIndex) };
    }

    return { isActive, activeIndex };
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
