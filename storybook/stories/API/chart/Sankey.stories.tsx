import React from 'react';
import { nodeLinkData } from '../../data';
import { Sankey } from '../../../../src';

export default {
  component: Sankey,
};

export const Simple = {
  render: (args: Record<string, any>) => {
    return <Sankey data={args.data} width={500} height={400} />;
  },
  args: {
    data: nodeLinkData,
  },
};

export const Customized = {
  render: (args: Record<string, any>) => {
    return <Sankey data={args.data} width={960} height={500} nodeWidth={10} nodePadding={60} />;
  },
  args: {
    data: nodeLinkData,
  },
};
