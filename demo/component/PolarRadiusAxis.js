import React from 'react';
import { Surface, PolarRadiusAxis } from 'recharts';

export default React.createClass({
  render () {
    const ticks = [
      { value: '100', radius: 50 },
      { value: '200', radius: 100 },
      { value: '300', radius: 150 },
      { value: '400', radius: 200 },
      { value: '500', radius: 250 },
      { value: '600', radius: 300 },
    ];

    return (
      <Surface width={1000} height={1000}>
        <PolarRadiusAxis
          cx={500}
          cy={500}
          angle={120}
          ticks={ticks}
        />
      </Surface>
    );
  }
});

