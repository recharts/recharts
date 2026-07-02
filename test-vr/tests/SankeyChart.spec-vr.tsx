import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import { Sankey, Tooltip } from '../../src';

const data = {
  nodes: [
    { name: 'Visit' },
    { name: 'Direct-Favourite' },
    { name: 'Page-Click' },
    { name: 'Detail-Favourite' },
    { name: 'Lost' },
  ],
  links: [
    { source: 0, target: 1, value: 3728.3 },
    { source: 0, target: 2, value: 354170 },
    { source: 2, target: 3, value: 62429 },
    { source: 2, target: 4, value: 291741 },
  ],
};

const overlappingData = {
  nodes: [
    { name: 'Consumption bought' },
    { name: 'Total consumption' },
    { name: 'Total production' },
    { name: 'Consumed production' },
    { name: 'Passive surplus' },
    { name: 'Unused production' },
  ],
  links: [
    { source: 0, target: 1, value: 797.44 },
    { source: 2, target: 3, value: 39.73 },
    { source: 3, target: 1, value: 39.73 },
    { source: 2, target: 4, value: 1.95 },
    { source: 4, target: 5, value: 1.95 },
  ],
};

test('Sankey align justify', async ({ mount }) => {
  const component = await mount(
    <Sankey width={1000} height={500} data={data} align="justify">
      <Tooltip />
    </Sankey>,
  );
  await expect(component).toHaveScreenshot();
});

test('Sankey align left', async ({ mount }) => {
  const component = await mount(
    <Sankey width={1000} height={500} data={data} align="left">
      <Tooltip />
    </Sankey>,
  );
  await expect(component).toHaveScreenshot();
});

test('Sankey verticalAlign justify', async ({ mount }) => {
  const component = await mount(
    <Sankey width={1000} height={500} data={data} verticalAlign="justify">
      <Tooltip />
    </Sankey>,
  );
  await expect(component).toHaveScreenshot();
});

test('Sankey verticalAlign top', async ({ mount }) => {
  const component = await mount(
    <Sankey width={1000} height={500} data={data} verticalAlign="top">
      <Tooltip />
    </Sankey>,
  );
  await expect(component).toHaveScreenshot();
});

test('Sankey should keep intermediate nodes out of skipped-depth links', async ({ mount }) => {
  const component = await mount(
    <Sankey width={760} height={420} data={overlappingData}>
      <Tooltip />
    </Sankey>,
  );
  await expect(component).toHaveScreenshot();
});
