import * as React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

import { expect, test } from './fixtures';
import { ExamplesIndexView } from '../../../www/src/views/ExamplesIndexView.tsx';
import { Frame } from '../../../www/src/layouts/Frame.tsx';
import SimpleLineChart from '../../../www/src/docs/exampleComponents/LineChart/SimpleLineChart.tsx';

test.use({
  colorScheme: 'dark',
});

test.beforeEach(async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
});

test('dark mode: examples list', async ({ mount }) => {
  const component = await mount(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="examples" />} />
        <Route
          path="/examples"
          element={
            <Frame>
              <ExamplesIndexView />
            </Frame>
          }
        />
      </Routes>
    </BrowserRouter>,
  );

  await expect(component).toHaveScreenshot();
});

test('dark mode: Simple Line Chart', async ({ mount }) => {
  const component = await mount(
    <div
      style={{
        backgroundColor: 'var(--color-surface-base)',
      }}
    >
      <SimpleLineChart />
    </div>,
  );
  await expect(component).toHaveScreenshot();
});
