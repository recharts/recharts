import * as React from 'react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router';
import { routes } from '../../src/routes';
import { ColorModeProvider, defineColorModeStore } from '../../src/components/color-mode';

function baseRender(url: string) {
  const colorModeStore = defineColorModeStore();
  const renderResult = render(
    <ColorModeProvider store={colorModeStore}>
      <MemoryRouter initialEntries={[url]}>{routes()}</MemoryRouter>
    </ColorModeProvider>,
  );
  expect(renderResult.getByRole('main')).toBeInTheDocument();
  return { screen: renderResult, dispose: colorModeStore.dispose } as const;
}

function testIndexView(url: string) {
  const { screen, dispose } = baseRender(url);
  expect(screen.getByRole('heading', { name: 'Recharts' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Features' })).toBeInTheDocument();
  dispose();
}

function testInstallationView(url: string) {
  const { screen, dispose } = baseRender(url);
  expect(screen.getByRole('main')).toBeInTheDocument();
  // h2 in the nav
  expect(screen.getByRole('heading', { name: 'Guide', level: 2 })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Installation' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'NPM' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Installation' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Getting Started' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Customize' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'API' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Examples' })).toBeInTheDocument();
  dispose();
}

function testGettingStartedView(url: string) {
  const { screen, dispose } = baseRender(url);
  expect(screen.getByRole('heading', { name: 'Getting Started' })).toBeInTheDocument();
  dispose();
}

function testAPIView(url: string, heading: string) {
  const { screen, dispose } = baseRender(url);
  expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument();
  dispose();
}

function testExamplesIndexView(url: string) {
  const { screen, dispose } = baseRender(url);
  // h1 for the page title
  expect(screen.getByRole('heading', { name: 'Examples', level: 1 })).toBeInTheDocument();
  // h2 in navigation sidebar
  expect(screen.getByRole('heading', { name: 'Examples', level: 2 })).toBeInTheDocument();
  dispose();
}

function testExamplesView(url: string, heading: string) {
  const { screen, dispose } = baseRender(url);
  expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument();
  // h2 in navigation sidebar
  expect(screen.getByRole('heading', { name: 'Examples', level: 2 })).toBeInTheDocument();
  dispose();
}

function testStorybookView(url: string) {
  const { screen, dispose } = baseRender(url);
  expect(screen.container.querySelector('iframe.fullscreen')).toBeInTheDocument();
  dispose();
}

function testNotFoundView(url: string) {
  const { screen, dispose } = baseRender(url);
  expect(screen.getByRole('heading', { name: '404' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Page Not Found' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Go to Homepage' })).toBeInTheDocument();
  dispose();
}

describe('routes', () => {
  beforeEach(() => {
    vi.stubGlobal('matchMedia', (query: string) => ({
      media: query,
      matches: false,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));
  });
  describe('index view', () => {
    it.each(['/', '', '/en-US', '/en-US/'])('should render IndexView at %s', testIndexView);
  });

  describe('default guide', () => {
    it.each([
      '/guide',
      '/guide/',
      '/guide/installation',
      '/guide/installation/',
      '/en-US/guide/',
      '/en-US/guide',
      '/en-US/guide/installation',
      '/en-US/guide/installation/',
    ])('should render Installation guide at %s', testInstallationView);
  });

  describe('specific guide', () => {
    it.each([
      '/guide/getting-started',
      '/guide/getting-started/',
      '/en-US/guide/getting-started',
      '/en-US/guide/getting-started/',
    ])('should render Getting Started guide at %s', testGettingStartedView);
  });

  describe('routes without locale prefix', () => {
    it('should render Installation guide at /guide/installation/', () => {
      testInstallationView('/guide/installation/');
    });

    it('should render GuideView with optional name parameter', () => {
      testGettingStartedView('/guide/getting-started/');
    });

    it('should render first API chart docs for /api path', () => {
      testAPIView('/api/', 'AreaChart');
    });

    it('should render APIView with optional name parameter', () => {
      testAPIView('/api/LineChart', 'LineChart');
    });

    it('should render ExamplesIndexView for /examples path', () => {
      testExamplesIndexView('/examples/');
    });

    it('should render ExamplesView for /examples/:name path', () => {
      testExamplesView('/examples/SimpleLineChart/', 'Simple Line Chart');
    });

    it('should render Storybook for /storybook path', () => {
      testStorybookView('/storybook/');
    });
  });

  describe('routes with locale prefix', () => {
    it('should render GuideView with optional name parameter', () => {
      testGettingStartedView('/en-US/guide/getting-started/');
    });

    it('should render first API chart docs for /api path', () => {
      testAPIView('/en-US/api/', 'AreaChart');
    });

    it('should render APIView with optional name parameter', () => {
      testAPIView('/en-US/api/LineChart', 'LineChart');
    });

    it('should render ExamplesIndexView for /:locale/examples path', () => {
      testExamplesIndexView('/en-US/examples/');
    });

    it('should render ExamplesView for /:locale/examples/:name path', () => {
      testExamplesView('/en-US/examples/SimpleLineChart/', 'Simple Line Chart');
    });

    it('should render Storybook for /:locale/storybook path', () => {
      testStorybookView('/en-US/storybook/');
    });
  });

  describe('catch-all route', () => {
    it('should render NotFoundView for deeply nested unmatched paths', () => {
      testNotFoundView('/this/path/does/not/exist/');
    });
  });
});
