import React from 'react';
import {
  CartesianGrid,
  darkTheme,
  emptyTheme,
  Legend,
  lightTheme,
  Line,
  LineChart,
  RechartsTheme,
  RechartsThemeProvider,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { generateMockData } from '@recharts/devtools';

const data = generateMockData(6, 123);

export function DefaultThemeChart() {
  return (
    <LineChart style={{ width: '400px', height: '300px' }} data={data}>
      <CartesianGrid />
      <XAxis dataKey="label" />
      <YAxis />
      <Legend />
      <Tooltip defaultIndex={1} />
      <Line type="monotone" dataKey="x" isAnimationActive={false} />
      <Line type="monotone" dataKey="y" isAnimationActive={false} />
    </LineChart>
  );
}

export function EmptyThemeChart() {
  return (
    <RechartsThemeProvider value={emptyTheme}>
      <LineChart style={{ width: '400px', height: '300px' }} data={data}>
        <CartesianGrid />
        <XAxis dataKey="label" />
        <YAxis />
        <Legend />
        <Tooltip defaultIndex={1} />
        <Line type="monotone" dataKey="x" isAnimationActive={false} />
        <Line type="monotone" dataKey="y" isAnimationActive={false} />
      </LineChart>
    </RechartsThemeProvider>
  );
}

export const LightThemeChart = () => {
  return (
    <RechartsThemeProvider value={lightTheme}>
      <DefaultThemeChart />
    </RechartsThemeProvider>
  );
};

export const DarkThemeChart = () => {
  return (
    <RechartsThemeProvider value={darkTheme}>
      <DefaultThemeChart />
    </RechartsThemeProvider>
  );
};

export const CustomThemeChart = () => {
  const customTheme: RechartsTheme = {
    graphicalItems: [
      {
        stroke: 'gold',
        strokeDasharray: '7 9',
        strokeOpacity: 0.9,
        fill: 'silver',
        fillOpacity: 0.3,
      },
    ],
    typography: {
      fontSize: 30,
      fontWeight: 'bold',
      fontFamily: 'Roboto',
    },
    axis: {
      strokeWidth: 3,
      stroke: 'red',
      strokeOpacity: 0.4,
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
      <DefaultThemeChart />
    </RechartsThemeProvider>
  );
};

export const OneChartFourThemes = () => {
  return (
    <>
      <h1>DefaultThemeChart</h1>
      <DefaultThemeChart />
      <h1>UnthemedChart</h1>
      <EmptyThemeChart />
      <h1>LightThemeChart</h1>
      <LightThemeChart />
      <h1>DarkThemeChart</h1>
      <DarkThemeChart />
      <h1>CustomThemeChart</h1>
      <CustomThemeChart />
      <div style={{ backgroundColor: 'black', color: 'white' }}>
        <h1>DefaultThemeChart</h1>
        <DefaultThemeChart />
        <h1>UnthemedChart</h1>
        <EmptyThemeChart />
        <h1>LightThemeChart</h1>
        <LightThemeChart />
        <h1>DarkThemeChart</h1>
        <DarkThemeChart />
        <h1>CustomThemeChart</h1>
        <CustomThemeChart />
      </div>
    </>
  );
};
