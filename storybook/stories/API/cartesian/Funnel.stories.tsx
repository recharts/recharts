import React from 'react';
import { Args } from '@storybook/react-vite';
import { nameKey, activeShape, General } from '../props/CartesianComponentShared';
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
import { RechartsHookInspector } from '../../../storybook-addon-recharts';
import type { RechartsStoryContext } from '../../../storybook-addon-recharts/RechartsStoryContext';

export default {
  argTypes: {
    nameKey,
    legendType,
    shape: activeShape,
    activeShape,
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
  render: (args: Args, context: RechartsStoryContext) => {
    return (
      <ResponsiveContainer width="100%" height={200}>
        <FunnelChart layout="horizontal">
          <Funnel dataKey={args.dataKey} {...args}>
            <LabelList dataKey="name" fill="#000" position="right" stroke="none" />
            <Legend />
          </Funnel>
          <RechartsHookInspector
            position={context.rechartsInspectorPosition}
            setPosition={context.rechartsSetInspectorPosition}
          />
        </FunnelChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(AnimationProps),
    ...getStoryArgsFromArgsTypesObject(General),
    ...getStoryArgsFromArgsTypesObject(GeneralStyle),
    ...getStoryArgsFromArgsTypesObject(ChartSizeProps),
    width: 400,
    dataKey: 'value',
    stroke: '#424242',
    isAnimationActive: true,
    lastShapeType: 'rectangle',
    orientation: 'horizontal',
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
