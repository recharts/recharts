import React from 'react';
import { Treemap } from '../../src';
import { exampleTreemapData } from '../../test/_data';

const CustomContent = (props: any) => {
  const { depth, x, y, width, height, index, name } = props;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill: depth === 1 ? '#8884d8' : '#82ca9d',
          stroke: '#fff',
          strokeWidth: 2 / (depth + 1e-10),
          strokeOpacity: 1 / (depth + 1e-10),
        }}
      />
      {depth === 1 ? (
        <text x={x + width / 2} y={y + height / 2 + 7} textAnchor="middle" fill="#fff" fontSize={14}>
          {name}
        </text>
      ) : null}
      {depth === 1 ? (
        <text x={x + 4} y={y + 18} fill="#fff" fontSize={16} fillOpacity={0.9}>
          {index + 1}
        </text>
      ) : null}
    </g>
  );
};

export const SimpleTreemap = () => {
  return (
    <Treemap
      width={500}
      height={250}
      data={exampleTreemapData}
      isAnimationActive={false}
      nameKey="name"
      dataKey="value"
    />
  );
};

export const NestedTreemap = () => {
  return (
    <Treemap
      width={500}
      height={250}
      data={exampleTreemapData}
      isAnimationActive={false}
      nameKey="name"
      dataKey="value"
      type="nest"
    />
  );
};

export const CustomAspectRatio = () => {
  return (
    <Treemap
      width={500}
      height={500}
      data={exampleTreemapData}
      isAnimationActive={false}
      nameKey="name"
      dataKey="value"
      aspectRatio={1}
    />
  );
};

export const CustomTreemapContent = () => {
  return (
    <Treemap
      width={500}
      height={250}
      data={exampleTreemapData}
      isAnimationActive={false}
      nameKey="name"
      dataKey="value"
      content={<CustomContent />}
    />
  );
};
