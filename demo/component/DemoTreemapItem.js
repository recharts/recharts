import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Demo extends Component {
  static displayName = 'TreemapItemDemo';

  static propTypes = {
    root: PropTypes.object,
    depth: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    index: PropTypes.number,
    payload: PropTypes.object,
    bgColors: PropTypes.arrayOf(PropTypes.string),
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
  }

  render() {
    const { root, depth, x, y, width, height, index, rank, name, bgColors } = this.props;

    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          fill={depth < 2 ? bgColors[index % 6] : "rgba(255,255,255,0)"}
          stroke="#fff"
          strokeWidth={2 / (depth + 1e-10)}
          strokeOpacity={1 / (depth + 1e-10)}
        />
        {
          depth === 1 ? (
          <text
            x={x + width / 2}
            y={y + height / 2 + 9}
            textAnchor="middle"
            fill="#fff"
            stroke="none"
            fontSize={18}
          >
            {name}
          </text> )
          : null
        }
        {
          depth === 1 ?
          <text
            x={x + 4}
            y={y + 22}
            fill="#fff"
            stroke="none"
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