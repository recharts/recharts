"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PieChart = void 0;

var _generateCategoricalChart = require("./generateCategoricalChart");

var _PolarAngleAxis = require("../polar/PolarAngleAxis");

var _PolarRadiusAxis = require("../polar/PolarRadiusAxis");

var _PolarUtils = require("../util/PolarUtils");

var _Pie = require("../polar/Pie");

/**
 * @fileOverview Pie Chart
 */
var PieChart = (0, _generateCategoricalChart.generateCategoricalChart)({
  chartName: 'PieChart',
  GraphicalChild: _Pie.Pie,
  validateTooltipEventTypes: ['item'],
  defaultTooltipEventType: 'item',
  legendContent: 'children',
  axisComponents: [{
    axisType: 'angleAxis',
    AxisComp: _PolarAngleAxis.PolarAngleAxis
  }, {
    axisType: 'radiusAxis',
    AxisComp: _PolarRadiusAxis.PolarRadiusAxis
  }],
  formatAxisMap: _PolarUtils.formatAxisMap,
  defaultProps: {
    layout: 'centric',
    startAngle: 0,
    endAngle: 360,
    cx: '50%',
    cy: '50%',
    innerRadius: 0,
    outerRadius: '80%'
  }
});
exports.PieChart = PieChart;