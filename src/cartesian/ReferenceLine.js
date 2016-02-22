/**
 * @fileOverview Reference Line
 */
import React, { Component, PropTypes } from 'react';
import pureRender from '../util/PureRender';
import Layer from '../container/Layer';
import { PRESENTATION_ATTRIBUTES, getPresentationAttributes } from '../util/ReactUtils';
import _ from 'lodash';

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
      PropTypes.number,
      PropTypes.string,
      PropTypes.element,
    ]),

    xAxisMap: PropTypes.object,
    yAxisMap: PropTypes.object,

    x: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    y: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    yAxisId: PropTypes.number,
    xAxisId: PropTypes.number,
  };

  static defaultProps = {
    xAxisId: 0,
    yAxisId: 0,
    fill: 'none',
    stroke: '#ccc',
    fillOpacity: 1,
    strokeWidth: 1,
  };

  validateLine(value, coord, scale) {
    const range = scale.range();
    const first = range[0];
    const last = range[range.length - 1];
    const isValidate = first <= last ?
      (coord >= first && coord <= last) :
      (coord >= last && coord <= first);

    return isValidate;
  }

  getEndPoints(isX, isY) {
    const { xAxisMap, yAxisMap, xAxisId, yAxisId, viewBox } = this.props;
    const { x, y, width, height } = viewBox;

    if (isY) {
      const value = this.props.y;
      const scale = yAxisMap[yAxisId].scale;
      const coord = scale(value);

      if (this.validateLine(value, coord, scale)) {
        return yAxisMap[yAxisId].orientation === 'left' ?
            [{ x, y: coord }, { x: x + width, y: coord }] :
            [{ x: x + width, y: coord }, { x, y: coord }];
      }
    } else if (isX) {
      const value = this.props.x;
      const scale = xAxisMap[xAxisId].scale;
      const coord = scale(value);

      if (this.validateLine(value, coord, scale)) {
        return yAxisMap[yAxisId].orientation === 'top' ?
           [{ x: coord, y }, { x: coord, y: y + height }] :
           [{ x: coord, y: y + height }, { x: coord, y }];
      }
    }

    return null;
  }

  getLabelProps(isX, isY) {
    const { xAxisMap, yAxisMap, xAxisId, yAxisId } = this.props;

    if (isY) {
      const axis = yAxisMap[yAxisId];

      if (axis.orientation === 'left') {
        return { dx: 6, dy: 6, textAnchor: 'start' };
      }
      return { dx: -6, dy: 6, textAnchor: 'end' };
    } else if (isX) {
      const axis = xAxisMap[xAxisId];

      if (axis.orientation === 'top') {
        return { dy: 6, textAnchor: 'middle' };
      }
      return { dy: -6, textAnchor: 'middle' };
    }
  }

  renderLabel(isX, isY, end) {
    const { label } = this.props;

    if (React.isValidElement(label)) {
      return React.cloneElement(label, this.props);
    } else if (_.isString(label) || _.isNumber(label)) {
      const { stroke } = this.props;
      const props = {
        ...getPresentationAttributes(this.props),
        stroke: 'none',
        fill: stroke,
        ...end,
        ...this.getLabelProps(isX, isY),
      };

      return (
        <g className="recharts-cartesian-axis-label">
          <text {...props}>{label}</text>
        </g>
      );
    }

    return null;
  }

  render() {
    const { x, y } = this.props;
    const isX = _.isNumber(x) || _.isString(x);
    const isY = _.isNumber(y) || _.isString(y);

    if (!isX && !isY) { return null; }

    const endPoints = this.getEndPoints(isX, isY);

    if (!endPoints) {return null;}

    const [start, end] = endPoints;
    const props = getPresentationAttributes(this.props);

    return (
      <Layer className="recharts-reference-line">
        <line
          {...props}
          className="recharts-reference-line-curve"
          x1={start.x}
          y1={start.y}
          x2={end.x}
          y2={end.y}
        />
        {this.renderLabel(isX, isY, end)}
      </Layer>
    );
  }
}

export default ReferenceLine;
