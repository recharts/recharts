import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { LineChart, Line, XAxis, Tooltip } from 'recharts';

const data = [
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 300, pv: 4567, amt: 2400 },
  { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
  { name: 'Page D', uv: 200, pv: 9800, amt: 2400 },
  { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
  { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
];
const data2 = [
  { name: 'Page F', uv: 500, pv: 4800, amt: 2400 },
  { name: 'Page E', uv: 550, pv: 3908, amt: 2400 },
  { name: 'Page D', uv: 800, pv: 9800, amt: 2400 },
  { name: 'Page C', uv: 100, pv: 1398, amt: 2400 },
  { name: 'Page B', uv: 678, pv: 4567, amt: 2400 },
  { name: 'Page A', uv: 230, pv: 2400, amt: 2400 },
];
const margin = { top: 20, right: 20, bottom: 20, left: 20 };
const height = 400;
const width = 400;
export const handleMouseOver = jest.fn();
export const handleSyncMethod = jest.fn();
export const LineChartWrapper = () => {
  return (
    <div>
      <LineChart width={width} height={height} data={data} margin={margin} syncId="test" syncMethod={handleSyncMethod}>
        <Line activeDot={({ cx, cy }) => <circle cx={cx} cy={cy} r={10} className="customized-active-dot" />} type="monotone" dataKey="uv" stroke="#ff7300" />
        <Tooltip data-testid="tooltip-1" onMouseOver={handleMouseOver}>Tooltip label text</Tooltip>
        <XAxis dataKey="name" />
      </LineChart>
      <LineChart width={width} height={height} data={data2} margin={margin} syncId="test" syncMethod={handleSyncMethod}>
        <Line activeDot={({ cx, cy }) => <circle cx={cx} cy={cy} r={10} className="customized-active-dot" />} type="monotone" dataKey="uv" stroke="#ff7300" />
        <Tooltip data-testid="tooltip-2" />
        <XAxis dataKey="name" />
      </LineChart>
    </div>
  );
};
