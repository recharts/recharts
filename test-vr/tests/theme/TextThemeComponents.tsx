import * as React from 'react';
import { emptyTheme, RechartsThemeProvider, Surface, Text } from 'recharts';

function TextThemeChart() {
  return (
    <Surface width={320} height={140}>
      <Text x={16} y={45}>
        Default text
      </Text>
      <Text x={16} y={105} style={{ fontSize: 14 }}>
        Explicit style
      </Text>
    </Surface>
  );
}

export function TextThemeExamples() {
  return (
    <div style={{ display: 'flex', gap: 24 }}>
      <section>
        <h2>Default text</h2>
        <TextThemeChart />
      </section>
      <RechartsThemeProvider
        value={{
          ...emptyTheme,
          typography: {
            fill: '#7c2d12',
            fontFamily: 'monospace',
            fontSize: 24,
            fontWeight: 'bold',
          },
        }}
      >
        <section>
          <h2>Text with custom theme</h2>
          <TextThemeChart />
        </section>
      </RechartsThemeProvider>
      <RechartsThemeProvider value={emptyTheme}>
        <section>
          <h2>Text with emptyTheme</h2>
          <TextThemeChart />
        </section>
      </RechartsThemeProvider>
    </div>
  );
}
