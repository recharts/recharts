"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarChart = void 0;
var generateCategoricalChart_1 = require("./generateCategoricalChart");
var Bar_1 = require("../cartesian/Bar");
var XAxis_1 = require("../cartesian/XAxis");
var YAxis_1 = require("../cartesian/YAxis");
var CartesianUtils_1 = require("../util/CartesianUtils");
exports.BarChart = generateCategoricalChart_1.generateCategoricalChart({
    chartName: 'BarChart',
    GraphicalChild: Bar_1.Bar,
    defaultTooltipEventType: 'axis',
    validateTooltipEventTypes: ['axis', 'item'],
    axisComponents: [
        { axisType: 'xAxis', AxisComp: XAxis_1.XAxis },
        { axisType: 'yAxis', AxisComp: YAxis_1.YAxis },
    ],
    formatAxisMap: CartesianUtils_1.formatAxisMap,
});
//# sourceMappingURL=BarChart.js.map