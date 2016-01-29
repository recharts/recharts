import React from 'react';
import { Dot, Polygon } from 'recharts';

const RADIAN = Math.PI / 180;

const DemoRadarItem = ({ radar }) => {
  const { radius, cx, cy, innerRadius, outerRadius, startAngle, clockWise } = radar;
  const sign = clockWise ? -1 : 1;
  const angleInterval = 360 / radius.length;

  const points = radar.radius.map((v, i) => (
    [
      cx + Math.cos(-(startAngle + i * sign * angleInterval) * RADIAN) * v,
      cy + Math.sin(-(startAngle + i * sign * angleInterval) * RADIAN) * v,
    ]
  ));

  return (
    <g>
      <Polygon
        style={{ fill: '#9597E4', fillOpacity: 0.6, stroke: '#8889DD', strokeWidth: 3 }}
        points={points}
      />
      {
        points.map((v, i) => {
          return <Dot key={i} cx={v[0]} cy={v[1]} r={6} style={{ fill: '#F8C12D' }} />;
        })
      }
    </g>
  );
};

export default DemoRadarItem;
