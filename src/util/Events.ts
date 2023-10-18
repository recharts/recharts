import EventEmitter from 'eventemitter3';

type CategoricalChartState = import('../chart/generateCategoricalChart').CategoricalChartState;

const eventCenter: EventEmitter<EventTypes> = new EventEmitter();

export { eventCenter };
export const SYNC_EVENT = 'recharts.syncMouseEvents';

interface EventTypes {
  [SYNC_EVENT](syncId: number | string, data: CategoricalChartState): void;
}
