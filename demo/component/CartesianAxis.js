import React from 'react';
import { Surface, CartesianAxis } from 'recharts';

export default React.createClass({
  render () {
    let ticks = [
      { value: 10, coord: 50 },
      { value: 1000, coord: 100 },
      { value: 20, coord: 150 },
      { value: 40, coord: 200 },
      { value: 90, coord: 250 }
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
        />
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
});


