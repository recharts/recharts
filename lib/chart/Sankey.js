"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sankey = void 0;

var _get2 = _interopRequireDefault(require("lodash/get"));

var _isFunction2 = _interopRequireDefault(require("lodash/isFunction"));

var _sumBy2 = _interopRequireDefault(require("lodash/sumBy"));

var _min2 = _interopRequireDefault(require("lodash/min"));

var _maxBy2 = _interopRequireDefault(require("lodash/maxBy"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Surface = require("../container/Surface");

var _Layer = require("../container/Layer");

var _Tooltip = require("../component/Tooltip");

var _Rectangle = require("../shape/Rectangle");

var _ShallowEqual = require("../util/ShallowEqual");

var _ReactUtils = require("../util/ReactUtils");

var _ChartUtils = require("../util/ChartUtils");

var _types = require("../util/types");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultCoordinateOfTooltip = {
  x: 0,
  y: 0
};

var interpolationGenerator = function interpolationGenerator(a, b) {
  var ka = +a;
  var kb = b - ka;
  return function (t) {
    return ka + kb * t;
  };
};

var centerY = function centerY(node) {
  return node.y + node.dy / 2;
};

var getValue = function getValue(entry) {
  return entry && entry.value || 0;
};

var getSumOfIds = function getSumOfIds(links, ids) {
  return ids.reduce(function (result, id) {
    return result + getValue(links[id]);
  }, 0);
};

var getSumWithWeightedSource = function getSumWithWeightedSource(tree, links, ids) {
  return ids.reduce(function (result, id) {
    var link = links[id];
    var sourceNode = tree[link.source];
    return result + centerY(sourceNode) * getValue(links[id]);
  }, 0);
};

var getSumWithWeightedTarget = function getSumWithWeightedTarget(tree, links, ids) {
  return ids.reduce(function (result, id) {
    var link = links[id];
    var targetNode = tree[link.target];
    return result + centerY(targetNode) * getValue(links[id]);
  }, 0);
};

var ascendingY = function ascendingY(a, b) {
  return a.y - b.y;
};

var searchTargetsAndSources = function searchTargetsAndSources(links, id) {
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

  return {
    sourceNodes: sourceNodes,
    sourceLinks: sourceLinks,
    targetLinks: targetLinks,
    targetNodes: targetNodes
  };
};

var updateDepthOfTargets = function updateDepthOfTargets(tree, curNode) {
  var targetNodes = curNode.targetNodes;

  for (var i = 0, len = targetNodes.length; i < len; i++) {
    var target = tree[targetNodes[i]];

    if (target) {
      target.depth = Math.max(curNode.depth + 1, target.depth);
      updateDepthOfTargets(tree, target);
    }
  }
};

var getNodesTree = function getNodesTree(_ref, width, nodeWidth) {
  var nodes = _ref.nodes,
      links = _ref.links;
  var tree = nodes.map(function (entry, index) {
    var result = searchTargetsAndSources(links, index);
    return _objectSpread(_objectSpread(_objectSpread({}, entry), result), {}, {
      value: Math.max(getSumOfIds(links, result.sourceLinks), getSumOfIds(links, result.targetLinks)),
      depth: 0
    });
  });

  for (var i = 0, len = tree.length; i < len; i++) {
    var node = tree[i];

    if (!node.sourceNodes.length) {
      updateDepthOfTargets(tree, node);
    }
  }

  var maxDepth = (0, _maxBy2["default"])(tree, function (entry) {
    return entry.depth;
  }).depth;

  if (maxDepth >= 1) {
    var childWidth = (width - nodeWidth) / maxDepth;

    for (var _i = 0, _len = tree.length; _i < _len; _i++) {
      var _node = tree[_i];

      if (!_node.targetNodes.length) {
        _node.depth = maxDepth;
      }

      _node.x = _node.depth * childWidth;
      _node.dx = nodeWidth;
    }
  }

  return {
    tree: tree,
    maxDepth: maxDepth
  };
};

var getDepthTree = function getDepthTree(tree) {
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

var updateYOfTree = function updateYOfTree(depthTree, height, nodePadding, links) {
  var yRatio = (0, _min2["default"])(depthTree.map(function (nodes) {
    return (height - (nodes.length - 1) * nodePadding) / (0, _sumBy2["default"])(nodes, getValue);
  }));

  for (var d = 0, maxDepth = depthTree.length; d < maxDepth; d++) {
    for (var i = 0, len = depthTree[d].length; i < len; i++) {
      var node = depthTree[d][i];
      node.y = i;
      node.dy = node.value * yRatio;
    }
  }

  return links.map(function (link) {
    return _objectSpread(_objectSpread({}, link), {}, {
      dy: getValue(link) * yRatio
    });
  });
};

var resolveCollisions = function resolveCollisions(depthTree, height, nodePadding) {
  for (var i = 0, len = depthTree.length; i < len; i++) {
    var nodes = depthTree[i];
    var n = nodes.length; // Sort by the value of y

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

    for (var _j = n - 1; _j >= 0; _j--) {
      var _node2 = nodes[_j];

      var _dy = _node2.y + _node2.dy + nodePadding - y0;

      if (_dy > 0) {
        _node2.y -= _dy;
        y0 = _node2.y;
      } else {
        break;
      }
    }
  }
};

var relaxLeftToRight = function relaxLeftToRight(tree, depthTree, links, alpha) {
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

var relaxRightToLeft = function relaxRightToLeft(tree, depthTree, links, alpha) {
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

var updateYOfLinks = function updateYOfLinks(tree, links) {
  for (var i = 0, len = tree.length; i < len; i++) {
    var node = tree[i];
    var sy = 0;
    var ty = 0;
    node.targetLinks.sort(function (a, b) {
      return tree[links[a].target].y - tree[links[b].target].y;
    });
    node.sourceLinks.sort(function (a, b) {
      return tree[links[a].source].y - tree[links[b].source].y;
    });

    for (var j = 0, tLen = node.targetLinks.length; j < tLen; j++) {
      var link = links[node.targetLinks[j]];

      if (link) {
        link.sy = sy;
        sy += link.dy;
      }
    }

    for (var _j2 = 0, sLen = node.sourceLinks.length; _j2 < sLen; _j2++) {
      var _link = links[node.sourceLinks[_j2]];

      if (_link) {
        _link.ty = ty;
        ty += _link.dy;
      }
    }
  }
};

var computeData = function computeData(_ref2) {
  var data = _ref2.data,
      width = _ref2.width,
      height = _ref2.height,
      iterations = _ref2.iterations,
      nodeWidth = _ref2.nodeWidth,
      nodePadding = _ref2.nodePadding;
  var links = data.links;

  var _getNodesTree = getNodesTree(data, width, nodeWidth),
      tree = _getNodesTree.tree;

  var depthTree = getDepthTree(tree);
  var newLinks = updateYOfTree(depthTree, height, nodePadding, links);
  resolveCollisions(depthTree, height, nodePadding);
  var alpha = 1;

  for (var i = 1; i <= iterations; i++) {
    relaxRightToLeft(tree, depthTree, newLinks, alpha *= 0.99);
    resolveCollisions(depthTree, height, nodePadding);
    relaxLeftToRight(tree, depthTree, newLinks, alpha);
    resolveCollisions(depthTree, height, nodePadding);
  }

  updateYOfLinks(tree, newLinks);
  return {
    nodes: tree,
    links: newLinks
  };
};

var getCoordinateOfTooltip = function getCoordinateOfTooltip(el, type) {
  if (type === 'node') {
    return {
      x: el.x + el.width / 2,
      y: el.y + el.height / 2
    };
  }

  return {
    x: (el.sourceX + el.targetX) / 2,
    y: (el.sourceY + el.targetY) / 2
  };
};

var getPayloadOfTooltip = function getPayloadOfTooltip(el, type, nameKey) {
  var payload = el.payload;

  if (type === 'node') {
    return [{
      payload: el,
      name: (0, _ChartUtils.getValueByDataKey)(payload, nameKey, ''),
      value: (0, _ChartUtils.getValueByDataKey)(payload, 'value')
    }];
  }

  if (payload.source && payload.target) {
    var sourceName = (0, _ChartUtils.getValueByDataKey)(payload.source, nameKey, '');
    var targetName = (0, _ChartUtils.getValueByDataKey)(payload.target, nameKey, '');
    return [{
      payload: el,
      name: "".concat(sourceName, " - ").concat(targetName),
      value: (0, _ChartUtils.getValueByDataKey)(payload, 'value')
    }];
  }

  return [];
};

var Sankey = /*#__PURE__*/function (_PureComponent) {
  _inherits(Sankey, _PureComponent);

  var _super = _createSuper(Sankey);

  function Sankey() {
    var _this;

    _classCallCheck(this, Sankey);

    for (var _len2 = arguments.length, args = new Array(_len2), _key = 0; _key < _len2; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      activeElement: null,
      activeElementType: null,
      isTooltipActive: false,
      nodes: [],
      links: []
    };
    return _this;
  }

  _createClass(Sankey, [{
    key: "handleMouseEnter",
    value: function handleMouseEnter(el, type, e) {
      var _this$props = this.props,
          onMouseEnter = _this$props.onMouseEnter,
          children = _this$props.children;
      var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip.Tooltip.displayName);

      if (tooltipItem) {
        this.setState({
          activeElement: el,
          activeElementType: type,
          isTooltipActive: true
        }, function () {
          if (onMouseEnter) {
            onMouseEnter(el, type, e);
          }
        });
      } else if (onMouseEnter) {
        onMouseEnter(el, type, e);
      }
    }
  }, {
    key: "handleMouseLeave",
    value: function handleMouseLeave(el, type, e) {
      var _this$props2 = this.props,
          onMouseLeave = _this$props2.onMouseLeave,
          children = _this$props2.children;
      var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip.Tooltip.displayName);

      if (tooltipItem) {
        this.setState({
          isTooltipActive: false
        }, function () {
          if (onMouseLeave) {
            onMouseLeave(el, type, e);
          }
        });
      } else if (onMouseLeave) {
        onMouseLeave(el, type, e);
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick(el, type, e) {
      var onClick = this.props.onClick;
      if (onClick) onClick(el, type, e);
    }
  }, {
    key: "renderLinks",
    value: function renderLinks(links, nodes) {
      var _this2 = this;

      var _this$props3 = this.props,
          linkCurvature = _this$props3.linkCurvature,
          linkContent = _this$props3.link,
          margin = _this$props3.margin;
      var top = (0, _get2["default"])(margin, 'top') || 0;
      var left = (0, _get2["default"])(margin, 'left') || 0;
      return /*#__PURE__*/_react["default"].createElement(_Layer.Layer, {
        className: "recharts-sankey-links",
        key: "recharts-sankey-links"
      }, links.map(function (link, i) {
        var sourceRelativeY = link.sy,
            targetRelativeY = link.ty,
            linkWidth = link.dy;
        var source = nodes[link.source];
        var target = nodes[link.target];
        var sourceX = source.x + source.dx + left;
        var targetX = target.x + left;
        var interpolationFunc = interpolationGenerator(sourceX, targetX);
        var sourceControlX = interpolationFunc(linkCurvature);
        var targetControlX = interpolationFunc(1 - linkCurvature);
        var sourceY = source.y + sourceRelativeY + linkWidth / 2 + top;
        var targetY = target.y + targetRelativeY + linkWidth / 2 + top;

        var linkProps = _objectSpread({
          sourceX: sourceX,
          targetX: targetX,
          sourceY: sourceY,
          targetY: targetY,
          sourceControlX: sourceControlX,
          targetControlX: targetControlX,
          sourceRelativeY: sourceRelativeY,
          targetRelativeY: targetRelativeY,
          linkWidth: linkWidth,
          index: i,
          payload: _objectSpread(_objectSpread({}, link), {}, {
            source: source,
            target: target
          })
        }, (0, _types.filterProps)(linkContent));

        var events = {
          onMouseEnter: _this2.handleMouseEnter.bind(_this2, linkProps, 'link'),
          onMouseLeave: _this2.handleMouseLeave.bind(_this2, linkProps, 'link'),
          onClick: _this2.handleClick.bind(_this2, linkProps, 'link')
        };
        return (
          /*#__PURE__*/
          // eslint-disable-next-line react/no-array-index-key
          _react["default"].createElement(_Layer.Layer, _extends({
            key: "link".concat(i)
          }, events), _this2.constructor.renderLinkItem(linkContent, linkProps))
        );
      }));
    }
  }, {
    key: "renderNodes",
    value: function renderNodes(nodes) {
      var _this3 = this;

      var _this$props4 = this.props,
          nodeContent = _this$props4.node,
          margin = _this$props4.margin;
      var top = (0, _get2["default"])(margin, 'top') || 0;
      var left = (0, _get2["default"])(margin, 'left') || 0;
      return /*#__PURE__*/_react["default"].createElement(_Layer.Layer, {
        className: "recharts-sankey-nodes",
        key: "recharts-sankey-nodes"
      }, nodes.map(function (node, i) {
        var x = node.x,
            y = node.y,
            dx = node.dx,
            dy = node.dy;

        var nodeProps = _objectSpread(_objectSpread({}, (0, _types.filterProps)(nodeContent)), {}, {
          x: x + left,
          y: y + top,
          width: dx,
          height: dy,
          index: i,
          payload: node
        });

        var events = {
          onMouseEnter: _this3.handleMouseEnter.bind(_this3, nodeProps, 'node'),
          onMouseLeave: _this3.handleMouseLeave.bind(_this3, nodeProps, 'node'),
          onClick: _this3.handleClick.bind(_this3, nodeProps, 'node')
        };
        return (
          /*#__PURE__*/
          // eslint-disable-next-line react/no-array-index-key
          _react["default"].createElement(_Layer.Layer, _extends({
            key: "node".concat(i)
          }, events), _this3.constructor.renderNodeItem(nodeContent, nodeProps))
        );
      }));
    }
  }, {
    key: "renderTooltip",
    value: function renderTooltip() {
      var _this$props5 = this.props,
          children = _this$props5.children,
          width = _this$props5.width,
          height = _this$props5.height,
          nameKey = _this$props5.nameKey;
      var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip.Tooltip.displayName);

      if (!tooltipItem) {
        return null;
      }

      var _this$state = this.state,
          isTooltipActive = _this$state.isTooltipActive,
          activeElement = _this$state.activeElement,
          activeElementType = _this$state.activeElementType;
      var viewBox = {
        x: 0,
        y: 0,
        width: width,
        height: height
      };
      var coordinate = activeElement ? getCoordinateOfTooltip(activeElement, activeElementType) : defaultCoordinateOfTooltip;
      var payload = activeElement ? getPayloadOfTooltip(activeElement, activeElementType, nameKey) : [];
      return /*#__PURE__*/_react["default"].cloneElement(tooltipItem, {
        viewBox: viewBox,
        active: isTooltipActive,
        coordinate: coordinate,
        label: '',
        payload: payload
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (!(0, _ReactUtils.validateWidthHeight)(this)) {
        return null;
      }

      var _this$props6 = this.props,
          width = _this$props6.width,
          height = _this$props6.height,
          className = _this$props6.className,
          style = _this$props6.style,
          children = _this$props6.children,
          others = _objectWithoutProperties(_this$props6, ["width", "height", "className", "style", "children"]);

      var _this$state2 = this.state,
          links = _this$state2.links,
          nodes = _this$state2.nodes;
      var attrs = (0, _types.filterProps)(others);
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])('recharts-wrapper', className),
        style: _objectSpread(_objectSpread({}, style), {}, {
          position: 'relative',
          cursor: 'default',
          width: width,
          height: height
        })
      }, /*#__PURE__*/_react["default"].createElement(_Surface.Surface, _extends({}, attrs, {
        width: width,
        height: height
      }), (0, _ReactUtils.filterSvgElements)(children), this.renderLinks(links, nodes), this.renderNodes(nodes)), this.renderTooltip());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var data = nextProps.data,
          width = nextProps.width,
          height = nextProps.height,
          margin = nextProps.margin,
          iterations = nextProps.iterations,
          nodeWidth = nextProps.nodeWidth,
          nodePadding = nextProps.nodePadding;

      if (data !== prevState.prevData || width !== prevState.prevWidth || height !== prevState.prevHeight || !(0, _ShallowEqual.shallowEqual)(margin, prevState.prevMargin) || iterations !== prevState.prevIterations || nodeWidth !== prevState.prevNodeWidth || nodePadding !== prevState.prevNodePadding) {
        var contentWidth = width - (margin && margin.left || 0) - (margin && margin.right || 0);
        var contentHeight = height - (margin && margin.top || 0) - (margin && margin.bottom || 0);

        var _computeData = computeData({
          data: data,
          width: contentWidth,
          height: contentHeight,
          iterations: iterations,
          nodeWidth: nodeWidth,
          nodePadding: nodePadding
        }),
            links = _computeData.links,
            nodes = _computeData.nodes;

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
          prevIterations: iterations
        };
      }

      return null;
    }
  }, {
    key: "renderLinkItem",
    value: function renderLinkItem(option, props) {
      if ( /*#__PURE__*/_react["default"].isValidElement(option)) {
        return /*#__PURE__*/_react["default"].cloneElement(option, props);
      }

      if ((0, _isFunction2["default"])(option)) {
        return option(props);
      }

      var sourceX = props.sourceX,
          sourceY = props.sourceY,
          sourceControlX = props.sourceControlX,
          targetX = props.targetX,
          targetY = props.targetY,
          targetControlX = props.targetControlX,
          linkWidth = props.linkWidth,
          others = _objectWithoutProperties(props, ["sourceX", "sourceY", "sourceControlX", "targetX", "targetY", "targetControlX", "linkWidth"]);

      return /*#__PURE__*/_react["default"].createElement("path", _extends({
        className: "recharts-sankey-link",
        d: "\n          M".concat(sourceX, ",").concat(sourceY, "\n          C").concat(sourceControlX, ",").concat(sourceY, " ").concat(targetControlX, ",").concat(targetY, " ").concat(targetX, ",").concat(targetY, "\n        "),
        fill: "none",
        stroke: "#333",
        strokeWidth: linkWidth,
        strokeOpacity: "0.2"
      }, (0, _types.filterProps)(others)));
    }
  }, {
    key: "renderNodeItem",
    value: function renderNodeItem(option, props) {
      if ( /*#__PURE__*/_react["default"].isValidElement(option)) {
        return /*#__PURE__*/_react["default"].cloneElement(option, props);
      }

      if ((0, _isFunction2["default"])(option)) {
        return option(props);
      }

      return /*#__PURE__*/_react["default"].createElement(_Rectangle.Rectangle, _extends({
        className: "recharts-sankey-node",
        fill: "#0088fe",
        fillOpacity: "0.8"
      }, (0, _types.filterProps)(props)));
    }
  }]);

  return Sankey;
}(_react.PureComponent);

exports.Sankey = Sankey;
Sankey.displayName = 'Sankey';
Sankey.defaultProps = {
  nameKey: 'name',
  dataKey: 'value',
  nodePadding: 10,
  nodeWidth: 10,
  linkCurvature: 0.5,
  iterations: 32,
  margin: {
    top: 5,
    right: 5,
    bottom: 5,
    left: 5
  }
};