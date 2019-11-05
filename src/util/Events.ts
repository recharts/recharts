import EventEmitter from 'events';

const eventCenter: any = new EventEmitter();

if (eventCenter.setMaxListeners) {
  eventCenter.setMaxListeners(10);
}

export { eventCenter };
export const SYNC_EVENT = 'recharts.syncMouseEvents';
