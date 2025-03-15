import React from 'react';
import { StoryObj } from '@storybook/react';
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Tooltip, Legend } from '../../../src';
import { RadarChartProps } from '../API/props/RadarChartProps';
import { getStoryArgsFromArgsTypesObject } from '../API/props/utils';
import { rangeData } from '../data';

export default {
  argTypes: RadarChartProps,
  component: RadarChart,
  docs: {
    autodocs: false,
  },
};

export const NumberAngleType: StoryObj = {
  render: (args: Record<string, any>) => {
    return (
      <RadarChart {...args}>
        <PolarGrid gridType="circle" />

        <PolarRadiusAxis type="number" dataKey="r" />

        <PolarAngleAxis dataKey="angle" axisLineType="circle" type="number" domain={[0, 360]} />

        <Radar type="number" name="r" dataKey="r" fillOpacity={0} stroke="#000" />
      </RadarChart>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(RadarChartProps),
    data: [
      { angle: 0, r: 11 },
      { angle: 90, r: 22 },
      { angle: 180, r: 33 },
      { angle: 270, r: 44 },
    ],
    width: 360,
    height: 360,
  },
};

export const CategoryAngleType: StoryObj = {
  render: (args: Record<string, any>) => {
    return (
      <RadarChart {...args}>
        <PolarGrid gridType="circle" />

        <PolarRadiusAxis type="category" dataKey="r" />

        <PolarAngleAxis dataKey="angle" axisLineType="circle" type="category" />

        <Radar type="number" name="r" dataKey="r" fillOpacity={0} stroke="#000" />
      </RadarChart>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(RadarChartProps),
    data: [
      { angle: 0, r: 11 },
      { angle: 90, r: 22 },
      { angle: 180, r: 33 },
      { angle: 270, r: 44 },
    ],
    width: 360,
    height: 360,
  },
};

export const ShouldBeCorrectAngle: StoryObj = {
  render: (args: Record<string, any>) => {
    return (
      <RadarChart {...args}>
        <PolarGrid />
        <PolarRadiusAxis angle={90} type="number" />
        <PolarAngleAxis dataKey="angle" type="number" domain={[0, 360]} tickCount={9} />

        <Radar dataKey="value" fillOpacity={0} stroke="#000" />
        <Tooltip />
      </RadarChart>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(RadarChartProps),
    data: [
      { angle: 0, value: 5 },
      { angle: 45, value: 5 },
      { angle: 90, value: 5 },
      { angle: 125, value: 5 },
      { angle: 180, value: 5 },
      { angle: 225, value: 5 },
      { angle: 270, value: 5 },
      { angle: 315, value: 5 },
      { angle: 360, value: 5 },
    ],
    width: 600,
    height: 300,
    margin: { top: 5, right: 30, left: 20, bottom: 5 },
  },
};

export const RadarWithLegend: StoryObj = {
  render: (args: Record<string, any>) => {
    return (
      <RadarChart {...args}>
        <PolarGrid gridType="circle" />
        <Legend />
        <PolarRadiusAxis type="number" dataKey="r" />

        <PolarAngleAxis dataKey="angle" axisLineType="circle" type="number" domain={[0, 360]} />

        <Radar type="number" name="r" dataKey="r" fillOpacity={0} stroke="#000" />
        <Tooltip defaultIndex={2} />
      </RadarChart>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(RadarChartProps),
    data: [
      { angle: 0, r: 1 },
      { angle: 90, r: 2 },
      { angle: 180, r: 3 },
      { angle: 270, r: 4 },
    ],
    width: 360,
    height: 360,
  },
};

export const RangedRadarChart: StoryObj = {
  render: (args: Record<string, any>) => {
    return (
      <RadarChart {...args}>
        <PolarGrid />
        <Legend />
        <PolarAngleAxis dataKey="day" />
        <Radar type="number" name="Temperature" dataKey="temperature" fill="orange" fillOpacity={0.5} stroke="blue" />
        <Tooltip defaultIndex={2} />
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
  render: (args: Record<string, any>) => {
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
