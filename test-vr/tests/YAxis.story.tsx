import * as React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';
import { pageData } from '../../storybook/stories/data';

export const YAxisWithWidthAutoTwoLineTicks = () => (
  <LineChart width={300} height={300} data={pageData}>
    <YAxis width="auto" tick={{ maxLines: 2 }} tickFormatter={value => `Long Long Y tick: ${value}`} />
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  </LineChart>
);

export const YAxisWithTwoLineTicks = () => (
  <LineChart width={300} height={300} data={pageData}>
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
    <YAxis width="auto" tick={{ fontSize: 9, maxLines: 1 }} tickFormatter={value => `Long Long Y tick: ${value}`} />
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  </LineChart>
);

const longTickData = pageData.map(entry => ({
  ...entry,
  uv: entry.uv * 1000,
}));

export const YAxisWithDefaultWidth = () => {
  return (
    <LineChart width={200} height={100} data={pageData}>
      <XAxis dataKey="name" />
      <YAxis />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>
  );
};

export const YAxisWithWidth80 = () => {
  return (
    <LineChart width={300} height={100} data={pageData}>
      <XAxis dataKey="name" />
      <YAxis width={80} />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>
  );
};

export const YAxisWithWidthAuto = () => {
  return (
    <LineChart width={300} height={100} data={pageData}>
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>
  );
};

export const YAxisWithWidthAutoAndLongTickValues = () => {
  return (
    <LineChart width={300} height={100} data={longTickData}>
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>
  );
};

export const YAxisWithWidthAutoAndTickTrue = () => {
  return (
    <LineChart width={300} height={100} data={pageData}>
      <XAxis dataKey="name" />
      <YAxis width="auto" tick />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>
  );
};

export const YAxisWithWidthAutoAndSmallerTickFontsize = () => {
  return (
    <LineChart width={300} height={100} data={pageData}>
      <XAxis dataKey="name" />
      <YAxis width="auto" tick={{ fill: 'red', fontSize: 9 }} />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>
  );
};

export const YAxisWithWidthAutoAndBiggerTickFontsize = () => {
  return (
    <LineChart width={300} height={100} data={pageData}>
      <XAxis dataKey="name" />
      <YAxis width="auto" tick={{ fill: 'green', fontSize: 29 }} />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>
  );
};

export const YAxisWithWidthAutoAndTickTextAnchorStart = () => {
  return (
    <LineChart width={300} height={100} data={pageData}>
      <XAxis dataKey="name" />
      <YAxis width="auto" tick={{ textAnchor: 'start' }} />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>
  );
};

export const YAxisWithWidthAutoAndAngledTicks = () => {
  return (
    <LineChart width={300} height={100} data={pageData}>
      <XAxis dataKey="name" />
      <YAxis width="auto" tick={{ angle: -45, textAnchor: 'end', verticalAnchor: 'end' }} />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>
  );
};
