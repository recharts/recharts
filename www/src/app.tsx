import { hydrateRoot } from 'react-dom/client';
import { Root } from './containers/Root';

const container = document.getElementById('app');
if (container == null) {
  throw new Error('Container element with id "app" not found');
}

hydrateRoot(container, <Root />);
