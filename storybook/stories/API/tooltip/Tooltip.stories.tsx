import React from 'react';
import { pageData } from '../../data';
import { Line, LineChart, ResponsiveContainer, Tooltip } from '../../../../src';

export default {
  component: LineChart,
};

export const SimpleTooltip = {
  render: (tooltipArgs: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={pageData}>
          <Line dataKey="uv" />
          <Tooltip {...tooltipArgs} />
        </LineChart>
      </ResponsiveContainer>
    );
  },
};

const CustomTooltip: React.FC = ({ active, payload, label }: any) => {
  if (active && payload) {
    return (
      <div
        style={{
          backgroundColor: '#5b63ffe7',
          padding: '5px',
          borderRadius: '10px',
          boxShadow: '1px 2px 10px -2px #7873ff',
        }}
      >
        <p
          style={{
            borderStyle: 'solid 1px',
            fontSize: '13px',
            fontWeight: '600',
            fontFamily: 'sans-serif',
            color: '#fff',
          }}
        >
          {`${label} : ${payload[0]?.value}`}
        </p>
      </div>
    );
  }
  return null;
};

export const CustomSingleValued = {
  ...SimpleTooltip,
  args: {
    content: <CustomTooltip />,
  },
};
