import React from 'react';
import { Args } from '@storybook/react-vite';
import { Funnel, FunnelChart, LabelList, Legend, ResponsiveContainer } from '../../../../src';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { RechartsHookInspector } from '../../../storybook-addon-recharts';
import { FunnelArgs } from '../arg-types/FunnelArgs';

export default {
  argTypes: FunnelArgs,
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
    ...getStoryArgsFromArgsTypesObject(FunnelArgs),
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
