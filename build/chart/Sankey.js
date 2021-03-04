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
exports.Sankey = void 0;
var react_1 = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var lodash_1 = __importDefault(require("lodash"));
var Surface_1 = require("../container/Surface");
var Layer_1 = require("../container/Layer");
var Tooltip_1 = require("../component/Tooltip");
var Rectangle_1 = require("../shape/Rectangle");
var ShallowEqual_1 = require("../util/ShallowEqual");
var ReactUtils_1 = require("../util/ReactUtils");
var ChartUtils_1 = require("../util/ChartUtils");
var types_1 = require("../util/types");
var defaultCoordinateOfTooltip = { x: 0, y: 0 };
var interpolationGenerator = function (a, b) {
    var ka = +a;
    var kb = b - ka;
    return function (t) { return ka + kb * t; };
};
var centerY = function (node) { return node.y + node.dy / 2; };
var getValue = function (entry) { return (entry && entry.value) || 0; };
var getSumOfIds = function (links, ids) {
    return ids.reduce(function (result, id) { return result + getValue(links[id]); }, 0);
};
var getSumWithWeightedSource = function (tree, links, ids) {
    return ids.reduce(function (result, id) {
        var link = links[id];
        var sourceNode = tree[link.source];
        return result + centerY(sourceNode) * getValue(links[id]);
    }, 0);
};
var getSumWithWeightedTarget = function (tree, links, ids) {
    return ids.reduce(function (result, id) {
        var link = links[id];
        var targetNode = tree[link.target];
        return result + centerY(targetNode) * getValue(links[id]);
    }, 0);
};
var ascendingY = function (a, b) { return a.y - b.y; };
var searchTargetsAndSources = function (links, id) {
    var sourceNodes = [];
    var sourceLinks = [];
    var targetNodes = [];
    var targetLinks = [];
    for (var i = 0, len = links.length; i < len; i++) {
        var link = links[i];
        if (link.source === id) {
            targetNodes.push(link.target);
            targetLinks.push(i);
        }
        if (link.target === id) {
            sourceNodes.push(link.source);
            sourceLinks.push(i);
        }
    }
    return { sourceNodes: sourceNodes, sourceLinks: sourceLinks, targetLinks: targetLinks, targetNodes: targetNodes };
};
var updateDepthOfTargets = function (tree, curNode) {
    var targetNodes = curNode.targetNodes;
    for (var i = 0, len = targetNodes.length; i < len; i++) {
        var target = tree[targetNodes[i]];
        if (target) {
            target.depth = Math.max(curNode.depth + 1, target.depth);
            updateDepthOfTargets(tree, target);
        }
    }
};
var getNodesTree = function (_a, width, nodeWidth) {
    var nodes = _a.nodes, links = _a.links;
    var tree = nodes.map(function (entry, index) {
        var result = searchTargetsAndSources(links, index);
        return __assign(__assign(__assign({}, entry), result), { value: Math.max(getSumOfIds(links, result.sourceLinks), getSumOfIds(links, result.targetLinks)), depth: 0 });
    });
    for (var i = 0, len = tree.length; i < len; i++) {
        var node = tree[i];
        if (!node.sourceNodes.length) {
            updateDepthOfTargets(tree, node);
        }
    }
    var maxDepth = lodash_1.default.maxBy(tree, function (entry) { return entry.depth; }).depth;
    if (maxDepth >= 1) {
        var childWidth = (width - nodeWidth) / maxDepth;
        for (var i = 0, len = tree.length; i < len; i++) {
            var node = tree[i];
            if (!node.targetNodes.length) {
                node.depth = maxDepth;
            }
            node.x = node.depth * childWidth;
            node.dx = nodeWidth;
        }
    }
    return { tree: tree, maxDepth: maxDepth };
};
var getDepthTree = function (tree) {
    var result = [];
    for (var i = 0, len = tree.length; i < len; i++) {
        var node = tree[i];
        if (!result[node.depth]) {
            result[node.depth] = [];
        }
        result[node.depth].push(node);
    }
    return result;
};
var updateYOfTree = function (depthTree, height, nodePadding, links) {
    var yRatio = lodash_1.default.min(depthTree.map(function (nodes) { return (height - (nodes.length - 1) * nodePadding) / lodash_1.default.sumBy(nodes, getValue); }));
    for (var d = 0, maxDepth = depthTree.length; d < maxDepth; d++) {
        for (var i = 0, len = depthTree[d].length; i < len; i++) {
            var node = depthTree[d][i];
            node.y = i;
            node.dy = node.value * yRatio;
        }
    }
    return links.map(function (link) { return (__assign(__assign({}, link), { dy: getValue(link) * yRatio })); });
};
var resolveCollisions = function (depthTree, height, nodePadding) {
    for (var i = 0, len = depthTree.length; i < len; i++) {
        var nodes = depthTree[i];
        var n = nodes.length;
        nodes.sort(ascendingY);
        var y0 = 0;
        for (var j = 0; j < n; j++) {
            var node = nodes[j];
            var dy = y0 - node.y;
            if (dy > 0) {
                node.y += dy;
            }
            y0 = node.y + node.dy + nodePadding;
        }
        y0 = height + nodePadding;
        for (var j = n - 1; j >= 0; j--) {
            var node = nodes[j];
            var dy = node.y + node.dy + nodePadding - y0;
            if (dy > 0) {
                node.y -= dy;
                y0 = node.y;
            }
            else {
                break;
            }
        }
    }
};
var relaxLeftToRight = function (tree, depthTree, links, alpha) {
    for (var i = 0, maxDepth = depthTree.length; i < maxDepth; i++) {
        var nodes = depthTree[i];
        for (var j = 0, len = nodes.length; j < len; j++) {
            var node = nodes[j];
            if (node.sourceLinks.length) {
                var sourceSum = getSumOfIds(links, node.sourceLinks);
                var weightedSum = getSumWithWeightedSource(tree, links, node.sourceLinks);
                var y = weightedSum / sourceSum;
                node.y += (y - centerY(node)) * alpha;
            }
        }
    }
};
var relaxRightToLeft = function (tree, depthTree, links, alpha) {
    for (var i = depthTree.length - 1; i >= 0; i--) {
        var nodes = depthTree[i];
        for (var j = 0, len = nodes.length; j < len; j++) {
            var node = nodes[j];
            if (node.targetLinks.length) {
                var targetSum = getSumOfIds(links, node.targetLinks);
                var weightedSum = getSumWithWeightedTarget(tree, links, node.targetLinks);
                var y = weightedSum / targetSum;
                node.y += (y - centerY(node)) * alpha;
            }
        }
    }
};
var updateYOfLinks = function (tree, links) {
    for (var i = 0, len = tree.length; i < len; i++) {
        var node = tree[i];
        var sy = 0;
        var ty = 0;
        node.targetLinks.sort(function (a, b) { return tree[links[a].target].y - tree[links[b].target].y; });
        node.sourceLinks.sort(function (a, b) { return tree[links[a].source].y - tree[links[b].source].y; });
        for (var j = 0, tLen = node.targetLinks.length; j < tLen; j++) {
            var link = links[node.targetLinks[j]];
            if (link) {
                link.sy = sy;
                sy += link.dy;
            }
        }
        for (var j = 0, sLen = node.sourceLinks.length; j < sLen; j++) {
            var link = links[node.sourceLinks[j]];
            if (link) {
                link.ty = ty;
                ty += link.dy;
            }
        }
    }
};
var computeData = function (_a) {
    var data = _a.data, width = _a.width, height = _a.height, iterations = _a.iterations, nodeWidth = _a.nodeWidth, nodePadding = _a.nodePadding;
    var links = data.links;
    var tree = getNodesTree(data, width, nodeWidth).tree;
    var depthTree = getDepthTree(tree);
    var newLinks = updateYOfTree(depthTree, height, nodePadding, links);
    resolveCollisions(depthTree, height, nodePadding);
    var alpha = 1;
    for (var i = 1; i <= iterations; i++) {
        relaxRightToLeft(tree, depthTree, newLinks, (alpha *= 0.99));
        resolveCollisions(depthTree, height, nodePadding);
        relaxLeftToRight(tree, depthTree, newLinks, alpha);
        resolveCollisions(depthTree, height, nodePadding);
    }
    updateYOfLinks(tree, newLinks);
    return { nodes: tree, links: newLinks };
};
var getCoordinateOfTooltip = function (el, type) {
    if (type === 'node') {
        return { x: el.x + el.width / 2, y: el.y + el.height / 2 };
    }
    return {
        x: (el.sourceX + el.targetX) / 2,
        y: (el.sourceY + el.targetY) / 2,
    };
};
var getPayloadOfTooltip = function (el, type, nameKey) {
    var payload = el.payload;
    if (type === 'node') {
        return [
            {
                payload: el,
                name: ChartUtils_1.getValueByDataKey(payload, nameKey, ''),
                value: ChartUtils_1.getValueByDataKey(payload, 'value'),
            },
        ];
    }
    if (payload.source && payload.target) {
        var sourceName = ChartUtils_1.getValueByDataKey(payload.source, nameKey, '');
        var targetName = ChartUtils_1.getValueByDataKey(payload.target, nameKey, '');
        return [
            {
                payload: el,
                name: sourceName + " - " + targetName,
                value: ChartUtils_1.getValueByDataKey(payload, 'value'),
            },
        ];
    }
    return [];
};
var Sankey = (function (_super) {
    __extends(Sankey, _super);
    function Sankey() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            activeElement: null,
            activeElementType: null,
            isTooltipActive: false,
            nodes: [],
            links: [],
        };
        return _this;
    }
    Sankey.getDerivedStateFromProps = function (nextProps, prevState) {
        var data = nextProps.data, width = nextProps.width, height = nextProps.height, margin = nextProps.margin, iterations = nextProps.iterations, nodeWidth = nextProps.nodeWidth, nodePadding = nextProps.nodePadding;
        if (data !== prevState.prevData ||
            width !== prevState.prevWidth ||
            height !== prevState.prevHeight ||
            !ShallowEqual_1.shallowEqual(margin, prevState.prevMargin) ||
            iterations !== prevState.prevIterations ||
            nodeWidth !== prevState.prevNodeWidth ||
            nodePadding !== prevState.prevNodePadding) {
            var contentWidth = width - ((margin && margin.left) || 0) - ((margin && margin.right) || 0);
            var contentHeight = height - ((margin && margin.top) || 0) - ((margin && margin.bottom) || 0);
            var _a = computeData({
                data: data,
                width: contentWidth,
                height: contentHeight,
                iterations: iterations,
                nodeWidth: nodeWidth,
                nodePadding: nodePadding,
            }), links = _a.links, nodes = _a.nodes;
            return {
                activeElement: null,
                activeElementType: null,
                isTooltipActive: false,
                nodes: nodes,
                links: links,
                prevData: data,
                prevWidth: iterations,
                prevHeight: height,
                prevMargin: margin,
                prevNodePadding: nodePadding,
                prevNodeWidth: nodeWidth,
                prevIterations: iterations,
            };
        }
        return null;
    };
    Sankey.prototype.handleMouseEnter = function (el, type, e) {
        var _a = this.props, onMouseEnter = _a.onMouseEnter, children = _a.children;
        var tooltipItem = ReactUtils_1.findChildByType(children, Tooltip_1.Tooltip.displayName);
        if (tooltipItem) {
            this.setState({
                activeElement: el,
                activeElementType: type,
                isTooltipActive: true,
            }, function () {
                if (onMouseEnter) {
                    onMouseEnter(el, type, e);
                }
            });
        }
        else if (onMouseEnter) {
            onMouseEnter(el, type, e);
        }
    };
    Sankey.prototype.handleMouseLeave = function (el, type, e) {
        var _a = this.props, onMouseLeave = _a.onMouseLeave, children = _a.children;
        var tooltipItem = ReactUtils_1.findChildByType(children, Tooltip_1.Tooltip.displayName);
        if (tooltipItem) {
            this.setState({
                isTooltipActive: false,
            }, function () {
                if (onMouseLeave) {
                    onMouseLeave(el, type, e);
                }
            });
        }
        else if (onMouseLeave) {
            onMouseLeave(el, type, e);
        }
    };
    Sankey.prototype.handleClick = function (el, type, e) {
        var onClick = this.props.onClick;
        if (onClick)
            onClick(el, type, e);
    };
    Sankey.renderLinkItem = function (option, props) {
        if (react_1.default.isValidElement(option)) {
            return react_1.default.cloneElement(option, props);
        }
        if (lodash_1.default.isFunction(option)) {
            return option(props);
        }
        var sourceX = props.sourceX, sourceY = props.sourceY, sourceControlX = props.sourceControlX, targetX = props.targetX, targetY = props.targetY, targetControlX = props.targetControlX, linkWidth = props.linkWidth, others = __rest(props, ["sourceX", "sourceY", "sourceControlX", "targetX", "targetY", "targetControlX", "linkWidth"]);
        return (react_1.default.createElement("path", __assign({ className: "recharts-sankey-link", d: "\n          M" + sourceX + "," + sourceY + "\n          C" + sourceControlX + "," + sourceY + " " + targetControlX + "," + targetY + " " + targetX + "," + targetY + "\n        ", fill: "none", stroke: "#333", strokeWidth: linkWidth, strokeOpacity: "0.2" }, types_1.filterProps(others))));
    };
    Sankey.prototype.renderLinks = function (links, nodes) {
        var _this = this;
        var _a = this.props, linkCurvature = _a.linkCurvature, linkContent = _a.link, margin = _a.margin;
        var top = lodash_1.default.get(margin, 'top') || 0;
        var left = lodash_1.default.get(margin, 'left') || 0;
        return (react_1.default.createElement(Layer_1.Layer, { className: "recharts-sankey-links", key: "recharts-sankey-links" }, links.map(function (link, i) {
            var sourceRelativeY = link.sy, targetRelativeY = link.ty, linkWidth = link.dy;
            var source = nodes[link.source];
            var target = nodes[link.target];
            var sourceX = source.x + source.dx + left;
            var targetX = target.x + left;
            var interpolationFunc = interpolationGenerator(sourceX, targetX);
            var sourceControlX = interpolationFunc(linkCurvature);
            var targetControlX = interpolationFunc(1 - linkCurvature);
            var sourceY = source.y + sourceRelativeY + linkWidth / 2 + top;
            var targetY = target.y + targetRelativeY + linkWidth / 2 + top;
            var linkProps = __assign({ sourceX: sourceX,
                targetX: targetX,
                sourceY: sourceY,
                targetY: targetY,
                sourceControlX: sourceControlX,
                targetControlX: targetControlX,
                sourceRelativeY: sourceRelativeY,
                targetRelativeY: targetRelativeY,
                linkWidth: linkWidth, index: i, payload: __assign(__assign({}, link), { source: source, target: target }) }, types_1.filterProps(linkContent));
            var events = {
                onMouseEnter: _this.handleMouseEnter.bind(_this, linkProps, 'link'),
                onMouseLeave: _this.handleMouseLeave.bind(_this, linkProps, 'link'),
                onClick: _this.handleClick.bind(_this, linkProps, 'link'),
            };
            return (react_1.default.createElement(Layer_1.Layer, __assign({ key: "link" + i }, events), _this.constructor.renderLinkItem(linkContent, linkProps)));
        })));
    };
    Sankey.renderNodeItem = function (option, props) {
        if (react_1.default.isValidElement(option)) {
            return react_1.default.cloneElement(option, props);
        }
        if (lodash_1.default.isFunction(option)) {
            return option(props);
        }
        return react_1.default.createElement(Rectangle_1.Rectangle, __assign({ className: "recharts-sankey-node", fill: "#0088fe", fillOpacity: "0.8" }, types_1.filterProps(props)));
    };
    Sankey.prototype.renderNodes = function (nodes) {
        var _this = this;
        var _a = this.props, nodeContent = _a.node, margin = _a.margin;
        var top = lodash_1.default.get(margin, 'top') || 0;
        var left = lodash_1.default.get(margin, 'left') || 0;
        return (react_1.default.createElement(Layer_1.Layer, { className: "recharts-sankey-nodes", key: "recharts-sankey-nodes" }, nodes.map(function (node, i) {
            var x = node.x, y = node.y, dx = node.dx, dy = node.dy;
            var nodeProps = __assign(__assign({}, types_1.filterProps(nodeContent)), { x: x + left, y: y + top, width: dx, height: dy, index: i, payload: node });
            var events = {
                onMouseEnter: _this.handleMouseEnter.bind(_this, nodeProps, 'node'),
                onMouseLeave: _this.handleMouseLeave.bind(_this, nodeProps, 'node'),
                onClick: _this.handleClick.bind(_this, nodeProps, 'node'),
            };
            return (react_1.default.createElement(Layer_1.Layer, __assign({ key: "node" + i }, events), _this.constructor.renderNodeItem(nodeContent, nodeProps)));
        })));
    };
    Sankey.prototype.renderTooltip = function () {
        var _a = this.props, children = _a.children, width = _a.width, height = _a.height, nameKey = _a.nameKey;
        var tooltipItem = ReactUtils_1.findChildByType(children, Tooltip_1.Tooltip.displayName);
        if (!tooltipItem) {
            return null;
        }
        var _b = this.state, isTooltipActive = _b.isTooltipActive, activeElement = _b.activeElement, activeElementType = _b.activeElementType;
        var viewBox = { x: 0, y: 0, width: width, height: height };
        var coordinate = activeElement
            ? getCoordinateOfTooltip(activeElement, activeElementType)
            : defaultCoordinateOfTooltip;
        var payload = activeElement ? getPayloadOfTooltip(activeElement, activeElementType, nameKey) : [];
        return react_1.default.cloneElement(tooltipItem, {
            viewBox: viewBox,
            active: isTooltipActive,
            coordinate: coordinate,
            label: '',
            payload: payload,
        });
    };
    Sankey.prototype.render = function () {
        if (!ReactUtils_1.validateWidthHeight(this)) {
            return null;
        }
        var _a = this.props, width = _a.width, height = _a.height, className = _a.className, style = _a.style, children = _a.children, others = __rest(_a, ["width", "height", "className", "style", "children"]);
        var _b = this.state, links = _b.links, nodes = _b.nodes;
        var attrs = types_1.filterProps(others);
        return (react_1.default.createElement("div", { className: classnames_1.default('recharts-wrapper', className), style: __assign(__assign({}, style), { position: 'relative', cursor: 'default', width: width, height: height }) },
            react_1.default.createElement(Surface_1.Surface, __assign({}, attrs, { width: width, height: height }),
                ReactUtils_1.filterSvgElements(children),
                this.renderLinks(links, nodes),
                this.renderNodes(nodes)),
            this.renderTooltip()));
    };
    Sankey.displayName = 'Sankey';
    Sankey.defaultProps = {
        nameKey: 'name',
        dataKey: 'value',
        nodePadding: 10,
        nodeWidth: 10,
        linkCurvature: 0.5,
        iterations: 32,
        margin: { top: 5, right: 5, bottom: 5, left: 5 },
    };
    return Sankey;
}(react_1.PureComponent));
exports.Sankey = Sankey;
//# sourceMappingURL=Sankey.js.map