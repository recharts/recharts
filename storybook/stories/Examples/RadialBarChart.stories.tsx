import React from 'react';
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart, Tooltip } from '../../../src';
import { pageData, pageDataWithFillColor } from '../data';
import { RadialBarChartProps } from '../API/props/RadialBarChartProps';
import { getStoryArgsFromArgsTypesObject } from '../API/props/utils';

export default {
  argTypes: RadialBarChartProps,
  component: RadialBarChart,
  docs: { audotocs: false },
};

export const SimpleRadialBarChart = {
  render: (args: Record<string, any>) => {
    return (
      <RadialBarChart {...args}>
        <RadialBar dataKey="pv" />
        <Legend />
        <Tooltip />
      </RadialBarChart>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(RadialBarChartProps),
    width: 500,
    height: 500,
    data: pageData,
  },
};

export const RadialBarWithColors = {
  render: (args: Record<string, any>) => {
    return (
      <RadialBarChart {...args}>
        <RadialBar dataKey="pv" />
        <Legend />
        <Tooltip />
      </RadialBarChart>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(RadialBarChartProps),
    width: 500,
    height: 500,
    data: pageDataWithFillColor,
  },
};

export const RadialBarWithAxesAndGrid = {
  render: (args: Record<string, any>) => {
    return (
      <RadialBarChart {...args}>
        <RadialBar dataKey="pv" />
        <Legend />
        <PolarGrid gridType="circle" />
        <PolarAngleAxis dataKey="pv" type="number" axisLineType="circle" stroke="red" />
        <PolarRadiusAxis dataKey="name" orientation="middle" type="category" angle={90} stroke="black" />
        <Tooltip cursor={{ strokeWidth: 3, stroke: 'black', strokeDasharray: '4 4' }} />
      </RadialBarChart>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(RadialBarChartProps),
    width: 500,
    height: 500,
    data: pageDataWithFillColor,
  },
};

export const StackedRadialBar = {
  render: (args: Record<string, any>) => {
    return (
      <RadialBarChart {...args}>
        <RadialBar dataKey="pv" stackId="stack1" fill="gold" />
        <RadialBar dataKey="uv" stackId="stack1" fill="purple" />
        <Legend />
        <PolarGrid gridType="circle" />
        <PolarAngleAxis dataKey="pv" type="number" axisLineType="circle" />
        <Tooltip defaultIndex={3} cursor={{ strokeWidth: 3, stroke: 'black', strokeDasharray: '4 4' }} />
      </RadialBarChart>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(RadialBarChartProps),
    width: 800,
    height: 800,
    data: pageData,
  },
};

/**
 * Three Rings for the Elven-kings under the sky,
 * Seven for the Dwarf-lords in their halls of stone,
 * Nine for Mortal Men doomed to die,
 * One for the Dark Lord on his dark throne
 * In the Land of Mordor where the Shadows lie.
 * One Ring to rule them all, One Ring to find them,
 * One Ring to bring them all and in the darkness bind them
 * In the Land of Mordor where the Shadows lie.
 *
 * Lord of the Rings, J.R.R. Tolkien, 1954
 */
const ringsData = [
  {
    name: 'Elves',
    rings: 3,
    fill: 'green',
  },
  {
    name: 'Dwarves',
    rings: 7,
    fill: 'blue',
  },
  {
    name: 'Humans',
    rings: 9,
    fill: 'red',
  },
  {
    name: 'Sauron',
    rings: 1,
    fill: 'black',
  },
];

export const RingsWithImplicitAxes = {
  render: (args: Record<string, any>) => {
    return (
      <RadialBarChart {...args}>
        <RadialBar dataKey="rings" />
        <Legend />
        <PolarGrid gridType="circle" />
        <Tooltip defaultIndex={0} />
      </RadialBarChart>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(RadialBarChartProps),
    width: 800,
    height: 800,
    data: ringsData,
  },
};

export const RingsWithDefaultAxes = {
  render: (args: Record<string, any>) => {
    return (
      <RadialBarChart {...args}>
        <RadialBar dataKey="rings" />
        <Legend />
        <PolarGrid gridType="circle" />
        <PolarAngleAxis />
        <PolarRadiusAxis />
        <Tooltip defaultIndex={0} />
      </RadialBarChart>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(RadialBarChartProps),
    width: 800,
    height: 800,
    data: ringsData,
  },
};

export const RingsWithDataKeys = {
  render: (args: Record<string, any>) => {
    return (
      <RadialBarChart {...args}>
        <RadialBar dataKey="rings" />
        <Legend />
        <PolarGrid gridType="circle" />
        <PolarAngleAxis dataKey="rings" />
        <PolarRadiusAxis dataKey="name" stroke="black" />
        <Tooltip defaultIndex={0} />
      </RadialBarChart>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(RadialBarChartProps),
    width: 800,
    height: 800,
    data: ringsData,
  },
};

export const RingsWithTypes = {
  render: (args: Record<string, any>) => {
    return (
      <RadialBarChart {...args}>
        <RadialBar dataKey="rings" />
        <Legend />
        <PolarGrid gridType="circle" />
        <PolarAngleAxis type="number" />
        <PolarRadiusAxis type="category" stroke="black" />
        <Tooltip defaultIndex={0} />
      </RadialBarChart>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(RadialBarChartProps),
    width: 800,
    height: 800,
    data: ringsData,
  },
};

export const RingsWithDataKeysAndTypes = {
  render: (args: Record<string, any>) => {
    return (
      <RadialBarChart {...args}>
        <RadialBar dataKey="rings" />
        <Legend />
        <PolarGrid gridType="circle" />
        <PolarAngleAxis dataKey="rings" type="number" />
        <PolarRadiusAxis dataKey="name" type="category" stroke="black" />
        <Tooltip defaultIndex={0} />
      </RadialBarChart>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(RadialBarChartProps),
    width: 800,
    height: 800,
    data: ringsData,
  },
};

export const RingsWithCustomDomain = {
  render: (args: Record<string, any>) => {
    const totalCountOfRings = ringsData.reduce((acc, entry) => acc + entry.rings, 0);
    return (
      <RadialBarChart {...args}>
        <RadialBar dataKey="rings" />
        <Legend />
        <PolarGrid gridType="circle" />
        <PolarAngleAxis dataKey="rings" type="number" domain={[0, totalCountOfRings]} />
        <PolarRadiusAxis dataKey="name" type="category" stroke="black" />
        <Tooltip defaultIndex={0} />
      </RadialBarChart>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(RadialBarChartProps),
    width: 800,
    height: 800,
    data: ringsData,
  },
};

export const RingsWithRadiusAxisVertically = {
  render: (args: Record<string, any>) => {
    const totalCountOfRings = ringsData.reduce((acc, entry) => acc + entry.rings, 0);
    return (
      <RadialBarChart {...args}>
        <RadialBar dataKey="rings" />
        <Legend />
        <PolarGrid gridType="circle" />
        <PolarAngleAxis dataKey="rings" type="number" domain={[0, totalCountOfRings]} />
        <PolarRadiusAxis dataKey="name" type="category" orientation="left" angle={90} stroke="black" />
        <Tooltip defaultIndex={0} />
      </RadialBarChart>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(RadialBarChartProps),
    width: 800,
    height: 800,
    data: ringsData,
    startAngle: 90,
    endAngle: -270,
  },
};
