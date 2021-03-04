"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunnelChart = void 0;
var generateCategoricalChart_1 = require("./generateCategoricalChart");
var Funnel_1 = require("../numberAxis/Funnel");
exports.FunnelChart = generateCategoricalChart_1.generateCategoricalChart({
    chartName: 'FunnelChart',
    GraphicalChild: Funnel_1.Funnel,
    validateTooltipEventTypes: ['item'],
    defaultTooltipEventType: 'item',
    axisComponents: [],
    defaultProps: {
        layout: 'centric',
    },
});
//# sourceMappingURL=FunnelChart.js.map