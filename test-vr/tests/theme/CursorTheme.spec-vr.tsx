import { expect, testWithThemes } from '../fixtures';

/*
 * RadialBar does not derive a polar coordinate for Tooltip defaultIndex, so its
 * cursor is absent until the chart receives a real pointer interaction. The
 * hidden PolarAngleAxis and hover below are a VR workaround for #7672.
 * https://github.com/recharts/recharts/issues/7672
 */
testWithThemes('Unthemed Cursor', async ({ mountStory }) => {
  const component = await mountStory('theme/CursorTheme/UnthemedCursor');

  await expect(component.locator('.recharts-polar-angle-axis')).toHaveCount(1);
  await component
    .locator('.recharts-wrapper')
    .nth(3)
    .hover({ position: { x: 300, y: 130 } });
  await expect(component.locator('.recharts-tooltip-cursor')).toHaveCount(4);
  await expect(component).toHaveScreenshot();
});

testWithThemes('Themed Cursor', async ({ mountStory }) => {
  const component = await mountStory('theme/CursorTheme/ThemedCursor');

  await expect(component.locator('.recharts-polar-angle-axis')).toHaveCount(1);
  await component
    .locator('.recharts-wrapper')
    .nth(3)
    .hover({ position: { x: 300, y: 130 } });
  await expect(component.locator('.recharts-tooltip-cursor')).toHaveCount(4);
  await expect(component).toHaveScreenshot();
});
