import React from 'react';
import { Args } from '@storybook/react';
import { coordinateData } from '../../data';
import { ResponsiveContainer, Scatter, ScatterChart, XAxis, YAxis } from '../../../../src';
import { CategoricalChartProps } from '../props/ChartProps';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { RechartsHookInspector, RechartsStoryContext } from '../../../storybook-addon-recharts';

export default {
  argTypes: CategoricalChartProps,
  component: ScatterChart,
};

export const Simple = {
  render: (args: Args, context: RechartsStoryContext) => {
    const { data, ...rest } = args;
    return (
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart {...rest}>
          <XAxis dataKey="x" />
          <YAxis dataKey="y" />
          <Scatter data={data} />
          <RechartsHookInspector
            position={context.rechartsInspectorPosition}
            setPosition={context.rechartsSetInspectorPosition}
          />
        </ScatterChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
    data: coordinateData,
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
};
