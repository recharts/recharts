import * as React from 'react';
import { expect, test } from '@playwright/experimental-ct-react';
import { ThemedCursor, UnthemedCursor } from './CursorThemeComponents.tsx';

/*
 * RadialBar does not derive a polar coordinate for Tooltip defaultIndex, so its
 * cursor is absent until the chart receives a real pointer interaction. The
 * hidden PolarAngleAxis and hover below are a VR workaround for #7672.
 * https://github.com/recharts/recharts/issues/7672
 */
test('Unthemed Cursor', async ({ mount }) => {
  const component = await mount(<UnthemedCursor />);

  await expect(component.locator('.recharts-polar-angle-axis')).toHaveCount(1);
  await component
    .locator('.recharts-wrapper')
    .nth(3)
    .hover({ position: { x: 300, y: 130 } });
  await expect(component.locator('.recharts-tooltip-cursor')).toHaveCount(4);
  await expect(component).toHaveScreenshot();
});

test('Themed Cursor', async ({ mount }) => {
  const component = await mount(<ThemedCursor />);

  await expect(component.locator('.recharts-polar-angle-axis')).toHaveCount(1);
  await component
    .locator('.recharts-wrapper')
    .nth(3)
    .hover({ position: { x: 300, y: 130 } });
  await expect(component.locator('.recharts-tooltip-cursor')).toHaveCount(4);
  await expect(component).toHaveScreenshot();
});
