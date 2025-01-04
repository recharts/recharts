import React from 'react';
import { ComposedChart, ResponsiveContainer } from '../../../src';
import { useChartHeight, useChartWidth } from '../../../src/context/chartLayoutContext';

export default {
  component: ComposedChart,
  docs: {
    autodocs: false,
  },
};

/**
 * Renders a line with arrows on left and right.
 * @constructor
 */
function HorizontalLineWithArrows({
  x1,
  x2,
  y,
  stroke = 'black',
}: {
  x1: number;
  y: number;
  x2: number;
  stroke?: string;
}) {
  const strokeWidth = 2;
  const arrowSize = 7;
  return (
    <>
      <line x1={x1} y1={y} x2={x2} y2={y} stroke={stroke} strokeWidth={strokeWidth} />
      <line x1={x1} y1={y} x2={x1 + arrowSize} y2={y - arrowSize} stroke={stroke} strokeWidth={strokeWidth} />
      <line x1={x1} y1={y} x2={x1 + arrowSize} y2={y + arrowSize} stroke={stroke} strokeWidth={strokeWidth} />
      <line x1={x2} y1={y} x2={x2 - arrowSize} y2={y - arrowSize} stroke={stroke} strokeWidth={strokeWidth} />
      <line x1={x2} y1={y} x2={x2 - arrowSize} y2={y + arrowSize} stroke={stroke} strokeWidth={strokeWidth} />
    </>
  );
}

function VerticalLineWithArrows({
  x,
  y1,
  y2,
  stroke = 'black',
}: {
  x: number;
  y1: number;
  y2: number;
  stroke?: string;
}) {
  const strokeWidth = 2;
  const arrowSize = 7;
  return (
    <>
      <line x1={x} y1={y1} x2={x} y2={y2} stroke={stroke} strokeWidth={strokeWidth} />
      <line x1={x} y1={y1} x2={x - arrowSize} y2={y1 + arrowSize} stroke={stroke} strokeWidth={strokeWidth} />
      <line x1={x} y1={y1} x2={x + arrowSize} y2={y1 + arrowSize} stroke={stroke} strokeWidth={strokeWidth} />
      <line x1={x} y1={y2} x2={x - arrowSize} y2={y2 - arrowSize} stroke={stroke} strokeWidth={strokeWidth} />
      <line x1={x} y1={y2} x2={x + arrowSize} y2={y2 - arrowSize} stroke={stroke} strokeWidth={strokeWidth} />
    </>
  );
}

function SvgDimensionShower({ width, height }: { width: number; height: number }) {
  return (
    <svg width={width} height={height} style={{ position: 'absolute', top: 0, left: 0 }}>
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
      <HorizontalLineWithArrows x1={0} y={height * 0.1} x2={width} stroke="red" />
      <VerticalLineWithArrows x={width * 0.1} y1={0} y2={height} stroke="blue" />
      <text x={width * 0.9} y={height * 0.1 + 8} textAnchor="end" dominantBaseline="hanging" stroke="red">
        {width}px
      </text>
      <text x={width * 0.1 + 8} y={height * 0.9} textAnchor="start" dominantBaseline="middle" stroke="blue">
        {height}px
      </text>
    </svg>
  );
}

const ChartSizeDimensions = () => {
  const width = useChartWidth();
  const height = useChartHeight();
  return <SvgDimensionShower width={width} height={height} />;
};

export const WithResponsiveContainer = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer {...args}>
        <ComposedChart>
          <ChartSizeDimensions />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    width: '100%',
    height: 400,
  },
};

export const WithStaticDimensions = {
  render: (args: Record<string, any>) => {
    return (
      <ComposedChart {...args}>
        <ChartSizeDimensions />
      </ComposedChart>
    );
  },
  args: {
    width: 500,
    height: 500,
  },
};
