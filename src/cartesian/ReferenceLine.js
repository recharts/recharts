/**
 * @fileOverview Reference Line
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import pureRender from '../util/PureRender';
import Layer from '../container/Layer';
import Text from '../component/Text';
import { PRESENTATION_ATTRIBUTES, getPresentationAttributes,
  filterEventAttributes } from '../util/ReactUtils';
import { validateCoordinateInRange, isNumOrStr } from '../util/DataUtils';

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

    label: PropTypes.oneOfType([
      PropTypes.number, PropTypes.string, PropTypes.element, PropTypes.func,
    ]),

    xAxis: PropTypes.object,
    yAxis: PropTypes.object,

    isFront: PropTypes.bool,
    alwaysShow: PropTypes.bool,
    x: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    y: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    yAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    xAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    labelPosition: PropTypes.oneOf(['start', 'end']),
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
    labelPosition: 'end',
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

  getLabelProps(isX, isY) {
    const { xAxis, yAxis, labelPosition } = this.props;

    if (isY) {
      const axis = yAxis;

      if (axis.orientation === 'left' && labelPosition === 'end') {
        return { dx: 6, dy: 6, textAnchor: 'start' };
      }
      if (axis.orientation === 'right' && labelPosition === 'start') {
        return { dx: 6, dy: 6, textAnchor: 'start' };
      }
      return { dx: -6, dy: 6, textAnchor: 'end' };
    } else if (isX) {
      const axis = xAxis;

      if (axis.orientation === 'top') {
        return { dy: 6, textAnchor: 'middle' };
      }
      return { dy: -6, textAnchor: 'middle' };
    }

    return null;
  }

  renderLabel(isX, isY, end) {
    const { label, stroke } = this.props;
    const props = {
      ...getPresentationAttributes(label),
      stroke: 'none',
      fill: stroke,
      ...end,
      ...this.getLabelProps(isX, isY),
    };

    if (React.isValidElement(label)) {
      return React.cloneElement(label, props);
    } else if (_.isFunction(label)) {
      return label(props);
    } else if (isNumOrStr(label)) {
      return (
        <g className="recharts-reference-line-label">
          <Text {...props}>{label}</Text>
        </g>
      );
    }

    return null;
  }

  render() {
    const { x, y, labelPosition, shape } = this.props;
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
      <Layer className="recharts-reference-line">
        {renderLine(shape, props)}
        {this.renderLabel(isX, isY, (labelPosition === 'start' ? start : end))}
      </Layer>
    );
  }
}

export default ReferenceLine;
