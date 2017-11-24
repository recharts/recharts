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
import { validateCoordinateInRange } from '../util/ChartUtils';

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

  getEndPoints(isX, isY) {
    const { xAxis, yAxis, viewBox } = this.props;
    const { x, y, width, height } = viewBox;

    if (isY) {
      const value = this.props.y;
      const { scale } = yAxis;
      const offset = scale.bandwidth ? scale.bandwidth() / 2 : 0;
      const coord = scale(value) + offset;

      if (validateCoordinateInRange(coord, scale)) {
        return yAxis.orientation === 'left' ?
          [{ x, y: coord }, { x: x + width, y: coord }] :
          [{ x: x + width, y: coord }, { x, y: coord }];
      }
    } else if (isX) {
      const value = this.props.x;
      const { scale } = xAxis;
      const offset = scale.bandwidth ? scale.bandwidth() / 2 : 0;
      const coord = scale(value) + offset;

      if (validateCoordinateInRange(coord, scale)) {
        return xAxis.orientation === 'top' ?
          [{ x: coord, y }, { x: coord, y: y + height }] :
          [{ x: coord, y: y + height }, { x: coord, y }];
      }
    }

    return null;
  }

  render() {
    const { x, y, shape, className } = this.props;
    const isX = isNumOrStr(x);
    const isY = isNumOrStr(y);

    if (!isX && !isY) { return null; }

    const endPoints = this.getEndPoints(isX, isY);

    if (!endPoints) { return null; }

    const [start, end] = endPoints;
    const props = {
      ...getPresentationAttributes(this.props),
      ...filterEventAttributes(this.props),
      x1: start.x,
      y1: start.y,
      x2: end.x,
      y2: end.y,
    };

    return (
      <Layer className={classNames('recharts-reference-line', className)}>
        {renderLine(shape, props)}
        {Label.renderCallByParent(this.props, {
          x: Math.min(props.x1, props.x2),
          y: Math.min(props.y1, props.y2),
          width: Math.abs(props.x2 - props.x1),
          height: Math.abs(props.y2 - props.y1),
        })}
      </Layer>
    );
  }
}

export default ReferenceLine;
