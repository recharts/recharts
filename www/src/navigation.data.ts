import { allExamples } from './docs/exampleComponents';
import { allExamples as allApiDocs } from './docs/api';

export const apiComponents = Object.keys(allApiDocs).concat([
  // SankeyChart route now redirects to Sankey after we renamed the page
  'SankeyChart',
]);

export const exampleComponents = Object.values(allExamples).flatMap(({ examples }) => Object.keys(examples));

const guidePages = [
  'installation',
  'getting-started',
  'customize',
  'activeIndex',
  'sizes',
  'domainAndTicks',
  'zIndex',
  'performance',
];

export function getSiteRoutes(): string[] {
  // the vite sitemap plugin adds root route by default so we don't need to add it here
  const routes = ['/guide/', '/api/', '/examples/', '/storybook/'];

  guidePages.forEach(slug => routes.push(`/guide/${slug}/`));
  apiComponents.forEach(slug => routes.push(`/api/${slug}/`));
  exampleComponents.forEach(slug => routes.push(`/examples/${slug}/`));

  return routes;
}
