import React from 'react';
import { CartesianGrid, Surface } from '../../../../src';

export default {
  component: CartesianGrid,
};

export const Simple = {
  render: (args: Record<string, any>) => {
    return (
      <Surface width={500} height={500}>
        <CartesianGrid
          x={0}
          y={0}
          width={500}
          height={500}
          fillOpacity={0.4}
          strokeDasharray={args.strokeDasharray}
          verticalPoints={args.verticalPoints}
          horizontalPoints={args.horizontalPoints}
          verticalFill={args.verticalFill}
          horizontalFill={args.horizontalFill}
        />
      </Surface>
    );
  },
  args: {
    horizontalPoints: [10, 20, 30, 100, 400],
    verticalPoints: [100, 200, 300, 400],
    verticalFill: ['red', '#eee'],
    horizontalFill: ['#eee', 'yellow'],
    strokeDasharray: '10 10',
  },
};
