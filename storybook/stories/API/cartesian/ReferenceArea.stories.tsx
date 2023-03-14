import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';
import React from 'react';
import { Line, LineChart, ReferenceArea, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from '../../../../src';
import { pageData } from '../../data';

export default {
  component: ReferenceArea,
  tags: ['autodocs'],
};

export const Simple = {
  render: (args: Record<string, any>) => {
    const { data, ...referenceAreaArgs } = args;

    return (
      <ResponsiveContainer width="100%" height={500}>
        <LineChart
          data={args.data}
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
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          <ReferenceArea
            x1="Page B"
            x2="Page E"
            y1={1000}
            y2={1500}
            stroke="red"
            strokeOpacity={0.3}
            {...referenceAreaArgs}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: pageData,
  },
};

export const IfOverflow = {
  ...Simple,
  args: {
    data: pageData,
    y1: 1890,
    y2: -1000,
    ifOverflow: 'extendDomain',
  },
  parameters: { controls: { include: ['ifOverflow'] } },
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
