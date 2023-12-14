import React from 'react';
import { scaleLinear } from 'd3-scale';
import { Surface } from '../container/Surface';
import { Layer } from '../container/Layer';
import { Sector } from '../shape/Sector';

export interface SunburstData {
  name: string;
  value?: number;
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
}

interface DrawArcOptions {
  r: number;
  innerRadius: number;
  initialAngle: number;
}

interface ArcGroupProps {
  root: SunburstData;
  width: number;
  height: number;
  innerR: number;
  outerR: number;
  padding: number;
  ringPadding: number;
}

function maxDepth(node: SunburstData): number {
  if (!node.children || node.children.length === 0) return 1;

  // Calculate depth for each child and find the maximum
  const childDepths = node.children.map(d => maxDepth(d));
  return 1 + Math.max(...childDepths);
}

function ArcGroup({ root, width, height, innerR, outerR, padding, ringPadding }: ArcGroupProps) {
  const cx = width / 2,
    cy = height / 2;

  const rScale = scaleLinear([0, root.value], [0, 360]);
  const treeDepth = maxDepth(root);
  const thickness = (outerR - innerR) / treeDepth;

  const sectors: React.ReactNode[] = [];

  // recursively add nodes for each data point and its children
  function drawArcs(childNodes: SunburstData[] | undefined, options: DrawArcOptions): any {
    const { r, innerRadius, initialAngle } = options;

    let currentAngle = initialAngle;

    if (!childNodes) return; // base case: no children of this node

    childNodes.forEach(d => {
      const arcLength = rScale(d.value);
      const start = currentAngle;
      currentAngle += arcLength;
      sectors.push(
        <Sector
          startAngle={start}
          endAngle={start + arcLength - padding}
          innerRadius={innerRadius}
          outerRadius={innerRadius + r}
          cx={cx}
          cy={cy}
        />,
      );

      return drawArcs(d.children, { r, innerRadius: innerRadius + r + ringPadding, initialAngle: start });
    });
  }

  drawArcs(root.children, { r: thickness, innerRadius: innerR, initialAngle: 0 });

  return <Layer>{sectors}</Layer>;
}

export const SunburstChart = ({
  data,
  children,
  width,
  height,
  padding = 2,
  ringPadding = 2,
  innerRadius = 50,
}: SunburstChartProps) => {
  // get the max possible radius for a circle inscribed in the chart container
  const outerRadius = Math.min(width, height) / 2;

  return (
    <Surface width={width} height={height}>
      {children}
      <ArcGroup
        padding={padding}
        ringPadding={ringPadding}
        innerR={innerRadius}
        outerR={outerRadius}
        width={width}
        height={height}
        root={data}
      />
    </Surface>
  );
};
