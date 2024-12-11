import { PayloadAction } from '@reduxjs/toolkit';
import { ChartCoordinate, DataKey } from '../util/types';
import { TooltipIndex } from '../state/tooltipSlice';

export type SynchronisedTooltipAction = PayloadAction<{
  activeIndex: TooltipIndex;
  activeDataKey: DataKey<any> | undefined;
  activeCoordinate?: ChartCoordinate;
}>;
