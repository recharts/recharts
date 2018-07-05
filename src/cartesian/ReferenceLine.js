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
import { isNumOrStr } from '../util/DataUtils';
import { LabeledScaleHelper, rectWithCoords } from '../util/CartesianUtils';

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
    x: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    y: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    className: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    yAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    xAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    shape: PropTypes.func,
  };

  static defaultProps = {
    isFront: false,
    alwaysShow: false,
    xAxisId: 0,
    yAxisId: 0,
    fill: 'none',
    stroke: '#ccc',
    fillOpacity: 1,
    strokeWidth: 1,
  };

  getEndPoints(scales, isFixedX, isFixedY) {
    const { viewBox } = this.props;
    const { x, y, width, height } = viewBox;

    if (isFixedY) {
      const { y: yCoord, yAxis: { orientation } } = this.props;
      const coord = scales.y.apply(yCoord);
      if (scales.y.isInRange(coord)) {
        const points = [
          { x: x + width, y: coord },
          { x, y: coord },
        ];
        return orientation === 'left' ? points.reverse() : points;
      }
    } else if (isFixedX) {
      const { x: xCoord, xAxis: { orientation } } = this.props;
      const coord = scales.x.apply(xCoord);
      if (scales.x.isInRange(coord)) {
        const points = [
          { x: coord, y: y + height },
          { x: coord, y },
        ];
        return orientation === 'top' ? points.reverse() : points;
      }
    }

    return null;
  }

  render() {
    const {
      x: fixedX,
      y: fixedY,
      xAxis,
      yAxis,
      shape,
      className,
    } = this.props;

    const scales = LabeledScaleHelper.create({ x: xAxis.scale, y: yAxis.scale });

    const isX = isNumOrStr(fixedX);
    const isY = isNumOrStr(fixedY);

    const endPoints = this.getEndPoints(scales, isX, isY);
    if (!endPoints) { return null; }

    const [{ x: x1, y: y1 }, { x: x2, y: y2 }] = endPoints;

    const props = {
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
