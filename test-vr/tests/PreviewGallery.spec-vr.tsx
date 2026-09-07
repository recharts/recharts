import { expect, legacyTest } from './fixtures';

legacyTest.skip(
  ({ rechartsTheme }) => rechartsTheme !== 'legacy',
  'the gallery preview embeds all three Recharts variants in one page',
);

legacyTest.describe.configure({ timeout: 60_000 });

const storyId = 'ThemeVariants/ThemeVariants';

legacyTest('preview shows three theme variant panels', async ({ page }) => {
  await page.goto(`/gallery/preview.html?story=${storyId}`);

  await expect(page.locator('.story-panel')).toHaveCount(3);

  await Promise.all(
    (['legacy', 'light', 'dark'] as const).map(async variant => {
      const iframe = page.locator(`iframe[src*="rechartsTheme=${variant}"]`);
      await expect(iframe).toHaveAttribute('src', /story=ThemeVariants%2FThemeVariants/);

      const frame = page.frameLocator(`iframe[src*="rechartsTheme=${variant}"]`);
      await expect(frame.locator('[data-recharts-theme]')).toHaveAttribute('data-recharts-theme', variant);
    }),
  );
});

legacyTest('index.html auto-mounts a dark story from the URL', async ({ page }) => {
  await page.goto(`/gallery/index.html?story=${storyId}&rechartsTheme=dark`);

  await expect(page.locator('[data-recharts-theme]')).toHaveAttribute('data-recharts-theme', 'dark');
  await expect(page.locator('#root')).toHaveCSS('background-color', 'rgb(0, 0, 0)');
});

legacyTest('index.html sets a transparent background for the legacy theme', async ({ page }) => {
  await page.goto(`/gallery/index.html?story=${storyId}&rechartsTheme=legacy`);

  await expect(page.locator('#root')).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)');
});
