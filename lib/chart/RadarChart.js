"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadarChart = void 0;

var _generateCategoricalChart = require("./generateCategoricalChart");

var _Radar = require("../polar/Radar");

var _PolarAngleAxis = require("../polar/PolarAngleAxis");

var _PolarRadiusAxis = require("../polar/PolarRadiusAxis");

var _PolarUtils = require("../util/PolarUtils");

/**
 * @fileOverview Radar Chart
 */
var RadarChart = (0, _generateCategoricalChart.generateCategoricalChart)({
  chartName: 'RadarChart',
  GraphicalChild: _Radar.Radar,
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
    startAngle: 90,
    endAngle: -270,
    cx: '50%',
    cy: '50%',
    innerRadius: 0,
    outerRadius: '80%'
  }
});
exports.RadarChart = RadarChart;