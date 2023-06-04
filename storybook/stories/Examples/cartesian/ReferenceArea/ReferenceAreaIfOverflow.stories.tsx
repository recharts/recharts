import React from 'react';
import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';
import { ComposedChart, ReferenceArea, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from '../../../../../src';
import { pageData } from '../../../data';

export default {
  title: 'Examples/cartesian/Reference Area/If Overflow',
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
          <ReferenceArea
            x1="Page B"
            x2="Page E"
            y1={1890}
            y2={-1000}
            stroke="red"
            strokeOpacity={0.3}
            ifOverflow="extendDomain"
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
    expect(await findByText('1900')).toBeInTheDocument();
    expect(await findByText('-950')).toBeInTheDocument();
  },
};
