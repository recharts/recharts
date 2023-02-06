import React from 'react';
import { nodeLinkData } from '../../data';
import { ResponsiveContainer, Sankey } from '../../../../src';

export default {
  component: Sankey,
};

export const Simple = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <Sankey data={args.data} />
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
        <Sankey data={args.data} width={960} height={500} nodeWidth={10} nodePadding={60} />
      </ResponsiveContainer>
    );
  },
  args: {
    data: nodeLinkData,
  },
};
