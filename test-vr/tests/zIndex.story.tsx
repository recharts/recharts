import * as React from 'react';
import { Bar, CartesianGrid, ComposedChart, Line, Tooltip, XAxis, YAxis } from '../../src';
import { PageData } from '../../test/_data';

export const BarAndLineWithoutZIndex = () => {
  return (
    <ComposedChart width={500} height={300} data={PageData} style={{ backgroundColor: '#F8F3FF' }}>
      <Line
        type="natural"
        dataKey="uv"
        stroke="#FFB3AB"
        strokeWidth={3}
        label={{ fill: '#2B2B2B' }}
        isAnimationActive={false}
      />
      <Bar
        dataKey="uv"
        fill="#C8B6FF"
        background
        label={{ fill: '#2B2B2B', position: 'insideBottom' }}
        isAnimationActive={false}
      />
      <Tooltip defaultIndex={1} />
      <CartesianGrid verticalFill={['#ccc', '#aaa']} />
      <YAxis dataKey="uv" fill="#C8B6FF" />
      <XAxis dataKey="name" fill="#FFDFBA" />
    </ComposedChart>
  );
};
