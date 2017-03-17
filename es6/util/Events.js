import EventEmitter from 'events';

var eventCenter = new EventEmitter();

if (eventCenter.setMaxListeners) {
  eventCenter.setMaxListeners(10);
}

export { eventCenter };
export var SYNC_EVENT = 'recharts.syncMouseEvents';