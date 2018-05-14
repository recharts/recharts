'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _generateCategoricalChart = require('./generateCategoricalChart');

var _generateCategoricalChart2 = _interopRequireDefault(_generateCategoricalChart);

var _Scatter = require('../cartesian/Scatter');

var _Scatter2 = _interopRequireDefault(_Scatter);

var _XAxis = require('../cartesian/XAxis');

var _XAxis2 = _interopRequireDefault(_XAxis);

var _YAxis = require('../cartesian/YAxis');

var _YAxis2 = _interopRequireDefault(_YAxis);

var _ZAxis = require('../cartesian/ZAxis');

var _ZAxis2 = _interopRequireDefault(_ZAxis);

var _CartesianUtils = require('../util/CartesianUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @fileOverview Scatter Chart
 */
exports.default = (0, _generateCategoricalChart2.default)({
  chartName: 'ScatterChart',
  GraphicalChild: _Scatter2.default,
  eventType: 'single',
  axisComponents: [{ axisType: 'xAxis', AxisComp: _XAxis2.default }, { axisType: 'yAxis', AxisComp: _YAxis2.default }, { axisType: 'zAxis', AxisComp: _ZAxis2.default }],
  formatAxisMap: _CartesianUtils.formatAxisMap
});