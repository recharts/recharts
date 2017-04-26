import React, { Component } from 'react';
import {Surface, PolarAngleAxis} from 'recharts';

const ticks = [
  { value: '100', coordinate: 20 },
  { value: '200', coordinate: 80 },
  { value: '300', coordinate: 120 },
  { value: '400', coordinate: 180 },
  { value: '500', coordinate: 240 },
  { value: '600', coordinate: 290 },
];

export default class Demo extends Component {

  static displayName = 'PolarAngleAxisDemo';

  handleActive = (data, index, e) => {
    console.log(data, index);
  };

  render () {
    return (
      <Surface width={500} height={500}>
        <PolarAngleAxis
          cx={250}
          cy={250}
          radius={200}
          ticks={ticks}
          stroke="#ccc"
          cursor="pointer"
          onClick={this.handleActive}
        />
      </Surface>
    );
  }
}
