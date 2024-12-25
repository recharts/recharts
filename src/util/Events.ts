import EventEmitter from 'eventemitter3';
import { PayloadAction } from '@reduxjs/toolkit';
import { CategoricalChartState } from '../chart/types';
import { TooltipSyncState } from '../state/tooltipSlice';
import { BrushStartEndIndex } from '../context/brushUpdateContext';

const eventCenter: EventEmitter<EventTypes> = new EventEmitter();

export { eventCenter };
/**
 * @deprecated do not use - this event contains the whole chart state.
 * Instead, use the `SYNC_EVENT` event.
 */
export const GENERATOR_SYNC_EVENT = 'recharts.syncMouseEvents';

export const TOOLTIP_SYNC_EVENT = 'recharts.syncEvent.tooltip';

export const BRUSH_SYNC_EVENT = 'recharts.syncEvent.brush';

interface EventTypes {
  [GENERATOR_SYNC_EVENT](syncId: number | string, data: CategoricalChartState, emitter: symbol): void;

  [TOOLTIP_SYNC_EVENT](syncId: number | string, data: PayloadAction<TooltipSyncState>, emitter: symbol): void;

  [BRUSH_SYNC_EVENT](syncId: number | string, data: BrushStartEndIndex, emitter: symbol): void;
}
