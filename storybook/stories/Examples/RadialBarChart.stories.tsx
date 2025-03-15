import React from 'react';
import { Meta, StoryContext, StoryObj } from '@storybook/react';
import {
  Customized,
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
  Tooltip,
} from '../../../src';
import { pageData, pageDataWithFillColor } from '../data';
import { RadialBarChartProps } from '../API/props/RadialBarChartProps';
import { getStoryArgsFromArgsTypesObject } from '../API/props/utils';
import { RechartsHookInspector } from '../../storybook-addon-recharts/RechartsHookInspector';
import { StorybookArgs } from '../../StorybookArgs';
import { RadarChartProps } from '../API/props/RadarChartProps';

export default {
  argTypes: RadialBarChartProps,
  component: RadialBarChart,
  decorators: [],
} satisfies Meta<typeof RadialBarChart>;

export const SimpleRadialBarChart = {
  render: (args: StorybookArgs, context: StoryContext) => {
    return (
      <RadialBarChart {...args}>
        <RadialBar dataKey="pv" />
        <Legend />
        <Tooltip />
        <Customized component={<RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />} />
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
  render: (args: StorybookArgs, context: StoryContext) => {
    return (
      <RadialBarChart {...args}>
        <RadialBar dataKey="pv" />
        <Legend />
        <Tooltip />
        <Customized component={<RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />} />
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

export const RadialBarWithAxesAndGrid: StoryObj = {
  render: (args: StorybookArgs, context: StoryContext) => {
    return (
      <RadialBarChart {...args}>
        <RadialBar dataKey="pv" />
        <Legend />
        <PolarGrid gridType="circle" />
        <PolarAngleAxis dataKey="pv" type="number" axisLineType="circle" stroke="red" />
        <PolarRadiusAxis dataKey="name" orientation="middle" type="category" angle={90} stroke="black" />
        <Tooltip cursor={{ strokeWidth: 3, stroke: 'black', strokeDasharray: '4 4' }} />
        <Customized component={<RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />} />
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
  render: (args: StorybookArgs, context: StoryContext) => {
    return (
      <RadialBarChart {...args}>
        <RadialBar dataKey="pv" stackId="stack1" fill="gold" />
        <RadialBar dataKey="uv" stackId="stack1" fill="purple" />
        <Legend />
        <PolarGrid gridType="circle" />
        <PolarAngleAxis dataKey="pv" type="number" axisLineType="circle" />
        <Tooltip defaultIndex={3} cursor={{ strokeWidth: 3, stroke: 'black', strokeDasharray: '4 4' }} />
        <Customized component={<RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />} />
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
  render: (args: StorybookArgs, context: StoryContext) => {
    return (
      <RadialBarChart {...args}>
        <RadialBar dataKey="rings" />
        <Legend />
        <PolarGrid gridType="circle" />
        <Tooltip defaultIndex={0} />
        <Customized component={<RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />} />
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
  render: (args: StorybookArgs, context: StoryContext) => {
    return (
      <RadialBarChart {...args}>
        <RadialBar dataKey="rings" />
        <Legend />
        <PolarGrid gridType="circle" />
        <PolarAngleAxis />
        <PolarRadiusAxis />
        <Tooltip defaultIndex={0} />
        <Customized component={<RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />} />
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
  render: (args: StorybookArgs, context: StoryContext) => {
    return (
      <RadialBarChart {...args}>
        <RadialBar dataKey="rings" />
        <Legend />
        <PolarGrid gridType="circle" />
        <PolarAngleAxis dataKey="rings" />
        <PolarRadiusAxis dataKey="name" stroke="black" />
        <Tooltip defaultIndex={0} />
        <Customized component={<RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />} />
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
  render: (args: StorybookArgs, context: StoryContext) => {
    return (
      <RadialBarChart {...args}>
        <RadialBar dataKey="rings" />
        <Legend />
        <PolarGrid gridType="circle" />
        <PolarAngleAxis type="number" />
        <PolarRadiusAxis type="category" stroke="black" />
        <Tooltip defaultIndex={0} />
        <Customized component={<RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />} />
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
  render: (args: StorybookArgs, context: StoryContext) => {
    return (
      <RadialBarChart {...args}>
        <RadialBar dataKey="rings" />
        <Legend />
        <PolarGrid gridType="circle" />
        <PolarAngleAxis dataKey="rings" type="number" />
        <PolarRadiusAxis dataKey="name" type="category" stroke="black" />
        <Tooltip defaultIndex={0} />
        <Customized component={<RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />} />
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
  render: (args: StorybookArgs, context: StoryContext) => {
    const totalCountOfRings = ringsData.reduce((acc, entry) => acc + entry.rings, 0);
    return (
      <RadialBarChart {...args}>
        <RadialBar dataKey="rings" />
        <Legend />
        <PolarGrid gridType="circle" />
        <PolarAngleAxis dataKey="rings" type="number" domain={[0, totalCountOfRings]} />
        <PolarRadiusAxis dataKey="name" type="category" stroke="black" />
        <Tooltip defaultIndex={0} />
        <Customized component={<RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />} />
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
  render: (args: StorybookArgs, context: StoryContext) => {
    const totalCountOfRings = ringsData.reduce((acc, entry) => acc + entry.rings, 0);
    return (
      <RadialBarChart {...args}>
        <RadialBar dataKey="rings" />
        <Legend />
        <PolarGrid gridType="circle" />
        <PolarAngleAxis dataKey="rings" type="number" domain={[0, totalCountOfRings]} />
        <PolarRadiusAxis dataKey="name" type="category" orientation="left" angle={90} stroke="black" />
        <Tooltip defaultIndex={0} />
        <Customized component={<RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />} />
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

export const ReversedAngleAxis = {
  render: (args: StorybookArgs, context: StoryContext) => (
    <>
      <p>Angle axis clockwise, starts on East</p>
      <RadialBarChart {...args}>
        <RadialBar dataKey="rings" />
        <Legend />
        <PolarGrid gridType="circle" />
        <PolarAngleAxis type="number" reversed />
        <PolarRadiusAxis type="category" stroke="black" />
        <Tooltip />
        <Customized component={<RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />} />
      </RadialBarChart>
    </>
  ),
  args: {
    ...getStoryArgsFromArgsTypesObject(RadialBarChartProps),
    width: 800,
    height: 800,
    data: ringsData,
  },
};

export const ReversedRadiusAxis = {
  render: (args: StorybookArgs, context: StoryContext) => (
    <>
      <p>Counter-clockwise, starts East, bars come in reversed order</p>
      <RadialBarChart {...args}>
        <RadialBar dataKey="rings" />
        <Legend />
        <PolarGrid gridType="circle" />
        <PolarAngleAxis type="number" />
        <PolarRadiusAxis type="category" stroke="black" reversed />
        <Tooltip />
        <Customized component={<RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />} />
      </RadialBarChart>
    </>
  ),
  args: {
    ...getStoryArgsFromArgsTypesObject(RadialBarChartProps),
    width: 800,
    height: 800,
    data: ringsData,
  },
};

export const ReversedBothAxes = {
  render: (args: StorybookArgs, context: StoryContext) => (
    <>
      <p>Counter-clockwise, starts East, bars come in reversed order</p>
      <RadialBarChart {...args}>
        <RadialBar dataKey="rings" />
        <Legend />
        <PolarGrid gridType="circle" />
        <PolarAngleAxis type="number" reversed />
        <PolarRadiusAxis type="category" stroke="black" reversed />
        <Tooltip />
        <Customized component={<RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />} />
      </RadialBarChart>
    </>
  ),
  args: {
    ...getStoryArgsFromArgsTypesObject(RadialBarChartProps),
    width: 800,
    height: 800,
    data: ringsData,
  },
};

export const Angled = {
  render: (args: StorybookArgs, context: StoryContext) => (
    <>
      <p>Both angles are positive, chart starts at East + startAngle, CCW</p>
      <RadialBarChart {...args}>
        <RadialBar dataKey="rings" />
        <Legend />
        <PolarGrid gridType="circle" />
        <PolarAngleAxis type="number" />
        <PolarRadiusAxis type="category" stroke="black" />
        <Tooltip />
        <Customized component={<RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />} />
      </RadialBarChart>
    </>
  ),
  args: {
    ...getStoryArgsFromArgsTypesObject(RadialBarChartProps),
    width: 800,
    height: 800,
    data: ringsData,
    startAngle: 20,
    endAngle: 220,
  },
};

export const ChartReversedByAngles = {
  render: (args: StorybookArgs, context: StoryContext) => (
    <>
      <p>If startAngle &gt; endAngle, the angle axis gets reversed too</p>
      <RadialBarChart {...args}>
        <RadialBar dataKey="rings" />
        <Legend />
        <PolarGrid gridType="circle" />
        <PolarAngleAxis type="number" />
        <PolarRadiusAxis type="category" stroke="black" />
        <Tooltip />
        <Customized component={<RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />} />
      </RadialBarChart>
    </>
  ),
  args: {
    ...getStoryArgsFromArgsTypesObject(RadialBarChartProps),
    width: 800,
    height: 800,
    data: ringsData,
    startAngle: 145,
    endAngle: 20,
  },
};

export const ChartReversedByBothAnglesAndReverseAxis = {
  render: (args: StorybookArgs, context: StoryContext) => (
    <>
      <p>
        If the angle axis is reversed by making startAngle &gt; endAngle,
        <i>and</i> reversed prop at the same time, it is double reversed back to CCW.
      </p>
      <RadialBarChart {...args}>
        <RadialBar dataKey="rings" />
        <Legend />
        <PolarGrid gridType="circle" />
        <PolarAngleAxis type="number" />
        <PolarRadiusAxis type="category" stroke="black" />
        <Tooltip />
        <Customized component={<RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />} />
      </RadialBarChart>
    </>
  ),
  args: {
    ...getStoryArgsFromArgsTypesObject(RadialBarChartProps),
    width: 800,
    height: 800,
    data: ringsData,
    startAngle: 145,
    endAngle: 20,
  },
};

export const RadialBarChartWithChangingDataKey: StoryObj = {
  render: (args: Record<string, any>) => {
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
        </RadialBarChart>
      </>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(RadarChartProps),
    data: pageDataWithFillColor,
    width: 360,
    height: 360,
  },
};
