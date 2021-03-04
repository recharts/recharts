"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineChart = void 0;
var generateCategoricalChart_1 = require("./generateCategoricalChart");
var Line_1 = require("../cartesian/Line");
var XAxis_1 = require("../cartesian/XAxis");
var YAxis_1 = require("../cartesian/YAxis");
var CartesianUtils_1 = require("../util/CartesianUtils");
exports.LineChart = generateCategoricalChart_1.generateCategoricalChart({
    chartName: 'LineChart',
    GraphicalChild: Line_1.Line,
    axisComponents: [
        { axisType: 'xAxis', AxisComp: XAxis_1.XAxis },
        { axisType: 'yAxis', AxisComp: YAxis_1.YAxis },
    ],
    formatAxisMap: CartesianUtils_1.formatAxisMap,
});
//# sourceMappingURL=LineChart.js.map