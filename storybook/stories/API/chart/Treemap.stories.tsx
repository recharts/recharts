import React from 'react';
import { sizeData } from '../../data';
import { Treemap } from '../../../../src';

export default {
  component: Treemap,
};

export const Simple = {
  render: (args: Record<string, any>) => {
    return <Treemap data={args.data} dataKey="size" width={500} height={400} />;
  },
  args: {
    data: sizeData,
  },
};
