import React from 'react';

export function Crosshair({
  x,
  y,
  className,
  color = 'red',
}: {
  x: number;
  y: number;
  className?: string;
  color?: string;
}) {
  return (
    <g className={className}>
      <line
        x1={x}
        y1={0}
        x2={x}
        y2="100%"
        stroke={color}
        strokeWidth={2}
        fill="none"
        pointerEvents="none"
        strokeDasharray={4}
      />
      <line
        x1={0}
        y1={y}
        x2="100%"
        y2={y}
        stroke={color}
        strokeWidth={2}
        fill="none"
        pointerEvents="none"
        strokeDasharray={4}
      />
    </g>
  );
}
