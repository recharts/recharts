import React from 'react';
import { Args } from '@storybook/react-vite';
import { pageData, rangeData, timeData } from '../data';
import {
  AreaChart,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  Legend,
  ComposedChart,
  LegendPayload,
} from '../../../src';
import { getStoryArgsFromArgsTypesObject } from '../API/props/utils';
import { RechartsHookInspector } from '../../storybook-addon-recharts';
import { AreaChartArgs } from '../API/arg-types/AreaChartArgs';

export default {
  component: AreaChart,
  docs: {
    autodocs: false,
  },
  argTypes: AreaChartArgs,
};

export const StackedAreaChart = {
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <YAxis />
          <XAxis dataKey="x" type="number" scale="time" domain={['auto', 'auto']} />
          <Area type="monotone" dataKey="y" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="z" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Tooltip active defaultIndex={2} />
          <RechartsHookInspector />
          <Legend />
        </AreaChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(AreaChartArgs),
    width: 500,
    height: 400,
    data: timeData,
    margin: {
      top: 10,
      right: 30,
      left: 0,
      bottom: 0,
    },
  },
};

export const StackedAreaChartConnectNulls = {
  render: (args: Args) => {
    return (
      <div style={{ width: '100%' }}>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart {...args}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
            <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
          </AreaChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart {...args}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area connectNulls type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
            <Area connectNulls type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
            <Area connectNulls type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
            <RechartsHookInspector />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(AreaChartArgs),
    width: 500,
    height: 200,
    data: [
      {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: 'Page D',
        pv: 3908,
        amt: 2000,
      },
      {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
      },
      {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
      },
      {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
    ],
    margin: {
      top: 10,
      right: 30,
      left: 0,
      bottom: 0,
    },
  },
};

export const RangedAreaChart = {
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart {...args}>
          <XAxis dataKey="day" />
          <YAxis />
          <Area dataKey="temperature" stroke="#d82428" fill="#8884d8" />
          <Tooltip defaultIndex={4} active />
          <RechartsHookInspector />
        </AreaChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(AreaChartArgs),
    width: 500,
    height: 400,
    data: rangeData,
    margin: {
      top: 10,
      right: 30,
      left: 0,
      bottom: 0,
    },
  },
};

const rangeData2 = [
  { timeHorizon: 1, range: [-2.1, 12.6] },
  { timeHorizon: 3, range: [1, 9.5] },
  { timeHorizon: 5, range: [2, 8.5] },
  { timeHorizon: 10, range: [2.9, 7.6] },
  { timeHorizon: 15, range: [3.4, 7.1] },
];

export const RangedAreaChartWithGradient = {
  render: () => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={rangeData2} width={1000} height={600} margin={{ top: 20, right: 200, bottom: 20, left: 20 }}>
          <defs>
            <linearGradient id="fill-gradient" gradientTransform="rotate(90)">
              <stop offset="5%" stopColor="green" stopOpacity={1} />
              <stop offset={0.86} stopColor="green" stopOpacity={0.1} />
              <stop offset={0.86} stopColor="red" stopOpacity={0.1} />
              <stop offset="95%" stopColor="red" stopOpacity={1} />
            </linearGradient>
          </defs>
          <Area type="monotone" dataKey="range" fill="url(#fill-gradient)" stroke="none" />
          <XAxis
            dataKey="timeHorizon"
            type="number"
            domain={[1, 'dataMax']}
            axisLine={false}
            ticks={[1, 3, 5, 10, 15]}
            unit=" yr"
          />
          <YAxis unit="%" ticks={[-5, 0, 5, 10, 15]} domain={[-5, 15]} />
          <Tooltip />
          <RechartsHookInspector />
        </AreaChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(AreaChartArgs),
  },
};

export const WithChangingDataKeyAndAnimations = {
  render: (args: Args) => {
    const [dataKey, setDataKey] = React.useState('uv');
    return (
      <>
        <form
          style={{ display: 'flex', flexDirection: 'column' }}
          onChange={e => 'value' in e.target && typeof e.target.value === 'string' && setDataKey(e.target.value)}
        >
          <label htmlFor="dataKey-uv" style={{ display: 'flex', flexDirection: 'row' }}>
            <input type="radio" id="dataKey-uv" name="dataKey" value="uv" defaultChecked={dataKey === 'uv'} />
            dataKey=uv
          </label>
          <label htmlFor="dataKey-pv" style={{ display: 'flex', flexDirection: 'row' }}>
            <input type="radio" id="dataKey-pv" name="dataKey" value="pv" defaultChecked={dataKey === 'pv'} />
            dataKey=pv
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
        <ResponsiveContainer width="100%">
          <ComposedChart {...args}>
            <Legend />
            <XAxis dataKey="name" />
            <YAxis />
            <Area dataKey={dataKey} label={{ fill: 'green' }} dot />
            <Tooltip />
            <RechartsHookInspector />
          </ComposedChart>
        </ResponsiveContainer>
      </>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(AreaChartArgs),
    width: 500,
    height: 400,
    data: pageData,
    margin: {
      top: 10,
      right: 30,
      left: 0,
      bottom: 0,
    },
  },
};

export const StackedAreaWithCustomLegend = {
  // Reproducing https://github.com/recharts/recharts/issues/5992
  render: (args: Args) => {
    const [hiddenItems, setHiddenItems] = React.useState<ReadonlyArray<string>>([]);

    const handleClick = ({ dataKey }: LegendPayload) => {
      if (typeof dataKey !== 'string') {
        return;
      }
      setHiddenItems(prev => (prev.includes(dataKey) ? prev.filter(key => key !== dataKey) : [...prev, dataKey]));
    };

    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart {...args} stackOffset="silhouette">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Area
            type="monotone"
            dataKey="uv"
            stackId="1"
            stroke="#8884d8"
            strokeWidth={3}
            fill="rgba(136,132,216,0.47)"
            hide={hiddenItems.includes('uv')}
            animationBegin={0}
          />
          <Area
            type="monotone"
            dataKey="pv"
            stackId="1"
            stroke="#82ca9d"
            strokeWidth={3}
            fill="rgba(130,202,157,0.47)"
            hide={hiddenItems.includes('pv')}
            animationBegin={300}
          />
          <Area
            type="monotone"
            dataKey="amt"
            stackId="1"
            stroke="#ffc658"
            strokeWidth={3}
            fill="rgba(255,198,88,0.47)"
            hide={hiddenItems.includes('amt')}
            animationBegin={600}
          />
          <RechartsHookInspector />
          <Legend
            content={({ payload }) => (
              <ul style={{ display: 'flex', flexDirection: 'row', listStyleType: 'none', padding: 0 }}>
                {payload?.map((entry, index) => (
                  <li key={`item-${index}`} style={{ color: entry.color }}>
                    <button
                      type="button"
                      onClick={() => handleClick(entry)}
                      style={{
                        background: 'none',
                        border: entry.inactive ? '3px solid #ccc' : `3px solid ${entry.color}`,
                        borderRadius: '20%',
                        padding: '10px',
                        cursor: 'pointer',
                        opacity: typeof entry.dataKey === 'string' && hiddenItems.includes(entry.dataKey) ? 0.2 : 1,
                      }}
                    >
                      {entry.value}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(AreaChartArgs),
    width: 500,
    height: 400,
    data: pageData,
    margin: {
      top: 10,
      right: 30,
      left: 0,
      bottom: 0,
    },
  },
};
