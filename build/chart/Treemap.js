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
exports.Treemap = void 0;
var react_1 = __importStar(require("react"));
var react_smooth_1 = __importDefault(require("react-smooth"));
var classnames_1 = __importDefault(require("classnames"));
var lodash_1 = __importDefault(require("lodash"));
var Surface_1 = require("../container/Surface");
var Layer_1 = require("../container/Layer");
var Rectangle_1 = require("../shape/Rectangle");
var ReactUtils_1 = require("../util/ReactUtils");
var Global_1 = require("../util/Global");
var Tooltip_1 = require("../component/Tooltip");
var Polygon_1 = require("../shape/Polygon");
var ChartUtils_1 = require("../util/ChartUtils");
var Constants_1 = require("../util/Constants");
var DOMUtils_1 = require("../util/DOMUtils");
var DataUtils_1 = require("../util/DataUtils");
var types_1 = require("../util/types");
var NODE_VALUE_KEY = 'value';
var computeNode = function (_a) {
    var _b;
    var depth = _a.depth, node = _a.node, index = _a.index, valueKey = _a.valueKey;
    var children = node.children;
    var childDepth = depth + 1;
    var computedChildren = children && children.length
        ? children.map(function (child, i) {
            return computeNode({ depth: childDepth, node: child, index: i, valueKey: valueKey });
        })
        : null;
    var nodeValue;
    if (children && children.length) {
        nodeValue = computedChildren.reduce(function (result, child) { return result + child[NODE_VALUE_KEY]; }, 0);
    }
    else {
        nodeValue = lodash_1.default.isNaN(node[valueKey]) || node[valueKey] <= 0 ? 0 : node[valueKey];
    }
    return __assign(__assign({}, node), (_b = { children: computedChildren }, _b[NODE_VALUE_KEY] = nodeValue, _b.depth = depth, _b.index = index, _b));
};
var filterRect = function (node) { return ({ x: node.x, y: node.y, width: node.width, height: node.height }); };
var getAreaOfChildren = function (children, areaValueRatio) {
    var ratio = areaValueRatio < 0 ? 0 : areaValueRatio;
    return children.map(function (child) {
        var area = child[NODE_VALUE_KEY] * ratio;
        return __assign(__assign({}, child), { area: lodash_1.default.isNaN(area) || area <= 0 ? 0 : area });
    });
};
var getWorstScore = function (row, parentSize, aspectRatio) {
    var parentArea = parentSize * parentSize;
    var rowArea = row.area * row.area;
    var _a = row.reduce(function (result, child) { return ({
        min: Math.min(result.min, child.area),
        max: Math.max(result.max, child.area),
    }); }, { min: Infinity, max: 0 }), min = _a.min, max = _a.max;
    return rowArea
        ? Math.max((parentArea * max * aspectRatio) / rowArea, rowArea / (parentArea * min * aspectRatio))
        : Infinity;
};
var horizontalPosition = function (row, parentSize, parentRect, isFlush) {
    var rowHeight = parentSize ? Math.round(row.area / parentSize) : 0;
    if (isFlush || rowHeight > parentRect.height) {
        rowHeight = parentRect.height;
    }
    var curX = parentRect.x;
    var child;
    for (var i = 0, len = row.length; i < len; i++) {
        child = row[i];
        child.x = curX;
        child.y = parentRect.y;
        child.height = rowHeight;
        child.width = Math.min(rowHeight ? Math.round(child.area / rowHeight) : 0, parentRect.x + parentRect.width - curX);
        curX += child.width;
    }
    child.z = true;
    child.width += parentRect.x + parentRect.width - curX;
    return __assign(__assign({}, parentRect), { y: parentRect.y + rowHeight, height: parentRect.height - rowHeight });
};
var verticalPosition = function (row, parentSize, parentRect, isFlush) {
    var rowWidth = parentSize ? Math.round(row.area / parentSize) : 0;
    if (isFlush || rowWidth > parentRect.width) {
        rowWidth = parentRect.width;
    }
    var curY = parentRect.y;
    var child;
    for (var i = 0, len = row.length; i < len; i++) {
        child = row[i];
        child.x = parentRect.x;
        child.y = curY;
        child.width = rowWidth;
        child.height = Math.min(rowWidth ? Math.round(child.area / rowWidth) : 0, parentRect.y + parentRect.height - curY);
        curY += child.height;
    }
    if (child) {
        child.z = false;
        child.height += parentRect.y + parentRect.height - curY;
    }
    return __assign(__assign({}, parentRect), { x: parentRect.x + rowWidth, width: parentRect.width - rowWidth });
};
var position = function (row, parentSize, parentRect, isFlush) {
    if (parentSize === parentRect.width) {
        return horizontalPosition(row, parentSize, parentRect, isFlush);
    }
    return verticalPosition(row, parentSize, parentRect, isFlush);
};
var squarify = function (node, aspectRatio) {
    var children = node.children;
    if (children && children.length) {
        var rect = filterRect(node);
        var row = [];
        var best = Infinity;
        var child = void 0, score = void 0;
        var size = Math.min(rect.width, rect.height);
        var scaleChildren = getAreaOfChildren(children, (rect.width * rect.height) / node[NODE_VALUE_KEY]);
        var tempChildren = scaleChildren.slice();
        row.area = 0;
        while (tempChildren.length > 0) {
            row.push((child = tempChildren[0]));
            row.area += child.area;
            score = getWorstScore(row, size, aspectRatio);
            if (score <= best) {
                tempChildren.shift();
                best = score;
            }
            else {
                row.area -= row.pop().area;
                rect = position(row, size, rect, false);
                size = Math.min(rect.width, rect.height);
                row.length = row.area = 0;
                best = Infinity;
            }
        }
        if (row.length) {
            rect = position(row, size, rect, true);
            row.length = row.area = 0;
        }
        return __assign(__assign({}, node), { children: scaleChildren.map(function (c) { return squarify(c, aspectRatio); }) });
    }
    return node;
};
var defaultState = {
    isTooltipActive: false,
    isAnimationFinished: false,
    activeNode: null,
    formatRoot: null,
    currentRoot: null,
    nestIndex: [],
};
var Treemap = (function (_super) {
    __extends(Treemap, _super);
    function Treemap() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = __assign({}, defaultState);
        _this.handleAnimationEnd = function () {
            var onAnimationEnd = _this.props.onAnimationEnd;
            _this.setState({ isAnimationFinished: true });
            if (lodash_1.default.isFunction(onAnimationEnd)) {
                onAnimationEnd();
            }
        };
        _this.handleAnimationStart = function () {
            var onAnimationStart = _this.props.onAnimationStart;
            _this.setState({ isAnimationFinished: false });
            if (lodash_1.default.isFunction(onAnimationStart)) {
                onAnimationStart();
            }
        };
        return _this;
    }
    Treemap.getDerivedStateFromProps = function (nextProps, prevState) {
        if (nextProps.data !== prevState.prevData ||
            nextProps.type !== prevState.prevType ||
            nextProps.width !== prevState.prevWidth ||
            nextProps.height !== prevState.prevHeight ||
            nextProps.dataKey !== prevState.prevDataKey ||
            nextProps.aspectRatio !== prevState.prevAspectRatio) {
            var root = computeNode({
                depth: 0,
                node: { children: nextProps.data, x: 0, y: 0, width: nextProps.width, height: nextProps.height },
                index: 0,
                valueKey: nextProps.dataKey,
            });
            var formatRoot = squarify(root, nextProps.aspectRatio);
            return __assign(__assign({}, defaultState), { formatRoot: formatRoot, currentRoot: root, nestIndex: [root], prevAspectRatio: nextProps.aspectRatio, prevData: nextProps.data, prevWidth: nextProps.width, prevHeight: nextProps.height, prevDataKey: nextProps.dataKey, prevType: nextProps.type });
        }
        return null;
    };
    Treemap.prototype.handleMouseEnter = function (node, e) {
        var _a = this.props, onMouseEnter = _a.onMouseEnter, children = _a.children;
        var tooltipItem = ReactUtils_1.findChildByType(children, Tooltip_1.Tooltip.displayName);
        if (tooltipItem) {
            this.setState({
                isTooltipActive: true,
                activeNode: node,
            }, function () {
                if (onMouseEnter) {
                    onMouseEnter(node, e);
                }
            });
        }
        else if (onMouseEnter) {
            onMouseEnter(node, e);
        }
    };
    Treemap.prototype.handleMouseLeave = function (node, e) {
        var _a = this.props, onMouseLeave = _a.onMouseLeave, children = _a.children;
        var tooltipItem = ReactUtils_1.findChildByType(children, Tooltip_1.Tooltip.displayName);
        if (tooltipItem) {
            this.setState({
                isTooltipActive: false,
                activeNode: null,
            }, function () {
                if (onMouseLeave) {
                    onMouseLeave(node, e);
                }
            });
        }
        else if (onMouseLeave) {
            onMouseLeave(node, e);
        }
    };
    Treemap.prototype.handleClick = function (node) {
        var _a = this.props, onClick = _a.onClick, type = _a.type;
        if (type === 'nest' && node.children) {
            var _b = this.props, width = _b.width, height = _b.height, dataKey = _b.dataKey, aspectRatio = _b.aspectRatio;
            var root = computeNode({
                depth: 0,
                node: __assign(__assign({}, node), { x: 0, y: 0, width: width, height: height }),
                index: 0,
                valueKey: dataKey,
            });
            var formatRoot = squarify(root, aspectRatio);
            var nestIndex = this.state.nestIndex;
            nestIndex.push(node);
            this.setState({
                formatRoot: formatRoot,
                currentRoot: root,
                nestIndex: nestIndex,
            });
        }
        if (onClick) {
            onClick(node);
        }
    };
    Treemap.prototype.handleNestIndex = function (node, i) {
        var nestIndex = this.state.nestIndex;
        var _a = this.props, width = _a.width, height = _a.height, dataKey = _a.dataKey, aspectRatio = _a.aspectRatio;
        var root = computeNode({
            depth: 0,
            node: __assign(__assign({}, node), { x: 0, y: 0, width: width, height: height }),
            index: 0,
            valueKey: dataKey,
        });
        var formatRoot = squarify(root, aspectRatio);
        nestIndex = nestIndex.slice(0, i + 1);
        this.setState({
            formatRoot: formatRoot,
            currentRoot: node,
            nestIndex: nestIndex,
        });
    };
    Treemap.prototype.renderItem = function (content, nodeProps, isLeaf) {
        var _this = this;
        var _a = this.props, isAnimationActive = _a.isAnimationActive, animationBegin = _a.animationBegin, animationDuration = _a.animationDuration, animationEasing = _a.animationEasing, isUpdateAnimationActive = _a.isUpdateAnimationActive, type = _a.type, animationId = _a.animationId, colorPanel = _a.colorPanel;
        var isAnimationFinished = this.state.isAnimationFinished;
        var width = nodeProps.width, height = nodeProps.height, x = nodeProps.x, y = nodeProps.y, depth = nodeProps.depth;
        var translateX = parseInt("" + (Math.random() * 2 - 1) * width, 10);
        var event = {};
        if (isLeaf || type === 'nest') {
            event = {
                onMouseEnter: this.handleMouseEnter.bind(this, nodeProps),
                onMouseLeave: this.handleMouseLeave.bind(this, nodeProps),
                onClick: this.handleClick.bind(this, nodeProps),
            };
        }
        if (!isAnimationActive) {
            return (react_1.default.createElement(Layer_1.Layer, __assign({}, event), this.constructor.renderContentItem(content, __assign(__assign({}, nodeProps), { isAnimationActive: false, isUpdateAnimationActive: false, width: width,
                height: height,
                x: x,
                y: y }), type, colorPanel)));
        }
        return (react_1.default.createElement(react_smooth_1.default, { begin: animationBegin, duration: animationDuration, isActive: isAnimationActive, easing: animationEasing, key: "treemap-" + animationId, from: { x: x, y: y, width: width, height: height }, to: { x: x, y: y, width: width, height: height }, onAnimationStart: this.handleAnimationStart, onAnimationEnd: this.handleAnimationEnd }, function (_a) {
            var currX = _a.x, currY = _a.y, currWidth = _a.width, currHeight = _a.height;
            return (react_1.default.createElement(react_smooth_1.default, { from: "translate(" + translateX + "px, " + translateX + "px)", to: "translate(0, 0)", attributeName: "transform", begin: animationBegin, easing: animationEasing, isActive: isAnimationActive, duration: animationDuration },
                react_1.default.createElement(Layer_1.Layer, __assign({}, event), (function () {
                    if (depth > 2 && !isAnimationFinished) {
                        return null;
                    }
                    return _this.constructor.renderContentItem(content, __assign(__assign({}, nodeProps), { isAnimationActive: isAnimationActive, isUpdateAnimationActive: !isUpdateAnimationActive, width: currWidth, height: currHeight, x: currX, y: currY }), type, colorPanel);
                })())));
        }));
    };
    Treemap.renderContentItem = function (content, nodeProps, type, colorPanel) {
        if (react_1.default.isValidElement(content)) {
            return react_1.default.cloneElement(content, nodeProps);
        }
        if (lodash_1.default.isFunction(content)) {
            return content(nodeProps);
        }
        var x = nodeProps.x, y = nodeProps.y, width = nodeProps.width, height = nodeProps.height, index = nodeProps.index;
        var arrow = null;
        if (width > 10 && height > 10 && nodeProps.children && type === 'nest') {
            arrow = (react_1.default.createElement(Polygon_1.Polygon, { points: [
                    { x: x + 2, y: y + height / 2 },
                    { x: x + 6, y: y + height / 2 + 3 },
                    { x: x + 2, y: y + height / 2 + 6 },
                ] }));
        }
        var text = null;
        var nameSize = DOMUtils_1.getStringSize(nodeProps.name);
        if (width > 20 && height > 20 && nameSize.width < width && nameSize.height < height) {
            text = (react_1.default.createElement("text", { x: x + 8, y: y + height / 2 + 7, fontSize: 14 }, nodeProps.name));
        }
        var colors = colorPanel || Constants_1.COLOR_PANEL;
        return (react_1.default.createElement("g", null,
            react_1.default.createElement(Rectangle_1.Rectangle, __assign({ fill: nodeProps.depth < 2 ? colors[index % colors.length] : 'rgba(255,255,255,0)', stroke: "#fff" }, lodash_1.default.omit(nodeProps, 'children'))),
            arrow,
            text));
    };
    Treemap.prototype.renderNode = function (root, node, i) {
        var _this = this;
        var _a = this.props, content = _a.content, type = _a.type;
        var nodeProps = __assign(__assign(__assign({}, types_1.filterProps(this.props)), node), { root: root });
        var isLeaf = !node.children || !node.children.length;
        var currentRoot = this.state.currentRoot;
        var isCurrentRootChild = (currentRoot.children || []).filter(function (item) { return item.depth === node.depth && item.name === node.name; });
        if (!isCurrentRootChild.length && root.depth && type === 'nest') {
            return null;
        }
        return (react_1.default.createElement(Layer_1.Layer, { key: "recharts-treemap-node-" + i, className: "recharts-treemap-depth-" + node.depth },
            this.renderItem(content, nodeProps, isLeaf),
            node.children && node.children.length
                ? node.children.map(function (child, index) { return _this.renderNode(node, child, index); })
                : null));
    };
    Treemap.prototype.renderAllNodes = function () {
        var formatRoot = this.state.formatRoot;
        if (!formatRoot) {
            return null;
        }
        return this.renderNode(formatRoot, formatRoot, 0);
    };
    Treemap.prototype.renderTooltip = function () {
        var _a = this.props, children = _a.children, nameKey = _a.nameKey;
        var tooltipItem = ReactUtils_1.findChildByType(children, Tooltip_1.Tooltip.displayName);
        if (!tooltipItem) {
            return null;
        }
        var _b = this.props, width = _b.width, height = _b.height, dataKey = _b.dataKey;
        var _c = this.state, isTooltipActive = _c.isTooltipActive, activeNode = _c.activeNode;
        var viewBox = { x: 0, y: 0, width: width, height: height };
        var coordinate = activeNode
            ? {
                x: activeNode.x + activeNode.width / 2,
                y: activeNode.y + activeNode.height / 2,
            }
            : null;
        var payload = isTooltipActive && activeNode
            ? [
                {
                    payload: activeNode,
                    name: ChartUtils_1.getValueByDataKey(activeNode, nameKey, ''),
                    value: ChartUtils_1.getValueByDataKey(activeNode, NODE_VALUE_KEY),
                },
            ]
            : [];
        return react_1.default.cloneElement(tooltipItem, {
            viewBox: viewBox,
            active: isTooltipActive,
            coordinate: coordinate,
            label: '',
            payload: payload,
        });
    };
    Treemap.prototype.renderNestIndex = function () {
        var _this = this;
        var _a = this.props, nameKey = _a.nameKey, nestIndexContent = _a.nestIndexContent;
        var nestIndex = this.state.nestIndex;
        return (react_1.default.createElement("div", { className: "recharts-treemap-nest-index-wrapper", style: { marginTop: '8px', textAlign: 'center' } }, nestIndex.map(function (item, i) {
            var name = lodash_1.default.get(item, nameKey, 'root');
            var content = null;
            if (react_1.default.isValidElement(nestIndexContent)) {
                content = react_1.default.cloneElement(nestIndexContent, item, i);
            }
            if (lodash_1.default.isFunction(nestIndexContent)) {
                content = nestIndexContent(item, i);
            }
            else {
                content = name;
            }
            return (react_1.default.createElement("div", { onClick: _this.handleNestIndex.bind(_this, item, i), key: "nest-index-" + DataUtils_1.uniqueId(), className: "recharts-treemap-nest-index-box", style: {
                    cursor: 'pointer',
                    display: 'inline-block',
                    padding: '0 7px',
                    background: '#000',
                    color: '#fff',
                    marginRight: '3px',
                } }, content));
        })));
    };
    Treemap.prototype.render = function () {
        if (!ReactUtils_1.validateWidthHeight(this)) {
            return null;
        }
        var _a = this.props, width = _a.width, height = _a.height, className = _a.className, style = _a.style, children = _a.children, type = _a.type, others = __rest(_a, ["width", "height", "className", "style", "children", "type"]);
        var attrs = types_1.filterProps(others);
        return (react_1.default.createElement("div", { className: classnames_1.default('recharts-wrapper', className), style: __assign(__assign({}, style), { position: 'relative', cursor: 'default', width: width, height: height }) },
            react_1.default.createElement(Surface_1.Surface, __assign({}, attrs, { width: width, height: type === 'nest' ? height - 30 : height }),
                this.renderAllNodes(),
                ReactUtils_1.filterSvgElements(children)),
            this.renderTooltip(),
            type === 'nest' && this.renderNestIndex()));
    };
    Treemap.displayName = 'Treemap';
    Treemap.defaultProps = {
        aspectRatio: 0.5 * (1 + Math.sqrt(5)),
        dataKey: 'value',
        type: 'flat',
        isAnimationActive: !Global_1.Global.isSsr,
        isUpdateAnimationActive: !Global_1.Global.isSsr,
        animationBegin: 0,
        animationDuration: 1500,
        animationEasing: 'linear',
    };
    return Treemap;
}(react_1.PureComponent));
exports.Treemap = Treemap;
//# sourceMappingURL=Treemap.js.map