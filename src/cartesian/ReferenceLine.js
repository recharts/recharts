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

    type: PropTypes.oneOf(['horizontal', 'vertical']),
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    yAxisId: PropTypes.number,
    xAxisId: PropTypes.number,
  };

  static defaultProps = {
    xAxisId: 0,
    yAxisId: 0,
    fill: 'none',
    fillOpacity: 1,
    strokeWidth: 1,
  };

  getEndPoints() {
    const { xAxisMap, yAxisMap, type, value, xAxisId, yAxisId, viewBox } = this.props;
    const { x, y, width, height } = viewBox;
    let coord;

    if (type === 'horizontal') {
      coord = yAxisMap[yAxisId].scale(value);

      return yAxisMap[yAxisId].orientation === 'left' ?
          [{ x, y: coord }, { x: x + width, y: coord }] :
          [{ x: x + width, y: coord }, { x, y: coord }];
    } else if (type === 'vertical') {
      coord = xAxisMap[xAxisId].scale(value);

      return yAxisMap[yAxisId].orientation === 'top' ?
         [{ x: coord, y }, { x: coord, y: y + height }] :
         [{ x: coord, y: y + height }, { x: coord, y }];
    }
  }

  getLabelProps() {
    const { xAxisMap, yAxisMap, xAxisId, yAxisId, type } = this.props;

    if (type === 'horizontal') {
      const axis = yAxisMap[yAxisId];

      if (axis.orientation === 'left') {
        return { dx: 6, dy: 6, textAnchor: 'start' };
      }
      return { dx: -6, dy: 6, textAnchor: 'end' };
    } else if (type === 'vertical') {
      const axis = xAxisMap[xAxisId];

      if (axis.orientation === 'top') {
        return { dy: 6, textAnchor: 'middle' };
      }
      return { dy: -6, textAnchor: 'middle' };
    }
  }

  renderLabel(end) {
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
        ...this.getLabelProps(),
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
    const { type, value } = this.props;
    if (!type) { return null; }

    const [start, end] = this.getEndPoints();
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
        {this.renderLabel(end)}
      </Layer>
    );
  }
}

export default ReferenceLine;
