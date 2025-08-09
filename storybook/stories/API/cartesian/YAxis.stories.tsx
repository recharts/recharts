import React from 'react';
import { Args } from '@storybook/react-vite';
import { YAxis, XAxis, Line, ResponsiveContainer, LineChart, CartesianGrid, Tooltip, Legend } from '../../../../src';
import { coordinateWithValueData } from '../../data';
import { YAxisProps } from '../props/YAxisProps';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { RechartsHookInspector } from '../../../storybook-addon-recharts';

export default {
  component: YAxis,
  argTypes: YAxisProps,
};

const getWidth = (width: string | number) => {
  if (width === 'auto' || typeof width === 'number') {
    return width;
  }

  const num = parseInt(width, 10);
  return Number.isNaN(num) ? 120 : num;
};

export const API = {
  render: (args: Args) => {
    const width = getWidth(args.width);

    return (
      <ResponsiveContainer width="100%" height={500}>
        <LineChart width={600} height={300} data={coordinateWithValueData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis />
          <YAxis {...args} width={width} />
          <Legend />
          <Line dataKey="y" />
          <Tooltip />
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(YAxisProps),
    dataKey: 'pv',
    domain: [0, 300],
    type: 'number',
    allowDataOverflow: true,
    tickMargin: 20,
    angle: 45,
    width: '120',
    label: { value: 'The Axis Label', position: 'center', angle: 90 },
  },
};

/**
 * Custom Y-axis tick component that displays padding information
 * @param {any} props - The tick component props including x, y, payload, and padding
 * @returns {JSX.Element} The rendered tick component
 */
const CustomYAxisTickWithPadding = (props: any) => {
  const { x, y, payload, padding } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={5} textAnchor="end" fill="#666" fontSize="12">
        {payload.value}
      </text>
      {/* Display padding information when available */}
      {padding && typeof padding === 'object' && 'top' in padding && (
        <text x={-5} y={0} dy={5} textAnchor="end" fill="#e74c3c" fontSize="8">
          T:{padding.top} B:{padding.bottom}
        </text>
      )}
      {/* Show visual indicator for padding */}
      {padding && typeof padding === 'object' && 'top' in padding && padding.top > 10 && (
        <circle cx={-30} cy={0} r={3} fill="#e74c3c" opacity={0.7} />
      )}
      {/* Show padding type for string values */}
      {padding && typeof padding === 'string' && (
        <text x={-5} y={0} dy={15} textAnchor="end" fill="#e74c3c" fontSize="8">
          {padding}
        </text>
      )}
    </g>
  );
};

export const YAxisCustomTickWithPadding = {
  render: (args: Args) => {
    const sampleData = [
      { category: 'Product A', value: 400, target: 450 },
      { category: 'Product B', value: 300, target: 350 },
      { category: 'Product C', value: 200, target: 250 },
      { category: 'Product D', value: 278, target: 300 },
      { category: 'Product E', value: 189, target: 220 },
    ];

    return (
      <ResponsiveContainer width="100%" height={500}>
        <LineChart data={sampleData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis {...args} tick={<CustomYAxisTickWithPadding />} width={100} />
          <Line type="monotone" dataKey="value" stroke="#3498db" name="Actual" />
          <Line type="monotone" dataKey="target" stroke="#e74c3c" strokeDasharray="5 5" name="Target" />
          <Tooltip />
          <Legend />
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(YAxisProps),
    padding: { top: 25, bottom: 35 },
    width: 100,
    tickMargin: 10,
  },
};
