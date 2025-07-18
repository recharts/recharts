import React from 'react';
import { Args } from '@storybook/react-vite';
import { ComposedChart, ReferenceArea, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from '../../../../../src';
import { pageData } from '../../../data';
import { RechartsHookInspector } from '../../../../storybook-addon-recharts';
import type { RechartsStoryContext } from '../../../../storybook-addon-recharts/RechartsStoryContext';

export default {
  title: 'Examples/cartesian/Reference Area/If Overflow',
};

export const IfOverflow = {
  render: (args: Args, context: RechartsStoryContext) => {
    return (
      <ResponsiveContainer width="100%" height={500}>
        <ComposedChart
          data={pageData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <ReferenceArea
            x1="Page B"
            x2="Page E"
            y1={1890}
            y2={-1000}
            stroke="red"
            strokeOpacity={0.3}
            ifOverflow="extendDomain"
          />
          <RechartsHookInspector
            position={context.rechartsInspectorPosition}
            setPosition={context.rechartsSetInspectorPosition}
          />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
};
