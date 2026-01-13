import React from 'react';
import { Args } from '@storybook/react-vite';
import { sizeData, treemapData } from '../../data';
import { ResponsiveContainer, Tooltip, Treemap, TreemapNode } from '../../../../src';
import { RechartsHookInspector } from '../../../storybook-addon-recharts';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { TreemapArgs } from '../arg-types/TreemapArgs';

export default {
  argTypes: TreemapArgs,
  component: Treemap,
};

export const API = {
  name: 'Simple',
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <Treemap {...args}>
          <RechartsHookInspector />
        </Treemap>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TreemapArgs),
    data: sizeData,
    dataKey: 'size',
    nameKey: 'name',
    isAnimationActive: false,
  },
};

export const WithTooltip = {
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <Treemap {...args}>
          <Tooltip />
          <RechartsHookInspector />
        </Treemap>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TreemapArgs),
    data: sizeData,
    dataKey: 'size',
    nameKey: 'name',
    isAnimationActive: false,
  },
};

const colors = ['#8889DD', '#9597E4', '#8DC77B', '#A5D297', '#E2CF45', '#F8C12D'];

export const WithCustomContent = {
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <Treemap
          {...args}
          dataKey="size"
          stroke="#fff"
          fill="#8884d8"
          content={(props: TreemapNode) => {
            const { root, depth, x, y, width, height, index, name } = props;

            return (
              <g>
                <rect
                  x={x}
                  y={y}
                  width={width}
                  height={height}
                  style={{
                    fill: depth < 2 ? colors[Math.floor((index / (root.children?.length ?? 1)) * 6)] : '#ffffff00',
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
          }}
        >
          <Tooltip />
          <RechartsHookInspector />
        </Treemap>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TreemapArgs),
    data: treemapData,
    dataKey: 'size',
    isAnimationActive: false,
  },
};
