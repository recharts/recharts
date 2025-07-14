import React from 'react';
import { Args } from '@storybook/react-webpack5';
import {
  ComposedChart,
  Line,
  ReferenceLine,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from '../../../../../src';
import { pageData } from '../../../data';
import { RechartsHookInspector, RechartsStoryContext } from '../../../../storybook-addon-recharts';

export default {
  title: 'Examples/cartesian/ReferenceLine/ReferenceLineSegment',
};

export const Segment = {
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
          <Line dataKey="uv" />
          <ReferenceLine
            segment={[
              { x: 'Page A', y: 0 },
              { x: 'Page E', y: 1500 },
            ]}
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
