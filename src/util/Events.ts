import EventEmitter from 'eventemitter3';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { TooltipSyncState } from '../state/tooltipSlice';
import type { BrushStartEndIndex } from '../context/brushUpdateContext';
import type { ZoomState } from '../state/zoomSlice';

const eventCenter: EventEmitter<EventTypes> = new EventEmitter();

export { eventCenter };

export const TOOLTIP_SYNC_EVENT = 'recharts.syncEvent.tooltip';

export const BRUSH_SYNC_EVENT = 'recharts.syncEvent.brush';

export const ZOOM_SYNC_EVENT = 'recharts.syncEvent.zoom';

interface EventTypes {
  [TOOLTIP_SYNC_EVENT](syncId: number | string, data: PayloadAction<TooltipSyncState>, emitter: symbol): void;
  [BRUSH_SYNC_EVENT](syncId: number | string, data: BrushStartEndIndex, emitter: symbol): void;
  [ZOOM_SYNC_EVENT](syncId: number | string, data: ZoomState, emitter: symbol): void;
}
