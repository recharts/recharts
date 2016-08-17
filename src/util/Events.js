import EventEmitter from 'events';

const eventCenter = new EventEmitter();

if (eventCenter.setMaxListeners) {
  eventCenter.setMaxListeners(20);
}

export { eventCenter };
export const SYNC_EVENT = 'recharts.syncMouseEvents';
