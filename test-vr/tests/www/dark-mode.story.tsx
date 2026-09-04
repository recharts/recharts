import * as React from 'react';
import { MemoryRouter, Navigate, Route, Routes } from 'react-router';
import { ExamplesIndexView } from '../../../www/src/views/ExamplesIndexView.tsx';
import { Frame } from '../../../www/src/layouts/Frame.tsx';
import { DarkModeSimpleLineChart } from './DarkModeSimpleLineChartComponent.tsx';
import { TestColorModeProvider } from './StoryTheme';

export const ExamplesIndexViewStory = () => {
  return (
    <TestColorModeProvider>
      {/*
       * The gallery page lives at /gallery/index.html, so a BrowserRouter
       * would never match the "/" route. A MemoryRouter starting at "/"
       * renders the same view the old component testing page did.
       */}
      <MemoryRouter initialEntries={['/']}>
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
      </MemoryRouter>
    </TestColorModeProvider>
  );
};

export const SimpleLineChartStory = () => {
  return (
    <TestColorModeProvider>
      <div
        style={{
          backgroundColor: 'var(--color-surface-base)',
        }}
      >
        <DarkModeSimpleLineChart />
      </div>
    </TestColorModeProvider>
  );
};
