function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import _isEqual from "lodash/isEqual";
import _get from "lodash/get";
import _isPlainObject from "lodash/isPlainObject";
import _isFunction from "lodash/isFunction";
import _isNil from "lodash/isNil";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

/**
 * @fileOverview Render sectors of a pie
 */
import React, { PureComponent } from 'react';
import Animate from 'react-smooth';
import classNames from 'classnames';
import { Layer } from '../container/Layer';
import { Sector } from '../shape/Sector';
import { Curve } from '../shape/Curve';
import { Text } from '../component/Text';
import { Label } from '../component/Label';
import { LabelList } from '../component/LabelList';
import { Cell } from '../component/Cell';
import { findAllByType } from '../util/ReactUtils';
import { Global } from '../util/Global';
import { polarToCartesian, getMaxRadius } from '../util/PolarUtils';
import { isNumber, getPercentValue, mathSign, interpolateNumber, uniqueId } from '../util/DataUtils';
import { getValueByDataKey } from '../util/ChartUtils';
import { warn } from '../util/LogUtils';
import { filterProps, adaptEventsOfChild } from '../util/types';
export var Pie = /*#__PURE__*/function (_PureComponent) {
  _inherits(Pie, _PureComponent);

  var _super = _createSuper(Pie);

  function Pie(props) {
    var _this;

    _classCallCheck(this, Pie);

    _this = _super.call(this, props);
    _this.state = void 0;
    _this.id = uniqueId('recharts-pie-');

    _this.handleAnimationEnd = function () {
      var onAnimationEnd = _this.props.onAnimationEnd;

      _this.setState({
        isAnimationFinished: true
      });

      if (_isFunction(onAnimationEnd)) {
        onAnimationEnd();
      }
    };

    _this.handleAnimationStart = function () {
      var onAnimationStart = _this.props.onAnimationStart;

      _this.setState({
        isAnimationFinished: false
      });

      if (_isFunction(onAnimationStart)) {
        onAnimationStart();
      }
    };

    _this.state = {
      isAnimationFinished: !props.isAnimationActive,
      prevIsAnimationActive: props.isAnimationActive,
      prevAnimationId: props.animationId
    };
    return _this;
  }

  _createClass(Pie, [{
    key: "isActiveIndex",
    value: function isActiveIndex(i) {
      var activeIndex = this.props.activeIndex;

      if (Array.isArray(activeIndex)) {
        return activeIndex.indexOf(i) !== -1;
      }

      return i === activeIndex;
    }
  }, {
    key: "renderLabels",
    value: function renderLabels(sectors) {
      var isAnimationActive = this.props.isAnimationActive;

      if (isAnimationActive && !this.state.isAnimationFinished) {
        return null;
      }

      var _this$props = this.props,
          label = _this$props.label,
          labelLine = _this$props.labelLine,
          dataKey = _this$props.dataKey,
          valueKey = _this$props.valueKey;
      var pieProps = filterProps(this.props);
      var customLabelProps = filterProps(label);
      var customLabelLineProps = filterProps(labelLine);
      var offsetRadius = label && label.offsetRadius || 20;
      var labels = sectors.map(function (entry, i) {
        var midAngle = (entry.startAngle + entry.endAngle) / 2;
        var endPoint = polarToCartesian(entry.cx, entry.cy, entry.outerRadius + offsetRadius, midAngle);

        var labelProps = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, pieProps), entry), {}, {
          stroke: 'none'
        }, customLabelProps), {}, {
          index: i,
          textAnchor: Pie.getTextAnchor(endPoint.x, entry.cx)
        }, endPoint);

        var lineProps = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, pieProps), entry), {}, {
          fill: 'none',
          stroke: entry.fill
        }, customLabelLineProps), {}, {
          index: i,
          points: [polarToCartesian(entry.cx, entry.cy, entry.outerRadius, midAngle), endPoint],
          key: 'line'
        });

        var realDataKey = dataKey; // TODO: compatible to lower versions

        if (_isNil(dataKey) && _isNil(valueKey)) {
          realDataKey = 'value';
        } else if (_isNil(dataKey)) {
          realDataKey = valueKey;
        }

        return (
          /*#__PURE__*/
          // eslint-disable-next-line react/no-array-index-key
          React.createElement(Layer, {
            key: "label-".concat(i)
          }, labelLine && Pie.renderLabelLineItem(labelLine, lineProps), Pie.renderLabelItem(label, labelProps, getValueByDataKey(entry, realDataKey)))
        );
      });
      return /*#__PURE__*/React.createElement(Layer, {
        className: "recharts-pie-labels"
      }, labels);
    }
  }, {
    key: "renderSectorsStatically",
    value: function renderSectorsStatically(sectors) {
      var _this2 = this;

      var _this$props2 = this.props,
          activeShape = _this$props2.activeShape,
          blendStroke = _this$props2.blendStroke;
      return sectors.map(function (entry, i) {
        var sectorOptions = _this2.isActiveIndex(i) ? activeShape : null;

        var sectorProps = _objectSpread(_objectSpread({}, entry), {}, {
          stroke: blendStroke ? entry.fill : entry.stroke
        });

        return /*#__PURE__*/React.createElement(Layer, _extends({
          className: "recharts-pie-sector"
        }, adaptEventsOfChild(_this2.props, entry, i), {
          key: "sector-".concat(i) // eslint-disable-line react/no-array-index-key

        }), Pie.renderSectorItem(sectorOptions, sectorProps));
      });
    }
  }, {
    key: "renderSectorsWithAnimation",
    value: function renderSectorsWithAnimation() {
      var _this3 = this;

      var _this$props3 = this.props,
          sectors = _this$props3.sectors,
          isAnimationActive = _this$props3.isAnimationActive,
          animationBegin = _this$props3.animationBegin,
          animationDuration = _this$props3.animationDuration,
          animationEasing = _this$props3.animationEasing,
          animationId = _this$props3.animationId;
      var _this$state = this.state,
          prevSectors = _this$state.prevSectors,
          prevIsAnimationActive = _this$state.prevIsAnimationActive;
      return /*#__PURE__*/React.createElement(Animate, {
        begin: animationBegin,
        duration: animationDuration,
        isActive: isAnimationActive,
        easing: animationEasing,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "pie-".concat(animationId, "-").concat(prevIsAnimationActive),
        onAnimationStart: this.handleAnimationStart,
        onAnimationEnd: this.handleAnimationEnd
      }, function (_ref) {
        var t = _ref.t;
        var stepData = [];
        var first = sectors && sectors[0];
        var curAngle = first.startAngle;
        sectors.forEach(function (entry, index) {
          var prev = prevSectors && prevSectors[index];
          var paddingAngle = index > 0 ? _get(entry, 'paddingAngle', 0) : 0;

          if (prev) {
            var angleIp = interpolateNumber(prev.endAngle - prev.startAngle, entry.endAngle - entry.startAngle);

            var latest = _objectSpread(_objectSpread({}, entry), {}, {
              startAngle: curAngle + paddingAngle,
              endAngle: curAngle + angleIp(t) + paddingAngle
            });

            stepData.push(latest);
            curAngle = latest.endAngle;
          } else {
            var endAngle = entry.endAngle,
                startAngle = entry.startAngle;
            var interpolatorAngle = interpolateNumber(0, endAngle - startAngle);
            var deltaAngle = interpolatorAngle(t);

            var _latest = _objectSpread(_objectSpread({}, entry), {}, {
              startAngle: curAngle + paddingAngle,
              endAngle: curAngle + deltaAngle + paddingAngle
            });

            stepData.push(_latest);
            curAngle = _latest.endAngle;
          }
        });
        return /*#__PURE__*/React.createElement(Layer, null, _this3.renderSectorsStatically(stepData));
      });
    }
  }, {
    key: "renderSectors",
    value: function renderSectors() {
      var _this$props4 = this.props,
          sectors = _this$props4.sectors,
          isAnimationActive = _this$props4.isAnimationActive;
      var prevSectors = this.state.prevSectors;

      if (isAnimationActive && sectors && sectors.length && (!prevSectors || !_isEqual(prevSectors, sectors))) {
        return this.renderSectorsWithAnimation();
      }

      return this.renderSectorsStatically(sectors);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          hide = _this$props5.hide,
          sectors = _this$props5.sectors,
          className = _this$props5.className,
          label = _this$props5.label,
          cx = _this$props5.cx,
          cy = _this$props5.cy,
          innerRadius = _this$props5.innerRadius,
          outerRadius = _this$props5.outerRadius,
          isAnimationActive = _this$props5.isAnimationActive;
      var isAnimationFinished = this.state.isAnimationFinished;

      if (hide || !sectors || !sectors.length || !isNumber(cx) || !isNumber(cy) || !isNumber(innerRadius) || !isNumber(outerRadius)) {
        return null;
      }

      var layerClass = classNames('recharts-pie', className);
      return /*#__PURE__*/React.createElement(Layer, {
        className: layerClass
      }, this.renderSectors(), label && this.renderLabels(sectors), Label.renderCallByParent(this.props, null, false), (!isAnimationActive || isAnimationFinished) && LabelList.renderCallByParent(this.props, sectors, false));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (prevState.prevIsAnimationActive !== nextProps.isAnimationActive) {
        return {
          prevIsAnimationActive: nextProps.isAnimationActive,
          prevAnimationId: nextProps.animationId,
          curSectors: nextProps.sectors,
          prevSectors: []
        };
      }

      if (nextProps.isAnimationActive && nextProps.animationId !== prevState.prevAnimationId) {
        return {
          prevAnimationId: nextProps.animationId,
          curSectors: nextProps.sectors,
          prevSectors: prevState.curSectors
        };
      }

      if (nextProps.sectors !== prevState.curSectors) {
        return {
          curSectors: nextProps.sectors
        };
      }

      return null;
    }
  }, {
    key: "getTextAnchor",
    value: function getTextAnchor(x, cx) {
      if (x > cx) {
        return 'start';
      }

      if (x < cx) {
        return 'end';
      }

      return 'middle';
    }
  }, {
    key: "renderLabelLineItem",
    value: function renderLabelLineItem(option, props) {
      if ( /*#__PURE__*/React.isValidElement(option)) {
        return /*#__PURE__*/React.cloneElement(option, props);
      }

      if (_isFunction(option)) {
        return option(props);
      }

      return /*#__PURE__*/React.createElement(Curve, _extends({}, props, {
        type: "linear",
        className: "recharts-pie-label-line"
      }));
    }
  }, {
    key: "renderLabelItem",
    value: function renderLabelItem(option, props, value) {
      if ( /*#__PURE__*/React.isValidElement(option)) {
        return /*#__PURE__*/React.cloneElement(option, props);
      }

      var label = value;

      if (_isFunction(option)) {
        label = option(props);

        if ( /*#__PURE__*/React.isValidElement(label)) {
          return label;
        }
      }

      return /*#__PURE__*/React.createElement(Text, _extends({}, props, {
        alignmentBaseline: "middle",
        className: "recharts-pie-label-text"
      }), label);
    }
  }, {
    key: "renderSectorItem",
    value: function renderSectorItem(option, props) {
      if ( /*#__PURE__*/React.isValidElement(option)) {
        return /*#__PURE__*/React.cloneElement(option, props);
      }

      if (_isFunction(option)) {
        return option(props);
      }

      if (_isPlainObject(option)) {
        return /*#__PURE__*/React.createElement(Sector, _extends({}, props, option));
      }

      return /*#__PURE__*/React.createElement(Sector, props);
    }
  }]);

  return Pie;
}(PureComponent);
Pie.displayName = 'Pie';
Pie.defaultProps = {
  stroke: '#fff',
  fill: '#808080',
  legendType: 'rect',
  cx: '50%',
  cy: '50%',
  startAngle: 0,
  endAngle: 360,
  innerRadius: 0,
  outerRadius: '80%',
  paddingAngle: 0,
  labelLine: true,
  hide: false,
  minAngle: 0,
  isAnimationActive: !Global.isSsr,
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: 'ease',
  nameKey: 'name',
  blendStroke: false
};

