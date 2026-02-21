import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LegendPayload } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
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
    uv: 2780,
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

// #endregion
const MixBarChart = () => {
  const [focusedDataKey, setFocusedDataKey] = useState<string | null>(null);
  const [locked, setLocked] = useState<boolean>(false);

  const onLegendMouseEnter = (payload: LegendPayload) => {
    if (!locked) {
      setFocusedDataKey(String(payload.dataKey));
    }
  };

  const onLegendMouseOut = () => {
    if (!locked) {
      setFocusedDataKey(null);
    }
  };

  const onLegendClick = (payload: LegendPayload) => {
    if (focusedDataKey === String(payload.dataKey)) {
      if (locked) {
        setFocusedDataKey(null);
        setLocked(false);
      } else {
        setLocked(true);
      }
    } else {
      setFocusedDataKey(String(payload.dataKey));
      setLocked(true);
    }
  };

  return (
    <BarChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 20,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis width="auto" niceTicks />
      <Tooltip />
      <Legend onMouseEnter={onLegendMouseEnter} onMouseOut={onLegendMouseOut} onClick={onLegendClick} />
      <Bar dataKey="pv" stackId="a" fill={focusedDataKey == null || focusedDataKey === 'pv' ? '#8884d8' : '#eee'} />
      <Bar dataKey="amt" stackId="a" fill={focusedDataKey == null || focusedDataKey === 'amt' ? '#82ca9d' : '#eee'} />
      <Bar dataKey="uv" fill={focusedDataKey == null || focusedDataKey === 'uv' ? '#ffc658' : '#eee'} />
      <RechartsDevtools />
    </BarChart>
  );
};

export default MixBarChart;
