import { TooltipIndex, TooltipPayloadConfiguration, TooltipState } from '../../tooltipSlice';
import { TooltipEventType } from '../../../util/types';
import { TooltipTrigger } from '../../../chart/types';
import { GraphicalItemId } from '../../graphicalItemsSlice';

export const combineTooltipPayloadConfigurations = (
  tooltipState: TooltipState,
  tooltipEventType: TooltipEventType | undefined,
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
  let filterByGraphicalItemId: GraphicalItemId | undefined;
  if (trigger === 'hover') {
    filterByGraphicalItemId = tooltipState.itemInteraction.hover.graphicalItemId;
  } else {
    filterByGraphicalItemId = tooltipState.itemInteraction.click.graphicalItemId;
  }
  if (tooltipState.syncInteraction.active && filterByGraphicalItemId == null) {
    /*
     * When a tooltip is synchronised from another chart, the local itemInteraction
     * has no graphicalItemId because the user hasn't hovered over this chart.
     * In that case we show all tooltip items so the receiving chart can display
     * its own data at the synced index — matching the behaviour of axis-type tooltips.
     */
    return tooltipState.tooltipItemPayloads;
  }
  if (filterByGraphicalItemId == null && defaultIndex != null) {
    /*
     * So when we use `defaultIndex` - we don't have a dataKey to filter by because user did not hover over anything yet.
     * In that case let's display the first item in the tooltip; after all, this is `item` interaction case,
     * so we should display only one item at a time instead of all.
     */
    const firstItemPayload = tooltipState.tooltipItemPayloads[0];
    if (firstItemPayload != null) {
      return [firstItemPayload];
    }
    return [];
  }
  return tooltipState.tooltipItemPayloads.filter(tpc => tpc.settings?.graphicalItemId === filterByGraphicalItemId);
};
