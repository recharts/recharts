import { TooltipIndex, TooltipInteractionState, TooltipState } from '../../tooltipSlice';
import { TooltipEventType } from '../../../util/types';
import { TooltipTrigger } from '../../../chart/types';
export declare const combineTooltipInteractionState: (tooltipState: TooltipState, tooltipEventType: TooltipEventType | undefined, trigger: TooltipTrigger, defaultIndex: TooltipIndex | undefined) => TooltipInteractionState;
