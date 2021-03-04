"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComposedChart = void 0;
var generateCategoricalChart_1 = require("./generateCategoricalChart");
var Area_1 = require("../cartesian/Area");
var Bar_1 = require("../cartesian/Bar");
var Line_1 = require("../cartesian/Line");
var Scatter_1 = require("../cartesian/Scatter");
var XAxis_1 = require("../cartesian/XAxis");
var YAxis_1 = require("../cartesian/YAxis");
var ZAxis_1 = require("../cartesian/ZAxis");
var CartesianUtils_1 = require("../util/CartesianUtils");
exports.ComposedChart = generateCategoricalChart_1.generateCategoricalChart({
    chartName: 'ComposedChart',
    GraphicalChild: [Line_1.Line, Area_1.Area, Bar_1.Bar, Scatter_1.Scatter],
    axisComponents: [
        { axisType: 'xAxis', AxisComp: XAxis_1.XAxis },
        { axisType: 'yAxis', AxisComp: YAxis_1.YAxis },
        { axisType: 'zAxis', AxisComp: ZAxis_1.ZAxis },
    ],
    formatAxisMap: CartesianUtils_1.formatAxisMap,
});
//# sourceMappingURL=ComposedChart.js.map