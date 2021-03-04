"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScatterChart = void 0;
var generateCategoricalChart_1 = require("./generateCategoricalChart");
var Scatter_1 = require("../cartesian/Scatter");
var XAxis_1 = require("../cartesian/XAxis");
var YAxis_1 = require("../cartesian/YAxis");
var ZAxis_1 = require("../cartesian/ZAxis");
var CartesianUtils_1 = require("../util/CartesianUtils");
exports.ScatterChart = generateCategoricalChart_1.generateCategoricalChart({
    chartName: 'ScatterChart',
    GraphicalChild: Scatter_1.Scatter,
    defaultTooltipEventType: 'item',
    validateTooltipEventTypes: ['item'],
    axisComponents: [
        { axisType: 'xAxis', AxisComp: XAxis_1.XAxis },
        { axisType: 'yAxis', AxisComp: YAxis_1.YAxis },
        { axisType: 'zAxis', AxisComp: ZAxis_1.ZAxis },
    ],
    formatAxisMap: CartesianUtils_1.formatAxisMap,
});
//# sourceMappingURL=ScatterChart.js.map