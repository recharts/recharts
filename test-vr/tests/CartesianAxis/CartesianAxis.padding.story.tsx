import * as React from 'react';
import { Area, Bar, BarChart, ComposedChart, XAxis, YAxis } from '../../../src';

const data = [0, 2, 4, 6, 8, 10].map(value => {
  return { x: value, name: `Item ${value}` };
});

export const AreaDefault = () => {
  return (
    <ComposedChart width={600} height={500} data={data}>
      <Area dataKey="x" />
      <YAxis />
      <XAxis dataKey="name" />
    </ComposedChart>
  );
};

export const AreaNoGap = () => {
  return (
    <ComposedChart width={600} height={500} data={data}>
      <Area dataKey="x" />
      <YAxis padding="no-gap" />
      <XAxis dataKey="name" padding="no-gap" />
    </ComposedChart>
  );
};

export const AreaGap = () => {
  return (
    <ComposedChart width={600} height={500} data={data}>
      <Area dataKey="x" />
      <YAxis padding="gap" />
      <XAxis dataKey="name" padding="gap" />
    </ComposedChart>
  );
};

export const AreaCustomPadding = () => {
  return (
    <ComposedChart width={600} height={500} data={data}>
      <Area dataKey="x" />
      <YAxis padding={{ top: 30, bottom: 50 }} />
      <XAxis dataKey="name" padding={{ left: 20, right: 40 }} />
    </ComposedChart>
  );
};

export const BarDefault = () => {
  return (
    <BarChart width={600} height={300} data={data}>
      <Bar dataKey="x" />
      <YAxis />
      <XAxis dataKey="name" />
    </BarChart>
  );
};

export const BarNoGap = () => {
  return (
    <BarChart width={600} height={300} data={data}>
      <Bar dataKey="x" />
      <YAxis padding="no-gap" />
      <XAxis dataKey="name" padding="no-gap" />
    </BarChart>
  );
};

export const BarGap = () => {
  return (
    <BarChart width={600} height={300} data={data}>
      <Bar dataKey="x" />
      <YAxis padding="gap" />
      <XAxis dataKey="name" padding="gap" />
    </BarChart>
  );
};

export const BarCustomPadding = () => {
  return (
    <BarChart width={600} height={300} data={data}>
      <Bar dataKey="x" />
      <YAxis padding={{ top: 30, bottom: 50 }} />
      <XAxis dataKey="name" padding={{ left: 20, right: 40 }} />
    </BarChart>
  );
};
