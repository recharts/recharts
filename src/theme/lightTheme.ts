import { RechartsTheme } from './RechartsTheme';

/**
 * Light mode theme
 *
 * @experimental - this is still in active development, assume that the API will change in a minor/patch version
 */
export const lightTheme: RechartsTheme = {
  graphicalItems: [
    {
      fill: '#8884d8',
      stroke: '#8884d8',
      fillOpacity: 0.8,
    },
    {
      fill: '#82ca9d',
      stroke: '#82ca9d',
      fillOpacity: 0.8,
    },
    {
      fill: '#ffc658',
      stroke: '#ffc658',
      fillOpacity: 0.8,
    },
    {
      fill: '#8dd1e1',
      stroke: '#8dd1e1',
      fillOpacity: 0.8,
    },
    {
      fill: '#a4de6c',
      stroke: '#a4de6c',
      fillOpacity: 0.8,
    },
    {
      fill: '#ff7300',
      stroke: '#ff7300',
      fillOpacity: 0.8,
    },
    {
      fill: '#ed7485',
      stroke: '#ed7485',
      fillOpacity: 0.8,
    },
  ],
  chart: { width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 },
  axis: {
    stroke: '#52525b',
  },
  grid: {
    stroke: '#d6d3d1',
    strokeDasharray: '3 3',
    fill: 'none',
  },
  cursor: {
    stroke: '#a8a29e',
  },
  tooltip: {
    contentStyle: {
      backgroundColor: 'white',
      borderColor: '#a8a29e',
    },
  },
  typography: {
    color: '#18181b',
  },
};
