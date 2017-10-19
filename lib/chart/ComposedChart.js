'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _generateCategoricalChart = require('./generateCategoricalChart');

var _generateCategoricalChart2 = _interopRequireDefault(_generateCategoricalChart);

var _Area = require('../cartesian/Area');

var _Area2 = _interopRequireDefault(_Area);

var _Bar = require('../cartesian/Bar');

var _Bar2 = _interopRequireDefault(_Bar);

var _Line = require('../cartesian/Line');

var _Line2 = _interopRequireDefault(_Line);

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

exports.default = (0, _generateCategoricalChart2.default)({
  chartName: 'ComposedChart',
  GraphicalChild: [_Line2.default, _Area2.default, _Bar2.default, _Scatter2.default],
  axisComponents: [{ axisType: 'xAxis', AxisComp: _XAxis2.default }, { axisType: 'yAxis', AxisComp: _YAxis2.default }, { axisType: 'zAxis', AxisComp: _ZAxis2.default }],
  formatAxisMap: _CartesianUtils.formatAxisMap
}); /**
     * @fileOverview Composed Chart
     */