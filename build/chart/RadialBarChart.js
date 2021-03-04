"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadialBarChart = void 0;
var generateCategoricalChart_1 = require("./generateCategoricalChart");
var PolarAngleAxis_1 = require("../polar/PolarAngleAxis");
var PolarRadiusAxis_1 = require("../polar/PolarRadiusAxis");
var PolarUtils_1 = require("../util/PolarUtils");
var RadialBar_1 = require("../polar/RadialBar");
exports.RadialBarChart = generateCategoricalChart_1.generateCategoricalChart({
    chartName: 'RadialBarChart',
    GraphicalChild: RadialBar_1.RadialBar,
    legendContent: 'children',
    defaultTooltipEventType: 'axis',
    validateTooltipEventTypes: ['axis', 'item'],
    axisComponents: [
        { axisType: 'angleAxis', AxisComp: PolarAngleAxis_1.PolarAngleAxis },
        { axisType: 'radiusAxis', AxisComp: PolarRadiusAxis_1.PolarRadiusAxis },
    ],
    formatAxisMap: PolarUtils_1.formatAxisMap,
    defaultProps: {
        layout: 'radial',
        startAngle: 0,
        endAngle: 360,
        cx: '50%',
        cy: '50%',
        innerRadius: 0,
        outerRadius: '80%',
    },
});
//# sourceMappingURL=RadialBarChart.js.map