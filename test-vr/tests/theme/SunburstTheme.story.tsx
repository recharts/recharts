import React from 'react';
import { Legend, SunburstChart, SunburstData, Tooltip } from 'recharts';
import { dataColorsAt, FillStrokeVariantsGrid, itemColorProps } from './FillStrokeVariants';

const children: SunburstData[] = [
  {
    name: 'Engineering',
    value: 60,
    children: [
      { name: 'Frontend', value: 25 },
      { name: 'Backend', value: 20 },
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
  { name: 'Marketing', value: 30, children: [{ name: 'Ads', value: 30 }] },
  { name: 'Support', value: 20 },
];

/**
 * Data colors go on the top level branches only, so we can also see whether the children inherit them.
 */
function sunburstDataWithColors(enabled: boolean): SunburstData {
  return {
    name: 'Company',
    value: 150,
    children: children.map((child, index) => ({ ...child, ...dataColorsAt(index, enabled) })),
  };
}

export function SunburstFillStrokeVariants() {
  return (
    <FillStrokeVariantsGrid
      renderChart={({ fromData, fromProps }) => (
        <SunburstChart width={380} height={300} data={sunburstDataWithColors(fromData)} {...itemColorProps(fromProps)}>
          <Legend />
          <Tooltip defaultIndex="[0]" />
        </SunburstChart>
      )}
    />
  );
}
