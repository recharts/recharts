import * as React from 'react';
import { darkTheme, RechartsThemeProvider } from 'recharts';
import SimpleLineChart from '../../../www/src/docs/exampleComponents/LineChart/SimpleLineChart';

export function DarkModeSimpleLineChart() {
  return (
    <RechartsThemeProvider value={darkTheme}>
      <SimpleLineChart />
    </RechartsThemeProvider>
  );
}
