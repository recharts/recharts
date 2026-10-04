import type { Locator } from '@playwright/test';
import { expect, testWithThemes } from '../fixtures';

const colorProperties = ['fill', 'stroke', 'color', 'background-color', 'border-top-color'] as const;

function readComputedColors(container: Locator): Promise<string[][]> {
  return container.evaluate((element, properties: readonly string[]) => {
    return [element, ...Array.from(element.querySelectorAll('*'))].map(node => {
      const style = window.getComputedStyle(node);
      return [node.tagName, ...properties.map(property => style.getPropertyValue(property))];
    });
  }, colorProperties);
}

testWithThemes.describe('autoTheme follows the browser color scheme', () => {
  /*
   * The light and dark projects also emulate the matching browser color scheme,
   * and the gallery declares `color-scheme: light dark`.
   */
  testWithThemes.use({ rechartsThemes: ['light', 'dark'] });

  testWithThemes('autoTheme matches the page theme', async ({ mountStory }) => {
    const component = await mountStory('theme/AutoTheme/AutoThemeComparison');
    const pageTheme = component.getByTestId('page-theme');
    const auto = component.getByTestId('auto-theme');
    await expect(pageTheme.locator('.recharts-tooltip-wrapper')).toBeVisible();
    await expect(auto.locator('.recharts-tooltip-wrapper')).toBeVisible();

    expect(await readComputedColors(auto)).toEqual(await readComputedColors(pageTheme));
    await expect(component).toHaveScreenshot();
  });
});

testWithThemes('autoTheme follows a scoped color-scheme', { tag: '@recharts-theme-legacy' }, async ({ mountStory }) => {
  const component = await mountStory('theme/AutoTheme/AutoThemeScoped');
  await expect(component).toHaveScreenshot();
});
