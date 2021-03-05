"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LineChart = void 0;

var _generateCategoricalChart = require("./generateCategoricalChart");

var _Line = require("../cartesian/Line");

var _XAxis = require("../cartesian/XAxis");

var _YAxis = require("../cartesian/YAxis");

var _CartesianUtils = require("../util/CartesianUtils");

/**
 * @fileOverview Line Chart
 */
var LineChart = (0, _generateCategoricalChart.generateCategoricalChart)({
  chartName: 'LineChart',
  GraphicalChild: _Line.Line,
  axisComponents: [{
    axisType: 'xAxis',
    AxisComp: _XAxis.XAxis
  }, {
    axisType: 'yAxis',
    AxisComp: _YAxis.YAxis
  }],
  formatAxisMap: _CartesianUtils.formatAxisMap
});
exports.LineChart = LineChart;