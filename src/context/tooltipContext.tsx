import React, { createContext, useContext } from 'react';
import { ChartCoordinate, Coordinate } from '../util/types';

export type TooltipContextValue = {
  label: string;
  payload: any[];
  coordinate: ChartCoordinate;
  active: boolean;
  index: number;
};

export const doNotDisplayTooltip: TooltipContextValue = {
  label: '',
  payload: [],
  coordinate: { x: 0, y: 0 },
  active: false,
  index: 0,
};

const TooltipContext = createContext<TooltipContextValue>(doNotDisplayTooltip);

export const TooltipContextProvider = TooltipContext.Provider;

export const useTooltipContext = () => useContext(TooltipContext);

export type TooltipPayloadType = any[];

type TooltipTriggerInfo<T extends TooltipPayloadType> = {
  tooltipPayload: T;
  tooltipPosition: Coordinate;
  cx: number;
  cy: number;
};

export type ActivateTooltipAction<T extends TooltipPayloadType> = (
  tooltipInfo: TooltipTriggerInfo<T>,
  index: number,
  event: React.MouseEvent<SVGElement>,
) => void;

export const MouseEnterItemDispatchContext = createContext<ActivateTooltipAction<TooltipPayloadType> | null>(null);
export const MouseLeaveItemDispatchContext = createContext<ActivateTooltipAction<TooltipPayloadType> | null>(null);
export const MouseClickItemDispatchContext = createContext<ActivateTooltipAction<TooltipPayloadType> | null>(null);

export const useMouseEnterItemDispatch = <T extends TooltipPayloadType>(
  onMouseEnterFromProps: undefined | ActivateTooltipAction<T>,
): ActivateTooltipAction<T> => {
  const onMouseEnterFromContext: undefined | ActivateTooltipAction<T> = useContext(MouseEnterItemDispatchContext);
  return (data: TooltipTriggerInfo<T>, index: number, event: React.MouseEvent<SVGElement>) => {
    onMouseEnterFromProps?.(data, index, event);
    onMouseEnterFromContext?.(data, index, event);
  };
};

export const useMouseLeaveItemDispatch = <T extends TooltipPayloadType>(
  onMouseLeaveFromProps: undefined | ActivateTooltipAction<T>,
): ActivateTooltipAction<T> => {
  const onMouseLeaveFromContext: undefined | ActivateTooltipAction<T> = useContext(MouseLeaveItemDispatchContext);
  return (data: TooltipTriggerInfo<T>, index: number, event: React.MouseEvent<SVGElement>) => {
    onMouseLeaveFromProps?.(data, index, event);
    onMouseLeaveFromContext?.(data, index, event);
  };
};

export const useMouseClickItemDispatch = <T extends TooltipPayloadType>(
  onMouseClickFromProps: undefined | ActivateTooltipAction<T>,
): undefined | ActivateTooltipAction<T> => {
  const onMouseClickFromContext: undefined | ActivateTooltipAction<T> = useContext(MouseClickItemDispatchContext);
  return (data: TooltipTriggerInfo<T>, index: number, event: React.MouseEvent<SVGElement>) => {
    onMouseClickFromProps?.(data, index, event);
    onMouseClickFromContext?.(data, index, event);
  };
};
