import React from 'react';
import { Funnel, FunnelChart, LabelList, ResponsiveContainer } from '../../../../src';

export default {
  tags: ['autodocs'],
  component: FunnelChart,
};

export const Simple = {
  render: (args: Record<string, any>) => {
    const { data } = args;
    return (
      // <div style={{ height: 200, width: 200 }}>
      <ResponsiveContainer width="100%" height={200}>
        <FunnelChart layout="horizontal">
          <Funnel
            width={400}
            data={data}
            dataKey="value"
            stroke="#424242"
            isAnimationActive
            labelLine
            lastShapeType="rectangle"
            orientation="horizontal"
          >
            <LabelList dataKey="name" fill="#000" position="right" stroke="none" />
          </Funnel>
        </FunnelChart>
      </ResponsiveContainer>
      // </div>
    );
  },
  args: {
    data: [
      {
        fill: '#EEEEEE',
        name: 'A',
        value: 1009,
      },
      {
        fill: '#E0E0E0',
        name: 'B',
        value: 903,
      },
      {
        fill: '#BDBDBD',
        name: 'C',
        value: 756,
      },
      {
        fill: '#9E9E9E',
        name: 'D',
        value: 622,
      },
      {
        fill: '#757575',
        name: 'E',
        value: 602,
      },
      {
        fill: '#424242',
        name: 'F',
        value: 580,
      },
    ],
  },
};
