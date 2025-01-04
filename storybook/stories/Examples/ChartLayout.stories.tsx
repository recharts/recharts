import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { ComposedChart, ResponsiveContainer } from '../../../src';
import { useChartHeight, useChartWidth } from '../../../src/context/chartLayoutContext';
import { selectContainerOffset } from '../../../src/state/selectors/containerSelectors';
import { useAppSelector } from '../../../src/state/hooks';
import { ElementOffset } from '../../../src/util/useElementOffset';

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
      <text x={x + 8} y={height * 0.9} textAnchor="start" dominantBaseline="middle" stroke="blue">
        {label}
      </text>
    </>
  );
}

function SvgDimensionShower({ width, height }: { width: number; height: number }) {
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
      <HorizontalLineWithArrows x1={0} y={height * 0.1} x2={width} stroke="red" label={`${width}px`} />
      <VerticalLineWithArrows x={width * 0.1} y1={0} y2={height} stroke="blue" label={`${height}px`} />
    </svg>
  );
}

const ChartSizeDimensions = () => {
  const width = useChartWidth();
  const height = useChartHeight();
  return <SvgDimensionShower width={width} height={height} />;
};

const OffsetDimensions = () => {
  // offset has properties top; left
  // they show distance from the top and left of the container to the top and left of the browser viewport
  const offset = useAppSelector(selectContainerOffset);
  if (offset == null) {
    return null;
  }
  return (
    // make the SVG bigger than the actual offset because we want to show the arrows, and labels outside that region
    <svg
      width={offset.left + 100}
      height={offset.top + 50}
      style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
    >
      <Background width={offset.left} height={offset.top} label="Offset" />
      <HorizontalLineWithArrows x1={0} y={offset.top} x2={offset.left} stroke="red" label={`${offset.left}px`} />
      <VerticalLineWithArrows x={offset.left} y1={0} y2={offset.top} stroke="blue" label={`${offset.top}px`} />
    </svg>
  );
};

function Crosshair({ x, y }: { x: number; y: number }) {
  return (
    <>
      <line x1={0} y1={y} x2="100%" y2={y} stroke="black" strokeWidth={1} />
      <line x1={x} y1={0} x2={x} y2="100%" stroke="black" strokeWidth={1} />;
      {/* shows x, y in a text below and to the right of the center */}
      <text x={x + 10} y={y + 10} textAnchor="start" dominantBaseline="hanging" stroke="black">
        {`(x: ${x}, y: ${y})`}
      </text>
    </>
  );
}

function CrosshairWrapper() {
  const [mousePosition, setMousePosition] = useState<null | { pageX: number; pageY: number }>(null);
  const offset: ElementOffset | undefined = useAppSelector(selectContainerOffset);
  if (offset == null) {
    return null;
  }

  const onMouseMove = (event: React.MouseEvent) => {
    setMousePosition({ pageX: event.pageX, pageY: event.pageY });
  };
  const onMouseLeave = () => {
    setMousePosition(null);
  };
  return (
    <svg width="100%" height="100%" onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
      {/* transparent rect is here so that there is something for the mouse events to react to. empty SVG does not fire any mouse events */}
      <rect x={0} y={0} width={500} height={500} fill="transparent" />
      {mousePosition != null && (
        <Crosshair x={Math.round(mousePosition.pageX - offset.left)} y={Math.round(mousePosition.pageY - offset.top)} />
      )}
    </svg>
  );
}

export default {
  component: ComposedChart,
  docs: {
    autodocs: false,
  },
  /**
   * Without this piece of configuration, the createPortal makes Storybook throw an error.
   * See https://github.com/storybookjs/storybook/issues/18269#issuecomment-1711293995
   */
  parameters: {
    docs: {
      source: { type: 'code' },
    },
  },
};

export const WithResponsiveContainer = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer {...args}>
        <ComposedChart>
          {createPortal(<OffsetDimensions />, document.getElementById('storybook-root'))}
          <ChartSizeDimensions />
          <CrosshairWrapper />
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
        {createPortal(<OffsetDimensions />, document.getElementById('storybook-root'))}
        <ChartSizeDimensions />
        <CrosshairWrapper />
      </ComposedChart>
    );
  },
  args: {
    width: 500,
    height: 500,
  },
};
