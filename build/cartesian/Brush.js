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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Brush = void 0;
var react_1 = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var d3_scale_1 = require("d3-scale");
var lodash_1 = __importDefault(require("lodash"));
var Layer_1 = require("../container/Layer");
var Text_1 = require("../component/Text");
var ChartUtils_1 = require("../util/ChartUtils");
var DataUtils_1 = require("../util/DataUtils");
var CssPrefixUtils_1 = require("../util/CssPrefixUtils");
var types_1 = require("../util/types");
var createScale = function (_a) {
    var data = _a.data, startIndex = _a.startIndex, endIndex = _a.endIndex, x = _a.x, width = _a.width, travellerWidth = _a.travellerWidth;
    if (!data || !data.length) {
        return {};
    }
    var len = data.length;
    var scale = d3_scale_1.scalePoint()
        .domain(lodash_1.default.range(0, len))
        .range([x, x + width - travellerWidth]);
    var scaleValues = scale.domain().map(function (entry) { return scale(entry); });
    return {
        isTextActive: false,
        isSlideMoving: false,
        isTravellerMoving: false,
        startX: scale(startIndex),
        endX: scale(endIndex),
        scale: scale,
        scaleValues: scaleValues,
    };
};
var isTouch = function (e) {
    return e.changedTouches && !!e.changedTouches.length;
};
var Brush = (function (_super) {
    __extends(Brush, _super);
    function Brush(props) {
        var _this = _super.call(this, props) || this;
        _this.handleDrag = function (e) {
            if (_this.leaveTimer) {
                clearTimeout(_this.leaveTimer);
                _this.leaveTimer = null;
            }
            if (_this.state.isTravellerMoving) {
                _this.handleTravellerMove(e);
            }
            else if (_this.state.isSlideMoving) {
                _this.handleSlideDrag(e);
            }
        };
        _this.handleTouchMove = function (e) {
            if (e.changedTouches != null && e.changedTouches.length > 0) {
                _this.handleDrag(e.changedTouches[0]);
            }
        };
        _this.handleDragEnd = function () {
            _this.setState({
                isTravellerMoving: false,
                isSlideMoving: false,
            });
            _this.detachDragEndListener();
        };
        _this.handleLeaveWrapper = function () {
            if (_this.state.isTravellerMoving || _this.state.isSlideMoving) {
                _this.leaveTimer = window.setTimeout(_this.handleDragEnd, _this.props.leaveTimeOut);
            }
        };
        _this.handleEnterSlideOrTraveller = function () {
            _this.setState({
                isTextActive: true,
            });
        };
        _this.handleLeaveSlideOrTraveller = function () {
            _this.setState({
                isTextActive: false,
            });
        };
        _this.handleSlideDragStart = function (e) {
            var event = isTouch(e) ? e.changedTouches[0] : e;
            _this.setState({
                isTravellerMoving: false,
                isSlideMoving: true,
                slideMoveStartX: event.pageX,
            });
            _this.attachDragEndListener();
        };
        _this.travellerDragStartHandlers = {
            startX: _this.handleTravellerDragStart.bind(_this, 'startX'),
            endX: _this.handleTravellerDragStart.bind(_this, 'endX'),
        };
        _this.state = {};
        return _this;
    }
    Brush.renderDefaultTraveller = function (props) {
        var x = props.x, y = props.y, width = props.width, height = props.height, stroke = props.stroke;
        var lineY = Math.floor(y + height / 2) - 1;
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("rect", { x: x, y: y, width: width, height: height, fill: stroke, stroke: "none" }),
            react_1.default.createElement("line", { x1: x + 1, y1: lineY, x2: x + width - 1, y2: lineY, fill: "none", stroke: "#fff" }),
            react_1.default.createElement("line", { x1: x + 1, y1: lineY + 2, x2: x + width - 1, y2: lineY + 2, fill: "none", stroke: "#fff" })));
    };
    Brush.renderTraveller = function (option, props) {
        var rectangle;
        if (react_1.default.isValidElement(option)) {
            rectangle = react_1.default.cloneElement(option, props);
        }
        else if (lodash_1.default.isFunction(option)) {
            rectangle = option(props);
        }
        else {
            rectangle = Brush.renderDefaultTraveller(props);
        }
        return rectangle;
    };
    Brush.getDerivedStateFromProps = function (nextProps, prevState) {
        var data = nextProps.data, width = nextProps.width, x = nextProps.x, travellerWidth = nextProps.travellerWidth, updateId = nextProps.updateId, startIndex = nextProps.startIndex, endIndex = nextProps.endIndex;
        if (data !== prevState.prevData || updateId !== prevState.prevUpdateId) {
            return __assign({ prevData: data, prevTravellerWidth: travellerWidth, prevUpdateId: updateId, prevX: x, prevWidth: width }, (data && data.length
                ? createScale({ data: data, width: width, x: x, travellerWidth: travellerWidth, startIndex: startIndex, endIndex: endIndex })
                : { scale: null, scaleValues: null }));
        }
        if (prevState.scale &&
            (width !== prevState.prevWidth || x !== prevState.prevX || travellerWidth !== prevState.prevTravellerWidth)) {
            prevState.scale.range([x, x + width - travellerWidth]);
            var scaleValues = prevState.scale.domain().map(function (entry) { return prevState.scale(entry); });
            return {
                prevData: data,
                prevTravellerWidth: travellerWidth,
                prevUpdateId: updateId,
                prevX: x,
                prevWidth: width,
                startX: prevState.scale(nextProps.startIndex),
                endX: prevState.scale(nextProps.endIndex),
                scaleValues: scaleValues,
            };
        }
        return null;
    };
    Brush.prototype.componentWillUnmount = function () {
        if (this.leaveTimer) {
            clearTimeout(this.leaveTimer);
            this.leaveTimer = null;
        }
        this.detachDragEndListener();
    };
    Brush.getIndexInRange = function (range, x) {
        var len = range.length;
        var start = 0;
        var end = len - 1;
        while (end - start > 1) {
            var middle = Math.floor((start + end) / 2);
            if (range[middle] > x) {
                end = middle;
            }
            else {
                start = middle;
            }
        }
        return x >= range[end] ? end : start;
    };
    Brush.prototype.getIndex = function (_a) {
        var startX = _a.startX, endX = _a.endX;
        var scaleValues = this.state.scaleValues;
        var _b = this.props, gap = _b.gap, data = _b.data;
        var lastIndex = data.length - 1;
        var min = Math.min(startX, endX);
        var max = Math.max(startX, endX);
        var minIndex = Brush.getIndexInRange(scaleValues, min);
        var maxIndex = Brush.getIndexInRange(scaleValues, max);
        return {
            startIndex: minIndex - (minIndex % gap),
            endIndex: maxIndex === lastIndex ? lastIndex : maxIndex - (maxIndex % gap),
        };
    };
    Brush.prototype.getTextOfTick = function (index) {
        var _a = this.props, data = _a.data, tickFormatter = _a.tickFormatter, dataKey = _a.dataKey;
        var text = ChartUtils_1.getValueByDataKey(data[index], dataKey, index);
        return lodash_1.default.isFunction(tickFormatter) ? tickFormatter(text, index) : text;
    };
    Brush.prototype.attachDragEndListener = function () {
        window.addEventListener('mouseup', this.handleDragEnd, true);
        window.addEventListener('touchend', this.handleDragEnd, true);
    };
    Brush.prototype.detachDragEndListener = function () {
        window.removeEventListener('mouseup', this.handleDragEnd, true);
        window.removeEventListener('touchend', this.handleDragEnd, true);
    };
    Brush.prototype.handleSlideDrag = function (e) {
        var _a = this.state, slideMoveStartX = _a.slideMoveStartX, startX = _a.startX, endX = _a.endX;
        var _b = this.props, x = _b.x, width = _b.width, travellerWidth = _b.travellerWidth, startIndex = _b.startIndex, endIndex = _b.endIndex, onChange = _b.onChange;
        var delta = e.pageX - slideMoveStartX;
        if (delta > 0) {
            delta = Math.min(delta, x + width - travellerWidth - endX, x + width - travellerWidth - startX);
        }
        else if (delta < 0) {
            delta = Math.max(delta, x - startX, x - endX);
        }
        var newIndex = this.getIndex({
            startX: startX + delta,
            endX: endX + delta,
        });
        if ((newIndex.startIndex !== startIndex || newIndex.endIndex !== endIndex) && onChange) {
            onChange(newIndex);
        }
        this.setState({
            startX: startX + delta,
            endX: endX + delta,
            slideMoveStartX: e.pageX,
        });
    };
    Brush.prototype.handleTravellerDragStart = function (id, e) {
        var event = isTouch(e) ? e.changedTouches[0] : e;
        this.setState({
            isSlideMoving: false,
            isTravellerMoving: true,
            movingTravellerId: id,
            brushMoveStartX: event.pageX,
        });
        this.attachDragEndListener();
    };
    Brush.prototype.handleTravellerMove = function (e) {
        var _a;
        var _b = this.state, brushMoveStartX = _b.brushMoveStartX, movingTravellerId = _b.movingTravellerId, endX = _b.endX, startX = _b.startX;
        var prevValue = this.state[movingTravellerId];
        var _c = this.props, x = _c.x, width = _c.width, travellerWidth = _c.travellerWidth, onChange = _c.onChange, gap = _c.gap, data = _c.data;
        var params = { startX: this.state.startX, endX: this.state.endX };
        var delta = e.pageX - brushMoveStartX;
        if (delta > 0) {
            delta = Math.min(delta, x + width - travellerWidth - prevValue);
        }
        else if (delta < 0) {
            delta = Math.max(delta, x - prevValue);
        }
        params[movingTravellerId] = prevValue + delta;
        var newIndex = this.getIndex(params);
        var startIndex = newIndex.startIndex, endIndex = newIndex.endIndex;
        var isFullGap = function () {
            var lastIndex = data.length - 1;
            if ((movingTravellerId === 'startX' && (endX > startX ? startIndex % gap === 0 : endIndex % gap === 0)) ||
                (endX < startX && endIndex === lastIndex) ||
                (movingTravellerId === 'endX' && (endX > startX ? endIndex % gap === 0 : startIndex % gap === 0)) ||
                (endX > startX && endIndex === lastIndex)) {
                return true;
            }
            return false;
        };
        this.setState((_a = {},
            _a[movingTravellerId] = prevValue + delta,
            _a.brushMoveStartX = e.pageX,
            _a), function () {
            if (onChange) {
                if (isFullGap()) {
                    onChange(newIndex);
                }
            }
        });
    };
    Brush.prototype.renderBackground = function () {
        var _a = this.props, x = _a.x, y = _a.y, width = _a.width, height = _a.height, fill = _a.fill, stroke = _a.stroke;
        return react_1.default.createElement("rect", { stroke: stroke, fill: fill, x: x, y: y, width: width, height: height });
    };
    Brush.prototype.renderPanorama = function () {
        var _a = this.props, x = _a.x, y = _a.y, width = _a.width, height = _a.height, data = _a.data, children = _a.children, padding = _a.padding;
        var chartElement = react_1.Children.only(children);
        if (!chartElement) {
            return null;
        }
        return react_1.default.cloneElement(chartElement, {
            x: x,
            y: y,
            width: width,
            height: height,
            margin: padding,
            compact: true,
            data: data,
        });
    };
    Brush.prototype.renderTravellerLayer = function (travellerX, id) {
        var _a = this.props, y = _a.y, travellerWidth = _a.travellerWidth, height = _a.height, traveller = _a.traveller;
        var x = Math.max(travellerX, this.props.x);
        var travellerProps = __assign(__assign({}, types_1.filterProps(this.props)), { x: x,
            y: y, width: travellerWidth, height: height });
        return (react_1.default.createElement(Layer_1.Layer, { className: "recharts-brush-traveller", onMouseEnter: this.handleEnterSlideOrTraveller, onMouseLeave: this.handleLeaveSlideOrTraveller, onMouseDown: this.travellerDragStartHandlers[id], onTouchStart: this.travellerDragStartHandlers[id], style: { cursor: 'col-resize' } }, Brush.renderTraveller(traveller, travellerProps)));
    };
    Brush.prototype.renderSlide = function (startX, endX) {
        var _a = this.props, y = _a.y, height = _a.height, stroke = _a.stroke, travellerWidth = _a.travellerWidth;
        var x = Math.min(startX, endX) + travellerWidth;
        var width = Math.max(Math.abs(endX - startX) - travellerWidth, 0);
        return (react_1.default.createElement("rect", { className: "recharts-brush-slide", onMouseEnter: this.handleEnterSlideOrTraveller, onMouseLeave: this.handleLeaveSlideOrTraveller, onMouseDown: this.handleSlideDragStart, onTouchStart: this.handleSlideDragStart, style: { cursor: 'move' }, stroke: "none", fill: stroke, fillOpacity: 0.2, x: x, y: y, width: width, height: height }));
    };
    Brush.prototype.renderText = function () {
        var _a = this.props, startIndex = _a.startIndex, endIndex = _a.endIndex, y = _a.y, height = _a.height, travellerWidth = _a.travellerWidth, stroke = _a.stroke;
        var _b = this.state, startX = _b.startX, endX = _b.endX;
        var offset = 5;
        var attrs = {
            pointerEvents: 'none',
            fill: stroke,
        };
        return (react_1.default.createElement(Layer_1.Layer, { className: "recharts-brush-texts" },
            react_1.default.createElement(Text_1.Text, __assign({ textAnchor: "end", verticalAnchor: "middle", x: Math.min(startX, endX) - offset, y: y + height / 2 }, attrs), this.getTextOfTick(startIndex)),
            react_1.default.createElement(Text_1.Text, __assign({ textAnchor: "start", verticalAnchor: "middle", x: Math.max(startX, endX) + travellerWidth + offset, y: y + height / 2 }, attrs), this.getTextOfTick(endIndex))));
    };
    Brush.prototype.render = function () {
        var _a = this.props, data = _a.data, className = _a.className, children = _a.children, x = _a.x, y = _a.y, width = _a.width, height = _a.height, alwaysShowText = _a.alwaysShowText;
        var _b = this.state, startX = _b.startX, endX = _b.endX, isTextActive = _b.isTextActive, isSlideMoving = _b.isSlideMoving, isTravellerMoving = _b.isTravellerMoving;
        if (!data ||
            !data.length ||
            !DataUtils_1.isNumber(x) ||
            !DataUtils_1.isNumber(y) ||
            !DataUtils_1.isNumber(width) ||
            !DataUtils_1.isNumber(height) ||
            width <= 0 ||
            height <= 0) {
            return null;
        }
        var layerClass = classnames_1.default('recharts-brush', className);
        var isPanoramic = react_1.default.Children.count(children) === 1;
        var style = CssPrefixUtils_1.generatePrefixStyle('userSelect', 'none');
        return (react_1.default.createElement(Layer_1.Layer, { className: layerClass, onMouseMove: this.handleDrag, onMouseLeave: this.handleLeaveWrapper, onTouchMove: this.handleTouchMove, style: style },
            this.renderBackground(),
            isPanoramic && this.renderPanorama(),
            this.renderSlide(startX, endX),
            this.renderTravellerLayer(startX, 'startX'),
            this.renderTravellerLayer(endX, 'endX'),
            (isTextActive || isSlideMoving || isTravellerMoving || alwaysShowText) && this.renderText()));
    };
    Brush.displayName = 'Brush';
    Brush.defaultProps = {
        height: 40,
        travellerWidth: 5,
        gap: 1,
        fill: '#fff',
        stroke: '#666',
        padding: { top: 1, right: 1, bottom: 1, left: 1 },
        leaveTimeOut: 1000,
        alwaysShowText: false,
    };
    return Brush;
}(react_1.PureComponent));
exports.Brush = Brush;
//# sourceMappingURL=Brush.js.map