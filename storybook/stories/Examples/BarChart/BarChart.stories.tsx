import React, { useState } from 'react';
import { pageData, rangeData } from '../../data';
import {
  ResponsiveContainer,
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ReferenceLine,
  Cell,
  Brush,
  ErrorBar,
  Rectangle,
} from '../../../../src';
import { getStoryArgsFromArgsTypesObject } from '../../API/props/utils';
import { BarChartProps } from '../../API/props/BarChartProps';

export default {
  argTypes: BarChartProps,
  component: BarChart,
  docs: {
    autodocs: false,
  },
};

export const Tiny = {
  render: (args: Record<string, any>) => {
    return (
      <BarChart {...args}>
        <Bar dataKey="uv" fill="#8884d8" />
      </BarChart>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartProps),
    width: 150,
    height: 40,
    data: pageData,
  },
};

export const Simple = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
          <Tooltip defaultIndex={3} />
        </BarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartProps),
    width: 500,
    height: 300,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    },
    data: pageData,
  },
};

export const Stacked = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartProps),
    width: 500,
    height: 300,
    data: pageData,
    margin: {
      top: 20,
      right: 30,
      left: 20,
      bottom: 5,
    },
  },
};

const pvErrorData = pageData.map(d => ({ ...d, pvError: [100, 200] }));

export const StackedWithErrorBar = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar dataKey="uv" stackId="a" fill="#82ca9d">
            <ErrorBar dataKey="pvError" width={5} stroke="red" direction="x" />
          </Bar>
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartProps),
    width: 500,
    height: 300,
    data: pvErrorData,
    margin: {
      top: 20,
      right: 30,
      left: 20,
      bottom: 5,
    },
    layout: 'vertical',
  },
};

export const Mix = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
          <Bar dataKey="uv" fill="#ffc658" />
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartProps),
    width: 500,
    height: 300,
    data: pageData,
    margin: {
      top: 20,
      right: 30,
      left: 20,
      bottom: 5,
    },
  },
};

export const CustomShape = {
  render: (args: Record<string, any>) => {
    const getPath = (x: number, y: number, width: number, height: number) => {
      return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
    };

    const TriangleBar = (props: any) => {
      const { fill, x, y, width, height } = props;

      return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    return (
      <BarChart {...args}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
          {pageData.map(({ name }, index) => (
            <Cell key={`cell-${name}`} fill={colors[index % 20]} />
          ))}
          <Tooltip />
        </Bar>
      </BarChart>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartProps),
    width: 500,
    height: 300,
    data: pageData,
    margin: {
      top: 20,
      right: 30,
      left: 20,
      bottom: 5,
    },
  },
};

const positiveAndNegativeData = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: -3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: -2000,
    pv: -9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: -1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: -3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
export const PositiveAndNegative = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartProps),
    width: 500,
    height: 300,
    data: positiveAndNegativeData,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    },
  },
};

const dataForBrush = [
  { name: '1', uv: 300, pv: 456 },
  { name: '2', uv: -145, pv: 230 },
  { name: '3', uv: -100, pv: 345 },
  { name: '4', uv: -8, pv: 450 },
  { name: '5', uv: 100, pv: 321 },
  { name: '6', uv: 9, pv: 235 },
  { name: '7', uv: 53, pv: 267 },
  { name: '8', uv: 252, pv: -378 },
  { name: '9', uv: 79, pv: -210 },
  { name: '10', uv: 294, pv: -23 },
  { name: '12', uv: 43, pv: 45 },
  { name: '13', uv: -74, pv: 90 },
  { name: '14', uv: -71, pv: 130 },
  { name: '15', uv: -117, pv: 11 },
  { name: '16', uv: -186, pv: 107 },
  { name: '17', uv: -16, pv: 926 },
  { name: '18', uv: -125, pv: 653 },
  { name: '19', uv: 222, pv: 366 },
  { name: '20', uv: 372, pv: 486 },
  { name: '21', uv: 182, pv: 512 },
  { name: '22', uv: 164, pv: 302 },
  { name: '23', uv: 316, pv: 425 },
  { name: '24', uv: 131, pv: 467 },
  { name: '25', uv: 291, pv: -190 },
  { name: '26', uv: -47, pv: 194 },
  { name: '27', uv: -415, pv: 371 },
  { name: '28', uv: -182, pv: 376 },
  { name: '29', uv: -93, pv: 295 },
  { name: '30', uv: -99, pv: 322 },
  { name: '31', uv: -52, pv: 246 },
  { name: '32', uv: 154, pv: 33 },
  { name: '33', uv: 205, pv: 354 },
  { name: '34', uv: 70, pv: 258 },
  { name: '35', uv: -25, pv: 359 },
  { name: '36', uv: -59, pv: 192 },
  { name: '37', uv: -63, pv: 464 },
  { name: '38', uv: -91, pv: -2 },
  { name: '39', uv: -66, pv: 154 },
  { name: '40', uv: -50, pv: 186 },
];
export const WithBrush = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
          <ReferenceLine y={0} stroke="#000" />
          <Brush dataKey="name" height={30} stroke="#8884d8" />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartProps),
    width: 500,
    height: 300,
    data: dataForBrush,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    },
  },
};

