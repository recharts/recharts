import React from 'react';
import { PolarGrid, Surface } from '../../../../src';
import { PolarGridArgs } from '../arg-types/PolarGridArgs';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';

export default {
  argTypes: PolarGridArgs,
  component: PolarGrid,
};

const [surfaceWidth, surfaceHeight] = [500, 500];

export const API = {
  name: 'Simple',
  render: (args: Record<string, any>) => {
    return (
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
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(PolarGridArgs),
    polarAngles: [0, 30, 60, 90, 145, 180, 200, 270, 300],
    polarRadius: [10, 20, 40, 80],
    stroke: '#ccc',
    strokeWidth: 1,
    fill: 'none',
    fillOpacity: 0.2,
  },
};
