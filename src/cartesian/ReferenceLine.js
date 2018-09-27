/**
 * @fileOverview Reference Line
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classNames from 'classnames';
import pureRender from '../util/PureRender';
import Layer from '../container/Layer';
import { PRESENTATION_ATTRIBUTES, getPresentationAttributes,
  filterEventAttributes } from '../util/ReactUtils';
import Label from '../component/Label';
import { ifOverflowMatches } from '../util/ChartUtils';
import { isNumOrStr } from '../util/DataUtils';
import { LabeledScaleHelper, rectWithCoords } from '../util/CartesianUtils';
import { warn } from '../util/LogUtils';

const renderLine = (option, props) => {
  let line;

  if (React.isValidElement(option)) {
    line = React.cloneElement(option, props);
  } else if (_.isFunction(option)) {
    line = option(props);
  } else {
    line = (
      <line
        {...props}
        className="recharts-reference-line-line"
      />
    );
  }

  return line;
};

@pureRender
class ReferenceLine extends Component {

  static displayName = 'ReferenceLine';

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    viewBox: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
      width: PropTypes.number,
      height: PropTypes.number,
    }),

    xAxis: PropTypes.object,
    yAxis: PropTypes.object,

    isFront: PropTypes.bool,
    alwaysShow: PropTypes.bool,
    ifOverflow: PropTypes.oneOf(['hidden', 'visible', 'discard', 'extendDomain']),
    x: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    y: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    segment: PropTypes.arrayOf(PropTypes.shape({
      x: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      y: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    })),

    className: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    yAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    xAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    shape: PropTypes.func,
  };

  static defaultProps = {
    isFront: false,
    ifOverflow: 'discard',
    xAxisId: 0,
    yAxisId: 0,
    fill: 'none',
    stroke: '#ccc',
    fillOpacity: 1,
    strokeWidth: 1,
  };

  getEndPoints(scales, isFixedX, isFixedY, isSegment) {
    const { viewBox: { x, y, width, height } } = this.props;

    if (isFixedY) {
      const { y: yCoord, yAxis: { orientation } } = this.props;
      const coord = scales.y.apply(yCoord);

      if (ifOverflowMatches(this.props, 'discard') &&
        !scales.y.isInRange(coord)) {
        return null;
      }

      const points = [
        { x: x + width, y: coord },
        { x, y: coord },
      ];
      return orientation === 'left' ? points.reverse() : points;
    } if (isFixedX) {
      const { x: xCoord, xAxis: { orientation } } = this.props;
      const coord = scales.x.apply(xCoord);

      if (ifOverflowMatches(this.props, 'discard') &&
        !scales.x.isInRange(coord)) {
        return null;
      }

      const points = [
        { x: coord, y: y + height },
        { x: coord, y },
      ];
      return orientation === 'top' ? points.reverse() : points;
    } if (isSegment) {
      const { segment } = this.props;

      const points = segment.map(p => scales.apply(p));

      if (ifOverflowMatches(this.props, 'discard') &&
        _.some(points, p => !scales.isInRange(p))) {
        return null;
      }

      return points;
    }

    return null;
  }

  render() {
    const {
      x: fixedX,
      y: fixedY,
      segment,
      xAxis,
      yAxis,
      shape,
      className,
      alwaysShow,
      clipPathId,
    } = this.props;

    warn(alwaysShow === undefined,
      'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');

    const scales = LabeledScaleHelper.create({ x: xAxis.scale, y: yAxis.scale });

    const isX = isNumOrStr(fixedX);
    const isY = isNumOrStr(fixedY);
    const isSegment = segment && segment.length === 2;

    const endPoints = this.getEndPoints(scales, isX, isY, isSegment);
    if (!endPoints) { return null; }

    const [{ x: x1, y: y1 }, { x: x2, y: y2 }] = endPoints;

    const clipPath = ifOverflowMatches(this.props, 'hidden') ?
      `url(#${clipPathId})` :
      undefined;

    const props = {
      clipPath,
      ...getPresentationAttributes(this.props),
      ...filterEventAttributes(this.props),
      x1,
      y1,
      x2,
      y2,
    };

    return (
      <Layer className={classNames('recharts-reference-line', className)}>
        {renderLine(shape, props)}
        {Label.renderCallByParent(this.props, rectWithCoords({ x1, y1, x2, y2 }))}
      </Layer>
    );
  }
}

export default ReferenceLine;
