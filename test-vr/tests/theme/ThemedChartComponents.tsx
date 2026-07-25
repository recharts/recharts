import React from 'react';
import {
  darkTheme,
  lightTheme,
  RechartsTheme,
  RechartsThemeProvider,
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from 'recharts';
import { generateMockData } from '@recharts/devtools';

const data = generateMockData(6, 123);

export function UnthemedChart() {
  return (
    <LineChart style={{ width: '400px', height: '300px' }} data={data}>
      <CartesianGrid />
      <XAxis dataKey="label" />
      <YAxis />
      <Line type="monotone" dataKey="x" isAnimationActive={false} />
      <Line type="monotone" dataKey="y" isAnimationActive={false} />
    </LineChart>
  );
}

export const LightThemeChart = () => {
  return (
    <RechartsThemeProvider value={lightTheme}>
      <UnthemedChart />
    </RechartsThemeProvider>
  );
};

export const DarkThemeChart = () => {
  return (
    <RechartsThemeProvider value={darkTheme}>
      <UnthemedChart />
    </RechartsThemeProvider>
  );
};

export const CustomThemeChart = () => {
  const customTheme: RechartsTheme = {
    axis: {
      strokeWidth: 3,
      stroke: 'red',
    },
    grid: {
      stroke: 'blue',
      strokeDasharray: 9,
      strokeWidth: 4,
      strokeOpacity: 0.8,
    },
  };
  return (
    <RechartsThemeProvider value={customTheme}>
      <UnthemedChart />
    </RechartsThemeProvider>
  );
};
