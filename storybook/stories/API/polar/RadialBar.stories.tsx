import React from 'react';
import { Args } from '@storybook/react-webpack5';
import { pageDataWithFillColor } from '../../data';
import { Legend, PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer, Tooltip } from '../../../../src';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { RadialBarProps } from '../props/RadialBarProps';
import { RechartsHookInspector, RechartsStoryContext } from '../../../storybook-addon-recharts';

export default {
  argTypes: RadialBarProps,
  component: RadialBar,
};

export const API = {
  render: (args: Args, context: RechartsStoryContext) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <RadialBarChart width={400} height={400} data={pageDataWithFillColor}>
          <Legend />
          <PolarAngleAxis />
          <RadialBar dataKey="uv" {...args} />
          <Tooltip />
          <RechartsHookInspector
            position={context.rechartsInspectorPosition}
            setPosition={context.rechartsSetInspectorPosition}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(RadialBarProps),
    legendType: 'circle',
    label: { fill: '#333', fontSize: 15, position: 'insideStart' },
    background: true,
    isAnimationActive: true,
    animationBegin: 50,
    animationDuration: 1000,
    animationEasing: 'ease',
    cornerRadius: 10,
    cornerIsExternal: true,
    tooltipType: 'responsive',
    maxBarSize: 15,
    minPointSize: 90,
  },
};
