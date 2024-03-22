import { createContext, useContext } from 'react';
import { ChartCoordinate } from '../util/types';

export type TooltipContextValue = {
  label: string;
  payload: any[];
  coordinate: ChartCoordinate;
  active: boolean;
};

export const doNotDisplayTooltip: TooltipContextValue = {
  label: '',
  payload: [],
  coordinate: { x: 0, y: 0 },
  active: false,
};

const TooltipContext = createContext<TooltipContextValue>(doNotDisplayTooltip);

export const TooltipContextProvider = TooltipContext.Provider;

export const useTooltipContext = () => useContext(TooltipContext);
