import React from 'react';
import { Meta, StoryContext, StoryObj } from '@storybook/react';
import { RadialBarChartProps } from '../API/props/RadialBarChartProps';
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart, Tooltip } from '../../../src';
import { StorybookArgs } from '../../StorybookArgs';
import { getStoryArgsFromArgsTypesObject } from '../API/props/utils';
import { pageDataWithFillColor } from '../data';
import { RechartsHookInspector } from '../../storybook-addon-recharts/RechartsHookInspector';

export default {
  argTypes: RadialBarChartProps,
  component: RadialBarChart,
  decorators: [],
} satisfies Meta<typeof RadialBarChart>;

export const RadialBarChartWithMultipleAxes: StoryObj<StorybookArgs> = {
  render: (args: StorybookArgs, context: StoryContext) => {
    return (
      <RadialBarChart {...args}>
        <RadialBar angleAxisId="axis-pv" radiusAxisId="axis-name" dataKey="pv" fillOpacity={0.3} fill="purple" />
        <Legend />
        <Tooltip defaultIndex={3} axisId="axis-name" />
        <PolarAngleAxis
          angleAxisId="axis-uv"
          dataKey="uv"
          tickFormatter={value => `uv: ${value}`}
          tickCount={6}
          type="number"
          stroke="blue"
          axisLineType="circle"
        />
        <PolarAngleAxis
          angleAxisId="axis-pv"
          dataKey="pv"
          stroke="red"
          tickFormatter={value => `pv: ${value}`}
          type="number"
          // the typescript type says that radius is a prop, but it's not doing anything. It would be quite convenient in this chart
          radius={230}
        />
        <PolarRadiusAxis radiusAxisId="axis-name" dataKey="name" type="category" stroke="green" />
        <PolarRadiusAxis radiusAxisId="axis-amt" dataKey="amt" type="number" angle={180} stroke="black" />
        <PolarGrid stroke="red" strokeOpacity={0.5} angleAxisId="axis-pv" radiusAxisId="axis-name" />
        <PolarGrid stroke="blue" strokeOpacity={0.5} angleAxisId="axis-uv" radiusAxisId="axis-amt" />
        <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
      </RadialBarChart>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(RadialBarChartProps),
    width: 500,
    height: 500,
    data: pageDataWithFillColor,
    innerRadius: '10%',
    outerRadius: '80%',
    barSize: 10,
  },
};
