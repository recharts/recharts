import React from 'react';
import { Layer, Legend, Rectangle, Sankey, SankeyNodeProps, Text, Tooltip } from 'recharts';
import { FillStrokeVariantsGrid, itemColorProps, propColors, withDataColors } from './FillStrokeVariants';

const chartWidth = 380;

const nodes = [{ name: 'Visit' }, { name: 'Click' }, { name: 'Bounce' }, { name: 'Buy' }, { name: 'Leave' }];

const links = [
  { source: 0, target: 1, value: 60 },
  { source: 0, target: 2, value: 40 },
  { source: 1, target: 3, value: 25 },
  { source: 1, target: 4, value: 35 },
];

/**
 * Sankey has no built-in labels, so this node draws its own: the value inside the node and the name outside.
 * It is passed as an element, so Sankey merges the data, props and theme colors and clones them onto it,
 * same as for the default node. The label text has no fill of its own and takes the theme typography.
 */
function LabeledNode(props: Partial<SankeyNodeProps>) {
  const { x, y, width, height, payload, fill, stroke, fillOpacity, strokeOpacity, strokeWidth, strokeDasharray } =
    props;
  if (x == null || y == null || width == null || height == null || payload == null) {
    return null;
  }
  const isLastColumn = x + width > chartWidth / 2;
  return (
    <Layer>
      <Rectangle
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        stroke={stroke}
        fillOpacity={fillOpacity}
        strokeOpacity={strokeOpacity}
        strokeWidth={strokeWidth}
        strokeDasharray={strokeDasharray}
      />
      <Text x={x + width / 2} y={y + height / 2} textAnchor="middle" verticalAnchor="middle">
        {payload.value}
      </Text>
      <Text
        x={isLastColumn ? x - 4 : x + width + 4}
        y={y + height / 2}
        textAnchor={isLastColumn ? 'end' : 'start'}
        verticalAnchor="middle"
      >
        {payload.name}
      </Text>
    </Layer>
  );
}

export function SankeyFillStrokeVariants() {
  return (
    <FillStrokeVariantsGrid
      renderChart={({ fromData, fromProps }) => (
        <Sankey
          width={chartWidth}
          height={260}
          data={{ nodes: withDataColors(nodes, fromData), links: withDataColors(links, fromData) }}
          nodeWidth={32}
          margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
          node={<LabeledNode {...itemColorProps(fromProps)} />}
          link={fromProps ? { stroke: propColors.stroke } : undefined}
        >
          <Legend />
          <Tooltip defaultIndex="node-0" />
        </Sankey>
      )}
    />
  );
}
