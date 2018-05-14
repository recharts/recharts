var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview Sector
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import pureRender from '../util/PureRender';
import { PRESENTATION_ATTRIBUTES, getPresentationAttributes, filterEventAttributes } from '../util/ReactUtils';
import { polarToCartesian, RADIAN } from '../util/PolarUtils';
import { getPercentValue, mathSign } from '../util/DataUtils';

var getDeltaAngle = function getDeltaAngle(startAngle, endAngle) {
  var sign = mathSign(endAngle - startAngle);
  var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 359.999);

  return sign * deltaAngle;
};

var getTangentCircle = function getTangentCircle(_ref) {
  var cx = _ref.cx,
      cy = _ref.cy,
      radius = _ref.radius,
      angle = _ref.angle,
      sign = _ref.sign,
      isExternal = _ref.isExternal,
      cornerRadius = _ref.cornerRadius;

  var centerRadius = cornerRadius * (isExternal ? 1 : -1) + radius;
  var theta = Math.asin(cornerRadius / centerRadius) / RADIAN;
  var centerAngle = angle + sign * theta;
  var center = polarToCartesian(cx, cy, centerRadius, centerAngle);
  // The coordinate of point which is tangent to the circle
  var circleTangency = polarToCartesian(cx, cy, radius, centerAngle);
  // The coordinate of point which is tangent to the radius line
  var lineTangency = polarToCartesian(cx, cy, centerRadius * Math.cos(theta * RADIAN), angle);

  return { center: center, circleTangency: circleTangency, lineTangency: lineTangency, theta: theta };
};

var getSectorPath = function getSectorPath(_ref2) {
  var cx = _ref2.cx,
      cy = _ref2.cy,
      innerRadius = _ref2.innerRadius,
      outerRadius = _ref2.outerRadius,
      startAngle = _ref2.startAngle,
      endAngle = _ref2.endAngle;

  var angle = getDeltaAngle(startAngle, endAngle);

  // When the angle of sector equals to 360, star point and end point coincide
  var tempEndAngle = startAngle + angle;
  var outerStartPoint = polarToCartesian(cx, cy, outerRadius, startAngle);
  var outerEndPoint = polarToCartesian(cx, cy, outerRadius, tempEndAngle);

  var path = 'M ' + outerStartPoint.x + ',' + outerStartPoint.y + '\n    A ' + outerRadius + ',' + outerRadius + ',0,\n    ' + +(Math.abs(angle) > 180) + ',' + +(startAngle > tempEndAngle) + ',\n    ' + outerEndPoint.x + ',' + outerEndPoint.y + '\n  ';

  if (innerRadius > 0) {
    var innerStartPoint = polarToCartesian(cx, cy, innerRadius, startAngle);
    var innerEndPoint = polarToCartesian(cx, cy, innerRadius, tempEndAngle);
    path += 'L ' + innerEndPoint.x + ',' + innerEndPoint.y + '\n            A ' + innerRadius + ',' + innerRadius + ',0,\n            ' + +(Math.abs(angle) > 180) + ',' + +(startAngle <= tempEndAngle) + ',\n            ' + innerStartPoint.x + ',' + innerStartPoint.y + ' Z';
  } else {
    path += 'L ' + cx + ',' + cy + ' Z';
  }

  return path;
};

