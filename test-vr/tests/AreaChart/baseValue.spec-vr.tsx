import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import { Area, AreaChart } from '../../../src';
import { PageData } from '../../../test/_data';

test('AreaChart with root baseValue', async ({ mount }) => {
  const component = await mount(
    <AreaChart data={PageData} width={800} height={500} baseValue={1300}>
      <Area dataKey="pv" />
    </AreaChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('AreaChart with Area.baseValue', async ({ mount }) => {
  const component = await mount(
    <AreaChart data={PageData} width={800} height={500}>
      <Area dataKey="pv" baseValue={1300} />
    </AreaChart>,
  );
  await expect(component).toHaveScreenshot();
});
