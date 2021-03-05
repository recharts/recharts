function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import _debounce from "lodash/debounce";

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

/**
 * @fileOverview Wrapper component to make charts adapt to the size of parent * DOM
 */
import classNames from 'classnames';
import React, { Component } from 'react';
import ReactResizeDetector from 'react-resize-detector';
import { isPercent } from '../util/DataUtils';
import { warn } from '../util/LogUtils';
export var ResponsiveContainer = /*#__PURE__*/function (_Component) {
  _inherits(ResponsiveContainer, _Component);

  var _super = _createSuper(ResponsiveContainer);

  function ResponsiveContainer(props) {
    var _this;

    _classCallCheck(this, ResponsiveContainer);

    _this = _super.call(this, props);
    _this.handleResize = void 0;
    _this.mounted = void 0;
    _this.containerRef = void 0;

    _this.updateDimensionsImmediate = function () {
      if (!_this.mounted) {
        return;
      }

      var newSize = _this.getContainerSize();

      if (newSize) {
        var _this$state = _this.state,
            oldWidth = _this$state.containerWidth,
            oldHeight = _this$state.containerHeight;
        var containerWidth = newSize.containerWidth,
            containerHeight = newSize.containerHeight;

        if (containerWidth !== oldWidth || containerHeight !== oldHeight) {
          _this.setState({
            containerWidth: containerWidth,
            containerHeight: containerHeight
          });
        }
      }
    };

    _this.state = {
      containerWidth: -1,
      containerHeight: -1
    };
    _this.handleResize = props.debounce > 0 ? _debounce(_this.updateDimensionsImmediate, props.debounce) : _this.updateDimensionsImmediate;
    _this.containerRef = /*#__PURE__*/React.createRef();
    return _this;
  }
  /* eslint-disable  react/no-did-mount-set-state */


  _createClass(ResponsiveContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mounted = true;
      var size = this.getContainerSize();

      if (size) {
        this.setState(size);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false;
    }
  }, {
    key: "getContainerSize",
    value: function getContainerSize() {
      if (!this.containerRef.current) {
        return null;
      }

      return {
        containerWidth: this.containerRef.current.clientWidth,
        containerHeight: this.containerRef.current.clientHeight
      };
    }
  }, {
    key: "renderChart",
    value: function renderChart() {
      var _this$state2 = this.state,
          containerWidth = _this$state2.containerWidth,
          containerHeight = _this$state2.containerHeight;

      if (containerWidth < 0 || containerHeight < 0) {
        return null;
      }

      var _this$props = this.props,
          aspect = _this$props.aspect,
          width = _this$props.width,
          height = _this$props.height,
          minWidth = _this$props.minWidth,
          minHeight = _this$props.minHeight,
          maxHeight = _this$props.maxHeight,
          children = _this$props.children;
      warn(isPercent(width) || isPercent(height), "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.", width, height);
      warn(!aspect || aspect > 0, 'The aspect(%s) must be greater than zero.', aspect);
      var calculatedWidth = isPercent(width) ? containerWidth : width;
      var calculatedHeight = isPercent(height) ? containerHeight : height;

      if (aspect && aspect > 0) {
        // Preserve the desired aspect ratio
        if (calculatedWidth) {
          // Will default to using width for aspect ratio
          calculatedHeight = calculatedWidth / aspect;
        } else if (calculatedHeight) {
          // But we should also take height into consideration
          calculatedWidth = calculatedHeight * aspect;
        } // if maxHeight is set, overwrite if calculatedHeight is greater than maxHeight


        if (maxHeight && calculatedHeight > maxHeight) {
          calculatedHeight = maxHeight;
        }
      }

      warn(calculatedWidth > 0 || calculatedHeight > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", calculatedWidth, calculatedHeight, width, height, minWidth, minHeight, aspect);
      return /*#__PURE__*/React.cloneElement(children, {
        width: calculatedWidth,
        height: calculatedHeight
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          minWidth = _this$props2.minWidth,
          minHeight = _this$props2.minHeight,
          width = _this$props2.width,
          height = _this$props2.height,
          maxHeight = _this$props2.maxHeight,
          id = _this$props2.id,
          className = _this$props2.className;
      var style = {
        width: width,
        height: height,
        minWidth: minWidth,
        minHeight: minHeight,
        maxHeight: maxHeight
      };
      return /*#__PURE__*/React.createElement(ReactResizeDetector, {
        handleWidth: true,
        handleHeight: true,
        onResize: this.handleResize,
        targetRef: this.containerRef
      }, /*#__PURE__*/React.createElement("div", _extends({}, id != null ? {
        id: "".concat(id)
      } : {}, {
        className: classNames('recharts-responsive-container', className),
        style: style,
        ref: this.containerRef
      }), this.renderChart()));
    }
  }]);

  return ResponsiveContainer;
}(Component);
ResponsiveContainer.defaultProps = {
  width: '100%',
  height: '100%',
  debounce: 0
};