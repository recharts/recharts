/*
 * Theme wrappers for the www VR tests.
 *
 * These mirror the behavior of the old custom mount fixtures from
 * test-vr/tests/www/fixtures.tsx: testWithLightTheme wrapped the mount in
 * WithLightTheme, testWithDarkTheme in WithDarkTheme, and the default test in
 * TestColorModeProvider. The test passes the wrapper it wants through the
 * explicit testTheme prop.
 *
 * The old fixtures file imported www/src/styles/app.css, so the committed
 * snapshots of the themed www tests were generated with the website styles
 * applied (body margin reset, fonts). Plain tests that did not use the
 * fixtures have snapshots without those styles, so their stories must not
 * import this module (see for example test-vr/tests/www/ChartSizing.story.tsx).
 */
import * as React from 'react';
import '../../../www/src/styles/app.css';
import { darkTheme, lightTheme, RechartsThemeProvider } from 'recharts';
import { ColorModeProvider } from '../../../www/src/components/color-mode';

export type TestTheme = 'default' | 'light' | 'dark';

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

export function applyTestTheme(testTheme: TestTheme | undefined, content: React.ReactNode): React.ReactNode {
  switch (testTheme) {
    case 'light':
      return <WithLightTheme>{content}</WithLightTheme>;
    case 'dark':
      return <WithDarkTheme>{content}</WithDarkTheme>;
    default:
      return <TestColorModeProvider>{content}</TestColorModeProvider>;
  }
}

/**
 * Wraps a component in a story that accepts the testing-only testTheme prop.
 * The story id is the export name, for example
 * 'www/PieChartApiExamples/TwoLevelPieChart'.
 *
 * testTheme is intentionally left in the props passed to the component.
 * Destructuring it out would need a type assertion, which this repository
 * does not allow, and the wrapped components only destructure the props they
 * know about. The VR snapshot comparison would catch any component that
 * leaks unknown props into the DOM.
 */
export function themedStory<Props extends object>(Component: React.ComponentType<Props>) {
  return function Story(props: Props & { testTheme?: TestTheme }) {
    return applyTestTheme(props.testTheme, <Component {...props} />);
  };
}
