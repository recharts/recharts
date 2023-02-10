import React from 'react';
import { CartesianAxis, Label, ResponsiveContainer, Surface } from '../../../../src';
import { ticks } from '../../data';

export default {
  component: CartesianAxis,
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
          <CartesianAxis
            orientation="bottom"
            y={100}
            width={400}
            height={50}
            viewBox={{
              x: 0,
              y: 0,
              width: 500,
              height: 500,
            }}
            ticks={args.data}
            label="test"
          >
            <Label>测试</Label>
          </CartesianAxis>
          <CartesianAxis
            orientation="top"
            y={200}
            width={400}
            height={50}
            viewBox={{
              x: 0,
              y: 0,
              width: 500,
              height: 500,
            }}
            ticks={args.data}
          />
          <CartesianAxis
            orientation="left"
            x={50}
            width={50}
            height={400}
            viewBox={{
              x: 0,
              y: 0,
              width: 500,
              height: 500,
            }}
            ticks={args.data}
          />
          <CartesianAxis
            orientation="right"
            x={150}
            width={50}
            height={400}
            viewBox={{
              x: 0,
              y: 0,
              width: 500,
              height: 500,
            }}
            ticks={args.data}
          />
        </Surface>
      </ResponsiveContainer>
    );
  },
  args: {
    data: ticks,
  },
};
