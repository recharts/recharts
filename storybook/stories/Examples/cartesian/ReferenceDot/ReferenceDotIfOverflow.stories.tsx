import React from 'react';
import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';
import { ComposedChart, ReferenceDot, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from '../../../../../src';
import { pageData } from '../../../data';

export default {
  title: 'Examples/cartesian/Reference Dot/If Overflow',
};

export const IfOverflow = {
  render: () => {
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