Pie.parseDeltaAngle = function (startAngle, endAngle) {
  var sign = mathSign(endAngle - startAngle);
  var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 360);
  return sign * deltaAngle;
};

Pie.getRealPieData = function (item) {
  var _item$props = item.props,
      data = _item$props.data,
      children = _item$props.children;
  var presentationProps = filterProps(item.props);
  var cells = findAllByType(children, Cell.displayName);

  if (data && data.length) {
    return data.map(function (entry, index) {
      return _objectSpread(_objectSpread(_objectSpread({
        payload: entry
      }, presentationProps), entry), cells && cells[index] && cells[index].props);
    });
  }

  if (cells && cells.length) {
    return cells.map(function (cell) {
      return _objectSpread(_objectSpread({}, presentationProps), cell.props);
    });
  }

  return [];
};

Pie.parseCoordinateOfPie = function (item, offset) {
  var top = offset.top,
      left = offset.left,
      width = offset.width,
      height = offset.height;
  var maxPieRadius = getMaxRadius(width, height);
  var cx = left + getPercentValue(item.props.cx, width, width / 2);
  var cy = top + getPercentValue(item.props.cy, height, height / 2);
  var innerRadius = getPercentValue(item.props.innerRadius, maxPieRadius, 0);
  var outerRadius = getPercentValue(item.props.outerRadius, maxPieRadius, maxPieRadius * 0.8);
  var maxRadius = item.props.maxRadius || Math.sqrt(width * width + height * height) / 2;
  return {
    cx: cx,
    cy: cy,
    innerRadius: innerRadius,
    outerRadius: outerRadius,
    maxRadius: maxRadius
  };
};

