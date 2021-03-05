"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadialBarChart = void 0;

var _generateCategoricalChart = require("./generateCategoricalChart");

var _PolarAngleAxis = require("../polar/PolarAngleAxis");

var _PolarRadiusAxis = require("../polar/PolarRadiusAxis");

var _PolarUtils = require("../util/PolarUtils");

var _RadialBar = require("../polar/RadialBar");

/**
 * @fileOverview Radar Bar Chart
 */
var RadialBarChart = (0, _generateCategoricalChart.generateCategoricalChart)({
  chartName: 'RadialBarChart',
  GraphicalChild: _RadialBar.RadialBar,
  legendContent: 'children',
  defaultTooltipEventType: 'axis',
  validateTooltipEventTypes: ['axis', 'item'],
  axisComponents: [{
    axisType: 'angleAxis',
    AxisComp: _PolarAngleAxis.PolarAngleAxis
  }, {
    axisType: 'radiusAxis',
    AxisComp: _PolarRadiusAxis.PolarRadiusAxis
  }],
  formatAxisMap: _PolarUtils.formatAxisMap,
  defaultProps: {
    layout: 'radial',
    startAngle: 0,
    endAngle: 360,
    cx: '50%',
    cy: '50%',
    innerRadius: 0,
    outerRadius: '80%'
  }
});
exports.RadialBarChart = RadialBarChart;