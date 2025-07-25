/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Args, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { pageData, pageDataWithFillColor } from '../../data';
import { Cell, Legend, RadialBar, RadialBarChart, ResponsiveContainer, Tooltip } from '../../../../src';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { RadialBarChartProps } from '../props/RadialBarChartProps';
import { RechartsHookInspector } from '../../../storybook-addon-recharts';
import type { RechartsStoryContext } from '../../../storybook-addon-recharts/RechartsStoryContext';
import { StorybookArgs } from '../../../StorybookArgs';

export default {
  argTypes: RadialBarChartProps,
  component: RadialBarChart,
};

export const Simple: StoryObj = {
  render: (args: StorybookArgs, context: RechartsStoryContext) => {
    return (
      <RadialBarChart {...args}>
        <RadialBar dataKey="uv" activeShape={{ fill: 'red' }} label={{ position: 'insideStart', fill: 'white' }} />
        <Tooltip defaultIndex={3} />
        <RechartsHookInspector
          position={context.rechartsInspectorPosition}
          setPosition={context.rechartsSetInspectorPosition}
        />
      </RadialBarChart>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(RadialBarChartProps),
    data: pageData,
    width: 800,
    height: 400,
  },
};

export const WithCustomizedClickLegendEvent = {
  render: (args: Args, context: RechartsStoryContext) => {
    const { data } = args;
    const [selectedRadialBar, setSelectedRadialBar] = useState('35-39');

    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart {...args}>
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
          <RechartsHookInspector
            position={context.rechartsInspectorPosition}
            setPosition={context.rechartsSetInspectorPosition}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(RadialBarChartProps),
    data: pageDataWithFillColor,
    width: 500,
    height: 300,
    cx: 150,
    cy: 150,
    innerRadius: 20,
    outerRadius: 140,
    barSize: 10,
  },
};
