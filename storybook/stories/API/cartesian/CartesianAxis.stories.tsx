import React from 'react';
import { Args } from '@storybook/react';
import { CartesianAxis, Label, ResponsiveContainer, Surface } from '../../../../src';
import { TickItem } from '../../../../src/util/types';
import { ticks } from '../../data';

const GeneralProps: Args = {
  x: {
    description: 'The x-coordinate of axis.',
    table: {
      type: {
        summary: 'Number',
        defaultValue: 0,
      },
      category: 'General',
    },
  },
  y: {
    description: 'The y-coordinate of axis.',
    table: {
      type: {
        summary: 'Number',
        defaultValue: 0,
      },
      category: 'General',
    },
  },
  width: {
    description: 'The width of axis.',
    table: {
      type: {
        summary: 'Number',
        defaultValue: 0,
      },
      category: 'General',
    },
  },
  height: {
    description: 'The height of axis.',
    table: {
      type: {
        summary: 'Number',
        defaultValue: 0,
      },
      category: 'General',
    },
  },
  orientation: {
    description: 'The orientation of axis.',
    table: {
      type: {
        summary: 'top | bottom | left | right',
        defaultValue: 'bottom',
      },
      category: 'General',
    },
  },
  viewBox: {
    description: 'The box of viewing area.',
    table: {
      type: {
        summary: 'Object',
        defaultValue: { x: 0, y: 0, width: 0, height: 0 },
      },
      category: 'General',
    },
  },
  axisLine: {
    description:
      'If set false, no axis line will be drawn. If set a object, the option is the configuration of axis line.',
    table: {
      type: {
        summary: 'Boolean | Object',
        defaultValue: true,
      },
      category: 'General',
    },
  },
  tickLine: {
    description: `If set false, no axis tick lines will be drawn. If set a object, 
      the option is the configuration of tick lines.`,
    table: {
      type: {
        summary: 'Boolean | Object',
        defaultValue: true,
      },
      category: 'General',
    },
  },
  minTickGap: {
    description: 'The minimum gap between two adjacent labels.',
    table: {
      type: {
        summary: 'Number',
        defaultValue: 5,
      },
      category: 'General',
    },
  },
  tickSize: {
    description: 'The length of tick line.',
    table: {
      type: {
        summary: 'Number',
        defaultValue: 6,
      },
      category: 'General',
    },
  },
  interval: {
    description: `If set 0, all the ticks will be shown. If set preserveStart", "preserveEnd" or "preserveStartEnd", 
      the ticks which is to be shown or hidden will be calculated automatically.`,
    table: {
      type: {
        summary: '"preserveStart" | "preserveEnd" | "preserveStartEnd" | "equidistantPreserveStart" | Number',
        defaultValue: 'preserveEnd',
      },
      category: 'General',
    },
    options: ['preserveStart', 'preserveStartEnd', 'preserveEnd', 'equidistantPreserveStart', 0, 1, 2, 3, 4, 5],
    control: {
      type: 'select',
    },
  },
  tick: {
    description: `If set false, no ticks will be drawn. If set a object, the option is the configuration of ticks. 
      If set a React element, the option is the custom react element of drawing ticks. If set a function, 
      the function will be called to render customized tick.`,
    table: {
      type: {
        summary: 'Boolean | Object | ReactElement | Function',
        defaultValue: null,
      },
      category: 'General',
    },
  },
  label: {
    description: `If set a string or a number, default label will be drawn, and the option is content. 
      If set a React element, the option is the custom react element of drawing label. 
      If set a function, the function will be called to render customized label.`,
    table: {
      type: {
        summary: 'String | Number | ReactElement | Function',
        defaultValue: null,
      },
      category: 'General',
    },
  },
  mirror: {
    description:
      'If set true, flips ticks around the axis line, displaying the labels inside the chart instead of outside.',
    table: {
      type: {
        summary: 'Boolean',
        defaultValue: false,
      },
      category: 'General',
    },
  },
  tickMargin: {
    description: 'The margin between tick line and tick.',
    table: {
      type: {
        summary: 'Number',
      },
      category: 'General',
    },
  },
};

export default {
  component: CartesianAxis,
  argTypes: {
    ...GeneralProps,
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
          'The interval computation can be overridden by setting interval to a number, ' +
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
    data: ticks.slice(0, 5),
  },
};
