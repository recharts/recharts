import { TooltipIndex, TooltipInteractionState, TooltipState } from '../../tooltipSlice';
import { TooltipEventType } from '../../../util/types';
import { TooltipTrigger } from '../../../chart/types';

export const combineTooltipInteractionState = (
  tooltipState: TooltipState,
  tooltipEventType: TooltipEventType | undefined,
  trigger: TooltipTrigger,
  defaultIndex: TooltipIndex | undefined,
): TooltipInteractionState | undefined => {
  if (tooltipState.syncInteraction.active && tooltipState.syncInteraction.index != null) {
    // Synchronised events always override other events
    return tooltipState.syncInteraction;
  }

  if (trigger === 'click') {
    if (tooltipEventType === 'axis') {
      if (tooltipState.axisInteraction.click.index != null) {
        if (tooltipState.axisInteraction.click.active) {
          return tooltipState.axisInteraction.click;
        }
        return undefined;
      }
    } else if (tooltipState.itemInteraction.click.index != null) {
      if (tooltipState.itemInteraction.click.active) {
        return tooltipState.itemInteraction.click;
      }
      return undefined;
    }
  } else if (tooltipEventType === 'axis') {
    if (tooltipState.axisInteraction.hover.index != null) {
      if (tooltipState.axisInteraction.hover.active) {
        return tooltipState.axisInteraction.hover;
      }
      return undefined;
    }
  } else if (tooltipState.itemInteraction.hover.index != null) {
    if (tooltipState.itemInteraction.hover.active) {
      return tooltipState.itemInteraction.hover;
    }
    return undefined;
  }

  if (defaultIndex != null) {
    return {
      active: true,
      coordinate: undefined,
      dataKey: undefined,
      index: defaultIndex,
    };
  }

  return undefined;
};
