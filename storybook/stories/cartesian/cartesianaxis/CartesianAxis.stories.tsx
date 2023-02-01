import React from 'react';
import { CartesianAxis, Label, Surface } from '../../../..';
import { ticks } from '../../data';

export default {
  title: 'Recharts/Cartesian/Cartesian Axis',
  component: CartesianAxis,
};

export const Simple = {
  render: (args: any) => {
    return (
      <Surface width={500} height={500}>
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
    );
  },
  args: {
    data: ticks,
  },
};
