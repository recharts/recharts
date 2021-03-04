"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadarChart = void 0;
var generateCategoricalChart_1 = require("./generateCategoricalChart");
var Radar_1 = require("../polar/Radar");
var PolarAngleAxis_1 = require("../polar/PolarAngleAxis");
var PolarRadiusAxis_1 = require("../polar/PolarRadiusAxis");
var PolarUtils_1 = require("../util/PolarUtils");
exports.RadarChart = generateCategoricalChart_1.generateCategoricalChart({
    chartName: 'RadarChart',
    GraphicalChild: Radar_1.Radar,
    axisComponents: [
        { axisType: 'angleAxis', AxisComp: PolarAngleAxis_1.PolarAngleAxis },
        { axisType: 'radiusAxis', AxisComp: PolarRadiusAxis_1.PolarRadiusAxis },
    ],
    formatAxisMap: PolarUtils_1.formatAxisMap,
    defaultProps: {
        layout: 'centric',
        startAngle: 90,
        endAngle: -270,
        cx: '50%',
        cy: '50%',
        innerRadius: 0,
        outerRadius: '80%',
    },
});
//# sourceMappingURL=RadarChart.js.map