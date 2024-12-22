import { noInteraction, TooltipIndex, TooltipInteractionState, TooltipState } from '../../tooltipSlice';
import { TooltipEventType } from '../../../util/types';
import { TooltipTrigger } from '../../../chart/types';

function chooseAppropriateMouseInteraction(
  tooltipState: TooltipState,
  tooltipEventType: TooltipEventType,
  trigger: TooltipTrigger,
): TooltipInteractionState | undefined {
  if (tooltipEventType === 'axis') {
    if (trigger === 'click') {
      return tooltipState.axisInteraction.click;
    }
    return tooltipState.axisInteraction.hover;
  }
  if (trigger === 'click') {
    return tooltipState.itemInteraction.click;
  }
  return tooltipState.itemInteraction.hover;
}

function hasBeenActivePreviously(tooltipInteractionState: TooltipInteractionState): boolean {
  return tooltipInteractionState.index != null;
}

export const combineTooltipInteractionState = (
  tooltipState: TooltipState,
  tooltipEventType: TooltipEventType | undefined,
  trigger: TooltipTrigger,
  defaultIndex: TooltipIndex | undefined,
): TooltipInteractionState => {
  if (tooltipState.syncInteraction.active && tooltipState.syncInteraction.index != null) {
    // Synchronised events always override other events. But also, active prop on the receiving end does not impact the synchronised tooltip. But maybe it should!?!
    return tooltipState.syncInteraction;
  }

  const appropriateMouseInteraction = chooseAppropriateMouseInteraction(tooltipState, tooltipEventType, trigger);

  if (appropriateMouseInteraction.active) {
    return appropriateMouseInteraction;
  }

  const activeFromProps = tooltipState.settings.active === true;

  if (hasBeenActivePreviously(appropriateMouseInteraction)) {
    if (activeFromProps) {
      return {
        ...appropriateMouseInteraction,
        active: true,
      };
    }
  } else if (defaultIndex != null) {
    return {
      active: true,
      coordinate: undefined,
      dataKey: undefined,
      index: defaultIndex,
    };
  }

  return noInteraction;
};
