import React from 'react';
import { Args } from '@storybook/react-vite';
import { ScatterChart, CartesianGrid, XAxis, YAxis, Tooltip, Scatter, ErrorBar } from '../../../src';
import { getStoryArgsFromArgsTypesObject } from '../API/props/utils';
import { XAxisProps } from '../API/props/XAxisProps';
import { CartesianChartProps } from '../API/props/CartesianChartProps';
import { RechartsHookInspector } from '../../storybook-addon-recharts';
import type { RechartsStoryContext } from '../../storybook-addon-recharts/RechartsStoryContext';

const bespokeArgTypes = {
  layout: {
    ...CartesianChartProps.layout,
    table: { ...CartesianChartProps.layout.table, category: 'ScatterChart props' },
  },
  allowDataOverflow: {
    ...XAxisProps.allowDataOverflow,
    table: { ...XAxisProps.allowDataOverflow.table, category: 'XAxis + YAxis props' },
  },
};

export default {
  component: ScatterChart,
  argTypes: bespokeArgTypes,
  docs: {
    autodocs: false,
  },
};

export const WithErrorBarsAndExtendedDomain = {
  render: (args: Args, context: RechartsStoryContext) => {
    const data = [
      { x: 100, y: 200, errorY: 30, errorX: 30 },
      { x: 120, y: 100, errorY: [500, 30], errorX: [200, 30] },
      { x: 170, y: 300, errorY: [10, 20], errorX: 20 },
      { x: 140, y: 250, errorY: 30, errorX: 20 },
      { x: 150, y: 400, errorY: [20, 300], errorX: 30 },
      { x: 110, y: 280, errorY: 40, errorX: 40 },
    ];

    return (
      <ScatterChart
        width={400}
        height={400}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
        layout={args.layout}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="stature" unit="cm" allowDataOverflow={args.allowDataOverflow} />
        <YAxis type="number" dataKey="y" name="weight" unit="kg" allowDataOverflow={args.allowDataOverflow} />
        <Scatter name="A school" data={data} fill="blue">
          {/* This ErrorBar does render, but it does not extend the domain of XAxis unfortunately */}
          <ErrorBar dataKey="errorX" width={2} strokeWidth={3} stroke="green" direction="x" />
          <ErrorBar dataKey="errorY" width={4} strokeWidth={2} stroke="red" direction="y" />
        </Scatter>
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <RechartsHookInspector
          position={context.rechartsInspectorPosition}
          setPosition={context.rechartsSetInspectorPosition}
        />
      </ScatterChart>
    );
  },
  args: getStoryArgsFromArgsTypesObject(bespokeArgTypes),
  parameters: {
    controls: { include: ['layout', 'allowDataOverflow'] },
  },
};
