import React, { useState } from 'react';
import { scaleLinear } from 'victory-vendor/d3-scale';
import clsx from 'clsx';
import { Surface } from '../container/Surface';
import { Layer } from '../container/Layer';
import { Sector } from '../shape/Sector';
import { Text } from '../component/Text';
import { polarToCartesian } from '../util/PolarUtils';
import { Tooltip } from '../component/Tooltip';

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
  /** Angle in degrees from which the chart should start.  */
  startAngle?: number;
  /** Angle, in degrees, at which the chart should end. Can be used to generate partial sunbursts.  */
  endAngle?: number;
  children?: React.ReactNode;
  fill?: string;
  stroke?: string;
  /* an object with svg text options to control the appearance of the chart labels. */
  textOptions?: TextOptions;

  onMouseEnter?: (node: SunburstData, e: any) => void;

  onMouseLeave?: (node: SunburstData, e: any) => void;

  onClick?: (node: SunburstData) => void;
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
  startAngle = 0,
  endAngle = 360,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: SunburstChartProps) => {
  const [isTooltipActive, setIsTooltipActive] = useState(false);
  const [activeNode, setActiveNode] = useState<SunburstData | null>(null);

  const rScale = scaleLinear([0, data.value], [0, endAngle]);
  const treeDepth = getMaxDepthOf(data);
  const thickness = (outerRadius - innerRadius) / treeDepth;

  const sectors: React.ReactNode[] = [];

  // event handlers
  function handleMouseEnter(node: SunburstData, e: any) {
    if (onMouseEnter) onMouseEnter(node, e);
    setActiveNode(activeNode);
    setIsTooltipActive(true);
  }

  function handleMouseLeave(node: SunburstData, e: any) {
    if (onMouseLeave) onMouseLeave(node, e);
    setActiveNode(null);
    setIsTooltipActive(false);
  }

  function handleClick(node: SunburstData) {
    if (onClick) onClick(node);
  }

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
            onClick={() => handleClick(d)}
            onMouseEnter={e => handleMouseEnter(d, e)}
            onMouseLeave={e => handleMouseLeave(d, e)}
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

  drawArcs(data.children, { radius: thickness, innerR: innerRadius, initialAngle: startAngle });

  const layerClass = clsx('recharts-sunburst', className);

  return (
    <Surface width={width} height={height}>
      {children}
      <Layer className={layerClass}>{sectors}</Layer>
      <Tooltip active={isTooltipActive} content={<div>Tooltip</div>} />
    </Surface>
  );
};
