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
