import React from 'react';
import { pageData } from '../../data';
import { Line, LineChart, ResponsiveContainer, Tooltip } from '../../../../src';

export default {
  component: LineChart,
};

export const SimpleTooltip = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <LineChart {...args}>
          <Line dataKey="uv" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: pageData,
    dataKey: 'uv',
  },
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload) {
    return (
      <div
        // className="custom-tooltip"
        style={{
          backgroundColor: '#5b63ffe7',
          padding: '5px',
          borderRadius: '10px',
          boxShadow: '1px 2px 10px -2px #7873ff',
        }}
      >
        <p
          // className="label"
          style={{
            borderStyle: 'solid 1px',
            fontSize: '13px',
            fontWeight: '600',
            fontFamily: 'sans-serif',
            color: '#fff',
          }}
        >
          {`${label} : ${payload[0].value}`}
        </p>
      </div>
    );
  }
  return null;
};

export const CustomSingleValued = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <LineChart {...args}>
          <Line dataKey="uv" />
          <Tooltip content={<CustomTooltip />} />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: pageData,
    dataKey: 'uv',
  },
};
