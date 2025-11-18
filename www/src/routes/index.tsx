import { Route, Routes, Navigate } from 'react-router';
import { IndexView, GuideView, APIView, ExamplesView, ExamplesIndexView, Storybook, NotFoundView } from '../views';
import { Frame } from '../layouts/Frame';
import { redirects } from './redirects.ts';

export function routes() {
  return (
    <Routes>
      {/* Redirects for renamed API pages */}
      {Object.entries(redirects).map(([oldPath, newPath]) => (
        <Route key={oldPath} path={oldPath} element={<Navigate to={newPath} replace />} />
      ))}

      {/* Routes with explicit locale */}
      <Route
        path="/:locale/guide/:name?/"
        element={
          <Frame>
            <GuideView />
          </Frame>
        }
      />
      <Route
        path="/:locale/api/:name?/"
        element={
          <Frame>
            <APIView />
          </Frame>
        }
      />
      <Route
        path="/:locale/examples/"
        element={
          <Frame>
            <ExamplesIndexView />
          </Frame>
        }
      />
      <Route
        path="/:locale/examples/:name/"
        element={
          <Frame>
            <ExamplesView />
          </Frame>
        }
      />
      <Route
        path="/:locale/storybook/"
        element={
          <Frame>
            <Storybook />
          </Frame>
        }
      />

      {/* Default locale routes (no locale prefix - defaults to en-US) */}
      <Route
        path="/guide/:name?/"
        element={
          <Frame>
            <GuideView />
          </Frame>
        }
      />
      <Route
        path="/api/:name?/"
        element={
          <Frame>
            <APIView />
          </Frame>
        }
      />
      <Route
        path="/examples/"
        element={
          <Frame>
            <ExamplesIndexView />
          </Frame>
        }
      />
      <Route
        path="/examples/:name/"
        element={
          <Frame>
            <ExamplesView />
          </Frame>
        }
      />
      <Route
        path="/storybook/"
        element={
          <Frame>
            <Storybook />
          </Frame>
        }
      />

      {/* Index and catch-all */}
      <Route
        path="/:locale/"
        element={
          <Frame>
            <IndexView />
          </Frame>
        }
      />
      <Route
        path="/"
        element={
          <Frame>
            <IndexView />
          </Frame>
        }
      />
      <Route
        path="*"
        element={
          <Frame>
            <NotFoundView />
          </Frame>
        }
      />
    </Routes>
  );
}
