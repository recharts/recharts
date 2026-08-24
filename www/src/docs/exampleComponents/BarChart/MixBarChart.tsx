import { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LegendPayload,
  createHorizontalChart,
} from 'recharts';
import { generateMockData, MockDataType, RechartsDevtools } from '@recharts/devtools';

const data: ReadonlyArray<MockDataType> = generateMockData(6, 823);

const Typed = createHorizontalChart<MockDataType, string, number>()({
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
});

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
    <Typed.BarChart
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
      <CartesianGrid />
      <Typed.XAxis dataKey="label" />
      <Typed.YAxis width="auto" niceTicks="snap125" />
      <Tooltip />
      <Legend onMouseEnter={onLegendMouseEnter} onMouseOut={onLegendMouseOut} onClick={onLegendClick} />
      <Typed.Bar
        dataKey="x"
        stackId="a"
        stroke="none"
        fill={focusedDataKey == null || focusedDataKey === 'x' ? '#8884d8' : '#eee'}
      />
      <Typed.Bar
        dataKey="y"
        stackId="a"
        stroke="none"
        fill={focusedDataKey == null || focusedDataKey === 'y' ? '#82ca9d' : '#eee'}
      />
      <Typed.Bar
        dataKey="z"
        stroke="none"
        fill={focusedDataKey == null || focusedDataKey === 'z' ? '#ffc658' : '#eee'}
      />
      <RechartsDevtools />
    </Typed.BarChart>
  );
};

export default MixBarChart;
