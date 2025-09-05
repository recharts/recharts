import * as React from 'react';
import { Line, LineChart, XAxis, YAxis } from '../../src';
import { pageData } from '../../storybook/stories/data';

export const YAxisWithWidthAutoTwoLineTicks = () => (
  <LineChart width={300} height={300} data={pageData}>
    {/* @ts-expect-error this prop is passed down to Text component but doesn't do anything - Text still renders 3 lines */}
    <YAxis width="auto" tick={{ maxLines: 2 }} tickFormatter={value => `Long Long Y tick: ${value}`} />
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  </LineChart>
);

export const YAxisWithTwoLineTicks = () => (
  <LineChart width={300} height={300} data={pageData}>
    {/* @ts-expect-error this prop is passed down to Text component but doesn't do anything - Text still renders 3 lines */}
    <YAxis tick={{ maxLines: 2 }} tickFormatter={value => `Long Long Y tick: ${value}`} />
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  </LineChart>
);

export const YAxisWithLongTicksAndWidthAuto = () => (
  <LineChart width={300} height={100} data={pageData}>
    <XAxis dataKey="name" />
    <YAxis width="auto" tickFormatter={value => `Long Long Y tick: ${value}`} />
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  </LineChart>
);

export const YAxisWithLongTicksAndTickObjectAndWidthAuto = () => (
  <LineChart width={300} height={300} data={pageData}>
    <XAxis dataKey="name" />
    <YAxis width="auto" tick={{ fontSize: 9 }} tickFormatter={value => `Long Long Y tick: ${value}`} />
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  </LineChart>
);

export const YAxisWithLongTicksAndMaxLines1 = () => (
  <LineChart width={300} height={300} data={pageData}>
    <XAxis dataKey="name" />
    {/* @ts-expect-error this prop is passed down to Text component but doesn't do anything - Text still renders multiple lines */}
    <YAxis width="auto" tick={{ fontSize: 9, maxLines: 1 }} tickFormatter={value => `Long Long Y tick: ${value}`} />
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  </LineChart>
);
