import { expect, testWithThemes } from '../fixtures';

/*
 * The example nests its own RechartsThemeProvider with a custom theme, which overrides
 * the theme selected by the gallery, so the light and dark variants would not add coverage.
 */
testWithThemes('CustomThemeExample', { tag: '@recharts-theme-legacy' }, async ({ mountStory }) => {
  const component = await mountStory('www/Theming/CustomThemeExample');
  await expect(component).toHaveScreenshot();
});
