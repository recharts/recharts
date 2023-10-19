// eslint-disable-next-line max-classes-per-file
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { curveCardinal } from 'd3-shape';
import { pageData } from '../data';
import { AreaChart, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Area } from '../../../src';

export default {
  component: AreaChart,
  docs: {
    autodocs: false,
  },
};

export const Simple = {
  render: () => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={pageData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    );
  },
};

export const StackedAreaChart = {
  render: () => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={pageData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
    );
  },
};

export const TinyAreaChart = {
  render: () => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={200}
          height={60}
          data={pageData}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    );
  },
};

export const PercentAreaChart = {
  render: () => {
    const toPercent = (decimal, fixed = 0) => `${(decimal * 100).toFixed(fixed)}%`;

    const getPercent = (value, total) => {
      const ratio = total > 0 ? value / total : 0;

      return toPercent(ratio, 2);
    };

    const renderTooltipContent = o => {
      const { payload, label } = o;
      const total = payload.reduce((result, entry) => result + entry.value, 0);

      return (
        <div className="customized-tooltip-content">
          <p className="total">{`${label} (Total: ${total})`}</p>
          <ul className="list">
            {payload.map(entry => (
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
        <AreaChart
          width={500}
          height={400}
          data={pageData}
          stackOffset="expand"
          margin={{
            top: 10,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis tickFormatter={toPercent} />
          <Tooltip content={renderTooltipContent} />
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
    );
  },
};

export const CardinalAreaChart = {
  render: () => {
    const cardinal = curveCardinal.tension(0.2);

    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={pageData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
          <Area type={cardinal} dataKey="uv" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
        </AreaChart>
      </ResponsiveContainer>
    );
  },
};

export const AreaChartConnectNulls = {
  render: () => {
    const data = [
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
    ];

    return (
      <div style={{ width: '100%' }}>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            width={500}
            height={200}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            width={500}
            height={200}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area connectNulls type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  },
};

export const SynchronisedAreaChart = {
  render: () => {
    return (
      <div style={{ width: '100%' }}>
        <h4>A demo of synchronized AreaCharts</h4>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            width={500}
            height={200}
            data={pageData}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
        <p>Maybe some other content</p>

        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            width={500}
            height={200}
            data={pageData}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  },
};

export const AreaChartFillByValue = {
  render: () => {
    const data = [
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
    ];

    const gradientOffset = () => {
      const dataMax = Math.max(...data.map(i => i.uv));
      const dataMin = Math.min(...data.map(i => i.uv));

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
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <defs>
            <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset={off} stopColor="green" stopOpacity={1} />
              <stop offset={off} stopColor="red" stopOpacity={1} />
            </linearGradient>
          </defs>
          <Area type="monotone" dataKey="uv" stroke="#000" fill="url(#splitColor)" />
        </AreaChart>
      </ResponsiveContainer>
    );
  },
};

export const StackAreaWithDiscontinuousValues = {
  render: () => {
    const data = [
      {
        x: 0,
        b: 1,
        c: 1,
      },
      {
        x: 1,
        a: 1,
        b: 1,
        c: 1,
      },
      {
        x: 2,
        a: 1,
        b: 1,
        c: 1,
      },
      {
        x: 3,
        b: 1,
        c: 1,
      },
      {
        x: 4,
        b: 1,
        c: 1,
      },
    ];

    const colors = {
      a: 'red',
      b: 'blue',
      c: 'green',
    } as const;

    return (
      <AreaChart data={data} height={200} width={300}>
        {(['a', 'b', 'c'] as const).map(k => (
          <Area key={k} dataKey={k} stroke={colors[k]} fill={colors[k]} stackId={1} connectNulls />
        ))}
      </AreaChart>
    );
  },
};

export const StackAreaWithDiscontinuousValuesTwo = {
  render: () => {
    const data = [
      { month: '2015.01', a: 4000, b: 2400, c: 2400 },
      { month: '2015.02', a: 3000, b: 1398, c: 2210 },
      { month: '2015.03', a: 2000, b: 9800, c: 2290 },
      { month: '2015.04', a: 2780, b: 3908, c: 2000 },
      { month: '2015.05', a: 1890, b: 4800, c: 2181 },
      { month: '2015.06', a: 1000 },
      { month: '2015.07', a: 2390, b: 3800, c: 2500 },
      { month: '2015.08', a: 3490, b: 4300, c: 2100 },
      { month: '2015.09' },
    ];

    const toPercent = (decimal: number, fixed = 0) => {
      return `${(decimal * 100).toFixed(fixed)}%`;
    };

    return (
      <AreaChart width={600} height={400} data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <XAxis dataKey="month" />
        <YAxis tickFormatter={toPercent} />
        <Area type="monotone" dataKey="a" stroke="#8884d8" stackId={1} fill="#8884d8" connectNulls />
        <Area type="monotone" dataKey="b" stroke="#82ca9d" stackId={1} fill="#82ca9d" connectNulls />
        <Area type="monotone" dataKey="c" stroke="#ffc658" stackId={1} fill="#ffc658" connectNulls />
      </AreaChart>
    );
  },
};
