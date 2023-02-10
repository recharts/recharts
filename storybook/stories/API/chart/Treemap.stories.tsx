import React from 'react';
import { sizeData } from '../../data';
import { ResponsiveContainer, Treemap } from '../../../../src';

export default {
  component: Treemap,
};

export const Simple = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <Treemap data={args.data} dataKey="size" />
      </ResponsiveContainer>
    );
  },
  args: {
    data: sizeData,
  },
};
