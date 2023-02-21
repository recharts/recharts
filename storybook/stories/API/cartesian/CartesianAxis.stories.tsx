import React from 'react';
import { CartesianAxis, Label, ResponsiveContainer, Surface } from '../../../../src';
import { ticks } from '../../data';

export default {
  component: CartesianAxis,
  argTypes: {
    interval: {
      options: ['preserveStart', 'preserveStartEnd', 'preserveEnd', 0, 1, 2, 3, 4, 5],
      control: {
        type: 'select',
      },
    },
  },
};

const [surfaceWidth, surfaceHeight] = [500, 500];

export const TickPositioning = {
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
            y={50}
            width={surfaceHeight}
            height={400}
            viewBox={{
              x: 0,
              y: 0,
              width: surfaceHeight,
              height: surfaceHeight,
            }}
            ticks={args.data}
            interval={args.interval}
          />
        </Surface>
      </ResponsiveContainer>
    );
  },
  args: {
    data: ticks,
  },
  parameters: {
    controls: { include: ['interval'] },
    docs: {
      description: {
        story:
          'The ticks of a cartesian axis are positioned using the interval field. ' +
          'The interval computation can be overriden by setting interval to a number, ' +
          'which signifies how many ticks should not be shown between two visible ticks. ' +
          'By default, ticks that overflow their assigned space, are not shown. ',
      },
    },
  },
};

export const Combined = {
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
