import React from 'react';
import { ResponsiveContainer, SunburstChart, Tooltip } from '../../../../src';
import { SunburstData } from '../../../../src/chart/SunburstChart';
import { CategoricalChartProps, ChartSizeProps, data, dataKey, margin } from '../props/ChartProps';
import { PolarChartProps } from '../props/PolarChartProps';

const { innerRadius, outerRadius, cx, cy, startAngle, endAngle } = PolarChartProps;

const { onClick, onMouseEnter, onMouseLeave, className } = CategoricalChartProps;

export default {
  argTypes: {
    data,
    margin,
    ...ChartSizeProps,
    dataKey,
    innerRadius,
    outerRadius,
    cx,
    cy,
    startAngle,
    endAngle,
    onClick,
    onMouseEnter,
    onMouseLeave,
    className,
  },
  component: SunburstChart,
};

const hierarchy: SunburstData = {
  name: 'Root',
  value: 100,
  children: [
    {
      name: 'Child1',
      fill: '#264653',
      value: 30,
      children: [
        {
          name: 'third child',
          value: 10,
        },
        {
          name: 'another child',
          value: 5,
        },
        {
          name: 'next child',
          value: 15,
          children: [
            {
              name: 'third level child',
              value: 5,
            },
            {
              name: 'third level child',
              value: 5,
            },
            {
              name: 'third level child',
              value: 5,
              children: [{ name: 'level 4', value: 2 }],
            },
          ],
        },
      ],
    },
    {
      name: 'Child2',
      fill: '#2a9d8f',
      value: 20,
      children: [
        {
          name: 'another child',
          value: 10,
        },
        {
          name: 'next child',
          value: 10,
          children: [
            { name: 'level 3 of child 2', value: 5 },
            { name: 'level 3 of child 2', value: 3 },
            { name: 'level 3 of child 2', value: 2 },
          ],
        },
      ],
    },
    {
      name: 'Child3',
      fill: '#e9c46a',
      value: 20,
    },
    {
      name: 'Child4',
      fill: '#F4A261',
      value: 10,
      children: [
        { name: 'child4 child', value: 5 },
        { name: 'child4 child', value: 5 },
      ],
    },
    {
      name: 'Child5',
      fill: '#e76f51',
      value: 20,
    },
  ],
};

export const Sunburst = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={450}>
        <SunburstChart {...args} data={args.data} />
      </ResponsiveContainer>
    );
  },
  args: {
    data: hierarchy,
    innerRadius: 40,
  },
};

export const WithStartAndEndAngle = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={450}>
        <SunburstChart {...args} data={args.data} />
      </ResponsiveContainer>
    );
  },
  args: {
    data: hierarchy,
    innerRadius: 40,
    startAngle: 90,
    endAngle: 270,
  },
};

export const WithTooltip = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={450}>
        <SunburstChart {...args} data={args.data}>
          <Tooltip />
        </SunburstChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: hierarchy,
    innerRadius: 40,
  },
};
