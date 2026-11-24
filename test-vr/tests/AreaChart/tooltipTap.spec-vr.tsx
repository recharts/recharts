import { expect, testWithThemes } from '../fixtures';

testWithThemes.use({ hasTouch: true, isMobile: true, viewport: { width: 360, height: 800 } });
testWithThemes.skip(({ browserName }) => browserName !== 'chromium', 'Reproduces a Chromium Headless Shell tap');

testWithThemes('AreaChart shows the hover tooltip on the first tap', async ({ mountStory, page }) => {
  const chart = await mountStory('AreaChart/tooltipTap/AreaChartWithHoverTooltip');
  const tooltip = chart.locator('.recharts-tooltip-wrapper');
  await expect(chart.locator('.recharts-area-curve')).toBeVisible();
  await expect(tooltip).toBeHidden();

  const tapPosition = { x: 240, y: 100 };
  await chart.tap({ position: tapPosition });
  await expect(tooltip).toBeVisible();
  await expect(tooltip.locator('.recharts-tooltip-item')).toHaveText('value : 3');

  await page.touchscreen.tap(10, 300);
  await expect(tooltip).toBeHidden();

  await chart.tap({ position: tapPosition });
  await expect(tooltip).toBeVisible();
  await page.mouse.move(10, 300);
  await expect(tooltip).toBeHidden();
});
