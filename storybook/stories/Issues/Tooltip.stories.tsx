import React from 'react';
import { pageData } from '../data';
import { Bar, ComposedChart, Line, ResponsiveContainer, Tooltip } from '../../../src';

export default {
  component: Tooltip,
};

// https://github.com/recharts/recharts/issues/2778
export const WithinCSSTransform = {
  render: (args: Record<string, any>) => {
    return (
      //
      <div style={{ transform: `scale(${args.scale}) translate(100px)`, width: '100%', height: '50%' }}>
        <ResponsiveContainer width="100%" height={500}>
          <ComposedChart data={pageData}>
            <Line dataKey="uv" />
            <Bar dataKey="pv" />
            <Tooltip />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  },
  args: {
    scale: 0.5,
  },
  controls: {
    include: ['scale'],
  },
  description: 'Within a CSS scale transform, the tooltip is not shown in the right position.',
};
