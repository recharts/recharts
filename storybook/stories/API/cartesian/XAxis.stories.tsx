import React from 'react';
import { Args } from '@storybook/react-vite';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from '../../../../src';
import { coordinateWithValueData } from '../../data';
import { XAxisProps } from '../props/XAxisProps';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { RechartsHookInspector } from '../../../storybook-addon-recharts';

export default {
  component: XAxis,
  argTypes: XAxisProps,
};

export const API = {
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height={500}>
        <LineChart width={600} height={300} data={coordinateWithValueData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis {...args} />
          <YAxis />
          <Legend />
          <Line dataKey="y" />
          <Tooltip />
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(XAxisProps),
    dataKey: 'x',
    domain: [100, 500],
    type: 'number',
    allowDataOverflow: true,
    tickMargin: 20,
    angle: 45,
    height: 70,
    label: { value: 'The Axis Label', position: 'insideBottomRight' },
  },
};

/**
 * Custom tick component that displays padding information
 * @param {any} props - The tick component props including x, y, payload, and padding
 * @returns {JSX.Element} The rendered tick component
 */
const CustomXAxisTickWithPadding = (props: any) => {
  const { x, y, payload, padding } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="middle" fill="#666" fontSize="12">
        {payload.value}
      </text>
      {/* Display padding information when available */}
      {padding && typeof padding === 'object' && 'left' in padding && (
        <text x={0} y={0} dy={32} textAnchor="middle" fill="#007acc" fontSize="8">
          L:{padding.left} R:{padding.right}
        </text>
      )}
      {/* Show padding type for string values */}
      {padding && typeof padding === 'string' && (
        <text x={0} y={0} dy={32} textAnchor="middle" fill="#007acc" fontSize="8">
          {padding}
        </text>
      )}
    </g>
  );
};

export const CustomTickWithPadding = {
  render: (args: Args) => {
    const sampleData = [
      { name: 'Jan', value: 400, category: 'A' },
      { name: 'Feb', value: 300, category: 'B' },
      { name: 'Mar', value: 200, category: 'C' },
      { name: 'Apr', value: 278, category: 'D' },
      { name: 'May', value: 189, category: 'E' },
      { name: 'Jun', value: 239, category: 'F' },
    ];

    return (
      <ResponsiveContainer width="100%" height={500}>
        <LineChart data={sampleData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis {...args} dataKey="name" tick={<CustomXAxisTickWithPadding />} height={80} />
          <YAxis />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
          <Tooltip />
          <Legend />
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(XAxisProps),
    dataKey: 'name',
    padding: { left: 30, right: 40 },
    height: 80,
    tickMargin: 10,
  },
};

export const CustomTickFunction = {
  render: (args: Args) => {
    const sampleData = [
      { month: 'Jan', sales: 1200, profit: 400 },
      { month: 'Feb', sales: 1900, profit: 500 },
      { month: 'Mar', sales: 1400, profit: 300 },
      { month: 'Apr', sales: 1700, profit: 450 },
      { month: 'May', sales: 2100, profit: 600 },
      { month: 'Jun', sales: 1800, profit: 520 },
    ];

    // Function-based custom tick that uses padding for positioning
    const customTickFunction = (props: any) => {
      const { x, y, payload, padding } = props;

      // Calculate dynamic offset based on padding
      const xOffset = padding && typeof padding === 'object' && 'left' in padding ? Math.max(0, padding.left * 0.1) : 0;

      const isCompact = padding === 'no-gap';
      const fontSize = isCompact ? '10px' : '12px';
      const fontWeight = isCompact ? 'bold' : 'normal';

      return (
        <text x={x + xOffset} y={y + 15} textAnchor="middle" fill="#333" fontSize={fontSize} fontWeight={fontWeight}>
          {payload.value}
          {padding && typeof padding === 'object' && (
            <tspan x={x + xOffset} dy="12" fontSize="8" fill="#007acc">
              {`(${JSON.stringify(padding)})`}
            </tspan>
          )}
        </text>
      );
    };

    return (
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={sampleData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis {...args} dataKey="month" tick={customTickFunction} height={80} />
          <YAxis />
          <Line type="monotone" dataKey="sales" stroke="#8884d8" name="Sales" />
          <Line type="monotone" dataKey="profit" stroke="#82ca9d" name="Profit" />
          <Tooltip />
          <Legend />
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(XAxisProps),
    dataKey: 'month',
    padding: { left: 20, right: 30 },
    height: 80,
    tickMargin: 10,
  },
};
