import React from 'react';
import { pageData, subjectData } from '../../data';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from '../../../../src';

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

interface CustomTooltipProps {
  active?: boolean;
  payload?: payloadType[];
  label?: number;
}

type payloadType = {
  value: string | number;
  name: string;
};

const CustomSingleValueTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length > 0) {
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
          {`${payload[0].name} : ${payload[0]?.value}`}
        </p>
      </div>
    );
  }
  return null;
};

export const CustomSingleValued = {
  ...SimpleTooltip,
  args: {
    content: <CustomSingleValueTooltip />,
  },
};

const Marks = [
  { marks: 'A', fill: '#FFF' },
  { marks: 'B', fill: '#FFF' },
  { marks: 'fullMark', fill: '#00A40E' },
];

export const MultipleValuedTooltip = {
  render: (tooltipArgs: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={subjectData}>
          <Tooltip {...tooltipArgs} />
          <XAxis dataKey="subject" />
          <YAxis />
          {Marks.map(({ marks, fill }) => (
            <Line key={marks} dataKey={marks} fill={fill} />
          ))}
        </LineChart>
      </ResponsiveContainer>
    );
  },
};

const CustomMultipleValueTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length > 0) {
    return (
      <div
        style={{
          backgroundColor: '#5b63ffe7',
          padding: '10px',
          borderRadius: '10px',
          boxShadow: '1px 2px 10px -2px #7873ffb1',
        }}
      >
        {payload.map((pld: payloadType) => (
          <p
            key={pld.name}
            style={{
              borderStyle: 'solid 1px',
              fontSize: '13px',
              fontWeight: '600',
              fontFamily: 'sans-serif',
              color: '#fff',
            }}
          >
            {`${pld.name} : ${pld.value}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export const CustomMultiValued = {
  ...MultipleValuedTooltip,
  args: {
    content: <CustomMultipleValueTooltip />,
  },
};
