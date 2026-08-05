import * as React from 'react';
import { RechartsDevtools } from '@recharts/devtools';
import {
  Cell,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  PolarScatter,
  PolarScatterChart,
  Tooltip,
  type PolarScatterPointItem,
  type PolarScatterPointNode,
  type PolarScatterProps,
  type PolarScatterShapeProps,
} from 'recharts';

const fontFamily = 'ui-sans-serif, system-ui, sans-serif';
const colors = ['#4ee3ff', '#4f7cff', '#7d4dff', '#d946ef', '#ff4d7d', '#ff8f3d', '#f8f32b', '#66f08d', '#c7ff37'];

const data = Array.from({ length: 84 }, (_, index) => ({
  theta: (index * 37) % 360,
  radius: (((index * 29) % 100) + 5) / 100,
  fill: colors[index % colors.length],
}));

const radiusTicks = [0.2, 0.4, 0.6, 0.8, 1];

type SamplePoint = (typeof data)[number];

const documentedPolarScatterProps: Partial<PolarScatterProps<SamplePoint, number>> = {
  legendType: 'circle',
  shape: 'circle',
  size: 42,
  tooltipType: 'none',
};

const examplePointNode: PolarScatterPointNode = {
  angle: data[0].theta,
  radius: data[0].radius,
};

const examplePointItem: PolarScatterPointItem = {
  angle: data[0].theta,
  cx: 280,
  cy: 280,
  height: 0,
  node: examplePointNode,
  payload: data[0],
  radius: data[0].radius,
  size: documentedPolarScatterProps.size ?? 42,
  tooltipPayload: undefined,
  tooltipPosition: { x: 280, y: 112 },
  width: 0,
  x: 280,
  y: 112,
};

const renderActiveShape = ({ size, x, y }: PolarScatterShapeProps) => {
  if (typeof x !== 'number' || typeof y !== 'number') {
    return null;
  }

  const fallbackRadius = Math.sqrt(examplePointItem.size) / 2;
  const ringRadius = Math.max(Math.sqrt(size) / 2, fallbackRadius) + 2;

  return <circle cx={x} cy={y} r={ringRadius} fill="none" stroke="#0f766e" strokeWidth={1.5} />;
};

const RadiusTick = ({
  x,
  y,
  payload,
}: {
  x?: number | string;
  y?: number | string;
  payload?: { value: number | string };
}) => {
  if (typeof x !== 'number' || typeof y !== 'number' || payload == null) {
    return null;
  }

  return (
    <text x={x} y={y} fill="#5f6368" fontFamily={fontFamily} fontSize={12} textAnchor="start" dominantBaseline="middle">
      {payload.value}
    </text>
  );
};

const PolarScatterChartExample = ({ isAnimationActive = true }: { isAnimationActive?: boolean }) => {
  const chartRef = React.useRef<SVGSVGElement | null>(null);

  return (
    <div style={{ width: '100%', maxWidth: '560px', margin: '0 auto', fontFamily }}>
      <div style={{ marginBottom: 12, textAlign: 'center', fontSize: '28px', fontWeight: 500 }}>
        Scatter Plot on Polar Axis
      </div>
      <PolarScatterChart
        ref={chartRef}
        accessibilityLayer
        barCategoryGap="10%"
        barGap={4}
        barSize={16}
        className="polar-scatter-chart-example"
        cursor="crosshair"
        data={data}
        dataKey="radius"
        desc="Scatter plot example with polar angle and radius axes."
        cx="50%"
        cy="50%"
        endAngle={360}
        height={560}
        id="polar-scatter-chart-example"
        innerRadius={0}
        layout="centric"
        margin={{ top: 16, right: 16, bottom: 16, left: 16 }}
        maxBarSize={20}
        outerRadius="88%"
        responsive
        reverseStackOrder={false}
        role="img"
        stackOffset="none"
        startAngle={0}
        style={{ width: '100%', maxHeight: '70vh', aspectRatio: 1 }}
        syncId="polar-scatter-sync"
        syncMethod="value"
        tabIndex={0}
        throttleDelay={16}
        throttledEvents={['mousemove', 'touchmove']}
        title="Scatter Plot on Polar Axis"
        width={560}
      >
        <PolarGrid gridType="circle" stroke="#c7ccd2" />
        <PolarAngleAxis
          dataKey="theta"
          type="number"
          domain={[0, 360]}
          tickCount={9}
          axisLine={false}
          tickLine={false}
          tick={{ fontFamily, fontSize: 12, fill: '#5f6368' }}
          tickFormatter={value => `${value}°`}
        />
        <PolarRadiusAxis
          type="number"
          domain={[0, 1]}
          ticks={radiusTicks}
          angle={22.5}
          axisLine={false}
          tickLine={false}
          tick={RadiusTick}
          tickFormatter={value => String(value.toFixed(1))}
        />
        <Tooltip />
        <PolarScatter
          activeShape={renderActiveShape}
          angleAxisId={0}
          animationBegin={0}
          animationDuration={400}
          animationEasing="linear"
          className="polar-scatter-series"
          data={data}
          dataKey="radius"
          hide={false}
          id="polar-scatter-series"
          isAnimationActive={isAnimationActive}
          label={false}
          legendType={documentedPolarScatterProps.legendType}
          name="Samples"
          radiusAxisId={0}
          shape={documentedPolarScatterProps.shape}
          size={documentedPolarScatterProps.size}
          tooltipType={documentedPolarScatterProps.tooltipType}
          zIndex={600}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${entry.theta}-${entry.radius}-${index}`} fill={entry.fill} />
          ))}
        </PolarScatter>
        <RechartsDevtools />
      </PolarScatterChart>
    </div>
  );
};

export default PolarScatterChartExample;
