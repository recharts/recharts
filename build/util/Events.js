"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SYNC_EVENT = exports.eventCenter = void 0;
var eventemitter3_1 = __importDefault(require("eventemitter3"));
var eventCenter = new eventemitter3_1.default();
exports.eventCenter = eventCenter;
if (eventCenter.setMaxListeners) {
    eventCenter.setMaxListeners(10);
}
exports.SYNC_EVENT = 'recharts.syncMouseEvents';
//# sourceMappingURL=Events.js.map