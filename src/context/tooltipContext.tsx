import * as React from 'react';
import { Coordinate, DataKey } from '../util/types';
import { useAppDispatch } from '../state/hooks';
import { mouseLeaveItem, setActiveClickItemIndex, setActiveMouseOverItemIndex } from '../state/tooltipSlice';

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

export const useMouseEnterItemDispatch = <T extends TooltipPayloadType>(
  onMouseEnterFromProps: ActivateTooltipAction<T> | undefined,
  dataKey: DataKey<any>,
) => {
  const dispatch = useAppDispatch();
  return (data: TooltipTriggerInfo<T>, index: number) => (event: React.MouseEvent<SVGElement>) => {
    onMouseEnterFromProps?.(data, index, event);
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
  return (data: TooltipTriggerInfo<T>, index: number) => (event: React.MouseEvent<SVGElement>) => {
    onMouseLeaveFromProps?.(data, index, event);
    dispatch(mouseLeaveItem());
  };
};

export const useMouseClickItemDispatch = <T extends TooltipPayloadType>(
  onMouseClickFromProps: ActivateTooltipAction<T> | undefined,
  dataKey: DataKey<any>,
) => {
  const dispatch = useAppDispatch();
  return (data: TooltipTriggerInfo<T>, index: number) => (event: React.MouseEvent<SVGElement>) => {
    onMouseClickFromProps?.(data, index, event);
    dispatch(
      setActiveClickItemIndex({
        activeIndex: String(index),
        activeDataKey: dataKey,
        activeCoordinate: data.tooltipPosition,
      }),
    );
  };
};