Pie.getComposedData = function (_ref2) {
  var item = _ref2.item,
      offset = _ref2.offset;
  var pieData = Pie.getRealPieData(item);

  if (!pieData || !pieData.length) {
    return null;
  }

  var _item$props2 = item.props,
      cornerRadius = _item$props2.cornerRadius,
      startAngle = _item$props2.startAngle,
      endAngle = _item$props2.endAngle,
      paddingAngle = _item$props2.paddingAngle,
      dataKey = _item$props2.dataKey,
      nameKey = _item$props2.nameKey,
      valueKey = _item$props2.valueKey,
      tooltipType = _item$props2.tooltipType;
  var minAngle = Math.abs(item.props.minAngle);
  var coordinate = Pie.parseCoordinateOfPie(item, offset);
  var deltaAngle = Pie.parseDeltaAngle(startAngle, endAngle);
  var absDeltaAngle = Math.abs(deltaAngle);
  var realDataKey = dataKey;

  if (_isNil(dataKey) && _isNil(valueKey)) {
    warn(false, "Use \"dataKey\" to specify the value of pie,\n      the props \"valueKey\" will be deprecated in 1.1.0");
    realDataKey = 'value';
  } else if (_isNil(dataKey)) {
    warn(false, "Use \"dataKey\" to specify the value of pie,\n      the props \"valueKey\" will be deprecated in 1.1.0");
    realDataKey = valueKey;
  }

  var notZeroItemCount = pieData.filter(function (entry) {
    return getValueByDataKey(entry, realDataKey, 0) !== 0;
  }).length;
  var totalPadingAngle = (absDeltaAngle >= 360 ? notZeroItemCount : notZeroItemCount - 1) * paddingAngle;
  var realTotalAngle = absDeltaAngle - notZeroItemCount * minAngle - totalPadingAngle;
  var sum = pieData.reduce(function (result, entry) {
    var val = getValueByDataKey(entry, realDataKey, 0);
    return result + (isNumber(val) ? val : 0);
  }, 0);
  var sectors;

  if (sum > 0) {
    var prev;
    sectors = pieData.map(function (entry, i) {
      var val = getValueByDataKey(entry, realDataKey, 0);
      var name = getValueByDataKey(entry, nameKey, i);
      var percent = (isNumber(val) ? val : 0) / sum;
      var tempStartAngle;

      if (i) {
        tempStartAngle = prev.endAngle + mathSign(deltaAngle) * paddingAngle * (val !== 0 ? 1 : 0);
      } else {
        tempStartAngle = startAngle;
      }

      var tempEndAngle = tempStartAngle + mathSign(deltaAngle) * ((val !== 0 ? minAngle : 0) + percent * realTotalAngle);
      var midAngle = (tempStartAngle + tempEndAngle) / 2;
      var middleRadius = (coordinate.innerRadius + coordinate.outerRadius) / 2;
      var tooltipPayload = [{
        name: name,
        value: val,
        payload: entry,
        dataKey: realDataKey,
        type: tooltipType
      }];
      var tooltipPosition = polarToCartesian(coordinate.cx, coordinate.cy, middleRadius, midAngle);
      prev = _objectSpread(_objectSpread(_objectSpread({
        percent: percent,
        cornerRadius: cornerRadius,
        name: name,
        tooltipPayload: tooltipPayload,
        midAngle: midAngle,
        middleRadius: middleRadius,
        tooltipPosition: tooltipPosition
      }, entry), coordinate), {}, {
        value: getValueByDataKey(entry, realDataKey),
        startAngle: tempStartAngle,
        endAngle: tempEndAngle,
        payload: entry,
        paddingAngle: mathSign(deltaAngle) * paddingAngle
      });
      return prev;
    });
  }

  return _objectSpread(_objectSpread({}, coordinate), {}, {
    sectors: sectors,
    data: pieData
  });
};