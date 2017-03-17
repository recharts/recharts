var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp2;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview Pie Chart
 */
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Surface from '../container/Surface';
import Legend from '../component/Legend';
import Tooltip from '../component/Tooltip';
import Pie from '../polar/Pie';
import Cell from '../component/Cell';
import { getPercentValue, combineEventHandlers } from '../util/DataUtils';
import { findChildByType, findAllByType, validateWidthHeight, filterSvgElements, getPresentationAttributes } from '../util/ReactUtils';
import { getMaxRadius, polarToCartesian } from '../util/PolarUtils';
import composedDataDecorator from '../util/ComposedDataDecorator';

var getComposedData = function getComposedData(_ref) {
  var item = _ref.item;
  var _item$props = item.props,
      data = _item$props.data,
      children = _item$props.children;

  var presentationProps = getPresentationAttributes(item.props);
  var cells = findAllByType(children, Cell);

  if (data && data.length) {
    return data.map(function (entry, index) {
      return _extends({
        payload: entry
      }, presentationProps, entry, cells && cells[index] && cells[index].props);
    });
  }

  if (cells && cells.length) {
    return cells.map(function (cell) {
      return _extends({}, presentationProps, cell.props);
    });
  }

  return [];
};

export var PieChart = (_dec = composedDataDecorator({ getComposedData: getComposedData, ChildComponent: Pie }), _dec(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(PieChart, _Component);

  function PieChart() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, PieChart);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = PieChart.__proto__ || Object.getPrototypeOf(PieChart)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
      activeTooltipLabel: '',
      activeTooltipCoord: { x: 0, y: 0 },
      activeTooltipPayload: [],
      isTooltipActive: false
    }, _this.handleMouseEnter = function (el) {
      var children = _this.props.children;
      var cx = el.cx,
          cy = el.cy,
          outerRadius = el.outerRadius,
          midAngle = el.midAngle;

      var tooltipItem = findChildByType(children, Tooltip);

      if (tooltipItem) {
        _this.setState({
          isTooltipActive: true,
          activeTooltipCoord: polarToCartesian(cx, cy, outerRadius, midAngle),
          activeTooltipPayload: [el]
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

  _createClass(PieChart, [{
    key: 'renderLegend',

    /**
     * Draw legend
     * @param  {Array} items             The instances of Pie
     * @return {ReactElement}            The instance of Legend
     */
    value: function renderLegend(items) {
      var _props = this.props,
          children = _props.children,
          allComposedData = _props.allComposedData;

      var legendItem = findChildByType(children, Legend);
      if (!legendItem) {
        return null;
      }

      var _props2 = this.props,
          width = _props2.width,
          height = _props2.height,
          margin = _props2.margin;

      var legendData = legendItem.props && legendItem.props.payload || items.reduce(function (result, child, i) {
        var nameKey = child.props.nameKey;

        var data = allComposedData[i];

        return result.concat(data.map(function (entry) {
          return {
            type: legendItem.props.iconType || child.props.legendType,
            value: entry[nameKey],
            color: entry.fill,
            payload: entry
          };
        }));
      }, []);

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
     * @param  {Array} items    All the instance of Pie
     * @return {ReactComponent} All the instance of Pie
     */

  }, {
    key: 'renderItems',
    value: function renderItems(items) {
      var _this2 = this;

      var _props4 = this.props,
          width = _props4.width,
          height = _props4.height,
          margin = _props4.margin,
          allComposedData = _props4.allComposedData,
          onMouseEnter = _props4.onMouseEnter,
          onMouseLeave = _props4.onMouseLeave,
          onClick = _props4.onClick;


      return items.map(function (child, i) {
        var _child$props = child.props,
            innerRadius = _child$props.innerRadius,
            outerRadius = _child$props.outerRadius,
            childOnMouseEnter = _child$props.onMouseEnter,
            childOnMouseLeave = _child$props.onMouseLeave,
            childOnClick = _child$props.onClick;

        var cx = getPercentValue(child.props.cx, width, width / 2);
        var cy = getPercentValue(child.props.cy, height, height / 2);
        var maxRadius = getMaxRadius(width, height, margin);

        return React.cloneElement(child, {
          key: 'recharts-pie-' + i,
          cx: cx,
          cy: cy,
          maxRadius: child.props.maxRadius || Math.sqrt(width * width + height * height) / 2,
          innerRadius: getPercentValue(innerRadius, maxRadius, 0),
          outerRadius: getPercentValue(outerRadius, maxRadius, maxRadius * 0.8),
          composedData: allComposedData[i],
          onMouseEnter: combineEventHandlers(_this2.handleMouseEnter, onMouseEnter, childOnMouseEnter),
          onMouseLeave: combineEventHandlers(_this2.handleMouseLeave, onMouseLeave, childOnMouseLeave),
          onClick: combineEventHandlers(null, onClick, childOnClick)
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (!validateWidthHeight(this)) {
        return null;
      }

      var _props5 = this.props,
          style = _props5.style,
          children = _props5.children,
          className = _props5.className,
          width = _props5.width,
          height = _props5.height,
          others = _objectWithoutProperties(_props5, ['style', 'children', 'className', 'width', 'height']);

      var items = findAllByType(children, Pie);
      var attrs = getPresentationAttributes(others);

      return React.createElement(
        'div',
        {
          className: classNames('recharts-wrapper', className),
          style: _extends({}, style, { position: 'relative', cursor: 'default', width: width, height: height })
        },
        React.createElement(
          Surface,
          _extends({}, attrs, { width: width, height: height }),
          this.renderItems(items),
          filterSvgElements(children)
        ),
        this.renderLegend(items),
        this.renderTooltip()
      );
    }
  }]);

  return PieChart;
}(Component), _class2.displayName = 'PieChart', _class2.propTypes = {
  allComposedData: PropTypes.array,
  width: PropTypes.number,
  height: PropTypes.number,
  margin: PropTypes.shape({
    top: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number
  }),
  title: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  className: PropTypes.string,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onClick: PropTypes.func
}, _class2.defaultProps = {
  style: {},
  margin: { top: 0, right: 0, bottom: 0, left: 0 }
}, _temp2)) || _class);

export default PieChart;