import type { ThemeHeroExample } from './ThemeHeroExample.story';
import { expect, testWithThemes } from '../fixtures';

/*
 * The hero has its own autoTheme provider, so the Recharts theme of the VR project does not reach it.
 * What changes its colors is the browser color scheme, which the light and dark projects emulate.
 * The legacy project would repeat the light screenshot.
 */
testWithThemes.use({ rechartsThemes: ['light', 'dark'] });

testWithThemes('ThemeHeroExample', async ({ mountStory }) => {
  const component = await mountStory<typeof ThemeHeroExample>('www/ThemeHeroExample/ThemeHeroExample', {
    defaultIndex: '2',
  });
  await expect(component.locator('.recharts-tooltip-wrapper')).toHaveCount(4);
  await expect(component).toHaveScreenshot();
});
