"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YAxis = void 0;

/**
 * @fileOverview Y Axis
 */
var YAxis = function YAxis() {
  return null;
};

exports.YAxis = YAxis;
YAxis.displayName = 'YAxis';
YAxis.defaultProps = {
  allowDuplicatedCategory: true,
  allowDecimals: true,
  hide: false,
  orientation: 'left',
  width: 60,
  height: 0,
  mirror: false,
  yAxisId: 0,
  tickCount: 5,
  type: 'number',
  domain: [0, 'auto'],
  padding: {
    top: 0,
    bottom: 0
  },
  allowDataOverflow: false,
  scale: 'auto',
  reversed: false
};