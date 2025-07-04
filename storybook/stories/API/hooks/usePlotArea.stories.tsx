import React from 'react';
import { Args } from '@storybook/react';
import { ComposedChart, Legend, Line, ResponsiveContainer, usePlotArea, XAxis, YAxis } from '../../../../src';
import { pageData } from '../../data';
import { PlotAreaShower } from '../../../storybook-addon-recharts/inspectors/PlotAreaShower';

export default {
  title: 'API/hooks/usePlotArea',
  component: usePlotArea,
  parameters: {
    docs: {
      description: {
        component:
          'This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container.',
      },
    },
  },
};

export const UsePlotArea = {
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return (
      <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <PlotAreaShower />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    width: '100%',
    height: 400,
    margin: { top: 30, right: 170, bottom: 30, left: 120 },
    style: {
      border: '1px solid #ccc',
    },
  },
};