export const WithCustomizedEvent = {
  render: (args: Record<string, any>) => {
    const [activeIndex, setActiveIndex] = useState(1);

    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <Bar onClick={(_data, index) => setActiveIndex(index)} dataKey="uv" isAnimationActive={false}>
            {pageData.map(({ name }, index: number) => (
              <Cell cursor="pointer" fill={index === activeIndex ? '#82ca9d' : '#8884d8'} key={`cell-${name}`} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartProps),
    width: 500,
    height: 300,
    data: pageData,
    margin: {
      top: 20,
      right: 20,
      bottom: 20,
      left: 20,
    },
  },
};

export const StackedBySign = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="pv" fill="#8884d8" stackId="stack" />
          <Bar dataKey="uv" fill="#82ca9d" stackId="stack" />
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartProps),
    width: 500,
    height: 300,
    data: positiveAndNegativeData,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    },
    stackOffset: 'sign',
  },
};

export const Biaxial = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <CartesianGrid yAxisId="left" strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
          <Legend />
          <Bar yAxisId="left" dataKey="pv" fill="#8884d8" />
          <Bar yAxisId="right" dataKey="uv" fill="#82ca9d" />
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartProps),
    width: 500,
    height: 300,
    data: pageData,
    margin: {
      top: 20,
      right: 30,
      left: 20,
      bottom: 5,
    },
  },
};

export const HasBackground = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
          <Bar dataKey="uv" fill="#82ca9d" />
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartProps),
    width: 500,
    height: 300,
    data: pageData,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    },
  },
};

export const HasLabelBasedOnSeparateDataKey = {
  render: (args: Record<string, any>) => {
    const dataWithLabel = pageData.map(({ name, uv, pv }) => ({
      name,
      uv,
      pv,
      label: uv > pv ? 'UV greater' : 'PV greater',
    }));
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args} data={dataWithLabel}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" label={{ dataKey: 'label', position: 'top', fill: '#111' }} />
          <Bar dataKey="uv" fill="#82ca9d" />
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartProps),
    width: 500,
    height: 300,
    data: pageData,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    },
  },
};

const dataWithMultiXAxis = [
  {
    date: '2000-01',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    date: '2000-02',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    date: '2000-03',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    date: '2000-04',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    date: '2000-05',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    date: '2000-06',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    date: '2000-07',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    date: '2000-08',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    date: '2000-09',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    date: '2000-10',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    date: '2000-11',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    date: '2000-12',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];
export const WithMultiXAxis = {
  render: (args: Record<string, any>) => {
    const monthTickFormatter = (tick: any) => {
      const date = new Date(tick);

      return date.getMonth() + 1;
    };

    const renderQuarterTick = (tickProps: any) => {
      const { x, y, payload } = tickProps;
      const { value, offset } = payload;
      const date = new Date(value);
      const month = date.getMonth();
      const quarterNo = Math.floor(month / 3) + 1;
      if (month % 3 === 1) {
        return <text x={x} y={y - 4} textAnchor="middle">{`Q${quarterNo}`}</text>;
      }

      const isLast = month === 11;

      if (month % 3 === 0 || isLast) {
        const pathX = Math.floor(isLast ? x + offset : x - offset) + 0.5;

        return <path d={`M${pathX},${y - 4}v${-35}`} stroke="red" />;
      }
      return null;
    };

    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tickFormatter={monthTickFormatter as any} />
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            interval={0}
            tick={renderQuarterTick}
            height={1}
            scale="band"
            xAxisId="quarter"
          />
          <YAxis />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartProps),
    width: 500,
    height: 300,
    data: dataWithMultiXAxis,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    },
  },
};

export const NoPadding = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartProps),
    width: 500,
    height: 300,
    data: pageData,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    },
    barSize: 20,
  },
};

const dataWithSmallValuesAndZero = [
  {
    name: 'Page D',
    uv: 1397,
    pv: 0,
  },
  {
    name: 'Page E',
    uv: 0,
    pv: 1,
  },
  {
    name: 'Page F',
    uv: 1520,
    pv: 1108,
  },
  {
    name: 'Page G',
    uv: 2,
    pv: 680,
  },
];

export const WithMinPointSize = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="pv" fill="purple" minPointSize={value => (value === 0 ? 0 : 2)} stackId="a" />
          <Bar dataKey="uv" fill="green" minPointSize={value => (value === 0 ? 0 : 2)} stackId="a" />
          <Bar dataKey="uv" fill="blue" minPointSize={value => (value === 0 ? 0 : 2)} />
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartProps),
    width: 500,
    height: 300,
    data: dataWithSmallValuesAndZero,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    },
  },
};

export const OneDataPointPercentSize = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <XAxis dataKey={v => v[0]} type="number" domain={[0, 10]} />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey={v => v[1]} />
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartProps),
    width: 500,
    height: 300,
    data: [[4.5, 10]],
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    },
    /* When there's only one data point on a numerical domain, we cannot automatically calculate the bar size */
    barSize: '30%',
  },
};

export const RangedBarChart = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <XAxis dataKey="day" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="temperature" fill="violet" stroke="indigo" />
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartProps),
    width: 500,
    height: 300,
    data: rangeData,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    },
    /* When there's only one data point on a numerical domain, we cannot automatically calculate the bar size */
    barSize: '30%',
  },
};

const MyCustomCursor = (props: any) => {
  // do something here to make your cursor different
  return <Rectangle {...props} fill="red" fillOpacity={0.6} stroke="#111" />;
};

export const CustomCursorBarChart = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="uv" fill="violet" stroke="indigo" />
          <Tooltip cursor={<MyCustomCursor />} />
        </BarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartProps),
    width: 500,
    height: 300,
    data: pageData,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    },
    /* When there's only one data point on a numerical domain, we cannot automatically calculate the bar size */
    barSize: '30%',
  },
};