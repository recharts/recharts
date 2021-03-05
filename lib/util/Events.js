"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SYNC_EVENT = exports.eventCenter = void 0;

var _eventemitter = _interopRequireDefault(require("eventemitter3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var eventCenter = new _eventemitter["default"]();
exports.eventCenter = eventCenter;

if (eventCenter.setMaxListeners) {
  eventCenter.setMaxListeners(10);
}

var SYNC_EVENT = 'recharts.syncMouseEvents'; // eslint-disable-next-line no-redeclare

exports.SYNC_EVENT = SYNC_EVENT;