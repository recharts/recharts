import _range from 'lodash/range';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp2;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview Radar Bar Chart
 */
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { scaleBand } from 'd3-scale';

import Surface from '../container/Surface';
import RadialBar from '../polar/RadialBar';
import { getPercentValue, combineEventHandlers, getValueByDataKey, findPositionOfBar } from '../util/DataUtils';
import Cell from '../component/Cell';
import Legend from '../component/Legend';
import Tooltip from '../component/Tooltip';
import { findChildByType, findAllByType, validateWidthHeight, filterSvgElements, getPresentationAttributes } from '../util/ReactUtils';
import { getMaxRadius, polarToCartesian } from '../util/PolarUtils';
import pureRender from '../util/PureRender';

var RadialBarChart = pureRender(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(RadialBarChart, _Component);

  function RadialBarChart() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RadialBarChart);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RadialBarChart.__proto__ || Object.getPrototypeOf(RadialBarChart)).call.apply(_ref, [this].concat(args))), _this), _this.state = _this.createDefaultState(), _this.handleMouseEnter = function (el) {
      var children = _this.props.children;
      var cx = el.cx,
          cy = el.cy,
          endAngle = el.endAngle,
          outerRadius = el.outerRadius;

      var tooltipItem = findChildByType(children, Tooltip);

      if (tooltipItem) {
        _this.setState({
          isTooltipActive: true,
          activeTooltipCoord: polarToCartesian(cx, cy, outerRadius, endAngle),
          activeTooltipPayload: [el.payload]
        });
      }
    }, _this.handleMouseLeave = function () {
      var children = _this.props.children;

      var tooltipItem = findChildByType(children, Tooltip);

      if (tooltipItem) {
        _this.setState({
          isTooltipActive: false
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RadialBarChart, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.data !== this.props.data) {
        this.setState(this.createDefaultState());
      }
    }
    /**
     * Compose the data of each group
     * @param  {Object} item        An instance of RadialBar
     * @param  {Array}  barPosition The offset and size of each bar
     * @param  {Object} radiusScale The scale function of radius of bars
     * @param  {Object} center      The coordinate of center
     * @param  {String} dataKey     The unique key of a group
     * @return {Array}              Composed data
     */

  }, {
    key: 'getComposedData',
    value: function getComposedData(item, barPosition, radiusScale, center, dataKey) {
      var data = this.props.data;

      var pos = findPositionOfBar(barPosition, item);
      var cells = findAllByType(item.props.children, Cell);

      return data.map(function (entry, index) {
        var value = getValueByDataKey(entry, dataKey);
        var radius = radiusScale(index);

        return _extends({}, entry, center, {
          value: value,
          innerRadius: radius - pos.offset,
          outerRadius: radius - pos.offset + pos.radius,
          payload: entry
        }, cells && cells[index] && cells[index].props);
      });
    }
    /**
     * Calculate the size of all groups
     * @param  {Array} items All the instance of RadialBar
     * @return {Object} The size of all groups
     */

  }, {
    key: 'getRadiusList',
    value: function getRadiusList(items) {
      var barSize = this.props.barSize;


      return items.map(function (child) {
        return _extends({}, child.props, {
          item: child,
          barSize: child.props.barSize || barSize
        });
      });
    }

    /**
     * Calculate the scale function of radius
     * @param {Number} innerRadius The outer radius
     * @param {Number} outerRadius The inner radius
     * @return {Object}            A scale function
     */

  }, {
    key: 'getRadiusScale',
    value: function getRadiusScale(innerRadius, outerRadius) {
      var data = this.props.data;

      var bandCount = Math.max(data.length, 1);
      var range = [outerRadius, innerRadius];
      var scale = scaleBand().domain(_range(0, bandCount)).range(range);

      return scale;
    }

    /**
     * Calculate the size of each bar and the gap between two bars
     * @param  {Number} bandRadius  The radius of each category
     * @param  {Array} radiusList   The radius of all groups
     * @return {Number} The size of each bar and the gap between two bars
     */

  }, {
    key: 'getBarPosition',
    value: function getBarPosition(bandRadius, radiusList) {
      var _props = this.props,
          barGap = _props.barGap,
          barCategoryGap = _props.barCategoryGap;

      var len = radiusList.length;
      var result = void 0;

      // whether or not is barSize setted by user
      if (len && radiusList[0].barSize === +radiusList[0].barSize) {
        (function () {
          var sum = radiusList.reduce(function (res, entry) {
            return res + entry.barSize;
          }, 0);
          sum += (len - 1) * barGap;
          var offset = -sum / 2 >> 0;
          var prev = { offset: offset - barGap, radius: 0 };

          result = radiusList.reduce(function (res, entry) {
            prev = {
              offset: prev.offset + prev.radius + barGap,
              radius: entry.barSize
            };

            return [].concat(_toConsumableArray(res), [{ item: entry.item, position: prev }]);
          }, []);
        })();
      } else {
        (function () {
          var offset = getPercentValue(barCategoryGap, bandRadius);
          var radius = (bandRadius - 2 * offset - (len - 1) * barGap) / len >> 0;
          offset = -Math.max((radius * len + (len - 1) * barGap) / 2 >> 0, 0);

          result = radiusList.reduce(function (res, entry, i) {
            return [].concat(_toConsumableArray(res), [{
              item: entry.item,
              position: {
                offset: offset + (radius + barGap) * i,
                radius: radius
              }
            }]);
          }, []);
        })();
      }

      return result;
    }
    /**
     * Returns default, reset state for the radial bar chart.
     * @return {Object} Whole new state
     */

  }, {
    key: 'createDefaultState',
    value: function createDefaultState() {
      return {
        activeTooltipLabel: '',
        activeTooltipPayload: [],
        activeTooltipCoord: { x: 0, y: 0 },
        isTooltipActive: false
      };
    }
  }, {
    key: 'renderLegend',


    /**
     * Draw legend
     * @param  {ReactElement} legendItem The instance of Legend
     * @return {ReactElement}            The instance of Legend
     */
    value: function renderLegend() {
      var children = this.props.children;

      var legendItem = findChildByType(children, Legend);
      if (!legendItem) {
        return null;
      }

      var _props2 = this.props,
          data = _props2.data,
          width = _props2.width,
          height = _props2.height,
          margin = _props2.margin;


      var legendData = legendItem.props && legendItem.props.payload || data.map(function (entry) {
        return {
          type: legendItem.props.iconType || 'square',
          color: entry.fill || '#000',
          value: entry.name,
          payload: entry
        };
      });

      return React.cloneElement(legendItem, _extends({}, Legend.getWithHeight(legendItem, width), {
        payload: legendData,
        chartWidth: width,
        chartHeight: height,
        margin: margin
      }));
    }
  }, {
    key: 'renderTooltip',
    value: function renderTooltip() {
      var children = this.props.children;

      var tooltipItem = findChildByType(children, Tooltip);

      if (!tooltipItem) {
        return null;
      }

      var _props3 = this.props,
          width = _props3.width,
          height = _props3.height;
      var _state = this.state,
          isTooltipActive = _state.isTooltipActive,
          activeTooltipLabel = _state.activeTooltipLabel,
          activeTooltipCoord = _state.activeTooltipCoord,
          activeTooltipPayload = _state.activeTooltipPayload;

      var viewBox = { x: 0, y: 0, width: width, height: height };

      return React.cloneElement(tooltipItem, {
        viewBox: viewBox,
        active: isTooltipActive,
        label: activeTooltipLabel,
        payload: activeTooltipPayload,
        coordinate: activeTooltipCoord
      });
    }

    /**
     * Draw the main part of bar chart
     * @param  {Array} items     All the instance of RadialBar
     * @param  {Object} radiusScale The scale function of radius of bars
     * @param  {Object} center      The coordinate of center
     * @return {ReactComponent}  All the instances of RadialBar
     */

  }, {
    key: 'renderItems',
    value: function renderItems(items, radiusScale, center) {
      var _this2 = this;

      if (!items || !items.length) {
        return null;
      }

      var _props4 = this.props,
          onMouseEnter = _props4.onMouseEnter,
          onMouseLeave = _props4.onMouseLeave,
          onClick = _props4.onClick;

      var radiusList = this.getRadiusList(items);
      var bandRadius = radiusScale.bandwidth();
      var barPosition = this.getBarPosition(bandRadius, radiusList);

      return items.map(function (child, i) {
        var _child$props = child.props,
            dataKey = _child$props.dataKey,
            childOnMouseEnter = _child$props.onMouseEnter,
            childOnMouseLeave = _child$props.onMouseLeave,
            childOnClick = _child$props.onClick;


        return React.cloneElement(child, _extends({}, center, {
          key: 'radial-bar-' + i,
          onMouseEnter: combineEventHandlers(_this2.handleMouseEnter, onMouseEnter, childOnMouseEnter),
          onMouseLeave: combineEventHandlers(_this2.handleMouseLeave, onMouseLeave, childOnMouseLeave),
          onClick: combineEventHandlers(null, onClick, childOnClick),
          data: _this2.getComposedData(child, barPosition, radiusScale, center, dataKey)
        }));
      }, this);
    }
  }, {
    key: 'render',
    value: function render() {
      var data = this.props.data;

      if (!validateWidthHeight(this) || !data || !data.length) {
        return null;
      }

      var _props5 = this.props,
          style = _props5.style,
          children = _props5.children,
          className = _props5.className,
          width = _props5.width,
          height = _props5.height,
          margin = _props5.margin,
          others = _objectWithoutProperties(_props5, ['style', 'children', 'className', 'width', 'height', 'margin']);

      var items = findAllByType(children, RadialBar);
      var cx = getPercentValue(this.props.cx, width, width / 2);
      var cy = getPercentValue(this.props.cy, height, height / 2);
      var maxRadius = getMaxRadius(width, height, margin);
      var innerRadius = getPercentValue(this.props.innerRadius, maxRadius, 0);
      var outerRadius = getPercentValue(this.props.outerRadius, maxRadius, maxRadius * 0.8);
      var radiusScale = this.getRadiusScale(innerRadius, outerRadius);
      var attrs = getPresentationAttributes(others);

      return React.createElement(
        'div',
        {
          className: classNames('recharts-wrapper', className),
          style: _extends({}, style, { cursor: 'default', position: 'relative', width: width, height: height })
        },
        React.createElement(
          Surface,
          _extends({}, attrs, { width: width, height: height }),
          this.renderItems(items, radiusScale, { cx: cx, cy: cy }),
          filterSvgElements(children)
        ),
        this.renderLegend(),
        this.renderTooltip(items)
      );
    }
  }]);

  return RadialBarChart;
}(Component), _class2.displayName = 'RadialBarChart', _class2.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  margin: PropTypes.shape({
    top: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number
  }),
  cy: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  cx: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  data: PropTypes.array,
  innerRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  outerRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  // The offset radius between two categorys
  barCategoryGap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  // The gap radius of two radial bar in one category
  barGap: PropTypes.number,
  // The radius of each radial bar
  barSize: PropTypes.number,
  title: PropTypes.string,
  style: PropTypes.object,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  className: PropTypes.string
}, _class2.defaultProps = {
  cx: '50%',
  cy: '50%',
  innerRadius: '30%',
  outerRadius: '90%',
  barGap: 2,
  barCategoryGap: '10%',
  style: {},
  margin: { top: 0, right: 0, bottom: 0, left: 0 }
}, _temp2)) || _class;

export default RadialBarChart;