import * as React from 'react';
import { Coordinate, DataKey } from '../util/types';
export type TooltipPayloadType = any[];
type TooltipTriggerInfo<T extends TooltipPayloadType> = {
    tooltipPayload: T;
    tooltipPosition: Coordinate;
    cx: number;
    cy: number;
};
export type ActivateTooltipAction<T extends TooltipPayloadType> = (tooltipInfo: TooltipTriggerInfo<T>, index: number, event: React.MouseEvent<SVGElement>) => void;
export declare const useMouseEnterItemDispatch: <T extends TooltipPayloadType>(onMouseEnterFromProps: ActivateTooltipAction<T> | undefined, dataKey: DataKey<any>) => (data: TooltipTriggerInfo<T>, index: number) => (event: React.MouseEvent<SVGElement>) => void;
export declare const useMouseLeaveItemDispatch: <T extends TooltipPayloadType>(onMouseLeaveFromProps: undefined | ActivateTooltipAction<T>) => (data: TooltipTriggerInfo<T>, index: number) => (event: React.MouseEvent<SVGElement>) => void;
export declare const useMouseClickItemDispatch: <T extends TooltipPayloadType>(onMouseClickFromProps: ActivateTooltipAction<T> | undefined, dataKey: DataKey<any>) => (data: TooltipTriggerInfo<T>, index: number) => (event: React.MouseEvent<SVGElement>) => void;
export {};
