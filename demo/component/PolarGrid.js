import React from 'react';
import { Surface, PolarGrid } from 'recharts';

export default React.createClass({
  render () {
    const polarAngles = [0, 30, 60, 90, 145, 180, 200, 270, 300];
    const polarRadius = [10, 20, 40, 80];

    return (
      <Surface width={500} height={500}>
        <PolarGrid
          cx={250}
          cy={250}
          innerRadius={0}
          outerRadius={200}
          width={500}
          height={500}
          polarAngles={polarAngles}
          polarRadius={polarRadius}
        />
      </Surface>
    );
  }
});

