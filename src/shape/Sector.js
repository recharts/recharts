/**
 * @fileOverview Sector
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import pureRender from '../util/PureRender';
import { PRESENTATION_ATTRIBUTES, getPresentationAttributes,
  filterEventAttributes } from '../util/ReactUtils';
import { polarToCartesian, RADIAN } from '../util/PolarUtils';
import { getPercentValue, mathSign } from '../util/DataUtils';

const getDeltaAngle = (startAngle, endAngle) => {
  const sign = mathSign(endAngle - startAngle);
  const deltaAngle = Math.min(Math.abs(endAngle - startAngle), 359.999);

  return sign * deltaAngle;
};

const getTangentCircle = ({ cx, cy, radius, angle, sign, isExternal,
  cornerRadius, cornerIsExternal }) => {
  const centerRadius = cornerRadius * (isExternal ? 1 : -1) + radius;
  const theta = Math.asin(cornerRadius / centerRadius) / RADIAN;
  const centerAngle = cornerIsExternal ? angle : angle + sign * theta;
  const center = polarToCartesian(cx, cy, centerRadius, centerAngle);
  // The coordinate of point which is tangent to the circle
  const circleTangency = polarToCartesian(cx, cy, radius, centerAngle);
  // The coordinate of point which is tangent to the radius line
  const lineTangencyAngle = cornerIsExternal ? angle - sign * theta : angle;
  const lineTangency = polarToCartesian(
    cx, cy, centerRadius * Math.cos(theta * RADIAN), lineTangencyAngle);
  return { center, circleTangency, lineTangency, theta };
};

const getSectorPath = ({ cx, cy, innerRadius, outerRadius, startAngle, endAngle }) => {
  const angle = getDeltaAngle(startAngle, endAngle);

  // When the angle of sector equals to 360, star point and end point coincide
  const tempEndAngle = startAngle + angle;
  const outerStartPoint = polarToCartesian(cx, cy, outerRadius, startAngle);
  const outerEndPoint = polarToCartesian(cx, cy, outerRadius, tempEndAngle);

  let path = `M ${outerStartPoint.x},${outerStartPoint.y}
    A ${outerRadius},${outerRadius},0,
    ${+(Math.abs(angle) > 180)},${+(startAngle > tempEndAngle)},
    ${outerEndPoint.x},${outerEndPoint.y}
  `;

  if (innerRadius > 0) {
    const innerStartPoint = polarToCartesian(cx, cy, innerRadius, startAngle);
    const innerEndPoint = polarToCartesian(cx, cy, innerRadius, tempEndAngle);
    path += `L ${innerEndPoint.x},${innerEndPoint.y}
            A ${innerRadius},${innerRadius},0,
            ${+(Math.abs(angle) > 180)},${+(startAngle <= tempEndAngle)},
            ${innerStartPoint.x},${innerStartPoint.y} Z`;
  } else {
    path += `L ${cx},${cy} Z`;
  }

  return path;
};

const getSectorWithCorner = ({ cx, cy, innerRadius, outerRadius, cornerRadius, forceCornerRadius,
  cornerIsExternal, startAngle, endAngle }) => {
  const sign = mathSign(endAngle - startAngle);
  const { circleTangency: soct, lineTangency: solt, theta: sot } =
    getTangentCircle({
      cx, cy, radius: outerRadius, angle: startAngle, sign, cornerRadius,
      cornerIsExternal,
    });
  const { circleTangency: eoct, lineTangency: eolt, theta: eot } =
    getTangentCircle({
      cx, cy, radius: outerRadius, angle: endAngle, sign: -sign, cornerRadius,
      cornerIsExternal,
    });
  const outerArcAngle = Math.abs(startAngle - endAngle) - sot - eot;

  if (outerArcAngle < 0) {
    if (forceCornerRadius) {
      return `M ${solt.x},${solt.y}
        a${cornerRadius},${cornerRadius},0,0,1,${cornerRadius * 2},0
        a${cornerRadius},${cornerRadius},0,0,1,${-cornerRadius * 2},0
      `;
    }
    return getSectorPath({
      cx, cy, innerRadius, outerRadius, startAngle, endAngle,
    });
  }

  let path = `M ${solt.x},${solt.y}
    A${cornerRadius},${cornerRadius},0,0,${+(sign < 0)},${soct.x},${soct.y}
    A${outerRadius},${outerRadius},0,${+(outerArcAngle > 180)},${+(sign < 0)},${eoct.x},${eoct.y}
    A${cornerRadius},${cornerRadius},0,0,${+(sign < 0)},${eolt.x},${eolt.y}
  `;

  if (innerRadius > 0) {
    const { circleTangency: sict, lineTangency: silt, theta: sit } =
      getTangentCircle({
        cx, cy, radius: innerRadius, angle: startAngle, sign, isExternal: true, cornerRadius, cornerIsExternal,
      });
    const { circleTangency: eict, lineTangency: eilt, theta: eit } =
      getTangentCircle({
        cx, cy, radius: innerRadius, angle: endAngle, sign: -sign, isExternal: true, cornerRadius, cornerIsExternal,
      });
    const innerArcAngle = Math.abs(startAngle - endAngle) - sit - eit;

    if (innerArcAngle < 0) {
      return `${path}L${cx},${cy}Z`;
    }

    path += `L${eilt.x},${eilt.y}
      A${cornerRadius},${cornerRadius},0,0,${+(sign < 0)},${eict.x},${eict.y}
      A${innerRadius},${innerRadius},0,${+(innerArcAngle > 180)},${+(sign > 0)},${sict.x},${sict.y}
      A${cornerRadius},${cornerRadius},0,0,${+(sign < 0)},${silt.x},${silt.y}Z`;

  } else {
    path += `L${cx},${cy}Z`;
  }

  return path;
};

@pureRender
class Sector extends Component {

  static displayName = 'Sector';

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    className: PropTypes.string,
    cx: PropTypes.number,
    cy: PropTypes.number,
    innerRadius: PropTypes.number,
    outerRadius: PropTypes.number,
    startAngle: PropTypes.number,
    endAngle: PropTypes.number,
    cornerRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    forceCornerRadius: PropTypes.bool,
    cornerIsExternal: PropTypes.bool,
  };

  static defaultProps = {
    cx: 0,
    cy: 0,
    innerRadius: 0,
    outerRadius: 0,
    startAngle: 0,
    endAngle: 0,
    cornerRadius: 0,
    forceCornerRadius: false,
    cornerIsExternal: false,
  };

  render() {
    const { cx, cy, innerRadius, outerRadius, cornerRadius, forceCornerRadius, cornerIsExternal,
      startAngle, endAngle, className } = this.props;

    if (outerRadius < innerRadius || startAngle === endAngle) { return null; }

    const layerClass = classNames('recharts-sector', className);
    const deltaRadius = outerRadius - innerRadius;
    const cr = getPercentValue(cornerRadius, deltaRadius, 0, true);
    let path;

    if (cr > 0 && Math.abs(startAngle - endAngle) < 360) {
      path = getSectorWithCorner({
        cx, cy, innerRadius, outerRadius,
        cornerRadius: Math.min(cr, deltaRadius / 2),
        forceCornerRadius,
        cornerIsExternal,
        startAngle, endAngle,
      });
    } else {
      path = getSectorPath({ cx, cy, innerRadius, outerRadius, startAngle, endAngle });
    }

    return (
      <path
        {...getPresentationAttributes(this.props)}
        {...filterEventAttributes(this.props)}
        className={layerClass}
        d={path}
      />
    );
  }
}

export default Sector;
