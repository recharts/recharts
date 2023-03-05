import React from 'react';
import { CartesianGrid, ResponsiveContainer, Surface } from '../../../../src';

export default {
  tags: ['autodocs'],
  component: CartesianGrid,
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
      </ResponsiveContainer>
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
