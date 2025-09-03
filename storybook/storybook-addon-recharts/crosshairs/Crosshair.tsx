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
  const coordinateText = `${x.toFixed(1)}, ${y.toFixed(1)}`;
  // Approximate text width calculation (roughly 6 pixels per character for 10px monospace)
  const textWidth = coordinateText.length * 6;

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
      {/* Background rectangles for text readability */}
      <rect
        x={x + 5}
        y={y - 25}
        width={textWidth + 6}
        height="16"
        fill="rgba(255, 255, 255, 0.9)"
        stroke={color}
        strokeWidth="1"
        rx="2"
        pointerEvents="none"
      />
      {/* Coordinate text labels */}
      <text x={x + 8} y={y - 12} fill={color} fontSize="10" fontFamily="monospace" pointerEvents="none">
        {coordinateText}
      </text>
    </g>
  );
}
