import type { SunburstData } from '../src/chart/SunburstChart';
import { ChartData } from '../src/state/chartDataSlice';

export const PageData = [
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 300, pv: 4567, amt: 2400 },
  { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
  { name: 'Page D', uv: 200, pv: 9800, amt: 2400 },
  { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
  { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
];

export const exampleSankeyData = {
  nodes: [
    { name: 'Agricultural waste' },
    { name: 'Bio-conversion' },
    { name: 'Liquid' },
    { name: 'Losses' },
    { name: 'Solid' },
    { name: 'Gas' },
    { name: 'Biofuel imports' },
    { name: 'Biomass imports' },
    { name: 'Coal imports' },
    { name: 'Coal' },
    { name: 'Coal reserves' },
    { name: 'District heating' },
    { name: 'Industry' },
    { name: 'Heating and cooling - commercial' },
    { name: 'Heating and cooling - homes' },
    { name: 'Electricity grid' },
    { name: 'Over generation / exports' },
    { name: 'H2 conversion' },
    { name: 'Road transport' },
    { name: 'Agriculture' },
    { name: 'Rail transport' },
    { name: 'Lighting & appliances - commercial' },
    { name: 'Lighting & appliances - homes' },
    { name: 'Gas imports' },
    { name: 'Ngas' },
    { name: 'Gas reserves' },
    { name: 'Thermal generation' },
    { name: 'Geothermal' },
    { name: 'H2' },
    { name: 'Hydro' },
    { name: 'International shipping' },
    { name: 'Domestic aviation' },
    { name: 'International aviation' },
    { name: 'National navigation' },
    { name: 'Marine algae' },
    { name: 'Nuclear' },
    { name: 'Oil imports' },
    { name: 'Oil' },
    { name: 'Oil reserves' },
    { name: 'Other waste' },
    { name: 'Pumped heat' },
    { name: 'Solar PV' },
    { name: 'Solar Thermal' },
    { name: 'Solar' },
    { name: 'Tidal' },
    { name: 'UK land based bioenergy' },
    { name: 'Wave' },
    { name: 'Wind' },
  ],
  links: [
    { source: 0, target: 1, value: 124.729 },
    { source: 1, target: 2, value: 0.597 },
    { source: 1, target: 3, value: 26.862 },
    { source: 1, target: 4, value: 280.322 },
    { source: 1, target: 5, value: 81.144 },
    { source: 6, target: 2, value: 35 },
    { source: 7, target: 4, value: 35 },
    { source: 8, target: 9, value: 11.606 },
    { source: 10, target: 9, value: 63.965 },
    { source: 9, target: 4, value: 75.571 },
    { source: 11, target: 12, value: 10.639 },
    { source: 11, target: 13, value: 22.505 },
    { source: 11, target: 14, value: 46.184 },
    { source: 15, target: 16, value: 104.453 },
    { source: 15, target: 14, value: 113.726 },
    { source: 15, target: 17, value: 27.14 },
    { source: 15, target: 12, value: 342.165 },
    { source: 15, target: 18, value: 37.797 },
    { source: 15, target: 19, value: 4.412 },
    { source: 15, target: 13, value: 40.858 },
    { source: 15, target: 3, value: 56.691 },
    { source: 15, target: 20, value: 7.863 },
    { source: 15, target: 21, value: 90.008 },
    { source: 15, target: 22, value: 93.494 },
    { source: 23, target: 24, value: 40.719 },
    { source: 25, target: 24, value: 82.233 },
    { source: 5, target: 13, value: 0.129 },
    { source: 5, target: 3, value: 1.401 },
    { source: 5, target: 26, value: 151.891 },
    { source: 5, target: 19, value: 2.096 },
    { source: 5, target: 12, value: 48.58 },
    { source: 27, target: 15, value: 7.013 },
    { source: 17, target: 28, value: 20.897 },
    { source: 17, target: 3, value: 6.242 },
    { source: 28, target: 18, value: 20.897 },
    { source: 29, target: 15, value: 6.995 },
    { source: 2, target: 12, value: 121.066 },
    { source: 2, target: 30, value: 128.69 },
    { source: 2, target: 18, value: 135.835 },
    { source: 2, target: 31, value: 14.458 },
    { source: 2, target: 32, value: 206.267 },
    { source: 2, target: 19, value: 3.64 },
    { source: 2, target: 33, value: 33.218 },
    { source: 2, target: 20, value: 4.413 },
    { source: 34, target: 1, value: 4.375 },
    { source: 24, target: 5, value: 122.952 },
    { source: 35, target: 26, value: 839.978 },
    { source: 36, target: 37, value: 504.287 },
    { source: 38, target: 37, value: 107.703 },
    { source: 37, target: 2, value: 611.99 },
    { source: 39, target: 4, value: 56.587 },
    { source: 39, target: 1, value: 77.81 },
    { source: 40, target: 14, value: 193.026 },
    { source: 40, target: 13, value: 70.672 },
    { source: 41, target: 15, value: 59.901 },
    { source: 42, target: 14, value: 19.263 },
    { source: 43, target: 42, value: 19.263 },
    { source: 43, target: 41, value: 59.901 },
    { source: 4, target: 19, value: 0.882 },
    { source: 4, target: 26, value: 400.12 },
    { source: 4, target: 12, value: 46.477 },
    { source: 26, target: 15, value: 525.531 },
    { source: 26, target: 3, value: 787.129 },
    { source: 26, target: 11, value: 79.329 },
    { source: 44, target: 15, value: 9.452 },
    { source: 45, target: 1, value: 182.01 },
    { source: 46, target: 15, value: 19.013 },
    { source: 47, target: 15, value: 289.366 },
  ],
};

export const exampleTreemapData = [
  {
    rank: '1',
    name: 'A',
    children: [
      { rank: '21', name: 'U', value: 12490887132 },
      { rank: '22', name: 'V', value: 10772738863 },
      { rank: '23', name: 'W', value: 8236223813 },
    ],
  },
  { rank: '2', name: 'B', value: 12490887132 },
  { rank: '3', name: 'C', value: 10772738863 },
  { rank: '4', name: 'D', value: 8236223813 },
  { rank: '5', name: 'E', value: 6583448127 },
  { rank: '6', name: 'F', value: 5834718183 },
  { rank: '7', name: 'G', value: 5559852006 },
  { rank: '8', name: 'H', value: 4651272674 },
  { rank: '9', name: 'I', value: 4248844205 },
  { rank: '10', name: 'J', value: 3862568602 },
  { rank: '11', name: 'K', value: 3803070009 },
  { rank: '12', name: 'L', value: 3480361169 },
  { rank: '13', name: 'M', value: 3476552989 },
  { rank: '14', name: 'N', value: 3147229713 },
  { rank: '15', name: 'O', value: 2907504853 },
  { rank: '16', name: 'P', value: 2555558916 },
  { rank: '17', name: 'Q', value: 2149183029 },
  { rank: '18', name: 'R', value: 2107468912 },
  { rank: '19', name: 'S', value: 2088055427 },
  { rank: '20', name: 'T', value: 1885463047 },
];

export const exampleSunburstData: SunburstData = {
  name: 'Root',
  value: 100,
  children: [
    {
      name: 'Child1',
      fill: '#264653',
      value: 30,
      children: [
        {
          name: 'third child',
          value: 10,
        },
      ],
    },
    {
      name: 'Child2',
      fill: '#2a9d8f',
      value: 20,
      children: [
        {
          name: 'another child',
          value: 10,
        },
      ],
    },
    {
      name: 'Child3',
      fill: '#e9c46a',
      value: 20,
    },
  ],
};

export const exampleRadarData = [
  { name: 'iPhone 3GS', value: 420, half: 210 },
  { name: 'iPhone 4', value: 460, half: 230 },
  { name: 'iPhone 4s', value: 999, half: 500 },
  { name: 'iPhone 5', value: 500, half: 250 },
  { name: 'iPhone 5s', value: 864, half: 432 },
  { name: 'iPhone 6', value: 650, half: 325 },
  { name: 'iPhone 6s', value: 765, half: 383 },
  { name: 'iPhone 5se', value: 365, half: 183 },
];

export const misbehavedData: ChartData = [
  { x: null },
  { x: 'Jan' },
  { x: undefined },
  { x: 'Feb' },
  { x: [] },
  { x: 'Mar' },
  { x: function anon() {} },
  { x: 'Apr' },
  { x: {} },
  { x: 'May' },
  { x: NaN },
  { x: 'Jun' },
  { x: new Map() },
  { x: 'Jul' },
  { x: Symbol.for('mock symbol') },
  { x: 'Aug' },
  { x: new Promise(() => {}) },
];

export const boxPlotData = [
  {
    min: 100,
    bottomWhisker: 100,
    bottomBox: 50,
    topBox: 200,
    topWhisker: 200,
    average: 150,
    size: 150,
  },
  {
    min: 200,
    bottomWhisker: 200,
    bottomBox: 200,
    topBox: 100,
    topWhisker: 100,
    average: 550,
    size: 250,
  },
  {
    min: 0,
    bottomWhisker: 200,
    bottomBox: 200,
    topBox: 200,
    topWhisker: 200,
    average: 400,
    size: 350,
  },
];

/**
 * Three Rings for the Elven-kings under the sky,
 * Seven for the Dwarf-lords in their halls of stone,
 * Nine for Mortal Men doomed to die,
 * One for the Dark Lord on his dark throne
 * In the Land of Mordor where the Shadows lie.
 * One Ring to rule them all, One Ring to find them,
 * One Ring to bring them all and in the darkness bind them
 * In the Land of Mordor where the Shadows lie.
 *
 * Lord of the Rings, J.R.R. Tolkien, 1954
 */
export const ringsData = [
  {
    name: 'Elves',
    rings: 3,
    fill: 'green',
  },
  {
    name: 'Dwarves',
    rings: 7,
    fill: 'blue',
  },
  {
    name: 'Humans',
    rings: 9,
    fill: 'red',
  },
  {
    name: 'Sauron',
    rings: 1,
    fill: 'black',
  },
];

export const pageDataWithFillColor = [
  {
    name: '18-24',
    uv: 31.47,
    pv: 2400,
    fill: '#8884d8',
  },
  {
    name: '25-29',
    uv: 26.69,
    pv: 4567,
    fill: '#83a6ed',
  },
  {
    name: '30-34',
    uv: 15.69,
    pv: 1398,
    fill: '#8dd1e1',
  },
  {
    name: '35-39',
    uv: 8.22,
    pv: 9800,
    fill: '#82ca9d',
  },
  {
    name: '40-49',
    uv: 8.63,
    pv: 3908,
    fill: '#a4de6c',
  },
  {
    name: '50+',
    uv: 2.63,
    pv: 4800,
    fill: '#d0ed57',
  },
  {
    name: 'unknown',
    uv: 6.67,
    pv: 4800,
    fill: '#ffc658',
  },
];

/**
 * PieChart, and RadialBarChar, have this specialty where they read properties `name` and `fill`
 * and use them to set labels, and to set legend colors.
 *
 * Other charts use `nameKey` and `fill` or `stroke` properties.
 */
export const dataWithSpecialNameAndFillProperties = [
  { name: 'name1', fill: 'fill1', value: 12 },
  { name: 'name2', fill: 'fill2', value: 34 },
  { name: 'name3', fill: 'fill3', value: 56 },
  { name: 'name4', fill: 'fill4', value: 78 },
];

export const numericalData = [
  { value: 'Luck', percent: 10 },
  { value: 'Skill', percent: 20 },
  { value: 'Concentrated power of will', percent: 15 },
  { value: 'Pleasure', percent: 50 },
  { value: 'Pain', percent: 50 },
  { value: 'Reason to remember the name', percent: 100 },
];
