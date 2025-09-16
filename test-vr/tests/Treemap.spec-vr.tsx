import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import { Treemap } from '../../src';
import { exampleTreemapData } from '../../test/_data';
import { CustomContent } from './TreemapComponents';

test('simple treemap', async ({ mount }) => {
  const component = await mount(
    <Treemap
      width={500}
      height={250}
      data={exampleTreemapData}
      isAnimationActive={false}
      nameKey="name"
      dataKey="value"
    />,
  );
  await expect(component).toHaveScreenshot();
});

test('nested treemap', async ({ mount }) => {
  const component = await mount(
    <Treemap
      width={500}
      height={250}
      data={exampleTreemapData}
      isAnimationActive={false}
      nameKey="name"
      dataKey="value"
      type="nest"
    />,
  );
  await expect(component).toHaveScreenshot();
});

test('custom aspect ratio', async ({ mount }) => {
  const component = await mount(
    <Treemap
      width={500}
      height={250}
      data={exampleTreemapData}
      isAnimationActive={false}
      nameKey="name"
      dataKey="value"
      aspectRatio={1}
    />,
  );
  await expect(component).toHaveScreenshot();
});

test('custom content', async ({ mount }) => {
  const component = await mount(
    <Treemap
      width={500}
      height={250}
      data={exampleTreemapData}
      isAnimationActive={false}
      nameKey="name"
      dataKey="value"
      content={<CustomContent />}
    />,
  );
  await expect(component).toHaveScreenshot();
});
