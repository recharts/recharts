function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import _isEqual from "lodash/isEqual";
import _isPlainObject from "lodash/isPlainObject";
import _isFunction from "lodash/isFunction";
import _omit from "lodash/omit";
import _isString from "lodash/isString";
import _isNumber from "lodash/isNumber";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
 * @fileOverview Render sectors of a funnel
 */
import React, { PureComponent } from 'react';
import Animate from 'react-smooth';
import classNames from 'classnames';
import { Layer } from '../container/Layer';
import { Trapezoid } from '../shape/Trapezoid';
import { LabelList } from '../component/LabelList';
import { Cell } from '../component/Cell';
import { findAllByType } from '../util/ReactUtils';
import { Global } from '../util/Global';
import { interpolateNumber } from '../util/DataUtils';
import { getValueByDataKey } from '../util/ChartUtils';
import { filterProps, adaptEventsOfChild } from '../util/types';
export var Funnel = /*#__PURE__*/function (_PureComponent) {
  _inherits(Funnel, _PureComponent);

  var _super = _createSuper(Funnel);

  function Funnel() {
    var _this;

    _classCallCheck(this, Funnel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      isAnimationFinished: false
    };

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

    return _this;
  }

  _createClass(Funnel, [{
    key: "isActiveIndex",
    value: function isActiveIndex(i) {
      var activeIndex = this.props.activeIndex;

      if (Array.isArray(activeIndex)) {
        return activeIndex.indexOf(i) !== -1;
      }

      return i === activeIndex;
    }
  }, {
    key: "renderTrapezoidsStatically",
    value: function renderTrapezoidsStatically(trapezoids) {
      var _this2 = this;

      var activeShape = this.props.activeShape;
      return trapezoids.map(function (entry, i) {
        var trapezoidOptions = _this2.isActiveIndex(i) ? activeShape : null;

        var trapezoidProps = _objectSpread(_objectSpread({}, entry), {}, {
          stroke: entry.stroke
        });

        return /*#__PURE__*/React.createElement(Layer, _extends({
          className: "recharts-funnel-trapezoid"
        }, adaptEventsOfChild(_this2.props, entry, i), {
          key: "trapezoid-".concat(i) // eslint-disable-line react/no-array-index-key

        }), Funnel.renderTrapezoidItem(trapezoidOptions, trapezoidProps));
      });
    }
  }, {
    key: "renderTrapezoidsWithAnimation",
    value: function renderTrapezoidsWithAnimation() {
      var _this3 = this;

      var _this$props = this.props,
          trapezoids = _this$props.trapezoids,
          isAnimationActive = _this$props.isAnimationActive,
          animationBegin = _this$props.animationBegin,
          animationDuration = _this$props.animationDuration,
          animationEasing = _this$props.animationEasing,
          animationId = _this$props.animationId;
      var prevTrapezoids = this.state.prevTrapezoids;
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
        key: "funnel-".concat(animationId),
        onAnimationStart: this.handleAnimationStart,
        onAnimationEnd: this.handleAnimationEnd
      }, function (_ref) {
        var t = _ref.t;
        var stepData = trapezoids.map(function (entry, index) {
          var prev = prevTrapezoids && prevTrapezoids[index];

          if (prev) {
            var _interpolatorX = interpolateNumber(prev.x, entry.x);

            var _interpolatorY = interpolateNumber(prev.y, entry.y);

            var _interpolatorUpperWidth = interpolateNumber(prev.upperWidth, entry.upperWidth);

            var _interpolatorLowerWidth = interpolateNumber(prev.lowerWidth, entry.lowerWidth);

            var _interpolatorHeight = interpolateNumber(prev.height, entry.height);

            return _objectSpread(_objectSpread({}, entry), {}, {
              x: _interpolatorX(t),
              y: _interpolatorY(t),
              upperWidth: _interpolatorUpperWidth(t),
              lowerWidth: _interpolatorLowerWidth(t),
              height: _interpolatorHeight(t)
            });
          }

          var interpolatorX = interpolateNumber(entry.x + entry.upperWidth / 2, entry.x);
          var interpolatorY = interpolateNumber(entry.y + entry.height / 2, entry.y);
          var interpolatorUpperWidth = interpolateNumber(0, entry.upperWidth);
          var interpolatorLowerWidth = interpolateNumber(0, entry.lowerWidth);
          var interpolatorHeight = interpolateNumber(0, entry.height);
          return _objectSpread(_objectSpread({}, entry), {}, {
            x: interpolatorX(t),
            y: interpolatorY(t),
            upperWidth: interpolatorUpperWidth(t),
            lowerWidth: interpolatorLowerWidth(t),
            height: interpolatorHeight(t)
          });
        });
        return /*#__PURE__*/React.createElement(Layer, null, _this3.renderTrapezoidsStatically(stepData));
      });
    }
  }, {
    key: "renderTrapezoids",
    value: function renderTrapezoids() {
      var _this$props2 = this.props,
          trapezoids = _this$props2.trapezoids,
          isAnimationActive = _this$props2.isAnimationActive;
      var prevTrapezoids = this.state.prevTrapezoids;

      if (isAnimationActive && trapezoids && trapezoids.length && (!prevTrapezoids || !_isEqual(prevTrapezoids, trapezoids))) {
        return this.renderTrapezoidsWithAnimation();
      }

      return this.renderTrapezoidsStatically(trapezoids);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          hide = _this$props3.hide,
          trapezoids = _this$props3.trapezoids,
          className = _this$props3.className,
          isAnimationActive = _this$props3.isAnimationActive;
      var isAnimationFinished = this.state.isAnimationFinished;

      if (hide || !trapezoids || !trapezoids.length) {
        return null;
      }

      var layerClass = classNames('recharts-trapezoids', className);
      return /*#__PURE__*/React.createElement(Layer, {
        className: layerClass
      }, this.renderTrapezoids(), (!isAnimationActive || isAnimationFinished) && LabelList.renderCallByParent(this.props, trapezoids));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.animationId !== prevState.prevAnimationId) {
        return {
          prevAnimationId: nextProps.animationId,
          curTrapezoids: nextProps.trapezoids,
          prevTrapezoids: prevState.curTrapezoids
        };
      }

      if (nextProps.trapezoids !== prevState.curTrapezoids) {
        return {
          curTrapezoids: nextProps.trapezoids
        };
      }

      return null;
    }
  }, {
    key: "renderTrapezoidItem",
    value: function renderTrapezoidItem(option, props) {
      if ( /*#__PURE__*/React.isValidElement(option)) {
        return /*#__PURE__*/React.cloneElement(option, props);
      }

      if (_isFunction(option)) {
        return option(props);
      }

      if (_isPlainObject(option)) {
        return /*#__PURE__*/React.createElement(Trapezoid, _extends({}, props, option));
      }

      return /*#__PURE__*/React.createElement(Trapezoid, props);
    }
  }]);

  return Funnel;
}(PureComponent);
Funnel.displayName = 'Funnel';
Funnel.defaultProps = {
  stroke: '#fff',
  fill: '#808080',
  legendType: 'rect',
  labelLine: true,
  hide: false,
  isAnimationActive: !Global.isSsr,
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: 'ease',
  nameKey: 'name',
  lastShapeType: 'triangle'
};

