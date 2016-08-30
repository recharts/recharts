import React, { PropTypes, Component } from 'react';
import { Tooltip, Layer } from 'recharts';

class DemoSankeyLink extends Component {
  static propTypes = {
    sourceX: PropTypes.number,
    targetX: PropTypes.number,
    sourceY: PropTypes.number,
    targetY: PropTypes.number,
    sourceControlX: PropTypes.number,
    targetControlX: PropTypes.number,
    sourceRelativeY: PropTypes.number,
    targetRelativeY: PropTypes.number,
    linkWidth: PropTypes.number,
    index: PropTypes.number,
  }

  state = {
    fill: 'url(#linkGradient)',
  }

  render() {
    const { sourceX, targetX,
      sourceY, targetY,
      sourceControlX, targetControlX,
      sourceRelativeY, targetRelativeY,
      linkWidth,
      index,
    } = this.props;
    const { fill } = this.state;

    return (
      <Layer key={`CustomLink${index}`}>
        <path
          d={`
            M${sourceX},${sourceY + linkWidth / 2}
            C${sourceControlX},${sourceY + linkWidth / 2}
              ${targetControlX},${targetY + linkWidth / 2}
              ${targetX},${targetY + linkWidth / 2}
            L${targetX},${targetY - linkWidth / 2}
            C${targetControlX},${targetY - linkWidth / 2}
              ${sourceControlX},${sourceY - linkWidth / 2}
              ${sourceX},${sourceY - linkWidth / 2}
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
