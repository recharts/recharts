import React, { Component } from 'react';
import { Surface, Sector } from 'recharts';

export default class Demo extends Component {

  static displayName = 'SectorDemo';

  render () {
    return (
      <Surface width={500} height={1000}>
        <Sector fill="#ff7902" cx={200} cy={200} innerRadius={150} outerRadius={200} endAngle={90} />
        <Sector
          fill="#287902"
          cx={200}
          cy={400}
          innerRadius={180}
          outerRadius={200}
          startAngle={45}
          endAngle={135}
          cornerRadius={10}
        />
      </Surface>
    );
  }
}


