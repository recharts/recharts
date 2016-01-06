import React, {PropTypes} from 'react';

class DemoTreemapItem extends React.Component {
  static displayName = 'DemoTreemapItem';

  static propTypes = {
    node: PropTypes.object,
    index: PropTypes.number
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
  }

  render() {
    const {treemapItemColor, node, index} = this.props;
    const {x, y, dx, dy} = node;

    return (
      <g>
        <rect x={x} y={y} width={dx} height={dy}
          style={{
            fill:treemapItemColor[index],
            stroke:'#fff',
            strokeWidth:3
          }}/>
        <text x={x+dx/2} y={y+dy/2} textAnchor='middle'>{node.name}</text>
        <text x={x+3} y={y+17}>{node.rank}</text>
      </g>
    );
  }
}

export default DemoTreemapItem;
