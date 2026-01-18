import * as React from 'react';
import '../../../www/src/styles/app.css';
import { ColorModeProvider, defineColorModeStore } from '../../../www/src/components/color-mode';

/**
 * This is a test wrapper around ColorModeProvider that ensures a new store is created for each test.
 */
export function TestColorModeProvider(props: { children: React.ReactNode }) {
  const [store] = React.useState(() => defineColorModeStore());
  React.useEffect(() => {
    return store.dispose;
  }, [store]);
  return <ColorModeProvider store={store}>{props.children}</ColorModeProvider>;
}
