"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComposedChart = void 0;

var _generateCategoricalChart = require("./generateCategoricalChart");

var _Area = require("../cartesian/Area");

var _Bar = require("../cartesian/Bar");

var _Line = require("../cartesian/Line");

var _Scatter = require("../cartesian/Scatter");

var _XAxis = require("../cartesian/XAxis");

var _YAxis = require("../cartesian/YAxis");

var _ZAxis = require("../cartesian/ZAxis");

var _CartesianUtils = require("../util/CartesianUtils");

/**
 * @fileOverview Composed Chart
 */
var ComposedChart = (0, _generateCategoricalChart.generateCategoricalChart)({
  chartName: 'ComposedChart',
  GraphicalChild: [_Line.Line, _Area.Area, _Bar.Bar, _Scatter.Scatter],
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
exports.ComposedChart = ComposedChart;