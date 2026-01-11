import * as React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router';
import { routes } from '../../src/routes';
import { ColorModeProvider, defineColorModeStore } from '../../src/components/color-mode';

function baseRender(url: string) {
  const renderResult = render(
    <ColorModeProvider store={defineColorModeStore()}>
      <MemoryRouter initialEntries={[url]}>{routes()}</MemoryRouter>
    </ColorModeProvider>,
  );
  expect(renderResult.getByRole('main')).toBeInTheDocument();
  return renderResult;
}

function testIndexView(url: string) {
  const { getByRole } = baseRender(url);
  expect(getByRole('heading', { name: 'Recharts' })).toBeInTheDocument();
  expect(getByRole('heading', { name: 'Features' })).toBeInTheDocument();
}

function testInstallationView(url: string) {
  const { getByRole } = baseRender(url);
  expect(getByRole('main')).toBeInTheDocument();
  // h2 in the nav
  expect(getByRole('heading', { name: 'Guide', level: 2 })).toBeInTheDocument();
  expect(getByRole('heading', { name: 'Installation' })).toBeInTheDocument();
  expect(getByRole('heading', { name: 'NPM' })).toBeInTheDocument();
  expect(getByRole('link', { name: 'Installation' })).toBeInTheDocument();
  expect(getByRole('link', { name: 'Getting Started' })).toBeInTheDocument();
  expect(getByRole('link', { name: 'Customize' })).toBeInTheDocument();
  expect(getByRole('link', { name: 'API' })).toBeInTheDocument();
  expect(getByRole('link', { name: 'Examples' })).toBeInTheDocument();
}

function testGettingStartedView(url: string) {
  const { getByRole } = baseRender(url);
  expect(getByRole('heading', { name: 'Getting Started' })).toBeInTheDocument();
}

function testAPIView(url: string, heading: string) {
  const { getByRole } = baseRender(url);
  expect(getByRole('heading', { name: heading })).toBeInTheDocument();
}

function testExamplesIndexView(url: string) {
  const { getByRole } = baseRender(url);
  // h1 for the page title
  expect(getByRole('heading', { name: 'Examples', level: 1 })).toBeInTheDocument();
  // h2 in navigation sidebar
  expect(getByRole('heading', { name: 'Examples', level: 2 })).toBeInTheDocument();
}

function testExamplesView(url: string, heading: string) {
  const { getByRole } = baseRender(url);
  expect(getByRole('heading', { name: heading })).toBeInTheDocument();
  // h2 in navigation sidebar
  expect(getByRole('heading', { name: 'Examples', level: 2 })).toBeInTheDocument();
}

function testStorybookView(url: string) {
  const { container } = baseRender(url);
  expect(container.querySelector('iframe.fullscreen')).toBeInTheDocument();
}

function testNotFoundView(url: string) {
  const { getByRole } = baseRender(url);
  expect(getByRole('heading', { name: '404' })).toBeInTheDocument();
  expect(getByRole('heading', { name: 'Page Not Found' })).toBeInTheDocument();
  expect(getByRole('link', { name: 'Go to Homepage' })).toBeInTheDocument();
}

describe('routes', () => {
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
