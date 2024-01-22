import { render } from '@testing-library/react';
import React from 'react';
import { axe } from 'vitest-axe';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Brush,
  CartesianGrid,
  Funnel,
  FunnelChart,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Radar,
  RadarChart,
  RadialBar,
  RadialBarChart,
  Sankey,
  Scatter,
  ScatterChart,
  SunburstChart,
  Tooltip,
  Treemap,
  XAxis,
  YAxis,
} from '../../src';

const data = [
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 300, pv: 4567, amt: 2400 },
  { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
  { name: 'Page D', uv: 200, pv: 9800, amt: 2400 },
  { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
  { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
];

const sankeyData = {
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

const treemapData = [
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
const sunburstData = {
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
describe('Static scanning for accessibility markup issues', () => {
  test('Area chart', async () => {
    const { container } = render(
      <AreaChart width={100} height={50} data={data}>
        <Area type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300" />
      </AreaChart>,
    );
    expect((await axe(container)).violations).toHaveLength(0);
  });

  test.skip('chart with accessibilityLayer', async () => {
    const { container } = render(
      <AreaChart width={100} height={50} data={data} accessibilityLayer>
        <Area type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300" />
      </AreaChart>,
    );

    expect((await axe(container)).violations).toHaveLength(0);
  });

  test('Chart with tooltip, legend, axes, brush, grid, margins', async () => {
    const { container } = render(
      <AreaChart width={100} height={50} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Area type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300" />
        <Tooltip />
        <Legend />
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#f5f5f5" />
        <Brush />
      </AreaChart>,
    );
    expect((await axe(container)).violations).toHaveLength(0);
  });

  test('Bar chart', async () => {
    const { container } = render(
      <BarChart width={100} height={50} data={data}>
        <Bar dataKey="uv" fill="#ff7300" />
      </BarChart>,
    );
    expect((await axe(container)).violations).toHaveLength(0);
  });

  test.skip('Funnel chart', async () => {
    const { container } = render(
      <FunnelChart width={500} height={300}>
        <Funnel dataKey="value" data={data} />
      </FunnelChart>,
    );

    expect((await axe(container)).violations).toHaveLength(0);
  });

  test('Line chart', async () => {
    const { container } = render(
      <LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </LineChart>,
    );
    expect((await axe(container)).violations).toHaveLength(0);
  });

  test('Pie chart', async () => {
    const { container } = render(
      <PieChart width={800} height={400}>
        <Pie dataKey="value" data={[data[0]]} cx={200} cy={200} outerRadius={80} fill="#ff7300" label />
      </PieChart>,
    );
    expect((await axe(container)).violations).toHaveLength(0);
  });

  test('Radar chart', async () => {
    const { container } = render(
      <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
        <Radar dataKey="value" />
      </RadarChart>,
    );
    expect((await axe(container)).violations).toHaveLength(0);
  });

  test.skip('Radial bar chart', async () => {
    const { container } = render(
      <RadialBarChart
        width={500}
        height={300}
        cx={150}
        cy={150}
        innerRadius={20}
        outerRadius={140}
        barSize={10}
        data={data}
      >
        <RadialBar label={{ orientation: 'outer' }} background dataKey="uv" isAnimationActive={false} />
      </RadialBarChart>,
    );
    expect((await axe(container)).violations).toHaveLength(0);
  });

  test.skip('Sankey chart', async () => {
    const { container } = render(<Sankey width={1000} height={500} data={sankeyData} />);
    expect((await axe(container)).violations).toHaveLength(0);
  });

  test.skip('Scatter chart', async () => {
    const { container } = render(
      <ScatterChart width={400} height={400}>
        <XAxis dataKey="x" name="stature" unit="cm" />
        <YAxis dataKey="y" name="weight" unit="kg" />
        <Scatter line name="A school" data={data} fill="#ff7300" />
        <Tooltip />
      </ScatterChart>,
    );
    expect((await axe(container)).violations).toHaveLength(0);
  });

  test.skip('Sunburst', async () => {
    const { container } = render(<SunburstChart data={sunburstData} />);

    expect((await axe(container)).violations).toHaveLength(0);
  });

  test.skip('Treemap', async () => {
    const { container } = render(
      <Treemap width={500} height={250} data={treemapData} isAnimationActive={false} nameKey="name" dataKey="value" />,
    );

    expect((await axe(container)).violations).toHaveLength(0);
  });
});
