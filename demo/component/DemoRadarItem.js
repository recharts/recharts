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
        style={{ fill: '#A5D297', fillOpacity: 0.3, stroke: '#8DC77B', strokeWidth: 2 }}
        points={points}
      />
      {
        points.map((v, i) => {
          return <Dot key={i} cx={v[0]} cy={v[1]} r={6} style={{ fill: '#8889DD' }} />;
        })
      }
    </g>
  );
};

export default DemoRadarItem;
