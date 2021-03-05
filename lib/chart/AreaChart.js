"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AreaChart = void 0;

var _generateCategoricalChart = require("./generateCategoricalChart");

var _Area = require("../cartesian/Area");

var _XAxis = require("../cartesian/XAxis");

var _YAxis = require("../cartesian/YAxis");

var _CartesianUtils = require("../util/CartesianUtils");

/**
 * @fileOverview Area Chart
 */
var AreaChart = (0, _generateCategoricalChart.generateCategoricalChart)({
  chartName: 'AreaChart',
  GraphicalChild: _Area.Area,
  axisComponents: [{
    axisType: 'xAxis',
    AxisComp: _XAxis.XAxis
  }, {
    axisType: 'yAxis',
    AxisComp: _YAxis.YAxis
  }],
  formatAxisMap: _CartesianUtils.formatAxisMap
});
exports.AreaChart = AreaChart;