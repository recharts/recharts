import React from 'react';
import { PolarGrid, ResponsiveContainer, Surface } from '../../../../src';

export default {
  component: PolarGrid,
};

const [surfaceWidth, surfaceHeight] = [500, 500];

export const Simple = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={surfaceHeight}>
        <Surface
          width={surfaceWidth}
          height={surfaceHeight}
          viewBox={{
            x: 0,
            y: 0,
            width: surfaceWidth,
            height: surfaceHeight,
          }}
        >
          <PolarGrid cx={250} cy={250} innerRadius={0} outerRadius={200} {...args} />
        </Surface>
      </ResponsiveContainer>
    );
  },
  args: {
    polarAngles: [0, 30, 60, 90, 145, 180, 200, 270, 300],
    polarRadius: [10, 20, 40, 80],
  },
};