var getSectorWithCorner = function getSectorWithCorner(_ref3) {
  var cx = _ref3.cx,
      cy = _ref3.cy,
      innerRadius = _ref3.innerRadius,
      outerRadius = _ref3.outerRadius,
      cornerRadius = _ref3.cornerRadius,
      startAngle = _ref3.startAngle,
      endAngle = _ref3.endAngle;

  var sign = mathSign(endAngle - startAngle);

  var _getTangentCircle = getTangentCircle({
    cx: cx, cy: cy, radius: outerRadius, angle: startAngle, sign: sign, cornerRadius: cornerRadius
  }),
      soct = _getTangentCircle.circleTangency,
      solt = _getTangentCircle.lineTangency,
      sot = _getTangentCircle.theta;

  var _getTangentCircle2 = getTangentCircle({
    cx: cx, cy: cy, radius: outerRadius, angle: endAngle, sign: -sign, cornerRadius: cornerRadius
  }),
      eoct = _getTangentCircle2.circleTangency,
      eolt = _getTangentCircle2.lineTangency,
      eot = _getTangentCircle2.theta;

  var outerArcAngle = Math.abs(startAngle - endAngle) - sot - eot;

  if (outerArcAngle < 0) {
    return getSectorPath({
      cx: cx, cy: cy, innerRadius: innerRadius, outerRadius: outerRadius, startAngle: startAngle, endAngle: endAngle
    });
  }

  var path = 'M ' + solt.x + ',' + solt.y + '\n    A' + cornerRadius + ',' + cornerRadius + ',0,0,' + +(sign < 0) + ',' + soct.x + ',' + soct.y + '\n    A' + outerRadius + ',' + outerRadius + ',0,' + +(outerArcAngle > 180) + ',' + +(sign < 0) + ',' + eoct.x + ',' + eoct.y + '\n    A' + cornerRadius + ',' + cornerRadius + ',0,0,' + +(sign < 0) + ',' + eolt.x + ',' + eolt.y + '\n  ';

  if (innerRadius > 0) {
    var _getTangentCircle3 = getTangentCircle({
      cx: cx, cy: cy, radius: innerRadius, angle: startAngle, sign: sign, isExternal: true, cornerRadius: cornerRadius
    }),
        sict = _getTangentCircle3.circleTangency,
        silt = _getTangentCircle3.lineTangency,
        sit = _getTangentCircle3.theta;

    var _getTangentCircle4 = getTangentCircle({
      cx: cx, cy: cy, radius: innerRadius, angle: endAngle, sign: -sign, isExternal: true, cornerRadius: cornerRadius
    }),
        eict = _getTangentCircle4.circleTangency,
        eilt = _getTangentCircle4.lineTangency,
        eit = _getTangentCircle4.theta;

    var innerArcAngle = Math.abs(startAngle - endAngle) - sit - eit;

    if (innerArcAngle < 0) {
      return path + 'L' + cx + ',' + cy + 'Z';
    }

    path += 'L' + eilt.x + ',' + eilt.y + '\n      A' + cornerRadius + ',' + cornerRadius + ',0,0,' + +(sign < 0) + ',' + eict.x + ',' + eict.y + '\n      A' + innerRadius + ',' + innerRadius + ',0,' + +(innerArcAngle > 180) + ',' + +(sign > 0) + ',' + sict.x + ',' + sict.y + '\n      A' + cornerRadius + ',' + cornerRadius + ',0,0,' + +(sign < 0) + ',' + silt.x + ',' + silt.y + 'Z';
  } else {
    path += 'L' + cx + ',' + cy + 'Z';
  }

  return path;
};

var Sector = pureRender(_class = (_temp = _class2 = function (_Component) {
  _inherits(Sector, _Component);

  function Sector() {
    _classCallCheck(this, Sector);

    return _possibleConstructorReturn(this, (Sector.__proto__ || Object.getPrototypeOf(Sector)).apply(this, arguments));
  }

  _createClass(Sector, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          cx = _props.cx,
          cy = _props.cy,
          innerRadius = _props.innerRadius,
          outerRadius = _props.outerRadius,
          cornerRadius = _props.cornerRadius,
          startAngle = _props.startAngle,
          endAngle = _props.endAngle,
          className = _props.className;


      if (outerRadius < innerRadius || startAngle === endAngle) {
        return null;
      }

      var layerClass = classNames('recharts-sector', className);
      var deltaRadius = outerRadius - innerRadius;
      var cr = getPercentValue(cornerRadius, deltaRadius, 0, true);
      var path = void 0;

      if (cr > 0 && Math.abs(startAngle - endAngle) < 360) {
        path = getSectorWithCorner({
          cx: cx, cy: cy, innerRadius: innerRadius, outerRadius: outerRadius,
          cornerRadius: Math.min(cr, deltaRadius / 2),
          startAngle: startAngle, endAngle: endAngle
        });
      } else {
        path = getSectorPath({ cx: cx, cy: cy, innerRadius: innerRadius, outerRadius: outerRadius, startAngle: startAngle, endAngle: endAngle });
      }

      return React.createElement('path', _extends({}, getPresentationAttributes(this.props), filterEventAttributes(this.props), {
        className: layerClass,
        d: path
      }));
    }
  }]);

  return Sector;
}(Component), _class2.displayName = 'Sector', _class2.propTypes = _extends({}, PRESENTATION_ATTRIBUTES, {
  className: PropTypes.string,
  cx: PropTypes.number,
  cy: PropTypes.number,
  innerRadius: PropTypes.number,
  outerRadius: PropTypes.number,
  startAngle: PropTypes.number,
  endAngle: PropTypes.number,
  cornerRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}), _class2.defaultProps = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0
}, _temp)) || _class;

export default Sector;