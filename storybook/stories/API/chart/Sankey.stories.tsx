import React from 'react';
import { nodeLinkData } from '../../data';
import { ResponsiveContainer, Sankey } from '../../../../src';
import { data, margin } from '../props/ChartProps';
import { dataKey } from '../props/CartesianComponentShared';

export default {
  argTypes: {
    iterations: { description: 'TODO' },
    link: { description: 'TODO' },
    linkCurvature: { description: 'TODO' },
    nameKey: { description: 'TODO' },
    node: { description: 'TODO' },
    nodePadding: { description: 'TODO' },
    nodeWidth: { description: 'TODO' },
    dataKey,
    margin,
    data,
  },
  component: Sankey,
};

export const Simple = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <Sankey data={nodeLinkData} {...args} />
      </ResponsiveContainer>
    );
  },
  args: {
    data: nodeLinkData,
  },
};

export const Customized = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <Sankey data={nodeLinkData} {...args} />
      </ResponsiveContainer>
    );
  },
  args: {
    data: nodeLinkData,
    nodeWidth: 10,
    nodePadding: 60,
    height: 500,
    width: 960,
  },
};
