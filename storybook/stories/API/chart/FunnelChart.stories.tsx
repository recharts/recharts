import React from 'react';
import { Args } from '@storybook/react';
import { Funnel, FunnelChart, LabelList, ResponsiveContainer } from '../../../../src';

const GeneralProps: Args = {
  layout: {
    description: 'The layout of bars in the chart.',
    table: {
      type: {
        summary: '"centric"',
        defaultValue: '"centric"',
      },
      category: 'General',
    },
  },
  width: {
    description: 'The width of chart container.',
    table: {
      type: {
        summary: 'Number',
        defaultValue: undefined,
      },
      category: 'General',
    },
  },
  height: {
    description: 'The height of chart container.',
    table: {
      type: {
        summary: 'Number',
        defaultValue: undefined,
      },
      category: 'General',
    },
  },
  margin: {
    description: 'The sizes of whitespace around the container.',
    table: {
      type: {
        summary: 'Object',
        defaultValue: { top: 5, right: 5, bottom: 5, left: 5 },
      },
      category: 'General',
    },
  },
  onClick: {
    description: 'The customized event handler of click in this chart.',
    table: {
      type: {
        summary: 'Function',
      },
      category: 'General',
    },
  },
  onMouseEnter: {
    description: 'The customized event handler of mouseenter in this chart.',
    table: {
      type: {
        summary: 'Function',
      },
      category: 'General',
    },
  },
  onMouseMove: {
    description: 'The customized event handler of mousemove in this chart.',
    table: {
      type: {
        summary: 'Function',
      },
      category: 'General',
    },
  },
  onMouseLeave: {
    description: 'The customized event handler of mouseleave in this chart.',
    table: {
      type: {
        summary: 'Function',
      },
      category: 'General',
    },
  },
};

export default {
  argTypes: {
    ...GeneralProps,
  },
  component: FunnelChart,
};

export const Simple = {
  render: (args: Record<string, any>) => {
    const { data } = args;
    return (
      // <div style={{ height: 200, width: 200 }}>
      <ResponsiveContainer width="100%" height={200}>
        <FunnelChart layout="horizontal">
          <Funnel
            width={400}
            data={data}
            dataKey="value"
            stroke="#424242"
            isAnimationActive
            labelLine
            lastShapeType="rectangle"
            orientation="horizontal"
          >
            <LabelList dataKey="name" fill="#000" position="right" stroke="none" />
          </Funnel>
        </FunnelChart>
      </ResponsiveContainer>
      // </div>
    );
  },
  args: {
    data: [
      {
        fill: '#EEEEEE',
        name: 'A',
        value: 1009,
      },
      {
        fill: '#E0E0E0',
        name: 'B',
        value: 903,
      },
      {
        fill: '#BDBDBD',
        name: 'C',
        value: 756,
      },
      {
        fill: '#9E9E9E',
        name: 'D',
        value: 622,
      },
      {
        fill: '#757575',
        name: 'E',
        value: 602,
      },
      {
        fill: '#424242',
        name: 'F',
        value: 580,
      },
    ],
  },
};
