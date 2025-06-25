import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { curveCardinal } from 'd3-shape';
import { StoryContext } from '@storybook/react';
import { pageData, rangeData } from '../data';
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
import { CategoricalChartProps } from '../API/props/ChartProps';
import { getStoryArgsFromArgsTypesObject } from '../API/props/utils';
import { RechartsHookInspector } from '../../storybook-addon-recharts/RechartsHookInspector';
import { ManualAnimations } from '../../storybook-addon-recharts/ManualAnimations';

export default {
  component: AreaChart,
  docs: {
    autodocs: false,
  },
  argTypes: CategoricalChartProps,
};

export const Simple = {
  render: (args: Record<string, any>, context: StoryContext) => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          <Tooltip />
          <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
        </AreaChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
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

export const StackedAreaChart = {
  render: (args: Record<string, any>, context: StoryContext) => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
          <Tooltip active defaultIndex={2} />
          <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
          <Legend />
        </AreaChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
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

export const TinyAreaChart = {
  render: (args: Record<string, any>, context: StoryContext) => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart {...args}>
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
        </AreaChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
    width: 200,
    height: 60,
    data: pageData,
    margin: {
      top: 5,
      right: 0,
      left: 0,
      bottom: 5,
    },
  },
};

export const PercentAreaChart = {
  render: (args: Record<string, any>, context: StoryContext) => {
    const toPercent = (decimal: number, fixed = 0) => `${(decimal * 100).toFixed(fixed)}%`;

    const getPercent = (value: number, total: number = 0) => {
      const ratio = total > 0 ? value / total : 0;

      return toPercent(ratio, 2);
    };

    const renderTooltipContent = (o: { payload?: Array<{ value?: number }>; label?: string | number }) => {
      const { payload, label } = o;
      const total = payload?.reduce((result, entry) => result + (entry.value ?? 0), 0);

      return (
        <div className="customized-tooltip-content">
          <p className="total">{`${label} (Total: ${total})`}</p>
          <ul className="list">
            {payload?.map((entry: any) => (
              <li key={`item-${entry.name}`} style={{ color: entry.color }}>
                {`${entry.name}: ${entry.value}(${getPercent(entry.value, total)})`}
              </li>
            ))}
          </ul>
        </div>
      );
    };

    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={toPercent} />
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
          <Tooltip content={renderTooltipContent} defaultIndex={3} active />
          <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
        </AreaChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
    width: 500,
    height: 400,
    data: pageData,
    stackOffset: 'expand',
    margin: {
      top: 10,
      right: 30,
      left: 20,
      bottom: 20,
    },
  },
};

export const CardinalAreaChart = {
  render: (args: Record<string, any>, context: StoryContext) => {
    const cardinal = curveCardinal.tension(0.2);

    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
          <Area type={cardinal} dataKey="uv" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
          <Tooltip />
          <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
        </AreaChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
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

export const AreaChartConnectNulls = {
  render: (args: Record<string, any>, context: StoryContext) => {
    return (
      <div style={{ width: '100%' }}>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart {...args}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
            <Tooltip />
          </AreaChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart {...args}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Area connectNulls type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
            <Tooltip />
            <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
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

export const StackedAreaChartConnectNulls = {
  render: (args: Record<string, any>, context: StoryContext) => {
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
            <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
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

export const SynchronisedAreaChart = {
  render: (args: Record<string, any>, context: StoryContext) => {
    return (
      <div style={{ width: '100%' }}>
        <h4>A demo of synchronized AreaCharts</h4>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart {...args}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
            <Tooltip />
            <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
          </AreaChart>
        </ResponsiveContainer>
        <p>Maybe some other content</p>

        <ResponsiveContainer width="100%" height={200}>
          <AreaChart {...args}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
            <Tooltip />
            <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
    width: 500,
    height: 200,
    data: pageData,
    margin: {
      top: 10,
      right: 30,
      left: 0,
      bottom: 0,
    },
    syncId: 'anyId',
  },
};

export const AreaChartFillByValue = {
  render: (args: Record<string, any>, context: StoryContext) => {
    const gradientOffset = () => {
      const dataMax = Math.max(...args.data.map((i: any) => i.uv));
      const dataMin = Math.min(...args.data.map((i: any) => i.uv));

      if (dataMax <= 0) {
        return 0;
      }
      if (dataMin >= 0) {
        return 1;
      }

      return dataMax / (dataMax - dataMin);
    };

    const off = gradientOffset();

    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <defs>
            <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset={off} stopColor="green" stopOpacity={1} />
              <stop offset={off} stopColor="red" stopOpacity={1} />
            </linearGradient>
          </defs>
          <Area type="monotone" dataKey="uv" stroke="#000" fill="url(#splitColor)" />
          <Tooltip />
          <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
        </AreaChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
    width: 500,
    height: 400,
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
        uv: -1000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: 'Page D',
        uv: 500,
        pv: 3908,
        amt: 2000,
      },
      {
        name: 'Page E',
        uv: -2000,
        pv: 4800,
        amt: 2181,
      },
      {
        name: 'Page F',
        uv: -250,
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
  render: (args: Record<string, any>, context: StoryContext) => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart {...args}>
          <XAxis dataKey="day" />
          <YAxis />
          <Area dataKey="temperature" stroke="#d82428" fill="#8884d8" />
          <Tooltip defaultIndex={4} active />
          <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
        </AreaChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
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
  render: (args: Record<string, any>, context: StoryContext) => {
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
          <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
        </AreaChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
  },
};

export const WithChangingDataKeyAndAnimations = {
  render: (args: Record<string, any>, context: StoryContext) => {
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
        <ManualAnimations isEnabled={context.rechartsInspectorEnabled}>
          <ResponsiveContainer width="100%">
            <ComposedChart {...args}>
              <Legend />
              <XAxis dataKey="name" />
              <YAxis />
              <Area dataKey={dataKey} label={{ fill: 'green' }} dot />
              <Tooltip />
              <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
            </ComposedChart>
          </ResponsiveContainer>
        </ManualAnimations>
      </>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
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
  render: (args: Record<string, any>, context: StoryContext) => {
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
          />
          <Area
            type="monotone"
            dataKey="pv"
            stackId="1"
            stroke="#82ca9d"
            strokeWidth={3}
            fill="rgba(130,202,157,0.47)"
            hide={hiddenItems.includes('pv')}
          />
          <Area
            type="monotone"
            dataKey="amt"
            stackId="1"
            stroke="#ffc658"
            strokeWidth={3}
            fill="rgba(255,198,88,0.47)"
            hide={hiddenItems.includes('amt')}
          />
          <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
          <Legend
            content={({ payload }) => (
              <ul style={{ display: 'flex', flexDirection: 'row', listStyleType: 'none', padding: 0 }}>
                {payload.map((entry, index) => (
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
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
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
