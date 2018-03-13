'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _generateCategoricalChart = require('./generateCategoricalChart');

var _generateCategoricalChart2 = _interopRequireDefault(_generateCategoricalChart);

var _Bar = require('../cartesian/Bar');

var _Bar2 = _interopRequireDefault(_Bar);

var _XAxis = require('../cartesian/XAxis');

var _XAxis2 = _interopRequireDefault(_XAxis);

var _YAxis = require('../cartesian/YAxis');

var _YAxis2 = _interopRequireDefault(_YAxis);

var _CartesianUtils = require('../util/CartesianUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _generateCategoricalChart2.default)({
  chartName: 'BarChart',
  GraphicalChild: _Bar2.default,
  axisComponents: [{ axisType: 'xAxis', AxisComp: _XAxis2.default }, { axisType: 'yAxis', AxisComp: _YAxis2.default }],
  formatAxisMap: _CartesianUtils.formatAxisMap
}); /**
     * @fileOverview Bar Chart
     */