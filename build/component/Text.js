"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
var react_1 = __importStar(require("react"));
var reduce_css_calc_1 = __importDefault(require("reduce-css-calc"));
var classnames_1 = __importDefault(require("classnames"));
var lodash_1 = __importDefault(require("lodash"));
var DataUtils_1 = require("../util/DataUtils");
var Global_1 = require("../util/Global");
var types_1 = require("../util/types");
var DOMUtils_1 = require("../util/DOMUtils");
var BREAKING_SPACES = /[ \f\n\r\t\v\u2028\u2029]+/;
var calculateWordWidths = function (props) {
    try {
        var words = [];
        if (!lodash_1.default.isNil(props.children)) {
            if (props.breakAll) {
                words = props.children.toString().split('');
            }
            else {
                words = props.children.toString().split(BREAKING_SPACES);
            }
        }
        var wordsWithComputedWidth = words.map(function (word) { return ({ word: word, width: DOMUtils_1.getStringSize(word, props.style).width }); });
        var spaceWidth = props.breakAll ? 0 : DOMUtils_1.getStringSize('\u00A0', props.style).width;
        return { wordsWithComputedWidth: wordsWithComputedWidth, spaceWidth: spaceWidth };
    }
    catch (e) {
        return null;
    }
};
var calculateWordsByLines = function (props, initialWordsWithComputedWith, spaceWidth, lineWidth, scaleToFit) {
    var shouldLimitLines = DataUtils_1.isNumber(props.maxLines);
    var text = props.children;
    var calculate = function (words) {
        if (words === void 0) { words = []; }
        return words.reduce(function (result, _a) {
            var word = _a.word, width = _a.width;
            var currentLine = result[result.length - 1];
            if (currentLine && (lineWidth == null || scaleToFit || currentLine.width + width + spaceWidth < lineWidth)) {
                currentLine.words.push(word);
                currentLine.width += width + spaceWidth;
            }
            else {
                var newLine = { words: [word], width: width };
                result.push(newLine);
            }
            return result;
        }, []);
    };
    var originalResult = calculate(initialWordsWithComputedWith);
    var findLongestLine = function (words) {
        return words.reduce(function (a, b) { return (a.width > b.width ? a : b); });
    };
    if (!shouldLimitLines) {
        return originalResult;
    }
    var suffix = '…';
    var checkOverflow = function (index) {
        var tempText = text.slice(0, index);
        var words = calculateWordWidths(__assign(__assign({}, props), { children: tempText + suffix })).wordsWithComputedWidth;
        var result = calculate(words);
        var doesOverflow = result.length > props.maxLines || findLongestLine(result).width > lineWidth;
        return [doesOverflow, result];
    };
    var start = 0;
    var end = text.length - 1;
    var iterations = 0;
    var trimmedResult;
    while (start <= end && iterations <= text.length - 1) {
        var middle = Math.floor((start + end) / 2);
        var prev = middle - 1;
        var _a = checkOverflow(prev), doesPrevOverflow = _a[0], result = _a[1];
        var doesMiddleOverflow = checkOverflow(middle)[0];
        if (!doesPrevOverflow && !doesMiddleOverflow) {
            start = middle + 1;
        }
        if (doesPrevOverflow && doesMiddleOverflow) {
            end = middle - 1;
        }
        if (!doesPrevOverflow && doesMiddleOverflow) {
            trimmedResult = result;
            break;
        }
        iterations++;
    }
    return trimmedResult || originalResult;
};
var getWordsWithoutCalculate = function (children) {
    var words = !lodash_1.default.isNil(children) ? children.toString().split(BREAKING_SPACES) : [];
    return [{ words: words }];
};
var getWordsByLines = function (props, needCalculate) {
    if ((props.width || props.scaleToFit) && !Global_1.Global.isSsr) {
        var wordsWithComputedWidth = void 0, spaceWidth = void 0;
        if (needCalculate) {
            var wordWidths = calculateWordWidths(props);
            if (wordWidths) {
                var wcw = wordWidths.wordsWithComputedWidth, sw = wordWidths.spaceWidth;
                wordsWithComputedWidth = wcw;
                spaceWidth = sw;
            }
            else {
                return getWordsWithoutCalculate(props.children);
            }
            return calculateWordsByLines(props, wordsWithComputedWidth, spaceWidth, props.width, props.scaleToFit);
        }
    }
    return getWordsWithoutCalculate(props.children);
};
var Text = (function (_super) {
    __extends(Text, _super);
    function Text() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    Text.getDerivedStateFromProps = function (nextProps, prevState) {
        if (nextProps.width !== prevState.prevWidth ||
            nextProps.scaleToFit !== prevState.prevScaleToFit ||
            nextProps.children !== prevState.prevChildren ||
            nextProps.style !== prevState.prevStyle ||
            nextProps.breakAll !== prevState.prevBreakAll) {
            var needCalculate = nextProps.children !== prevState.prevChildren ||
                nextProps.style !== prevState.prevStyle ||
                nextProps.breakAll !== prevState.prevBreakAll;
            return {
                prevWidth: nextProps.width,
                prevScaleToFit: nextProps.scaleToFit,
                prevChildren: nextProps.children,
                prevStyle: nextProps.style,
                wordsByLines: getWordsByLines(nextProps, needCalculate),
            };
        }
        return null;
    };
    Text.prototype.render = function () {
        var _a = this.props, dx = _a.dx, dy = _a.dy, textAnchor = _a.textAnchor, verticalAnchor = _a.verticalAnchor, scaleToFit = _a.scaleToFit, angle = _a.angle, lineHeight = _a.lineHeight, capHeight = _a.capHeight, className = _a.className, breakAll = _a.breakAll, textProps = __rest(_a, ["dx", "dy", "textAnchor", "verticalAnchor", "scaleToFit", "angle", "lineHeight", "capHeight", "className", "breakAll"]);
        var wordsByLines = this.state.wordsByLines;
        if (!DataUtils_1.isNumOrStr(textProps.x) || !DataUtils_1.isNumOrStr(textProps.y)) {
            return null;
        }
        var x = textProps.x + (DataUtils_1.isNumber(dx) ? dx : 0);
        var y = textProps.y + (DataUtils_1.isNumber(dy) ? dy : 0);
        var startDy;
        switch (verticalAnchor) {
            case 'start':
                startDy = reduce_css_calc_1.default("calc(" + capHeight + ")");
                break;
            case 'middle':
                startDy = reduce_css_calc_1.default("calc(" + (wordsByLines.length - 1) / 2 + " * -" + lineHeight + " + (" + capHeight + " / 2))");
                break;
            default:
                startDy = reduce_css_calc_1.default("calc(" + (wordsByLines.length - 1) + " * -" + lineHeight + ")");
                break;
        }
        var transforms = [];
        if (scaleToFit) {
            var lineWidth = wordsByLines[0].width;
            var width = this.props.width;
            transforms.push("scale(" + (DataUtils_1.isNumber(width) ? width / lineWidth : 1) / lineWidth + ")");
        }
        if (angle) {
            transforms.push("rotate(" + angle + ", " + x + ", " + y + ")");
        }
        if (transforms.length) {
            textProps.transform = transforms.join(' ');
        }
        return (react_1.default.createElement("text", __assign({}, types_1.filterProps(textProps, true), { x: x, y: y, className: classnames_1.default('recharts-text', className), textAnchor: textAnchor }), wordsByLines.map(function (line, index) { return (react_1.default.createElement("tspan", { x: x, dy: index === 0 ? startDy : lineHeight, key: index }, line.words.join(breakAll ? '' : ' '))); })));
    };
    Text.defaultProps = {
        x: 0,
        y: 0,
        lineHeight: '1em',
        capHeight: '0.71em',
        scaleToFit: false,
        textAnchor: 'start',
        verticalAnchor: 'end',
    };
    return Text;
}(react_1.Component));
exports.Text = Text;
//# sourceMappingURL=Text.js.map