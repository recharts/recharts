import React from 'react';
import { scaleLinear } from 'victory-vendor/d3-scale';
import clsx from 'clsx';
import { Surface } from '../container/Surface';
import { Layer } from '../container/Layer';
import { Sector } from '../shape/Sector';
import { Text } from '../component/Text';
import { polarToCartesian } from '../util/PolarUtils';

export interface SunburstData {
  name: string;
  value?: number;
  fill?: string;
  children?: SunburstData[];
}

interface TextOptions {
  fontFamily?: string;
  fontWeight?: string;
  paintOrder?: string;
  stroke?: string;
  fill?: string;
  fontSize?: string;
}

export interface SunburstChartProps {
  className?: string;
  data?: SunburstData;
  width?: number;
  height?: number;
  padding?: number;
  /* Padding between each hierarchical level. */
  ringPadding?: number;
  /* The radius of the inner circle at the center of the chart. */
  innerRadius?: number;
  /* Outermost edge of the chart. Defaults to the max possible radius for a circle inscribed in the chart container */
  outerRadius?: number;
  /** The abscissa of pole in polar coordinate  */
  cx?: number;
  /** The ordinate of pole in polar coordinate  */
  cy?: number;
  children?: React.ReactNode;
  fill?: string;
  stroke?: string;
  /* an object with svg text options to control the appearance of the chart labels. */
  textOptions?: TextOptions;
}

interface DrawArcOptions {
  radius: number;
  innerR: number;
  initialAngle: number;
  childColor?: string;
}

const defaultTextProps = {
  fontFamily: 'sans-serif',
  fontWeight: 'bold',
  paintOrder: 'stroke fill',
  fontSize: '.75rem',
  stroke: '#FFF',
  fill: 'black',
};

function getMaxDepthOf(node: SunburstData): number {
  if (!node.children || node.children.length === 0) return 1;

  // Calculate depth for each child and find the maximum
  const childDepths = node.children.map(d => getMaxDepthOf(d));
  return 1 + Math.max(...childDepths);
}

export const SunburstChart = ({
  className,
  data,
  children,
  width,
  height,
  padding = 2,
  ringPadding = 2,
  innerRadius = 50,
  fill = '#333',
  stroke = '#FFF',
  textOptions = defaultTextProps,
  outerRadius = Math.min(width, height) / 2,
  cx = width / 2,
  cy = height / 2,
}: SunburstChartProps) => {
  const rScale = scaleLinear([0, data.value], [0, 360]);
  const treeDepth = getMaxDepthOf(data);
  const thickness = (outerRadius - innerRadius) / treeDepth;

  const sectors: React.ReactNode[] = [];

  // recursively add nodes for each data point and its children
  function drawArcs(childNodes: SunburstData[] | undefined, options: DrawArcOptions): any {
    const { radius, innerR, initialAngle, childColor } = options;

    let currentAngle = initialAngle;

    if (!childNodes) return; // base case: no children of this node

    childNodes.forEach(d => {
      const arcLength = rScale(d.value);
      const start = currentAngle;
      // color priority - if there's a color on the individual point use that, otherwise use parent color or default
      const fillColor = d?.fill ?? childColor ?? fill;
      const { x: textX, y: textY } = polarToCartesian(0, 0, innerR + radius / 2, -(start + arcLength - arcLength / 2));
      currentAngle += arcLength;
      sectors.push(
        <g>
          <Sector
            fill={fillColor}
            stroke={stroke}
            strokeWidth={padding}
            startAngle={start}
            endAngle={start + arcLength}
            innerRadius={innerR}
            outerRadius={innerR + radius}
            cx={cx}
            cy={cy}
          />
          <Text {...textOptions} alignmentBaseline="middle" textAnchor="middle" x={textX + cx} y={cy - textY}>
            {d.value}
          </Text>
        </g>,
      );

      return drawArcs(d.children, {
        radius,
        innerR: innerR + radius + ringPadding,
        initialAngle: start,
        childColor: fillColor,
      });
    });
  }

  drawArcs(data.children, { radius: thickness, innerR: innerRadius, initialAngle: 0 });

  const layerClass = clsx('recharts-sunburst', className);

  return (
    <Surface width={width} height={height}>
      {children}
      <Layer className={layerClass}>{sectors}</Layer>
    </Surface>
  );
};
