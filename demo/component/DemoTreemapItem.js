import React, { PropTypes } from 'react';

class DemoTreemapItem extends React.Component {
  static displayName = 'DemoTreemapItem';

  static propTypes = {
    root: PropTypes.object,
    depth: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    index: PropTypes.number,
    payload: PropTypes.object,

    bgColors: PropTypes.arrayOf(PropTypes.number),
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
  }

  render() {
    const { root, depth, x, y, width, height, index, payload, bgColors } = this.props;
    const { rank, name } = payload;

    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          style={{
            fill: depth < 2 ? bgColors[Math.floor(index / root.children.length * 6)] : 'none',
            stroke: '#fff',
            strokeWidth: 2 / (depth + 1e-10),
            strokeOpacity: 1 / (depth + 1e-10),
          }}
        />
        {
          depth === 1 ?
          <text
            x={x + width / 2}
            y={y + height / 2 + 9}
            textAnchor="middle"
            fill="#fff"
            fontSize={18}
          >
            {name}
          </text>
          : null
        }
        {
          depth === 1 ?
          <text
            x={x + 4}
            y={y + 22}
            fill="#fff"
            fontSize={18}
            fillOpacity={0.5}
          >
            {index + 1}
          </text>
          : null
        }
      </g>
    );
  }
}

export default DemoTreemapItem;
