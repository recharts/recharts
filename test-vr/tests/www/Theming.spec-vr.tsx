import * as React from 'react';
import { expect } from '@playwright/experimental-ct-react';
import ThemeSwitcherExample from '../../../www/src/components/GuideView/Theming/ThemeSwitcherExample';
import CustomThemeExample from '../../../www/src/components/GuideView/Theming/CustomThemeExample';
import NestedThemeExample from '../../../www/src/components/GuideView/Theming/NestedThemeExample';
import { testWithDarkTheme, testWithLightTheme } from './fixtures.tsx';

/*
 * The switcher example has no theme provider of its own when `themeName` is `inherit`,
 * so these two tests cover what the website's color mode toggle does to it.
 */
testWithLightTheme('ThemeSwitcherExample - page theme, light', async ({ mount }) => {
  const component = await mount(<ThemeSwitcherExample themeName="inherit" />);
  await expect(component).toHaveScreenshot();
});

testWithDarkTheme('ThemeSwitcherExample - page theme, dark', async ({ mount }) => {
  const component = await mount(<ThemeSwitcherExample themeName="inherit" />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('ThemeSwitcherExample - emptyTheme', async ({ mount }) => {
  const component = await mount(<ThemeSwitcherExample themeName="empty" />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('ThemeSwitcherExample - no provider', async ({ mount }) => {
  const component = await mount(<ThemeSwitcherExample themeName="none" />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('CustomThemeExample', async ({ mount }) => {
  const component = await mount(<CustomThemeExample />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('NestedThemeExample', async ({ mount }) => {
  const component = await mount(<NestedThemeExample />);
  await expect(component).toHaveScreenshot();
});
