import React, { PropTypes, Component } from 'react';
import { Tooltip } from 'recharts';

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
    opacity: 0.2,
  }

  render() {
    const { x0, x1, x2, x3, y0, y1, dy, index } = this.props;
    const { opacity } = this.state;

    return (
      <path
        d={`M${x0},${y0}C${x2},${y0} ${x3},${y1} ${x1},${y1}`}
        fill="none"
        stroke="#333"
        strokeWidth={dy}
        strokeOpacity={opacity}
        onMouseEnter={() => { this.setState({ opacity: 0.7 }); }}
        onMouseLeave={() => { this.setState({ opacity: 0.2 }); }}
      />
    );
  }
}

export default DemoSankeyLink;
