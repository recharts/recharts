import { useState, useCallback } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

/**
 * Reproduction of https://github.com/recharts/recharts/issues/6789
 *
 * Hover over the legend items in quick succession and observe that
 * lines disappear from the chart (and from the DOM).
 *
 * The issue is caused by the ZIndexLayer returning null while waiting
 * for a new portal element to register after a zIndex change.
 */

// #region Sample data
const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];
// #endregion

const LINE_COLORS: Record<string, string> = {
  uv: '#8884d8',
  pv: '#82ca9d',
  amt: '#ffc658',
};

const DEFAULT_OPACITY: Record<string, number> = {
  uv: 1,
  pv: 1,
  amt: 1,
};

export default function Example() {
  const [opacity, setOpacity] = useState(DEFAULT_OPACITY);
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const handleMouseEnter = useCallback((o: { dataKey?: string | number | ((obj: unknown) => unknown) }) => {
    const { dataKey } = o;
    if (typeof dataKey === 'string') {
      setOpacity(prev => ({ ...prev, [dataKey]: 0.5 }));
      setActiveKey(dataKey);
    }
  }, []);

  const handleMouseLeave = useCallback((o: { dataKey?: string | number | ((obj: unknown) => unknown) }) => {
    const { dataKey } = o;
    if (typeof dataKey === 'string') {
      setOpacity(prev => ({ ...prev, [dataKey]: 1 }));
      setActiveKey(null);
    }
  }, []);

  return (
    <LineChart
      style={{ width: '100%', maxWidth: '700px', height: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip />
      <Legend onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
      {Object.entries(LINE_COLORS).map(([key, color]) => (
        <Line
          key={key}
          type="monotone"
          dataKey={key}
          stroke={color}
          strokeOpacity={opacity[key]}
          zIndex={activeKey === key ? 10 : undefined}
        />
      ))}
    </LineChart>
  );
}
