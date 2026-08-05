import React from 'react';
import {
  Cell,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  PolarScatter,
  PolarScatterChart,
  Tooltip,
} from '../../../../src';
import { RechartsHookInspector } from '../../../storybook-addon-recharts';

const fontFamily = 'ui-sans-serif, system-ui, sans-serif';
const colors = ['#4ee3ff', '#4f7cff', '#7d4dff', '#d946ef', '#ff4d7d', '#ff8f3d', '#f8f32b', '#66f08d', '#c7ff37'];

const data = Array.from({ length: 84 }, (_, index) => ({
  theta: (index * 37) % 360,
  radius: (((index * 29) % 100) + 5) / 100,
  fill: colors[index % colors.length],
}));

const radiusTicks = [0.2, 0.4, 0.6, 0.8, 1];

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

export default {
  component: PolarScatterChart,
};

export const API = {
  name: 'Simple',
  render: () => (
    <div style={{ width: 560, margin: '0 auto', fontFamily }}>
      <div style={{ marginBottom: 12, textAlign: 'center', fontSize: 28, fontWeight: 500 }}>
        Scatter Plot on Polar Axis
      </div>
      <PolarScatterChart width={560} height={560} data={data} cx="50%" cy="50%" innerRadius={0} outerRadius="88%">
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
        <PolarScatter dataKey="radius" size={42} isAnimationActive={false} name="samples">
          {data.map((entry, index) => (
            <Cell key={`cell-${entry.theta}-${entry.radius}-${index}`} fill={entry.fill} />
          ))}
        </PolarScatter>
        <RechartsHookInspector />
      </PolarScatterChart>
    </div>
  ),
};
