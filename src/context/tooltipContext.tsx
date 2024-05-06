import { createContext, useContext } from 'react';
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

export type ActivateTooltipAction = (
  tooltipInfo: { tooltipPayload: any; tooltipPosition: Coordinate; cx: number; cy: number },
  index: number,
) => void;

export type NoArgumentsAction = () => void;

export const MouseEnterItemDispatchContext = createContext<ActivateTooltipAction | null>(null);
export const MouseLeaveItemDispatchContext = createContext<NoArgumentsAction | null>(null);
export const MouseClickItemDispatchContext = createContext<ActivateTooltipAction | null>(null);

export const useMouseEnterItemDispatch = () => useContext(MouseEnterItemDispatchContext);
export const useMouseLeaveItemDispatch = () => useContext(MouseLeaveItemDispatchContext);
export const useMouseClickItemDispatch = () => useContext(MouseClickItemDispatchContext);
