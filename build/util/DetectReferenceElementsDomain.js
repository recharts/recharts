"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectReferenceElementsDomain = void 0;
var ReferenceDot_1 = require("../cartesian/ReferenceDot");
var ReferenceLine_1 = require("../cartesian/ReferenceLine");
var ReferenceArea_1 = require("../cartesian/ReferenceArea");
var IfOverflowMatches_1 = require("./IfOverflowMatches");
var ReactUtils_1 = require("./ReactUtils");
var DataUtils_1 = require("./DataUtils");
var detectReferenceElementsDomain = function (children, domain, axisId, axisType, specifiedTicks) {
    var lines = ReactUtils_1.findAllByType(children, ReferenceLine_1.ReferenceLine.displayName);
    var dots = ReactUtils_1.findAllByType(children, ReferenceDot_1.ReferenceDot.displayName);
    var elements = lines.concat(dots);
    var areas = ReactUtils_1.findAllByType(children, ReferenceArea_1.ReferenceArea.displayName);
    var idKey = axisType + "Id";
    var valueKey = axisType[0];
    var finalDomain = domain;
    if (elements.length) {
        finalDomain = elements.reduce(function (result, el) {
            if (el.props[idKey] === axisId && IfOverflowMatches_1.ifOverflowMatches(el.props, 'extendDomain') && DataUtils_1.isNumber(el.props[valueKey])) {
                var value = el.props[valueKey];
                return [Math.min(result[0], value), Math.max(result[1], value)];
            }
            return result;
        }, finalDomain);
    }
    if (areas.length) {
        var key1_1 = valueKey + "1";
        var key2_1 = valueKey + "2";
        finalDomain = areas.reduce(function (result, el) {
            if (el.props[idKey] === axisId &&
                IfOverflowMatches_1.ifOverflowMatches(el.props, 'extendDomain') &&
                DataUtils_1.isNumber(el.props[key1_1]) &&
                DataUtils_1.isNumber(el.props[key2_1])) {
                var value1 = el.props[key1_1];
                var value2 = el.props[key2_1];
                return [Math.min(result[0], value1, value2), Math.max(result[1], value1, value2)];
            }
            return result;
        }, finalDomain);
    }
    if (specifiedTicks && specifiedTicks.length) {
        finalDomain = specifiedTicks.reduce(function (result, tick) {
            if (DataUtils_1.isNumber(tick)) {
                return [Math.min(result[0], tick), Math.max(result[1], tick)];
            }
            return result;
        }, finalDomain);
    }
    return finalDomain;
};
exports.detectReferenceElementsDomain = detectReferenceElementsDomain;
//# sourceMappingURL=DetectReferenceElementsDomain.js.map