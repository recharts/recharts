import React from 'react';
import { Meta, StoryContext, StoryObj } from '@storybook/react';
import { RadialBarChartProps } from '../API/props/RadialBarChartProps';
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart, Tooltip } from '../../../src';
import { StorybookArgs } from '../../StorybookArgs';
import { getStoryArgsFromArgsTypesObject } from '../API/props/utils';
import { pageData } from '../data';
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
        <Tooltip defaultIndex={3} />
        <PolarAngleAxis angleAxisId="axis-pv" dataKey="pv" tickFormatter={value => `pv: ${value}`} type="number" />
        <PolarAngleAxis
          angleAxisId="axis-uv"
          dataKey="uv"
          tickFormatter={value => `uv${value}`}
          tickCount={5}
          type="number"
        />
        <PolarRadiusAxis radiusAxisId="axis-name" dataKey="name" type="category" stroke="green" />
        <PolarRadiusAxis radiusAxisId="axis-amt" dataKey="amt" type="number" angle={180} stroke="black" />
        <PolarGrid stroke="red" />
        <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
      </RadialBarChart>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(RadialBarChartProps),
    width: 500,
    height: 500,
    data: pageData,
    innerRadius: '10%',
  },
};
