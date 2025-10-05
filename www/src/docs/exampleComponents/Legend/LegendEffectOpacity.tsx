import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LegendPayload } from 'recharts';
import { DataKey } from 'recharts/types/util/types';

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

const LegendEffectOpacity = () => {
  const [hoveringDataKey, setHoveringDataKey] = React.useState<DataKey<any> | undefined>(undefined);

  let pvOpacity = 1;
  let uvOpacity = 1;

  if (hoveringDataKey === 'uv') {
    pvOpacity = 0.5;
  }

  if (hoveringDataKey === 'pv') {
    uvOpacity = 0.5;
  }

  const handleMouseEnter = (payload: LegendPayload) => {
    setHoveringDataKey(payload.dataKey);
  };

  const handleMouseLeave = () => {
    setHoveringDataKey(undefined);
  };

  return (
    <div style={{ width: '100%' }}>
      <LineChart
        style={{ width: '100%', maxWidth: '300px', maxHeight: '70vh', aspectRatio: 1.618 }}
        responsive
        data={data}
        margin={{
          top: 20,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis width="auto" />
        <Tooltip />
        <Legend onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        <Line type="monotone" dataKey="pv" strokeOpacity={pvOpacity} stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" strokeOpacity={uvOpacity} stroke="#82ca9d" />
      </LineChart>
      <p className="notes">Tips: Hover the legend !</p>
    </div>
  );
};

export default LegendEffectOpacity;
