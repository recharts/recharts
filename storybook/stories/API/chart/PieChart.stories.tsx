import React from 'react';
import { Args } from '@storybook/react';
import { Pie, PieChart, ResponsiveContainer } from '../../../../src';
import { pageData } from '../../data';

const GeneralProps: Args = {
  width: {
    description: 'The width of chart container.',
    table: {
      type: {
        summary: 'Number',
        defaultValue: null,
      },
      category: 'General',
    },
  },
  height: {
    description: 'The height of chart container.',
    table: {
      type: {
        summary: 'Number',
        defaultValue: null,
      },
      category: 'General',
    },
  },
  margin: {
    description: 'The sizes of whitespace around the container.',
    table: {
      type: {
        summary: 'Object',
        defaultValue: { top: 0, right: 0, bottom: 0, left: 0 },
      },
      category: 'General',
    },
  },
  onClick: {
    description: 'The function will be called when click sectors of a pie chart.',
    table: {
      type: {
        summary: 'Function',
        defaultValue: null,
      },
      category: 'General',
    },
  },
  onMouseEnter: {
    description: 'The function will be called when mouse enter sectors of a pie chart.',
    table: {
      type: {
        summary: 'Function',
        defaultValue: null,
      },
      category: 'General',
    },
  },
  onMouseLeave: {
    description: 'The function will be called when mouse leave sectors of a pie chart.',
    table: {
      type: {
        summary: 'Function',
        defaultValue: null,
      },
      category: 'General',
    },
  },
};

export default {
  argTypes: {
    ...GeneralProps,
  },
  component: PieChart,
};

export const Simple = {
  render: (args: Record<string, any>) => {
    const { data } = args;
    return (
      <ResponsiveContainer width="100%" height={400}>
        <PieChart {...args}>
          <Pie data={data} dataKey="uv" />
        </PieChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: pageData,
  },
};

export const Donut = {
  render: (args: Record<string, any>) => {
    const { data } = args;
    return (
      <ResponsiveContainer width="100%" height={400}>
        <PieChart {...args}>
          <Pie data={data} dataKey="uv" nameKey="name" innerRadius={50} outerRadius={80} />
        </PieChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: pageData,
  },
};
