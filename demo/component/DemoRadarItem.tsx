import React from 'react';
import { Dot, Polygon } from 'recharts';

const RADIAN = Math.PI / 180;

const DemoRadarItem = ({ radar }: any) => {
  const { radius, cx, cy, innerRadius, outerRadius, startAngle, clockWise } = radar;
  const sign = clockWise ? -1 : 1;
  const angleInterval = 360 / radius.length;

  const points = radar.radius.map((v: number, i: number) => ({
    x: cx + Math.cos(-(startAngle + i * sign * angleInterval) * RADIAN) * v,
    y: cy + Math.sin(-(startAngle + i * sign * angleInterval) * RADIAN) * v,
  }));

  return (
    <g>
      <Polygon
        fill="#A5D297"
        fillOpacity={0.3}
        stroke="#8DC77B"
        strokeWidth={2}
        points={points}
      />
      {
        points.map((v: any, i: number) => {
          return <Dot key={i} cx={v.x} cy={v.y} r={6} fill="#8889DD" />;
        })
      }
    </g>
  );
};

export default DemoRadarItem;
