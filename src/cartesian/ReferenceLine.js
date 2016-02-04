/**
 * @fileOverview Reference Line
 */
import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import { PRESENTATION_ATTRIBUTES, getPresentationAttributes } from '../util/ReactUtils';

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

      return [{ x, y: coord }, { x: x + width, y: coord }];
    } else if (type === 'vertical') {
      coord = xAxisMap[xAxisId].scale(value);

      return [{ x: coord, y }, { x: coord, y: y + height }];
    }
  }

  render() {
    const { type, value } = this.props;
    if (!type) { return null; }

    const [start, end] = this.getEndPoints();
    const props = getPresentationAttributes(this.props);

    return (
      <line
        {...props}
        className="recharts-reference-line"
        x1={start.x}
        y1={start.y}
        x2={end.x}
        y2={end.y}
      />
    );
  }
}

export default ReferenceLine;
