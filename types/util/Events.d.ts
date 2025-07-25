import EventEmitter from 'eventemitter3';
import { PayloadAction } from '@reduxjs/toolkit';
import { TooltipSyncState } from '../state/tooltipSlice';
import { BrushStartEndIndex } from '../context/brushUpdateContext';
declare const eventCenter: EventEmitter<EventTypes>;
export { eventCenter };
export declare const TOOLTIP_SYNC_EVENT = "recharts.syncEvent.tooltip";
export declare const BRUSH_SYNC_EVENT = "recharts.syncEvent.brush";
interface EventTypes {
    [TOOLTIP_SYNC_EVENT](syncId: number | string, data: PayloadAction<TooltipSyncState>, emitter: symbol): void;
    [BRUSH_SYNC_EVENT](syncId: number | string, data: BrushStartEndIndex, emitter: symbol): void;
}
