import * as React from 'react';
import { expect, test } from '@playwright/experimental-ct-react';
import {
  CustomThemeChart,
  DarkThemeChart,
  LightThemeChart,
  DefaultThemeChart,
  EmptyThemeChart,
} from './ThemedChartComponents.tsx';

test('one chart four themes', async ({ mount }) => {
  const component = await mount(
    <>
      <h1>DefaultThemeChart</h1>
      <DefaultThemeChart />
      <h1>UnthemedChart</h1>
      <EmptyThemeChart />
      <h1>LightThemeChart</h1>
      <LightThemeChart />
      <h1>DarkThemeChart</h1>
      <DarkThemeChart />
      <h1>CustomThemeChart</h1>
      <CustomThemeChart />
      <div style={{ backgroundColor: 'black', color: 'white' }}>
        <h1>DefaultThemeChart</h1>
        <DefaultThemeChart />
        <h1>UnthemedChart</h1>
        <EmptyThemeChart />
        <h1>LightThemeChart</h1>
        <LightThemeChart />
        <h1>DarkThemeChart</h1>
        <DarkThemeChart />
        <h1>CustomThemeChart</h1>
        <CustomThemeChart />
      </div>
    </>,
  );
  await expect(component).toHaveScreenshot();
});
