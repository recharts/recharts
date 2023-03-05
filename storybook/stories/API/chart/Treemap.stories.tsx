import React from 'react';
import { sizeData } from '../../data';
import { ResponsiveContainer, Treemap } from '../../../../src';

export default {
  tags: ['autodocs'],
  component: Treemap,
};

export const Simple = {
  render: (args: Record<string, any>) => {
    const { data } = args;
    return (
      <ResponsiveContainer width="100%" height={400}>
        <Treemap data={data} dataKey="size" />
      </ResponsiveContainer>
    );
  },
  args: {
    data: sizeData,
  },
};
