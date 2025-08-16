import React from 'react';
import { Args } from '@storybook/react-vite';
import { ComposedChart, Legend, Line, ResponsiveContainer, XAxis, YAxis } from '../../../../src';
import { ChartSizeDimensions } from '../../../ChartSizeDimensions';
import { pageData } from '../../data';

export default {
  docs: {
    autodocs: false,
  },
  /**
   * Without this piece of configuration, the createPortal makes Storybook throw an error.
   * See https://github.com/storybookjs/storybook/issues/18269#issuecomment-1711293995
   */
  parameters: {
    docs: {
      source: { type: 'code' },
    },
  },
};

export const WithAxesAndLegendAndResponsive = {
  render: (args: Args) => {
    return (
      <ResponsiveContainer {...args}>
        <ComposedChart data={pageData}>
          <ChartSizeDimensions />
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    width: '100%',
    height: 400,
  },
};
