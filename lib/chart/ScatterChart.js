"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScatterChart = void 0;

var _generateCategoricalChart = require("./generateCategoricalChart");

var _Scatter = require("../cartesian/Scatter");

var _XAxis = require("../cartesian/XAxis");

var _YAxis = require("../cartesian/YAxis");

var _ZAxis = require("../cartesian/ZAxis");

var _CartesianUtils = require("../util/CartesianUtils");

/**
 * @fileOverview Scatter Chart
 */
var ScatterChart = (0, _generateCategoricalChart.generateCategoricalChart)({
  chartName: 'ScatterChart',
  GraphicalChild: _Scatter.Scatter,
  defaultTooltipEventType: 'item',
  validateTooltipEventTypes: ['item'],
  axisComponents: [{
    axisType: 'xAxis',
    AxisComp: _XAxis.XAxis
  }, {
    axisType: 'yAxis',
    AxisComp: _YAxis.YAxis
  }, {
    axisType: 'zAxis',
    AxisComp: _ZAxis.ZAxis
  }],
  formatAxisMap: _CartesianUtils.formatAxisMap
});
exports.ScatterChart = ScatterChart;