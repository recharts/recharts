import { createSelector } from '@reduxjs/toolkit';
import { useAppSelector } from './hooks';
import { RechartsRootState } from './store';
import { TooltipPayload, TooltipPayloadConfiguration, TooltipPayloadEntry, TooltipState } from './tooltipSlice';
import { getTicksOfAxis, getTooltipEntry, getValueByDataKey } from '../util/ChartUtils';
import { ChartDataState } from './chartDataSlice';
import { selectTooltipAxis } from '../context/useTooltipAxis';
import { BaseAxisProps, DataKey, TickItem, TooltipEventType } from '../util/types';
import { findEntryInArray } from '../util/DataUtils';
import { TooltipTrigger } from '../chart/types';

export const useChartName = (): string => {
  return useAppSelector((state: RechartsRootState) => state.options.chartName);
};

export function useTooltipEventType(shared: boolean | undefined): TooltipEventType {
  const defaultTooltipEventType = useAppSelector((state: RechartsRootState) => state.options.defaultTooltipEventType);
  const validateTooltipEventTypes = useAppSelector(
    (state: RechartsRootState) => state.options.validateTooltipEventTypes,
  );
  if (shared == null) {
    return defaultTooltipEventType;
  }
  const eventType = shared ? 'axis' : 'item';
  return validateTooltipEventTypes.includes(eventType) ? eventType : defaultTooltipEventType;
}

function getSliced<T>(arr: ReadonlyArray<T>, startIndex: number, endIndex: number): ReadonlyArray<T> {
  if (arr && startIndex + endIndex !== 0) {
    return arr.slice(startIndex, endIndex + 1);
  }
  return arr;
}

const selectTooltipState = (state: RechartsRootState) => state.tooltip;
const selectChartData = (state: RechartsRootState) => state.chartData;

const selectTooltipTicks = createSelector(selectTooltipAxis, (tooltipAxis: BaseAxisProps) =>
  getTicksOfAxis(tooltipAxis, false, true),
);

export function selectActiveIndex(
  state: RechartsRootState,
  tooltipEventType: TooltipEventType,
  trigger: TooltipTrigger,
  defaultIndex: number | undefined,
): number {
  const tooltipState: TooltipState = selectTooltipState(state);
  let activeIndex: number;
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
  if (activeIndex === -1 && defaultIndex != null) {
    return defaultIndex;
  }
  return activeIndex;
}

const selectActiveLabel = createSelector(
  selectTooltipTicks,
  selectActiveIndex,
  (tooltipTicks: ReadonlyArray<TickItem>, activeIndex: number): string | undefined =>
    tooltipTicks?.[activeIndex]?.value,
);

function selectFinalData(dataDefinedOnItem: ReadonlyArray<unknown>, dataDefinedOnChart: ReadonlyArray<unknown>) {
  /*
   * If a payload has data specified directly from the graphical item, prefer that.
   * Otherwise, fill in data from the chart level, using the same index.
   */
  if (dataDefinedOnItem?.length > 0) {
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
  activeIndex: number,
  chartDataState: ChartDataState,
  tooltipAxis: BaseAxisProps | undefined,
  activeLabel: string | undefined,
): TooltipPayload | undefined => {
  if (activeIndex === -1) {
    return undefined;
  }
  const { chartData, dataStartIndex, dataEndIndex } = chartDataState;

  const init: Array<TooltipPayloadEntry> = [];

  return tooltipItemPayloads.reduce((agg, { dataDefinedOnItem, settings }): Array<TooltipPayloadEntry> => {
    const finalData = selectFinalData(dataDefinedOnItem, chartData);

    const sliced = getSliced(finalData, dataStartIndex, dataEndIndex);

    const finalDataKey: DataKey<any> | undefined = settings?.dataKey ?? tooltipAxis?.dataKey;
    let tooltipPayload: unknown;
    if (tooltipAxis?.dataKey && !tooltipAxis?.allowDuplicatedCategory) {
      tooltipPayload = findEntryInArray(sliced, tooltipAxis.dataKey, activeLabel);
    } else {
      tooltipPayload = sliced?.[activeIndex];
    }

    if (Array.isArray(tooltipPayload)) {
      tooltipPayload.forEach(item => {
        const newSettings = {
          ...settings,
          name: item.name,
          unit: item.unit,
          // @ts-expect-error okay so color and fill are erased to keep 100% the identical behaviour to recharts 2.x - but there's nothing stopping us from returning them here. It's technically a breaking change.
          color: undefined,
          // @ts-expect-error okay so color and fill are erased to keep 100% the identical behaviour to recharts 2.x - but there's nothing stopping us from returning them here. It's technically a breaking change.
          fill: undefined,
        };
        agg.push(
          getTooltipEntry({
            tooltipEntrySettings: newSettings,
            dataKey: item.dataKey,
            payload: item.payload,
            value: getValueByDataKey(item.payload, item.dataKey),
          }),
        );
      });
    } else {
      agg.push(
        getTooltipEntry({
          tooltipEntrySettings: settings,
          dataKey: finalDataKey,
          payload: tooltipPayload,
          value: getValueByDataKey(tooltipPayload, finalDataKey),
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
  selectTooltipPayloadConfigurations,
  selectActiveIndex,
  selectChartData,
  selectTooltipAxis,
  selectActiveLabel,
  combineTooltipPayload,
);

export const selectIsTooltipActive = (
  state: RechartsRootState,
  tooltipEventType: TooltipEventType,
  trigger: TooltipTrigger,
): boolean => {
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
};
