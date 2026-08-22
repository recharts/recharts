import * as React from 'react';
import '../../../www/src/styles/app.css';
import { darkTheme, lightTheme, RechartsThemeProvider } from 'recharts';
import { ColorModeProvider } from '../../../www/src/components/color-mode';

/**
 * This is a test wrapper around ColorModeProvider that ensures isolated color mode state for each test.
 */
export function TestColorModeProvider(props: { children: React.ReactNode }) {
  return <ColorModeProvider>{props.children}</ColorModeProvider>;
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
