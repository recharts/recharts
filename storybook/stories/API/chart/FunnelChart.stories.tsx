import React from 'react';
import { Meta } from '@storybook/react';
import { Tooltip, Funnel, FunnelChart, LabelList, ResponsiveContainer, FunnelProps } from '../../../../src';
import { CategoricalChartProps } from '../props/ChartProps';
import { ActiveShapeProps } from '../props/ActiveShapeProps';

export default {
  argTypes: {
    ...CategoricalChartProps,
    ...ActiveShapeProps,
  },
  component: FunnelChart,
};

export const Simple: Meta<FunnelProps> = {
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
            lastShapeType="rectangle"
            orientation="horizontal"
            shape={args.shape}
            activeShape={args.activeShape}
          >
            <LabelList dataKey="name" fill="#000" position="right" stroke="none" />
          </Funnel>
          <Tooltip />
        </FunnelChart>
      </ResponsiveContainer>
    );
  },
  args: {
    shape: {},
    activeShape: { fill: 'gold', stroke: 'purple' },
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
      {
        fill: '#424242',
        name: 'F',
        value: 580,
      },
    ],
  },
};
