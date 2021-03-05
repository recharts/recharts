"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FunnelChart = void 0;

var _generateCategoricalChart = require("./generateCategoricalChart");

var _Funnel = require("../numberAxis/Funnel");

/**
 * @fileOverview Funnel Chart
 */
var FunnelChart = (0, _generateCategoricalChart.generateCategoricalChart)({
  chartName: 'FunnelChart',
  GraphicalChild: _Funnel.Funnel,
  validateTooltipEventTypes: ['item'],
  defaultTooltipEventType: 'item',
  axisComponents: [],
  defaultProps: {
    layout: 'centric'
  }
});
exports.FunnelChart = FunnelChart;