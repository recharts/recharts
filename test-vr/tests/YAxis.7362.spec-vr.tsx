/**
 * @fileOverview https://github.com/recharts/recharts/issues/7362
 */
import * as React from 'react';
import { expect, test } from '@playwright/experimental-ct-react';
import { Issue7362Chart, Datum } from './Issue7362Chart.tsx';

const explicitTicks = [0, 25, 50, 75, 100] as const;

const allNullData: ReadonlyArray<Datum> = [
  { name: 'Page A', value: null },
  { name: 'Page B', value: null },
  { name: 'Page C', value: null },
  { name: 'Page D', value: null },
];

const partlyNumericData: ReadonlyArray<Datum> = [
  { name: 'Page A', value: null },
  { name: 'Page B', value: 25 },
  { name: 'Page C', value: null },
  { name: 'Page D', value: 75 },
];

test('YAxis issue 7362 - explicit ticks with all-null series data', async ({ mount }) => {
  const component = await mount(
    // Current main still renders the requested Y-axis ladder in this fixed-size setup.
    <Issue7362Chart data={allNullData} ticks={explicitTicks} title="all null + explicit ticks" />,
  );
  await expect(component).toHaveScreenshot();
});

test('YAxis issue 7362 - tickCount with all-null series data', async ({ mount }) => {
  const component = await mount(<Issue7362Chart data={allNullData} tickCount={5} title="all null + tickCount" />);
  await expect(component).toHaveScreenshot();
});

test('YAxis issue 7362 - explicit ticks with empty data', async ({ mount }) => {
  const component = await mount(<Issue7362Chart data={[]} ticks={explicitTicks} title="empty data + explicit ticks" />);
  await expect(component).toHaveScreenshot();
});

test('YAxis issue 7362 - explicit ticks with some numeric values', async ({ mount }) => {
  const component = await mount(
    <Issue7362Chart data={partlyNumericData} ticks={explicitTicks} title="some numeric values + explicit ticks" />,
  );
  await expect(component).toHaveScreenshot();
});
