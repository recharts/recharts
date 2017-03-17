'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _debounce2 = require('lodash/debounce');

var _debounce3 = _interopRequireDefault(_debounce2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp; /**
                    * @fileOverview Wrapper component to make charts adapt to the size of parent * DOM
                    */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactResizeDetector = require('react-resize-detector');

var _reactResizeDetector2 = _interopRequireDefault(_reactResizeDetector);

var _DataUtils = require('../util/DataUtils');

var _LogUtils = require('../util/LogUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResponsiveContainer = (_temp = _class = function (_Component) {
  _inherits(ResponsiveContainer, _Component);

  function ResponsiveContainer(props) {
    _classCallCheck(this, ResponsiveContainer);

    var _this = _possibleConstructorReturn(this, (ResponsiveContainer.__proto__ || Object.getPrototypeOf(ResponsiveContainer)).call(this, props));

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
          _this.setState({ containerWidth: containerWidth, containerHeight: containerHeight });
        }
      }
    };

    _this.state = {
      containerWidth: -1,
      containerHeight: -1
    };

    _this.handleResize = props.debounce > 0 ? (0, _debounce3.default)(_this.updateDimensionsImmediate, props.debounce) : _this.updateDimensionsImmediate;
    return _this;
  }

  /* eslint-disable  react/no-did-mount-set-state */


  _createClass(ResponsiveContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.mounted = true;

      var size = this.getContainerSize();

      if (size) {
        this.setState(size);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.mounted = false;
    }
  }, {
    key: 'getContainerSize',
    value: function getContainerSize() {
      if (!this.container) {
        return null;
      }

      return {
        containerWidth: this.container.clientWidth,
        containerHeight: this.container.clientHeight
      };
    }
  }, {
    key: 'renderChart',
    value: function renderChart() {
      var _state = this.state,
          containerWidth = _state.containerWidth,
          containerHeight = _state.containerHeight;


      if (containerWidth < 0 || containerHeight < 0) {
        return null;
      }

      var _props = this.props,
          aspect = _props.aspect,
          width = _props.width,
          height = _props.height,
          minWidth = _props.minWidth,
          minHeight = _props.minHeight,
          maxHeight = _props.maxHeight,
          children = _props.children;


      (0, _LogUtils.warn)((0, _DataUtils.isPercent)(width) || (0, _DataUtils.isPercent)(height), 'The width(%s) and height(%s) are both fixed numbers,\n       maybe you don\'t need to use a ResponsiveContainer.', width, height);

      (0, _LogUtils.warn)(!aspect || aspect > 0, 'The aspect(%s) must be greater than zero.', aspect);

      var calculatedWidth = (0, _DataUtils.isPercent)(width) ? containerWidth : width;
      var calculatedHeight = (0, _DataUtils.isPercent)(height) ? containerHeight : height;

      if (aspect && aspect > 0) {
        // Preserve the desired aspect ratio
        calculatedHeight = calculatedWidth / aspect;
        // if maxHeight is set, overwrite if calculatedHeight is greater than maxHeight
        if (maxHeight && calculatedHeight > maxHeight) {
          calculatedHeight = maxHeight;
        }
      }

      (0, _LogUtils.warn)(calculatedWidth > 0 && calculatedHeight > 0, 'The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.', calculatedWidth, calculatedHeight, width, height, minWidth, minHeight, aspect);

      return _react2.default.cloneElement(children, {
        width: calculatedWidth,
        height: calculatedHeight
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          minWidth = _props2.minWidth,
          minHeight = _props2.minHeight,
          width = _props2.width,
          height = _props2.height,
          maxHeight = _props2.maxHeight;

      var style = { width: width, height: height, minWidth: minWidth, minHeight: minHeight, maxHeight: maxHeight };

      return _react2.default.createElement(
        'div',
        {
          className: 'recharts-responsive-container',
          style: style,
          ref: function ref(node) {
            _this2.container = node;
          }
        },
        this.renderChart(),
        _react2.default.createElement(_reactResizeDetector2.default, { handleWidth: true, handleHeight: true, onResize: this.handleResize })
      );
    }
  }]);

  return ResponsiveContainer;
}(_react.Component), _class.displayName = 'ResponsiveContainer', _class.propTypes = {
  aspect: _react.PropTypes.number,
  width: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  height: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  minHeight: _react.PropTypes.number,
  minWidth: _react.PropTypes.number,
  maxHeight: _react.PropTypes.number,
  children: _react.PropTypes.node.isRequired,
  debounce: _react.PropTypes.number
}, _class.defaultProps = {
  width: '100%',
  height: '100%',
  debounce: 0
}, _temp);
exports.default = ResponsiveContainer;