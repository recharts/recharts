import React from 'react';
import { PolarGrid, Surface } from '../../../../src';

export default {
  component: PolarGrid,
};

export const Simple = {
  render: (args: Record<string, any>) => {
    return (
      <Surface width={500} height={500}>
        <PolarGrid
          cx={250}
          cy={250}
          innerRadius={0}
          outerRadius={200}
          {...args}
        />
      </Surface>
    );
  },
  args: {
    polarAngles: [0, 30, 60, 90, 145, 180, 200, 270, 300],
    polarRadius: [10, 20, 40, 80],
  },
};
