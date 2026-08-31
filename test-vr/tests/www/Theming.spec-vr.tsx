import type { ThemeSwitcherExample } from './Theming.story';
import { expect, test } from '../fixtures';

/*
 * The switcher example has no theme provider of its own when `themeName` is `inherit`,
 * so these two tests cover what the website's color mode toggle does to it.
 */
test('ThemeSwitcherExample - page theme, light', async ({ mountStory }) => {
  const component = await mountStory<typeof ThemeSwitcherExample>('www/Theming/ThemeSwitcherExample', {
    testTheme: 'light',
    themeName: 'inherit',
  });
  await expect(component).toHaveScreenshot();
});

test('ThemeSwitcherExample - page theme, dark', async ({ mountStory }) => {
  const component = await mountStory<typeof ThemeSwitcherExample>('www/Theming/ThemeSwitcherExample', {
    testTheme: 'dark',
    themeName: 'inherit',
  });
  await expect(component).toHaveScreenshot();
});

test('ThemeSwitcherExample - emptyTheme', async ({ mountStory }) => {
  const component = await mountStory<typeof ThemeSwitcherExample>('www/Theming/ThemeSwitcherExample', {
    testTheme: 'light',
    themeName: 'empty',
  });
  await expect(component).toHaveScreenshot();
});

test('ThemeSwitcherExample - no provider', async ({ mountStory }) => {
  const component = await mountStory<typeof ThemeSwitcherExample>('www/Theming/ThemeSwitcherExample', {
    testTheme: 'light',
    themeName: 'none',
  });
  await expect(component).toHaveScreenshot();
});

test('CustomThemeExample', async ({ mountStory }) => {
  const component = await mountStory('www/Theming/CustomThemeExample', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('NestedThemeExample', async ({ mountStory }) => {
  const component = await mountStory('www/Theming/NestedThemeExample', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});
