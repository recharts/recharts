import { TooltipIndex, TooltipPayloadConfiguration, TooltipState } from '../../tooltipSlice';
import { DataKey, TooltipEventType } from '../../../util/types';
import { TooltipTrigger } from '../../../chart/types';

export const combineTooltipPayloadConfigurations = (
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
};
