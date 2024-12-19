import { RechartsRootState } from '../store';
import { TooltipEventType } from '../../util/types';
import { useAppSelector } from '../hooks';

export const selectDefaultTooltipEventType = (state: RechartsRootState): TooltipEventType =>
  state.options.defaultTooltipEventType;
export const selectValidateTooltipEventTypes = (state: RechartsRootState): ReadonlyArray<TooltipEventType> =>
  state.options.validateTooltipEventTypes;

export function combineTooltipEventType(
  shared: boolean,
  defaultTooltipEventType: TooltipEventType,
  validateTooltipEventTypes: ReadonlyArray<TooltipEventType>,
): TooltipEventType {
  if (shared == null) {
    return defaultTooltipEventType;
  }
  const eventType = shared ? 'axis' : 'item';
  return validateTooltipEventTypes.includes(eventType) ? eventType : defaultTooltipEventType;
}

export function selectTooltipEventType(state: RechartsRootState, shared: boolean | undefined): TooltipEventType {
  const defaultTooltipEventType = selectDefaultTooltipEventType(state);
  const validateTooltipEventTypes = selectValidateTooltipEventTypes(state);
  return combineTooltipEventType(shared, defaultTooltipEventType, validateTooltipEventTypes);
}

export function useTooltipEventType(shared: boolean | undefined): TooltipEventType {
  return useAppSelector(state => selectTooltipEventType(state, shared));
}
