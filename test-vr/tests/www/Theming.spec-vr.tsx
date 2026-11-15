import { expect, test } from '../fixtures';

test('CustomThemeExample', async ({ mountStory }) => {
  const component = await mountStory('www/Theming/CustomThemeExample', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});
