import EventEmitter from 'events';

const eventCenter = new EventEmitter();

if (eventCenter.setMaxListeners) {
  eventCenter.setMaxListeners(50);
  /*
   TODO
   eventCenter.setMaxListeners was set to 20
   eventCenter.setMaxListeners(20)
   this was producing a memory leak error
   'node warning possible EventEmitter memory leak detected Use emitter.setMaxListeners() to increase limit'
   increased to 50, need to investigate if this is the correct fix
   https://github.com/sindresorhus/pageres/issues/178
   https://www.toptal.com/nodejs/debugging-memory-leaks-node-js-applications
   https://github.com/request/request/issues/311
  */
}

export { eventCenter };
export const SYNC_EVENT = 'recharts.syncMouseEvents';
