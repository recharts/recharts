import _isArray from 'lodash/isArray';
import _isFunction from 'lodash/isFunction';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview Curve
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { line as shapeLine, area as shapeArea, curveBasisClosed, curveBasisOpen, curveBasis, curveLinearClosed, curveLinear, curveMonotoneX, curveMonotoneY, curveNatural, curveStep, curveStepAfter, curveStepBefore } from 'd3-shape';
import classNames from 'classnames';

import pureRender from '../util/PureRender';
import { PRESENTATION_ATTRIBUTES, getPresentationAttributes, filterEventAttributes } from '../util/ReactUtils';
import { isNumber } from '../util/DataUtils';

var CURVE_FACTORIES = {
  curveBasisClosed: curveBasisClosed, curveBasisOpen: curveBasisOpen, curveBasis: curveBasis, curveLinearClosed: curveLinearClosed, curveLinear: curveLinear,
  curveMonotoneX: curveMonotoneX, curveMonotoneY: curveMonotoneY, curveNatural: curveNatural, curveStep: curveStep, curveStepAfter: curveStepAfter,
  curveStepBefore: curveStepBefore
};

var defined = function defined(p) {
  return p.x === +p.x && p.y === +p.y;
};
var getX = function getX(p) {
  return p.x;
};
var getY = function getY(p) {
  return p.y;
};

var getCurveFactory = function getCurveFactory(type, layout) {
  if (_isFunction(type)) {
    return type;
  }

  var name = 'curve' + type.slice(0, 1).toUpperCase() + type.slice(1);

  if (name === 'curveMonotone' && layout) {
    return CURVE_FACTORIES['' + name + (layout === 'vertical' ? 'Y' : 'X')];
  }
  return CURVE_FACTORIES[name] || curveLinear;
};

var Curve = pureRender(_class = (_temp = _class2 = function (_Component) {
  _inherits(Curve, _Component);

  function Curve() {
    _classCallCheck(this, Curve);

    return _possibleConstructorReturn(this, (Curve.__proto__ || Object.getPrototypeOf(Curve)).apply(this, arguments));
  }

  _createClass(Curve, [{
    key: 'getPath',

    /**
     * Calculate the path of curve
     * @return {String} path
     */
    value: function getPath() {
      var _props = this.props,
          type = _props.type,
          points = _props.points,
          baseLine = _props.baseLine,
          layout = _props.layout,
          connectNulls = _props.connectNulls;

      var curveFactory = getCurveFactory(type, layout);
      var formatPoints = connectNulls ? points.filter(function (entry) {
        return defined(entry);
      }) : points;
      var lineFunction = void 0;

      if (_isArray(baseLine)) {
        var areaPoints = formatPoints.map(function (entry, index) {
          return _extends({}, entry, { base: baseLine[index] });
        });
        if (layout === 'vertical') {
          lineFunction = shapeArea().y(getY).x1(getX).x0(function (d) {
            return d.base.x;
          });
        } else {
          lineFunction = shapeArea().x(getX).y1(getY).y0(function (d) {
            return d.base.y;
          });
        }
        lineFunction.defined(defined).curve(curveFactory);

        return lineFunction(areaPoints);
      } else if (layout === 'vertical' && isNumber(baseLine)) {
        lineFunction = shapeArea().y(getY).x1(getX).x0(baseLine);
      } else if (isNumber(baseLine)) {
        lineFunction = shapeArea().x(getX).y1(getY).y0(baseLine);
      } else {
        lineFunction = shapeLine().x(getX).y(getY);
      }

      lineFunction.defined(defined).curve(curveFactory);

      return lineFunction(formatPoints);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          className = _props2.className,
          points = _props2.points,
          path = _props2.path,
          pathRef = _props2.pathRef;


      if ((!points || !points.length) && !path) {
        return null;
      }

      var realPath = points && points.length ? this.getPath() : path;

      return React.createElement('path', _extends({}, getPresentationAttributes(this.props), filterEventAttributes(this.props, null, true), {
        className: classNames('recharts-curve', className),
        d: realPath,
        ref: pathRef
      }));
    }
  }]);

  return Curve;
}(Component), _class2.displayName = 'Curve', _class2.propTypes = _extends({}, PRESENTATION_ATTRIBUTES, {
  className: PropTypes.string,
  type: PropTypes.oneOfType([PropTypes.oneOf(['basis', 'basisClosed', 'basisOpen', 'linear', 'linearClosed', 'natural', 'monotoneX', 'monotoneY', 'monotone', 'step', 'stepBefore', 'stepAfter']), PropTypes.func]),
  layout: PropTypes.oneOf(['horizontal', 'vertical']),
  baseLine: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  points: PropTypes.arrayOf(PropTypes.object),
  connectNulls: PropTypes.bool,
  path: PropTypes.string,
  pathRef: PropTypes.func
}), _class2.defaultProps = {
  type: 'linear',
  points: [],
  connectNulls: false
}, _temp)) || _class;

export default Curve;