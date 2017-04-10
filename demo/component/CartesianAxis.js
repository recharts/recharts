import React, { Component } from 'react';
import { Surface, CartesianAxis, Label } from 'recharts';

export default class Demo extends Component {

  static displayName = 'CartesianAxisDemo';

  render () {
    let ticks = [
      { value: 10, coordinate: 50 },
      { value: 1000, coordinate: 100 },
      { value: 20, coordinate: 150 },
      { value: 40, coordinate: 200 },
      { value: 90, coordinate: 250 }
    ];

    return (
      <Surface width={500} height={500}>
        <CartesianAxis
          orientation="bottom"
          y={100}
          width={400}
          height={50}
          viewBox={{ x: 0, y: 0, width: 500, height: 500 }}
          ticks={ticks}
          label="test"
        >
          <Label>测试</Label>
        </CartesianAxis>
        <CartesianAxis
          orientation="top"
          y={200}
          width={400}
          height={50}
          viewBox={{ x: 0, y: 0, width: 500, height: 500 }}
          ticks={ticks}
        />
        <CartesianAxis
          orientation="left"
          x={50}
          width={50}
          height={400}
          viewBox={{ x: 0, y: 0, width: 500, height: 500 }}
          ticks={ticks}
        />
        <CartesianAxis
          orientation="right"
          x={150}
          width={50}
          height={400}
          viewBox={{ x: 0, y: 0, width: 500, height: 500 }}
          ticks={ticks}
        />
      </Surface>
    );
  }
}


