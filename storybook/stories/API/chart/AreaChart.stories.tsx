import React from 'react';
import { curveCardinal } from 'victory-vendor/d3-shape';
import { Args } from '@storybook/react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis } from '../../../../src';
import { pageData, subjectData } from '../../data';
import { CategoricalChartProps } from '../props/ChartProps';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { RechartsHookInspector, RechartsStoryContext } from '../../../storybook-addon-recharts';

export default {
  argTypes: CategoricalChartProps,
  component: AreaChart,
};

export const Simple = {
  render: (args: Args, context: RechartsStoryContext) => {
    const [myState, setMyState] = React.useState(0);
    return (
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          {...args}
          onMouseDown={() => setMyState(myState + 1)}
          margin={{
            top: 0,
            bottom: 0,
            left: 50,
            right: 50,
          }}
        >
          <Area dataKey="pv" strokeWidth={3} stroke="#2451B7" fill="#5376C4" />
          <CartesianGrid opacity={0.1} vertical={false} />
          <Tooltip />
          <RechartsHookInspector
            position={context.rechartsInspectorPosition}
            setPosition={context.rechartsSetInspectorPosition}
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
    data: pageData,
    layout: 'horizontal',
    margin: {
      top: 0,
      bottom: 0,
      left: 50,
      right: 50,
    },
  },
};

const stepAround = curveCardinal.tension(0.5);

export const CustomType = {
  render: (args: Args, context: RechartsStoryContext) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart {...args}>
          <Area type={stepAround} dataKey="pv" stroke="#ff7300" fill="#ff7300" fillOpacity={0.9} />
          <RechartsHookInspector
            position={context.rechartsInspectorPosition}
            setPosition={context.rechartsSetInspectorPosition}
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
    data: pageData,
    layout: 'horizontal',
    margin: {
      top: 0,
      bottom: 0,
      left: 50,
      right: 50,
    },
  },
};

export const CategoricalAreaChart = {
  render: (args: Args, context: RechartsStoryContext) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart {...args}>
          <Area dataKey="A" stroke="green" fill="green" fillOpacity={0.5} />
          <XAxis dataKey="subject" type="category" allowDuplicatedCategory={false} />
          <Tooltip />
          <RechartsHookInspector
            position={context.rechartsInspectorPosition}
            setPosition={context.rechartsSetInspectorPosition}
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
    data: subjectData,
    layout: 'horizontal',
    margin: {
      top: 0,
      bottom: 0,
      left: 50,
      right: 50,
    },
  },
};
