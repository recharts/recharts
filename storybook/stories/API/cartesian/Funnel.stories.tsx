import React from 'react';
import { Args } from '@storybook/react-vite';
import { General, dataKey } from '../props/CartesianComponentShared';
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
import { GeneralStyle } from '../props/Styles';
import { RechartsHookInspector } from '../../../storybook-addon-recharts';
import { ActiveShapeProps } from '../props/ActiveShapeProps';

export default {
  argTypes: {
    nameKey: {
      description: "The key of each sector's name.",
      table: {
        type: { summary: 'String' },
        defaultValue: {
          summary: 'name',
        },
        category: 'General',
      },
    },
    legendType: {
      description: "The type of icon in legend. If set to 'none', no legend item will be rendered.",
      table: {
        type: {
          summary: 'line | plainline | square | rect| circle | cross | diamond | square | star | triangle | wye | none',
        },
        defaultValue: 'rect',
        category: 'Style',
      },
    },
    ...ActiveShapeProps,
    ...AnimationProps,
    animationBegin: {
      description: 'Delays the start of the animation by the specified number of milliseconds.',
      type: { name: 'number' },
      defaultValue: 400,
      table: {
        category: 'Animation',
      },
    },
    dataKey,
    id: General.id,
    name: General.name,
    ...GeneralStyle,
    ...ChartSizeProps,
    ...EventHandlers,
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
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height={200}>
        <FunnelChart layout="horizontal">
          <Funnel dataKey={args.dataKey} {...args}>
            <LabelList dataKey="name" fill="#000" position="right" stroke="none" />
            <Legend />
          </Funnel>
          <RechartsHookInspector />
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
