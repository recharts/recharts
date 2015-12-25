import React, {PropTypes} from 'react';

class ReferenceLine extends React.Component {

  static displayName = 'ReferenceLine';

  static propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,

    xAxisMap: PropTypes.object,
    yAxisMap: PropTypes.object,

    type: PropTypes.oneOf(['horizontal', 'vertical']),
    value: PropTypes.number,

    yAxisId: PropTypes.number,
    xAxisId: PropTypes.number,

    strokeWidth: PropTypes.number,
    stroke: PropTypes.string,
    fill: PropTypes.string,
    fillOpacity: PropTypes.number,
    strokeOpacity: PropTypes.number,
  };

  static defaultProps = {
    xAxisId: 0,
    yAxisId: 0,
    fill: 'none',
    fillOpacity: 1,
    strokeWidth: 1,
  };

  constructor(props) {
    super(props);
  }

  getEndPoints() {
    const {xAxisMap, yAxisMap, type, value, xAxisId, yAxisId,
          x, y, width, height} = this.props;
    let coord;

    if (type === 'horizontal') {
      coord = yAxisMap[yAxisId].scale(value);

      return [{x, y: coord}, {x: x + width, y: coord}];
    } else if (type === 'vertical') {
      coord = xAxisMap[xAxisId].scale(value);

      return [{x: coord, y}, {x: coord, y: y + height}];
    }
  }

  render() {
    const {type, value, fill, stroke, fillOpacity, strokeOpacity} = this.props;
    if (!type || value !== +value) {return null;}

    const [start, end] = this.getEndPoints();

    return (
      <line
        className="recharts-reference-line"
        x1={start.x}
        y1={start.y}
        x2={end.x}
        y2={end.y}
        fill={fill}
        stroke={stroke}
        fillOpacity={fillOpacity}
        strokeOpacity={strokeOpacity}/>
    );
  }
}

export default ReferenceLine;
