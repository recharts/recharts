import React, { Component } from 'react';
import { Surface, PolarRadiusAxis, Label } from 'recharts';

export default class Demo extends Component {

  static displayName = 'PolarRadiusAxisDemo';

  handleActive = (data, index, e) => {
    console.log(data, index);
  };

  render () {
    const ticks = [
      { value: '100', coordinate: 50 },
      { value: '200', coordinate: 100 },
      { value: '300', coordinate: 150 },
      { value: '400', coordinate: 200 },
      { value: '500', coordinate: 250 },
      { value: '600', coordinate: 300 },
    ];

    return (
      <Surface width={1000} height={1000}>
        <PolarRadiusAxis
          cx={500}
          cy={500}
          angle={30}
          ticks={ticks}
          cursor="pointer"
          onMouseEnter={this.handleActive}
        >
          <Label position="outside" offset={20}>test</Label>
        </PolarRadiusAxis>
      </Surface>
    );
  }
}

