import { expect, testWithThemes } from './fixtures';

testWithThemes('Sunburst without colors in data', async ({ mountStory }) => {
  const component = await mountStory('SunburstChart/SunburstWithoutColors');
  await expect(component).toHaveScreenshot();
});

testWithThemes('Sunburst label backgrounds', async ({ mountStory, page }) => {
  const component = await mountStory('SunburstChart/SunburstLabelBackgrounds');
  await expect(component.locator('.recharts-label-list text')).toHaveCount(4);
  await expect(component.locator('.recharts-text-background')).toHaveCount(4);
  await expect(component).toHaveScreenshot();
  // The labels intentionally let pointer input reach the sector underneath.
  const point = await component
    .locator('.recharts-label-list text')
    .first()
    .evaluate(element => {
      const rect = element.getBoundingClientRect();
      return { x: rect.x + rect.width / 2, y: rect.y + rect.height / 2 };
    });
  await page.mouse.move(0, 0);
  await page.mouse.move(point.x, point.y);
  await expect(component.locator('.recharts-tooltip-wrapper')).toBeVisible();
});

testWithThemes('Sunburst LabelList children', async ({ mountStory }) => {
  const component = await mountStory('SunburstChart/SunburstLabelListChildren');
  await expect(component.locator('.recharts-label-list')).toHaveCount(1);
  await expect(component.locator('.recharts-label-list text')).toHaveText(['A', 'A1', 'A2', 'B']);
  await expect(component.locator('.recharts-text-background')).toHaveCount(4);
  await expect(component).toHaveScreenshot();
});
