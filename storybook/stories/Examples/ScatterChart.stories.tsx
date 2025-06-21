import { Meta, StoryContext, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import {
  ScatterChart,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  LabelList,
  Cell,
  Scatter,
  ZAxis,
} from '../../../src';
import { Props as ScatterProps } from '../../../src/cartesian/Scatter';
import { CategoricalChartProps } from '../API/props/ChartProps';
import { getStoryArgsFromArgsTypesObject } from '../API/props/utils';
import { StorybookArgs } from '../../StorybookArgs';
import { RechartsHookInspector } from '../../storybook-addon-recharts/RechartsHookInspector';
import { babiesAndVideosCorrelation } from '../data/spurriousCorrelations';
import { ManualAnimations } from '../../storybook-addon-recharts/ManualAnimations';

export default {
  component: ScatterChart,
  argTypes: CategoricalChartProps,
  docs: {
    autodocs: false,
  },
};

export const Simple: Meta<ScatterProps> = {
  render: args => {
    const data = [
      { x: 100, y: 200, z: 200 },
      { x: 100, y: 200, z: 200 },
      { x: 120, y: 100, z: 260 },
      { x: 170, y: 300, z: 400 },
      { x: 140, y: 250, z: 280 },
      { x: 150, y: 400, z: 500 },
      { x: 110, y: 280, z: 200 },
    ];

    return (
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="stature" unit="cm" />
          <YAxis type="number" dataKey="y" name="weight" unit="kg" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} defaultIndex={1} />
          <Scatter activeShape={args.activeShape} name="A school" data={data} fill="#8884d8" />
          <Legend />
        </ScatterChart>
      </ResponsiveContainer>
    );
  },
  args: {
    activeShape: { fill: 'red' },
  },
};

