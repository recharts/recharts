import * as React from 'react';
import { LabelList, SunburstChart, SunburstData, Tooltip } from '../../src';

/**
 * Data without any colors, so that the chart takes all its colors from the theme.
 */
const data: SunburstData = {
  name: 'Company',
  value: 150,
  children: [
    {
      name: 'Engineering',
      value: 60,
      children: [
        { name: 'Frontend', value: 25 },
        { name: 'Backend', value: 20, children: [{ name: 'API', value: 12 }] },
        { name: 'QA', value: 15 },
      ],
    },
    {
      name: 'Sales',
      value: 40,
      children: [
        { name: 'Direct', value: 25 },
        { name: 'Partners', value: 15 },
      ],
    },
    {
      name: 'Marketing',
      value: 30,
      children: [
        { name: 'Content', value: 18 },
        { name: 'Ads', value: 12 },
      ],
    },
    { name: 'Support', value: 20 },
  ],
};

export const SunburstWithoutColors = () => (
  <SunburstChart width={500} height={500} data={data}>
    <Tooltip />
  </SunburstChart>
);

const labelData: SunburstData = {
  name: 'Root',
  value: 100,
  children: [
    {
      name: 'A',
      value: 60,
      children: [
        { name: 'A1', value: 30 },
        { name: 'A2', value: 30 },
      ],
    },
    { name: 'B', value: 40 },
  ],
};

export const SunburstLabelBackgrounds = () => (
  <SunburstChart width={400} height={400} data={labelData} label={{ dataKey: 'name', background: { rx: 4 } }}>
    <Tooltip />
  </SunburstChart>
);

export const SunburstLabelListChildren = () => (
  <SunburstChart width={400} height={400} data={labelData} label={false}>
    <LabelList dataKey="name" background={{ rx: 4 }} fill="#175cd3" style={{ fontWeight: 700 }} />
  </SunburstChart>
);
