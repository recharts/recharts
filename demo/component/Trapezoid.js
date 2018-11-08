import React, { Component } from 'react';
import { Surface, Trapezoid } from 'recharts';

export default class Demo extends Component {

  static displayName = 'TrapezoidDemo';

  render() {
    return (
      <Surface width={500} height={1000}>
        <Trapezoid
          fill="#ff7902"
          x={100}
          y={100}
          upperWidth={100}
          lowerWidth={50}
          height={50}
          isUpdateAnimationActive
        />
        <Trapezoid
          fill="#f00"
          x={300}
          y={100}
          upperWidth={100}
          lowerWidth={0}
          height={50}
          isUpdateAnimationActive
        />
      </Surface>
    );
  }
}


