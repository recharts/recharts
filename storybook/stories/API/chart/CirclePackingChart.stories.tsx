import React, { useState } from 'react';
import { Args } from '@storybook/react-vite';
import { CirclePackingChart, CirclePackingNode } from '../../../../src';
import { CirclePackingChartArgs } from '../arg-types/CirclePackingChartArgs';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';

const WIDTH = 500;
const HEIGHT = 500;

const observablePalette = ['#4269d0', '#efb118', '#ff725c', '#6cc5b0', '#3ca951', '#ff8ab7', '#a463f2', '#97bbf5'];

const groupToColor: Record<string, string> = {
  analytics: '#4269d0',
  animate: '#efb118',
  data: '#ff725c',
  display: '#6cc5b0',
  flex: '#3ca951',
  physics: '#ff8ab7',
  query: '#a463f2',
  scale: '#97bbf5',
};

const observableBubbleData = [
  { name: 'AgglomerativeCluster', group: 'analytics', size: 3938 },
  { name: 'BetweennessCentrality', group: 'analytics', size: 3534 },
  { name: 'MergeEdge', group: 'analytics', size: 743 },
  { name: 'ColorInterpolator', group: 'animate', size: 2047 },
  { name: 'Easing', group: 'animate', size: 17010 },
  { name: 'Parallel', group: 'animate', size: 5176 },
  { name: 'DataField', group: 'data', size: 1759 },
  { name: 'DataList', group: 'data', size: 19788 },
  { name: 'TreeBuilder', group: 'data', size: 9930 },
  { name: 'DirtySprite', group: 'display', size: 8833 },
  { name: 'LineSprite', group: 'display', size: 1732 },
  { name: 'RectSprite', group: 'display', size: 3623 },
  { name: 'FlareVis', group: 'flex', size: 4116 },
  { name: 'OperatorList', group: 'flex', size: 5248 },
  { name: 'Visualization', group: 'flex', size: 16540 },
  { name: 'DragForce', group: 'physics', size: 1082 },
  { name: 'Simulation', group: 'physics', size: 9983 },
  { name: 'Spring', group: 'physics', size: 2213 },
  { name: 'And', group: 'query', size: 1027 },
  { name: 'If', group: 'query', size: 2732 },
  { name: 'Range', group: 'query', size: 1594 },
  { name: 'IScaleMap', group: 'scale', size: 2105 },
  { name: 'LinearScale', group: 'scale', size: 1316 },
  { name: 'Scale', group: 'scale', size: 4268 },
].map(item => ({ ...item, fill: groupToColor[item.group] }));

const unsortedBubbleData = [
  { name: 'Spring', group: 'physics', size: 2213 },
  { name: 'Visualization', group: 'flex', size: 16540 },
  { name: 'DataField', group: 'data', size: 1759 },
  { name: 'Scale', group: 'scale', size: 4268 },
  { name: 'AgglomerativeCluster', group: 'analytics', size: 3938 },
  { name: 'And', group: 'query', size: 1027 },
  { name: 'DirtySprite', group: 'display', size: 8833 },
  { name: 'Parallel', group: 'animate', size: 5176 },
  { name: 'DataList', group: 'data', size: 19788 },
  { name: 'IScaleMap', group: 'scale', size: 2105 },
  { name: 'Range', group: 'query', size: 1594 },
  { name: 'TreeBuilder', group: 'data', size: 9930 },
  { name: 'Easing', group: 'animate', size: 17010 },
  { name: 'RectSprite', group: 'display', size: 3623 },
  { name: 'Simulation', group: 'physics', size: 9983 },
  { name: 'FlareVis', group: 'flex', size: 4116 },
  { name: 'ColorInterpolator', group: 'animate', size: 2047 },
  { name: 'OperatorList', group: 'flex', size: 5248 },
  { name: 'If', group: 'query', size: 2732 },
  { name: 'LinearScale', group: 'scale', size: 1316 },
  { name: 'LineSprite', group: 'display', size: 1732 },
  { name: 'DragForce', group: 'physics', size: 1082 },
  { name: 'MergeEdge', group: 'analytics', size: 743 },
  { name: 'BetweennessCentrality', group: 'analytics', size: 3534 },
].map(item => ({ ...item, fill: groupToColor[item.group] }));

