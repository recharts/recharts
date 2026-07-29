import * as React from 'react';
import '../../../www/src/styles/app.css';
import { darkTheme, lightTheme, RechartsThemeProvider } from 'recharts';
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

export function WithLightTheme(props: { children: React.ReactNode }) {
  return <RechartsThemeProvider value={lightTheme}>{props.children}</RechartsThemeProvider>;
}

export function WithDarkTheme(props: { children: React.ReactNode }) {
  return (
    <div style={{ backgroundColor: 'black' }}>
      <RechartsThemeProvider value={darkTheme}>{props.children}</RechartsThemeProvider>
    </div>
  );
}
