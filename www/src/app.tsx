import { hydrateRoot, createRoot } from 'react-dom/client';

import { Root } from './containers/Root';

const container = document.getElementById('app');
if (container == null) {
  throw new Error('Container element with id "app" not found');
}

const reactTree = <Root />;

/**
 * We have an SSG setup in production, so we want to hydrate the app.
 * In development by the way we just want to render it normally, to avoid hydration mismatches false positives.
 */
if (import.meta.env.PROD) {
  hydrateRoot(container, reactTree);
} else {
  createRoot(container).render(reactTree);
}
