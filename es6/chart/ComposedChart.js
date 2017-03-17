import _isNil from 'lodash/isNil';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview Composed Chart
 */
import React, { PropTypes, Component } from 'react';

import Layer from '../container/Layer';
import Tooltip from '../component/Tooltip';
import Line from '../cartesian/Line';
import Bar from '../cartesian/Bar';
import Area from '../cartesian/Area';
import Rectangle from '../shape/Rectangle';
import generateCategoricalChart from './generateCategoricalChart';
import { getBandSizeOfAxis, getAnyElementOfObject } from '../util/DataUtils';
import { getPresentationAttributes, findChildByType } from '../util/ReactUtils';
import pureRender from '../util/PureRender';
import { AreaChart } from './AreaChart';
import { LineChart } from './LineChart';
import { BarChart } from './BarChart';
import composedDataDecorator from '../util/ComposedDataDecorator';

var GRAPHICAL_TYPES = ['Area', 'Bar', 'Line'];
var GRAPHICAL_MAP = { Area: AreaChart, Bar: BarChart, Line: LineChart };

var ComposedChart = (_dec = composedDataDecorator({}), pureRender(_class = _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(ComposedChart, _Component);

  function ComposedChart() {
    _classCallCheck(this, ComposedChart);

    return _possibleConstructorReturn(this, (ComposedChart.__proto__ || Object.getPrototypeOf(ComposedChart)).apply(this, arguments));
  }

  _createClass(ComposedChart, [{
    key: 'filterGraphicalItems',
    value: function filterGraphicalItems() {
      var graphicalItems = this.props.graphicalItems;

      var record = {};
      var result = [];

      for (var i = 0, len = graphicalItems.length; i < len; i++) {
        var item = graphicalItems[i];
        var displayName = item.type.displayName;

        if (GRAPHICAL_TYPES.indexOf(displayName) >= 0) {
          if (!_isNil(record[displayName])) {
            var index = record[displayName];

            result[index].items = [].concat(_toConsumableArray(result[index].items), [item]);
          } else {
            record[displayName] = result.length;
            result.push({ items: [item], type: displayName });
          }
        }
      }

      return result;
    }
  }, {
    key: 'renderCursor',
    value: function renderCursor(_ref) {
      var xAxisMap = _ref.xAxisMap,
          yAxisMap = _ref.yAxisMap,
          offset = _ref.offset;
      var _props = this.props,
          children = _props.children,
          isTooltipActive = _props.isTooltipActive,
          layout = _props.layout,
          activeTooltipIndex = _props.activeTooltipIndex,
          axisTicks = _props.axisTicks;

      var tooltipItem = findChildByType(children, Tooltip);
      if (!tooltipItem || !tooltipItem.props.cursor || !isTooltipActive || activeTooltipIndex < 0) {
        return null;
      }

      var axisMap = layout === 'horizontal' ? xAxisMap : yAxisMap;
      var axis = getAnyElementOfObject(axisMap);
      var ticks = axisTicks;

      if (!ticks || !ticks[activeTooltipIndex]) {
        return null;
      }

      var bandSize = getBandSizeOfAxis(axis);
      var start = ticks[activeTooltipIndex].coordinate;
      var cursorProps = _extends({
        fill: '#f1f1f1'
      }, getPresentationAttributes(tooltipItem.props.cursor), {
        x: layout === 'horizontal' ? start : offset.left + 0.5,
        y: layout === 'horizontal' ? offset.top + 0.5 : start,
        width: layout === 'horizontal' ? bandSize : offset.width - 1,
        height: layout === 'horizontal' ? offset.height - 1 : bandSize
      });

      return React.isValidElement(tooltipItem.props.cursor) ? React.cloneElement(tooltipItem.props.cursor, cursorProps) : React.createElement(Rectangle, cursorProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          xAxisMap = _props2.xAxisMap,
          yAxisMap = _props2.yAxisMap,
          offset = _props2.offset;

      var filteredItems = this.filterGraphicalItems();

      return React.createElement(
        Layer,
        { className: 'recharts-composed' },
        this.renderCursor({ xAxisMap: xAxisMap, yAxisMap: yAxisMap, offset: offset }),
        filteredItems.map(function (_ref2) {
          var items = _ref2.items,
              type = _ref2.type;

          var Chart = GRAPHICAL_MAP[type];

          return React.createElement(Chart, _extends({ key: type }, _this2.props, { graphicalItems: items, isComposed: true }));
        })
      );
    }
  }]);

  return ComposedChart;
}(Component), _class2.displayName = 'ComposedChart', _class2.propTypes = {
  allComposedData: PropTypes.array,
  axisTicks: PropTypes.array,
  layout: PropTypes.oneOf(['horizontal', 'vertical']),
  dataStartIndex: PropTypes.number,
  dataEndIndex: PropTypes.number,
  isTooltipActive: PropTypes.bool,
  activeTooltipIndex: PropTypes.number,
  xAxisMap: PropTypes.object,
  yAxisMap: PropTypes.object,
  offset: PropTypes.object,
  graphicalItems: PropTypes.array,
  stackGroups: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
}, _temp)) || _class) || _class);


export default generateCategoricalChart(ComposedChart, [Line, Area, Bar]);