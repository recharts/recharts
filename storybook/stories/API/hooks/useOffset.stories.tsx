import React from 'react';
import { Args } from '@storybook/react';
import { ComposedChart, Legend, Line, ResponsiveContainer, useOffset, XAxis, YAxis } from '../../../../src';
import { pageData } from '../../data';
import { OffsetShower } from '../../../storybook-addon-recharts/inspectors/OffsetShower';

export default {
  title: 'API/hooks/useOffset',
  component: useOffset,
  parameters: {
    docs: {
      description: {
        component:
          'This story demonstrates the use of the `useOffset` hook to manage chart offsets in a responsive container.',
      },
    },
  },
  argTypes: {
    width: { control: 'text' },
    height: { control: 'number' },
    margin: { control: 'object' },
  },
};

export const UseOffset = {
  render: (args: Args) => {
    return (
      <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <OffsetShower />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    width: '100%',
    height: 400,
    margin: { top: 30, right: 170, bottom: 30, left: 120 },
  },
};
