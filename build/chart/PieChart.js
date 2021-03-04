"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PieChart = void 0;
var generateCategoricalChart_1 = require("./generateCategoricalChart");
var PolarAngleAxis_1 = require("../polar/PolarAngleAxis");
var PolarRadiusAxis_1 = require("../polar/PolarRadiusAxis");
var PolarUtils_1 = require("../util/PolarUtils");
var Pie_1 = require("../polar/Pie");
exports.PieChart = generateCategoricalChart_1.generateCategoricalChart({
    chartName: 'PieChart',
    GraphicalChild: Pie_1.Pie,
    validateTooltipEventTypes: ['item'],
    defaultTooltipEventType: 'item',
    legendContent: 'children',
    axisComponents: [
        { axisType: 'angleAxis', AxisComp: PolarAngleAxis_1.PolarAngleAxis },
        { axisType: 'radiusAxis', AxisComp: PolarRadiusAxis_1.PolarRadiusAxis },
    ],
    formatAxisMap: PolarUtils_1.formatAxisMap,
    defaultProps: {
        layout: 'centric',
        startAngle: 0,
        endAngle: 360,
        cx: '50%',
        cy: '50%',
        innerRadius: 0,
        outerRadius: '80%',
    },
});
//# sourceMappingURL=PieChart.js.map