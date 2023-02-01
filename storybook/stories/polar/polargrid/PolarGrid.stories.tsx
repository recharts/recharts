import React from 'react';
import { PolarGrid, Surface } from '../../../..';

export default {
  title: 'Recharts/Polar/Polar Grid',
  component: PolarGrid,
};

export const Simple = {
  render: (args: any) => {
    const { polarAngles, polarRadius } = args;
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
          radialLines
        />
      </Surface>
    );
  },
  args: {
    polarAngles: [0, 30, 60, 90, 145, 180, 200, 270, 300],
    polarRadius: [10, 20, 40, 80],
  },
};
