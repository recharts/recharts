import React from 'react';
import { Args, StoryObj } from '@storybook/react-vite';
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Tooltip, Legend } from '../../../src';
import { RadarChartProps } from '../API/props/RadarChartProps';
import { getStoryArgsFromArgsTypesObject } from '../API/props/utils';
import { rangeData } from '../data';
import { RechartsHookInspector } from '../../storybook-addon-recharts';

export default {
  argTypes: RadarChartProps,
  component: RadarChart,
  docs: {
    autodocs: false,
  },
};

export const RangedRadarChart: StoryObj = {
  render: (args: Args) => {
    return (
      <RadarChart {...args}>
        <PolarGrid />
        <Legend />
        <PolarAngleAxis dataKey="day" />
        <Radar type="number" name="Temperature" dataKey="temperature" fill="orange" fillOpacity={0.5} stroke="blue" />
        <Tooltip defaultIndex={2} />
        <RechartsHookInspector />
      </RadarChart>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(RadarChartProps),
    data: rangeData,
    width: 360,
    height: 360,
  },
};

export const RadarWithChangingDataKey: StoryObj = {
  render: (args: Args) => {
    const [dataKey, setDataKey] = React.useState('key1');
    return (
      <>
        <form
          style={{ display: 'flex', flexDirection: 'column' }}
          onChange={e => 'value' in e.target && typeof e.target.value === 'string' && setDataKey(e.target.value)}
        >
          <label htmlFor="dataKey-key1" style={{ display: 'flex', flexDirection: 'row' }}>
            <input type="radio" id="dataKey-key1" name="dataKey" value="key1" defaultChecked={dataKey === 'key1'} />
            dataKey 1
          </label>
          <label htmlFor="dataKey-key2" style={{ display: 'flex', flexDirection: 'row' }}>
            <input type="radio" id="dataKey-key2" name="dataKey" value="key2" defaultChecked={dataKey === 'key2'} />
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
        <RadarChart {...args}>
          <Legend />
          <PolarAngleAxis dataKey="name" />
          <PolarRadiusAxis domain={[0, 20]} tick={false} axisLine={false} />
          <Radar
            dataKey={dataKey}
            fill="orange"
            fillOpacity={0.5}
            stroke="blue"
            strokeDasharray="3 3"
            dot
            label={{ fill: 'red' }}
          />
          <Tooltip defaultIndex={2} />
          <RechartsHookInspector />
        </RadarChart>
      </>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(RadarChartProps),
    data: [
      { name: 'A', key1: 15, key2: 5 },
      { name: 'B', key1: 12, key2: 2 },
      { name: 'C', key1: 16, key2: 6 },
      { name: 'D', key1: 6, key2: 12 },
      { name: 'E', key1: 8, key2: 15 },
    ],
    width: 360,
    height: 360,
  },
};
