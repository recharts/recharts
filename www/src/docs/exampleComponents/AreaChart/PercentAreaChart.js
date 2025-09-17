import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    month: '2015.01',
    a: 4000,
    b: 2400,
    c: 2400,
  },
  {
    month: '2015.02',
    a: 3000,
    b: 1398,
    c: 2210,
  },
  {
    month: '2015.03',
    a: 2000,
    b: 9800,
    c: 2290,
  },
  {
    month: '2015.04',
    a: 2780,
    b: 3908,
    c: 2000,
  },
  {
    month: '2015.05',
    a: 1890,
    b: 4800,
    c: 2181,
  },
  {
    month: '2015.06',
    a: 2390,
    b: 3800,
    c: 2500,
  },
  {
    month: '2015.07',
    a: 3490,
    b: 4300,
    c: 2100,
  },
];

const toPercent = (decimal, fixed = 0) => `${(decimal * 100).toFixed(fixed)}%`;

const getPercent = (value, total) => {
  const ratio = total > 0 ? value / total : 0;

  return toPercent(ratio, 2);
};

const renderTooltipContent = (o) => {
  const { payload, label } = o;
  const total = payload.reduce((result, entry) => result + entry.value, 0);

  return (
    <div className="customized-tooltip-content">
      <p className="total">{`${label} (Total: ${total})`}</p>
      <ul className="list">
        {payload.map((entry, index) => (
          <li key={`item-${index}`} style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value}(${getPercent(entry.value, total)})`}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Example = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={data}
        stackOffset="expand"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis tickFormatter={toPercent} />
        <Tooltip content={renderTooltipContent} />
        <Area type="monotone" dataKey="a" stackId="1" stroke="#8884d8" fill="#8884d8" />
        <Area type="monotone" dataKey="b" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        <Area type="monotone" dataKey="c" stackId="1" stroke="#ffc658" fill="#ffc658" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Example;