export const ThreeDim = {
  render: (args: StorybookArgs) => {
    const data01 = [
      { x: 100, y: 200, z: 200 },
      { x: 120, y: 100, z: 260 },
      { x: 170, y: 300, z: 400 },
      { x: 140, y: 250, z: 280 },
      { x: 150, y: 400, z: 500 },
      { x: 110, y: 280, z: 200 },
    ];
    const data02 = [
      { x: 200, y: 260, z: 240 },
      { x: 240, y: 290, z: 220 },
      { x: 190, y: 290, z: 250 },
      { x: 198, y: 250, z: 210 },
      { x: 180, y: 280, z: 260 },
      { x: 210, y: 220, z: 230 },
    ];

    return (
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart {...args}>
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="stature" unit="cm" />
          <YAxis type="number" dataKey="y" name="weight" unit="kg" />
          <ZAxis type="number" dataKey="z" range={[60, 400]} name="score" unit="km" />
          <Legend />
          <Scatter name="A school" data={data01} fill="#8884d8" shape="star" />
          <Scatter name="B school" data={data02} fill="#82ca9d" shape="triangle" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        </ScatterChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
    margin: {
      top: 20,
      right: 20,
      bottom: 20,
      left: 20,
    },
  },
};

export const JointLine = {
  render: (args: StorybookArgs) => {
    const data01 = [
      { x: 10, y: 30 },
      { x: 30, y: 200 },
      { x: 45, y: 100 },
      { x: 50, y: 400 },
      { x: 70, y: 150 },
      { x: 100, y: 250 },
    ];
    const data02 = [
      { x: 30, y: 20 },
      { x: 50, y: 180 },
      { x: 75, y: 240 },
      { x: 100, y: 100 },
      { x: 120, y: 190 },
    ];

    return (
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart {...args}>
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="stature" unit="cm" />
          <YAxis type="number" dataKey="y" name="weight" unit="kg" />
          <ZAxis type="number" dataKey="x" range={[100, 100]} />
          <Legend />
          <Scatter name="A school" data={data01} fill="#8884d8" line shape="cross" />
          <Scatter name="B school" data={data02} fill="#82ca9d" line shape="diamond" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        </ScatterChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
    margin: {
      top: 20,
      right: 20,
      bottom: 20,
      left: 20,
    },
  },
};

export const BubbleChart = {
  render: (args: StorybookArgs) => {
    const data01 = [
      { hour: '12a', index: 1, value: 170 },
      { hour: '1a', index: 1, value: 180 },
      { hour: '2a', index: 1, value: 150 },
      { hour: '3a', index: 1, value: 120 },
      { hour: '4a', index: 1, value: 200 },
      { hour: '5a', index: 1, value: 300 },
      { hour: '6a', index: 1, value: 400 },
      { hour: '7a', index: 1, value: 200 },
      { hour: '8a', index: 1, value: 100 },
      { hour: '9a', index: 1, value: 150 },
      { hour: '10a', index: 1, value: 160 },
      { hour: '11a', index: 1, value: 170 },
      { hour: '12a', index: 1, value: 180 },
      { hour: '1p', index: 1, value: 144 },
      { hour: '2p', index: 1, value: 166 },
      { hour: '3p', index: 1, value: 145 },
      { hour: '4p', index: 1, value: 150 },
      { hour: '5p', index: 1, value: 170 },
      { hour: '6p', index: 1, value: 180 },
      { hour: '7p', index: 1, value: 165 },
      { hour: '8p', index: 1, value: 130 },
      { hour: '9p', index: 1, value: 140 },
      { hour: '10p', index: 1, value: 170 },
      { hour: '11p', index: 1, value: 180 },
    ];

    const data02 = [
      { hour: '12a', index: 1, value: 160 },
      { hour: '1a', index: 1, value: 180 },
      { hour: '2a', index: 1, value: 150 },
      { hour: '3a', index: 1, value: 120 },
      { hour: '4a', index: 1, value: 200 },
      { hour: '5a', index: 1, value: 300 },
      { hour: '6a', index: 1, value: 100 },
      { hour: '7a', index: 1, value: 200 },
      { hour: '8a', index: 1, value: 100 },
      { hour: '9a', index: 1, value: 150 },
      { hour: '10a', index: 1, value: 160 },
      { hour: '11a', index: 1, value: 160 },
      { hour: '12a', index: 1, value: 180 },
      { hour: '1p', index: 1, value: 144 },
      { hour: '2p', index: 1, value: 166 },
      { hour: '3p', index: 1, value: 145 },
      { hour: '4p', index: 1, value: 150 },
      { hour: '5p', index: 1, value: 160 },
      { hour: '6p', index: 1, value: 180 },
      { hour: '7p', index: 1, value: 165 },
      { hour: '8p', index: 1, value: 130 },
      { hour: '9p', index: 1, value: 140 },
      { hour: '10p', index: 1, value: 160 },
      { hour: '11p', index: 1, value: 180 },
    ];

    const parseDomain = () => [
      0,
      Math.max(
        Math.max.apply(
          null,
          data01.map(entry => entry.value),
        ),
        Math.max.apply(
          null,
          data02.map(entry => entry.value),
        ),
      ),
    ];

    const domain = parseDomain();
    const range = [16, 225] as const;

    const renderTooltip = (props: any) => {
      const { active, payload } = props;

      if (active && payload && payload.length) {
        const data = payload[0] && payload[0].payload;

        return (
          <div
            style={{
              backgroundColor: '#fff',
              border: '1px solid #999',
              margin: 0,
              padding: 10,
            }}
          >
            <p>{data.hour}</p>
            <p>
              <span>value: </span>
              {data.value}
            </p>
          </div>
        );
      }

      return null;
    };

    const BubbleAxes = ({ day, showXTicks = false }: { day: string; showXTicks?: boolean }) => (
      <>
        <XAxis
          type="category"
          dataKey="hour"
          name="hour"
          interval={0}
          tick={showXTicks || { fontSize: 0 }}
          tickLine={{ transform: 'translate(0, -6)' }}
        />
        <YAxis
          type="number"
          dataKey="index"
          name="sunday"
          height={10}
          width={80}
          tick={false}
          tickLine={false}
          axisLine={false}
          label={{ value: day, position: 'insideRight' }}
        />
        <ZAxis type="number" dataKey="value" domain={domain} range={range} />
      </>
    );

    const MyTooltip = () => (
      <Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={renderTooltip} />
    );

    const Bubbles = ({ data }: { data: Array<unknown> }) => <Scatter data={data} fill="#8884d8" />;

    return (
      <div style={{ width: '100%' }}>
        <ResponsiveContainer width="100%" height={60}>
          <ScatterChart {...args}>
            <BubbleAxes day="Sunday" />
            <Bubbles data={data01} />
            <MyTooltip />
          </ScatterChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={60}>
          <ScatterChart {...args}>
            <BubbleAxes day="Monday" />
            <Bubbles data={data02} />
            <MyTooltip />
          </ScatterChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={60}>
          <ScatterChart {...args}>
            <BubbleAxes day="Tuesday" />
            <Bubbles data={data01} />
            <MyTooltip />
          </ScatterChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={60}>
          <ScatterChart {...args}>
            <BubbleAxes day="Wednesday" />
            <Bubbles data={data02} />
            <MyTooltip />
          </ScatterChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={60}>
          <ScatterChart {...args}>
            <BubbleAxes day="Thursday" />
            <Bubbles data={data01} />
            <MyTooltip />
          </ScatterChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={60}>
          <ScatterChart {...args}>
            <BubbleAxes day="Friday" />
            <Bubbles data={data02} />
            <MyTooltip />
          </ScatterChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={60}>
          <ScatterChart {...args}>
            <BubbleAxes day="Saturday" showXTicks />
            <Bubbles data={data01} />
            <MyTooltip />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
    width: 800,
    height: 60,
    margin: {
      top: 10,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
};

export const WithLabels = {
  render: (args: StorybookArgs) => {
    const data = [
      { x: 100, y: 200, z: 200 },
      { x: 120, y: 100, z: 260 },
      { x: 170, y: 300, z: 400 },
      { x: 140, y: 250, z: 280 },
      { x: 150, y: 400, z: 500 },
      { x: 110, y: 280, z: 200 },
    ];

    return (
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart {...args}>
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="stature" unit="cm" />
          <YAxis type="number" dataKey="y" name="weight" unit="kg" />
          <Scatter name="A school" data={data} fill="#8884d8">
            <LabelList dataKey="x" />
          </Scatter>
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        </ScatterChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
    margin: {
      top: 20,
      right: 20,
      bottom: 20,
      left: 20,
    },
  },
};

export const MultipleYAxes = {
  render: (args: StorybookArgs) => {
    const data01 = [
      { x: 100, y: 200, z: 200 },
      { x: 120, y: 100, z: 260 },
      { x: 170, y: 300, z: 400 },
      { x: 140, y: 250, z: 280 },
      { x: 150, y: 400, z: 500 },
      { x: 110, y: 280, z: 200 },
    ];
    const data02 = [
      { x: 300, y: 300, z: 200 },
      { x: 400, y: 500, z: 260 },
      { x: 200, y: 700, z: 400 },
      { x: 340, y: 350, z: 280 },
      { x: 560, y: 500, z: 500 },
      { x: 230, y: 780, z: 200 },
      { x: 500, y: 400, z: 200 },
      { x: 300, y: 500, z: 260 },
      { x: 240, y: 300, z: 400 },
      { x: 320, y: 550, z: 280 },
      { x: 500, y: 400, z: 500 },
      { x: 420, y: 280, z: 200 },
    ];

    return (
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart {...args}>
          <CartesianGrid yAxisId="left" />
          <XAxis type="number" dataKey="x" name="stature" unit="cm" />
          <YAxis yAxisId="left" type="number" dataKey="y" name="weight" unit="kg" stroke="#8884d8" />
          <YAxis
            yAxisId="right"
            type="number"
            dataKey="y"
            name="weight"
            unit="kg"
            orientation="right"
            stroke="#82ca9d"
          />
          <Scatter yAxisId="left" name="A school" data={data01} fill="#8884d8" />
          <Scatter yAxisId="right" name="A school" data={data02} fill="#82ca9d" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        </ScatterChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
    margin: {
      top: 20,
      right: 20,
      bottom: 20,
      left: 20,
    },
  },
};

export const WithCells = {
  render: (args: StorybookArgs) => {
    const data = [
      { x: 100, y: 200, z: 200 },
      { x: 120, y: 100, z: 260 },
      { x: 170, y: 300, z: 400 },
      { x: 140, y: 250, z: 280 },
      { x: 150, y: 400, z: 500 },
      { x: 110, y: 280, z: 200 },
    ];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    return (
      <ScatterChart {...args}>
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="stature" unit="cm" />
        <YAxis type="number" dataKey="y" name="weight" unit="kg" />
        <Scatter name="A school" data={data} fill="#8884d8">
          {data.map(({ x }, index) => (
            <Cell key={`cell-${x}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Scatter>
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      </ScatterChart>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
    width: 400,
    height: 400,
    margin: {
      top: 20,
      right: 20,
      bottom: 20,
      left: 20,
    },
  },
};

export const SpurriousCorrelation: StoryObj<StorybookArgs> = {
  render: (args: StorybookArgs, context: StoryContext) => {
    return (
      <ScatterChart {...args}>
        <CartesianGrid vertical={false} yAxisId="axis-babies" />
        <XAxis type="category" dataKey="year" name="Year" />
        <YAxis
          yAxisId="axis-babies"
          type="number"
          dataKey="babies"
          label={{
            value: 'Babies born',
            position: 'center',
            angle: -90,
            stroke: 'black',
            dx: -20,
          }}
          domain={['dataMin', 'dataMax']}
          stroke="black"
          name="Babies born"
          unit=""
          orientation="left"
          axisLine={false}
          tickLine={false}
          tickCount={5}
        />
        <YAxis
          yAxisId="axis-youtube"
          type="number"
          dataKey="length"
          stroke="red"
          orientation="right"
          name="Video length"
          unit=""
          domain={['dataMin', 'dataMax']}
          label={{
            value: 'Length in seconds',
            position: 'center',
            angle: 90,
            stroke: 'red',
            dx: 30,
          }}
          tickCount={5}
          axisLine={false}
          tickLine={false}
        />
        <Legend />
        <Scatter
          lineType="joint"
          line
          name="Babies of all sexes born in the US named Mara. Source: US Social Security Administration (https://www.ssa.gov/oact/babynames/index.html)"
          yAxisId="axis-babies"
          fill="black"
          shape="diamond"
          strokeWidth={2}
          strokeDasharray="3 1"
        />
        <Scatter
          line
          lineType="joint"
          name="Average length of Stand-up Maths YouTube videos. Source: YouTube"
          yAxisId="axis-youtube"
          fill="red"
          strokeWidth={2}
          shape="circle"
        />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} shared={false} />
        <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
      </ScatterChart>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
    width: 800,
    height: 400,
    margin: {
      top: 0,
      right: 20,
      bottom: 0,
      left: 20,
    },
    data: babiesAndVideosCorrelation,
  },
};

export const WithDuplicatedCategory: StoryObj<StorybookArgs> = {
  render: (args: StorybookArgs) => {
    const data = [
      { x: 100, y: 100, z: 200 },
      { x: 100, y: 200, z: 200 },
      { x: 100, y: 300, z: 200 },
    ];

    return (
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart>
          <CartesianGrid />
          <XAxis
            type="category"
            allowDuplicatedCategory={Boolean(args.allowDuplicatedCategory)}
            dataKey="x"
            name="stature"
            unit="cm"
          />
          <YAxis
            type="category"
            allowDuplicatedCategory={Boolean(args.allowDuplicatedCategory)}
            dataKey="y"
            name="weight"
            unit="kg"
          />
          <Scatter activeShape={{ fill: 'red' }} name="A school" data={data} />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
        </ScatterChart>
      </ResponsiveContainer>
    );
  },
  args: {
    allowDuplicatedCategory: false,
  },
};

export const ChangingDataKey = {
  render: (args: Record<string, any>, context: StoryContext) => {
    const data1 = [
      { x: { value: 1 }, name: 'x1' },
      { x: { value: 2 }, name: 'x2' },
      { x: { value: 3 }, name: 'x3' },
    ];
    const data2 = [
      { y: { value: 3 }, name: 'y1' },
      { y: { value: 2 }, name: 'y2' },
      { y: { value: 1 }, name: 'y3' },
    ];

    const dataKey1 = (d: any) => {
      return d.x.value;
    };
    const dataKey2 = (d: any) => {
      return d.y.value;
    };

    const [useData2, setUseData2] = useState(false);
    const [visible, setVisible] = useState(true);

    return (
      <>
        <button
          type="button"
          onClick={() => {
            setUseData2(false);
            setVisible(true);
          }}
        >
          Use data1
        </button>
        <button
          type="button"
          onClick={() => {
            setUseData2(true);
            setVisible(true);
          }}
        >
          Use data2
        </button>
        <button
          type="button"
          onClick={() => {
            setVisible(false);
          }}
        >
          Hide
        </button>
        <ManualAnimations isEnabled={context.rechartsInspectorEnabled}>
          <ScatterChart {...args} data={useData2 ? data2 : data1}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
            <YAxis dataKey={useData2 ? dataKey2 : dataKey1} width="auto" />
            <ZAxis range={[200, 200]} />
            <Tooltip />
            <Legend />
            <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
            <Scatter
              name="Animated Scatter"
              lineType="joint"
              line
              hide={!visible}
              dataKey={useData2 ? dataKey2 : dataKey1}
              stroke="#8884d8"
              fill="#8884d8"
              strokeWidth={3}
              strokeDasharray="2 2"
              label={{ fill: 'red', dy: -25, dataKey: useData2 ? dataKey2 : dataKey1 }}
            />
          </ScatterChart>
        </ManualAnimations>
      </>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
    width: 500,
    height: 300,
    margin: {
      top: 30,
      right: 30,
      left: 20,
      bottom: 5,
    },
  },
};
