import React from 'react';
import { useChartHeight, useChartWidth } from '../src';

/**
 * Renders a line with arrows on left and right.
 * @constructor
 */
function HorizontalLineWithArrows({
  x1,
  x2,
  y,
  label,
  stroke = 'black',
}: {
  x1: number;
  y: number;
  x2: number;
  label: string;
  stroke?: string;
}) {
  const strokeWidth = 2;
  const arrowSize = 7;
  const width = x2 - x1;
  return (
    <>
      <line x1={x1} y1={y} x2={x2} y2={y} stroke={stroke} strokeWidth={strokeWidth} />
      <line x1={x1} y1={y} x2={x1 + arrowSize} y2={y - arrowSize} stroke={stroke} strokeWidth={strokeWidth} />
      <line x1={x1} y1={y} x2={x1 + arrowSize} y2={y + arrowSize} stroke={stroke} strokeWidth={strokeWidth} />
      <line x1={x2} y1={y} x2={x2 - arrowSize} y2={y - arrowSize} stroke={stroke} strokeWidth={strokeWidth} />
      <line x1={x2} y1={y} x2={x2 - arrowSize} y2={y + arrowSize} stroke={stroke} strokeWidth={strokeWidth} />
      {/* 8px margin so that the text is not hugging the line */}
      <text x={width * 0.9} y={y + 8} textAnchor="end" dominantBaseline="hanging" stroke="red">
        {label}
      </text>
    </>
  );
}

function Background({ width, height, label }: { width: number; height: number; label: string }) {
  const patternId = `pattern+${label}`;
  return (
    <svg width={width} height={height} style={{ position: 'absolute', top: 0, left: 0 }}>
      <defs>
        <pattern
          id={patternId}
          x={0}
          y={0}
          width={120}
          height={50}
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(30)"
        >
          <text x={0} y={10} fontSize={24} stroke="#eee" fill="#eee" dominantBaseline="hanging">
            {label.toUpperCase()}
          </text>
        </pattern>
      </defs>
      <rect x={0} y={0} width={width} height={height} fill={`url(#${patternId})`} />
    </svg>
  );
}

function VerticalLineWithArrows({
  x,
  y1,
  y2,
  label,
  stroke = 'black',
}: {
  x: number;
  y1: number;
  y2: number;
  label: string;
  stroke?: string;
}) {
  const strokeWidth = 2;
  const arrowSize = 7;
  const height = y2 - y1;
  return (
    <>
      <line x1={x} y1={y1} x2={x} y2={y2} stroke={stroke} strokeWidth={strokeWidth} />
      <line x1={x} y1={y1} x2={x - arrowSize} y2={y1 + arrowSize} stroke={stroke} strokeWidth={strokeWidth} />
      <line x1={x} y1={y1} x2={x + arrowSize} y2={y1 + arrowSize} stroke={stroke} strokeWidth={strokeWidth} />
      <line x1={x} y1={y2} x2={x - arrowSize} y2={y2 - arrowSize} stroke={stroke} strokeWidth={strokeWidth} />
      <line x1={x} y1={y2} x2={x + arrowSize} y2={y2 - arrowSize} stroke={stroke} strokeWidth={strokeWidth} />
      <text x={x + 8} y={height * 0.8} textAnchor="start" dominantBaseline="middle" stroke="blue">
        {label}
      </text>
    </>
  );
}

export function SvgDimensionShower({ width, height }: { width: number; height: number }) {
  return (
    <svg width={width} height={height} style={{ position: 'absolute', top: 0, left: 0 }}>
      <Background width={width} height={height} label="Chart" />
      <rect
        x={0}
        y={0}
        width={width}
        height={height}
        fill="none"
        stroke="green"
        strokeWidth={5}
        strokeDasharray="3 3"
      />
      <HorizontalLineWithArrows x1={0} y={height * 0.15} x2={width} stroke="red" label={`useChartWidth: ${width}px`} />
      <VerticalLineWithArrows x={width * 0.1} y1={0} y2={height} stroke="blue" label={`useChartHeight: ${height}px`} />
    </svg>
  );
}

export const ChartSizeDimensions = () => {
  const width = useChartWidth();
  const height = useChartHeight();
  return <SvgDimensionShower width={width} height={height} />;
};
