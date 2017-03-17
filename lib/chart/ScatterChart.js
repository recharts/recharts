'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp2; /**
                              * @fileOverview Scatter Chart
                              */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Surface = require('../container/Surface');

var _Surface2 = _interopRequireDefault(_Surface);

var _Layer = require('../container/Layer');

var _Layer2 = _interopRequireDefault(_Layer);

var _Cell = require('../component/Cell');

var _Cell2 = _interopRequireDefault(_Cell);

var _Legend = require('../component/Legend');

var _Legend2 = _interopRequireDefault(_Legend);

var _Tooltip = require('../component/Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _Cross = require('../shape/Cross');

var _Cross2 = _interopRequireDefault(_Cross);

var _CartesianAxis = require('../cartesian/CartesianAxis');

var _CartesianAxis2 = _interopRequireDefault(_CartesianAxis);

var _CartesianGrid = require('../cartesian/CartesianGrid');

var _CartesianGrid2 = _interopRequireDefault(_CartesianGrid);

var _Scatter = require('../cartesian/Scatter');

var _Scatter2 = _interopRequireDefault(_Scatter);

var _XAxis = require('../cartesian/XAxis');

var _XAxis2 = _interopRequireDefault(_XAxis);

var _YAxis = require('../cartesian/YAxis');

var _YAxis2 = _interopRequireDefault(_YAxis);

var _ZAxis = require('../cartesian/ZAxis');

var _ZAxis2 = _interopRequireDefault(_ZAxis);

var _ReferenceLine = require('../cartesian/ReferenceLine');

var _ReferenceLine2 = _interopRequireDefault(_ReferenceLine);

var _ReferenceDot = require('../cartesian/ReferenceDot');

var _ReferenceDot2 = _interopRequireDefault(_ReferenceDot);

var _ReferenceArea = require('../cartesian/ReferenceArea');

var _ReferenceArea2 = _interopRequireDefault(_ReferenceArea);

var _ReactUtils = require('../util/ReactUtils');

var _PureRender = require('../util/PureRender');

var _PureRender2 = _interopRequireDefault(_PureRender);

var _DataUtils = require('../util/DataUtils');

var _LogUtils = require('../util/LogUtils');

var _CartesianUtils = require('../util/CartesianUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScatterChart = (0, _PureRender2.default)(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(ScatterChart, _Component);

  function ScatterChart() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ScatterChart);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ScatterChart.__proto__ || Object.getPrototypeOf(ScatterChart)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      activeTooltipCoord: { x: 0, y: 0 },
      isTooltipActive: false,
      activeItem: null
    }, _this.handleLegendBBoxUpdate = function (box) {
      if (box && _this.legendInstance) {
        _this.forceUpdate();
      }
    }, _this.handleScatterMouseEnter = function (el) {
      _this.setState({
        isTooltipActive: true,
        activeItem: el,
        activeTooltipCoord: { x: el.cx, y: el.cy }
      });
    }, _this.handleScatterMouseLeave = function () {
      _this.setState({
        isTooltipActive: false
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ScatterChart, [{
    key: 'getComposedData',

    /**
     * Compose the data of each group
     * @param  {Object} item        An instance of Scatter
     * @param  {Array}  data        The original data
     * @param  {Object} xAxis       The configuration of x-axis
     * @param  {Object} yAxis       The configuration of y-axis
     * @param  {Object} zAxis       The configuration of z-axis
     * @return {Array} Composed data
     */
    value: function getComposedData(item, data, xAxis, yAxis, zAxis) {
      var children = item.props.children;

      var xAxisDataKey = xAxis.dataKey;
      var yAxisDataKey = yAxis.dataKey;
      var zAxisDataKey = zAxis.dataKey;
      var cells = (0, _ReactUtils.findAllByType)(children, _Cell2.default);

      return data.map(function (entry, index) {
        return _extends({}, entry, {
          cx: (0, _DataUtils.isNumber)(entry[xAxisDataKey]) ? xAxis.scale(entry[xAxisDataKey]) : null,
          cy: (0, _DataUtils.isNumber)(entry[yAxisDataKey]) ? yAxis.scale(entry[yAxisDataKey]) : null,
          size: zAxisDataKey !== undefined && (0, _DataUtils.isNumber)(entry[zAxisDataKey]) ? zAxis.scale(entry[zAxisDataKey]) : zAxis.range[0],
          node: {
            x: entry[xAxisDataKey],
            y: entry[yAxisDataKey],
            z: zAxisDataKey !== undefined && entry[zAxisDataKey] || '-'
          },
          payload: entry
        }, cells && cells[index] && cells[index].props);
      });
    }
  }, {
    key: 'getDomain',
    value: function getDomain(items, dataKey, axisId, axisType) {
      var domain = items.reduce(function (result, item) {
        return result.concat(item.props.data.map(function (entry) {
          return (0, _DataUtils.getValueByDataKey)(entry, dataKey);
        }));
      }, []);

      if (axisType === 'xAxis' || axisType === 'yAxis') {
        domain = (0, _CartesianUtils.detectReferenceElementsDomain)(this.props.children, domain, axisId, axisType);
      }

      return [Math.min.apply(null, domain), Math.max.apply(null, domain)];
    }

    /**
     * Get the configuration of x-axis or y-axis
     * @param  {String} axisType The type of axis
     * @param  {Array} items     The instances of item
     * @return {Object}          Configuration
     */

  }, {
    key: 'getAxis',
    value: function getAxis() {
      var axisType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'xAxis';
      var items = arguments[1];
      var children = this.props.children;

      var Axis = axisType === 'xAxis' ? _XAxis2.default : _YAxis2.default;
      var axis = (0, _ReactUtils.findChildByType)(children, Axis);

      (0, _LogUtils.warn)(axis, 'recharts: ScatterChart must has %s', Axis.displayName);

      if (axis) {
        var domain = (0, _DataUtils.parseSpecifiedDomain)(axis.props.domain, this.getDomain(items, axis.props.dataKey, axis.props[axisType + 'Id'], axisType), axis.props.allowDataOverflow);

        return _extends({}, axis.props, {
          axisType: axisType,
          domain: domain,
          type: 'number',
          originalDomain: axis.props.domain
        });
      }

      return null;
    }

    /**
     * Get the configuration of z-axis
     * @param  {Array} items The instances of item
     * @return {Object}      Configuration
     */

  }, {
    key: 'getZAxis',
    value: function getZAxis(items) {
      var children = this.props.children;

      var axisItem = (0, _ReactUtils.findChildByType)(children, _ZAxis2.default);
      var axisProps = axisItem && axisItem.props || _ZAxis2.default.defaultProps;
      var domain = axisProps.dataKey ? this.getDomain(items, axisProps.dataKey) : [-1, 1];

      return _extends({}, axisProps, {
        domain: domain,
        scale: (0, _DataUtils.parseScale)(axisProps).domain(domain).range(axisProps.range)
      });
    }
  }, {
    key: 'getOffset',
    value: function getOffset(items, xAxis, yAxis) {
      var _props = this.props,
          width = _props.width,
          height = _props.height,
          margin = _props.margin,
          children = _props.children;

      var legendItem = (0, _ReactUtils.findChildByType)(children, _Legend2.default);

      var offset = {
        left: margin.left || 0, right: margin.right || 0,
        top: margin.top || 0, bottom: margin.bottom || 0
      };

      if (!xAxis.hide && !xAxis.mirror) {
        offset[xAxis.orientation] += xAxis.height;
      }
      if (!yAxis.hide && !yAxis.mirror) {
        offset[yAxis.orientation] += yAxis.width;
      }

      if (legendItem && this.legendInstance) {
        var legendBox = this.legendInstance.getBBox();
        offset = (0, _CartesianUtils.appendOffsetOfLegend)(offset, items, this.props, legendBox);
      }

      return _extends({}, offset, {
        width: width - offset.left - offset.right,
        height: height - offset.top - offset.bottom
      });
    }
    /**
     * Calculate the scale function, position, width, height of axes
     * @param  {Object} axis     The configuration of axis
     * @param  {Object} offset   The offset of main part in the svg element
     * @param  {Object} axisType The type of axis, x-axis or y-axis
     * @return {Object} Configuration
     */

  }, {
    key: 'getFormatAxis',
    value: function getFormatAxis(axis, offset, axisType) {
      var orientation = axis.orientation,
          domain = axis.domain,
          mirror = axis.mirror,
          tickFormat = axis.tickFormat,
          _axis$padding = axis.padding,
          padding = _axis$padding === undefined ? {} : _axis$padding;

      var position = {
        left: offset.left,
        right: offset.left + offset.width,
        top: offset.top,
        bottom: offset.top + offset.height
      };
      var range = axisType === 'xAxis' ? [offset.left + (padding.left || 0), offset.left + offset.width - (padding.right || 0)] : [offset.top + offset.height - (padding.bottom || 0), offset.top + (padding.top || 0)];

      var scale = (0, _DataUtils.parseScale)(axis).domain(domain).range(range);
      var ticks = (0, _CartesianUtils.getTicksOfScale)(scale, axis);
      if (tickFormat) {
        scale.tickFormat(tickFormat);
      }

      var x = void 0,
          y = void 0;

      if (axisType === 'xAxis') {
        var needSpace = orientation === 'top' && !mirror || orientation === 'bottom' && mirror;
        x = offset.left;
        y = position[orientation] - needSpace * axis.height;
      } else {
        var _needSpace = orientation === 'left' && !mirror || orientation === 'right' && mirror;
        x = position[orientation] - _needSpace * axis.width;
        y = offset.top;
      }

      return _extends({}, axis, ticks, {
        scale: scale,
        width: axisType === 'xAxis' ? offset.width : axis.width,
        height: axisType === 'yAxis' ? offset.height : axis.height,
        x: x, y: y
      });
    }

    /**
     * Get the content to be displayed in the tooltip
     * @param  {Object} data  The data of active item
     * @param  {Object} xAxis The configuration of x-axis
     * @param  {Object} yAxis The configuration of y-axis
     * @param  {Object} zAxis The configuration of z-axis
     * @return {Array}        The content of tooltip
     */

  }, {
    key: 'getTooltipContent',
    value: function getTooltipContent(data, xAxis, yAxis, zAxis) {
      if (!data) {
        return null;
      }

      var payload = data.payload,
          node = data.node;


      var content = [{
        name: xAxis.name || xAxis.dataKey,
        unit: xAxis.unit || '',
        value: node.x,
        payload: payload
      }, {
        name: yAxis.name || yAxis.dataKey,
        unit: yAxis.unit || '',
        value: node.y,
        payload: payload
      }];

      if (node.z && node.z !== '-') {
        content.push({
          name: zAxis.name || zAxis.dataKey,
          unit: zAxis.unit || '',
          value: node.z,
          payload: payload
        });
      }

      return content;
    }
    /**
     * The handler of mouse entering a scatter
     * @param {Object} el The active scatter
     * @param {Object} e  Event object
     * @return {Object} no return
     */


    /**
     * The handler of mouse leaving a scatter
     * @return {Object} no return
     */

  }, {
    key: 'renderTooltip',


    /**
     * Draw Tooltip
     * @param  {Array} items   The instances of Scatter
     * @param  {Object} xAxis  The configuration of x-axis
     * @param  {Object} yAxis  The configuration of y-axis
     * @param  {Object} zAxis  The configuration of z-axis
     * @param  {Object} offset The offset of main part in the svg element
     * @return {ReactElement}  The instance of Tooltip
     */
    value: function renderTooltip(items, xAxis, yAxis, zAxis, offset) {
      var children = this.props.children;

      var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip2.default);

      if (!tooltipItem) {
        return null;
      }

      var _state = this.state,
          isTooltipActive = _state.isTooltipActive,
          activeItem = _state.activeItem,
          activeTooltipCoord = _state.activeTooltipCoord;

      var viewBox = {
        x: offset.left,
        y: offset.top,
        width: offset.width,
        height: offset.height
      };

      return _react2.default.cloneElement(tooltipItem, {
        viewBox: viewBox,
        active: isTooltipActive,
        label: '',
        payload: this.getTooltipContent(activeItem, xAxis, yAxis, zAxis),
        coordinate: activeTooltipCoord
      });
    }

    /**
     * Draw grid
     * @param  {Object} xAxis  The configuration of x-axis
     * @param  {Object} yAxis  The configuration of y-axis
     * @param  {Object} offset The offset of main part in the svg element
     * @return {ReactElement} The instance of grid
     */

  }, {
    key: 'renderGrid',
    value: function renderGrid(xAxis, yAxis, offset) {
      var _props2 = this.props,
          children = _props2.children,
          width = _props2.width,
          height = _props2.height;

      var gridItem = (0, _ReactUtils.findChildByType)(children, _CartesianGrid2.default);

      if (!gridItem) {
        return null;
      }

      var verticalPoints = (0, _CartesianUtils.getCoordinatesOfGrid)(_CartesianAxis2.default.getTicks(_extends({}, _CartesianAxis2.default.defaultProps, xAxis, {
        ticks: (0, _CartesianUtils.getTicksOfAxis)(xAxis, true),
        viewBox: { x: 0, y: 0, width: width, height: height }
      })), offset.left, offset.left + offset.width);

      var horizontalPoints = (0, _CartesianUtils.getCoordinatesOfGrid)(_CartesianAxis2.default.getTicks(_extends({}, _CartesianAxis2.default.defaultProps, yAxis, {
        ticks: (0, _CartesianUtils.getTicksOfAxis)(yAxis, true),
        viewBox: { x: 0, y: 0, width: width, height: height }
      })), offset.top, offset.top + offset.height);

      return _react2.default.cloneElement(gridItem, {
        key: 'grid',
        x: offset.left,
        y: offset.top,
        width: offset.width,
        height: offset.height,
        verticalPoints: verticalPoints,
        horizontalPoints: horizontalPoints
      });
    }
    /**
     * Draw legend
     * @param  {Array} items     The instances of Scatters
     * @return {ReactElement}    The instance of Legend
     */

  }, {
    key: 'renderLegend',
    value: function renderLegend(items) {
      var _this2 = this;

      var _props3 = this.props,
          children = _props3.children,
          width = _props3.width,
          height = _props3.height,
          margin = _props3.margin;

      var legendWidth = width - (margin.left || 0) - (margin.right || 0);
      var legendHeight = height - (margin.top || 0) - (margin.bottom || 0);
      var props = (0, _CartesianUtils.getLegendProps)(children, items, legendWidth, legendHeight);

      if (!props) {
        return null;
      }

      return _react2.default.createElement(_Legend2.default, _extends({}, props, {
        chartWidth: width,
        chartHeight: height,
        margin: margin,
        ref: function ref(legend) {
          _this2.legendInstance = legend;
        },
        onBBoxUpdate: this.handleLegendBBoxUpdate
      }));
    }

    /**
     * Draw axis
     * @param {Object} axis     The configuration of axis
     * @param {String} layerKey The key of layer
     * @return {ReactElement}   The instance of axis
     */

  }, {
    key: 'renderAxis',
    value: function renderAxis(axis, layerKey) {
      var _props4 = this.props,
          width = _props4.width,
          height = _props4.height;


      if (axis && !axis.hide) {
        return _react2.default.createElement(
          _Layer2.default,
          { key: layerKey, className: layerKey },
          _react2.default.createElement(_CartesianAxis2.default, _extends({}, axis, {
            viewBox: { x: 0, y: 0, width: width, height: height },
            ticks: (0, _CartesianUtils.getTicksOfAxis)(axis, true)
          }))
        );
      }

      return null;
    }
  }, {
    key: 'renderCursor',
    value: function renderCursor(xAxis, yAxis, offset) {
      var children = this.props.children;

      var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip2.default);

      if (!tooltipItem || !tooltipItem.props.cursor || !this.state.isTooltipActive) {
        return null;
      }
      var activeItem = this.state.activeItem;


      var cursorProps = _extends({
        stroke: '#ccc',
        strokeDasharray: '5 5'
      }, (0, _ReactUtils.getPresentationAttributes)(tooltipItem.props.cursor), offset, {
        x: activeItem.cx,
        y: activeItem.cy,
        payload: activeItem
      });

      return _react2.default.isValidElement(tooltipItem.props.cursor) ? _react2.default.cloneElement(tooltipItem.props.cursor, cursorProps) : _react2.default.createElement(_Cross2.default, cursorProps);
    }

    /**
     * Draw the main part of scatter chart
     * @param  {Array} items   All the instance of Scatter
     * @param  {Object} xAxis  The configuration of all x-axis
     * @param  {Object} yAxis  The configuration of all y-axis
     * @param  {Object} zAxis  The configuration of all z-axis
     * @param  {Object} offset The offset of main part in the svg element
     * @return {ReactComponent}  All the instances of Scatter
     */

  }, {
    key: 'renderItems',
    value: function renderItems(items, xAxis, yAxis, zAxis, offset) {
      var _this3 = this;

      var activeGroupId = this.state.activeGroupId;

      return items.map(function (child, i) {
        var _child$props = child.props,
            strokeWidth = _child$props.strokeWidth,
            data = _child$props.data;


        var finalStrokeWidth = strokeWidth === +strokeWidth ? strokeWidth : 1;
        finalStrokeWidth = activeGroupId === 'scatter-' + i ? finalStrokeWidth + 2 : finalStrokeWidth;

        return _react2.default.cloneElement(child, _extends({
          key: 'scatter-' + i,
          groupId: 'scatter-' + i,
          strokeWidth: finalStrokeWidth,
          onMouseLeave: _this3.handleScatterMouseLeave,
          onMouseEnter: _this3.handleScatterMouseEnter,
          points: _this3.getComposedData(child, data, xAxis, yAxis, zAxis)
        }, offset, {
          xAxis: xAxis,
          yAxis: yAxis
        }));
      }, this);
    }
  }, {
    key: 'renderReferenceElements',
    value: function renderReferenceElements(xAxis, yAxis, offset, isFront, Compt) {
      var children = this.props.children;

      var elements = (0, _ReactUtils.findAllByType)(children, Compt);

      if (!elements || !elements.length) {
        return null;
      }

      var keyPrefix = (0, _ReactUtils.getDisplayName)(Compt) + '-' + (isFront ? 'front' : 'back');

      return elements.filter(function (entry) {
        return isFront === entry.props.isFront;
      }).map(function (entry, i) {
        return _react2.default.cloneElement(entry, {
          key: keyPrefix + '-' + i,
          xAxis: xAxis, yAxis: yAxis,
          viewBox: {
            x: offset.left,
            y: offset.top,
            width: offset.width,
            height: offset.height
          }
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (!(0, _ReactUtils.validateWidthHeight)(this)) {
        return null;
      }

      // eslint-disable-next-line no-unused-vars

      var _props5 = this.props,
          style = _props5.style,
          children = _props5.children,
          className = _props5.className,
          width = _props5.width,
          height = _props5.height,
          others = _objectWithoutProperties(_props5, ['style', 'children', 'className', 'width', 'height']);

      var items = (0, _ReactUtils.findAllByType)(children, _Scatter2.default);
      var zAxis = this.getZAxis(items);
      var xAxis = this.getAxis('xAxis', items);
      var yAxis = this.getAxis('yAxis', items);

      var offset = this.getOffset(items, xAxis, yAxis);
      xAxis = this.getFormatAxis(xAxis, offset, 'xAxis');
      yAxis = this.getFormatAxis(yAxis, offset, 'yAxis');
      var events = (0, _ReactUtils.filterEventAttributes)(this.props);
      var attrs = (0, _ReactUtils.getPresentationAttributes)(others);

      return _react2.default.createElement(
        'div',
        _extends({
          className: (0, _classnames2.default)('recharts-wrapper', className),
          style: { position: 'relative', cursor: 'default', width: width, height: height }
        }, events),
        _react2.default.createElement(
          _Surface2.default,
          _extends({}, attrs, { width: width, height: height }),
          this.renderGrid(xAxis, yAxis, offset),
          this.renderReferenceElements(xAxis, yAxis, offset, false, _ReferenceArea2.default),
          this.renderReferenceElements(xAxis, yAxis, offset, false, _ReferenceLine2.default),
          this.renderReferenceElements(xAxis, yAxis, offset, false, _ReferenceDot2.default),
          this.renderAxis(xAxis, 'recharts-x-axis'),
          this.renderAxis(yAxis, 'recharts-y-axis'),
          this.renderCursor(xAxis, yAxis, offset),
          this.renderItems(items, xAxis, yAxis, zAxis, offset),
          this.renderReferenceElements(xAxis, yAxis, offset, true, _ReferenceArea2.default),
          this.renderReferenceElements(xAxis, yAxis, offset, true, _ReferenceLine2.default),
          this.renderReferenceElements(xAxis, yAxis, offset, true, _ReferenceDot2.default),
          (0, _ReactUtils.filterSvgElements)(children)
        ),
        this.renderLegend(items),
        this.renderTooltip(items, xAxis, yAxis, zAxis, offset)
      );
    }
  }]);

  return ScatterChart;
}(_react.Component), _class2.displayName = 'ScatterChart', _class2.propTypes = _extends({}, _ReactUtils.EVENT_ATTRIBUTES, {
  width: _react.PropTypes.number,
  height: _react.PropTypes.number,
  margin: _react.PropTypes.shape({
    top: _react.PropTypes.number,
    right: _react.PropTypes.number,
    bottom: _react.PropTypes.number,
    left: _react.PropTypes.number
  }),
  title: _react.PropTypes.string,
  style: _react.PropTypes.object,
  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
  className: _react.PropTypes.string
}), _class2.defaultProps = {
  style: {},
  margin: { top: 5, right: 5, bottom: 5, left: 5 }
}, _temp2)) || _class;

exports.default = ScatterChart;