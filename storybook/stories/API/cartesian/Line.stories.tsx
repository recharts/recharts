import React from 'react';
import { Line, ResponsiveContainer, ComposedChart, Legend, Tooltip, XAxis, YAxis } from '../../../../src';
import { pageData } from '../../data';
import { EventHandlers } from '../props/EventHandlers';
import { AnimationProps } from '../props/AnimationProps';
import { legendType } from '../props/Legend';
import { LineStyle } from '../props/Styles';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { General as GeneralProps, Internal } from '../props/CartesianComponentShared';
import { ResponsiveProps } from '../props/Tooltip';

export default {
  argTypes: {
    ...EventHandlers,
    ...AnimationProps,
    legendType,
    ...GeneralProps,
    ...Internal,
    ...ResponsiveProps,
    ...LineStyle,
    // Deprecated
    dangerouslySetInnerHTML: { table: { category: 'Deprecated' }, hide: true, disable: true },
    // Other
    baseLine: { table: { category: 'Other' } },
    left: { table: { category: 'Other' } },
    top: { table: { category: 'Other' } },
    xAxis: { table: { category: 'Other' } },
    yAxis: { table: { category: 'Other' } },
  },
  component: Line,
};

export const API = {
  render: (args: Record<string, any>) => {
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return (
      <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart
          width={surfaceWidth}
          height={surfaceHeight}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
          data={pageData}
        >
          {/* All components are added to show the interaction with the Area properties */}
          <Legend />
          <Tooltip />
          <XAxis dataKey="name" />
          <YAxis />
          {/* The target component */}
          <Line dataKey="uv" {...args} />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    // This API story should have explicit values for all props
    ...getStoryArgsFromArgsTypesObject(GeneralProps),
    ...getStoryArgsFromArgsTypesObject(LineStyle),
    ...getStoryArgsFromArgsTypesObject(ResponsiveProps),
    ...getStoryArgsFromArgsTypesObject(AnimationProps),
    type: 'linear',
    connectNulls: true,
    stroke: 'red',
    fill: 'teal',
    strokeDasharray: '4 1',
    label: { fill: 'red', fontSize: 20 },
    dot: { stroke: 'green', strokeWidth: 2 },
    isAnimationActive: true,
    activeDot: { stroke: 'green', strokeWidth: 2 },
    tooltipType: 'responsive',
    dataKey: 'uv',
    unit: ' Visitors',
  },
};
