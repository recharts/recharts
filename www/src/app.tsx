import { hydrateRoot } from 'react-dom/client';

import { Root } from './containers/Root';
import { ColorModeProvider, defineColorModeStore } from './components/color-mode';

const container = document.getElementById('app');
if (container == null) {
  throw new Error('Container element with id "app" not found');
}

hydrateRoot(
  container,
  <ColorModeProvider store={defineColorModeStore()}>
    <Root />
  </ColorModeProvider>,
);
