import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { routes } from './routes';
import { supportedLocales } from './locale';
import { apiComponents, exampleComponents, guidePages } from './navigation.data';

export function render(url: string, template: string) {
  const appHtml = renderToString(<StaticRouter location={url}>{routes()}</StaticRouter>);

  return template.replace('<div id="app"></div>', `<div id="app">${appHtml}</div>`);
}

export function getAllRoutes(): string[] {
  const allRoutes: string[] = ['/'];

  supportedLocales.forEach(locale => {
    allRoutes.push(`/${locale}`);
    allRoutes.push(`/${locale}/guide`);
    allRoutes.push(`/${locale}/api`);
    allRoutes.push(`/${locale}/examples`);
    allRoutes.push(`/${locale}/storybook`);

    guidePages.forEach(slug => {
      allRoutes.push(`/${locale}/guide/${slug}`);
    });

    apiComponents.forEach(slug => {
      allRoutes.push(`/${locale}/api/${slug}`);
    });

    exampleComponents.forEach(slug => {
      allRoutes.push(`/${locale}/examples/${slug}`);
    });
  });

  return allRoutes;
}
