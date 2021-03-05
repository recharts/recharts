"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BarChart = void 0;

var _generateCategoricalChart = require("./generateCategoricalChart");

var _Bar = require("../cartesian/Bar");

var _XAxis = require("../cartesian/XAxis");

var _YAxis = require("../cartesian/YAxis");

var _CartesianUtils = require("../util/CartesianUtils");

/**
 * @fileOverview Bar Chart
 */
var BarChart = (0, _generateCategoricalChart.generateCategoricalChart)({
  chartName: 'BarChart',
  GraphicalChild: _Bar.Bar,
  defaultTooltipEventType: 'axis',
  validateTooltipEventTypes: ['axis', 'item'],
  axisComponents: [{
    axisType: 'xAxis',
    AxisComp: _XAxis.XAxis
  }, {
    axisType: 'yAxis',
    AxisComp: _YAxis.YAxis
  }],
  formatAxisMap: _CartesianUtils.formatAxisMap
});
exports.BarChart = BarChart;