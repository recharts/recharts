import * as React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { expect, test } from '@playwright/experimental-ct-react';

import { ExamplesIndexView } from '../../../www/src/views/ExamplesIndexView.tsx';
import { Frame } from '../../../www/src/layouts/Frame.tsx';
import { TestColorModeProvider } from './TestColorModeProvider.tsx';
import SimpleLineChart from '../../../www/src/docs/exampleComponents/LineChart/SimpleLineChart.tsx';

test.use({
  colorScheme: 'dark',
});

test('dark mode: examples list', async ({ mount }) => {
  const component = await mount(
    <TestColorModeProvider>
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
      </BrowserRouter>
    </TestColorModeProvider>,
  );

  await expect(component).toHaveScreenshot();
});

test('dark mode: Simple Line Chart', async ({ mount }) => {
  const component = await mount(
    <TestColorModeProvider>
      <div
        style={{
          backgroundColor: 'var(--color-surface-base)',
        }}
      >
        <SimpleLineChart />
      </div>
    </TestColorModeProvider>,
  );
  await expect(component).toHaveScreenshot();
});
