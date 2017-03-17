import _range from 'lodash/range';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp2;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview Radar Chart
 */
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { scalePoint } from 'd3-scale';
import { getNiceTickValues } from 'recharts-scale';

import Surface from '../container/Surface';
import Legend from '../component/Legend';
import Tooltip from '../component/Tooltip';

import Radar from '../polar/Radar';
import PolarGrid from '../polar/PolarGrid';
import PolarAngleAxis from '../polar/PolarAngleAxis';
import PolarRadiusAxis from '../polar/PolarRadiusAxis';

import { validateWidthHeight, findChildByType, findAllByType, filterSvgElements, getPresentationAttributes } from '../util/ReactUtils';
import { getOffset, calculateChartCoordinate } from '../util/DOMUtils';
import { polarToCartesian, getMaxRadius } from '../util/PolarUtils';
import { getPercentValue, parseSpecifiedDomain, combineEventHandlers, parseScale, getValueByDataKey } from '../util/DataUtils';
import pureRender from '../util/PureRender';
import AnimationDecorator from '../util/AnimationDecorator';

var RadarChart = AnimationDecorator(_class = pureRender(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(RadarChart, _Component);

  function RadarChart() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RadarChart);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RadarChart.__proto__ || Object.getPrototypeOf(RadarChart)).call.apply(_ref, [this].concat(args))), _this), _this.state = _this.createDefaultState(), _this.handleMouseEnter = function (itemProps, e) {
      var children = _this.props.children;
      var points = itemProps.points;

      var tooltipItem = findChildByType(children, Tooltip);

      if (tooltipItem && points.length) {
        var container = _this.container;
        var containerOffset = getOffset(container);
        var ne = calculateChartCoordinate(e, containerOffset);

        _this.setState({
          isTooltipActive: true,
          activeTooltipLabel: itemProps.name || itemProps.dataKey,
          activeTooltipCoord: { x: ne.chartX, y: ne.chartY },
          activeTooltipPayload: _this.getTooltipContent(itemProps)
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

  _createClass(RadarChart, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.data !== this.props.data) {
        this.setState(this.createDefaultState());
      }
    }
  }, {
    key: 'getTooltipContent',
    value: function getTooltipContent(itemProps) {
      var points = itemProps.points,
          dataKey = itemProps.dataKey,
          unit = itemProps.unit;


      return points.map(function (entry) {
        var name = entry.name,
            value = entry.value,
            payload = entry.payload;


        return _extends({}, getPresentationAttributes(itemProps), {
          dataKey: dataKey, unit: unit, name: name, value: value, payload: payload
        });
      });
    }
  }, {
    key: 'getRadiusAxisCfg',
    value: function getRadiusAxisCfg(radiusAxis, innerRadius, outerRadius) {
      var props = radiusAxis ? radiusAxis.props : PolarRadiusAxis.defaultProps;
      var domain = void 0,
          tickCount = void 0,
          ticks = void 0;

      if (radiusAxis && radiusAxis.props.ticks) {
        ticks = radiusAxis.props.ticks;

        tickCount = ticks.length;
        domain = [Math.min.apply(null, ticks), Math.max.apply(null, ticks)];
      } else {
        tickCount = Math.max(radiusAxis && radiusAxis.props.tickCount || PolarRadiusAxis.defaultProps.tickCount, 2);
        ticks = this.getTicksByItems(radiusAxis, tickCount);

        domain = [Math.min.apply(null, ticks), Math.max.apply(null, ticks)];
      }

      return {
        tickCount: tickCount,
        ticks: ticks,
        scale: parseScale(props).domain(domain).range([innerRadius, outerRadius])
      };
    }
  }, {
    key: 'getTicksByItems',
    value: function getTicksByItems(axisItem, tickCount) {
      var _props = this.props,
          data = _props.data,
          children = _props.children;

      var _ref2 = axisItem ? axisItem.props : PolarRadiusAxis.defaultProps,
          domain = _ref2.domain,
          allowDataOverflow = _ref2.allowDataOverflow;

      var radarItems = findAllByType(children, Radar);
      var dataKeys = radarItems.map(function (item) {
        return item.props.dataKey;
      });
      var extent = data.reduce(function (prev, current) {
        var values = dataKeys.map(function (v) {
          return getValueByDataKey(current, v, 0);
        });
        var currentMax = Math.max.apply(null, values);
        var currentMin = Math.min.apply(null, values);

        return [Math.min(prev[0], currentMin), Math.max(prev[1], currentMax)];
      }, [Infinity, -Infinity]);
      var finalDomain = parseSpecifiedDomain(domain, extent, allowDataOverflow);

      if (domain && (domain[0] === 'auto' || domain[1] === 'auto')) {
        return getNiceTickValues(finalDomain, tickCount);
      }

      return finalDomain;
    }
  }, {
    key: 'getGridRadius',
    value: function getGridRadius(gridCount, innerRadius, outerRadius) {
      var domain = _range(0, gridCount);
      var scale = scalePoint().domain(domain).range([innerRadius, outerRadius]);

      return domain.map(function (v) {
        return scale(v);
      });
    }
  }, {
    key: 'getAngle',
    value: function getAngle(index, dataLength, startAngle, clockWise) {
      var sign = clockWise ? -1 : 1;
      var angleInterval = 360 / dataLength;

      return startAngle + index * sign * angleInterval;
    }
  }, {
    key: 'getAngleTicks',
    value: function getAngleTicks(dataLength, startAngle, clockWise) {
      var angles = [];

      for (var i = 0; i < dataLength; i++) {
        angles.push(this.getAngle(i, dataLength, startAngle, clockWise));
      }

      return angles;
    }
  }, {
    key: 'getRadiusTicks',
    value: function getRadiusTicks(axisCfg) {
      var ticks = axisCfg.ticks,
          scale = axisCfg.scale;


      if (ticks && ticks.length) {
        return ticks.map(function (entry) {
          return {
            radius: scale(entry),
            value: entry
          };
        });
      }
      var tickCount = axisCfg.tickCount;

      var domain = scale.domain();

      return _range(0, tickCount).map(function (v, i) {
        var value = domain[0] + i * (domain[1] - domain[0]) / (tickCount - 1);
        return {
          value: value,
          radius: scale(value)
        };
      });
    }
  }, {
    key: 'getComposedData',
    value: function getComposedData(item, scale, cx, cy) {
      var _this2 = this;

      var dataKey = item.props.dataKey;
      var _props2 = this.props,
          data = _props2.data,
          startAngle = _props2.startAngle,
          clockWise = _props2.clockWise,
          children = _props2.children;

      var angleAxis = findChildByType(children, PolarAngleAxis);
      var nameKey = angleAxis && angleAxis.props.dataKey;
      var len = data.length;

      return data.map(function (entry, i) {
        var value = getValueByDataKey(entry, dataKey, 0);
        var angle = _this2.getAngle(i, len, startAngle, clockWise);
        var radius = scale(value);

        return _extends({}, polarToCartesian(cx, cy, radius, angle), {
          value: value,
          name: nameKey ? entry[nameKey] || i : i,
          cx: cx, cy: cy, radius: radius, angle: angle,
          payload: entry
        });
      });
    }
    /**
     * Returns default, reset state for the radar chart.
     * @return {Object} Whole new state
     */

  }, {
    key: 'createDefaultState',
    value: function createDefaultState() {
      return {
        activeTooltipLabel: '',
        activeTooltipCoord: { x: 0, y: 0 },
        isTooltipActive: false
      };
    }
  }, {
    key: 'renderRadars',
    value: function renderRadars(items, scale, cx, cy) {
      var _this3 = this;

      if (!items || !items.length) {
        return null;
      }

      var _props3 = this.props,
          onMouseEnter = _props3.onMouseEnter,
          onMouseLeave = _props3.onMouseLeave,
          onClick = _props3.onClick;

      var baseProps = getPresentationAttributes(this.props);

      return items.map(function (el, index) {
        return React.cloneElement(el, _extends({}, baseProps, getPresentationAttributes(el), {
          animationId: _this3.props.animationId,
          points: _this3.getComposedData(el, scale, cx, cy),
          key: 'radar-' + index,
          onMouseEnter: combineEventHandlers(_this3.handleMouseEnter, onMouseEnter, el.props.onMouseEnter),
          onMouseLeave: combineEventHandlers(_this3.handleMouseLeave, onMouseLeave, el.props.onMouseLeave),
          onClick: combineEventHandlers(null, onClick, el.props.onClick)
        }));
      });
    }
  }, {
    key: 'renderGrid',
    value: function renderGrid(radiusAxisCfg, cx, cy, innerRadius, outerRadius) {
      var children = this.props.children;

      var grid = findChildByType(children, PolarGrid);

      if (!grid) {
        return null;
      }

      var _props4 = this.props,
          startAngle = _props4.startAngle,
          clockWise = _props4.clockWise,
          data = _props4.data;

      var len = data.length;
      var gridCount = radiusAxisCfg.tickCount;

      return React.cloneElement(grid, {
        polarAngles: this.getAngleTicks(len, startAngle, clockWise),
        polarRadius: this.getGridRadius(gridCount, innerRadius, outerRadius),
        cx: cx, cy: cy, innerRadius: innerRadius, outerRadius: outerRadius,
        key: 'layer-grid'
      });
    }
  }, {
    key: 'renderAngleAxis',
    value: function renderAngleAxis(cx, cy, outerRadius, maxRadius) {
      var _this4 = this;

      var children = this.props.children;

      var angleAxis = findChildByType(children, PolarAngleAxis);

      if (!angleAxis || angleAxis.props.hide) {
        return null;
      }

      var _props5 = this.props,
          data = _props5.data,
          startAngle = _props5.startAngle,
          clockWise = _props5.clockWise;

      var len = data.length;
      var grid = findChildByType(children, PolarGrid);
      var radius = getPercentValue(angleAxis.props.radius, maxRadius, outerRadius);
      var dataKey = angleAxis.props.dataKey;


      return React.cloneElement(angleAxis, {
        ticks: data.map(function (v, i) {
          return {
            value: getValueByDataKey(v, dataKey, i),
            angle: _this4.getAngle(i, len, startAngle, clockWise)
          };
        }),
        cx: cx, cy: cy, radius: radius,
        axisLineType: grid && grid.props && grid.props.gridType || PolarGrid.defaultProps.gridType,
        key: 'layer-angle-axis'
      });
    }
  }, {
    key: 'renderRadiusAxis',
    value: function renderRadiusAxis(radiusAxis, radiusAxisCfg, cx, cy) {
      if (!radiusAxis || radiusAxis.props.hide) {
        return null;
      }

      var startAngle = this.props.startAngle;

      return React.cloneElement(radiusAxis, {
        angle: radiusAxis.props.angle || startAngle,
        ticks: this.getRadiusTicks(radiusAxisCfg),
        cx: cx, cy: cy
      });
    }
  }, {
    key: 'renderTooltip',
    value: function renderTooltip() {
      var children = this.props.children;

      var tooltipItem = findChildByType(children, Tooltip);

      if (!tooltipItem) {
        return null;
      }

      var _props6 = this.props,
          width = _props6.width,
          height = _props6.height;
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
     * Draw legend
     * @param  {Array} items             The instances of item
     * @return {ReactElement}            The instance of Legend
     */

  }, {
    key: 'renderLegend',
    value: function renderLegend(items) {
      var children = this.props.children;

      var legendItem = findChildByType(children, Legend);
      if (!legendItem) {
        return null;
      }

      var _props7 = this.props,
          width = _props7.width,
          height = _props7.height,
          margin = _props7.margin;

      var legendData = legendItem.props && legendItem.props.payload || items.map(function (child) {
        var _child$props = child.props,
            dataKey = _child$props.dataKey,
            name = _child$props.name,
            legendType = _child$props.legendType;


        return {
          dataKey: dataKey,
          type: legendItem.props.iconType || legendType || 'square',
          color: child.props.stroke || child.props.fill,
          value: name || dataKey,
          payload: child.props
        };
      }, this);

      return React.cloneElement(legendItem, _extends({}, Legend.getWithHeight(legendItem, width), {
        payload: legendData,
        chartWidth: width,
        chartHeight: height,
        margin: margin
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      if (!validateWidthHeight(this)) {
        return null;
      }

      var _props8 = this.props,
          className = _props8.className,
          data = _props8.data,
          width = _props8.width,
          height = _props8.height,
          margin = _props8.margin,
          children = _props8.children,
          style = _props8.style,
          others = _objectWithoutProperties(_props8, ['className', 'data', 'width', 'height', 'margin', 'children', 'style']);

      var cx = getPercentValue(this.props.cx, width, width / 2);
      var cy = getPercentValue(this.props.cy, height, height / 2);
      var maxRadius = getMaxRadius(width, height, margin);
      var innerRadius = getPercentValue(this.props.innerRadius, maxRadius, 0);
      var outerRadius = getPercentValue(this.props.outerRadius, maxRadius, maxRadius * 0.8);

      if (outerRadius <= 0 || !data || !data.length) {
        return null;
      }

      var items = findAllByType(children, Radar);
      var radiusAxis = findChildByType(children, PolarRadiusAxis);
      var radiusAxisCfg = this.getRadiusAxisCfg(radiusAxis, innerRadius, outerRadius);
      var attrs = getPresentationAttributes(others);

      return React.createElement(
        'div',
        {
          className: classNames('recharts-wrapper', className),
          style: _extends({}, style, { position: 'relative', cursor: 'default', width: width, height: height }),
          ref: function ref(node) {
            _this5.container = node;
          }
        },
        React.createElement(
          Surface,
          _extends({}, attrs, { width: width, height: height }),
          this.renderGrid(radiusAxisCfg, cx, cy, innerRadius, outerRadius),
          this.renderRadiusAxis(radiusAxis, radiusAxisCfg, cx, cy),
          this.renderAngleAxis(cx, cy, outerRadius, maxRadius),
          this.renderRadars(items, radiusAxisCfg.scale, cx, cy),
          filterSvgElements(children)
        ),
        this.renderLegend(items),
        this.renderTooltip()
      );
    }
  }]);

  return RadarChart;
}(Component), _class2.displayName = 'RadarChart', _class2.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  margin: PropTypes.shape({
    top: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number
  }),

  cx: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  cy: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  startAngle: PropTypes.number,
  innerRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  outerRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  clockWise: PropTypes.bool,

  data: PropTypes.array,
  style: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  className: PropTypes.string,
  animationId: PropTypes.number,

  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onClick: PropTypes.func
}, _class2.defaultProps = {
  width: 0,
  height: 0,
  cx: '50%',
  cy: '50%',
  innerRadius: 0,
  outerRadius: '80%',

  startAngle: 90,
  clockWise: true,
  data: [],
  margin: { top: 0, right: 0, bottom: 0, left: 0 }
}, _temp2)) || _class) || _class;

export default RadarChart;