const metroAreaBubbleData = [
  { name: 'Tokyo', region: 'APAC', populationMillions: 37.4, radius: 42, fill: '#9ec5fe' },
  { name: 'Delhi', region: 'APAC', populationMillions: 33.8, radius: 40, fill: '#bfdbfe' },
  { name: 'Shanghai', region: 'APAC', populationMillions: 29.2, radius: 36, fill: '#dbeafe' },
  { name: 'Sao Paulo', region: 'LATAM', populationMillions: 22.6, radius: 32, fill: '#a7f3d0' },
  { name: 'Mexico City', region: 'LATAM', populationMillions: 22.3, radius: 31, fill: '#bbf7d0' },
  { name: 'Cairo', region: 'MEA', populationMillions: 22.1, radius: 31, fill: '#fde68a' },
  { name: 'Mumbai', region: 'APAC', populationMillions: 21.7, radius: 30, fill: '#bae6fd' },
  { name: 'Beijing', region: 'APAC', populationMillions: 21.3, radius: 29, fill: '#e0f2fe' },
  { name: 'New York', region: 'North America', populationMillions: 19.7, radius: 27, fill: '#ddd6fe' },
  { name: 'London', region: 'Europe', populationMillions: 14.8, radius: 22, fill: '#fecdd3' },
];

const portThroughputData = [
  {
    name: 'Asia-Pacific',
    region: 'APAC',
    children: [
      { name: 'Shanghai Port', teuMillions: 49.2, radius: 30, value: 49.2, fill: '#9ec5fe' },
      { name: 'Singapore Port', teuMillions: 39.0, radius: 27, value: 39.0, fill: '#bfdbfe' },
      { name: 'Ningbo-Zhoushan', teuMillions: 35.3, radius: 24, value: 35.3, fill: '#dbeafe' },
      { name: 'Shenzhen Port', teuMillions: 30.0, radius: 22, value: 30.0, fill: '#a7f3d0' },
    ],
  },
  {
    name: 'Europe',
    region: 'Europe',
    children: [
      { name: 'Rotterdam', teuMillions: 14.5, radius: 18, value: 14.5, fill: '#bbf7d0' },
      { name: 'Antwerp-Bruges', teuMillions: 13.5, radius: 17, value: 13.5, fill: '#fde68a' },
      { name: 'Hamburg', teuMillions: 8.3, radius: 14, value: 8.3, fill: '#bae6fd' },
    ],
  },
  {
    name: 'North America',
    region: 'North America',
    children: [
      { name: 'Los Angeles', teuMillions: 8.6, radius: 14, value: 8.6, fill: '#e0f2fe' },
      { name: 'Long Beach', teuMillions: 8.1, radius: 13, value: 8.1, fill: '#ddd6fe' },
      { name: 'New York/New Jersey', teuMillions: 7.8, radius: 13, value: 7.8, fill: '#fecdd3' },
    ],
  },
];

const paddingPalette = ['#022c22', '#065f46', '#0f766e', '#14b8a6', '#5eead4'];

export default {
  argTypes: {
    ...CirclePackingChartArgs,
    colorPanel: {
      ...CirclePackingChartArgs.colorPanel,
      control: false,
    },
    data: {
      ...CirclePackingChartArgs.data,
      control: false,
    },
    content: {
      ...CirclePackingChartArgs.content,
      control: false,
    },
    dataKey: {
      ...CirclePackingChartArgs.dataKey,
      control: false,
    },
    nameKey: {
      ...CirclePackingChartArgs.nameKey,
      control: false,
    },
    radiusKey: {
      ...CirclePackingChartArgs.radiusKey,
      control: false,
    },
  },
  component: CirclePackingChart,
};

