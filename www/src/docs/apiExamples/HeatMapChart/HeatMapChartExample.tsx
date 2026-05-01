import { useRef } from 'react';
import { CartesianGrid, Cell, HeatMap, HeatMapChart, Tooltip, XAxis, YAxis } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
  { day: 'Mon', slot: 'Morning', value: 12, fill: '#6366f1' },
  { day: 'Mon', slot: 'Afternoon', value: 18, fill: '#8b5cf6' },
  { day: 'Mon', slot: 'Evening', value: 7, fill: '#ec4899' },
  { day: 'Tue', slot: 'Morning', value: 10, fill: '#3b82f6' },
  { day: 'Tue', slot: 'Afternoon', value: 22, fill: '#06b6d4' },
  { day: 'Tue', slot: 'Evening', value: 13, fill: '#14b8a6' },
  { day: 'Wed', slot: 'Morning', value: 9, fill: '#84cc16' },
  { day: 'Wed', slot: 'Afternoon', value: 16, fill: '#f59e0b' },
  { day: 'Wed', slot: 'Evening', value: 11, fill: '#f97316' },
];
// #endregion

const HeatMapChartExample = () => {
  const chartRef = useRef<SVGSVGElement | null>(null);

  return (
    <HeatMapChart
      accessibilityLayer
      barCategoryGap="12%"
      barGap={6}
      barSize={32}
      baseValue={0}
      className="heatmap-chart-api-example"
      compact={false}
      cursor="crosshair"
      data={data}
      dataKey="value"
      desc="Request volume heat map by day and time slot."
      height={420}
      id="heatmap-chart-example"
      layout="horizontal"
      margin={{
        top: 20,
        right: 0,
        bottom: 5,
        left: 0,
      }}
      maxBarSize={48}
      ref={chartRef}
      responsive
      reverseStackOrder={false}
      role="application"
      stackOffset="none"
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.5 }}
      syncId="heatmap-sync"
      syncMethod="index"
      tabIndex={0}
      throttleDelay="raf"
      throttledEvents={['mousemove', 'touchmove']}
      title="Heat map chart example"
      width={700}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="category" dataKey="slot" />
      <YAxis type="category" dataKey="day" width={72} />
      <Tooltip cursor={false} />
      <HeatMap dataKey="value" name="Requests" cellGap={6} radius={8} isAnimationActive={false}>
        {data.map(entry => (
          <Cell key={`${entry.day}-${entry.slot}`} fill={entry.fill} />
        ))}
      </HeatMap>
      <RechartsDevtools />
    </HeatMapChart>
  );
};

export default HeatMapChartExample;
