import EventEmitter from 'eventemitter3';
var eventCenter = new EventEmitter();

if (eventCenter.setMaxListeners) {
  eventCenter.setMaxListeners(10);
}

export { eventCenter };
export var SYNC_EVENT = 'recharts.syncMouseEvents'; // eslint-disable-next-line no-redeclare