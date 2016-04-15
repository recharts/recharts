import React, { Component } from 'react';
import { Surface, Rectangle } from 'recharts';

class RectangleDemo extends Component {
  state = {
    x: 50,
    y: 50,
    width: 80,
    height: 100,
  };

  changeSize() {
    this.setState({
      x: Math.random() * 50,
      y: Math.random() * 50,
      width: Math.random() * 400,
      height: Math.random() * 400,
    });
  }

  render() {
    const { width, height, x, y } = this.state;

    return (
      <div>
        <a
          href="javascript:void(0);"
          className="btn"
          onClick={::this.changeSize}
        >
          change size
        </a>
        <Surface width={500} height={500}>
          <Rectangle
            x={x}
            y={y}
            width={width}
            height={height}
            radius={[5, 10, 8, 15]}
            stroke="#ff7300"
            isAnimationActive
            fill="none"
          />
        </Surface>
      </div>
    );
  }
}

export default RectangleDemo;
