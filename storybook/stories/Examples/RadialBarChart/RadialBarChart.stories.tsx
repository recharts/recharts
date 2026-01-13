import React from 'react';
import { Args, Meta, StoryObj } from '@storybook/react-vite';
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
  Tooltip,
} from '../../../../src';
import { pageData, pageDataWithFillColor } from '../../data';
import { getStoryArgsFromArgsTypesObject } from '../../API/props/utils';
import { RechartsHookInspector } from '../../../storybook-addon-recharts';
import { RadialBarChartArgs } from '../../API/arg-types/RadialBarChartArgs';

export default {
  argTypes: RadialBarChartArgs,
  component: RadialBarChart,
} satisfies Meta<typeof RadialBarChart>;

export const SimpleRadialBarChart = {
  render: (args: Args) => {
    return (
      <RadialBarChart {...args}>
        <RadialBar dataKey="pv" />
        <Legend />
        <Tooltip />
        <RechartsHookInspector />
      </RadialBarChart>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(RadialBarChartArgs),
    width: 500,
    height: 500,
    data: pageData,
  },
};

export const RadialBarWithColors = {
  render: (args: Args) => {
    return (
      <RadialBarChart {...args}>
        <RadialBar dataKey="pv" />
        <Legend />
        <Tooltip />
        <RechartsHookInspector />
      </RadialBarChart>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(RadialBarChartArgs),
    width: 500,
    height: 500,
    data: pageDataWithFillColor,
  },
};

export const RadialBarWithAxesAndGrid: StoryObj = {
  render: (args: Args) => {
    return (
      <RadialBarChart {...args}>
        <RadialBar dataKey="pv" />
        <Legend />
        <PolarGrid gridType="circle" />
        <PolarAngleAxis dataKey="pv" type="number" axisLineType="circle" stroke="red" />
        <PolarRadiusAxis dataKey="name" orientation="middle" type="category" angle={90} stroke="black" />
        <Tooltip cursor={{ strokeWidth: 3, stroke: 'black', strokeDasharray: '4 4' }} />
        <RechartsHookInspector />
      </RadialBarChart>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(RadialBarChartArgs),
    width: 500,
    height: 500,
    data: pageDataWithFillColor,
  },
};

export const RadialBarChartWithChangingDataKey: StoryObj = {
  render: (args: Args) => {
    const [dataKey, setDataKey] = React.useState('amt');
    return (
      <>
        <form
          style={{ display: 'flex', flexDirection: 'column' }}
          onChange={e => 'value' in e.target && typeof e.target.value === 'string' && setDataKey(e.target.value)}
        >
          <label htmlFor="dataKey-amt" style={{ display: 'flex', flexDirection: 'row' }}>
            <input type="radio" id="dataKey-amt" name="dataKey" value="amt" defaultChecked={dataKey === 'amt'} />
            dataKey 1
          </label>
          <label htmlFor="dataKey-pv" style={{ display: 'flex', flexDirection: 'row' }}>
            <input type="radio" id="dataKey-pv" name="dataKey" value="pv" defaultChecked={dataKey === 'pv'} />
            dataKey 2
          </label>
          <label htmlFor="dataKey-empty" style={{ display: 'flex', flexDirection: 'row' }}>
            <input
              type="radio"
              id="dataKey-empty"
              name="dataKey"
              value="hidden"
              defaultChecked={dataKey === 'hidden'}
            />
            Hidden
          </label>
        </form>
        <RadialBarChart {...args}>
          <Legend />
          <PolarAngleAxis type="number" domain={[0, 10000]} />
          <PolarRadiusAxis type="category" dataKey="name" />
          <RadialBar dataKey={dataKey} fill="orange" fillOpacity={0.5} stroke="blue" strokeDasharray="3 3" label />
          <Tooltip />
          <RechartsHookInspector />
        </RadialBarChart>
      </>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(RadialBarChartArgs),
    data: pageDataWithFillColor,
    width: 360,
    height: 360,
  },
};
