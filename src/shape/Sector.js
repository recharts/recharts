/**
 * @fileOverview Sector
 */
import React, { Component, PropTypes } from 'react';
import pureRender from '../util/PureRender';
import classNames from 'classnames';
import { PRESENTATION_ATTRIBUTES, getPresentationAttributes,
  filterEventAttributes } from '../util/ReactUtils';
import { polarToCartesian } from '../util/PolarUtils';

const getDeltaAngle = (startAngle, endAngle) => {
  const sign = Math.sign(endAngle - startAngle);
  const deltaAngle = Math.min(Math.abs(endAngle - startAngle), 359.999);

  return sign * deltaAngle;
};

const getSectorPath = ({ cx, cy, innerRadius, outerRadius, startAngle, endAngle }) => {
  const angle = getDeltaAngle(startAngle, endAngle);

  // When the angle of sector equals to 360, star point and end point coincide
  const tempEndAngle = startAngle + angle;
  const outerStartPoint = polarToCartesian(cx, cy, outerRadius, startAngle);
  const outerEndPoint = polarToCartesian(cx, cy, outerRadius, tempEndAngle);

  let path;

  if (innerRadius > 0) {
    const innerStartPoint = polarToCartesian(cx, cy, innerRadius, startAngle);
    const innerEndPoint = polarToCartesian(cx, cy, innerRadius, tempEndAngle);
    path = `M ${outerStartPoint.x},${outerStartPoint.y}
            A ${outerRadius},${outerRadius},0,
            ${+(Math.abs(angle) > 180)},${+(startAngle > tempEndAngle)},
            ${outerEndPoint.x},${outerEndPoint.y}
            L ${innerEndPoint.x},${innerEndPoint.y}
            A ${innerRadius},${innerRadius},0,
            ${+(Math.abs(angle) > 180)},${+(startAngle <= tempEndAngle)},
            ${innerStartPoint.x},${innerStartPoint.y} Z`;
  } else {
    path = `M ${outerStartPoint.x},${outerStartPoint.y}
            A ${outerRadius},${outerRadius},0,
            ${+(Math.abs(angle) > 180)},${+(startAngle > tempEndAngle)},
            ${outerEndPoint.x},${outerEndPoint.y}
            L ${cx},${cy} Z`;
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
  };

  static defaultProps = {
    cx: 0,
    cy: 0,
    innerRadius: 0,
    outerRadius: 0,
    startAngle: 0,
    endAngle: 0,
  };

  render() {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, className } = this.props;

    if (outerRadius < innerRadius || startAngle === endAngle) { return null; }

    const layerClass = classNames('recharts-sector', className);

    return (
      <path
        {...getPresentationAttributes(this.props)}
        {...filterEventAttributes(this.props)}
        className={layerClass}
        d={getSectorPath({ cx, cy, innerRadius, outerRadius, startAngle, endAngle })}
      />
    );
  }
}

export default Sector;
