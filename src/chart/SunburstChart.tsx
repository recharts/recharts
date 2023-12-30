import React from 'react';
import { scaleLinear } from 'd3-scale';
import { Surface } from '../container/Surface';
import { Layer } from '../container/Layer';
import { Sector } from '../shape/Sector';

export interface SunburstData {
  name: string;
  value?: number;
  fill?: string;
  children?: SunburstData[];
}

export interface SunburstChartProps {
  data?: SunburstData;
  width?: number;
  height?: number;
  padding?: number;
  ringPadding?: number;
  innerRadius?: number;
  children?: React.ReactNode;
  fill?: string;
}

interface DrawArcOptions {
  r: number;
  innerR: number;
  initialAngle: number;
  childColor?: string;
}

function maxDepth(node: SunburstData): number {
  if (!node.children || node.children.length === 0) return 1;

  // Calculate depth for each child and find the maximum
  const childDepths = node.children.map(d => maxDepth(d));
  return 1 + Math.max(...childDepths);
}

function polarToCartesian(r: number, angleInDegrees: number): number[] {
  const angleInRadians = (angleInDegrees * Math.PI) / 180.0;
  const x = r * Math.cos(angleInRadians);
  const y = r * Math.sin(angleInRadians);
  return [x, y];
}

export const SunburstChart = ({
  data,
  children,
  width,
  height,
  padding = 2,
  ringPadding = 2,
  innerRadius = 50,
  fill = '#333',
}: SunburstChartProps) => {
  // get the max possible radius for a circle inscribed in the chart container
  const outerRadius = Math.min(width, height) / 2;

  const cx = width / 2,
    cy = height / 2;

  const rScale = scaleLinear([0, data.value], [0, 360]);
  const treeDepth = maxDepth(data);
  const thickness = (outerRadius - innerRadius) / treeDepth;

  const sectors: React.ReactNode[] = [];

  // recursively add nodes for each data point and its children
  function drawArcs(childNodes: SunburstData[] | undefined, options: DrawArcOptions): any {
    const { r, innerR, initialAngle, childColor } = options;

    let currentAngle = initialAngle;

    if (!childNodes) return; // base case: no children of this node

    childNodes.forEach(d => {
      const arcLength = rScale(d.value);
      const start = currentAngle;
      // color priority - if there's a color on the individual point use that, otherwise use parent color or default
      const fillColor = d?.fill ?? childColor ?? fill;
      const [textX, textY] = polarToCartesian(innerR + (innerR + r - innerR) / 2, start + arcLength - arcLength / 2);
      currentAngle += arcLength;
      sectors.push(
        <g>
          <Sector
            fill={fillColor}
            startAngle={start}
            endAngle={start + arcLength - padding}
            innerRadius={innerR}
            outerRadius={innerR + r}
            cx={cx}
            cy={cy}
          />
          <text
            fontSize=".875rem"
            alignmentBaseline="middle"
            textAnchor="middle"
            stroke="#FFF"
            strokeWidth={0.5}
            paintOrder="stroke fill"
            fill="#333"
            fontFamily="sans-serif"
            fontWeight="bold"
            x={textX + cx}
            y={cy - textY}
          >
            {d.value}
          </text>
        </g>,
      );

      return drawArcs(d.children, { r, innerR: innerR + r + ringPadding, initialAngle: start, childColor: fillColor });
    });
  }

  drawArcs(data.children, { r: thickness, innerR: innerRadius, initialAngle: 0 });

  return (
    <Surface width={width} height={height}>
      {children}
      <Layer>{sectors}</Layer>
    </Surface>
  );
};
