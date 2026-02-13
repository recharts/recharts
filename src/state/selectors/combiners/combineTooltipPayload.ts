import {
  TooltipEntrySettings,
  TooltipIndex,
  TooltipPayload,
  TooltipPayloadConfiguration,
  TooltipPayloadEntry,
  TooltipPayloadSearcher,
} from '../../tooltipSlice';
import { ChartData, ChartDataState } from '../../chartDataSlice';
import { DataKey, TooltipEventType } from '../../../util/types';
import { findEntryInArray } from '../../../util/DataUtils';
import { getTooltipEntry, getValueByDataKey } from '../../../util/ChartUtils';
import { getSliced } from '../../../util/getSliced';
import { ActiveLabel } from '../../../synchronisation/types';

type TooltipPayloadItemLike = {
  name: TooltipEntrySettings['name'];
  unit: TooltipEntrySettings['unit'];
  dataKey: DataKey<any> | undefined;
  payload: unknown;
  color: string | undefined;
  fill: string | undefined;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return value != null && typeof value === 'object';
}

function parseName(value: unknown): TooltipEntrySettings['name'] {
  if (typeof value === 'string' || typeof value === 'number') {
    return value;
  }
  return undefined;
}

function parseUnit(value: unknown): TooltipEntrySettings['unit'] {
  if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
    return value;
  }
  return undefined;
}

function parseDataKey(value: unknown): DataKey<any> | undefined {
  if (typeof value === 'string' || typeof value === 'number') {
    return value;
  }
  if (typeof value === 'function') {
    return obj => value(obj);
  }
  return undefined;
}

function parseColor(value: unknown): string | undefined {
  if (typeof value === 'string') {
    return value;
  }
  return undefined;
}

function parseTooltipPayloadItem(item: unknown): TooltipPayloadItemLike | undefined {
  if (!isRecord(item)) {
    return undefined;
  }

  return {
    name: parseName(item.name),
    unit: parseUnit(item.unit),
    dataKey: parseDataKey(item.dataKey),
    payload: item.payload,
    color: parseColor(item.color),
    fill: parseColor(item.fill),
  };
}

function selectFinalData(dataDefinedOnItem: unknown, dataDefinedOnChart: ChartData | undefined): unknown {
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
  tooltipAxisDataKey: DataKey<any> | undefined,
  activeLabel: ActiveLabel,
  tooltipPayloadSearcher: TooltipPayloadSearcher | undefined,
  tooltipEventType: TooltipEventType | undefined,
): TooltipPayload | undefined => {
  if (activeIndex == null || tooltipPayloadSearcher == null) {
    return undefined;
  }
  const { chartData, computedData, dataStartIndex, dataEndIndex } = chartDataState;

  const init: Array<TooltipPayloadEntry> = [];

  return tooltipPayloadConfigurations.reduce((agg, { dataDefinedOnItem, settings }): Array<TooltipPayloadEntry> => {
    const finalData = selectFinalData(dataDefinedOnItem, chartData);

    const sliced = Array.isArray(finalData) ? getSliced(finalData, dataStartIndex, dataEndIndex) : finalData;

    const finalDataKey: DataKey<any> | undefined = settings?.dataKey ?? tooltipAxisDataKey;
    // BaseAxisProps does not support nameKey but it could!
    const finalNameKey: DataKey<any> | undefined = settings?.nameKey; // ?? tooltipAxis?.nameKey;
    let tooltipPayload: unknown;
    if (
      tooltipAxisDataKey &&
      Array.isArray(sliced) &&
      /*
       * findEntryInArray won't work for Scatter because Scatter provides an array of arrays
       * as tooltip payloads and findEntryInArray is not prepared to handle that.
       * Sad but also ScatterChart only allows 'item' tooltipEventType
       * and also this is only a problem if there are multiple Scatters and each has its own data array
       * so let's fix that some other time.
       */
      !Array.isArray(sliced[0]) &&
      /*
       * If the tooltipEventType is 'axis', we should search for the dataKey in the sliced data
       * because thanks to allowDuplicatedCategory=false, the order of elements in the array
       * no longer matches the order of elements in the original data
       * and so we need to search by the active dataKey + label rather than by index.
       *
       * The same happens if multiple graphical items are present in the chart
       * and each of them has its own data array. Those arrays get concatenated
       * and again the tooltip index no longer matches the original data.
       *
       * On the other hand the tooltipEventType 'item' should always search by index
       * because we get the index from interacting over the individual elements
       * which is always accurate, irrespective of the allowDuplicatedCategory setting.
       */
      tooltipEventType === 'axis'
    ) {
      tooltipPayload = findEntryInArray(sliced, tooltipAxisDataKey, activeLabel);
    } else {
      /*
       * This is a problem because it assumes that the index is pointing to the displayed data
       * which it isn't because the index is pointing to the tooltip ticks array.
       * The above approach (with findEntryInArray) is the correct one, but it only works
       * if the axis dataKey is defined explicitly, and if the data is an array of objects.
       */
      tooltipPayload = tooltipPayloadSearcher(sliced, activeIndex, computedData, finalNameKey);
    }

    if (Array.isArray(tooltipPayload)) {
      tooltipPayload.forEach(item => {
        const parsedItem = parseTooltipPayloadItem(item);
        const itemName = parsedItem?.name;
        const itemDataKey = parsedItem?.dataKey;
        const itemPayload = parsedItem?.payload;
        const newSettings: TooltipEntrySettings = {
          ...settings,
          name: itemName,
          unit: parsedItem?.unit,
          // Preserve item-level color/fill from graphical items.
          color: parsedItem?.color ?? settings?.color,
          fill: parsedItem?.fill ?? settings?.fill,
        };
        agg.push(
          getTooltipEntry({
            tooltipEntrySettings: newSettings,
            dataKey: itemDataKey,
            payload: itemPayload,
            value: getValueByDataKey(itemPayload, itemDataKey),
            name: itemName == null ? undefined : String(itemName),
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
          // getValueByDataKey does not validate the output type
          value: getValueByDataKey(tooltipPayload, finalDataKey),
          // getValueByDataKey does not validate the output type
          name: getValueByDataKey(tooltipPayload, finalNameKey) ?? settings?.name,
        }),
      );
    }
    return agg;
  }, init);
};
