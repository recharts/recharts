import React from 'react';
import {
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  useChartHeight,
  useChartWidth,
} from '../../../../src';
import { SvgDimensionShower } from '../../../ChartSizeDimensions';
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
  render: (args: Record<string, any>) => {
    const ChartSizeDimensions = () => {
      const width = useChartWidth();
      const height = useChartHeight();
      return <SvgDimensionShower width={width} height={height} />;
    };

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

export const WithResponsiveContainer = {
  render: (args: Record<string, any>) => {
    const ChartSizeDimensions = () => {
      const width = useChartWidth();
      const height = useChartHeight();
      return <SvgDimensionShower width={width} height={height} />;
    };

    return (
      <ResponsiveContainer {...args}>
        <ComposedChart>
          <ChartSizeDimensions />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    width: '100%',
    height: 400,
  },
};

export const WithStaticDimensions = {
  render: (args: Record<string, any>) => {
    const ChartSizeDimensions = () => {
      const width = useChartWidth();
      const height = useChartHeight();
      return <SvgDimensionShower width={width} height={height} />;
    };

    return (
      <ComposedChart {...args}>
        <ChartSizeDimensions />
      </ComposedChart>
    );
  },
  args: {
    width: 500,
    height: 500,
  },
};

export const WhenOutsideOfChart = {
  render: () => {
    return (
      <div>
        <p>
          This is outside of a chart so the hooks both return <code>undefined</code>
        </p>
        <p>
          useChartWidth: <code>{String(useChartWidth())}</code>
        </p>
        <p>
          useChartHeight: <code>{String(useChartHeight())}</code>
        </p>
      </div>
    );
  },
};