const TooltipCirclePackingChart = (props: Record<string, unknown>) => {
  const [activeNode, setActiveNode] = useState<CirclePackingNode | null>(null);

  return (
    <div style={{ position: 'relative', width: WIDTH, height: HEIGHT }}>
      <CirclePackingChart
        {...props}
        width={WIDTH}
        height={HEIGHT}
        onMouseEnter={node => {
          setActiveNode(node);
        }}
        onMouseLeave={() => {
          setActiveNode(null);
        }}
      />
      {activeNode ? (
        <div
          style={{
            position: 'absolute',
            left: activeNode.x + 8,
            top: activeNode.y + 8,
            background: 'rgba(17, 24, 39, 0.92)',
            color: '#f9fafb',
            border: '1px solid rgba(148, 163, 184, 0.45)',
            borderRadius: 8,
            padding: '8px 10px',
            pointerEvents: 'none',
            fontFamily: 'ui-sans-serif, system-ui, -apple-system, Segoe UI, Helvetica, Arial, sans-serif',
            fontSize: 12,
            lineHeight: 1.35,
            maxWidth: 220,
          }}
        >
          <div style={{ fontWeight: 700 }}>{activeNode.name || 'Unnamed'}</div>
          <div>value: {activeNode.value}</div>
          {typeof activeNode.payload.group === 'string' ? <div>group: {activeNode.payload.group}</div> : null}
          {typeof activeNode.payload.region === 'string' ? <div>region: {activeNode.payload.region}</div> : null}
          {typeof activeNode.payload.populationMillions === 'number' ? (
            <div>population: {activeNode.payload.populationMillions.toFixed(1)}M</div>
          ) : null}
          {typeof activeNode.payload.teuMillions === 'number' ? (
            <div>throughput: {activeNode.payload.teuMillions}M TEU</div>
          ) : null}
          <div>depth: {activeNode.depth}</div>
          <div>radius: {activeNode.r.toFixed(2)}</div>
        </div>
      ) : null}
    </div>
  );
};

const renderChart = (props: Record<string, unknown>) => {
  return <TooltipCirclePackingChart {...props} />;
};

export const API = {
  name: 'Sorted',
  render: (args: Args) =>
    renderChart({
      ...args,
      data: observableBubbleData,
      layout: 'siblings',
      dataKey: 'size',
      padding: 3,
      showRoot: false,
      colorPanel: observablePalette,
    }),
  args: {
    ...getStoryArgsFromArgsTypesObject(CirclePackingChartArgs),
    width: WIDTH,
    height: HEIGHT,
    data: observableBubbleData,
    layout: 'siblings',
    dataKey: 'size',
    padding: 3,
    showRoot: false,
    colorPanel: observablePalette,
  },
};

export const UnsortedHierarchy = {
  render: () =>
    renderChart({
      data: unsortedBubbleData,
      layout: 'siblings',
      dataKey: 'size',
      sort: false,
      showRoot: false,
      padding: 3,
      colorPanel: observablePalette,
    }),
};

export const WithPadding = {
  render: () =>
    renderChart({
      data: observableBubbleData,
      layout: 'siblings',
      dataKey: 'size',
      padding: 12,
      showRoot: false,
      colorPanel: paddingPalette,
    }),
};

export const CustomRadiusKey = {
  render: () =>
    renderChart({
      data: portThroughputData,
      dataKey: 'value',
      radiusKey: 'radius',
      padding: 8,
      colorPanel: [
        '#9ec5fe',
        '#bfdbfe',
        '#dbeafe',
        '#a7f3d0',
        '#bbf7d0',
        '#fde68a',
        '#bae6fd',
        '#e0f2fe',
        '#ddd6fe',
        '#fecdd3',
      ],
      stroke: 'none',
    }),
};

export const PackedSiblings = {
  render: () =>
    renderChart({
      data: metroAreaBubbleData,
      layout: 'siblings',
      dataKey: 'radius',
      radiusKey: 'radius',
      showRoot: false,
      stroke: 'none',
    }),
};

export const PackedSiblingsWithEnclosingCircle = {
  render: () => (
    <div className="enclosing-circle-example">
      <style>{`
          .enclosing-circle-example .recharts-circle-packing-depth-0 .recharts-circle-packing-node {
            stroke: #64748b;
            stroke-width: 1px;
            stroke-dasharray: 4 4;
          }
        `}</style>
      {renderChart({
        data: metroAreaBubbleData,
        layout: 'siblings',
        dataKey: 'radius',
        radiusKey: 'radius',
        showRoot: false,
        includeEnclosingCircle: true,
        stroke: 'none',
      })}
    </div>
  ),
};
