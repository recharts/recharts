import { hydrateRoot } from 'react-dom/client';
import { Root } from './containers/Root';
import { ColorModePicker } from './components/ColorModePicker';

ColorModePicker.setInitialColorMode();

const container = document.getElementById('app');
if (container == null) {
  throw new Error('Container element with id "app" not found');
}

hydrateRoot(container, <Root />);