Funnel.getRealFunnelData = function (item) {
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

Funnel.getRealWidthHeight = function (item, offset) {
  var customWidth = item.props.width;
  var width = offset.width,
      height = offset.height,
      left = offset.left,
      right = offset.right,
      top = offset.top,
      bottom = offset.bottom;
  var realHeight = height;
  var realWidth = width;

  if (_isNumber(customWidth)) {
    realWidth = customWidth;
  } else if (_isString(customWidth)) {
    realWidth = realWidth * parseFloat(customWidth) / 100;
  }

  return {
    realWidth: realWidth - left - right - 50,
    realHeight: realHeight - bottom - top,
    offsetX: (width - realWidth) / 2,
    offsetY: (height - realHeight) / 2
  };
};

Funnel.getComposedData = function (_ref2) {
  var item = _ref2.item,
      offset = _ref2.offset;
  var funnelData = Funnel.getRealFunnelData(item);
  var _item$props2 = item.props,
      dataKey = _item$props2.dataKey,
      nameKey = _item$props2.nameKey,
      tooltipType = _item$props2.tooltipType,
      lastShapeType = _item$props2.lastShapeType,
      reversed = _item$props2.reversed;
  var left = offset.left,
      top = offset.top;

  var _Funnel$getRealWidthH = Funnel.getRealWidthHeight(item, offset),
      realHeight = _Funnel$getRealWidthH.realHeight,
      realWidth = _Funnel$getRealWidthH.realWidth,
      offsetX = _Funnel$getRealWidthH.offsetX,
      offsetY = _Funnel$getRealWidthH.offsetY;

  var maxValue = Math.max.apply(null, funnelData.map(function (entry) {
    return getValueByDataKey(entry, dataKey, 0);
  }));
  var len = funnelData.length;
  var rowHeight = realHeight / len;
  var parentViewBox = {
    x: offset.left,
    y: offset.top,
    width: offset.width,
    height: offset.height
  };
  var trapezoids = funnelData.map(function (entry, i) {
    var rawVal = getValueByDataKey(entry, dataKey, 0);
    var name = getValueByDataKey(entry, nameKey, i);
    var val = rawVal;
    var nextVal;

    if (i !== len - 1) {
      nextVal = getValueByDataKey(funnelData[i + 1], dataKey, 0);

      if (nextVal instanceof Array) {
        var _nextVal = nextVal;

        var _nextVal2 = _slicedToArray(_nextVal, 1);

        nextVal = _nextVal2[0];
      }
    } else if (rawVal instanceof Array && rawVal.length === 2) {
      var _rawVal = _slicedToArray(rawVal, 2);

      val = _rawVal[0];
      nextVal = _rawVal[1];
    } else if (lastShapeType === 'rectangle') {
      nextVal = val;
    } else {
      nextVal = 0;
    }

    var x = (maxValue - val) * realWidth / (2 * maxValue) + top + 25 + offsetX;
    var y = rowHeight * i + left + offsetY;
    var upperWidth = val / maxValue * realWidth;
    var lowerWidth = nextVal / maxValue * realWidth;
    var tooltipPayload = [{
      name: name,
      value: val,
      payload: entry,
      dataKey: dataKey,
      type: tooltipType
    }];
    var tooltipPosition = {
      x: x + upperWidth / 2,
      y: y + rowHeight / 2
    };
    return _objectSpread(_objectSpread({
      x: x,
      y: y,
      width: Math.max(upperWidth, lowerWidth),
      upperWidth: upperWidth,
      lowerWidth: lowerWidth,
      height: rowHeight,
      name: name,
      val: val,
      tooltipPayload: tooltipPayload,
      tooltipPosition: tooltipPosition
    }, _omit(entry, 'width')), {}, {
      payload: entry,
      parentViewBox: parentViewBox,
      labelViewBox: {
        x: x + (upperWidth - lowerWidth) / 4,
        y: y,
        width: Math.abs(upperWidth - lowerWidth) / 2 + Math.min(upperWidth, lowerWidth),
        height: rowHeight
      }
    });
  });

  if (reversed) {
    trapezoids = trapezoids.map(function (entry, index) {
      var newY = entry.y - index * rowHeight + (len - 1 - index) * rowHeight;
      return _objectSpread(_objectSpread({}, entry), {}, {
        upperWidth: entry.lowerWidth,
        lowerWidth: entry.upperWidth,
        x: entry.x - (entry.lowerWidth - entry.upperWidth) / 2,
        y: entry.y - index * rowHeight + (len - 1 - index) * rowHeight,
        tooltipPosition: _objectSpread(_objectSpread({}, entry.tooltipPosition), {}, {
          y: newY + rowHeight / 2
        }),
        labelViewBox: _objectSpread(_objectSpread({}, entry.labelViewBox), {}, {
          y: newY
        })
      });
    });
  }

  return {
    trapezoids: trapezoids,
    data: funnelData
  };
};