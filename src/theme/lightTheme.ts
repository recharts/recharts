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
      active: { fill: '#fff', stroke: '#8884d8', strokeWidth: 2 },
    },
    {
      fill: '#82ca9d',
      stroke: '#82ca9d',
      fillOpacity: 0.8,
      active: { fill: '#fff', stroke: '#82ca9d', strokeWidth: 2 },
    },
    {
      fill: '#ffc658',
      stroke: '#ffc658',
      fillOpacity: 0.8,
      active: { fill: '#fff', stroke: '#ffc658', strokeWidth: 2 },
    },
    {
      fill: '#8dd1e1',
      stroke: '#8dd1e1',
      fillOpacity: 0.8,
      active: { fill: '#fff', stroke: '#8dd1e1', strokeWidth: 2 },
    },
    {
      fill: '#a4de6c',
      stroke: '#a4de6c',
      fillOpacity: 0.8,
      active: { fill: '#fff', stroke: '#a4de6c', strokeWidth: 2 },
    },
    {
      fill: '#ff7300',
      stroke: '#ff7300',
      fillOpacity: 0.8,
      active: { fill: '#fff', stroke: '#ff7300', strokeWidth: 2 },
    },
    {
      fill: '#ed7485',
      stroke: '#ed7485',
      fillOpacity: 0.8,
      active: { fill: '#fff', stroke: '#ed7485', strokeWidth: 2 },
    },
  ],
  chart: { width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 },
  axis: {
    stroke: '#52525b',
  },
  errorBar: {
    stroke: '#52525b',
    strokeWidth: 1.5,
  },
  grid: {
    stroke: '#d6d3d1',
    strokeDasharray: '3 3',
    fill: 'none',
  },
  reference: {
    stroke: '#a8a29e',
    strokeWidth: 1,
    fill: '#d6d3d1',
    fillOpacity: 0.25,
  },
  cursor: {
    stroke: '#a8a29e',
  },
  tooltip: {
    contentStyle: {
      backgroundColor: 'white',
      borderColor: '#a8a29e',
    },
    itemStyle: {
      display: 'block',
      paddingTop: 4,
      paddingBottom: 4,
      color: '#18181b',
    },
    labelStyle: {
      fontWeight: 'bold',
    },
  },
  typography: {
    color: '#18181b',
  },
};
