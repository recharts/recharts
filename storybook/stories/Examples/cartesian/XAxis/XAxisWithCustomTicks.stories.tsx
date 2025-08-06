import React from 'react';
import { Args } from '@storybook/react-vite';
import { ComposedChart, XAxis, ResponsiveContainer } from '../../../../../src';
import { pageData } from '../../../data';
import { RechartsHookInspector } from '../../../../storybook-addon-recharts';
import { getStoryArgsFromArgsTypesObject } from '../../../API/props/utils';
import { XAxisProps } from '../../../API/props/XAxisProps';

export default {
  component: XAxis,
  argTypes: XAxisProps,
  title: 'Examples/cartesian/XAxis/WithCustomTicks',
};

export const WithCustomTicks = {
  render: (args: Args) => {
    const customizedAxisTick = (props: { x: number; y: number; payload: { value: string } }) => {
      const { x, y, payload } = props;
      return (
        <g transform={`translate(${x},${y})`}>
          <text x={0} y={0} dy={16} textAnchor="end" fill="#666">
            {payload.value}
          </text>
        </g>
      );
    };

    return (
      <ResponsiveContainer width="100%" height={500}>
        <ComposedChart width={600} height={50} data={pageData}>
          <XAxis {...args} dataKey="name" tick={customizedAxisTick} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: getStoryArgsFromArgsTypesObject(XAxisProps),
};
