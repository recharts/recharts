import React, { createContext, useContext } from 'react';
import { ChartCoordinate, Coordinate, DataKey } from '../util/types';
import { useAppDispatch } from '../state/hooks';
import { mouseLeaveItem, setActiveClickItemIndex, setActiveMouseOverItemIndex } from '../state/tooltipSlice';

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
  index: -1,
};

const TooltipContext = createContext<TooltipContextValue>(doNotDisplayTooltip);

/**
 * @deprecated do not use; instead prefer actions from tooltipSlice
 *
 * This depends on state set from generateCategoricalChart.
 */
export const TooltipContextProvider = TooltipContext.Provider;

/**
 * @deprecated this is depending on generateCategoricalChart state, do not use.
 *
 * Instead, use:
 * - selectActiveIndex for index
 * - selectActiveCoordinate for coordinate
 * - selectActiveLabel for label
 * - selectTooltipPayload for payload
 * - selectIsTooltipActive for active
 *
 * @returns deprecated, do not use
 */
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
  onMouseEnterFromProps: ActivateTooltipAction<T> | undefined,
  dataKey: DataKey<any>,
) => {
  const dispatch = useAppDispatch();
  const onMouseEnterFromContext: undefined | ActivateTooltipAction<T> = useContext(MouseEnterItemDispatchContext);
  return (data: TooltipTriggerInfo<T>, index: number) => (event: React.MouseEvent<SVGElement>) => {
    onMouseEnterFromProps?.(data, index, event);
    onMouseEnterFromContext?.(data, index, event);
    dispatch(
      setActiveMouseOverItemIndex({
        activeIndex: String(index),
        activeDataKey: dataKey,
        activeCoordinate: data.tooltipPosition,
      }),
    );
  };
};

export const useMouseLeaveItemDispatch = <T extends TooltipPayloadType>(
  onMouseLeaveFromProps: undefined | ActivateTooltipAction<T>,
) => {
  const dispatch = useAppDispatch();
  const onMouseLeaveFromContext: undefined | ActivateTooltipAction<T> = useContext(MouseLeaveItemDispatchContext);
  return (data: TooltipTriggerInfo<T>, index: number) => (event: React.MouseEvent<SVGElement>) => {
    onMouseLeaveFromProps?.(data, index, event);
    onMouseLeaveFromContext?.(data, index, event);
    dispatch(mouseLeaveItem());
  };
};

export const useMouseClickItemDispatch = <T extends TooltipPayloadType>(
  onMouseClickFromProps: ActivateTooltipAction<T> | undefined,
  dataKey: DataKey<any>,
) => {
  const dispatch = useAppDispatch();
  const onMouseClickFromContext: undefined | ActivateTooltipAction<T> = useContext(MouseClickItemDispatchContext);
  return (data: TooltipTriggerInfo<T>, index: number) => (event: React.MouseEvent<SVGElement>) => {
    onMouseClickFromProps?.(data, index, event);
    onMouseClickFromContext?.(data, index, event);
    dispatch(
      setActiveClickItemIndex({
        activeIndex: String(index),
        activeDataKey: dataKey,
        activeCoordinate: data.tooltipPosition,
      }),
    );
  };
};
