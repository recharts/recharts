import React, { Component } from 'react';
import { Layer } from 'recharts';

export default class Demo extends Component<any, any> {

  static displayName = 'SankeyLinkDemo';

  state = {
    fill: 'url(#linkGradient)',
  }

  render() {
    const { sourceX, targetX,
      sourceY, targetY,
      sourceControlX, targetControlX,
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

