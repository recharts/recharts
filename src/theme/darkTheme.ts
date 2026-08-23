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
      active: { fill: '#18181b', stroke: '#8884d8', strokeWidth: 2 },
    },
    {
      fill: '#82ca9d',
      stroke: '#82ca9d',
      fillOpacity: 0.8,
      active: { fill: '#18181b', stroke: '#82ca9d', strokeWidth: 2 },
    },
    {
      fill: '#ffc658',
      stroke: '#ffc658',
      fillOpacity: 0.8,
      active: { fill: '#18181b', stroke: '#ffc658', strokeWidth: 2 },
    },
    {
      fill: '#8dd1e1',
      stroke: '#8dd1e1',
      fillOpacity: 0.8,
      active: { fill: '#18181b', stroke: '#8dd1e1', strokeWidth: 2 },
    },
    {
      fill: '#a4de6c',
      stroke: '#a4de6c',
      fillOpacity: 0.8,
      active: { fill: '#18181b', stroke: '#a4de6c', strokeWidth: 2 },
    },
    {
      fill: '#ff7300',
      stroke: '#ff7300',
      fillOpacity: 0.8,
      active: { fill: '#18181b', stroke: '#ff7300', strokeWidth: 2 },
    },
    {
      fill: '#ed7485',
      stroke: '#ed7485',
      fillOpacity: 0.8,
      active: { fill: '#18181b', stroke: '#ed7485', strokeWidth: 2 },
    },
  ],
  barBackground: {
    fill: '#3f3f46',
  },
  brush: {
    fill: '#3f3f46',
    stroke: '#d6d3d1',
  },
  grid: {
    stroke: '#3f3f46',
    strokeDasharray: '3 3',
    fill: 'none',
  },
  axis: {
    stroke: '#d6d3d1',
  },
  errorBar: {
    stroke: '#d6d3d1',
    strokeWidth: 1.5,
  },
  reference: {
    stroke: '#52525b',
    strokeWidth: 1,
    fill: '#3f3f46',
    fillOpacity: 0.3,
  },
  cursor: {
    stroke: '#444',
    fill: '#333',
    fillOpacity: 0.7,
  },
  tooltip: {
    contentStyle: {
      margin: 0,
      padding: 10,
      backgroundColor: '#18181b',
      border: '1px solid #52525b',
      whiteSpace: 'nowrap',
    },
    itemStyle: {
      display: 'block',
      paddingTop: 4,
      paddingBottom: 4,
      color: '#f5f5f4',
    },
    labelStyle: {
      margin: 0,
      fontWeight: 'bold',
    },
  },
  typography: {
    color: '#f5f5f4',
  },
};
