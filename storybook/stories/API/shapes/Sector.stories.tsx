import React from 'react';
import { Sector } from '../../../../src';
import { SectorArgs } from '../arg-types/SectorArgs';

export default {
  component: Sector,
  argTypes: SectorArgs,
};

export const API = {
  render: (args: Record<string, any>) => {
    return (
      <svg height={args.height} width="100%">
        <Sector {...args} />
      </svg>
    );
  },
  args: {
    cx: 0,
    cy: 0,
    outerRadius: 100,
    startAngle: 300,
    endAngle: 360,
    stroke: '#000',
    fill: 'red',
  },
};
