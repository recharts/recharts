import { Navigate, Outlet, ScrollRestoration, type Location, type RouteObject } from 'react-router';
import { IndexView, GuideView, APIView, ExamplesView, ExamplesIndexView, Storybook, NotFoundView } from '../views';
import { Frame } from '../layouts/Frame';
import { PageTracker } from '../components/analytics.ts';
import { redirects } from './redirects.ts';

/*
 * Every full page load starts on a history entry with the key "default".
 * Without the URL in the key, opening a link like /api/Legend/#itemSorter restores
 * the position saved for whichever page was loaded before in this tab, instead of scrolling to the hash.
 */
function getScrollRestorationKey(location: Location): string {
  return location.key === 'default' ? `default:${location.pathname}${location.hash}` : location.key;
}

function RootLayout() {
  return (
    <>
      <PageTracker />
      <Outlet />
      <ScrollRestoration getKey={getScrollRestorationKey} />
    </>
  );
}

export const routes: RouteObject[] = [
  {
    element: <RootLayout />,
    children: [
      ...Object.entries(redirects).map(([oldPath, newPath]) => ({
        path: oldPath,
        element: <Navigate to={newPath} replace />,
      })),
      {
        path: '/:locale/guide/:name?/',
        element: (
          <Frame>
            <GuideView />
          </Frame>
        ),
      },
      {
        path: '/:locale/api/:name?/',
        element: (
          <Frame>
            <APIView />
          </Frame>
        ),
      },
      {
        path: '/:locale/examples/',
        element: (
          <Frame>
            <ExamplesIndexView />
          </Frame>
        ),
      },
      {
        path: '/:locale/examples/:name/',
        element: (
          <Frame>
            <ExamplesView />
          </Frame>
        ),
      },
      {
        path: '/:locale/storybook/',
        element: (
          <Frame>
            <Storybook />
          </Frame>
        ),
      },
      {
        path: '/guide/:name?/',
        element: (
          <Frame>
            <GuideView />
          </Frame>
        ),
      },
      {
        path: '/api/:name?/',
        element: (
          <Frame>
            <APIView />
          </Frame>
        ),
      },
      {
        path: '/examples/',
        element: (
          <Frame>
            <ExamplesIndexView />
          </Frame>
        ),
      },
      {
        path: '/examples/:name/',
        element: (
          <Frame>
            <ExamplesView />
          </Frame>
        ),
      },
      {
        path: '/storybook/',
        element: (
          <Frame>
            <Storybook />
          </Frame>
        ),
      },
      {
        path: '/:locale/',
        element: (
          <Frame>
            <IndexView />
          </Frame>
        ),
      },
      {
        path: '/',
        element: (
          <Frame>
            <IndexView />
          </Frame>
        ),
      },
      {
        path: '*',
        element: (
          <Frame>
            <NotFoundView />
          </Frame>
        ),
      },
    ],
  },
];
