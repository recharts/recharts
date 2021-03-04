"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AreaChart = void 0;
var generateCategoricalChart_1 = require("./generateCategoricalChart");
var Area_1 = require("../cartesian/Area");
var XAxis_1 = require("../cartesian/XAxis");
var YAxis_1 = require("../cartesian/YAxis");
var CartesianUtils_1 = require("../util/CartesianUtils");
exports.AreaChart = generateCategoricalChart_1.generateCategoricalChart({
    chartName: 'AreaChart',
    GraphicalChild: Area_1.Area,
    axisComponents: [
        { axisType: 'xAxis', AxisComp: XAxis_1.XAxis },
        { axisType: 'yAxis', AxisComp: YAxis_1.YAxis },
    ],
    formatAxisMap: CartesianUtils_1.formatAxisMap,
});
//# sourceMappingURL=AreaChart.js.map