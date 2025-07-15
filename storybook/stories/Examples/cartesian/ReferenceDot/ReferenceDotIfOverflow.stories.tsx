import React from 'react';
import { expect, within } from 'storybook/test';
import { Args } from '@storybook/react-vite';
import { ComposedChart, ReferenceDot, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from '../../../../../src';
import { pageData } from '../../../data';
import { RechartsHookInspector } from '../../../../storybook-addon-recharts';
import type { RechartsStoryContext } from '../../../../storybook-addon-recharts/RechartsStoryContext';

export default {
  title: 'Examples/cartesian/Reference Dot/If Overflow',
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
          <ReferenceDot ifOverflow="extendDomain" x="Page E" y={1700} r={100} />
          <RechartsHookInspector
            position={context.rechartsInspectorPosition}
            setPosition={context.rechartsSetInspectorPosition}
          />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const { findByText } = within(canvasElement);
    /**
     * assert that when ifOverflow="extendDomain" 1900 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  },
};
