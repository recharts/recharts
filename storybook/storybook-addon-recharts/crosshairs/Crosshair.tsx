import React from 'react';

export function Crosshair({ x, y, className }: { x: number; y: number; className?: string }) {
  return (
    <g className={className}>
      <line x1={x} y1={y - 10} x2={x} y2={y + 10} stroke="#ff7300" strokeWidth={2} fill="none" />
      <line x1={x - 10} y1={y} x2={x + 10} y2={y} stroke="#ff7300" strokeWidth={2} fill="none" />
    </g>
  );
}
