import {
  CartesianGrid,
  Cell,
  HeatMap,
  HeatMapChart,
  Rectangle,
  Tooltip,
  XAxis,
  YAxis,
  type HeatMapShapeProps,
} from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
  { day: 'Mon', hour: '09:00', value: 14, fill: '#6366f1' },
  { day: 'Mon', hour: '12:00', value: 19, fill: '#8b5cf6' },
  { day: 'Mon', hour: '15:00', value: 23, fill: '#06b6d4' },
  { day: 'Tue', hour: '09:00', value: 9, fill: '#3b82f6' },
  { day: 'Tue', hour: '12:00', value: 17, fill: '#14b8a6' },
  { day: 'Tue', hour: '15:00', value: 21, fill: '#22c55e' },
  { day: 'Wed', hour: '09:00', value: 11, fill: '#f59e0b' },
  { day: 'Wed', hour: '12:00', value: 16, fill: '#f97316' },
  { day: 'Wed', hour: '15:00', value: 20, fill: '#ef4444' },
];
// #endregion

const CustomHeatMapShape = (props: HeatMapShapeProps) => (
  <Rectangle {...props} radius={props.radius ?? 0} stroke="#0f172a" strokeOpacity={0.12} />
);

const ActiveHeatMapShape = (props: HeatMapShapeProps) => (
  <Rectangle {...props} radius={props.radius ?? 0} stroke="#0f172a" strokeWidth={2} />
);

const HeatMapExample = ({ isAnimationActive = true }: { isAnimationActive?: boolean }) => (
  <HeatMapChart
    style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.5 }}
    responsive
    margin={{
      top: 20,
      right: 0,
      bottom: 5,
      left: 0,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis xAxisId={0} type="category" dataKey="hour" />
    <YAxis yAxisId={0} type="category" dataKey="day" width={72} />
    <Tooltip cursor={false} />
    <HeatMap
      activeShape={ActiveHeatMapShape}
      animationBegin={120}
      animationDuration={500}
      animationEasing="ease-out"
      cellGap={{ x: 6, y: 8 }}
      cellSize={{ width: 60, height: 38 }}
      className="heatmap-api-example"
      data={data}
      dataKey="value"
      hide={false}
      id="requests-heatmap"
      isAnimationActive={isAnimationActive}
      label={{ position: 'center', fill: '#fff', fontSize: 12 }}
      legendType="rect"
      name="Requests"
      radius={8}
      shape={CustomHeatMapShape}
      tooltipType="none"
      unit=" req"
      xAxisId={0}
      yAxisId={0}
      zIndex={2}
    >
      {data.map(entry => (
        <Cell key={`${entry.day}-${entry.hour}`} fill={entry.fill} />
      ))}
    </HeatMap>
    <RechartsDevtools />
  </HeatMapChart>
);

export default HeatMapExample;
