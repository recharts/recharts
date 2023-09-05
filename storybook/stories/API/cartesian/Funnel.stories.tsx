import React from 'react';
import { nameKey, activeShape, trapezoids, General } from '../props/CartesianComponentShared';
import { legendType } from '../props/Legend';
import { AnimationProps } from '../props/AnimationProps';
import { Funnel, FunnelChart, LabelList, Legend, ResponsiveContainer } from '../../../../src';
import { ChartSizeProps } from '../props/ChartProps';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import {
  EventHandlers,
  onAnimationEnd,
  onAnimationStart,
  onClick,
  onMouseDown,
  onMouseEnter,
  onMouseLeave,
  onMouseMove,
  onMouseOut,
  onMouseOver,
  onMouseUp,
} from '../props/EventHandlers';
import { ResponsiveProps } from '../props/Tooltip';
import { GeneralStyle } from '../props/Styles';

export default {
  argTypes: {
    nameKey,
    legendType,
    activeShape,
    trapezoids,
    ...AnimationProps,
    ...General,
    ...GeneralStyle,
    ...ChartSizeProps,
    ...EventHandlers,
    ...ResponsiveProps,
    onAnimationStart,
    onAnimationEnd,
    onClick,
    onMouseDown,
    onMouseUp,
    onMouseMove,
    onMouseOver,
    onMouseOut,
    onMouseEnter,
    onMouseLeave,
  },
  component: Funnel,
};

export const API = {
  render: (args: Record<string, any>) => {
    const { data } = args;
    return (
      <ResponsiveContainer width="100%" height={200}>
        <FunnelChart layout="horizontal">
          <Funnel
            width={400}
            data={data}
            dataKey="value"
            stroke="#424242"
            isAnimationActive
            labelLine
            lastShapeType="rectangle"
            orientation="horizontal"
          >
            <LabelList dataKey="name" fill="#000" position="right" stroke="none" />
            <Legend />
          </Funnel>
        </FunnelChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(AnimationProps),
    ...getStoryArgsFromArgsTypesObject(General),
    ...getStoryArgsFromArgsTypesObject(GeneralStyle),
    ...getStoryArgsFromArgsTypesObject(ChartSizeProps),
    data: [
      {
        fill: '#EEEEEE',
        name: 'A',
        value: 1009,
      },
      {
        fill: '#E0E0E0',
        name: 'B',
        value: 903,
      },
      {
        fill: '#BDBDBD',
        name: 'C',
        value: 756,
      },
      {
        fill: '#9E9E9E',
        name: 'D',
        value: 622,
      },
      {
        fill: '#757575',
        name: 'E',
        value: 602,
      },
      {
        fill: '#424242',
        name: 'F',
        value: 580,
      },
    ],
  },
};
