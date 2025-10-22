import { Route, Routes } from 'react-router';
import { IndexView, GuideView, APIView, ExamplesView, ExamplesIndexView, Storybook } from '../views';
import { Frame } from '../layouts/Frame';

export function routes() {
  return (
    <Routes>
      <Route
        path="/:locale/guide/:name?"
        element={
          <Frame>
            <GuideView />
          </Frame>
        }
      />
      <Route
        path="/:locale/api/:name?"
        element={
          <Frame>
            <APIView />
          </Frame>
        }
      />
      <Route
        path="/:locale/examples"
        element={
          <Frame>
            <ExamplesIndexView />
          </Frame>
        }
      />
      <Route
        path="/:locale/examples/:name"
        element={
          <Frame>
            <ExamplesView />
          </Frame>
        }
      />
      <Route
        path="/:locale/storybook"
        element={
          <Frame>
            <Storybook />
          </Frame>
        }
      />
      <Route
        path="*"
        element={
          <Frame>
            <IndexView />
          </Frame>
        }
      />
    </Routes>
  );
}
