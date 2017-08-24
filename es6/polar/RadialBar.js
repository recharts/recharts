import _isEqual from 'lodash/isEqual';
import _isFunction from 'lodash/isFunction';
import _isArray from 'lodash/isArray';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp2;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview Render a group of radial bar
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Animate from 'react-smooth';

import Sector from '../shape/Sector';
import Layer from '../container/Layer';
import { PRESENTATION_ATTRIBUTES, LEGEND_TYPES, findAllByType, getPresentationAttributes, filterEventsOfChild, isSsr } from '../util/ReactUtils';
import pureRender from '../util/PureRender';
import LabelList from '../component/LabelList';
import Cell from '../component/Cell';
import { mathSign, interpolateNumber } from '../util/DataUtils';
import { getCateCoordinateOfBar, findPositionOfBar, getValueByDataKey, truncateByDomain, getBaseValueOfBar } from '../util/ChartUtils';

var RadialBar = pureRender(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(RadialBar, _Component);

  function RadialBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RadialBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RadialBar.__proto__ || Object.getPrototypeOf(RadialBar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isAnimationFinished: false
    }, _this.cachePrevData = function (data) {
      _this.setState({ prevData: data });
    }, _this.handleAnimationEnd = function () {
      _this.setState({ isAnimationFinished: true });
    }, _this.handleAnimationStart = function () {
      _this.setState({ isAnimationFinished: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RadialBar, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _props = this.props,
          animationId = _props.animationId,
          data = _props.data;


      if (nextProps.animationId !== animationId) {
        this.cachePrevData(data);
      }
    }
  }, {
    key: 'getDeltaAngle',
    value: function getDeltaAngle() {
      var _props2 = this.props,
          startAngle = _props2.startAngle,
          endAngle = _props2.endAngle;

      var sign = mathSign(endAngle - startAngle);
      var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 360);

      return sign * deltaAngle;
    }
  }, {
    key: 'renderSectorShape',
    value: function renderSectorShape(shape, props) {
      var sectorShape = void 0;

      if (React.isValidElement(shape)) {
        sectorShape = React.cloneElement(shape, props);
      } else if (_isFunction(shape)) {
        sectorShape = shape(props);
      } else {
        sectorShape = React.createElement(Sector, props);
      }

      return sectorShape;
    }
  }, {
    key: 'renderSectorsStatically',
    value: function renderSectorsStatically(sectors) {
      var _this2 = this;

      var _props3 = this.props,
          shape = _props3.shape,
          activeShape = _props3.activeShape,
          activeIndex = _props3.activeIndex,
          cornerRadius = _props3.cornerRadius,
          others = _objectWithoutProperties(_props3, ['shape', 'activeShape', 'activeIndex', 'cornerRadius']);

      var baseProps = getPresentationAttributes(others);

      return sectors.map(function (entry, i) {
        var props = _extends({}, baseProps, {
          cornerRadius: cornerRadius
        }, entry, filterEventsOfChild(_this2.props, entry, i), {
          key: 'sector-' + i,
          className: 'recharts-radial-bar-sector'
        });

        return _this2.renderSectorShape(i === activeIndex ? activeShape : shape, props);
      });
    }
  }, {
    key: 'renderSectorsWithAnimation',
    value: function renderSectorsWithAnimation() {
      var _this3 = this;

      var _props4 = this.props,
          data = _props4.data,
          isAnimationActive = _props4.isAnimationActive,
          animationBegin = _props4.animationBegin,
          animationDuration = _props4.animationDuration,
          animationEasing = _props4.animationEasing,
          animationId = _props4.animationId;
      var prevData = this.state.prevData;


      return React.createElement(
        Animate,
        {
          begin: animationBegin,
          duration: animationDuration,
          isActive: isAnimationActive,
          easing: animationEasing,
          from: { t: 0 },
          to: { t: 1 },
          key: 'radialBar-' + animationId,
          onAnimationStart: this.handleAnimationStart,
          onAnimationEnd: this.handleAnimationEnd
        },
        function (_ref2) {
          var t = _ref2.t;

          var stepData = data.map(function (entry, index) {
            var prev = prevData && prevData[index];

            if (prev) {
              var interpolatorStartAngle = interpolateNumber(prev.startAngle, entry.startAngle);
              var interpolatorEndAngle = interpolateNumber(prev.endAngle, entry.endAngle);

              return _extends({}, entry, {
                startAngle: interpolatorStartAngle(t),
                endAngle: interpolatorEndAngle(t)
              });
            }
            var endAngle = entry.endAngle,
                startAngle = entry.startAngle;

            var interpolator = interpolateNumber(startAngle, endAngle);

            return _extends({}, entry, { endAngle: interpolator(t) });
          });

          return React.createElement(
            Layer,
            null,
            _this3.renderSectorsStatically(stepData)
          );
        }
      );
    }
  }, {
    key: 'renderSectors',
    value: function renderSectors() {
      var _props5 = this.props,
          data = _props5.data,
          isAnimationActive = _props5.isAnimationActive;
      var prevData = this.state.prevData;


      if (isAnimationActive && data && data.length && (!prevData || !_isEqual(prevData, data))) {
        return this.renderSectorsWithAnimation();
      }

      return this.renderSectorsStatically(data);
    }
  }, {
    key: 'renderBackground',
    value: function renderBackground(sectors) {
      var _this4 = this;

      var cornerRadius = this.props.cornerRadius;

      var backgroundProps = getPresentationAttributes(this.props.background);

      return sectors.map(function (entry, i) {
        // eslint-disable-next-line no-unused-vars
        var value = entry.value,
            background = entry.background,
            rest = _objectWithoutProperties(entry, ['value', 'background']);

        if (!background) {
          return null;
        }

        var props = _extends({
          cornerRadius: cornerRadius
        }, rest, {
          fill: '#eee'
        }, background, backgroundProps, filterEventsOfChild(_this4.props, entry, i), {
          index: i,
          key: 'sector-' + i,
          className: 'recharts-radial-bar-background-sector'
        });

        return _this4.renderSectorShape(background, props);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props6 = this.props,
          hide = _props6.hide,
          data = _props6.data,
          className = _props6.className,
          background = _props6.background,
          isAnimationActive = _props6.isAnimationActive;


      if (hide || !data || !data.length) {
        return null;
      }

      var isAnimationFinished = this.state.isAnimationFinished;

      var layerClass = classNames('recharts-area', className);

      return React.createElement(
        Layer,
        { className: layerClass },
        background && React.createElement(
          Layer,
          { className: 'recharts-radial-bar-background' },
          this.renderBackground(data)
        ),
        React.createElement(
          Layer,
          { className: 'recharts-radial-bar-sectors' },
          this.renderSectors(data)
        ),
        (!isAnimationActive || isAnimationFinished) && LabelList.renderCallByParent(_extends({}, this.props, {
          clockWise: this.getDeltaAngle() < 0
        }), data)
      );
    }
  }]);

  return RadialBar;
}(Component), _class2.displayName = 'RadialBar', _class2.propTypes = _extends({}, PRESENTATION_ATTRIBUTES, {
  className: PropTypes.string,
  angleAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  radiusAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  shape: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  activeShape: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.element]),
  activeIndex: PropTypes.number,
  dataKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.func]).isRequired,

  cornerRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  minPointSize: PropTypes.number,
  maxBarSize: PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.shape({
    cx: PropTypes.number,
    cy: PropTypes.number,
    innerRadius: PropTypes.number,
    outerRadius: PropTypes.number,
    value: PropTypes.value
  })),
  legendType: PropTypes.oneOf(LEGEND_TYPES),
  label: PropTypes.oneOfType([PropTypes.bool, PropTypes.func, PropTypes.element, PropTypes.object]),
  background: PropTypes.oneOfType([PropTypes.bool, PropTypes.func, PropTypes.object, PropTypes.element]),
  hide: PropTypes.bool,

  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onClick: PropTypes.func,

  isAnimationActive: PropTypes.bool,
  animationBegin: PropTypes.number,
  animationDuration: PropTypes.number,
  animationEasing: PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear', 'spring'])
}), _class2.defaultProps = {
  angleAxisId: 0,
  radiusAxisId: 0,
  minPointSize: 0,
  hide: false,
  legendType: 'rect',
  data: [],
  isAnimationActive: !isSsr(),
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: 'ease'
}, _class2.getComposedData = function (_ref3) {
  var item = _ref3.item,
      props = _ref3.props,
      radiusAxis = _ref3.radiusAxis,
      radiusAxisTicks = _ref3.radiusAxisTicks,
      angleAxis = _ref3.angleAxis,
      angleAxisTicks = _ref3.angleAxisTicks,
      displayedData = _ref3.displayedData,
      dataKey = _ref3.dataKey,
      stackedData = _ref3.stackedData,
      barPosition = _ref3.barPosition,
      bandSize = _ref3.bandSize,
      dataStartIndex = _ref3.dataStartIndex;

  var pos = findPositionOfBar(barPosition, item);
  if (!pos) {
    return [];
  }

  var cx = angleAxis.cx,
      cy = angleAxis.cy;
  var layout = props.layout;
  var _item$props = item.props,
      children = _item$props.children,
      minPointSize = _item$props.minPointSize;

  var numericAxis = layout === 'radial' ? angleAxis : radiusAxis;
  var stackedDomain = stackedData ? numericAxis.scale.domain() : null;
  var baseValue = getBaseValueOfBar({ props: props, numericAxis: numericAxis });
  var cells = findAllByType(children, Cell);
  var sectors = displayedData.map(function (entry, index) {
    var value = void 0,
        innerRadius = void 0,
        outerRadius = void 0,
        startAngle = void 0,
        endAngle = void 0,
        backgroundSector = void 0;

    if (stackedData) {
      value = truncateByDomain(stackedData[dataStartIndex + index], stackedDomain);
    } else {
      value = getValueByDataKey(entry, dataKey);
      if (!_isArray(value)) {
        value = [baseValue, value];
      }
    }

    if (layout === 'radial') {
      innerRadius = getCateCoordinateOfBar({
        axis: radiusAxis,
        ticks: radiusAxisTicks,
        bandSize: bandSize,
        offset: pos.offset,
        entry: entry,
        index: index
      });
      endAngle = angleAxis.scale(value[1]);
      startAngle = angleAxis.scale(value[0]);
      outerRadius = innerRadius + pos.size;
      var deltaAngle = endAngle - startAngle;

      if (Math.abs(minPointSize) > 0 && Math.abs(deltaAngle) < Math.abs(minPointSize)) {
        var delta = mathSign(deltaAngle || minPointSize) * (Math.abs(minPointSize) - Math.abs(deltaAngle));

        endAngle += delta;
      }
      backgroundSector = {
        background: {
          cx: cx, cy: cy, innerRadius: innerRadius, outerRadius: outerRadius, startAngle: props.startAngle,
          endAngle: props.endAngle
        }
      };
    } else {
      innerRadius = radiusAxis.scale(value[0]);
      outerRadius = radiusAxis.scale(value[1]);
      startAngle = getCateCoordinateOfBar({
        axis: angleAxis,
        ticks: angleAxisTicks,
        bandSize: bandSize,
        offset: pos.offset,
        entry: entry,
        index: index
      });
      endAngle = startAngle + pos.size;
      var deltaRadius = outerRadius - innerRadius;

      if (Math.abs(minPointSize) > 0 && Math.abs(deltaRadius) < Math.abs(minPointSize)) {
        var _delta = mathSign(deltaRadius || minPointSize) * (Math.abs(minPointSize) - Math.abs(deltaRadius));
        outerRadius += _delta;
      }
    }

    return _extends({}, entry, backgroundSector, {
      payload: entry,
      value: stackedData ? value : value[1],
      cx: cx, cy: cy, innerRadius: innerRadius, outerRadius: outerRadius, startAngle: startAngle, endAngle: endAngle
    }, cells && cells[index] && cells[index].props);
  });

  return { data: sectors, layout: layout };
}, _temp2)) || _class;

export default RadialBar;