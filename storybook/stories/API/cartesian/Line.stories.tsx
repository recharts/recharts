import React from 'react';
import { StoryContext } from '@storybook/react';
import { Line, ResponsiveContainer, ComposedChart, Legend, Tooltip, XAxis, YAxis } from '../../../../src';
import { pageData } from '../../data';
import { EventHandlers } from '../props/EventHandlers';
import { animateNewValues, AnimationProps } from '../props/AnimationProps';
import { legendType } from '../props/Legend';
import { LineStyle } from '../props/Styles';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { data, General as GeneralProps } from '../props/CartesianComponentShared';
import { ResponsiveProps } from '../props/Tooltip';
import { ManualAnimations } from '../../../storybook-addon-recharts/ManualAnimations';

export default {
  argTypes: {
    ...EventHandlers,
    animateNewValues,
    ...AnimationProps,
    legendType,
    ...GeneralProps,
    data,
    ...ResponsiveProps,
    ...LineStyle,
    // Deprecated
    dangerouslySetInnerHTML: { table: { category: 'Deprecated' }, hide: true, disable: true },
  },
  component: Line,
};

export const API = {
  render: (args: Record<string, any>, context: StoryContext) => {
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return (
      <ManualAnimations isEnabled={context.rechartsInspectorEnabled}>
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
            {/* All components are added to show the interaction with the Line properties */}
            <Legend />
            <XAxis dataKey="name" />
            <YAxis width="auto" />
            {/* The target component */}
            <Line dataKey="uv" {...args} />
            <Tooltip />
          </ComposedChart>
        </ResponsiveContainer>
      </ManualAnimations>
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
