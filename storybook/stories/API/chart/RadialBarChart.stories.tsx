/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Meta } from '@storybook/react';
import React, { useState } from 'react';
import { pageData, pageDataWithFillColor } from '../../data';
import { Tooltip, RadialBar, RadialBarChart, ResponsiveContainer, Cell, Legend, RadialBarProps } from '../../../../src';
import { CategoricalChartProps } from '../props/ChartProps';

export default {
  argTypes: {
    ...CategoricalChartProps,
    activeIndex: {
      description:
        'The index of the individual shapes of RadialBar to be marked as active, and render props.activeShape',
      table: {
        category: 'General',
      },
    },
    activeShape: {
      description: 'The customized shape to be rendered if activeIndex or activeTooltipIndex match',
      table: {
        category: 'General',
      },
    },
  },
  component: RadialBarChart,
};

export const Simple: Meta<RadialBarProps> = {
  render: (args: Record<string, any>) => {
    const { data } = args;
    return (
      <ResponsiveContainer width="100%" height={400}>
        <RadialBarChart data={data}>
          <RadialBar dataKey="uv" activeShape={args.activeShape} activeIndex={args.activeIndex} />
          <Tooltip />
        </RadialBarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: pageData,
    activeShape: { fill: 'red' },
    activeIndex: undefined,
  },
};

export const WithCustomizedClickLegendEvent = {
  render: (args: Record<string, any>) => {
    const { data } = args;
    const [selectedRadialBar, setSelectedRadialBar] = useState('35-39');

    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          width={500}
          height={300}
          cx={150}
          cy={150}
          innerRadius={20}
          outerRadius={140}
          barSize={10}
          data={data}
        >
          <RadialBar background dataKey="uv">
            {data.map((entry: { name: string }) => (
              <Cell key={`cell-${entry.name}`} opacity={selectedRadialBar === entry.name ? 1 : 0.1} />
            ))}
          </RadialBar>
          <Legend
            iconSize={10}
            width={120}
            height={140}
            layout="vertical"
            verticalAlign="middle"
            content={({ payload }) => (
              <ul>
                {payload?.map((entry: { value: string; color: string }) => {
                  return (
                    <li
                      onClick={() => setSelectedRadialBar(entry.value)}
                      key={`item-${entry.value}`}
                      style={{
                        color: entry.color,
                        opacity: selectedRadialBar === entry.value ? 1 : 0.2,
                      }}
                    >
                      {entry.value}
                    </li>
                  );
                })}
              </ul>
            )}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: pageDataWithFillColor,
  },
};
