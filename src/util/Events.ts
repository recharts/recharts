import EventEmitter from 'eventemitter3';
import { CategoricalChartState } from '../chart/types';

const eventCenter: EventEmitter<EventTypes> = new EventEmitter();

export { eventCenter };
export const SYNC_EVENT = 'recharts.syncMouseEvents';

interface EventTypes {
  [SYNC_EVENT](syncId: number | string, data: CategoricalChartState, emitter: symbol): void;
}
