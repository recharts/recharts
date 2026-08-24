import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import { Area, AreaChart } from '../../../src';
import { PageData } from '../../../test/_data';

// Setting baseValue on the chart root or on the individual Area resolves the same
// way here — asserted, not just left to coincide.
const BASE_VALUE_ON_ROOT_OR_AREA_EQUIVALENT = 'AreaChart-baseValue-root-or-Area-equivalent.png';
test('AreaChart with root baseValue', async ({ mount }) => {
  const component = await mount(
    <AreaChart data={PageData} width={800} height={500} baseValue={1300}>
      <Area dataKey="pv" />
    </AreaChart>,
  );
  await expect(component).toHaveScreenshot(BASE_VALUE_ON_ROOT_OR_AREA_EQUIVALENT);
});

test('AreaChart with Area.baseValue', async ({ mount }) => {
  const component = await mount(
    <AreaChart data={PageData} width={800} height={500}>
      <Area dataKey="pv" baseValue={1300} />
    </AreaChart>,
  );
  await expect(component).toHaveScreenshot(BASE_VALUE_ON_ROOT_OR_AREA_EQUIVALENT);
});
