import EventEmitter from 'eventemitter3';

type CategoricalChartState = import('../chart/generateCategoricalChart').CategoricalChartState;

interface EventCenter extends EventEmitter<EventTypes> {
  setMaxListeners?(maxListeners: number): void;
  _maxListeners?: number;
}
const eventCenter: EventCenter = new EventEmitter();

if (eventCenter.setMaxListeners) {
  eventCenter.setMaxListeners(10);
}

export { eventCenter };
export const SYNC_EVENT = 'recharts.syncMouseEvents';

// eslint-disable-next-line no-redeclare
type SYNC_EVENT = typeof SYNC_EVENT;
interface EventTypes {
  [SYNC_EVENT](syncId: number | string, uniqueChartId: string, data: CategoricalChartState): void;
}
