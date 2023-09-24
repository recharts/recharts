import React from 'react';
import { pageDataWithFillColor } from '../../data';
import { ResponsiveContainer, RadialBarChart, RadialBar, Legend, Tooltip, PolarAngleAxis } from '../../../../src';
import { EventHandlers } from '../props/EventHandlers';
import { AnimationProps } from '../props/AnimationProps';
import { legendType } from '../props/Legend';
import { RadialBarStyle } from '../props/Styles';
import { General as GeneralProps, Internal } from '../props/PolarComponentShared';
import { tooltipType } from '../props/Tooltip';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';

export default {
  argTypes: {
    ...EventHandlers,
    ...AnimationProps,
    tooltipType,
    legendType,
    ...GeneralProps,
    ...Internal,
    ...RadialBarStyle,
    // Deprecated
    dangerouslySetInnerHTML: { table: { category: 'Deprecated' }, hide: true, disable: true },
    startAngle: {
      table: { category: 'Deprecated' },
      hide: true,
      disable: true,
    },
    endAngle: {
      table: { category: 'Deprecated' },
      hide: true,
      disable: true,
    },
  },
  component: RadialBar,
};

export const API = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <RadialBarChart width={400} height={400} data={pageDataWithFillColor}>
          <Legend />
          <Tooltip />
          <PolarAngleAxis />
          <RadialBar dataKey="uv" {...args} />
        </RadialBarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(GeneralProps),
    ...getStoryArgsFromArgsTypesObject(RadialBarStyle),
    ...getStoryArgsFromArgsTypesObject(AnimationProps),
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
