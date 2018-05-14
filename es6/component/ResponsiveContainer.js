import _debounce from 'lodash/debounce';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview Wrapper component to make charts adapt to the size of parent * DOM
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactResizeDetector from 'react-resize-detector';

import { isPercent } from '../util/DataUtils';
import { warn } from '../util/LogUtils';

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

    _this.handleResize = props.debounce > 0 ? _debounce(_this.updateDimensionsImmediate, props.debounce) : _this.updateDimensionsImmediate;
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


      warn(isPercent(width) || isPercent(height), 'The width(%s) and height(%s) are both fixed numbers,\n       maybe you don\'t need to use a ResponsiveContainer.', width, height);

      warn(!aspect || aspect > 0, 'The aspect(%s) must be greater than zero.', aspect);

      var calculatedWidth = isPercent(width) ? containerWidth : width;
      var calculatedHeight = isPercent(height) ? containerHeight : height;

      if (aspect && aspect > 0) {
        // Preserve the desired aspect ratio
        calculatedHeight = calculatedWidth / aspect;
        // if maxHeight is set, overwrite if calculatedHeight is greater than maxHeight
        if (maxHeight && calculatedHeight > maxHeight) {
          calculatedHeight = maxHeight;
        }
      }

      warn(calculatedWidth > 0 || calculatedHeight > 0, 'The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.', calculatedWidth, calculatedHeight, width, height, minWidth, minHeight, aspect);

      return React.cloneElement(children, {
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
          maxHeight = _props2.maxHeight,
          id = _props2.id,
          className = _props2.className;

      var style = { width: width, height: height, minWidth: minWidth, minHeight: minHeight, maxHeight: maxHeight };

      return React.createElement(
        'div',
        {
          id: id,
          className: classNames('recharts-responsive-container', className),
          style: style,
          ref: function ref(node) {
            _this2.container = node;
          }
        },
        this.renderChart(),
        React.createElement(ReactResizeDetector, { handleWidth: true, handleHeight: true, onResize: this.handleResize })
      );
    }
  }]);

  return ResponsiveContainer;
}(Component), _class.displayName = 'ResponsiveContainer', _class.propTypes = {
  aspect: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node.isRequired,
  debounce: PropTypes.number,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}, _class.defaultProps = {
  width: '100%',
  height: '100%',
  debounce: 0
}, _temp);


export default ResponsiveContainer;