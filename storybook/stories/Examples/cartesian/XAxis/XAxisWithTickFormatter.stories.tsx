import React from 'react';
import { Args } from '@storybook/react';
import { ComposedChart, Line, XAxis, ResponsiveContainer } from '../../../../../src';
import { dateWithValueData } from '../../../data';
import { getStoryArgsFromArgsTypesObject } from '../../../API/props/utils';
import { XAxisProps } from '../../../API/props/XAxisProps';
import { RechartsHookInspector, RechartsStoryContext } from '../../../../storybook-addon-recharts';

export default {
  component: XAxis,
  argTypes: XAxisProps,
  title: 'Examples/cartesian/XAxis/WithTickFormatter',
};

export const WithTickFormatter = {
  render: (args: Args, context: RechartsStoryContext) => {
    const tickFormatter = (value: number) =>
      new Date(value).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      });

    return (
      <ResponsiveContainer width="100%" height={500}>
        <ComposedChart width={600} height={50} data={dateWithValueData}>
          <XAxis
            {...args}
            dataKey="time"
            type="number"
            scale="time"
            domain={['auto', 'auto']}
            tickFormatter={tickFormatter}
          />
          <Line dataKey="value" />
          <RechartsHookInspector
            position={context.rechartsInspectorPosition}
            setPosition={context.rechartsSetInspectorPosition}
          />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: getStoryArgsFromArgsTypesObject(XAxisProps),
};
