import React from 'react';
import { pageDataWithFillColor } from '../../data';
import { ResponsiveContainer, RadialBarChart, RadialBar, Legend, Tooltip, PolarAngleAxis } from '../../../../src';
import { EventHandlers } from '../props/EventHandlers';
import { AnimationProps } from '../props/AnimationProps';
import { legendType } from '../props/Legend';
import { RadialBarStyle } from '../props/Styles';
import { General as GeneralProps, Internal } from '../props/PolarComponentShared';
import { ResponsivePropsRadialBar } from '../props/Tooltip';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';

export default {
  argTypes: {
    ...EventHandlers,
    ...AnimationProps,
    legendType,
    ...GeneralProps,
    ...Internal,
    ...ResponsivePropsRadialBar,
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
    // Other
    // baseLine: { table: { category: 'Other' } },
    // left: { table: { category: 'Other' } },
    // top: { table: { category: 'Other' } },
    // xAxis: { table: { category: 'Other' } },
    // yAxis: { table: { category: 'Other' } },
  },
  component: RadialBar,
};

export const API = {
  render: (args: Record<string, any>) => {
    // const { data } = args;
    return (
      <ResponsiveContainer width="100%" height={400}>
        <RadialBarChart
          width={400}
          height={400}
          innerRadius="20%"
          outerRadius="90%"
          data={pageDataWithFillColor.slice(0, 4)}
          startAngle={90}
          endAngle={-270}
        >
          <Legend iconSize={10} layout="horizontal" verticalAlign="bottom" />
          <Tooltip />
          <PolarAngleAxis type="number" domain={[0, 50]} angleAxisId={0} tick={false} />
          <RadialBar stackId="stack" dataKey="uv" {...args} />
        </RadialBarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(GeneralProps),
    ...getStoryArgsFromArgsTypesObject(RadialBarStyle),
    ...getStoryArgsFromArgsTypesObject(ResponsivePropsRadialBar),
    ...getStoryArgsFromArgsTypesObject(AnimationProps),
    // minAngle: 90,
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
