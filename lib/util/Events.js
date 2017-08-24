'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SYNC_EVENT = exports.eventCenter = undefined;

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var eventCenter = new _events2.default();

if (eventCenter.setMaxListeners) {
  eventCenter.setMaxListeners(10);
}

exports.eventCenter = eventCenter;
var SYNC_EVENT = exports.SYNC_EVENT = 'recharts.syncMouseEvents';