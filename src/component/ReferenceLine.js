import React, {PropTypes} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';


class ReferenceLine extends React.Component {
  constructor(props) {
    super(props);
  }

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
    fill: PropTypes.string
  };

  static defaultProps = {
    xAxisId: 0,
    yAxisId: 0,
    fill: 'none'
  };

  getEndPoints () {
    const {xAxisMap, yAxisMap, type, value, xAxisId, yAxisId,
          x, y, width, height} = this.props;
    let coord;

    if (type === 'horizontal') {
      coord = yAxisMap[yAxisId].scale(value);

      return [{x, y: coord}, {x: x + width, y: coord}];
    } else if (type === 'vertical') {
      coord = xAxisId[xAxisId].scale(value);

      return [{x: coord, y}, {x: coord, y: y + height}];
    }
  }

  render () {
    const {type, value, fill, stroke, fillOpacity, strokeOpacity} = this.props;

    if (!type || value !== +value) {return;}

    const [start, end] = this.getEndPoints();

    return (
      <line
        className='recharts-reference-line'
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
