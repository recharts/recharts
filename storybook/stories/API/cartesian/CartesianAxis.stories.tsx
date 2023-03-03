import React from 'react';
import { CartesianAxis, Label, ResponsiveContainer, Surface } from '../../../../src';
import { TickItem } from '../../../../src/util/types';
import { ticks } from '../../data';

export default {
  component: CartesianAxis,
  argTypes: {
    interval: {
      options: ['preserveStart', 'preserveStartEnd', 'preserveEnd', 'equidistantPreserveStart', 0, 1, 2, 3, 4, 5],
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
            width={surfaceHeight}
            height={surfaceWidth}
            viewBox={{
              x: 0,
              y: 0,
              width: surfaceWidth,
              height: surfaceHeight,
            }}
            ticks={args.data}
            interval={args.interval}
          />
          <CartesianAxis
            width={surfaceHeight}
            height={surfaceWidth}
            viewBox={{
              x: 0,
              y: 0,
              width: surfaceWidth,
              height: surfaceHeight,
            }}
            ticks={args.data.map((tick: TickItem) => ({ ...tick, coordinate: tick.coordinate / 2 }))}
            interval={args.interval}
            orientation="left"
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

export const TickAlignment = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={surfaceHeight}>
        <Surface
          width={surfaceWidth}
          height={surfaceHeight}
          viewBox={{
            x: -50,
            y: -50,
            width: surfaceWidth + 50,
            height: surfaceHeight + 50,
          }}
        >
          <CartesianAxis
            width={surfaceHeight}
            height={surfaceWidth}
            viewBox={{
              x: 0,
              y: 0,
              width: surfaceWidth,
              height: surfaceHeight,
            }}
            ticks={args.data}
            angle={args.angle}
            textAnchor={args.textAnchor}
            verticalAnchor={args.verticalAnchor}
          />
          <CartesianAxis
            width={surfaceHeight}
            height={surfaceWidth}
            viewBox={{
              x: 0,
              y: 0,
              width: surfaceWidth,
              height: surfaceHeight,
            }}
            ticks={args.data}
            orientation="left"
            angle={args.angle}
            textAnchor={args.textAnchor}
            verticalAnchor={args.verticalAnchor}
          />
        </Surface>
      </ResponsiveContainer>
    );
  },

  args: {
    data: ticks,
    angle: -42,
    textAnchor: 'end',
    verticalAnchor: 'end',
  },
  argTypes: {
    textAnchor: {
      options: ['start', 'middle', 'end'],
      control: { type: 'radio' },
    },
  },
  parameters: {
    controls: { include: ['angle', 'textAnchor', 'verticalAnchor'] },
    docs: {
      description: {
        story:
          'The tick labels on a cartesian axis can be rotated around a set vertical and horizontal anchor. These can ' +
          'be controlled through the `anchor`, `verticalAnchor` and `textAnchor` props.',
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
    data: ticks.slice(0, 5),
  },
};
