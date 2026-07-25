import { RechartsTheme } from './RechartsTheme';

/**
 * Dark mode theme
 *
 * @experimental
 */
export const darkTheme: RechartsTheme = {
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
  grid: {
    stroke: '#3f3f46',
    strokeDasharray: '3 3',
    fill: 'none',
  },
  axis: {
    stroke: '#d6d3d1',
  },
  cursor: {
    stroke: '#52525b',
  },
  tooltip: {
    contentStyle: {
      backgroundColor: '#18181b',
      borderColor: '#52525b',
    },
  },
  typography: {
    color: '#f5f5f4',
  },
};
