import React, { PropTypes, Component } from 'react';
import { Tooltip, Layer } from 'recharts';

class DemoSankeyLink extends Component {
  static propTypes = {
    x0: PropTypes.number,
    x1: PropTypes.number,
    x2: PropTypes.number,
    x3: PropTypes.number,
    y0: PropTypes.number,
    y1: PropTypes.number,
    sy: PropTypes.number,
    ty: PropTypes.number,
    dy: PropTypes.number,
    index: PropTypes.number,
  }

  state = {
    fill: 'url(#linkGradient)',
  }

  render() {
    const { x0, x1, x2, x3, y0, y1, dy, index } = this.props;
    const { fill } = this.state;

    return (
      <Layer>
        <path
          d={`
            M${x0},${y0 + dy / 2}
            C${x2},${y0 + dy / 2} ${x3},${y1 + dy / 2} ${x1},${y1 + dy / 2}
            L${x1},${y1 - dy / 2}
            C${x3},${y1 - dy / 2} ${x2},${y0 - dy / 2} ${x0},${y0 - dy / 2}
            Z
          `}
          fill={fill}
          strokeWidth="0"
          onMouseEnter={() => { this.setState({ fill: 'rgba(0, 136, 254, 0.5)' }); }}
          onMouseLeave={() => { this.setState({ fill: 'url(#linkGradient)' }); }}
        />
      </Layer>
    );
  }
}

export default DemoSankeyLink;
