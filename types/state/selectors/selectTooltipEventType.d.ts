import { RechartsRootState } from '../store';
import { TooltipEventType } from '../../util/types';
import { SharedTooltipSettings } from '../tooltipSlice';
export declare const selectDefaultTooltipEventType: (state: RechartsRootState) => TooltipEventType;
export declare const selectValidateTooltipEventTypes: (state: RechartsRootState) => ReadonlyArray<TooltipEventType> | undefined;
export declare function combineTooltipEventType(shared: SharedTooltipSettings, defaultTooltipEventType: TooltipEventType, validateTooltipEventTypes: ReadonlyArray<TooltipEventType> | undefined): TooltipEventType;
export declare function selectTooltipEventType(state: RechartsRootState, shared: SharedTooltipSettings): TooltipEventType;
export declare function useTooltipEventType(shared: SharedTooltipSettings): TooltipEventType | undefined;
