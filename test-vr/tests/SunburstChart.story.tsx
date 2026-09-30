import * as React from 'react';
import { SunburstChart, SunburstData, Tooltip } from '../../src';

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
