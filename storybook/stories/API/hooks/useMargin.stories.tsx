import React from 'react';
import { Args } from '@storybook/react-vite';
import { ComposedChart, Legend, Line, ResponsiveContainer, useMargin, XAxis, YAxis } from '../../../../src';
import { pageData } from '../../data';
import { MarginShower } from '../../../storybook-addon-recharts/inspectors/MarginShower';

export default {
  title: 'API/hooks/useMargin',
  component: useMargin,
  parameters: {
    docs: {
      description: {
        component:
          'This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container.',
      },
    },
  },
};

export const UseMargin = {
  name: 'useMargin',
  render: (args: Args) => {
    return (
      <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <MarginShower />
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
