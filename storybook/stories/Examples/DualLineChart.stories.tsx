// Reproducing https://github.com/recharts/recharts/issues/5449

import React from 'react';
import { scaleTime } from 'victory-vendor/d3-scale';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ReferenceDot,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  XAxisProps,
  YAxis,
  useActiveTooltipLabel,
} from '../../../src';

export default {
  component: LineChart,
  docs: {
    autodocs: false,
  },
};

// Data for Series 1
const data1 = [
  { x: '2022-12-22', y: 19.4 },
  { x: '2023-01-02', y: 28.1 },
  { x: '2023-01-10', y: 27.3 },
  { x: '2023-01-16', y: 30.5 },
  { x: '2023-01-23', y: 28 },
  { x: '2023-01-31', y: 29.3 },
  { x: '2023-02-08', y: 33.2 },
  { x: '2023-02-13', y: 37.3 },
  { x: '2023-02-21', y: 38.3 },
  { x: '2023-03-10', y: 40 },
];

// Data for Series 2
const data2 = [
  { x: '2023-01-05', y: 22.0 },
  { x: '2023-01-10', y: 24.9 },
  { x: '2023-01-18', y: 27.8 },
  { x: '2023-01-24', y: 31.9 },
  { x: '2023-02-03', y: 32.2 },
  { x: '2023-02-07', y: 31.6 },
  { x: '2023-02-09', y: 36.6 },
  { x: '2023-02-17', y: 33.8 },
  { x: '2023-02-24', y: 37.3 },
  { x: '2023-03-06', y: 45 },
  { x: '2023-03-13', y: 45.6 },
  { x: '2023-03-16', y: 44.5 },
];

/// I don' want to introduce a new dependency so let's see if this works the same
const moment = (str: string) => new Date(str).getTime();

// Merge the two data series into one array by timestamp.
// Each object may contain y1 (Series 1) and y2 (Series 2) values.
const mergeDataSeries = (series1: { x: string; y: number }[], series2: { x: string; y: number }[]) => {
  const dataMap: Map<number, { x: number; y1?: number; y2?: number }> = new Map();

  series1.forEach(item => {
    const time = moment(item.x).valueOf();
    if (!dataMap.has(time)) {
      dataMap.set(time, { x: time });
    }
    dataMap.get(time)!.y1 = item.y;
  });

  series2.forEach(item => {
    const time = moment(item.x).valueOf();
    if (!dataMap.has(time)) {
      dataMap.set(time, { x: time });
    }
    dataMap.get(time)!.y2 = item.y;
  });

  return Array.from(dataMap.values()).sort((a, b) => a.x - b.x);
};

// Helper to format a date
const monthFormat = (timestamp: number): string => new Date(timestamp).toLocaleString('en-US', { month: 'short' });

// Convert a date string to a timestamp (number)
const convertDateStringToTimeValue = (dateString: string): number => {
  return new Date(dateString).getTime();
};

const getXAxisArgsForTimeBasedGraph = (dateStrings: string[]): Partial<XAxisProps> => {
  if (!dateStrings.length) {
    return {};
  }
  const numericValues = dateStrings.map(convertDateStringToTimeValue);
  const maxValue = Math.max(...numericValues);
  const minValue = Math.min(...numericValues);

  const timeScale = scaleTime().domain([minValue, maxValue]).nice();
  const ticks = timeScale.ticks(5).map(d => d.valueOf());

  return {
    domain: timeScale.domain().map(d => d.valueOf()),
    // @ts-expect-error we do not have great types for scales
    scale: timeScale,
    type: 'number',
    ticks,
    tickFormatter: monthFormat,
  };
};

const mergedGraphData = mergeDataSeries(data1, data2);

// Create a union of all date strings for the X-axis.
const allDatesSet = new Set<string>([
  ...data1.map(d => `${d.x}T00:00:00.000Z`),
  ...data2.map(d => `${d.x}T00:00:00.000Z`),
]);
const allDates = Array.from(allDatesSet);

// Helper to find the nearest datum (the complete object)
// from the merged data for a given series key.
const findNearestDatum = (
  data: { x: number; y1?: number; y2?: number }[],
  targetTime: number,
  key: 'y1' | 'y2',
): { x: number; y1?: number; y2?: number } | null => {
  let nearestDatum = null;
  let minDiff = Infinity;
  data.forEach(datum => {
    if (datum[key] !== undefined) {
      const diff = Math.abs(datum.x - targetTime);
      if (diff < minDiff) {
        minDiff = diff;
        nearestDatum = datum;
      }
    }
  });
  return nearestDatum;
};

function JointActiveDot({ dataKey, fill }: { dataKey: 'y1' | 'y2'; fill: string }) {
  const activeTimestamp = useActiveTooltipLabel();
  const activeDatum =
    activeTimestamp !== null ? findNearestDatum(mergedGraphData, Number(activeTimestamp), dataKey) : null;

  if (activeDatum == null || activeDatum[dataKey] == null) {
    return null;
  }

  return <ReferenceDot x={activeDatum.x} y={activeDatum[dataKey]} r={6} fill={fill} stroke="white" />;
}

export const DualLineChart = {
  render: () => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          width={500}
          height={300}
          data={mergedGraphData}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="2 5" />
          <XAxis
            axisLine={false}
            stroke="#333"
            dataKey="x"
            fontSize={12}
            dy={10}
            tickLine={false}
            {...getXAxisArgsForTimeBasedGraph(allDates)}
          />
          <YAxis />
          <Legend />
          {/* Main line for Series 1 */}
          <Line type="monotone" dataKey="y1" stroke="red" dot name="Series 1" connectNulls activeDot={false} />
          {/* Main line for Series 2 */}
          <Line type="monotone" dataKey="y2" stroke="blue" name="Series 2" connectNulls activeDot={false} dot />
          {/* Draw extra active dot for Series 1 */}
          <JointActiveDot dataKey="y1" fill="red" />
          {/* Draw extra active dot for Series 2 */}
          <JointActiveDot dataKey="y2" fill="blue" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    );
  },
};
